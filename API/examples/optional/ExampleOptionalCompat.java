package example.device;

import java.lang.reflect.InvocationTargetException;
import java.util.Objects;
import java.util.UUID;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.item.ItemStack;

/** 核心侧门面不静态引用 AFN 类型；在 common setup 调用一次，不要放在 tick 中。 */
public final class ExampleOptionalCompat {
    private static final OptionalChannel.Factory UNAVAILABLE =
            (level, position, first, second, deviceId, channelId) ->
                    OptionalChannel.unavailable();
    private static volatile OptionalChannel.Factory factory = UNAVAILABLE;

    private ExampleOptionalCompat() {
    }

    public static void init(boolean afnModLoaded) {
        if (!afnModLoaded) {
            factory = UNAVAILABLE;
            return;
        }
        try {
            Class<?> adapter = Class.forName(
                    "example.device.AfnChannelAdapter",
                    true,
                    ExampleOptionalCompat.class.getClassLoader());
            Object candidate = adapter.getDeclaredConstructor().newInstance();
            factory = candidate instanceof OptionalChannel.Factory compatible
                    ? compatible : UNAVAILABLE;
        } catch (ClassNotFoundException | NoSuchMethodException
                 | InstantiationException | IllegalAccessException
                 | InvocationTargetException | LinkageError | SecurityException ignored) {
            factory = UNAVAILABLE;
        }
    }

    public static boolean available() {
        return factory != UNAVAILABLE;
    }

    /**
     * 逻辑设备加载时由所属服务端主线程调用。这里及后续信号热路径都不再反射。
     */
    public static OptionalChannel open(ServerLevel level, BlockPos position,
                                       ItemStack firstFrequency, ItemStack secondFrequency,
                                       UUID deviceId, UUID channelId) {
        try {
            OptionalChannel result = factory.open(
                    Objects.requireNonNull(level, "level"),
                    Objects.requireNonNull(position, "position"),
                    firstFrequency == null ? ItemStack.EMPTY : firstFrequency,
                    secondFrequency == null ? ItemStack.EMPTY : secondFrequency,
                    Objects.requireNonNull(deviceId, "deviceId"),
                    Objects.requireNonNull(channelId, "channelId"));
            return result == null ? OptionalChannel.unavailable() : result;
        } catch (RuntimeException | LinkageError ignored) {
            // 版本不匹配或可选配置异常时，适配器不能影响基础模组。
            return OptionalChannel.unavailable();
        }
    }
}

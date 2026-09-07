package example.device;

import java.util.Objects;
import java.util.UUID;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.item.ItemStack;

/**
 * 无论是否安装 AFN，普通代码都使用的附属自有接口。本类型不引用
 * {@code com.createafn} 类型。
 */
public interface OptionalChannel extends AutoCloseable {
    void moveTo(ServerLevel level, BlockPos position);

    void setFrequencies(ItemStack first, ItemStack second);

    /** 文本为 null 时清除可选值，但保留信号强度。 */
    void transmit(int strength, String text);

    Snapshot reception();

    /** 临时释放 live actor，不删除持久状态。 */
    void detach();

    /** 永久删除此逻辑信道。 */
    @Override
    void close();

    /** AFN 接收快照的不可变附属投影。 */
    record Snapshot(int strength, String text, long changeVersion) {
        public Snapshot {
            if (strength < 0 || strength > 15 || changeVersion < 0L) {
                throw new IllegalArgumentException("可选信道快照无效");
            }
        }
    }

    /**
     * 在 common setup 阶段安装一次的策略。核心设备代码只依赖本接口，不依赖
     * 反射加载的 AFN 适配器类。
     */
    @FunctionalInterface
    interface Factory {
        OptionalChannel open(ServerLevel level, BlockPos position,
                             ItemStack firstFrequency, ItemStack secondFrequency,
                             UUID deviceId, UUID channelId);
    }

    static OptionalChannel unavailable() {
        return Unavailable.INSTANCE;
    }

    final class Unavailable implements OptionalChannel {
        private static final Unavailable INSTANCE = new Unavailable();
        private static final Snapshot EMPTY = new Snapshot(0, null, 0L);

        private Unavailable() {
        }

        @Override
        public void moveTo(ServerLevel level, BlockPos position) {
            Objects.requireNonNull(level, "level");
            Objects.requireNonNull(position, "position");
        }

        @Override
        public void setFrequencies(ItemStack first, ItemStack second) {
            // 没有 AFN 时基础设备仍保持可用。
        }

        @Override
        public void transmit(int strength, String text) {
            // 空实现；附属可以继续自己的非 AFN 行为。
        }

        @Override
        public Snapshot reception() {
            return EMPTY;
        }

        @Override
        public void detach() {
            // 单例不持有运行时资源。
        }

        @Override
        public void close() {
            // 单例不持有运行时资源。
        }
    }
}

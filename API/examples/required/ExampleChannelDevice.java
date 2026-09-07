package example.device;

import com.createafn.api.channel.AFNChannelApi;
import com.createafn.api.channel.ChannelEndpoint;
import com.createafn.api.channel.ChannelFrequencyPair;
import com.createafn.api.channel.ChannelIdentity;
import com.createafn.api.channel.ChannelMode;
import com.createafn.api.channel.ChannelReception;
import com.createafn.api.channel.ChannelValue;
import com.createafn.api.channel.LongSignalStatus;
import java.util.Objects;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.server.level.ServerPlayer;

/**
 * 仅用于编译示范的设备。宿主模组负责持久化和注册；本类只使用公共 API。
 */
public final class ExampleChannelDevice {
    private ChannelEndpoint endpoint;
    private ChannelIdentity identity;
    /* 保存重建 detached 句柄所需的数据。临时卸载可以丢弃 Java 句柄，永久删除
       仍须用相同逻辑身份调用 close()。 */
    private ChannelFrequencyPair frequencies = ChannelFrequencyPair.empty();
    private ChannelMode mode = ChannelMode.TRANSCEIVE;
    private long observedVersion = -1L;
    private int lastStrength;
    private ChannelValue lastValue;

    public void load(ServerLevel level, BlockPos position,
                     ChannelFrequencyPair pair, ChannelIdentity savedIdentity,
                     boolean savedLongSignalOptIn) {
        load(level, position, pair, savedIdentity, ChannelMode.TRANSCEIVE,
                savedLongSignalOptIn);
    }

    /** 为持久化其他方向的设备提供重载；频率和 UUID 必须来自服务端设备数据。 */
    public void load(ServerLevel level, BlockPos position,
                     ChannelFrequencyPair pair, ChannelIdentity savedIdentity,
                     ChannelMode savedMode, boolean savedLongSignalOptIn) {
        Objects.requireNonNull(level, "level");
        Objects.requireNonNull(position, "position");
        frequencies = Objects.requireNonNull(pair, "pair");
        identity = Objects.requireNonNull(savedIdentity, "savedIdentity");
        mode = Objects.requireNonNull(savedMode, "savedMode");
        resetEndpointCaches();
        endpoint = AFNChannelApi.createEndpoint(level, position, pair,
                mode, identity);
        endpoint.attach();
        if (savedLongSignalOptIn) {
            LongSignalStatus restored = endpoint.restoreLongSignal();
            if (!restored.registered()) {
                clearPersistedLongSignalOptIn();
            }
        }
    }

    public void tickServerThread() {
        if (endpoint == null) {
            // 卸载设备不应继续 tick；此保护可避免拆卸期间的延迟调用造成影响。
            return;
        }
        ChannelReception reception = endpoint.reception();
        if (reception.changeVersion() == observedVersion) {
            return;
        }
        observedVersion = reception.changeVersion();
        applyStrength(reception.strength());
        reception.value().ifPresent(value -> applyValue(value.value()));
    }

    public void setOutput(int strength, ChannelValue value) {
        if (endpoint == null) {
            return;
        }
        if (strength == lastStrength && Objects.equals(lastValue, value)) {
            return;
        }
        endpoint.setTransmission(strength, value);
        lastStrength = strength;
        lastValue = value;
    }

    /** 普通区块卸载路径；不能因此撤销长信号。 */
    public void unloadTemporarily() {
        if (endpoint != null) {
            endpoint.detach();
            endpoint = null;
        }
    }

    /** 由已验证的真实服务端玩家配置操作调用。 */
    public LongSignalStatus enableLongSignal(ServerPlayer player) {
        LongSignalStatus status = requireEndpoint().requestLongSignal(player);
        if (status.registered()) {
            persistLongSignalOptIn();
        }
        return status;
    }

    public LongSignalStatus disableLongSignal() {
        LongSignalStatus status = requireEndpoint().disableLongSignal();
        // 持久删除被拒时保留登记，后续可以重试，不会丢失额度状态。
        if (!status.registered()) {
            clearPersistedLongSignalOptIn();
        }
        return status;
    }

    /** 仅在逻辑设备或信道永久删除时调用。 */
    public void removePermanently() {
        if (endpoint == null) {
            throw new IllegalStateException(
                    "A detached endpoint needs ServerLevel and BlockPos; "
                            + "call removePermanently(level, position)");
        }
        closeAndForgetEndpoint();
    }

    /**
     * 方块实体先卸载后永久删除时的路径。原句柄已丢失时，用真实位置和持久频率
     * 重建 detached endpoint，再在所属服务端主线程撤销登记。
     */
    public void removePermanently(ServerLevel level, BlockPos position) {
        Objects.requireNonNull(level, "level");
        Objects.requireNonNull(position, "position");
        if (endpoint == null) {
            if (identity == null) {
                clearPersistedLongSignalOptIn();
                return;
            }
            endpoint = AFNChannelApi.createEndpoint(
                    level, position, frequencies, mode, identity);
        }
        closeAndForgetEndpoint();
    }

    private ChannelEndpoint requireEndpoint() {
        if (endpoint == null) {
            throw new IllegalStateException(
                    "信道 endpoint 当前已临时卸载，请先重新加载");
        }
        return endpoint;
    }

    private void closeAndForgetEndpoint() {
        endpoint.close();
        if (endpoint.closed()) {
            endpoint = null;
            clearPersistedLongSignalOptIn();
        }
    }

    private void resetEndpointCaches() {
        observedVersion = -1L;
        lastStrength = -1;
        lastValue = null;
    }

    private void applyStrength(int strength) {
        // 在这里更新示例设备自身的方块状态。
    }

    private void applyValue(ChannelValue value) {
        // 在这里保存或显示收到的值；不要无条件重新发送。
    }

    private void persistLongSignalOptIn() {
        // 只保存附属自己的启用布尔值，不保存 AFN 票据或令牌。
    }

    private void clearPersistedLongSignalOptIn() {
        // 清除所属设备数据中的附属启用布尔值。
    }
}

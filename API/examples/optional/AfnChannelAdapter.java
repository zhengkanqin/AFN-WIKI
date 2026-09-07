package example.device;

import com.createafn.api.channel.AFNChannelApi;
import com.createafn.api.channel.ChannelCapability;
import com.createafn.api.channel.ChannelEndpoint;
import com.createafn.api.channel.ChannelFrequencyPair;
import com.createafn.api.channel.ChannelIdentity;
import com.createafn.api.channel.ChannelMode;
import com.createafn.api.channel.ChannelReception;
import com.createafn.api.channel.ChannelValue;
import java.util.UUID;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.item.ItemStack;

/** 由可选兼容层延迟加载和实例化。 */
public final class AfnChannelAdapter implements OptionalChannel.Factory {
    public AfnChannelAdapter() {
    }

    @Override
    public OptionalChannel open(ServerLevel level, BlockPos position,
                                ItemStack firstFrequency, ItemStack secondFrequency,
                                UUID deviceId, UUID channelId) {
        if (!AFNChannelApi.supports(1, 0)
                || !AFNChannelApi.supports(ChannelCapability.TYPED_VALUES)) {
            return OptionalChannel.unavailable();
        }
        ChannelEndpoint endpoint = AFNChannelApi.createEndpoint(
                level, position, ChannelFrequencyPair.of(firstFrequency, secondFrequency),
                ChannelMode.TRANSCEIVE, new ChannelIdentity(deviceId, channelId));
        endpoint.attach();
        return new LiveChannel(endpoint);
    }

    private static final class LiveChannel implements OptionalChannel {
        private final ChannelEndpoint endpoint;
        private Snapshot snapshot = new Snapshot(0, null, 0L);
        private long observedVersion = Long.MIN_VALUE;

        private LiveChannel(ChannelEndpoint endpoint) {
            this.endpoint = endpoint;
        }

        @Override
        public void moveTo(ServerLevel level, BlockPos position) {
            endpoint.moveTo(level, position);
        }

        @Override
        public void setFrequencies(ItemStack first, ItemStack second) {
            endpoint.setFrequencies(ChannelFrequencyPair.of(first, second));
        }

        @Override
        public void transmit(int strength, String text) {
            endpoint.setTransmission(strength,
                    text == null ? null : ChannelValue.text(text));
        }

        @Override
        public Snapshot reception() {
            ChannelReception current = endpoint.reception();
            if (current.changeVersion() == observedVersion) {
                return snapshot;
            }
            observedVersion = current.changeVersion();
            String text = current.value()
                    .map(received -> ChannelValue.asText(received.value()))
                    .orElse(null);
            snapshot = new Snapshot(current.strength(), text, observedVersion);
            return snapshot;
        }

        @Override
        public void detach() {
            endpoint.detach();
        }

        @Override
        public void close() {
            endpoint.close();
        }
    }
}

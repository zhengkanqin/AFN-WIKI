# 快速开始

适用环境：Minecraft 1.21.1、NeoForge、Java 21、Create 6.x、AFN 1.1.6+。

## 1. 依赖

```groovy
dependencies {
    compileOnly files("libs/create_afn-channel-api.jar")
}
```

API JAR 仅参与编译；开发运行目录安装完整 AFN。

AFN 为必需依赖：

```toml
[[dependencies.your_mod_id]]
modId="create_afn"
type="required"
versionRange="[1.1.6,)"
ordering="AFTER"
side="BOTH"
```

可选接入将 `type` 改为 `optional`，并使用 [可选依赖示例](examples/optional/README.md) 的延迟加载方式。

## 2. 身份和频率

设备持久化一个 `deviceId`，每条信道持久化一个不同的 `channelId`：

```java
UUID deviceId = loadOrCreateDeviceId();
ChannelIdentity identity = ChannelIdentity.named(deviceId, "main");

ChannelFrequencyPair frequencies = ChannelFrequencyPair.of(
        firstFrequencySlot.getItem(),
        secondFrequencySlot.getItem());
```

必须使用服务端真实槽位。不要根据名称或显示文本重建频段板。UUID 不能在加载或 tick 时重新生成。

## 3. 创建 Endpoint

```java
ChannelEndpoint endpoint = AFNChannelApi.createEndpoint(
        serverLevel,
        worldPosition,
        frequencies,
        ChannelMode.TRANSCEIVE,
        identity);
endpoint.attach();
```

所有 endpoint 方法都在所属服务器主线程调用。空频率或无效配置会保持休眠，之后可通过 `setFrequencies(...)` 激活。

模式：

- `SEND`：发送；
- `RECEIVE`：接收；
- `TRANSCEIVE`：收发。

## 4. 发送

```java
endpoint.setTransmission(15, ChannelValue.text("ready"));
endpoint.setTransmission(8, ChannelValue.location(x, y, z));
endpoint.setTransmission(0, null);
```

强度范围为 0～15。可发送的值：

```java
ChannelValue.real(12.5);
ChannelValue.real(1.0, 2.0, 3.0, 4.0);
ChannelValue.location(x, y, z);
ChannelValue.text("ready");
ChannelValue.bool(true);
```

只在强度或值变化时提交。不要用重复写入维持在线。

## 5. 接收

```java
ChannelReception current = endpoint.reception();
if (current.changeVersion() != observedVersion) {
    observedVersion = current.changeVersion();
    updateRedstone(current.strength());
    current.value().ifPresentOrElse(
            value -> acceptValue(value.value()),
            this::clearDisplayedValue);
}
```

`strength()` 是匹配信号中的最高强度。类型值包含来源 UUID、来源强度和 revision。空值不要求清除设备自身的持久数据。

## 6. 更新配置

```java
endpoint.setMode(ChannelMode.RECEIVE);
endpoint.setFrequencies(ChannelFrequencyPair.of(first, second));
endpoint.moveTo(newLevel, newPosition);
```

只在状态实际变化时调用。`moveTo` 仅支持同一 `MinecraftServer`。

## 7. 鉴权

```java
ChannelAccess access = AFNChannelApi.accessFor(frequencies, player.getUUID());
if (!access.canRead()) {
    return;
}

boolean editable = access.canWrite()
        && player.mayBuild()
        && claimAllows(player, worldPosition)
        && menuStillValid(player);
```

多块鉴权板取权限交集。`accessFor(...)` 不检查领地、距离、旁观者、菜单或物品归属，这些由设备在服务端补充验证。普通信号运行不依赖当前操作者。

## 8. 生命周期

临时卸载：

```java
endpoint.detach();
endpoint = null;
```

重新加载时使用原 UUID 创建并重新挂载。设备或信道永久删除时调用：

```java
endpoint.close();
endpoint = null;
```

重建 endpoint 后清空发送去重和接收版本缓存，并重新提交设备当前的发送状态。

`close()` 会删除该信道的长信号登记。若永久删除发生在 handle 已释放之后，应使用持久化身份、频率、模式和真实位置重建一个 detached endpoint，再立即 `close()`。

## 9. 长信号

```java
if (AFNChannelApi.supports(ChannelCapability.LONG_SIGNAL)) {
    LongSignalStatus status = endpoint.requestLongSignal(serverPlayer);
    if (status.registered()) {
        saveLongSignalEnabled(true);
    }
}
```

调用前先完成设备自己的交互验证，并确认频率槽中至少有一块已绑定且有效的鉴权频段板。AFN 从真实鉴权板计算 Owner，并按 `deviceId` 聚合设备额度。附属不能指定 Owner、额度、加载区块或物理结构。

加载已启用设备：

```java
LongSignalStatus status = endpoint.restoreLongSignal();
if (!status.registered()) {
    saveLongSignalEnabled(false);
}
```

主动关闭：

```java
LongSignalStatus status = endpoint.disableLongSignal();
if (!status.registered()) {
    saveLongSignalEnabled(false);
}
```

若 `status.registered()` 仍为 `true`，说明删除尚未完成，应保留启用状态并在后续生命周期事件重试。

状态字段：

- `requested()`：当前 handle 已请求长信号；
- `registered()`：AFN 中存在持久登记；
- `effective()`：当前已准入并挂载；
- `reason()`：诊断原因。

额度超限、鉴权失效、功能关闭或物理结构暂不可用时，普通短信号继续工作。发送端和接收端都需独立登记。

同一设备的多条长信号共享 `deviceId`，使用不同 `channelId`，并保持相同锚点、物理结构身份和主 Owner。AFN 只结算一次该设备的真实鉴权组合；不同逻辑设备应使用不同的 `deviceId`，重复身份由服务端拒绝。

## 10. 发布检查

- 附属 JAR 不含 `com/createafn/**`；
- 临时卸载使用 `detach()`，永久删除使用 `close()`；
- 频率和权限均以服务端槽位为准；
- 接收只处理新的 `changeVersion()`；
- 可选模式测试无 AFN 启动；
- 测试专用服务端。

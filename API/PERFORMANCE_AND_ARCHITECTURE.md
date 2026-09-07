# 性能建议

## Endpoint 生命周期

每个“已加载设备 × 逻辑信道”保留一个 `ChannelEndpoint`：

| 事件 | 调用 |
|---|---|
| 加载 | 创建一次并 `attach()` |
| 输出变化 | `setTransmission(...)` |
| 频率变化 | `setFrequencies(...)` |
| 模式变化 | `setMode(...)` |
| 位置变化 | `moveTo(...)` |
| 临时卸载 | `detach()` |
| 永久删除 | `close()` |

不要每 tick 创建、关闭或重新配置 endpoint。频率槽快照应由槽位变化事件更新。
重新创建 endpoint 时清空去重缓存，并向新句柄提交一次设备当前的发送状态。

## 发送

只提交变化：

```java
if (strength != lastStrength || !Objects.equals(value, lastValue)) {
    endpoint.setTransmission(strength, value);
    lastStrength = strength;
    lastValue = value;
}
```

不要发送相同值作为心跳，也不要反复生成来源 UUID。

## 接收

`reception()` 的稳态读取为 O(1)。通过版本号跳过下游更新：

```java
ChannelReception next = endpoint.reception();
if (next.changeVersion() == observedVersion) {
    return;
}
observedVersion = next.changeVersion();
```

版本未变化时不要重复写 NBT、更新方块状态、通知邻居或同步客户端。设备允许延迟时可每 2～10 tick 读取一次。

## 频率与鉴权

- `ChannelFrequencyPair` 只在服务端槽位变化时创建。
- `accessFor(...)` 用于打开和提交 GUI，不进入信号 tick。
- 不解析频段文本或鉴权板 NBT，不扫描区块寻找发送端。
- 不把接收值无条件回发到相同信道。

## 长信号

首次申请、恢复和关闭都应由明确的生命周期事件触发，不得每 tick 调用。稳态发送继续通过 `setTransmission(...)` 变化驱动，不需要保活心跳。

AFN 统一处理额度、远程索引、加载租约和延迟释放。附属不要扫描世界、添加区块票据或调用 `com.createafn.remote`。申请被拒绝时保持普通短信号运行。

同一设备有多条长信号时，共用 `deviceId`，各信道使用不同 `channelId`；AFN 只结算一次该设备的真实鉴权组合。只有真实位置变化时才调用 `moveTo(...)`。

## 可选依赖

AFN 未安装时不应注册相关 endpoint、tick listener 或缓存。模组初始化时检查一次，然后使用已选定的适配实现或空实现；不要在 tick 中反复检查 `ModList` 或使用反射。

## 线程

endpoint 的创建、配置、发送、接收和释放均在所属服务器主线程完成。异步任务只能准备附属自己的数据，最终结果应在主线程提交。

## 检查项

- 三种 `ChannelMode` 及运行时切换；
- 空槽、单槽、双槽、普通板与鉴权板；
- 强度 0、1、15 和三类 `ChannelValue`；
- 同强度多发送端的稳定结果；
- 临时卸载、重载、永久删除和服务器重启；
- 长信号获准、超额、恢复、Owner 清理和释放；
- 可选接入在无 AFN 环境中启动；
- 专用服务端启动；
- 高频输入下仅在变化时写盘和同步。

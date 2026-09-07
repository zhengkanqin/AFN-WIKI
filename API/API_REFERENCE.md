# AFN Channel API 1.1 参考

公共包：`com.createafn.api.channel`。最低 AFN 版本：`1.1.6+`。完整成员说明以 API Javadoc 为准。

## `AFNChannelApi`

| 成员 | 说明 |
|---|---|
| `API_MAJOR`, `API_MINOR` | API 版本，目前为 `1.1` |
| `supports(int, int)` | 检查 major 和最低 minor |
| `supports(ChannelCapability)` | 检查能力 |
| `createEndpoint(...)` | 创建 detached 的服务端 endpoint |
| `isUsable(pair)` | 检查频率对能否参与 AFN 信道 |
| `isFrequencyBoard(stack)` | 判断 AFN 频段板 |
| `isAuthenticatedFrequencyBoard(stack)` | 判断鉴权频段板 |
| `accessFor(pair, playerId)` | 计算鉴权板权限交集 |

`ChannelEndpoint` 由 AFN 创建，附属只持有和调用。

## `ChannelCapability`

- `SIGNAL_STRENGTH`：0～15 红石强度；
- `TYPED_VALUES`：类型化值；
- `DYNAMIC_MODE`：运行时切换收发模式；
- `LONG_SIGNAL`：由 AFN 托管的长信号。

## `ChannelFrequencyPair`

```java
ChannelFrequencyPair.of(first, second);
ChannelFrequencyPair.single(first);
ChannelFrequencyPair.empty();
```

频率对是两个服务端 `ItemStack` 的不可变副本，数量会规范为 1。至少一槽须为有效 AFN 频段板。鉴权设备必须传入真实槽位内容。

## `ChannelIdentity`

```java
ChannelIdentity.random();
ChannelIdentity.named(deviceId, "main");
```

- `deviceId`：设备 UUID；
- `channelId`：信道 UUID。

同一设备的多条信道共享 `deviceId`，各自使用不同且持久化的 `channelId`。不同逻辑设备应使用不同的 `deviceId`；AFN 会拒绝同时出现在不同位置或 Owner 下的重复身份。

## `ChannelMode`

| 模式 | 发送 | 接收 |
|---|---:|---:|
| `SEND` | 是 | 否 |
| `RECEIVE` | 否 | 是 |
| `TRANSCEIVE` | 是 | 是 |

## `ChannelEndpoint`

### 状态

| 方法 | 说明 |
|---|---|
| `identity()` | 持久身份 |
| `mode()` | 当前模式 |
| `frequencies()` | 当前频率副本 |
| `configured()` | 频率配置是否有效 |
| `attachmentRequested()` | 是否请求挂载 |
| `attached()` | 是否已有发送或接收 actor |
| `closed()` | 是否永久关闭 |

### 生命周期和配置

| 方法 | 说明 |
|---|---|
| `attach()` | 挂载；无效频率会保持休眠 |
| `detach()` | 临时解除挂载，保留长信号登记 |
| `close()` | 永久删除该信道及其长信号登记；删除未完成时可重试 |
| `setMode(mode)` | 修改收发模式 |
| `setFrequencies(pair)` | 原子替换两个频率槽快照 |
| `moveTo(level, pos)` | 更新同一服务器内的位置 |

所有调用均在所属服务器主线程执行。

### 发送

```java
endpoint.setTransmission(15, ChannelValue.text("ready"));
endpoint.setTransmittedStrength(8);
endpoint.setTransmittedValue(ChannelValue.bool(true));
endpoint.clearTransmittedValue();
```

| 方法 | 说明 |
|---|---|
| `setTransmission(strength, value)` | 同时更新强度和值 |
| `transmittedStrength()` | 当前发送强度 |
| `transmittedValue()` | 当前发送值 |
| `transmissionRevision()` | 值的本地 revision；仅值变化时增加 |

强度范围为 0～15。`null` 表示不携带类型值。

### 接收

`reception()` 返回 `ChannelReception`：

- `strength()`：最高匹配强度；
- `value()`：当前胜出的类型值；
- `changeVersion()`：接收结果版本。

`ChannelReceivedValue` 包含来源设备 UUID、来源信道 UUID、revision、来源强度和值。最高红石强度和胜出类型值可能来自不同发送端。

## `ChannelValue`

```java
ChannelValue.real(3.5);
ChannelValue.real(1, 2, 3, 4);
ChannelValue.location(x, y, z);
ChannelValue.text("hello");
ChannelValue.bool(false);
```

- `REAL`：1～7 个有限实数；
- `TEXT`：最多 1024 个 code point、4096 UTF-8 字节；
- `BOOLEAN`：布尔值；
- 三元 `REAL` 可作为坐标；
- `ChannelValue.asText(value)` 返回稳定文本表示。

## `ChannelAccess`

```java
ChannelAccess access = AFNChannelApi.accessFor(pair, player.getUUID());
```

- `authenticated()`：频率对中是否有鉴权板；
- `canRead()`：读取权限；
- `canWrite()`：写入权限。

多块鉴权板取交集。设备仍需自行检查 `mayBuild`、领地、距离和菜单有效性。

## 长信号

### 方法

| 方法 | 说明 |
|---|---|
| `requestLongSignal(ServerPlayer)` | 首次申请 |
| `restoreLongSignal()` | 恢复已有登记，不创建新授权 |
| `disableLongSignal()` | 删除登记并释放租约 |
| `longSignalStatus()` | 查询状态 |

长信号至少需要一块已绑定且有效的鉴权频段板。AFN 从真实频率槽读取鉴权 Owner，并按 `deviceId` 聚合设备额度。同一设备的多条长信号只结算一次真实鉴权组合，不按信道重复计算。调用方不能指定 Owner、额度、区块票据或物理结构租约。

仅在 `registered()` 为 `true` 时保存启用状态。长信号失败不会关闭普通短信号。

### `LongSignalStatus`

- `requested()`：当前 handle 已请求；
- `registered()`：存在持久登记；
- `effective()`：已准入并挂载；
- `reason()`：诊断原因。

### `LongSignalReason`

| 值 | 说明 |
|---|---|
| `NOT_REQUESTED` | 未请求或已主动关闭 |
| `ACTIVE` | 正常工作 |
| `DETACHED` | 登记保留，当前未挂载 |
| `FEATURE_DISABLED` | 服务端关闭长信号 |
| `INVALID_CHANNEL` | 频率无效 |
| `AUTHENTICATION_REQUIRED` | 缺少鉴权板 |
| `AUTHENTICATION_UNBOUND` | 鉴权板未完成绑定 |
| `NO_WRITE_PERMISSION` | 申请者无写入权限 |
| `OWNER_QUOTA_EXCEEDED` | Owner 额度不足 |
| `REGISTRATION_MISSING` | 登记不存在 |
| `PHYSICAL_UNAVAILABLE` | 物理结构暂不可用 |
| `REGISTRATION_REJECTED` | 其他登记失败 |
| `CLOSED` | endpoint 已关闭 |

后续兼容 minor 可能增加诊断值，展示代码应提供默认处理。

### 恢复与释放

1. 首次申请成功后保存附属自己的启用布尔值；
2. 临时卸载调用 `detach()`；
3. 重载后使用原 UUID 创建 endpoint，再调用 `restoreLongSignal()`；
4. 恢复结果未登记时清除启用布尔值；
5. 主动关闭调用 `disableLongSignal()`；
6. 永久删除调用 `close()`；若删除未完成，`closed()` 仍为 `false`，应保留句柄并重试。

同一设备的多条长信号必须共享 `deviceId`，保持相同锚点、物理结构身份和主 Owner，并各自使用不同的 `channelId`。这些约束由 AFN 服务端校验。

## 常见异常

- 参数为 `null`：`NullPointerException`；
- UUID、强度、值或文本无效：`IllegalArgumentException`；
- endpoint 已关闭、模式不允许发送或线程错误：`IllegalStateException`；
- 跨服务器调用 `moveTo`：`IllegalArgumentException`。

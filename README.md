# AFN 桥接器 × CC:Tweaked

AFN 的 CC:Tweaked 兼容围绕 `create_afn:afn_bridge` 外设工作。普通 CC 电脑、乌龟或随身电脑通过相邻连接或有线调制解调器访问桥接器；电脑本身不会变成无线红石发射器。

```lua
local afn = require("afn")

local channel = afn.get("yard_gate")
if channel then
  print(channel.type, channel.active, channel.strength)
end

local result = afn.pulse("yard_gate", 15, 20)
if not result.success then printError(result.error) end
```

桥接器提供三组彼此独立的 CC 权限：读取、激活、持久配置。普通频段信号使用桥接器信道内的频段；临时发送也由桥接器创建。需要鉴权时，只能选择附加桥接器槽内的有效鉴权板，Lua 无法伪造 Owner、UUID、ACL 或鉴权主频。

CC:Tweaked 与 Synaxis 都是可选依赖：只装 AFN 时桥接器仍保留 GUI、CRT、实体按钮、原版红石输入和普通/鉴权 AFN 无线发送能力。安装兼容的 Synaxis 1.4.2/1.4.3 后，后面板拖拽坐标会同步控制世界端口的显示、命中和接线锚点，同时保留稳定端口 ID、Schema 与既有接线；遇到不兼容的 Synaxis 内部变化时回退默认布局。

## 文档

- [完整函数手册](./wiki/cctweaked/FUNCTIONS.md)：每个函数的参数、返回值、成功示例、失败示例、事件与错误码。
- [像素风 Wiki](./index.html)：适合在浏览器中检索和阅读。

## 精确函数索引

### 发现与查询

| 函数 | 用途 |
| --- | --- |
| [`afn.find([name])`](./FUNCTIONS.md#afnfind) | 找到第一台或指定 `afn_bridge` |
| [`afn.channels([bridge])`](./FUNCTIONS.md#afnchannels) | 完整信道列表 |
| [`afn.active([bridge])`](./FUNCTIONS.md#afnactive) | 当前激活信道名 |
| [`afn.display_channels([bridge])`](./FUNCTIONS.md#afndisplay_channels) | CRT 展示清单与轮播顺序 |
| [`afn.get(channel[, bridge])`](./FUNCTIONS.md#afnget) | 完整信道快照 |
| [`afn.state(channel[, bridge])`](./FUNCTIONS.md#afnstate) | 精简运行状态 |
| [`afn.information(channel[, bridge])`](./FUNCTIONS.md#afninformation) | information 值、子类和 revision |
| [`afn.last_error(channel[, bridge])`](./FUNCTIONS.md#afnlast_error) | 最近无线错误 |

### CRT 主屏幕

| 函数 | 用途 |
| --- | --- |
| [`afn.get_display_channel([bridge])`](./FUNCTIONS.md#afnget_display_channel) | 当前屏幕信道 |
| [`afn.set_display_channel(channel[, bridge])`](./FUNCTIONS.md#afnset_display_channel) | 选择屏幕信道 |
| [`afn.next_display_channel([bridge])`](./FUNCTIONS.md#afnnext_display_channel) | 下一项 |
| [`afn.previous_display_channel([bridge])`](./FUNCTIONS.md#afnprevious_display_channel) | 上一项 |

### 运行时控制

| 函数 | 用途 |
| --- | --- |
| [`afn.set(channel[, strength[, bridge]])`](./FUNCTIONS.md#afnset) | 本电脑持续激活一条信道 |
| [`afn.pulse(channel[, strength[, ticks[, bridge]]])`](./FUNCTIONS.md#afnpulse) | 本电脑定时激活一条信道 |
| [`afn.toggle(channel[, strength[, bridge]])`](./FUNCTIONS.md#afntoggle) | 切换本电脑的持续租约 |
| [`afn.clear(channel[, bridge])`](./FUNCTIONS.md#afnclear) | 清本电脑在目标信道上的租约 |
| [`afn.clear_all(channel[, bridge])`](./FUNCTIONS.md#afnclear_all) | 清目标信道所有来源 |
| [`afn.set_information(channel, value[, revision[, bridge]])`](./FUNCTIONS.md#afnset_information) | 乐观并发写 information |

### 展示与持久配置

| 函数 | 用途 |
| --- | --- |
| [`afn.set_channel_displayed(channel, shown[, bridge])`](./FUNCTIONS.md#afnset_channel_displayed) | 单条展示勾选 |
| [`afn.set_display_channels(names[, bridge])`](./FUNCTIONS.md#afnset_display_channels) | 原子覆写展示清单与顺序 |
| [`afn.create_channel(definition[, bridge])`](./FUNCTIONS.md#afncreate_channel) | 新建 frequency/information 信道 |
| [`afn.update_channel(channel, changes[, bridge])`](./FUNCTIONS.md#afnupdate_channel) | 原子修改信道 |
| [`afn.remove_channel(channel[, bridge])`](./FUNCTIONS.md#afnremove_channel) | 删除信道 |
| [`afn.set_channel_type(channel, type[, replacement[, bridge]])`](./FUNCTIONS.md#afnset_channel_type) | 切换 frequency/information |
| [`afn.set_enabled(channel, enabled[, bridge])`](./FUNCTIONS.md#afnset_enabled) | 启用或禁用 |
| [`afn.set_information_subtype(channel, subtype[, replacement[, bridge]])`](./FUNCTIONS.md#afnset_information_subtype) | 切换 information 子类 |

### Synaxis、红石与临时发送

| 函数 | 用途 |
| --- | --- |
| [`afn.set_synaxis_receive(channel, enabled[, format[, x, y[, bridge]]])`](./FUNCTIONS.md#afnset_synaxis_receive) | Synaxis → 桥接器端口 |
| [`afn.set_synaxis_publish(channel, enabled[, format[, x, y[, bridge]]])`](./FUNCTIONS.md#afnset_synaxis_publish) | 桥接器 → Synaxis 端口 |
| [`afn.bind_redstone(channel, side, strength[, bridge])`](./FUNCTIONS.md#afnbind_redstone) | 增加精确方向/强度绑定 |
| [`afn.unbind_redstone(channel, side[, bridge])`](./FUNCTIONS.md#afnunbind_redstone) | 移除该面全部绑定 |
| [`afn.transmit_temporary(frequency[, strength[, auth[, bridge]]])`](./FUNCTIONS.md#afntransmit_temporary) | 建立持续临时无线发送并返回 handle |
| [`afn.pulse_temporary(frequency[, strength[, ticks[, auth[, bridge]]]])`](./FUNCTIONS.md#afnpulse_temporary) | 建立定时临时无线发送 |
| [`afn.clear_temporary(handle[, bridge])`](./FUNCTIONS.md#afnclear_temporary) | 停止本电脑指定 handle |
| [`afn.clear_temporary_all([bridge])`](./FUNCTIONS.md#afnclear_temporary_all) | 停止本电脑全部临时发送 |

## 最容易混淆的四点

1. `frequency` 信道被激活才发送无线信号；`information` 被激活只改变运行状态，不发送无线信号。
2. 多来源强度取最大值。`clear` 只清调用电脑自己的租约，`clear_all` 会清该信道的全部来源。
3. `set_display_channel` 只切换 CRT，不激活信道；`set_display_channels` 才会改持久展示清单。
4. `set_information` 返回业务结果表；先读 revision 再提交，可避免覆盖其他玩家、电脑或 Synaxis 的更新。同 tick 写入按玩家 > CC:T > Synaxis 仲裁，较低优先级会得到 `information_write_conflict`。
5. 类型/子类转换是原子操作。同顶层类型、同 information 子类且未给 replacement 时保留旧值；跨类型或跨子类没有明确无损转换时必须显式给 replacement，否则分别返回 `information_value_required_for_type_change` 或 `information_value_required_for_subtype_change`。如果已开放端口与目标类型不兼容，返回 `synaxis_ports_incompatible` 并保留原配置。

```lua
local current = assert(afn.information("notice"))
local changed = afn.set_information("notice", "Platform 2", current.revision)
assert(changed.success, changed.error)
```

桥接器还会发送 `afn_channel_started`、`afn_channel_changed`、`afn_channel_stopped`、`afn_information_changed`、`afn_channel_rejected`、`afn_channel_timeout` 和 `afn_display_changed` 事件；详见[函数手册的事件章节](./FUNCTIONS.md#事件)。

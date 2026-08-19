# AFN Bridge × CC:Tweaked

[Open the AFN CC:T Wiki](./index.html) · [查看 AFN CC:T Wiki](./index.html) · [FUNCTIONS.md](./FUNCTIONS.md)

The HTML Wiki opens in **English by default**. Use the `EN / 中文` switch in the header to change language; the choice is remembered in the browser. The Markdown manual remains available for a plain-text reference.

## English overview

AFN Bridge combines Create wireless redstone, persistent channel values, local redstone, CC:Tweaked, and Synaxis through one channel model. CC:Tweaked is optional. When installed, a computer can use the `afn_bridge` peripheral or the bundled `afn` Lua module.

Typical first program:

```lua
local afn = require("afn")
for _, channel in ipairs(afn.channels()) do
  print(channel.name, channel.primary_frequency)
end

local result = afn.pulse("door") -- 15 strength, 20 ticks by default
assert(result.success, result.error)
```

Use the HTML Wiki for guided examples, a searchable function index, parameter and return-value details, error codes, CC events, Synaxis ports, and raw peripheral methods. If an auth board is installed, add the computer's `ComputerID` to the bridge allowlist and grant the required read, activation, or configuration capability.

<details>
<summary>中文说明</summary>

AFN 桥接器 × CC:Tweaked

[进入 AFN CC:T 像素风 Wiki 首页](./index.html) · [查看完整 FUNCTIONS 函数手册](./FUNCTIONS.md)

AFN 桥接器把 Create 无线红石、可选信道值、本地红石、CC:Tweaked 与 Synaxis 放进同一条信道。CC:Tweaked 不是必需依赖；安装后，电脑可通过 `afn_bridge` 外设或随模组提供的 `afn` Lua 模块控制桥接器。

## 五分钟开始

先在桥接器 GUI 新建一条名为 `door` 的信道，主频填写 `factory.door`。信道名是给 API 查找的名称，主频才是 Create/AFN 无线地址。

```lua
local afn = require("afn")

-- 查看电脑连接到的桥接器和全部信道
local bridge, bridge_name = afn.find()
print("bridge:", bridge_name)
for _, channel in ipairs(afn.channels()) do
  print(channel.name, channel.primary_frequency)
end

-- 15 强度、20 tick；主频有效时会同时发送无线信号
local result = afn.pulse("door")
assert(result.success, result.error)

-- 写值与激活彼此独立；简单覆盖不需要 revision
local changed = afn.set_value("door", "OPEN")
assert(changed.success, changed.error)
```

如果 `afn.channels()` 抛出权限错误，请在桥接器的 CC:T 页检查读取、激活和配置三项能力。没有鉴权板时所有非负 ComputerID 都可准入；安装鉴权板后，只有鉴权板 ComputerID 白名单中的电脑可准入，空名单拒绝所有电脑。

## 统一信道模型

每条信道都同时拥有：

```text
信道名 + 主频 + 副频模式 + 可选值 + 激活状态
```

| 字段 | 含义 |
| --- | --- |
| `name` | GUI 与 API 使用的唯一名称，不是无线频率 |
| `primary_frequency` | 可为空；为空时只在本地保存和显示，不参加无线网络 |
| `secondary_mode` | `none`、`manual` 或 `auth` |
| `secondary_frequency` | 只在 `manual` 时使用 |
| `value_present` | 区分无值与合法空文本 |
| `value_kind` / `channel_value` | `text`、`boolean`、`real` 及其实际值 |
| `active` / `strength` | 合并所有当前来源后的激活状态和 0～15 强度 |

旧快照中的 `type/subtype/value/attach_auth` 仍保留一个兼容期，但只是投影：有主频时旧 `type` 会优先显示 `frequency`，否则有值时显示 `information`。它们不能表达“一条信道同时有主频和值”，新程序应读取 v2 字段。

### 值与 revision

- 文本最长 1024 个 Unicode 码点且不超过 4096 个 UTF-8 字节。
- `real` 在 GUI 中叫“实数组”：传一个有限 number，或 1～7 个有限 number 的连续 Lua 数组；合法分量向零规范到最多三位小数。
- `true/false` 是布尔；空文本 `""` 是一个存在的值；`afn.clear_value()` 才会变成无值。
- 写值不激活信道，激活也不要求存在值。
- 只想覆盖时直接调用 `afn.set_value("notice", "新内容")`，不用事先读取 revision。
- 只有“读取旧值 → 计算新值 → 不希望覆盖期间的并发修改”时才传 revision。

```lua
local current = assert(afn.value("counter"))
local result = afn.set_value("counter", current.value + 1, current.revision)
if not result.success and result.error == "revision_conflict" then
  printError("值已被别人修改，请重新读取")
end
```

## 无线与屏幕

AFN 桥接器之间的激活可携带当前值；普通 Create 接收器只收到强度，普通 Create 发送器可激活桥接器但不会改值。无线入站不会自动再次发射，避免中继回环。多个来源的强度取最大值；携值来源使用稳定规则选出唯一胜者。

默认、开关、柱状图、仪表盘和地图是五种解释视图，不是值类型。无法解释时只做视觉回退：开关显示关闭、图表显示 0、地图只画设备点；第一次真实触控才写入规范值。整数调节只影响屏幕触控，不影响 CC:T、Synaxis、无线或普通 GUI 写入。

## Synaxis 三端口

每条信道可独立配置：

- 激活输入：只控制 0～15 激活强度；只支持 Real/Boolean。
- 值输入：只写统一值，不激活。
- 值输出：只发布统一值，不激活；无法转换时输出所选 Schema 的安全默认。

值端口支持 Real、Boolean、Vec3 和 Quaternion。短数组输入覆写前部并保留旧尾部，长数组扩展值；输出会截断多余项、补齐缺项，Quaternion 的缺失 `w` 补 1。旧 Pose/Twist 只保留存档兼容，不能新建。

## 权限与性能

CC 会话分别缓存“准入、读取、激活、配置”结果。鉴权板、白名单或能力开关改变时，服务端才推送新策略；每次 Lua 调用只做 O(1) 会话缓存读取，不扫描世界、NBT、ACL 或白名单。撤销准入或激活能力会清理该 ComputerID 留下的持续租约和临时发送。

Lua 不能写入 Owner、ACL、隐藏鉴权主频或伪造鉴权身份。`auth` 副频和临时鉴权发送只会使用桥接器当前有效的鉴权板。

## 文档入口

- [像素风 HTML Wiki](index.html)：适合浏览和搜索。
- [完整函数手册](FUNCTIONS.md)：参数、返回值、成功与失败示例、事件及 raw 外设表。
- [中文模组介绍](中文介绍.md)

## 精确 Lua 函数索引

下列名称来自随模组发布的 `require("afn")` 模块。每个包装函数都允许把可选的 `bridge_name` 放在最后；只有一台桥接器时可省略。

### 发现与读取

1. `afn.find([name])`
2. `afn.channels([bridge_name])`
3. `afn.active([bridge_name])`
4. `afn.display_channels([bridge_name])`
5. `afn.get(channel[, bridge_name])`
6. `afn.state(channel[, bridge_name])`
7. `afn.value(channel[, bridge_name])`
8. `afn.channel_value(channel[, bridge_name])`（`value` 的别名）
9. `afn.information(channel[, bridge_name])`（旧兼容读取）
10. `afn.frequency(channel[, bridge_name])`
11. `afn.last_error(channel[, bridge_name])`

### 激活和值

12. `afn.set(channel[, strength[, bridge_name]])`
13. `afn.pulse(channel[, strength[, ticks[, bridge_name]]])`
14. `afn.toggle(channel[, strength[, bridge_name]])`
15. `afn.clear(channel[, bridge_name])`
16. `afn.clear_all(channel[, bridge_name])`
17. `afn.set_value(channel, value[, revision[, bridge_name]])`
18. `afn.set_channel_value(...)`（`set_value` 的别名）
19. `afn.set_information(...)`（旧兼容别名）
20. `afn.clear_value(channel[, revision[, bridge_name]])`
21. `afn.clear_channel_value(...)`（`clear_value` 的别名）

### 主频、副频、展示与信道配置

22. `afn.set_primary_frequency(channel, frequency[, bridge_name])`
23. `afn.set_secondary(channel, mode[, frequency[, bridge_name]])`
24. `afn.get_display_channel([bridge_name])`
25. `afn.set_display_channel(channel[, bridge_name])`
26. `afn.next_display_channel([bridge_name])`
27. `afn.previous_display_channel([bridge_name])`
28. `afn.set_channel_displayed(channel, displayed[, bridge_name])`
29. `afn.set_display_channels(channels[, bridge_name])`
30. `afn.create_channel(definition[, bridge_name])`
31. `afn.update_channel(channel, changes[, bridge_name])`
32. `afn.remove_channel(channel[, bridge_name])`
33. `afn.set_channel_type(...)`（旧兼容投影）
34. `afn.set_information_subtype(...)`（旧兼容投影）

### Synaxis、红石与临时发送

35. `afn.set_synaxis_activation(channel, enabled[, format[, x, y[, bridge_name]]])`
36. `afn.set_synaxis_receive(channel, enabled[, format[, x, y[, bridge_name]]])`
37. `afn.set_synaxis_publish(channel, enabled[, format[, x, y[, bridge_name]]])`
38. `afn.bind_redstone(channel, side, strength[, bridge_name])`
39. `afn.unbind_redstone(channel, side[, bridge_name])`
40. `afn.transmit_temporary(frequency[, strength[, attach_auth[, bridge_name]]])`
41. `afn.pulse_temporary(frequency[, strength[, ticks[, attach_auth[, bridge_name]]]])`
42. `afn.clear_temporary(handle[, bridge_name])`
43. `afn.clear_temporary_all([bridge_name])`

信道没有启用/禁用状态。`create_channel` 与 `update_channel` 的 `receive_enabled=false` 表示“仅发送”，`true` 表示“允许发送和接收”；新信道默认 `receive_enabled=true`、`displayed=true`。raw `afn_bridge` 外设索引为 0～38；完整名称和索引见 [FUNCTIONS.md 的 raw 外设章节](FUNCTIONS.md#raw-afn_bridge-外设方法)。

</details>

# AFN 桥接器 Lua 函数手册

本页以当前 `afn_bridge` 外设和随模组提供的 `require("afn")` 模块为准。CC:Tweaked 是可选依赖；未安装时桥接器本身仍可使用，但不会注册 CC 外设。

## 快速开始

把普通 CC 电脑直接贴在桥接器旁，或通过有线调制解调器接入，然后运行：

```lua
local afn = require("afn")

for _, channel in ipairs(afn.channels()) do
  print(channel.name, channel.type, channel.active, channel.strength)
end
```

有多台桥接器时，把 CC 外设名放在每个包装函数的最后一个参数：

```lua
local afn = require("afn")
local bridge, name = afn.find("left")
print(name, bridge.getType and "attached" or "ready")

-- 对名为 left 的桥接器操作；nil 用来保留默认强度
local result = afn.set("yard_gate", nil, "left")
print(result.success, result.error)
```

外设权限由桥接器 Owner 在 GUI 中分别控制：

| 权限 | 涉及能力 | 默认状态 |
| --- | --- | --- |
| 读取 | 查询信道、读取 information、切换主屏幕 | 开 |
| 激活 | `set`、`pulse`、`toggle`、临时发送 | 开 |
| 配置 | 新增/修改/删除信道、写 information、展示清单、Synaxis 与红石绑定 | 关 |

`clear`、`clear_temporary` 和 `clear_temporary_all` 是故障安全清理：即使激活权限后来被关闭，发起该租约的电脑仍可清理自己的输出。任何能控制已获授权 CC 电脑的人，都拥有该电脑可调用的桥接器权限。

## 精确函数索引

| Lua 包装函数 | 原生 `afn_bridge` 方法 | 用途 |
| --- | --- | --- |
| [`afn.find`](#afnfind) | — | 查找或包装桥接器 |
| [`afn.channels`](#afnchannels) | `listChannels` | 列出全部信道 |
| [`afn.active`](#afnactive) | `listActiveChannels` | 列出激活信道 |
| [`afn.display_channels`](#afndisplay_channels) | `listDisplayChannels` | 列出屏幕清单 |
| [`afn.get`](#afnget) | `getChannel` | 读取完整信道快照 |
| [`afn.state`](#afnstate) | `getState` | 读取精简运行状态 |
| [`afn.information`](#afninformation) | `getInformation` | 读取 information 值与 revision |
| [`afn.last_error`](#afnlast_error) | `getLastError` | 读取无线发送错误 |
| [`afn.get_display_channel`](#afnget_display_channel) | `getDisplayChannel` | 读取当前屏幕信道 |
| [`afn.set_display_channel`](#afnset_display_channel) | `setDisplayChannel` | 选择屏幕信道 |
| [`afn.next_display_channel`](#afnnext_display_channel) | `nextDisplayChannel` | 切换到下一个屏幕信道 |
| [`afn.previous_display_channel`](#afnprevious_display_channel) | `previousDisplayChannel` | 切换到上一个屏幕信道 |
| [`afn.set`](#afnset) | `set` | 建立本电脑的持续租约 |
| [`afn.pulse`](#afnpulse) | `pulse` | 建立本电脑的定时租约 |
| [`afn.toggle`](#afntoggle) | `toggle` | 切换本电脑的持续租约 |
| [`afn.clear`](#afnclear) | `clear` | 清除本电脑在一条信道上的租约 |
| [`afn.clear_all`](#afnclear_all) | `clearAll` | 清除一条信道的所有来源 |
| [`afn.set_information`](#afnset_information) | `setInformation` | 写入 information |
| [`afn.set_channel_displayed`](#afnset_channel_displayed) | `setChannelDisplayed` | 修改单条展示勾选 |
| [`afn.set_display_channels`](#afnset_display_channels) | `setDisplayChannels` | 原子覆写屏幕清单和顺序 |
| [`afn.create_channel`](#afncreate_channel) | `createChannel` | 新建信道 |
| [`afn.update_channel`](#afnupdate_channel) | `updateChannel` | 原子修改信道 |
| [`afn.remove_channel`](#afnremove_channel) | `removeChannel` | 删除信道 |
| [`afn.set_channel_type`](#afnset_channel_type) | `setChannelType` | 切换顶层类型 |
| [`afn.set_enabled`](#afnset_enabled) | `setEnabled` | 启用或禁用信道 |
| [`afn.set_information_subtype`](#afnset_information_subtype) | `setInformationSubtype` | 切换 information 子类 |
| [`afn.set_synaxis_receive`](#afnset_synaxis_receive) | `setSynaxisReceive` | 配置 Synaxis 接收端口 |
| [`afn.set_synaxis_publish`](#afnset_synaxis_publish) | `setSynaxisPublish` | 配置 Synaxis 发布端口 |
| [`afn.bind_redstone`](#afnbind_redstone) | `bindRedstone` | 增加红石输入绑定 |
| [`afn.unbind_redstone`](#afnunbind_redstone) | `unbindRedstone` | 移除一面的红石绑定 |
| [`afn.transmit_temporary`](#afntransmit_temporary) | `transmit` | 创建持续临时无线发送 |
| [`afn.pulse_temporary`](#afnpulse_temporary) | `pulseTemporary` | 创建定时临时无线发送 |
| [`afn.clear_temporary`](#afnclear_temporary) | `clearTemporary` | 按 handle 停止临时发送 |
| [`afn.clear_temporary_all`](#afnclear_temporary_all) | `clearTemporaryAll` | 停止本电脑全部临时发送 |

## 通用返回表

### 动作结果

`set`、`pulse`、`toggle`、`clear`、`clear_all`、`set_information` 和 `clear_temporary` 返回：

```lua
{
  success = true,
  error = "",
  active = true,
  strength = 15,
}
```

业务拒绝通常不会抛 Lua 异常，而是返回 `success=false` 和稳定错误码。参数数量/类型错误、或相应 CC 权限被关闭，会抛异常；可用 `pcall` 捕获。

### 配置结果

信道 CRUD、类型、启用、Synaxis 和红石配置返回：

```lua
{
  success = true,
  error = "",
  channel = { -- 修改后的完整快照；删除成功时为 nil
    -- ...
  },
}
```

失败时 `channel=nil`，且原配置保持不变。

### 完整信道快照

`channels`、`get` 以及成功的配置结果使用同一结构：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | string | 稳定 UUID；改名不会改变 |
| `name` | string | 唯一名称，1～16 个安全字符 |
| `type` | string | `frequency` 或 `information` |
| `subtype` | string | information 的 `real/text/boolean/coordinate/player`；frequency 为 `""` |
| `enabled` / `active` | boolean | 持久启用状态 / 当前是否存在有效租约 |
| `strength` | integer | 所有来源合并后的最大强度，0～15 |
| `value` | string/number/boolean/table | frequency 表达式或类型化 information 值 |
| `displayed` | boolean | 是否在主屏幕展示清单 |
| `attach_auth` | boolean | frequency 是否附加桥接器内鉴权板；不公开鉴权板内容 |
| `revision` | integer | information 内容版本 |
| `last_error` | string | 最近的无线错误，正常时为空串 |
| `synaxis_receive` / `synaxis_publish` | table | `{enabled, format, x, y}` |
| `redstone_bindings` | table[] | `{side, strength}` 数组 |

坐标值形如 `{dimension="minecraft:overworld", x=1, y=64, z=2}`；玩家值形如 `{uuid="...", name="Alex"}`。当前两者是只读占位，不能由 CC 写入。

## 查找与查询

### `afn.find`

```lua
bridge, peripheral_name = afn.find([name])
```

- 参数：`name` 可选 string；省略时取 `peripheral.find("afn_bridge")` 找到的第一台。
- 返回：原生外设代理和它的 CC 外设名。不要求桥接器读权限。

成功示例：

```lua
local afn = require("afn")
local bridge, name = afn.find("left")
print(name, bridge.listActiveChannels()[1])
```

失败示例：

```lua
local ok, err = pcall(afn.find, "top")
if not ok then printError(err) end -- no AFN bridge named top
```

### `afn.channels`

```lua
channels = afn.channels([bridge_name])
```

- 参数：可选桥接器外设名。
- 返回：按配置顺序排列的完整信道快照数组。需要读取权限。

成功示例：

```lua
for _, c in ipairs(afn.channels()) do
  print(c.id, c.name, c.type, c.enabled)
end
```

失败示例：

```lua
local ok, err = pcall(afn.channels, "missing_bridge")
if not ok then printError(err) end
```

### `afn.active`

```lua
names = afn.active([bridge_name])
```

- 返回：当前至少有一个有效红石、CC 或 Synaxis 租约的信道名称数组；只读。

成功示例：

```lua
for _, name in ipairs(afn.active()) do print("active", name) end
```

失败示例：

```lua
local ok, err = pcall(afn.active)
if not ok then printError(err) end -- 例如桥接器关闭了 computer read
```

### `afn.display_channels`

```lua
names = afn.display_channels([bridge_name])
```

- 返回：主屏幕展示清单，顺序就是实体按钮与 `next/previous` 的轮播顺序；只读。

成功示例：

```lua
print(textutils.serialize(afn.display_channels("left")))
```

失败示例：

```lua
local ok, err = pcall(afn.display_channels, 123)
if not ok then printError(err) end -- bridge name must be a string
```

### `afn.get`

```lua
channel_or_nil = afn.get(channel, [bridge_name])
```

- 参数：`channel` 是信道名称。
- 返回：完整信道快照；不存在时返回 `nil`。需要读取权限。

成功示例：

```lua
local c = afn.get("boiler")
if c then print(c.type, c.value, c.synaxis_receive.enabled) end
```

失败示例：

```lua
assert(afn.get("no_such_channel") == nil)
```

### `afn.state`

```lua
state_or_nil = afn.state(channel, [bridge_name])
```

- 返回：`{enabled, active, strength, displayed, type, subtype}`；不存在时 `nil`。需要读取权限。

成功示例：

```lua
local s = afn.state("boiler")
print(s.active, s.strength)
```

失败示例：

```lua
local ok, err = pcall(afn.state, "boiler", "right")
if not ok then printError(err) end -- right 不是 AFN 桥接器或读取被关闭
```

### `afn.information`

```lua
information_or_nil = afn.information(channel, [bridge_name])
```

- 返回：`{value, subtype, revision}`；信道不存在或不是 information 时为 `nil`。需要读取权限。

成功示例：

```lua
local info = assert(afn.information("station_name"))
print(info.value, info.subtype, info.revision)
```

失败示例：

```lua
assert(afn.information("wireless_alarm") == nil) -- frequency 不是 information
```

### `afn.last_error`

```lua
error_or_nil = afn.last_error(channel, [bridge_name])
```

- 返回：最近错误码，正常、未知信道或没有错误时为 `nil`。当前典型值为 `invalid_frequency_or_auth`、`wireless_unavailable`。

成功示例：

```lua
local err = afn.last_error("secure_gate")
if err then printError(err) end
```

失败示例：

```lua
local ok, err = pcall(afn.last_error, "secure_gate")
if not ok then printError(err) end -- 读取权限关闭时抛异常
```

## 主屏幕

### `afn.get_display_channel`

```lua
name_or_nil = afn.get_display_channel([bridge_name])
```

- 返回：当前 CRT 显示的信道名；清单为空时为 `nil`。需要读取权限。

成功示例：

```lua
print(afn.get_display_channel() or "standby")
```

失败示例：

```lua
local ok, err = pcall(afn.get_display_channel, "missing")
if not ok then printError(err) end
```

### `afn.set_display_channel`

```lua
selected = afn.set_display_channel(channel, [bridge_name])
```

- 返回 boolean。目标必须存在、已启用并已加入展示清单；切换屏幕只需读取权限，不会激活信道。

成功示例：

```lua
assert(afn.set_display_channel("station_name"))
```

失败示例：

```lua
local selected = afn.set_display_channel("hidden_channel")
if not selected then printError("not in the enabled display list") end
```

### `afn.next_display_channel`

```lua
name_or_nil = afn.next_display_channel([bridge_name])
```

- 返回：切换后的名称；清单为空时 `nil`。需要读取权限。

成功示例：

```lua
print(afn.next_display_channel() or "standby")
```

失败示例：

```lua
local ok, err = pcall(afn.next_display_channel)
if not ok then printError(err) end -- 读取权限关闭
```

### `afn.previous_display_channel`

```lua
name_or_nil = afn.previous_display_channel([bridge_name])
```

- 返回：切换后的名称；清单为空时 `nil`。需要读取权限。

成功示例：

```lua
print(afn.previous_display_channel("left") or "standby")
```

失败示例：

```lua
local ok, err = pcall(afn.previous_display_channel, false)
if not ok then printError(err) end -- bridge name must be a string
```

## 运行时租约

多来源同时激活同一信道时，有效强度取最大值。`frequency` 会以该强度发送 AFN/Create 无线信号；`information` 只记录激活状态，不发送无线信号。

### `afn.set`

```lua
result = afn.set(channel, [strength], [bridge_name])
```

- `strength`：整数 1～15，默认 15。
- 返回：动作结果。只建立/替换本电脑在目标信道上的持续租约；需要激活权限。

成功示例：

```lua
local r = afn.set("yard_gate", 12)
assert(r.success, r.error)
print(r.active, r.strength)
```

失败示例：

```lua
local r = afn.set("disabled_channel", 15)
if not r.success then printError(r.error) end -- channel_disabled
```

### `afn.pulse`

```lua
result = afn.pulse(channel, [strength], [ticks], [bridge_name])
```

- `strength`：1～15，默认 15。
- `ticks`：1～1200，默认 20；在到期 tick 自动删除本电脑该信道租约。
- 返回：动作结果。需要激活权限。

成功示例：

```lua
local r = afn.pulse("door_bell", 15, 40)
assert(r.success, r.error) -- 持续 2 秒
```

失败示例：

```lua
local ok, err = pcall(afn.pulse, "door_bell", 15, 1201)
if not ok then printError(err) end -- pulse duration must be between 1 and 1200 ticks
```

### `afn.toggle`

```lua
result = afn.toggle(channel, [strength], [bridge_name])
```

- 返回：动作结果。只切换当前电脑自己的持续租约；其他电脑、红石、Synaxis 租约不受影响。需要激活权限。

成功示例：

```lua
local r = afn.toggle("maintenance", 8)
print(r.success, r.active, r.strength)
```

失败示例：

```lua
local r = afn.toggle("missing", 8)
if not r.success then printError(r.error) end -- unknown_channel
```

### `afn.clear`

```lua
result = afn.clear(channel, [bridge_name])
```

- 返回：清理后的动作结果。只清本电脑在目标信道上的租约；不要求激活权限。

成功示例：

```lua
local r = afn.clear("yard_gate")
assert(r.success, r.error)
```

失败示例：

```lua
local r = afn.clear("missing")
if not r.success then printError(r.error) end -- unknown_channel
```

### `afn.clear_all`

```lua
result = afn.clear_all(channel, [bridge_name])
```

- 返回：动作结果。清除目标信道的 CC、红石和 Synaxis 全部租约；需要配置权限。

成功示例：

```lua
local r = afn.clear_all("emergency_stop")
assert(r.success, r.error)
```

失败示例：

```lua
local ok, err = pcall(afn.clear_all, "emergency_stop")
if not ok then printError(err) end -- computer configuration access is disabled...
```

## Information 内容

### `afn.set_information`

```lua
result = afn.set_information(channel, value, [expected_revision], [bridge_name])
```

- `value`：`real` 用有限 number，`text` 用最长 128 字符的安全 string，`boolean` 用 boolean。
- `expected_revision`：可选整数；与当前 revision 不同则拒绝，适合安全的读—改—写。
- 返回：动作结果；写入不会激活信道。需要配置权限。`coordinate/player` 当前只读。

成功示例：

```lua
local old = assert(afn.information("platform_text"))
local r = afn.set_information("platform_text", "Train arriving", old.revision)
assert(r.success, r.error)
```

失败示例：

```lua
local old = assert(afn.information("platform_text"))
afn.set_information("platform_text", "first writer", old.revision)
local stale = afn.set_information("platform_text", "stale writer", old.revision)
print(stale.success, stale.error) -- false  revision_conflict
```

## 展示清单配置

### `afn.set_channel_displayed`

```lua
changed = afn.set_channel_displayed(channel, displayed, [bridge_name])
```

- `displayed`：boolean。
- 返回 boolean；目标不存在、被禁用或无法修改时为 false。需要配置权限。

成功示例：

```lua
assert(afn.set_channel_displayed("platform_text", true))
```

失败示例：

```lua
local changed = afn.set_channel_displayed("disabled_channel", true)
if not changed then printError("channel is missing or disabled") end
```

### `afn.set_display_channels`

```lua
changed = afn.set_display_channels(names, [bridge_name])
```

- `names`：从 1 开始的连续名称数组；允许空数组。
- 返回 boolean。调用会原子覆写全部展示勾选及顺序；所有名称必须存在、启用且不重复。需要配置权限。

成功示例：

```lua
assert(afn.set_display_channels({"platform_text", "boiler", "yard_gate"}))
```

失败示例：

```lua
local changed = afn.set_display_channels({"boiler", "boiler"})
assert(not changed) -- 重复项使整次更新失败，旧清单不变
```

## 持久信道配置

所有下列修改先完整校验再提交；失败不会留下部分配置。每台桥接器最多 64 条信道、最多开放 32 个 Synaxis 接收/发布端口。

### `afn.create_channel`

```lua
result = afn.create_channel(definition, [bridge_name])
```

`definition` 只接受：

| 字段 | 默认 | 说明 |
| --- | --- | --- |
| `name` | 必填 | 唯一名称，1～16 字符 |
| `type` | `frequency` | `frequency` / `information` |
| `frequency` | `""` | frequency 必须给合法非空表达式 |
| `subtype` | `text` | information 子类 |
| `value` | 子类默认值 | `0`、`""`、`false` 或只读占位 |
| `enabled` | `true` | 是否启用 |
| `displayed` | `false` | 是否加入主屏幕 |
| `attach_auth` | `false` | 仅 frequency 可用 |

返回配置结果；需要配置权限。

成功示例：

```lua
local r = afn.create_channel({
  name = "yard_gate",
  type = "frequency",
  frequency = "station.gate.*.!staff!test",
  enabled = true,
  displayed = true,
  attach_auth = false,
})
assert(r.success, r.error)
```

失败示例：

```lua
local r = afn.create_channel({
  name = "broken",
  type = "information",
  frequency = "must.not.exist",
})
print(r.success, r.error) -- false  invalid_information_definition
```

### `afn.update_channel`

```lua
result = afn.update_channel(channel, changes, [bridge_name])
```

`changes` 只接受 `name/type/frequency/subtype/value/enabled/displayed/attach_auth`；普通缺失字段保持原值。同类型、同 information 子类且未给 value 会保留原值和 revision；跨顶层类型或跨 information 子类若没有明确无损转换，必须同时提供目标类型的 `frequency` / `value`，否则整次操作拒绝。返回配置结果；需要配置权限。

成功示例：

```lua
local r = afn.update_channel("yard_gate", {
  name = "yard_exit",
  frequency = "station.exit.[1-4]",
  attach_auth = true,
})
assert(r.success, r.error)
```

失败示例：

```lua
local before = afn.get("platform_text")
local r = afn.update_channel("platform_text", {type = "frequency"})
print(r.success, r.error) -- false  frequency_required_for_type_change
assert(afn.get("platform_text").type == before.type) -- 原配置不变
```

### `afn.remove_channel`

```lua
result = afn.remove_channel(channel, [bridge_name])
```

- 返回配置结果，成功时 `channel=nil`；同步清理该信道租约、无线发送和 Synaxis endpoint。需要配置权限。

成功示例：

```lua
local r = afn.remove_channel("temporary_config")
assert(r.success and r.channel == nil, r.error)
```

失败示例：

```lua
local r = afn.remove_channel("missing")
print(r.success, r.error) -- false  unknown_channel
```

### `afn.set_channel_type`

```lua
result = afn.set_channel_type(channel, type, [replacement], [bridge_name])
```

- `type`：`frequency` 或 `information`。
- information → frequency：`replacement` 必须是合法 frequency string。
- frequency → information：必须提供 text replacement；不使用隐含默认值。
- 目标类型与当前相同：保持原值。
- 若现有 Synaxis 端口与新类型不兼容，转换返回 `synaxis_ports_incompatible`，不会静默删除端口。

成功示例：

```lua
local r = afn.set_channel_type("old_text", "frequency", "factory.line.*")
assert(r.success, r.error)
```

失败示例：

```lua
local r = afn.set_channel_type("old_text", "frequency")
print(r.success, r.error) -- false  frequency_required_for_type_change
```

### `afn.set_enabled`

```lua
result = afn.set_enabled(channel, enabled, [bridge_name])
```

- `enabled`：boolean。禁用会停止不再兼容的运行状态，但保留持久配置和已开放 Synaxis 端口。返回配置结果；需要配置权限。

成功示例：

```lua
assert(afn.set_enabled("yard_gate", false).success)
```

失败示例：

```lua
local r = afn.set_enabled("missing", true)
print(r.success, r.error) -- false  unknown_channel
```

### `afn.set_information_subtype`

```lua
result = afn.set_information_subtype(channel, subtype, [replacement], [bridge_name])
```

- `subtype`：`real`、`text`、`boolean`、`coordinate`、`player`。
- 同子类且不提供 replacement：保留值与 revision。
- 跨子类：没有明确无损转换时必须提供目标类型的 replacement，否则拒绝；成功转换时增加 revision。
- `coordinate/player` 不允许由 CC 写 replacement，因此当前不能通过 CC 随意转换并伪造这两种实体数据。
- 不兼容的已开放 Synaxis 端口使操作返回 `synaxis_ports_incompatible`，不会静默删除。

成功示例：

```lua
local r = afn.set_information_subtype("counter", "real", 42.5)
assert(r.success, r.error)
```

失败示例：

```lua
local r = afn.set_information_subtype("counter", "boolean", "yes")
print(r.success, r.error) -- false  invalid_information_value
```

## Synaxis 配置

Synaxis 也是可选依赖。公开端口格式只有 `real` 与 `boolean`。frequency 两种格式都支持；information 仅允许 `real+real`、`boolean+boolean`，文本/坐标/玩家不能开放端口。后方面板坐标范围为 0～112。安装兼容的 Synaxis 1.4.2/1.4.3 时，可选兼容层会让保存的 x/y 同时决定 AFN GUI 布局以及世界中的端口显示、悬浮命中和接线锚点；拖动不会更改稳定端口 ID、Schema 或既有接线。若 Synaxis 内部实现发生不兼容变化，兼容层会安全回退到 Synaxis 默认锚点布局。

### `afn.set_synaxis_receive`

```lua
result = afn.set_synaxis_receive(channel, enabled, [format], [x], [y], [bridge_name])
```

- 接收方向：Synaxis → 桥接器。`format` 默认 `real`；x/y 必须同时提供。
- 返回配置结果；需要配置权限。

成功示例：

```lua
local r = afn.set_synaxis_receive("boiler", true, "real", 20, 70)
assert(r.success, r.error)
```

失败示例：

```lua
local r = afn.set_synaxis_receive("platform_text", true, "boolean")
print(r.success, r.error) -- false  invalid_synaxis_port
```

### `afn.set_synaxis_publish`

```lua
result = afn.set_synaxis_publish(channel, enabled, [format], [x], [y], [bridge_name])
```

- 发布方向：桥接器 → Synaxis。格式、坐标、权限与接收端口相同。

成功示例：

```lua
local r = afn.set_synaxis_publish("alarm_state", true, "boolean", 88, 70)
assert(r.success, r.error)
```

失败示例：

```lua
local r = afn.set_synaxis_publish("alarm_state", true, "real", 200, 70)
print(r.success, r.error) -- false  invalid_synaxis_position
```

## 红石绑定

红石绑定使用桥接器自身方块的世界方向：`down/up/north/south/west/east`。绑定按“方向 + 精确强度”匹配，并不是大于等于阈值。

### `afn.bind_redstone`

```lua
result = afn.bind_redstone(channel, side, strength, [bridge_name])
```

- `strength`：1～15。可在同一面为不同强度绑定不同信道。返回配置结果；需要配置权限。

成功示例：

```lua
assert(afn.bind_redstone("yard_gate", "north", 15).success)
```

失败示例：

```lua
local r = afn.bind_redstone("yard_gate", "front", 15)
print(r.success, r.error) -- false  invalid_redstone_binding
```

### `afn.unbind_redstone`

```lua
result = afn.unbind_redstone(channel, side, [bridge_name])
```

- 移除目标信道在该方向上的全部强度绑定。返回配置结果；需要配置权限。

成功示例：

```lua
assert(afn.unbind_redstone("yard_gate", "north").success)
```

失败示例：

```lua
local r = afn.unbind_redstone("missing", "north")
print(r.success, r.error) -- false  invalid_redstone_binding
```

## 临时无线发送

临时发送不创建持久信道，不进入 GUI、展示清单、红石绑定或 Synaxis Schema。同一台电脑可并发持有多个 handle；每台桥接器总计最多 32 个临时发送。附加鉴权时只能使用桥接器槽内的有效鉴权板，Lua 不能提交 Owner、UUID、ACL 或鉴权主频。

### `afn.transmit_temporary`

```lua
result = afn.transmit_temporary(frequency, [strength], [attach_auth], [bridge_name])
```

- `frequency`：合法非空 AFN 表达式；支持现有 `?`、`*`、`**`、`[...]` 和局部/完整路径排除规则。
- `strength`：1～15，默认 15。
- `attach_auth`：默认 false；true 时与桥接器鉴权板组成双频发送。
- 返回：动作结果加 `handle` string。需要激活权限。

成功示例：

```lua
local r = afn.transmit_temporary("factory.*.!maintenance!test", 12, false)
assert(r.success, r.error)
print("handle", r.handle)
```

失败示例：

```lua
local r = afn.transmit_temporary("secure.gate", 15, true)
if not r.success then printError(r.error) end -- auth_board_unavailable（槽内无有效板）
```

### `afn.pulse_temporary`

```lua
result = afn.pulse_temporary(frequency, [strength], [ticks], [attach_auth], [bridge_name])
```

- `ticks`：1～1200，默认 20；其余参数同持续临时发送。
- 返回动作结果加 handle；到期后自动关闭并产生 `afn_channel_timeout` 事件。

成功示例：

```lua
local r = afn.pulse_temporary("station.bell", 15, 40, false)
assert(r.success, r.error)
```

失败示例：

```lua
local ok, err = pcall(afn.pulse_temporary, "station.bell", 15, 0)
if not ok then printError(err) end -- duration 范围异常
```

### `afn.clear_temporary`

```lua
result = afn.clear_temporary(handle, [bridge_name])
```

- 只能清除当前电脑自己创建的目标 handle；不要求激活权限。

成功示例：

```lua
local tx = afn.transmit_temporary("factory.test")
assert(tx.success, tx.error)
local r = afn.clear_temporary(tx.handle)
assert(r.success, r.error)
```

失败示例：

```lua
local r = afn.clear_temporary("not-a-live-handle")
print(r.success, r.error) -- false  unknown_temporary_handle
```

### `afn.clear_temporary_all`

```lua
removed_count = afn.clear_temporary_all([bridge_name])
```

- 返回：当前电脑在该桥接器上被停止的临时发送数量；不影响其他电脑和持久信道，不要求激活权限。

成功示例：

```lua
afn.transmit_temporary("test.one")
afn.transmit_temporary("test.two")
print(afn.clear_temporary_all()) -- 2
```

失败示例：

```lua
local ok, err = pcall(afn.clear_temporary_all, "missing")
if not ok then printError(err) end -- no AFN bridge named missing
```

## 事件

外设连接电脑后会发送经过限流与脱敏的 CC 事件。使用 `os.pullEvent` 时，第二个返回值是 payload table：

```lua
while true do
  local event, data = os.pullEvent()
  if event:sub(1, 4) == "afn_" then
    print(event, textutils.serialize(data))
  end
end
```

| 事件 | payload |
| --- | --- |
| `afn_channel_started` | `channel,type,active=true,strength` |
| `afn_channel_changed` | 同上；有效强度变化 |
| `afn_channel_stopped` | `channel,type,active=false,strength=0` |
| `afn_information_changed` | 上述字段加 `revision,subtype`；不直接附带内容 |
| `afn_channel_rejected` | 当前电脑的 `operation,error`，可能带 `channel` |
| `afn_channel_timeout` | 持久信道脉冲到期使用信道字段；临时发送使用 `operation="temporary_transmission",handle,active=false` |
| `afn_display_changed` | `channel`；待机时为空串 |

事件只在存在已连接电脑且桥接器允许 CC 读取时维护状态基线；不会泄露鉴权主频、Owner UUID 或 ACL。刚连接时不会补发历史事件。电脑断开会自动清理该电脑所有信道租约和临时 handle。

## 常见错误处理

```lua
local afn = require("afn")

-- 抛异常：外设不存在、参数类型错误、权限关闭
local called, result_or_error = pcall(afn.set, "yard_gate", 15)
if not called then
  printError(result_or_error)
  return
end

-- 业务拒绝：方法成功返回，但 success=false
local result = result_or_error
if not result.success then
  printError(result.error)
  return
end

print("effective strength", result.strength)
```

常见业务错误码：

| 错误码 | 含义 |
| --- | --- |
| `unknown_channel` | 找不到目标信道 |
| `channel_disabled` | 信道存在但被禁用 |
| `revision_conflict` | information 已被其他来源修改 |
| `information_write_conflict` | 同一服务器 tick 已接受优先级更高的写入；玩家 > CC:T > Synaxis |
| `invalid_information_value` | 值类型、范围或字符不符合子类 |
| `information_subtype_read_only` | 尝试写 coordinate/player |
| `frequency_required_for_type_change` | 切换到 frequency 时没有新主频 |
| `information_value_required_for_type_change` | 切换到 information 时没有提供目标值 |
| `information_value_required_for_subtype_change` | 切换 information 子类时没有提供目标值 |
| `duplicate_channel` / `channel_limit` | 名称重复或超过 64 条 |
| `synaxis_port_limit` / `invalid_synaxis_port` | 超过 32 个端口或类型不兼容 |
| `synaxis_ports_incompatible` | 类型/子类转换会使已经开放的端口不合法；先显式关闭或调整端口 |
| `invalid_redstone_binding` / `redstone_binding_conflict` | 方向、强度或绑定冲突 |
| `auth_board_unavailable` | 请求附加鉴权但桥接器没有有效板 |
| `temporary_transmitter_limit` | 桥接器已有 32 个临时发送 |
| `runtime_source_limit` | 单条信道已达到 256 个并发运行来源；先清理不再使用的来源 |
| `wireless_unavailable` | Create 无线链路暂时不可用 |

## 频段表达式速查

- `*`：只在一个层级内匹配任意长度；`**`：可以跨越点号层级。
- `?`：单个字符；`[A-C]`、`[0-9]`：单字符集合或范围，支持大小写英文与数字。
- 局部排除附着到上一正向层，例如 `1.2.[1-9].!2!3![4-8].[2-4].!2!3`。每个 `!` 后只写当前层简写。
- 旧式完整路径排除仍可读取，例如 `factory.**.!factory.secret.**`。
- 接收端匹配规则、跨层设置和鉴权 ACL 仍由 AFN 服务端统一判定；桥接器不另建一套匹配器。

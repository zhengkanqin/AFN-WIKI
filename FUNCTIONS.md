# AFN 桥接器 Lua 函数手册

`require("afn")` 包与 raw `afn_bridge` 外设的函数、权限、事件、错误码及兼容字段参考。

## 五分钟入门

### 1. 信道结构

每条信道都可以同时拥有主频、可选副频、可选值和激活状态；`frequency` 与 `information` 不是互斥的存储类型：

```text
信道名 + 主频 + 可选副频 + 可选值 + 激活状态
```

在桥接器 GUI 新建一条信道：

| 配置 | 示例 |
| --- | --- |
| 信道名 | `door` |
| 主频 | `factory.door` |
| 副频 | 无 |
| 信道值 | `CLOSED` |
| 收发 | 允许发送和接收 |

代码中的 `door` 是**信道名**，不是主频。除临时发送函数外，绝大多数 API 都按信道名查找。

### 2. 连接并查看信道

电脑紧贴桥接器，或通过有线调制解调器接入。运行：

```lua
local afn = require("afn")

local bridge, bridge_name = afn.find()
print("bridge:", bridge_name)

for _, channel in ipairs(afn.channels()) do
  print(channel.name, channel.primary_frequency)
end
```

预期能看到 `door factory.door`。`afn`、`bridge`、`channel` 都只是示例中的普通 Lua 变量名，可以换成别的名字。

### 3. 发送一秒信号

```lua
local afn = require("afn")
local result = afn.pulse("door") -- 默认强度 15、持续 20 tick
assert(result.success, result.error)
```

`pulse` 激活的是桥接器内已经存在的信道。该信道有有效主频，因此会发送 Create/AFN 无线信号；若主频为空，它仍会在桥接器内激活，但不会注册无线发送端。

### 4. 直接读写值

```lua
local afn = require("afn")

local before = assert(afn.value("door"))
print("before:", before.value)

local result = afn.set_value("door", "OPEN")
assert(result.success, result.error)

local after = assert(afn.value("door"))
print("after:", after.value)
```

普通覆盖不需要 revision。写值不会自动激活，激活也不会自动创建值。

### 5. 设置主频和副频

```lua
local afn = require("afn")

assert(afn.set_primary_frequency("door", "factory.door").success)
assert(afn.set_secondary("door", "manual", "factory.zone_a").success)

-- 改为使用桥接器顶部的鉴权板：
assert(afn.set_secondary("door", "auth").success)
```

副频模式只有 `none`、`manual`、`auth`。`auth` 不允许 Lua 提交 Owner、ACL 或隐藏主频，只使用桥接器当前关联的有效鉴权板。

## 常用操作速查

以下代码都先执行 `local afn = require("afn")`。

| 目的 | 最短写法 | 权限 |
| --- | --- | --- |
| 查看全部信道 | `afn.channels()` | 读取 |
| 查看完整信道 | `afn.get("door")` | 读取 |
| 查看值（包括无值状态） | `afn.value("door")` | 读取 |
| 查看主副频 | `afn.frequency("door")` | 读取 |
| 激活 1 秒 | `afn.pulse("door")` | 激活 |
| 持续激活 | `afn.set("door")` | 激活 |
| 停止自己建立的持续激活 | `afn.clear("door")` | 已准入 |
| 直接写值 | `afn.set_value("door", "OPEN")` | 配置 |
| 清为“无值” | `afn.clear_value("door")` | 配置 |
| 改主频 | `afn.set_primary_frequency("door", "factory.door")` | 配置 |
| 改为鉴权副频 | `afn.set_secondary("door", "auth")` | 配置 |
| 临时发送 1 秒 | `afn.pulse_temporary("factory.bell")` | 激活 |

## 可选参数、变量和 revision

### 方括号不是 Lua 代码

签名中的方括号表示可选：

```text
afn.set_value(channel, value[, revision[, bridge_name]])
```

真正调用时不输入方括号。只有一台桥接器时通常省略最后的 `bridge_name`。指定最后一个参数而跳过中间参数时用 `nil` 占位：

```lua
afn.set_value("notice", "新内容", nil, "left")
afn.set_secondary("door", "auth", nil, "left")
```

`bridge_name` 是 CC 分配的外设名，例如 `left` 或有线网络上的名称；不是信道名、方块标题或主频。

### `old`、`current` 是什么

```lua
local current = assert(afn.value("counter"))
```

`current` 只是作者自取的局部变量，保存返回表：

```lua
{
  present = true,
  kind = "real",
  value = 12,
  revision = 7
}
```

它不是 AFN 关键字。换成 `old`、`data`、`counter_state` 都一样。

### revision 为什么通常可以省略

只想把值改成指定内容时直接写：

```lua
local result = afn.set_value("notice", "列车即将进站")
assert(result.success, result.error)
```

只有新值依赖刚读到的旧值，例如“计数器加一”，才建议传旧 revision：

```lua
local current = assert(afn.value("counter"))
local result = afn.set_value("counter", current.value + 1, current.revision)

if not result.success and result.error == "revision_conflict" then
  printError("值已变化，请重新读取后计算")
else
  assert(result.success, result.error)
end
```

revision 是每台桥接器上的单调版本号。清除值也会推进 tombstone revision，因此“有值 → 无值 → 再有值”不会出现 ABA 误判。冲突后不要盲目循环提交，应重新读取并重新计算。

## 统一信道和值

### 值的三种可写类型

| Lua 输入 | `kind` | 读取结果 |
| --- | --- | --- |
| string | `text` | string |
| boolean | `boolean` | boolean |
| 有限 number | `real` | number |
| 1～7 个有限 number 的连续数组 | `real` | 多项数组；单项仍返回 number |

文本最多 1024 个 Unicode 码点，同时不超过 4096 个 UTF-8 字节。实数组拒绝空表、稀疏表、非数字项、NaN、正负无穷与超过 7 项的输入；合法分量在模型边界向零规范到最多三位小数，整次写入原子拒绝，不会部分保存。

```lua
local ok1 = afn.set_value("notice", "列车即将进站")
local ok2 = afn.set_value("door_open", true)
local ok3 = afn.set_value("pose", {12.5, 64, -8, 0, 0, 0, 1})
assert(ok1.success and ok2.success and ok3.success)

local bad = afn.set_value("pose", {1, 2, 0/0})
print(bad.success, bad.error) -- false invalid_information_value
```

空文本 `""` 是一个存在的文本值。只有 `clear_value` 才得到 `present=false`。旧存档中的 `coordinate/player` 可读取，但始终只读。

### 无线携值边界

- AFN 桥接器 → AFN 桥接器：强度可以携带当前值快照。
- AFN 桥接器 → 普通 Create 接收器：只传强度，普通设备忽略值。
- 普通 Create 发送器 → AFN 桥接器：可以激活，但不会改值。
- 无线入站不会立即作为无线出站再次中继；以后发生新的本地激活时，当前保存值才可作为新的本地快照发送。
- 多来源强度取最大值；携值来源按强度和稳定来源 ID 选择唯一胜者。
- 同 tick 写入优先级为玩家 > CC:T > Synaxis > 无线。

### 五种屏幕解释

默认、开关、柱状图、仪表盘、地图都是统一值的解释视图，不是存储类型。非法值只视觉回退：开关显示关闭、图表显示 0、地图只画设备点；只有真实触控才写入新值。整数调节只影响屏幕触控，不影响 CC:T、Synaxis、无线或普通 GUI 写入。

## 权限与性能

| 能力 | 典型函数 |
| --- | --- |
| 读取 | `channels/get/value/frequency`、屏幕切换 |
| 激活 | `set/pulse/toggle`、临时发送 |
| 配置 | 写值、CRUD、主副频、展示清单、Synaxis、红石绑定 |
| 仅需仍获准 | `clear`、`clear_temporary*`，用于故障安全清理 |

没有鉴权板时，所有非负 ComputerID 均可准入；安装鉴权板后启用 ComputerID 白名单，空名单拒绝全部电脑。读取、激活、配置三个开关仍分别生效。

ComputerID 在连接时建立会话。鉴权板、白名单或能力开关改变时才重算并推送；每次函数调用只做 O(1) 缓存读取，不扫描世界、方块实体、NBT、ACL 或白名单。撤销准入或激活权限会清除该电脑留下的持续租约和临时发送。

参数类型、参数数量、外设不存在和权限问题通常**抛出 Lua 错误**，用 `pcall` 捕获；业务拒绝通常返回 `success=false` 和稳定错误码：

```lua
local ok, result_or_error = pcall(afn.pulse, "door", 15, 20)
if not ok then
  printError(result_or_error) -- 例如激活权限关闭
elseif not result_or_error.success then
  printError(result_or_error.error) -- 例如 unknown_channel
end
```

## 通用返回表

### 动作结果

```lua
{ success=boolean, error=string, active=boolean, strength=number }
```

`set_value/clear_value` 还返回 `value_present/value_kind/value/revision`。成功时 `error=""`。

### 配置结果

```lua
{ success=boolean, error=string, channel=table|nil }
```

成功新建/修改时 `channel` 是最新完整快照；成功删除时为 `nil`。失败不会部分修改。

### 完整快照 v2

`channels/get` 的主要字段：

| 字段 | 含义 |
| --- | --- |
| `id`, `name`, `schema_version` | 稳定 UUID、名称、当前 schema（2） |
| `receive_enabled`, `active`, `strength`, `displayed` | 是否允许无线接收、当前激活、0～15 强度、屏幕清单状态 |
| `primary_frequency` | 主频，可为空 |
| `secondary_mode` | `none/manual/auth` |
| `secondary_frequency` | 仅 manual 使用 |
| `value_present` | 是否存在值 |
| `value_kind`, `channel_value`, `value_revision` | 值标签、实际值、版本号 |
| `synaxis_activation/receive/publish` | `{enabled,format,x,y}` |
| `redstone_bindings` | `{side,strength}` 数组，`strength` 可为 `"all"` |
| `last_error` | 最近无线错误，正常为空串 |

兼容字段 `type/subtype/value/attach_auth/revision` 仍保留一个大版本：主频非空或值不存在时投影为 `type="frequency"`；否则投影为 `type="information"`。该投影无法表达“同时有主频和值”，新代码应使用 v2 字段。

信道没有启用/禁用状态，创建后始终可被红石、CC:T 与 Synaxis 激活并发送。`receive_enabled=false` 仅表示“仅发送”，不会接收 Create 无线入站；`true` 表示“允许发送和接收”。展示同样是显式配置：新信道默认展示，是否激活不会自动改变展示清单。

## 精确 Lua 函数索引

- 发现与读取：[find](#fn-find) · [channels](#fn-channels) · [active](#fn-active) · [display_channels](#fn-display-channels) · [get](#fn-get) · [state](#fn-state) · [value](#fn-value) · [channel_value](#fn-channel-value) · [information](#fn-information) · [frequency](#fn-frequency) · [last_error](#fn-last-error)
- CRT：[get_display_channel](#fn-get-display-channel) · [set_display_channel](#fn-set-display-channel) · [next_display_channel](#fn-next-display-channel) · [previous_display_channel](#fn-previous-display-channel)
- 激活：[set](#fn-set) · [pulse](#fn-pulse) · [toggle](#fn-toggle) · [clear](#fn-clear) · [clear_all](#fn-clear-all)
- 值：[set_value](#fn-set-value) · [set_channel_value](#fn-set-channel-value) · [set_information](#fn-set-information) · [clear_value](#fn-clear-value) · [clear_channel_value](#fn-clear-channel-value)
- 频段与展示：[set_primary_frequency](#fn-set-primary-frequency) · [set_secondary](#fn-set-secondary) · [set_channel_displayed](#fn-set-channel-displayed) · [set_display_channels](#fn-set-display-channels)
- 持久配置：[create_channel](#fn-create-channel) · [update_channel](#fn-update-channel) · [remove_channel](#fn-remove-channel) · [set_channel_type](#fn-set-channel-type) · [set_information_subtype](#fn-set-information-subtype)
- Synaxis 与红石：[set_synaxis_activation](#fn-set-synaxis-activation) · [set_synaxis_receive](#fn-set-synaxis-receive) · [set_synaxis_publish](#fn-set-synaxis-publish) · [bind_redstone](#fn-bind-redstone) · [unbind_redstone](#fn-unbind-redstone)
- 临时发送：[transmit_temporary](#fn-transmit-temporary) · [pulse_temporary](#fn-pulse-temporary) · [clear_temporary](#fn-clear-temporary) · [clear_temporary_all](#fn-clear-temporary-all)

<a id="fn-find"></a>

### `afn.find`

```text
afn.find([bridge_name]) -> raw_bridge, resolved_name
```

发现 `afn_bridge` 外设；不传名称时取找到的第一台。发现本身不授予读取权限。

```lua
-- 成功
local raw, name = afn.find()
print(name, type(raw))

-- 失败：名称不是 AFN 桥接器
local ok, err = pcall(afn.find, "left")
if not ok then printError(err) end
```

<a id="fn-channels"></a>

### `afn.channels`

```text
afn.channels([bridge_name]) -> channel_snapshot[]
```

返回配置顺序中的全部完整快照；需要读取权限。

```lua
-- 成功
for _, c in ipairs(afn.channels()) do print(c.name, c.primary_frequency) end

-- 失败：读取权限关闭
local ok, err = pcall(afn.channels)
if not ok then printError(err) end
```

<a id="fn-active"></a>

### `afn.active`

```text
afn.active([bridge_name]) -> string[]
```

返回有效强度大于 0 的信道名，包括本地与无线入站激活；需要读取权限。

```lua
-- 成功
for _, name in ipairs(afn.active()) do print("active", name) end

-- 失败：指定的桥接器不存在
local ok, err = pcall(afn.active, "missing")
if not ok then printError(err) end
```

<a id="fn-display-channels"></a>

### `afn.display_channels`

```text
afn.display_channels([bridge_name]) -> string[]
```

返回 CRT 当前有效展示列表和轮播顺序；需要读取权限。

```lua
-- 成功
print(textutils.serialize(afn.display_channels()))

-- 失败：bridge_name 必须是字符串
local ok, err = pcall(afn.display_channels, 123)
if not ok then printError(err) end
```

<a id="fn-get"></a>

### `afn.get`

```text
afn.get(channel[, bridge_name]) -> channel_snapshot|nil
```

返回一条完整快照；未知名称返回 `nil`。

```lua
-- 成功
local c = assert(afn.get("door"))
print(c.primary_frequency, c.value_present)

-- 失败结果：未知信道不是异常
assert(afn.get("missing") == nil)
```

<a id="fn-state"></a>

### `afn.state`

```text
afn.state(channel[, bridge_name]) -> table|nil
```

返回 `{receive_enabled,active,strength,displayed,type,subtype,value_present,value_kind,revision}`。`receive_enabled=false` 表示仅发送；`type/subtype` 是旧投影；未知信道返回 `nil`。

```lua
-- 成功
local s = assert(afn.state("door"))
print(s.active, s.strength, s.value_present)

-- 失败：未准入
local ok, err = pcall(afn.state, "door")
if not ok then printError(err) end
```

<a id="fn-value"></a>

### `afn.value`

```text
afn.value(channel[, bridge_name]) -> {present,kind,value,revision}|nil
```

未知信道返回 `nil`；已知但无值返回 `{present=false,kind="",value="",revision=tombstone}`。

```lua
-- 成功：无值也能区分
local v = assert(afn.value("door"))
if v.present then print(v.kind, textutils.serialize(v.value)) else print("无值") end

-- 失败结果：未知信道
assert(afn.value("missing") == nil)
```

<a id="fn-channel-value"></a>

### `afn.channel_value`

`afn.value` 的完全别名，参数与返回值相同。

```lua
-- 成功
local v = assert(afn.channel_value("door"))
print(v.revision)

-- 失败
local ok, err = pcall(afn.channel_value, "door", "missing_bridge")
if not ok then printError(err) end
```

<a id="fn-information"></a>

### `afn.information`（兼容）

```text
afn.information(channel[, bridge_name]) -> {value,subtype,revision}|nil
```

`afn.information` 是统一值的兼容读取接口：值存在时返回，不检查旧 `type`；无值或未知信道返回 `nil`。新代码使用 `afn.value` 区分未知信道与已知无值。

```lua
-- 成功：有主频和值的信道也可读取
local info = assert(afn.information("door"))
print(info.subtype, info.value)

-- 失败结果：无值时 nil
if afn.information("value_less") == nil then print("没有值") end
```

<a id="fn-frequency"></a>

### `afn.frequency`

```text
afn.frequency(channel[, bridge_name]) -> {primary,secondary_mode,secondary_frequency,attach_auth}|nil
```

`attach_auth` 是 `secondary_mode=="auth"` 的兼容布尔投影。

```lua
-- 成功
local f = assert(afn.frequency("door"))
print(f.primary, f.secondary_mode)

-- 失败结果
assert(afn.frequency("missing") == nil)
```

<a id="fn-last-error"></a>

### `afn.last_error`

```text
afn.last_error(channel[, bridge_name]) -> string|nil
```

返回最近无线错误，例如 `invalid_frequency_or_auth`、`wireless_unavailable`；无错误或未知信道返回 `nil`。

```lua
-- 成功
local err = afn.last_error("door")
if err then printError(err) end

-- 失败：读取权限关闭会抛出
local ok, err2 = pcall(afn.last_error, "door")
if not ok then printError(err2) end
```

<a id="fn-get-display-channel"></a>

### `afn.get_display_channel`

```text
afn.get_display_channel([bridge_name]) -> string|nil
```

返回 CRT 当前选中信道；列表为空时 `nil`。需要读取权限。

```lua
-- 成功
print(afn.get_display_channel() or "standby")

-- 失败
local ok, err = pcall(afn.get_display_channel, "missing")
if not ok then printError(err) end
```

<a id="fn-set-display-channel"></a>

### `afn.set_display_channel`

```text
afn.set_display_channel(channel[, bridge_name]) -> boolean
```

选择当前展示列表中的信道；不激活、不改值。需要读取权限。

```lua
-- 成功
assert(afn.set_display_channel("door"))

-- 失败结果：不在展示列表
assert(not afn.set_display_channel("hidden"))
```

<a id="fn-next-display-channel"></a>

### `afn.next_display_channel`

```text
afn.next_display_channel([bridge_name]) -> string|nil
```

切换下一项并返回名称；空列表返回 `nil`。

```lua
-- 成功
print(afn.next_display_channel() or "standby")

-- 失败
local ok, err = pcall(afn.next_display_channel, false)
if not ok then printError(err) end
```

<a id="fn-previous-display-channel"></a>

### `afn.previous_display_channel`

```text
afn.previous_display_channel([bridge_name]) -> string|nil
```

切换上一项并返回名称；空列表返回 `nil`。

```lua
-- 成功
print(afn.previous_display_channel() or "standby")

-- 失败
local ok, err = pcall(afn.previous_display_channel, "missing")
if not ok then printError(err) end
```

<a id="fn-set"></a>

### `afn.set`

```text
afn.set(channel[, strength[, bridge_name]]) -> action_result
```

为当前 ComputerID 建立/替换持续激活租约。强度 1～15，默认 15；需要激活权限。

```lua
-- 成功
local r = afn.set("door", 12)
assert(r.success, r.error)

-- 失败结果
local bad = afn.set("missing", 15)
print(bad.success, bad.error) -- false unknown_channel
```

<a id="fn-pulse"></a>

### `afn.pulse`

```text
afn.pulse(channel[, strength[, ticks[, bridge_name]]]) -> action_result
```

建立 1～1200 tick 定时租约。默认 15 强度、20 tick。

```lua
-- 成功
assert(afn.pulse("bell", 15, 40).success)

-- 失败：超出范围会抛出
local ok, err = pcall(afn.pulse, "bell", 15, 1201)
if not ok then printError(err) end
```

<a id="fn-toggle"></a>

### `afn.toggle`

```text
afn.toggle(channel[, strength[, bridge_name]]) -> action_result
```

只切换当前 ComputerID 的持续租约，不清其他电脑、红石、Synaxis 或无线来源。

```lua
-- 成功
local r = afn.toggle("maintenance", 8)
print(r.success, r.active)

-- 失败结果
local bad = afn.toggle("missing", 8)
print(bad.error) -- unknown_channel
```

<a id="fn-clear"></a>

### `afn.clear`

```text
afn.clear(channel[, bridge_name]) -> action_result
```

清除当前 ComputerID 在该信道的租约。激活权限被关闭后仍可用，但电脑必须仍获准；白名单撤销会自动清理。

```lua
-- 成功
assert(afn.clear("door").success)

-- 失败结果
local bad = afn.clear("missing")
print(bad.error) -- unknown_channel
```

<a id="fn-clear-all"></a>

### `afn.clear_all`

```text
afn.clear_all(channel[, bridge_name]) -> action_result
```

清除目标信道的全部运行来源；需要配置权限。

```lua
-- 成功
assert(afn.clear_all("emergency").success)

-- 失败：配置权限关闭
local ok, err = pcall(afn.clear_all, "emergency")
if not ok then printError(err) end
```

<a id="fn-set-value"></a>

### `afn.set_value`

```text
afn.set_value(channel, value[, expected_revision[, bridge_name]]) -> value_action_result
```

按 Lua 类型写入/替换统一值，可从无值直接创建；不激活。`expected_revision` 可省略。

```lua
-- 成功：简单覆盖
local r = afn.set_value("door", {12.5, 64, -8})
assert(r.success, r.error)
print(r.value_kind, r.revision)

-- 失败：原子拒绝非法数组
local bad = afn.set_value("door", {[1]=1, [3]=3})
print(bad.success, bad.error) -- false invalid_information_value
```

<a id="fn-set-channel-value"></a>

### `afn.set_channel_value`

`afn.set_value` 的完全别名。

```lua
-- 成功
assert(afn.set_channel_value("door", true).success)

-- 失败：旧 revision
local bad = afn.set_channel_value("door", false, -1)
print(bad.success, bad.error) -- false revision_conflict
```

<a id="fn-set-information"></a>

### `afn.set_information`（兼容）

```text
afn.set_information(channel, value[, expected_revision[, bridge_name]]) -> action_result
```

`afn.set_information` 是统一值的兼容写入接口，可从无值创建；语义与 `set_value` 相同，但兼容 raw 方法只返回基础动作字段。新代码使用 `set_value` 获取值与 revision 字段。

```lua
-- 成功
assert(afn.set_information("door", "OPEN").success)

-- 失败结果
local bad = afn.set_information("door", 0/0)
print(bad.success, bad.error) -- false invalid_information_value
```

<a id="fn-clear-value"></a>

### `afn.clear_value`

```text
afn.clear_value(channel[, expected_revision[, bridge_name]]) -> value_action_result
```

清为“无值”，并在值实际存在时推进 tombstone revision；不停止激活。

```lua
-- 成功
local r = afn.clear_value("door")
assert(r.success and not r.value_present, r.error)

-- 失败：并发冲突
local bad = afn.clear_value("door", -1)
print(bad.success, bad.error) -- false revision_conflict
```

<a id="fn-clear-channel-value"></a>

### `afn.clear_channel_value`

`afn.clear_value` 的完全别名。

```lua
-- 成功
assert(afn.clear_channel_value("door").success)

-- 失败结果
local bad = afn.clear_channel_value("missing")
print(bad.error) -- unknown_channel
```

<a id="fn-set-primary-frequency"></a>

### `afn.set_primary_frequency`

```text
afn.set_primary_frequency(channel, frequency[, bridge_name]) -> configuration_result
```

设置主频；空字符串合法，表示清除主频并退出无线网络，不清值和本地配置。

```lua
-- 成功
assert(afn.set_primary_frequency("door", "factory.door.*").success)

-- 失败结果
local bad = afn.set_primary_frequency("door", "broken.[")
print(bad.success, bad.error) -- false invalid_frequency
```

<a id="fn-set-secondary"></a>

### `afn.set_secondary`

```text
afn.set_secondary(channel, mode[, frequency[, bridge_name]]) -> configuration_result
```

`mode` 为 `none/manual/auth`。`manual` 必须提供有效频段；其他模式忽略频段。指定命名桥接器而省略频段时用 `nil` 占位。

```lua
-- 成功
assert(afn.set_secondary("door", "manual", "factory.zone_a").success)
assert(afn.set_secondary("door", "auth").success)

-- 失败结果
local bad = afn.set_secondary("door", "manual")
print(bad.success, bad.error) -- false invalid_secondary
```

<a id="fn-set-channel-displayed"></a>

### `afn.set_channel_displayed`

```text
afn.set_channel_displayed(channel, displayed[, bridge_name]) -> boolean
```

修改一条信道的 CRT 展示标记；目标必须存在。需要配置权限。激活状态不会自动改变展示标记。

```lua
-- 成功
assert(afn.set_channel_displayed("door", true))

-- 失败结果
assert(not afn.set_channel_displayed("missing", true))
```

<a id="fn-set-display-channels"></a>

### `afn.set_display_channels`

```text
afn.set_display_channels(channel_names[, bridge_name]) -> boolean
```

原子替换展示清单和顺序。参数必须是无重复、全部存在的连续字符串数组；空数组合法。未列入的信道不会显示，即使正在激活也不会自动加入。

```lua
-- 成功
assert(afn.set_display_channels({"door", "notice", "boiler"}))

-- 失败结果：重复名称，旧清单保留
assert(not afn.set_display_channels({"door", "door"}))
```

<a id="fn-create-channel"></a>

### `afn.create_channel`

```text
afn.create_channel(definition[, bridge_name]) -> configuration_result
```

推荐使用 v2 字段，不填写旧 `type`：

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `name` | 是 | 唯一名称，最多 16 字符 |
| `primary_frequency` | 建议显式给出 | 可为空；空也会明确选择统一定义 |
| `secondary_mode` | 否 | `none`（默认）、`manual`、`auth` |
| `secondary_frequency` | manual 时 | 普通副频 |
| `value_present` | 否 | 默认根据是否有 `channel_value` 推断 |
| `value_kind` | 否 | `text/boolean/real`；省略时按 Lua 类型推断 |
| `channel_value` | value_present=true 时 | 实际值 |
| `receive_enabled` | 否 | 默认 true；false 为仅发送，true 为允许发送和接收 |
| `displayed` | 否 | 默认 true |

```lua
-- 成功：同一信道同时有无线主频和值
local r = afn.create_channel({
  name = "door",
  primary_frequency = "factory.door",
  secondary_mode = "auth",
  value_present = true,
  value_kind = "text",
  channel_value = "CLOSED",
  receive_enabled = true,
  displayed = true
})
assert(r.success, r.error)

-- 失败：manual 没有普通副频
local bad = afn.create_channel({
  name = "broken", primary_frequency = "factory.broken",
  secondary_mode = "manual"
})
print(bad.success, bad.error)
```

旧字段 `type/frequency/subtype/value/attach_auth` 仍可读入，供旧程序迁移；不要与含义不同的 v2 字段同时提交，冲突会抛出 Lua 参数错误。

<a id="fn-update-channel"></a>

### `afn.update_channel`

```text
afn.update_channel(channel, changes[, bridge_name]) -> configuration_result
```

原子更新给出的字段，缺失字段保持不变。推荐字段为 `name/primary_frequency/secondary_mode/secondary_frequency/value_present/value_kind/channel_value/receive_enabled/displayed`。`receive_enabled=false` 只关闭无线入站，不会禁用信道或停止本地发送。清除值应只给 `value_present=false`；并发敏感的值修改应改用 `set_value`。

```lua
-- 成功
local r = afn.update_channel("door", {
  name = "yard_door",
  primary_frequency = "yard.door",
  channel_value = "READY",
  value_kind = "text"
})
assert(r.success, r.error)

-- 失败：声明无值却同时提交值，整次不修改
local bad = afn.update_channel("yard_door", {
  value_present = false, channel_value = "conflict"
})
print(bad.success, bad.error)
```

<a id="fn-remove-channel"></a>

### `afn.remove_channel`

```text
afn.remove_channel(channel[, bridge_name]) -> configuration_result
```

删除持久信道，并清理其租约、无线 actor 与 Synaxis endpoint。成功时 `channel=nil`。

```lua
-- 成功
local r = afn.remove_channel("temporary_channel")
assert(r.success and r.channel == nil, r.error)

-- 失败结果
local bad = afn.remove_channel("missing")
print(bad.error) -- unknown_channel
```

<a id="fn-set-channel-type"></a>

### `afn.set_channel_type`（弃用兼容）

```text
afn.set_channel_type(channel, legacy_type[, replacement[, bridge_name]])
  -> configuration_result
```

`frequency/information` 仅作为兼容投影，不代表当前存储模型：

- `frequency` 只确保存在主频；replacement 若给出必须是有效主频，原值保留。
- `information` 只确保存在值并清除主频/副频；replacement 若给出按当前值标签解析。

新程序应使用 `set_primary_frequency`、`set_secondary`、`set_value` 和 `clear_value` 明确修改独立字段。

```lua
-- 兼容成功：不会删除已有值
local r = afn.set_channel_type("door", "frequency", "factory.door")
assert(r.success, r.error)

-- 失败：没有主频也没有 replacement
local bad = afn.set_channel_type("value_only", "frequency")
print(bad.success, bad.error)
```

<a id="fn-set-information-subtype"></a>

### `afn.set_information_subtype`（弃用兼容）

```text
afn.set_information_subtype(channel, subtype[, replacement[, bridge_name]])
  -> configuration_result
```

旧值标签转换接口。新建可选标签只有 `real/text/boolean`；类型变化通常必须同时给兼容 replacement。新程序直接调用 `set_value`，其 Lua 类型会决定标签。

```lua
-- 兼容成功
assert(afn.set_information_subtype("door", "boolean", true).success)

-- 失败：coordinate/player 只读
local bad = afn.set_information_subtype("door", "coordinate", {0, 64, 0})
print(bad.success, bad.error) -- information_subtype_read_only
```

<a id="fn-set-synaxis-activation"></a>

### `afn.set_synaxis_activation`

```text
afn.set_synaxis_activation(channel, enabled[, format[, x, y[, bridge_name]]])
  -> configuration_result
```

配置 Synaxis → 桥接器的独立激活输入。format 只允许 `real/boolean`；省略或空字符串保留当前格式。x、y 必须同时提供，范围均为 0～112。显式调用本函数（即使关闭）会退出旧“值端口兼任激活”迁移语义。

```lua
-- 成功
local r = afn.set_synaxis_activation("door", true, "real", 24, 60)
assert(r.success, r.error)

-- 失败结果：激活口不支持 vec3
local bad = afn.set_synaxis_activation("door", true, "vec3")
print(bad.success, bad.error) -- unsupported_synaxis_activation_format
```

<a id="fn-set-synaxis-receive"></a>

### `afn.set_synaxis_receive`

```text
afn.set_synaxis_receive(channel, enabled[, format[, x, y[, bridge_name]]])
  -> configuration_result
```

配置 Synaxis → 桥接器的值输入，只写值、不激活。可配置 `real/boolean/vec3/quaternion`；省略格式保留当前格式。短数组覆写前部并保留旧尾部，长数组扩展；非法整帧不改旧值。

```lua
-- 成功
assert(afn.set_synaxis_receive("pose", true, "vec3", 20, 70).success)

-- 失败结果：坐标必须成对且在范围内
local bad = afn.set_synaxis_receive("pose", true, "vec3", 200, 70)
print(bad.success, bad.error) -- invalid_synaxis_position
```

<a id="fn-set-synaxis-publish"></a>

### `afn.set_synaxis_publish`

```text
afn.set_synaxis_publish(channel, enabled[, format[, x, y[, bridge_name]]])
  -> configuration_result
```

配置桥接器 → Synaxis 的值输出，只发布值、不激活。无法转换时输出 Schema 安全默认：false、0、全零数组；Quaternion 缺少 `w` 时补 1。

```lua
-- 成功
assert(afn.set_synaxis_publish("pose", true, "quaternion", 88, 70).success)

-- 失败结果：Pose/Twist 不能新建
local bad = afn.set_synaxis_publish("pose", true, "pose")
print(bad.success, bad.error) -- unsupported_synaxis_format
```

全桥三个方向合计最多开放 32 个 Synaxis 端口。只开放值输入/输出不算激活；只有激活口收到有效 Real/Boolean 才建立 Synaxis 激活租约。

<a id="fn-bind-redstone"></a>

### `afn.bind_redstone`

```text
afn.bind_redstone(channel, side, strength[, bridge_name])
  -> configuration_result
```

`side` 可为 `front/back/left/right/up/down/all`，相对 CRT 正面；`strength` 可为 1～15 或字符串 `"all"`。同一输入可绑定多条信道；完全相同的组合幂等。

```lua
-- 成功：任何方向、任何非零强度
assert(afn.bind_redstone("door", "all", "all").success)

-- 失败：非法方向
local bad = afn.bind_redstone("door", "north", 15)
print(bad.success, bad.error) -- invalid_redstone_binding
```

<a id="fn-unbind-redstone"></a>

### `afn.unbind_redstone`

```text
afn.unbind_redstone(channel, side[, bridge_name]) -> configuration_result
```

删除这个**精确 side 选择器**下的所有强度行。`"all"` 只删除全向行，不会删除六个具体方向。

```lua
-- 成功
assert(afn.unbind_redstone("door", "front").success)

-- 失败结果
local bad = afn.unbind_redstone("door", "north")
print(bad.success, bad.error) -- invalid_redstone_binding
```

<a id="fn-transmit-temporary"></a>

### `afn.transmit_temporary`

```text
afn.transmit_temporary(frequency[, strength[, attach_auth[, bridge_name]]])
  -> {success,error,active,strength,handle}
```

建立不属于持久信道的持续无线发送。强度默认 15；`attach_auth=true` 时只使用桥接器有效鉴权板。临时 API 只传强度，不携任意信道值。

```lua
-- 成功
local tx = afn.transmit_temporary("factory.alarm", 12, false)
assert(tx.success, tx.error)
print(tx.handle)

-- 失败结果：非法频段
local bad = afn.transmit_temporary("broken.[")
print(bad.success, bad.error)
```

<a id="fn-pulse-temporary"></a>

### `afn.pulse_temporary`

```text
afn.pulse_temporary(frequency[, strength[, ticks[, attach_auth[, bridge_name]]]])
  -> {success,error,active,strength,handle}
```

建立 1～1200 tick 的临时无线发送；默认 15 强度、20 tick。

```lua
-- 成功
local tx = afn.pulse_temporary("station.bell", 15, 40, false)
assert(tx.success, tx.error)

-- 失败：超范围抛出
local ok, err = pcall(afn.pulse_temporary, "station.bell", 15, 1201)
if not ok then printError(err) end
```

<a id="fn-clear-temporary"></a>

### `afn.clear_temporary`

```text
afn.clear_temporary(handle[, bridge_name]) -> action_result
```

停止当前 ComputerID 拥有的一个临时发送。激活权限关闭后仍可清理，但必须仍获准。

```lua
-- 成功
local tx = assert(afn.transmit_temporary("factory.alarm"))
assert(afn.clear_temporary(tx.handle).success)

-- 失败结果
local bad = afn.clear_temporary("missing-handle")
print(bad.success, bad.error) -- unknown_temporary_handle
```

<a id="fn-clear-temporary-all"></a>

### `afn.clear_temporary_all`

```text
afn.clear_temporary_all([bridge_name]) -> integer
```

停止当前 ComputerID 的全部临时发送，返回删除数量。

```lua
-- 成功
print("removed", afn.clear_temporary_all())

-- 失败：白名单已拒绝时抛出；撤销策略本身会自动清理
local ok, err = pcall(afn.clear_temporary_all)
if not ok then printError(err) end
```

## CC 事件

有读取权限的已连接电脑可监听：

| 事件 | 参数 2（payload） |
| --- | --- |
| `afn_channel_started` | `{channel,type,active=true,strength}` |
| `afn_channel_stopped` | `{channel,type,active=false,strength=0}` |
| `afn_channel_changed` | 激活期间强度变化 |
| `afn_channel_value_changed` | 增加 `revision,value_present,value_kind,channel_value` |
| `afn_information_changed` | 上一事件的旧兼容别名 |
| `afn_display_changed` | `{channel}`；空串表示无选中项 |
| `afn_channel_timeout` | 信道或临时发送到期；临时 payload 含 `operation,handle,active=false` |
| `afn_channel_rejected` | 当前电脑的动作被拒；含 `operation,error` 和可选 `channel` |

Lua 模块常量：

```lua
local afn = require("afn")
print(afn.CHANNEL_VALUE_CHANGED)       -- afn_channel_value_changed
print(afn.LEGACY_INFORMATION_CHANGED) -- afn_information_changed

while true do
  local _, event = os.pullEvent(afn.CHANNEL_VALUE_CHANGED)
  print(event.channel, event.value_present, event.revision)
end
```

事件是有界、去重的状态通知，不是无限消息队列：首次建立监听不会补发全部历史状态；每 tick 有总预算。需要权威当前状态时收到事件后再调用 `afn.get/value`。

## raw `afn_bridge` 外设方法

`require("afn")` 只是对 raw 外设的便捷包装。启用/禁用信道 API 已移除，当前 raw 动态方法索引为 0～38。下面的 `p` 是：

```lua
local p = peripheral.find("afn_bridge")
assert(p, "no AFN bridge")
```

表中“失败”若写 `nil/false` 表示正常失败结果；参数或权限错误仍可能抛出，应使用 `pcall`。

| 索引 | raw 方法与参数 | 返回 | 成功 / 失败短例 |
| ---: | --- | --- | --- |
| 0 | `listChannels()` | 快照数组 | `#p.listChannels()`；无读取权限会抛出 |
| 1 | `listActiveChannels()` | 名称数组 | `p.listActiveChannels()`；无读取权限会抛出 |
| 2 | `listDisplayChannels()` | 名称数组 | `p.listDisplayChannels()`；无读取权限会抛出 |
| 3 | `getChannel(channel)` | 快照或 nil | `p.getChannel("door")`；未知名→nil |
| 4 | `getState(channel)` | 精简状态或 nil | `p.getState("door")`；未知名→nil |
| 5 | `getInformation(channel)` | 旧值表或 nil | 有值→table；无值/未知→nil |
| 6 | `getLastError(channel)` | string 或 nil | 无无线错误→nil；无读取权限会抛出 |
| 7 | `getDisplayChannel()` | 名称或 nil | 有选中项→string；空列表→nil |
| 8 | `setDisplayChannel(channel)` | boolean | 可展示→true；隐藏/未知→false |
| 9 | `nextDisplayChannel()` | 名称或 nil | 切换成功→string；空列表→nil |
| 10 | `previousDisplayChannel()` | 名称或 nil | 切换成功→string；空列表→nil |
| 11 | `set(channel[,strength])` | 动作结果 | `p.set("door",15)`；未知→`success=false` |
| 12 | `pulse(channel[,strength[,ticks]])` | 动作结果 | `p.pulse("door",15,20)`；ticks>1200 抛出 |
| 13 | `toggle(channel[,strength])` | 动作结果 | `p.toggle("door",8)`；未知→失败表 |
| 14 | `clear(channel)` | 动作结果 | 清自己来源→成功；未知→失败表 |
| 15 | `clearAll(channel)` | 动作结果 | 清全部来源→成功；无配置权限会抛出 |
| 16 | `setInformation(channel,value[,revision])` | 基础动作结果 | 可从无值写入；旧 revision→失败表 |
| 17 | `setChannelDisplayed(channel,boolean)` | boolean | 已知目标→true；未知→false |
| 18 | `setDisplayChannels(names)` | boolean | 合法连续数组→true；重复/未知→false |
| 19 | `createChannel(definition)` | 配置结果 | 合法 v2 表→成功；非法定义→失败表 |
| 20 | `updateChannel(channel,changes)` | 配置结果 | 原子更新→成功；未知→失败表 |
| 21 | `removeChannel(channel)` | 配置结果 | 删除→`channel=nil`；未知→失败表 |
| 22 | `setChannelType(channel,type[,replacement])` | 配置结果 | 旧兼容意图；缺必要 replacement→失败 |
| 23 | `setInformationSubtype(channel,subtype[,replacement])` | 配置结果 | 旧兼容转换；只读标签→失败 |
| 24 | `setSynaxisReceive(channel,enabled[,format[,x,y]])` | 配置结果 | 合法值输入口→成功；非法坐标→失败 |
| 25 | `setSynaxisPublish(channel,enabled[,format[,x,y]])` | 配置结果 | 合法值输出口→成功；旧 Pose/Twist→失败 |
| 26 | `bindRedstone(channel,side,strength)` | 配置结果 | `"all","all"`→成功；非法方向抛出/失败 |
| 27 | `unbindRedstone(channel,side)` | 配置结果 | 合法选择器→成功；非法方向→失败 |
| 28 | `transmit(frequency[,strength[,attach_auth]])` | 临时结果 | 成功含 handle；非法频段→失败表 |
| 29 | `pulseTemporary(frequency[,strength[,ticks[,attach_auth]]])` | 临时结果 | 成功含 handle；超时范围抛出 |
| 30 | `clearTemporary(handle)` | 动作结果 | 自有 handle→成功；未知→失败表 |
| 31 | `clearTemporaryAll()` | 删除数量 | 返回 0..32；未准入会抛出 |
| 32 | `getChannelValue(channel)` | `{present,kind,value,revision}` 或 nil | 已知无值仍返回表；未知→nil |
| 33 | `setChannelValue(channel,value[,revision])` | 含值字段的动作结果 | 合法类型→成功；非法值/冲突→失败 |
| 34 | `clearChannelValue(channel[,revision])` | 含值字段的动作结果 | 清为 absent→成功；旧 revision→失败 |
| 35 | `getFrequency(channel)` | 主副频表或 nil | 已知→table；未知→nil |
| 36 | `setPrimaryFrequency(channel,frequency)` | 配置结果 | 空串可清除；非法表达式→失败 |
| 37 | `setSecondary(channel,mode[,frequency])` | 配置结果 | none/auth 或 manual+频率→成功；非法→失败 |
| 38 | `setSynaxisActivation(channel,enabled[,format[,x,y]])` | 配置结果 | real/boolean→成功；vec3 等→失败 |

raw 方法没有包装器的最后 `bridge_name` 参数，因为 `p` 已经代表具体外设。

## 兼容迁移

- raw 索引现为 0～38；旧 `setEnabled` 已随信道禁用概念一并移除，其后的方法索引前移一位。
- `createChannel/updateChannel` 使用 `receive_enabled` 切换“仅发送”与“允许发送和接收”；没有独立的启用状态。
- `afn.information/set_information` 保留，现映射统一可选值；推荐 `value/set_value/clear_value`。
- `set_channel_type/set_information_subtype` 保留但弃用；它们只表达旧意图，不能恢复互斥存储模型。
- 快照保留 `type/subtype/value/attach_auth/revision`，但新程序读取 `schema_version=2` 和独立 v2 字段。
- `afn_information_changed` 与新 `afn_channel_value_changed` 同时发送，旧监听器可以继续工作。
- 旧 Synaxis 值端口兼任激活的存档语义会保留，直到玩家或 CC 明确调用新的 activation 端口设置；显式启用或禁用 activation 都表示完成迁移。

## 常见错误码

| 错误码 | 含义 |
| --- | --- |
| `unknown_channel` | 信道名不存在；不要把主频当信道名 |
| `revision_conflict` | 值已变化，重新读取后再计算 |
| `information_write_conflict` | 同 tick 更高优先级来源已写入 |
| `invalid_information_value` | 类型、长度、有限数或数组结构非法 |
| `information_subtype_read_only` | 旧 coordinate/player 值不可修改 |
| `invalid_frequency` | 主频表达式非法 |
| `invalid_secondary` | 副频模式或 manual 频率非法 |
| `invalid_synaxis_position` | x/y 不成对或超出 0～112 |
| `unsupported_synaxis_format` | 值端口请求了不可新建格式 |
| `unsupported_synaxis_activation_format` | 激活口不是 real/boolean |
| `synaxis_port_limit` | 三类端口总数达到 32 |
| `channel_limit` | 桥接器达到 64 条信道 |
| `runtime_source_limit` | 单信道运行来源达到 256 |
| `invalid_frequency_or_auth` | 无线主副频或鉴权关联当前无效 |
| `wireless_unavailable` | Create 无线运行环境当前不可用 |

权限错误通常直接抛出可读 Lua 文本，例如 `computer read access is disabled...`，而不是返回上表错误码。

## 频段表达式速查

主频和 manual 副频使用 AFN 发送端表达式：`?` 单字符、`*` 单层任意文本、`**` 跨层、`[A-C]` 字符集合、`正向.!排除!排除` 当前层多重排除。接收端地址保持字面量；更完整的规则、局部排除与性能说明见项目根目录 [README](../../README.md)。

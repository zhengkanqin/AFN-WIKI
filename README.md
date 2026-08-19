# AFN Advanced Frequency Network Wiki

[AFN Wiki](https://zhengkanqin.github.io/AFN-WIKI/) ·
[FUNCTIONS.md](./FUNCTIONS.md)


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

## AFN features

AFN is a Create addon built on Create's public dual-frequency wireless redstone link. It adds hierarchical addresses, aliases, history management, rule matching, authentication, channel values, ticket devices, a mailbox, and programmable bridges without changing how regular Create wireless devices handle redstone strength.

### Frequency boards

- A regular frequency board stores one primary frequency and up to five aliases. Aliases can use `OR` or `AND` logic.
- An auth frequency board stores an Owner, READ / WRITE ACL, a hidden authentication frequency, and an optional installation lock. READ controls viewing and receiving; WRITE controls editing; the Owner manages access.
- Frequencies accept English letters, numbers, Chinese characters, and dot-separated levels, for example `factory.production.line_01`.
- `?` matches one character in the current level. `*` matches any characters in the current level. `**` can cross levels and dots. `[A-C]` and `[0-9]` match one case-sensitive character from a range.
- `!` excludes shorthand items only from the immediately preceding level. Multiple exclusions may be chained:

```text
1.2.[1-9].!1!2!3![4-8].[2-4].!2!3
```

The expression above matches only `1.2.9.4`. Expressions containing `!`, `[]`, `*`, or `?` are not added to the history library. The history library stores literal addresses by hierarchy and suggests entries from the current level after a prefix is entered.

### Devices

| Device | Function |
| --- | --- |
| Wireless redstone terminal | Create-compatible two-slot wireless device. Board orientation and horizontal or vertical placement do not change matching. |
| Carrot signal terminal | Attaches to all six faces. Player yaw does not rotate it within one attachment face; replanted carrots continue growth detection. |
| Mailbox | Single-channel send, receive, or transceiver device. Stores received values and reads/writes Create Display Link sources and targets. Automatic write and automatic output are mutually exclusive to prevent loops. |
| AFN Bridge | Stores up to 64 channels and provides a CRT, channel values, redstone bindings, Synaxis ports, and a CC:T peripheral. |
| Big Bridge | 2×1×2 touch-screen bridge. Power and screen lock are controlled by physical buttons. |
| AFN advanced computer | Protected CC:T host. When an auth board is installed, only allowlisted ComputerIDs may use AFN functions. |
| Invoice machine | Uses an auth board to issue or unbind tickets in batches. Tickets from one batch stack to 64. |
| Ticket validator | Checks ticket frequency and Owner ACL. If its 27-slot retained-ticket inventory is full, it consumes nothing and does not release access. |
| Auth card reader and identity pillar | Emit a 20-tick redstone pulse after authentication. Idle, success, and failure indicators are dark, green, and red. |

An auth board installed in a device is a credential, not a consumable. The Owner or an authorized player can view and remove an unlocked board according to the device rules. A locked board can be removed only by breaking the device. Engineer's Goggles show only frequencies the current player may read.

### Channel values and wireless payloads

Each bridge channel can contain a name, primary frequency, optional secondary mode, optional value, and activation state at the same time. Values are text, booleans, or arrays of 1–7 finite real numbers. Text is limited to 1,024 Unicode code points and 4,096 UTF-8 bytes. The empty string `""` is a present text value; `clear_value` creates an absent value.

Writing a value does not activate a channel, and activation does not require a value. AFN-to-AFN links can carry values; regular Create devices process only redstone strength 0–15. Wireless input is not retransmitted automatically, preventing A→B→A loops. When several sources are active, the highest strength wins; value-bearing sources are resolved by the server's stable arbitration rule.

### Screens and maps

Bridge CRTs and Big Bridge screens provide five interpretation views: default, switch, bar chart, gauge, and map. Views do not change the stored value type. If a value cannot be interpreted, a switch falls back to off, charts fall back to 0, and a map still shows the device point.

- Bar charts and gauges can define names and lower/upper limits for real-array components.
- Maps read the first three real-array components or parseable text coordinates, and can display device points, channel points, and favorites.
- Screen settings control display order, visibility, confirmation before interaction, integer input, and map background rendering.
- The map reads client-loaded terrain at low frequency. With the background disabled, it draws only lines, points, and favorite labels; it never generates or force-loads chunks for rendering.
- The Big Bridge uses physical power and lock buttons. Locking disables screen edits; powering off stops screen rendering.

### Redstone, Synaxis, and CC:Tweaked

Redstone bindings use front, back, left, right, up, and down relative to the screen front. They also support all-directions and exact-strength or all-strength matching. One redstone input can activate multiple channels.

Synaxis exposes three independent ports per channel: activation input, value input, and value output. Activation input accepts Real / Boolean strength. Value ports accept Real, Boolean, Vec3, and Quaternion; both ends must use the same Schema before wiring. A short input array overwrites the front and preserves the old tail; a longer array extends the value. Output truncates or fills components and publishes a safe default when conversion is impossible. Pose and Twist remain save-compatible only; Bundle is not supported.

CC:Tweaked can control a bridge through the `afn_bridge` peripheral or `require("afn")`. With an auth board installed, the ComputerID must be in the allowlist. Read, activation, and configuration capabilities are independent. Permission results are cached in the session, so normal calls do not scan the world, NBT, containers, or ACL on every invocation.

### Create and aviation compatibility

AFN uses Create's public wireless link. Addons that keep the Create interface can continue basic frequency matching. Simulated Aviation physicalized devices use physical-domain coordinates and their own orientation for matching. Devices that bypass Create's public link and implement a separate protocol are outside automatic compatibility.

### Permission and performance boundaries

Policy is pushed to connected sessions when the auth board, allowlist, or capability switches change. Each Lua call reads an O(1) session cache. Computer lifecycle checks run every tick; complete physical-credential audits run at low frequency. Revoking admission or activation clears that ComputerID's persistent leases and temporary transmissions.

Lua cannot submit an Owner, ACL, hidden auth frequency, or forged authentication identity. Auth secondary frequencies and temporary authenticated transmissions use only the bridge's own valid auth board.

## Dependencies

- Minecraft 1.21.1
- NeoForge
- Create 6.0+
- CC:Tweaked and Synaxis are optional integrations.

## Documentation

- [AFN Wiki](https://zhengkanqin.github.io/AFN-WIKI/) — searchable HTML overview and guided examples.
- [FUNCTIONS.md](./FUNCTIONS.md) — complete Lua function parameters, return values, events, errors, and raw peripheral methods.

<details>
<summary>中文</summary>

## AFN 功能

AFN 是基于 Create 公开双频无线红石链路构建的附属模组。它增加了分层地址、别名、历史库、规则匹配、鉴权、信道值、票务设备、信箱和可编程桥接器，不改变普通 Create 无线设备处理红石强度的方式。

### 频段板

- 普通频段板保存一个主频和最多五个别名，别名可使用 `OR` 或 `AND` 逻辑。
- 鉴权频段板保存 Owner、READ / WRITE ACL、隐藏鉴权主频和可选锁定状态。READ 控制查看和接收，WRITE 控制编辑，Owner 管理权限。
- 频段允许英文、数字、汉字和点号分层，例如 `factory.production.line_01`。
- `?` 匹配当前层一个字符；`*` 匹配当前层任意字符；`**` 跨层匹配；`[A-C]`、`[0-9]` 匹配一个大小写敏感字符。
- `!` 只排除紧邻上一层的简写项，可连续使用：

```text
1.2.[1-9].!1!2!3![4-8].[2-4].!2!3
```

上式只匹配 `1.2.9.4`。包含 `!`、`[]`、`*`、`?` 的表达式不会写入历史库。历史库按层级保存纯字面地址，输入当前层前缀后推荐同层内容。

### 设备

| 设备 | 功能 |
| --- | --- |
| 无线红石信号终端 | Create 双槽无线设备；频段板方向、终端水平或垂直摆放不改变匹配。 |
| 胡萝卜信号终端 | 可贴六个面；同一附着面内不受玩家朝向限制；补种胡萝卜后继续检测生长。 |
| 信箱 | 单信道发送、接收或收发；保存接收内容，并与 Create Display Link 支持的来源和目标互读写。自动写入和自动输出不能同时开启。 |
| AFN 桥接器 | 最多 64 条信道，提供 CRT、信道值、红石绑定、Synaxis 端口和 CC:T 外设。 |
| 大型桥接器 | 2×1×2 触控大屏版本；电源和屏幕锁定由实体按钮控制。 |
| AFN 高级电脑 | 受保护的 CC:T 主机；安装鉴权板后，只允许白名单 ComputerID 使用 AFN。 |
| 发票机 | 使用鉴权板批量签发或解绑票券；同一批次票券可堆叠到 64。 |
| 验票机 | 校验票券频段和 Owner ACL；27 格留票库满时不扣票、不放行。 |
| 鉴权刷卡机、身份验证柱 | 鉴权后输出 20 tick 红石脉冲；待机、成功、失败灯分别为暗、绿、红。 |

设备中的鉴权板是安装凭证，不会被消耗。未锁定时，Owner 或有权限玩家可以查看和按设备规则拆卸；锁定后只能破坏设备移除。工程师护目镜只显示当前玩家有权读取的频段。

### 信道值与无线携值

每条桥接器信道可以同时拥有信道名、主频、可选副频、可选值和激活状态。值类型为文本、布尔或 1～7 项有限实数组。文本上限为 1024 个 Unicode 码点且不超过 4096 个 UTF-8 字节。空文本 `""` 是存在的文本值，`clear_value` 才会变成无值。

写值不会激活信道，激活也不要求已有值。AFN 桥接器之间可以沿已放行链路携带值；普通 Create 设备只处理 0～15 强度。无线入站不会自动再次发射，防止 A→B→A 回环。多来源强度取最大值，携值来源按服务端稳定规则选择唯一胜者。

### 屏幕与地图

桥接器 CRT 和大型桥接器屏幕提供默认、开关、柱状图、仪表盘、地图五种解释视图。视图不改变值类型；无法解释时，开关回退为关闭，图表回退为 0，地图至少显示设备点。

- 柱状图和仪表盘可以为实数组分量配置名称与上下限。
- 地图读取实数组前三项或可解析的文本坐标，显示设备、信道和收藏点。
- 屏幕设置控制展示顺序、可见性、交互确认、整数输入和地图背景。
- 地图只低频读取客户端已加载区域；关闭背景后只绘制线条、点和收藏文本，不生成或强制加载区块。
- 大型桥接器使用实体电源键和锁定键；锁定后不可编辑，断电后停止屏幕渲染。

### 红石、Synaxis 与 CC:Tweaked

红石绑定以屏幕正面为基准，支持前、后、左、右、上、下和全向；强度支持精确值和全强度。一个输入可以同时激活多条信道。

Synaxis 为每条信道提供激活输入、值输入和值输出。激活输入接受 Real / Boolean 强度；值端口支持 Real、Boolean、Vec3 和 Quaternion，接线前两端必须选择相同 Schema。短数组输入覆写前部并保留旧尾部，长数组扩展；输出截断或补齐，无法转换时发送安全默认值。Pose、Twist 仅保留旧存档兼容，Bundle 暂不支持。

CC:Tweaked 通过 `afn_bridge` 外设或 `require("afn")` 控制桥接器。安装鉴权板后，ComputerID 必须在白名单中；读取、激活、配置权限独立管理。权限结果保存在会话缓存中，普通调用不会逐次扫描世界、NBT、容器或 ACL。

### Create 与航空学兼容

AFN 使用 Create 的公开无线链路。未修改 Create 接口的附属设备可以继续进行基础频率匹配；航空学物理化设备按物理化域坐标和自身朝向参与匹配。绕过 Create 公开链路、使用独立通信协议的设备不在自动兼容范围内。

### 权限与性能

鉴权板、白名单或能力开关变化时，权限策略会推送到连接会话。每次 Lua 调用只读取 O(1) 会话缓存；电脑生命周期检查每 tick 执行，完整物理凭证审计低频执行。撤销准入或激活权限会清理对应 ComputerID 的持续租约和临时发送。

Lua 不能写入 Owner、ACL、隐藏鉴权主频或伪造鉴权身份。鉴权副频和临时鉴权发送只使用桥接器自己的有效鉴权板。

## 依赖

- Minecraft 1.21.1
- NeoForge
- Create 6.0+
- CC:Tweaked、Synaxis 为可选兼容

## 文档

- [AFN Wiki](https://zhengkanqin.github.io/AFN-WIKI/)：模组总览、功能说明和示例。
- [FUNCTIONS.md](./FUNCTIONS.md)：Lua 函数参数、返回值、事件、错误码和 raw 外设方法。

</details>



[中文](./README.zh-CN.md)
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





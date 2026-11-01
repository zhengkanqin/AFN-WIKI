[中文](./README.zh-CN.md) · [AFN WIKI](./index.html) · [Lua reference](./FUNCTIONS.md)

# AFN WIKI

**Connect everything. Let data flow your way.**

Create: Advanced Frequency Network

**AFN 1.8.0 · Minecraft 1.21.1 · NeoForge · Create 6.0.x**

Wireless redstone with addresses, permissions and data. Read instruments through Mailboxes, configure machines over a channel, build a control screen, and connect portable maps, pagers and computers to the same network.

Install AFN on client and server. Create is required. CC:Tweaked, Synaxis, Xaero World Map, Aeronautics / Simulated, Create: Connected and other integrations contribute features when their corresponding mods are installed.

## Organize wireless redstone with frequencies

### Start with a frequency

1. Right-click a Frequency Board and enter `factory.line_1.motor`.
2. Put it in a Create Redstone Link frequency slot. The other slot must also match at both ends; ordinary items can still be the second frequency.
3. Power the sender. A selector such as `factory.*.motor` can address several receivers.
4. Use a Mailbox or Bridge to carry data, and an Authentication Board to restrict access.

Hover a board in an inventory and press **Space** to edit it. Boards are configuration credentials, not consumables.

### Addressing, authentication and long signals

Dots separate levels. One board stores its main address and up to five aliases, with OR / AND reception rules.

| Sender selector | Meaning | Example |
| --- | --- | --- |
| `?` | One character in one level | `line_?.motor` |
| `*` | Any characters within one level | `factory.*.motor` |
| `**` | Zero or more levels; occupies its own level | `factory.**.motor` |
| `[A-C]` | One character from a set / range | `factory.line_[A-C]` |
| `!` | Exclude current-level entries | `factory.*.!private!test` |

**Senders use selectors; receivers use literal addresses.** Cross-level reception allows a shorter sender address to cover a deeper receiver address. Pairs containing AFN boards match independently of slot order, while both slots still have to match. Plain Create item pairs keep their original order.

Authentication Boards add an Owner, shared read / write access, a hidden authentication frequency and an installation lock. Matching the public frequency does not bypass authentication. Regular boards have no Owner restriction; interfaces and goggles reveal only information the player may read.

Long signals are off by default. Enable them at both ends with valid Authentication Boards for unlimited distance **within one dimension** and on-demand wake-up of unloaded endpoints. Quota counts devices per Owner: the default is 15 devices, and several channels for the same Owner on one device share one unit. Server settings may change the limits. Bridges use actual boards in channel slots rather than a separate board on the Bridge body.

## Send messages with Mailboxes

### What is a channel?

A channel holds a primary frequency, an optional secondary frequency, optional content and activation state. Frequencies address the message; content can be text, a Boolean or an array of finite real numbers, with activation strength from 0 to 15. Changing content and activating transmission are separate actions. Devices with multiple channels, such as Bridges, also use channel names to identify and reference each channel.

### Mailboxes

Mailboxes transmit both strength and content using the same frequency rules. Choose Receive, Transmit or Transceive mode; Transceive does not directly retransmit incoming signals. Sneak-right-click to configure the mode and content. Directional Mailboxes receive according to incidence angle; Modulating Mailboxes change received strength with sender distance.

Logistics Mailboxes accept item lists and place orders on a bound Create logistics network. Stock Mailboxes count selected items in a specified inventory or logistics network and output arrays, JSON or Map.

### Send your first message

1. Place two regular Mailboxes and install a board set to `workshop.notice` in each one's frequency slot. Keep the other frequency slot identical at both ends too.
2. Sneak-right-click the sender, choose Transmit, enter `Warehouse online` and confirm. Set the other Mailbox to Receive.
3. Power the sender with redstone. The receiver receives both strength and content; open its configuration to see `Warehouse online`.
4. Edit the content and activate again to send another message. Enable Activate on Edit if submitting an edit should send it immediately.

Output syntax can process received content. To write the result to a display or machine, use Automatic Output in the next section.

### Channel output syntax

Output syntax extracts, converts or calculates an outgoing value without changing its stored source. A single `${...}` expression preserves its type; mixing expressions and text produces text.

```text
${number($[0])}
Stock: ${$.items[0].count}
{"deposit_positions_absolute":[[${$[0]},${$[1]},${$[2]}]]}
```

Mailboxes / hidden terminals use `$` for received content; use `$[0]` to obtain an entire plain-text message. Bridges use `${ChannelName}` or function argument `$.ChannelName` for local channels. Array indexes start at **0**. Self-references read raw input; other channels expose their effective output.

The table covers all **33 functions**, followed by input, expression and output examples.

| Task | Functions |
| --- | --- |
| Missing values / types | `default`, `exists`, `type`, `size` |
| Conversion | `number`, `unit_number`, `text`, `boolean`, `json`, `game_time` |
| Arrays | `sum`, `avg`, `min`, `max`, `join` |
| Text | `substr`, `contains`, `starts_with`, `ends_with`, `replace`, `split`, `trim`, `lower`, `upper` |
| Arithmetic | `add`, `sub`, `mul`, `div`, `round`, `clamp` |
| Branches | `if(test,yes,no)`, `switch(value,match,result,...[,default])` |
| Signal to data | `strength($)` or `strength($.ChannelName)` |

```text
${add($.Fuel1,$.Fuel2,$.Fuel3)}
${number($.Stress[0])}
${if($.Enabled,"Running","Stopped")}
${switch($.Mode,0,"Stop",1,"Forward","Unknown")}
${strength($.Sensor)}
```

| Example input | Expression | Output |
| --- | --- | --- |
| `Fuel1=2`, `Fuel2=3`, `Fuel3=5` | `${add($.Fuel1,$.Fuel2,$.Fuel3)}` | `10` |
| `"1,234,211 su"` | `${number($[0])}` | `1234211` |
| `Enabled=true` | `${if($.Enabled,"Running","Stopped")}` | `Running` |
| `Mode=1` | `${switch($.Mode,0,"Stop",1,"Forward","Unknown")}` | `Forward` |
| Received strength `7` | `${strength($)}` | `7` |

Text-match example: `${switch($.Mode,"Forward","Running","Stop","Idle","Unknown")}` returns `Running` for `Mode="Forward"`. The full function cards list input, output and limits for every function.

In these examples, Fuel and Mode are native numeric channels, Enabled is Boolean, and Stress is text. `add` accepts multiple arguments. Native single-number channels need no `[0]`; JSON arrays need an index even when they contain one item, and multi-value arrays need indexing or aggregation. `number` extracts the first number and removes its grouping commas: `1,234,211 su` becomes `1234211`. `if` requires a Boolean condition; `switch` distinguishes numbers from text. Both evaluate only the selected result branch. See AFN WIKI for exact argument rules, JSON paths and copyable examples.

### Activation and power

Mailboxes, Stock Mailboxes and Bridges expose their applicable timers, activate-on-edit, activation conditions and output-strength settings. Value changes and activation are separate until the corresponding option is enabled.

For a Mailbox value of `{"temperature":32,"ready":true}`, test its fields:

```text
${$.temperature} >= 30 & ${$.ready} = true
```

Bridges can also reference channel names, for example `${Temperature} >= 30 & ${Enabled} = true`. Wireless content received by a Mailbox does not trigger its condition or activate-on-edit pulse.

Conditions support comparisons, `&` / `&&`, `||` and parentheses; blank disables them. Output power accepts numbers or output syntax and clamps to 0–15. Blank follows the triggering source; local automatic activation without external power uses 15. A regular Mailbox power rule can convert original input power with `${strength($)}`. Hidden terminals can read it in content output syntax, but their current power field rejects that self-reference. Bridge activation / power rules prevent self-power feedback and should read an independent input channel.

## Connect everything

Mailboxes bring device readings into channels and deliver content to displays and machine settings. Automatic Read, output syntax and Automatic Output form one information flow.

### Device guide

Sneak-right-click with a Wrench to remove AFN blocks.

| Device | Purpose |
| --- | --- |
| Frequency / Authentication Boards | Addresses, aliases, matching and permissions |
| Mailbox, Directional / Modulating Mailboxes | Carry values, read attached devices or write data / settings |
| Logistics Mailbox | Request item lists from a bound Create logistics network |
| Stock Mailbox | Count selected inventory / network items; send arrays, JSON or Map |
| Bridge | Expandable screen with channels, redstone, Synaxis and CC:T interfaces |
| Hidden Channel Configurator | Add receivers to non-AFN faces; weakly activate their host and write to devices |
| Dynamic Filter | Replace installed filter rules or replenish passage quotas remotely |
| Portable Map Channel Terminal | Send coordinates, save locations and broadcast targets |
| Channel Pager | Conversations, unread alerts, ringtones, avatars and mapped phrases |
| Blueprint Channel Editor | Search / edit blueprint frequencies, authorize boards and bulk-edit text |
| Invoice Machine, Ticket Validator, Auth Card Reader, Identity Pillar | Issue / validate tickets and turn authorized interactions into redstone |

### Automatic Read

Automatic Read copies data from the attached block into the Mailbox's content. Automatic Output writes current content to the attached device. They are mutually exclusive on one Mailbox. Check readings and modes in the GUI dropdown; you can select all, and at least one stays selected.

One selection keeps the original text; multiple selections produce JSON. Keys use field names where possible, such as `Total`, read with `${$.Total}`. Duplicate names gain a source prefix; spaces and punctuation become underscores. Numbers, booleans and valid JSON objects or arrays keep their types; other content becomes a string. Combined output exceeding 1024 characters or 4096 bytes becomes `{"error":"content_limit"}` instead of truncated JSON.

| Source block | Available data |
| --- | --- |
| Speedometer / Stressometer | RPM; stress bar, percentage, current / total / remaining stress |
| Smart Observer / Stockpile Switch | Matching item / fluid counts or lists; inventory fill level |
| Nixie Tube; Belt / Depot | Displayed content; transported item names |
| Cuckoo Clock; Train Station / Observer; Elevator Contact | Time; train details / names; current floor |
| Factory Gauge; Seat | Connected panel stock / request state; passenger name |
| Stock Ticker / Stock Link | The logistics network's AFN name |
| Flight Control Navigation Terminal (0.8.3+) | Current waypoint number (starting at 1), target world coordinates x,y,z, and current leg completion percentage 0–100 |
| NetMusic: Music Player / Megaphone | Track metadata, playback, estimated progress and lyrics; stream address, name, range and broadcast state |

Flight mods add altitude, velocity, angle, sensor, navigation and gas readings. Availability depends on the block and installed mods; AFN WIKI and the in-game manual list the actual sources.
All three Flight Control navigation readings can be selected together. Coordinates are empty without a valid target; follow, indefinite orbit and other states without a defined leg completion rate return no progress value.

### Automatic Output

Display targets receive text. Machine targets accept a plain primary value or JSON. Hidden terminals share these output adapters.

| Target | Example payload | Result |
| --- | --- | --- |
| Nixie Tube / Display Board | `Warehouse online` | Display text; boards also support segment widths, colors and cycling |
| Rotation Speed Controller | `128` or `{"speed":128}` | Set target RPM |
| Packager | `{"items":[{"id":"minecraft:apple","count":4}]}` | Package the requested items |
| Frogport / Postbox | `{"address":"Dock"}` | Set a package address |
| Stock Ticker / Stock Link | `{"network":"main"}` | Join a named logistics network |
| Mechanical Saw / Basin | `{"result":"minecraft:apple"}` | Filter recipes by output; ingredients and process conditions still apply |
| Mechanical Arm | `{"deposit_positions_absolute":[[120,64,-30]]}` | Replace reachable deposit locations |
| Sequenced Gearshift | Program text or `steps` JSON | Replace its instructions |
| Note Block, NetMusic Megaphone and addon devices | Their documented fields | Adjust sound / playback and machine settings |

Arm fields `take_positions` / `deposit_positions` are **relative to the arm**; `_absolute` fields are world coordinates. Providing either list for one side replaces that side's targets; an omitted side stays unchanged. Busy arms apply position changes after becoming empty-handed. Item result filters accept IDs, paths and unambiguous localized names.

#### Dynamic Filters

Dynamic Filters receive rules while installed in filtering slots, not while carried. Rules support names, IDs, tags and Create attributes. Empty rules pass nothing; valid documents replace all rules, and invalid documents retain the previous configuration.

```text
{Apple, Bread}
tag:minecraft:logs
mode:disj
```

A stock Map with quantities selects quota mode. Passing items consumes the remaining quantities; rewriting rules resets them:

```text
{minecraft:apple:2, minecraft:bread:1, #minecraft:logs:5}
```

### NetMusic

Music Player readings can be selected individually: playback state, title, artists, translated title, duration, elapsed time, remaining time, progress, current lyric, full lyrics, song source, looping, redstone state, VIP status, read-only status and disc presence. One selection keeps its original output; multiple selections produce JSON. Unselected readings are not sampled and do not request lyrics.

Times use seconds and progress uses percent from 0 to 100. Elapsed time, remaining time and progress are estimates from the server countdown, not precise audio playback time. Lyrics apply only to supported NetEase Cloud Music tracks and are fetched asynchronously and cached only when selected. Unavailable or missing lyrics produce an empty value. Full lyrics exceeding 1024 characters or 4096 bytes return “Lyrics exceed the channel length limit” rather than truncated lyrics.

```json
{"Title":"Example Track","Artists":"Example Artist","Playing":true,"Progress":25}
```

Megaphones still expose their stream address, name, range and broadcast state. Automatic Output configures `state`, `source`, `name` and `range`.

## More channel devices

### Bridge

The current Bridge is the expandable brass-cased screen. Older CRT and Big Bridge registrations remain for saved-world migration rather than new builds.

Equally oriented blocks form a complete rectangular screen; a shape with gaps is not one complete display. Sneak-right-click opens the editor, ordinary right-click operates controls. Allocate a non-overlapping rectangle per channel; the old 4×4 region limit no longer applies.

| Mode | Presentation |
| --- | --- |
| Default / Text | Content and configured choice buttons |
| Switch | Scalar / array components, including Boolean text and 0/1 |
| Bar | Adaptive vertical / horizontal bars with names and ranges |
| Gauge | Adaptive centered instrument layouts |
| Map | Xaero / AFN terrain or grid; multiple points, named lines / areas, favorites, entities and dynamic rotation |
| Logistics | Independent item / count / address groups to select and send |
| Stock | Item icons and counts from Stock JSON / Map |
| Dialogue | Pager messages, latest-only / scrollable history and simple replies |

Configure titles, standby labels, interaction, confirmation, controls, background and other foreground colors separately. “Display Output Syntax” presents derived output and disables screen editing. `.bridge` imports / exports carry configuration and data; screen placements are excluded from import.

Map scroll zooms around the focused point, middle-drag pans, and recenter restores a useful view. Pending edits retain the view until confirmation. Submitted / external coordinates and device motion trigger a fit only when either point leaves the canvas. GUI entity options control whether screen buttons exist; nearby clicks snap to enabled targets.

#### Map data formats

Coordinates are world `x,y,z`. A single point may be `0,64,0`; multiple points accept flat groups of three such as `0,64,0,32,64,16`, or nested arrays:

```json
[[0,64,0],[32,64,16]]
```

A named point may use `{"name":"Warehouse","position":[0,64,0]}` or separate `x`, `y`, `z` fields. Points, lines and areas can appear alone or together, with each `name` displayed on the map:

```json
{
  "points":[{"name":"Warehouse","color":"#FF7043","text_color":"#FFE0B2","position":[0,64,0]}],
  "lines":[{"name":"Route","color":"#66BB6A","text_color":"#DCE775","points":[[0,64,0],[32,64,16]]}],
  "areas":[{"name":"Work zone","color":"#42A5F5","text_color":"#B3E5FC","points":[[0,64,0],[32,64,0],[32,64,16]]}]
}
```

`color` sets geometry color and `text_color` sets label color. Prefer `#RRGGBB`; omitted fields use the corresponding Bridge colors. Shape vertices inherit their shape's colors unless explicitly overridden. `#RGB`, `0xRRGGBB`, decimal RGB integers and `[r,g,b]` are also accepted.

Lines need two or more vertices; areas need three or more, connected in the given order. `polygons` aliases `areas`; both `lines` and `areas` accept multiple shapes. When lines or areas exist, the device-to-target connection setting is ignored while defined geometry still renders. Lower-right coordinates and distance use the first point and the device itself.

Clicking still replaces channel data with **one coordinate**, rather than appending to the original geometry. Nearby clicks snap to displayed points, including line and area vertices. The in-game Bridge help tab covers every interaction mode, common settings and copyable examples.

### DP面板

Find the modules under **AFN Modules** at the bottom of the Dashpanels tab. Place them on a panel and open properties with a Panel Wrench. Each module uses its two frequency slots in Panel Link. Hover its item and hold **V** to open the native Wiki page for its functions and settings.

#### Control sliders

Standard, long, horizontal and long horizontal sliders use 3×5, 3×10, 5×3 and 10×3 panel pixels. Long variants match the large radar's diameter.

Sliders send a number between their bounds, defaulting to 0–100. Integer output rounds the value; signal strength defaults to 15 and is limited to 0–15. Pulse on change is enabled by default: operating the control keeps it active and updates the value continuously, followed by a 2-tick pulse with the final value on release. Activation conditions work independently and keep the signal active while true. Initialization, reloads and configuration changes do not trigger manual-change pulses.

- **Nodes:** Enter `20,50,80`, `[20,50,80]` or channel output syntax. In-range nodes are marked beside the scale. Reaching a node stops the current drag; release and drag again to pass it.
- **Sensitivity:** A lower multiplier gives finer movement. Standard sliders default to 1; long sliders default to 0.4. While holding a slider with the right mouse button, scroll for fine adjustment at half the configured sensitivity, ignoring nodes.
- **Colors:** Configure the slider, needle and scale separately. Node markers use the scale color.

Bounds, strength, conditions, nodes and sensitivity accept channel output syntax. Blank output syntax sends the current number; plain text sends fixed content; expressions containing `${...}` send their result. Invalid expressions or missing sources stop output rather than retaining an old value.

#### Joystick

Dragging sends a two-dimensional `[x,y]` array. Two corner settings bound the X and Y ranges, defaulting to `-1,-1` and `1,1`; integer output is available. Corners, strength, conditions, nodes and output accept channel output syntax.

Nodes accept forms such as `0,0` or `[[0,0],[1,1]]`, with `[0,0]` as the default. Memory is off by default: on release, the stick returns at a uniform speed to the nearest node. Enable memory to retain the released position. Pulse on change defaults to on, keeping the control active while operated and sending the final value in a short pulse on release. Blank output syntax preserves the coordinate pair; use `${JoystickName[0]}` and `${JoystickName[1]}` to transform the stick's own coordinates.

#### Gauges and displays

| Module | Function |
| --- | --- |
| Fan / Circular Gauge | Receive one number; configure a name, name visibility, bounds, and background, needle and scale colors. Bounds default to 0–100; out-of-range values hold the needle at an endpoint. The circular gauge takes less space |
| Small / Large Radio | Show the latest pager-format message with its avatar, name and body, or anonymous plain text. Right-click to clear it; configure screen background and text colors. No message leaves the display blank |
| Small / Large Information Board | Display raw channel content; configure screen background and text colors |
| Button / Switch / Push Button | Configure a name, channel content and strength; content and strength accept channel output syntax. Tap the button for a pulse or hold it for continuous output until released. Switches and Push Buttons toggle persistent output on each click. Buttons also support a cap color |
| Channel Placeholder | Receive content and strength for expressions to reference by name throughout the same panel network. Uses one panel grid cell; configure its color |

Colors use `RRGGBB` or `#RRGGBB`. Receivers retain their latest content after activation ends. Hiding a gauge's name does not change name references. Animation follows Dashpanels.

#### Radar and energy columns

Standard and large radars center on the module's world position. They show targets without terrain or automatic zoom. Input accepts one world coordinate `x,y,z`, flat arrays grouped in threes, nested coordinate arrays, and Bridge map JSON containing points, lines and areas. Configure rotation, scale, background, grid, points and fixed-point colors. Scale must be positive; the default displayed radius is 64 blocks.

Energy columns use 1×4 vertical or 4×1 horizontal panel pixels, with 2×10 vertical and 10×2 horizontal long variants. Their segmented battery display receives one number, defaults to 0–100 and clamps beyond the bounds. Two nodes divide low, middle and high ranges; default colors are **red, yellow and green**, respectively. Blank nodes split the range into thirds. Bounds and nodes accept channel output syntax, and each range has its own color. The latest number remains after activation ends.

#### Reference by name

Module names act as channel names throughout the same panel network, including all modules on merged panels and panels connected by cable. Use distinct names. AFN modules provide values; native modules provide only redstone strength through `strength`. Modules with multiple outputs use the highest output strength:

```text
${SliderName}
${strength($.SwitchName)}
```

Bounds must resolve to finite numbers, with the lower bound no greater than the upper bound; conditions must resolve to a Boolean. Invalid expressions stop output. The in-game chapter appears only while Dashpanels is loaded.

### Portable Map Channel Terminal

Map Terminals send / receive coordinates, save favorites and broadcast entity / hostile targets. They work in hand, on lecterns, navigation tables and Create Placards. Entity display excludes the terminal's own entity to avoid duplicating its position arrow.

### Hidden Channel Terminal

Hold the configurator and right-click a face to create / edit a receiver. Sneak-right-click removes it, subject to board permissions. Middle-click copies configuration; sneak-middle-click exits copy mode. AFN devices cannot host hidden faces.

Hidden faces **weakly activate their host without powering adjacent blocks**. Covering a face does not block wireless reception. Configuration travels with pistons, Create contraptions and Sable structures; permanent destruction removes it. Automatic output handles displays, machine settings and installed Dynamic Filters.

### Channel Pager

Pagers work in inventory, on lecterns and on Placards. Frequency, name, avatar, ringtone, maximum loops and phrases are per-channel settings. Unread channels get a red dot; incoming messages blink the lamp and ring until acknowledged. Own messages align right and do not light the unread item screen. Right-click the sender avatar to choose a player head or find item icons by name, ID or tag.

Left-click while holding a Pager to enter quick input; Enter or a second left-click sends a mapped phrase. Mappings are unique within one channel but may be shared across channels. Numeric-only mappings leave movement keys available.

Pagers and Bridge Dialogue share the format below and also accept plain text:

```json
{"avatar":"item:minecraft:apple","name":"Warehouse","message":"Delivery arrived"}
```

```json
{"name":"Warehouse","messages":["Arrived: ",{"minecraft:apple":8},"Thank you"]}
```

`messages` can mix text and several stock objects. Item / count fragments render as message stickers. Player avatars use `player:UUID`; other payloads become anonymous text. Empty Bridge sending avatar / name fields mean anonymous identity.

### Blueprints and access devices

The Blueprint Editor reads serialized frequencies in Create / Sable blueprints, including hidden faces, nested item contents and native frequency groups. Search and collapse groups, replace items or Space-edit boards. An existing group's empty second slot accepts any frequency item; wholly empty groups are omitted. Authorization binds boards and assigns shared access from a player list. Edit changes dot-separated prefixes / suffixes and globally replaces frequency / alias text.

Saving creates a derived blueprint with a short `_afn_` suffix; Create copies live under the schematic directory's `afn` subdirectory. Verified blueprints bind to the actual printer when identified by the server and preserve ACL; unverified copies clear old identities. Other players may build them. Inventories and tickets are not cloned; long-signal quotas are checked again.

Invoice Machines issue / unbind tickets using Authentication Boards. Ticket Validators, Auth Card Readers and Identity Pillars verify tickets or identity and output redstone. Boards are not consumed; ticket retention follows the selected device mode.

## Computers and Synaxis

CC:Tweaked accesses `afn_bridge` or the bundled module using actual channel names from the Bridge GUI:

```lua
local afn = require("afn")
for _, channel in ipairs(afn.channels()) do
  print(channel.name, channel.primary_frequency)
end
assert(afn.set_value("Notice", "Train approaching").success)
assert(afn.pulse("Notice", 15, 20).success)
```

Read, activation and configuration capabilities are separate. Lua can read / write values, activate channels, subscribe to events and configure screen layout / presentation. It cannot manufacture board Owners, ACL or hidden identities. Legacy `auth` secondary and temporary authentication parameters do not replace current real-board GUI slots.

Synaxis supplies activation input, value input and value output with the applicable Real, Boolean, Vec3 and Quaternion formats; cable ends must agree. Redstone bindings use screen-relative front / back / left / right / up / down, with exact or all strengths.

Continue with the [AFN WIKI](./index.html), [Lua signatures, permissions, events and errors](./FUNCTIONS.md), or [project homepage](https://space.bilibili.com/396190439).

# AFN Compact Agent Reference

**AFN 1.8.2 · Create: Advanced Frequency Network · Connect everything. Let data flow your way.**

For Agents to understand features, design player solutions and generate configurations; this is not a developer handover. [Illustrated WIKI](./index.en.html) · [Lua function manual](./FUNCTIONS.en.md) · [Public Channel API](https://github.com/zhengkanqin/AFN-WIKI/tree/main/API) · [Chinese reference](./AGENT.md). Device names refer to in-game items; do not freely translate JSON keys, function names or commands. The actual interface and server settings take precedence over the defaults below.

## 1. Environment and capability boundaries

Install on both client and server. Base environment: Minecraft **1.21.1**, NeoForge **21.1.218+**, Java **21**, Create **6.0.0+**. AFN unifies frequency matching, permissions, activation strength 0–15 and typed information in channels: control wireless redstone, read instruments, configure machines, display maps/messages and connect computers.

| Integration | Capabilities / declared requirements |
| --- | --- |
| CC:Tweaked | `1.118 ≤ version < 2`; bridge peripherals, built-in `afn` Lua module, events and permissions |
| Dashpanels | **2.1+**; AFN controls, displays, radar modules and Panel Link frequencies |
| Synaxis | Cimulink activation/value ports; AFN imposes no minimum or maximum runtime version |
| CreateImprove | **1.4.0+** enables text-frequency links and Signal Router integration |
| Create: Flight Control | **0.8.3+** enables parameter writing and navigation reading; disabled on older versions |
| Create: Aeronautics | Readings and configuration for navigation tables, sensors, propeller bearings, Hot Air Burners and Steam Vents; Wheel Mount suspension-strength configuration |
| Sable | Moving-structure coordinates, terminals following structures and structure keepalive for long signals |
| Sable Photomancy / Schematic API | Schematic capture, editing and printing when `sable_schematic_api` is provided; supports old and new Sable paths |
| Create: Connected | Machine parameters/readings for clutches, kinetic batteries and kinetic bridges |
| Create Crafts & Additions | Electric Motor speed/direction; exact Accumulator FE values, percentage and progress-bar reading |
| Create Diesel Generators | Engine/Burner/Turret state and fluid readings; engine direction, turret aiming/spraying, valve opening and crank size |
| Create Big Cannons | Cannon readings, angles, aiming and firing |
| NetMusic | Record-player state/song/lyrics reading; speaker reading and control |
| Xaero's World Map | Client terrain source; not required on the server; maps/grids remain available without it |
| SFN / Touhou Little Maid: Butler | External addon using the channel/logistics API; currently requires AFN **1.2.1+** and Touhou Little Maid **1.5.2+** |

All integrations except Create are optional; an unspecified requirement does not mean every version has been verified. Important-dependency recommendation popups can be closed or silenced for the current AFN version. In-game help shows chapters for loaded mods and supports search, collapsing, favorites and code copying.

## 2. Frequencies: addresses, selectors and two slots

- **Receivers use concrete addresses; senders use addresses or selectors.** Addresses have `.`-separated layers, such as `factory.line_1.motor`. Ordinary and Authenticated Frequency Boards both store a primary frequency, up to **5** individually enabled aliases, OR/AND and cross-layer response settings. Hover over a real board in a container and press **Space** to edit it.
- `?` matches one character in the current layer; `*` matches any characters in that layer; `[A-C]` matches a character from the set in that layer; `**` occupying an entire layer matches zero or more layers; `factory.*.!private!test` excludes two names from that layer. These are not unbounded regular expressions.
- Receiver OR: the primary frequency or any enabled alias matches. AND: the sender's selector covers every enabled path. With cross-layer response enabled on the receiver, a shorter sending address can match a deeper receiving address; the direction cannot be reversed.
- Frequencies usually have two slots. If either slot contains an AFN board, use **unordered two-slot pairing**, with both slots still required to match. Using only ordinary Create items preserves native slot order. The secondary slot may contain an ordinary item; two boards are not required.
- Minimal circuit: matching two-slot frequencies at both ends → power the sender with redstone → receiver responds. Use channel devices such as mailboxes/bridges to carry content. Frequency Boards are not consumed.

## 3. Authorization and long signals

**Ordinary boards have no Owner restriction; Authenticated Boards have an Owner, READ/WRITE ACL, a hidden authentication primary frequency, an installation lock and ComputerID permissions.** Matching public frequencies do not imply identity admission; reading, editing and installation check permissions separately. Hidden authentication information is shown only to those with read permission, and the server rechecks all operations. Authenticated Boards must retain their actual item type and components; frequency text alone cannot reconstruct them.

Long signals are disabled by default: **same dimension, enabled independently at both ends, with valid bound Authenticated Boards**; frequency and identity must still match. They work across distances and wake unloaded devices on demand. Quotas count “**device × Owner**”, defaulting to **15** devices per Owner. Multiple channels/slots on one device with the same Owner count as 1; different Owners are counted separately. Bridges qualify through Authenticated Boards in their channels' real slots. Quotas and structure keepalive depend on server settings/budgets; do not promise unconditional loading for Sable structures of unlimited size. If a structure cannot be safely identified, guessed chunks are not used as a substitute.

```text
/afn longsignal find
/afn longsignal set <player> <quota>
/afn longsignal del <player>
/afn longsignal allset <quota>
/afn longsignal allset <quota> confirm
/afn longsignal alldel
/afn longsignal alldel confirm
```

`find` lists the locations/names of your own counted devices. `set` and `del` require permission level 3; `allset` and `alldel` require level 4 and must be repeated with `confirm` within **30 seconds**. `del` clears that player's long-signal configuration; `alldel` clears it server-wide. Changing a quota and deleting configuration are separate actions.

## 4. Channels and activation: distinguish data from signals

A channel contains a stable identity, name, two-slot frequency, optional value, activation sources and strength **0–15**. **Changing a value does not activate it; receiving a signal without a value does not clear stored content.** Native values may be text, booleans or finite real-number arrays; objects/arrays can also be interpreted through JSON text. Multiple sources use the highest strength; sources carrying values are arbitrated deterministically by strength and persistent identity. Do not depend on arrival order when equal-strength messages compete.

Depending on their functions, devices support receive/send/bidirectional modes and sources such as redstone, wireless, manual screen interaction, computers, timers, immediate activation after changes and conditional activation. Incoming wireless mailbox data does not trigger change pulses/conditional retransmission; bidirectional mode does not directly echo incoming content onto the same frequency.

- Conditions use comparisons and logic, e.g. `${$.temperature} ≥ 30 & ${$.ready} = true`; bridges can use `${temperature} ≥ 30 & ${switch} = true`. Supports `=`/`==`, `!=`, `< > <= >= ≤ ≥`, `&`/`&&`, `||` and parentheses; ordered comparisons require numbers, and only boolean results are valid. Leave blank to disable.
- Output strength accepts a number or output syntax producing a number; decimals are floored and clamped to 0–15. Blank follows the source strength; local automatic activation without an external source is usually 15. Zero, a missing value or an error sends nothing. Convert numeric text with `number(...)` first.
- Mailbox conditions cannot read their own `strength($)`, but output strength can convert the raw input strength. Bridge conditions/strength must not create feedback through their own output strength; independent input channels may be read. Hidden terminals' current strength field also rejects their own `strength($)`, while content output syntax may read it.

## 5. Output syntax: paths, types and 33 functions

Output syntax transforms the **effective output** without changing the raw value. A single `${...}` preserves the result's type; surrounding text or multiple expression blocks produce text. Plain text passes through unchanged; blank means unconfigured. This is not Lua/JavaScript: no infix arithmetic, dynamic paths or arbitrary scripts.

| Context | Reference rules |
| --- | --- |
| Mailboxes, Stock Mailboxes, hidden terminals | `$` is the device's own input; `$[0]` reads an entire plain-text value; use `$.field`, `$.items[0]` for JSON |
| Bridges / DP panel modules | `${channel_name}`, `${channel_name[0]}`; use `$.channel_name` inside functions. Bridges do not support bare `$`; a name is not a wireless frequency |
| Special keys/spaces | `$["minecraft:apple"]`, `$["door state"]`; indices start at 0 and must be static |
| Own / other channels | Referencing your own name reads the raw value; other channels supply their effective output; cross-channel cycles are invalid |
| Arrays / numbers | A native single number can be used directly in calculations; even a one-item JSON array requires an index or an aggregation function |

| Category | Signatures and key meaning |
| --- | --- |
| Missing values/structure | `default(x,fallback)` handles only missing/null; `exists(x)`; `type(x)`; `size(x)` returns text/array/object length |
| Conversion | `number(x)` extracts the first number, ignoring internal thousands commas; `unit_number(x)` also converts k/m/g/t into thousand/million/billion/trillion; `text(x)` converts a scalar to text; `boolean(x)` accepts only booleans or lowercase true/false; `json(x)` encodes an existing value and must be outermost; `game_time(x)` converts time text into game ticks |
| Aggregation | `sum(x)`, `avg(x)`, `min(x)`, `max(x)` require a nonempty numeric array; `join(x,separator)` joins scalar arrays |
| Math | `add(a,b,...)` requires at least two numbers; `sub(a,b)`, `mul(a,b)`, `div(a,b)` (nonzero divisor); `round(x,digits)`; `clamp(x,min,max)` |
| Text | `substr(x,start[,length])`; `contains(x,part)`, `starts_with(x,part)`, `ends_with(x,part)`; `replace(x,from,to)` replaces all literal occurrences; `split(x,separator)` preserves empty entries; `trim(x)`, `lower(x)`, `upper(x)` |
| Branching | `if(test,yes,no)` requires a boolean condition; false/missing selects no. `switch(x,match,result,...[,fallback])` compares both type and value; both functions evaluate only the selected result |
| Strength to information | `strength($)` or `strength($.channel_name)` reads activation strength 0–15, or 0 when inactive; the argument must be a complete channel root |

Function names are case-insensitive. Ordinary functions take a static path or nested function as their first argument, with configuration arguments as JSON literals. Arithmetic requires at least one argument from a path/function; it is not a constant-only calculator. `if` does not infer booleans from numbers; numeric `1` differs from text `"1"` in `switch`. `json` encodes values rather than parsing strings. `default` does not hide format/type/division-by-zero/budget errors.

```text
Raw text 1,234,211 su   → ${number($[0])}                          → 1234211
Numeric channels a=2,b=3,c=5 → ${add($.a,$.b,$.c)}                 → 10
JSON {"enabled":true} → ${if($.enabled,"Running","Stopped")}      → Running
JSON {"mode":1}       → ${switch($.mode,0,"Stop",1,"Go","Unknown")} → Go
Input strength 7      → ${add(strength($),2)}                      → 9
JSON {"items":[2,3]}  → Stock: ${sum($.items)}                     → Stock: 5
```

Default budgets: input/output each **1024 code points and 4096 UTF-8 bytes**; function arguments/nesting depth/path depth each **8**; **16** references; **128** array items; **64** object members; `round` **0–3** decimal places; **34** significant digits. Servers may adjust these. Configured expressions are compiled/cached and updated when dependencies change; unconfigured expressions are not evaluated.

## 6. Mailboxes, logistics, stock and dynamic filters

| Device | Usage and output |
| --- | --- |
| Mailbox | Sneak-right-click to configure; receive/send/bidirectional; content, output syntax, preview, timer, activation after changes, conditions and output strength; redstone sends, wireless receives; automatic reading and automatic output are mutually exclusive |
| Directional / Modulating Mailbox | Receive according to incoming angle / adjust strength by sender distance, respectively; usable on Aeronautics moving structures |
| Logistics Receiving Mailbox | Bind a Create logistics network and place orders using the received material list and address; does not read stock |
| Stock Mailbox | Sample selected items from a specified container/logistics network; array, JSON or Map formats; long signals, activation frequency, sending format, quantity, preview, timer, changes, conditions and strength; an empty detection list does not mean all items |
| Dynamic Filter | Receives only while installed in a target filter slot, not while held. Writing rules replaces the entire configuration; invalid rules preserve the old configuration, empty rules allow nothing. Supports item IDs/unique names, tags, Create attributes, conjunction/disjunction and other modes. A stock Map with quantities becomes a quota filter: allowed quantities are consumed and reset on the next write |

```text
{Apple, Bread}                                      Item rules
tag:minecraft:logs                                  Tag rule
{Apple:2, minecraft:bread:1, #minecraft:logs:5}       Quota rules
```

Automatic reading samples only checked entries: **one selection passes through unchanged; multiple selections produce JSON**. Selecting all is supported. Keys prefer field names, adding the source only on collisions; whitespace/punctuation becomes underscores. Numbers/booleans/standard JSON retain their types; other data becomes strings. Exceeding the content budget returns `{"error":"content_limit"}` rather than truncated JSON.

## 7. Automatic reading: what can be read

Attach a mailbox to the target and enable automatic reading; select specific readings/modes in the dropdown. Display Links can also write other sources into mailboxes. The catalog appears according to installed integrations; players need not know internal source registration names.

| Target | Data |
| --- | --- |
| Create Nixie Tube; Speedometer; Stressometer | Current text; RPM; progress bar, percentage, current/total/remaining stress |
| Smart Observer; Threshold Switch | Matched item/fluid quantity or list, package address; container fill ratio |
| Belt/Depot/Weighted Ejector; Andesite/Brass Tunnel | Current item name; cumulative count/throughput |
| Cuckoo Clock; Train Station/Observer; Elevator Contact | Time; station/train state and name; current floor |
| Boiler Fluid Tank; Factory Gauge; Seat | Boiler state; linked factory-panel items, stock and requests; passenger name |
| Stock Ticker / Stock Link | AFN name of the associated logistics network; unnamed placeholder text does not automatically merge networks |
| Aeronautics altitude/speed/attitude/optical/laser sensors | Actual source modes such as altitude/air pressure, speed, attitude, detections/distance |
| Portable Engine, Docking Connector, Navigation Table, Wireless Redstone Typewriter, Helical Gear/Drive Rod | Their respective operating states and navigation/input/transmission readings |
| Aeronautics Hot Air Burner / Steam Vent | Gas-related readings |
| Flight Control Navigation Terminal | Current target index (starting at 1), target world coordinates, segment completion 0–100%; coordinates are empty without a target, progress is empty without an explicit segment-progress value |
| CBC fixed Cannon Mount; Connected Kinetic Battery / Horizontal Boiler Tank | Yaw/pitch; battery/boiler readings |
| Crafts & Additions Accumulator | Exact integer FE for stored/capacity/remaining capacity, percentage or progress bar; any member block reads the whole structure |
| Diesel Generators engines / Powered Engine Shaft | Actual RPM, production state and current SU capacity; engines also expose direction 0=clockwise/1=counterclockwise and fuel mB/capacity/name/ID. Modular members read their controller; Huge Engine RPM/capacity come from the shared shaft |
| Diesel Generators Chemical Turret / Burner / Pumpjack Hole | Current/target yaw/pitch, actual spraying and fluid readings; valve opening 0–1, heat, output 0–15 and fluid; original oil reserves in integer B |
| Vanilla Note Block, Target, Respawn Anchor, Command Block, Enchanting Table; CC:T computer | Note/hit/charge/specified scoreboard entry/enchantment/computer content from the corresponding display sources |
| NetMusic Speaker | Broadcast address, name, range and playback state |
| NetMusic Record Player | Playback state, song title, artist, translated title, total/elapsed/remaining seconds, progress, current/all lyrics, song URL, loop, redstone, VIP, read-only and disc presence |

NetMusic progress is estimated from the server countdown, not exact audio time. Only checked entries are sampled/lyrics requested. Lyrics are cached asynchronously and available only for supported song sources. Missing lyrics are empty; oversized full lyrics return limit-exceeded text rather than incomplete truncated content.

## 8. Automatic output: what can be controlled

Mailbox reception → output syntax → attached device; hidden terminals share these output adapters by default. Display targets read text; configuration targets accept common bare values/shorthand or complete/partial JSON, preserving fields not supplied. Items accept registry IDs, shorthand paths and **unique** localized names. Range, ingredients, inventory, assembly and the target machine's own rules still apply.

| Target | Fields / actions |
| --- | --- |
| Nixie Tube, Display Board; Sign, Lectern, Display Link | Text; Display Boards support multiline text, `[green]`/`[red]`/`[glow]`, and `{ [w=4,cycle=numeric] 03 \| [w=12,right]Copper Ingot }` for segment width/alignment/cycling; Chinese characters usually occupy two cells; normal operation is required |
| Stock Ticker/Stock Link; Frogport/Postbox | `network` renames the logistics network (matching names merge networks, changing connections); `address` changes the package address |
| Packager | `{Apple:4}` or `items/address/allow_partial`; insufficient stock rejects the entire order by default; partial fulfillment must be explicitly enabled |
| Brass Funnel/Belt Funnel; Brass Tunnel; Weighted Ejector | `amount/mode`; distribution `mode`; world `target_pos` or `stack_size` (write only one kind at a time) |
| Rotation Speed Controller/Creative Motor; Steam Engine/Windmill Bearing | `speed` (−256–256); `direction` / `rotation_direction` |
| Mechanical Bearing/Sticky Mechanical Piston; Clockwork Bearing; Cart Assembler | `movement_mode`; clock `mode`; minecart `movement_mode` |
| Mechanical Arm | `mode`, relative `take_positions/deposit_positions`; world `take_positions_absolute/deposit_positions_absolute`; up to 64 points per side. Submitting replaces that side, an empty list clears it, an omitted side is retained; during transport, waits until empty-handed to apply |
| Mechanical Saw/Basin | `result` selects a **result item**, not a recipe ID; Chinese names are supported; `minecraft:air` clears the filter; recipe conditions cannot be bypassed |
| Mechanical Roller; Brass Repeater family; Valve Handle | `mode/material`; `delay`; `angle` |
| Sequenced Gearshift | Text or `steps`; turn/drive/delay/await/stop, directions forward/reverse/fast-forward/fast-reverse; at most 5 steps including an automatically added stop. Writing stops the old program; apply redstone separately to start |
| Aeronautics Nameplate | `name/text_color/glow` |
| Portable Engine, Universal Joint/Optical/Speed Sensor, Laser Pointer | `rotation_direction`, `axis`, `range`, `max_speed`, `max_range` |
| Steering Wheel/Torsion Spring; Rotation Bearing; Redstone Accumulator/Inductor | `max_angle`; `locking`; `delay` |
| Aeronautics Propeller/Gyro Propeller Bearing; Hot Air Burner; Steam Exhaust; Wheel Mount | `thrust_direction`; `hot_air_amount`; `steam_amount`; `suspension_strength` |
| CBC fixed Cannon Mount | `yaw/pitch/fire_count` or integer world `target:[x,y,z]`; target takes priority over angles, then fires after turning. Angle-only/target-only writes cancel pending shots; at most 64 queued shots retained for 1200 ticks; no ballistic compensation |
| Connected Gauge Board, Centrifugal/Flywheel/Overstress Clutch, Kinetic Battery/Bridge | Display content, `speed_threshold/direction/delay`, `direction/stress_multiplier` |
| Crafts & Additions Electric Motor | Signed integer `speed` RPM, 0 stops; `direction` forward/reverse or 0/1 overrides the sign and alone preserves speed magnitude. Bare `-64` or `{"speed":64,"direction":"reverse"}`; range follows motor configuration |
| Diesel Generators engines / Powered Engine Shaft | `direction=clockwise/counter_clockwise` (0/1); bare `1` or `{"direction":"counter_clockwise"}`. Whole modular groups / engines on one shaft change together; an empty shaft cannot be configured |
| Diesel Generators Chemical Turret | `yaw/pitch/spray/spray_once`; bare `90,-20` or `{"yaw":90,"pitch":-20,"spray":true,"spray_once":false}`. Yaw normalizes 0–360, pitch −50–11. Sustained spraying needs `spray=false` to stop, not a falling channel signal; single spray does not wait for aiming. Fluid/power remain required |
| Diesel Generators Burner / Pumpjack Crank | `burn_rate` valve opening 0–1, bare `0.5`; crank `size=normal/large` (0/1). Original mechanical, redstone and assembly conditions remain active |
| Vanilla Note Block; NetMusic Speaker | `instrument/note`; `state/source/name/range` (stopping a live stream disconnects it; play reconnects) |

```text
{"deposit_positions_absolute":[[${$[0]},${$[1]},${$[2]}]]}
{"target":[${round($[0],0)},${round($[1],0)},${round($[2],0)}],"fire_count":1}
```

**Flight Control writing** (0.8.3+): all devices below accept minimal number sequences for common parameters, complete JSON or partial JSON. Common PD shorthand is `2,0.5` / `2 0.5`, with no `pd` prefix required. See the WIKI device catalog for complete keys/ranges.

| Device | Configuration set / minimal meaning |
| --- | --- |
| Attitude Stabilizer | `p,d,mode,forward,enabled`; minimal P/D |
| Altitude Stabilizer | `p,d,mode,altitude,delay,step,enabled`; minimal P/D |
| Distance Coupler | `p,d,min,max,invert,mode,enabled`; minimal P/D |
| Linear/Angular Velocity Coupler | `px,dx,py,dy,pz,dz`, positive/negative limits `xp,xn,yp,yn,zp,zn`, `enabled`; minimal per-axis P/D |
| Flight Control Terminal | Enabled/facing/sensitivity/aiming angle; three-axis P/D, angular acceleration/velocity, bank/bank-down angle, crosshair/camera offsets, redstone three-axis P/D/speed and synchronization; minimal input sets only redstone three-axis P/D |
| Attitude Projector | `height,scale,ground_height,show_ground,show_axes`; minimal `scale` |
| HUD Projector | `height,depth,scale,forward`; minimal `scale` |

## 9. Bridges: multichannel screens

Current brass-screen blocks facing the same direction join into a complete rectangle, horizontally or vertically; gaps do not form a complete screen. There is no legacy 4×4 display-region limit. Sneak-right-click to configure; ordinary right-click interacts. Each channel sets a name, real two-slot frequency, value, send/receive, strength/conditions/timer/long signals, output syntax and nonoverlapping display rectangle; manage channels in the left list. Legacy CRT/large bridges exist only for save migration.

| Mode | Capabilities |
| --- | --- |
| Default/Text; Switch | Text/clickable options; single-value/component switches supporting true/false and 0/1 |
| Bar chart; Gauge | Numeric components, bounds/names, adaptive centering, horizontal/vertical layout |
| Map | Terrain/grid, points/lines/areas with names/colors, favorites, entity/hostile markers, self/target and distance/coordinates, rotation/following Sable attitude |
| Logistics; Stock | Orders with multiple item/quantity/address groups; stock JSON/Map with item icons and quantities |
| Conversation | Pager JSON/anonymous text; latest-only or scrolling history; avatars/names, simple replies, sender identity and clear button |

Names, standby state, interaction, confirmation, background/control/other foreground colors are independently configurable. Hiding text reclaims layout space; disabling interaction also disables list scrolling. “Display output syntax” only displays effective results and disables screen interaction. `.bridge` imports/exports configuration and data without importing screen-rectangle layouts.

On maps, wheel zooms, middle-drag pans and recenter fits the view. Draft views are not taken over before confirmation; after submission/external target/self movement, refitting occurs only when points leave the view. Entity settings control whether corresponding screen buttons appear; clicks near targets snap to them. Lines/areas disable the original self-to-target line; bottom-right information uses the first point and self.

## 10. Shared map data structure

Coordinates are world `x,y,z`. Supports a single point `0,64,0`, flat groups of three `0,64,0,32,64,16`, `[[0,64,0],[32,64,16]]`, `{"name":"Warehouse","position":[0,64,0]}`, or `x/y/z` fields. Complete mixed example:

```json
{"points":[{"name":"Warehouse","position":[0,64,0],"color":"#FF7043"}],"lines":[{"name":"Route","points":[[0,64,0],[32,64,16]],"color":"#66BB6A"}],"areas":[{"name":"Work Area","points":[[0,64,0],[32,64,0],[32,64,16]],"color":"#42A5F5","text_color":"#B3E5FC"}]}
```

Lines require at least 2 vertices and areas at least 3, connected in order. `areas` may be written as `polygons`; multiple shapes may be mixed. `name` is displayed; `color` colors the shape and `text_color` the text. Omitted colors use device colors; explicit vertex colors override parent-shape colors. Accepts `#RRGGBB/#RGB/0xRRGGBB`, RGB integers and `[r,g,b]`. Bridge map clicks still **replace the value with a single coordinate**, rather than appending; nearby displayed points/vertices can snap. DP radar accepts the same structure. Portable-terminal item screens draw points/lines/areas, with colors/names according to their screen rules.

## 11. Portable Map Channel Terminal and hidden terminals

**Portable terminal**: multiple channels (up to 16), each with its own name/frequency/value/mode/strength/long signals/output syntax; old data migrates into one channel. Right-click opens the unified configuration/map GUI and remembers the last tab. While held, Alt+wheel/number keys switch the primary channel; taking it out/switching shows the current channel. Middle-click captures a target and broadcasts; left-click stops the current broadcast. Switching the primary channel does not stop other broadcasting channels. Broadcasts continue in the player's inventory; removing it from the inventory stops them unless it has a valid base. Passive reception requires holding or valid placement; Navigation Tables receive only the primary channel. Supports lecterns and Create Placards; creative placement also removes the original held item to prevent duplicate identities.

Map GUI: create points/lines/areas with the bottom-right symbol buttons; double-click ends a line/area. **Creation only changes the value and does not automatically broadcast**; inactive values still draw with gray nodes. Right-click to broadcast content/all content, stop, favorite or clear. Selecting a shape changes these actions to rename/recolor/broadcast individually/remove. “Broadcast individually” clears the current channel's other shapes. The left arrow expands the channel list; top tabs appear only on hover. Bottom-left rotation/entity/hostile buttons; the entity list excludes self. Favorite points are independent of inactive shapes.

**Hidden terminal**: right-click a non-AFN block face with the configurator to create/edit; sneak-right-click removes it. Authorization restrictions still apply. Middle-click copies configuration, sneak-middle-click exits; new faces inherit the frequency. Holding the configurator reveals configured/preview faces. Receivers **weakly activate their host without powering its neighbors**; covered faces still receive wirelessly. Output syntax/strength/automatic output can remotely write to the host with the same capabilities as mailbox output. Configuration survives pistons, Create contraptions and Sable physicalization/dephysicalization; only permanent destruction deletes it. No cable-control mod is required.

## 12. Pagers and message formats

Pagers provide multichannel chat: each channel has its own frequency/name, long signals, sender avatar/name toggles, ringtone style/disc/pitch/volume/maximum loops, quick phrases/key mappings. Repeated messages can be received again. Unread channels show red dots; incoming messages flash/ring, and the small screen shows the latest avatar, going black after viewing. Your own manually sent messages align right and do not light your unread screen. Right-click the sender avatar to choose your player avatar or search item icons by name/ID/tag. Left-click while holding to light the screen and enter a mapping; Enter or another left-click sends. Mappings are unique within a channel and reusable across channels; all-digit mappings do not occupy movement keys. Lecterns/Placards allow opening and audible ringtones.

```json
{"avatar":"item:minecraft:apple","name":"Warehouse","message":"Supplies have arrived"}
```

```json
{"avatar":"player:UUID","name":"Warehouse","messages":["Delivery: ",{"minecraft:apple":8},{"minecraft:bread":2},"Please collect"]}
```

`messages` can mix text and multiple stock JSON/Map objects, displayed as item-icon/quantity emotes. Unformatted text is received anonymously; disabling both identity fields sends plain text. Bridge Conversation/DP Radio use the same parser. Empty custom bridge avatar/name fields mean anonymous; player identity is not guessed.


Geometry messages: send bare map-terminal `{"points":[{"position":[0,64,0],"name":"Warehouse"}],"lines":[],"areas":[]}` objects directly to a pager or place them in `messages`, with no wrapper. Explicit `{"type":"map","title":"Route","dimension":"minecraft:overworld","geometry":{"points":[[0,64,0]],"lines":[{"points":[[0,64,0],[32,64,0]]}],"areas":[{"points":[[0,64,0],[32,64,0],[32,64,32]]}]}}` objects also work in `messages`. Point objects accept `position` or `pos`, plus `name/color/text_color`; lines/polygons use `points/name/color/text_color`. Coordinates must be numerical triples; lines need ≥2 vertices, polygons ≥3. Omitted dimension means the current dimension at viewing time. Per map: ≤128 vertices/16 lines and polygons; per message: ≤4 maps/256 vertices, still bounded by 1024 characters/4096 bytes. Invalid objects remain text. Pagers draw low-resolution previews only for visible cards, including partially visible ones; details allow zoom/pan. Client terrain order is Xaero→AFN→grid; other dimensions/unknown terrain use grid, with no forced chunk loading. Bridges/DP show summaries only.

## 13. Dashpanels: AFN Modules

Modules use the Panel Wrench property GUI, Panel Link two-slot frequencies and native animation/module-moving tools. Hover over an item and press V for explanations. Names identify channels in panel expressions across the **entire panel network**, including merged bases and cable connections, and should be unique. Native modules have no AFN content; only `strength($.name)` can read their maximum output strength. Applicable settings other than colors support output syntax; invalid/missing sources stop output rather than retaining old results.

| Module | Function / key settings |
| --- | --- |
| Standard/Long/Horizontal/Long Horizontal Control Slider | Scalar, default 0–100; bounds, integer mode, strength, condition, output syntax, nodes, sensitivity and name display; slider/needle/scale colors. Long sensitivity defaults to 0.4, standard to 1. Nodes accept `20,50,80`, arrays or expressions. Reaching a node stops the current drag; drag again to pass it. Holding right-click + wheel uses half sensitivity and ignores nodes |
| Joystick | `[x,y]`, default corners `[-1,-1]` to `[1,1]`; integer/condition/strength/output syntax. Memory defaults off: release returns at constant speed to the nearest node (default `[0,0]`); memory on retains the position. Nodes accept `x,y` / `[[x,y],...]` |
| Button / Switch / Push Button | Name, content, strength and button-pressed color. Buttons pulse on short press, stay active on long press, stop on release; Switch/Push Button clicks toggle sustained activation |
| Fan/Circular Gauge | Receives one number; name display, bounds, background/needle/scale colors; out-of-range values display at the endpoints |
| Small/Large Radio; Small/Large Information Board | Latest chat (avatar/name/content) or directly displayed content; background/text colors and adaptive layout. Right-click a radio to clear messages; blank without a message |
| Radar/Large Radar | Shared point/line/area format centered on the module's world position; rotation, scale, background/grid/points/fixed points and colors; no terrain or automatic zoom; default radius 64 blocks |
| Vertical/Horizontal and Long LCD Energy Columns | Segmented battery columns, default 0–100. Two nodes divide three sections; blank uses equal thirds. Low/middle/high default to **red/yellow/green**. Bounds/nodes accept expressions; per-section colors |
| Channel Placeholder | Flat 1×1 module receiving value/strength for other modules to reference by name; configurable color |

Slider/joystick “Pulse on change” defaults on: stays active and updates during operation, then adds a 2-tick final-value pulse on release. A true condition can also maintain activation. Initialization/reloading/configuration changes do not create change pulses. Receiving displays retain their latest data; signal loss does not clear it.

## 14. Schematics, tickets, computers and extensions

**Blueprint Channel Editor**: supports Create and old/new Sable. Recursively recognizes native/AFN/nested-item/hidden-face frequencies; search frequency bands/items/location types, collapse groups and press Space to edit real boards. Entirely empty groups are hidden; an existing group's empty secondary slot accepts any item. The authorization tab binds to yourself in one click and shares via the player list. The edit tab adds/changes dot-separated prefixes/suffixes and globally replaces text in primary frequencies/aliases. Saved derived schematics receive a short `_afn_` identifier; Create files go in `schematics/afn/`. Unverified copies clear the old Owner. After the server confirms the actual printer, AFN-verified schematics bind to that printer and preserve ACL, without restricting who may build. Runtime device identities/long-signal leases and unknown inventories are not copied.

**Tickets/access control**: Invoice Machines issue/reset tickets using valid bound Authenticated Boards. Only the Owner may use them; ACL cannot authorize another issuer. Boards are not consumed. Ticket Validators check the ticket selector, validator-board address/matching rules and issuer identity admission. On success, the validator stores the ticket before deducting it from the player; failure/full ticket inventory consumes nothing and does not activate. Authentication Card Readers can check carried tickets, control door locks and transmit. Identity Pillars control admission by identity/authorization. The server checks permissions and ticket deduction atomically.

**CC:Tweaked**: raw `afn_bridge` peripheral or `require("afn")` package; device discovery/sessions, channel listing, raw/effective values and strength, value changes, pulse/sustained activation, send/receive/frequencies, event subscriptions, screen rectangles/interaction, persistent/temporary configuration, capabilities/permissions and error codes. See the [Lua manual](./FUNCTIONS.en.md). Access channels by their actual GUI names; read/activation/configuration permissions are independent. Lua cannot forge real Authenticated Board Owner/ACL/hidden primary frequencies. Legacy `auth` secondary frequencies and temporary authentication parameters are compatibility features only and do not replace real slots.

```lua
local afn = require("afn")
for _, ch in ipairs(afn.channels()) do print(ch.name, ch.primary_frequency) end
assert(afn.set_value("notice", "The train is arriving").success)
assert(afn.pulse("notice", 15, 20).success)
```

**Synaxis**: activation input, value input and value output; ports support Real/Boolean/Vec3/Quaternion as applicable, with matching types at both ends. Bridges can bind redstone relative to the screen's front/back/left/right/up/down. **Public API**: `com.createafn.api.channel`, API 1.1 / AFN 1.1.6+; depend with `compileOnly`, install complete AFN at runtime, and do not bundle API classes in addons. Stable device/channel UUIDs; server-main-thread `attach`; `setTransmission` on changes; read received data by `changeVersion`; update frequency/mode/position; temporary `detach`, permanent `close`. Leave long-signal admission/quota management to AFN.

## 15. Agent solution-checking order

Confirm devices/mods/versions → check both slots and sender/receiver matching direction → if authorized, check real boards and Owner/ACL → distinguish **raw value, effective output and activation strength** → choose own-source/cross-channel paths → generate minimal expressions/JSON and verify types/coordinate systems → check whether activation is needed in addition to changing the value → for long signals, check both ends are enabled and the actual quota. Prefer events/dependency changes and selected sampling; avoid world scans every tick, unconfigured polling and same-frequency feedback. All configurations retain security/budget/target-device restrictions; do not remove validation to obtain “compatibility”.

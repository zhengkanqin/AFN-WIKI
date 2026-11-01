window.AFN_DEVICE_CATALOG = {
  "read": [
    {
      "name": "Nixie Tube",
      "group": "Create",
      "description": "Currently displayed text",
      "example": "15"
    },
    {
      "name": "Smart Observer",
      "group": "Create",
      "description": "Count or list of matching items or fluids",
      "example": "64"
    },
    {
      "name": "Threshold Switch",
      "group": "Create",
      "description": "Container fill ratio",
      "example": "63%"
    },
    {
      "name": "Speedometer",
      "group": "Create",
      "description": "Rotation speed (RPM)",
      "example": "32 RPM"
    },
    {
      "name": "Stressometer",
      "group": "Create",
      "description": "Read the Stressometer bar, percentage, current stress, total stress and remaining stress. Multiple options can be selected together in the dropdown.",
      "example": "128 SU"
    },
    {
      "name": "Cuckoo Clock",
      "group": "Create",
      "description": "Current time or timer",
      "example": "08:30"
    },
    {
      "name": "Belt, Depot or Weighted Ejector",
      "group": "Create",
      "description": "Current item name",
      "example": "Iron Ingot"
    },
    {
      "name": "Andesite / Brass Tunnel",
      "group": "Create",
      "description": "Cumulative item count or throughput",
      "example": "128"
    },
    {
      "name": "Train Station",
      "group": "Create",
      "description": "Station summary or train operating status",
      "example": "Platform 2 · Express"
    },
    {
      "name": "Track Observer",
      "group": "Create",
      "description": "Name of the detected train",
      "example": "Express 01"
    },
    {
      "name": "Smart Observer",
      "group": "Create",
      "description": "Package delivery address",
      "example": "factory.chest"
    },
    {
      "name": "Fluid Tank in a boiler structure",
      "group": "Create",
      "description": "Boiler status",
      "example": "3/5"
    },
    {
      "name": "Elevator Pulley",
      "group": "Create",
      "description": "Current elevator floor",
      "example": "2"
    },
    {
      "name": "Factory Gauge (reads its connected Factory Panel)",
      "group": "Create",
      "description": "Item stock, item name and request status",
      "example": "12 · Iron Ingot"
    },
    {
      "name": "Seat",
      "group": "Create",
      "description": "Passenger name",
      "example": "Steve"
    },
    {
      "name": "Stock Ticker",
      "group": "Create",
      "description": "Read the AFN name of the logistics network this device belongs to. An unnamed network only displays \"Unnamed Network\"; actual networks retain their separate Create identities and are not merged automatically.",
      "example": "main"
    },
    {
      "name": "Stock Link",
      "group": "Create",
      "description": "Read the AFN name of the logistics network this device belongs to. An unnamed network only displays \"Unnamed Network\"; actual networks retain their separate Create identities and are not merged automatically.",
      "example": "main"
    },
    {
      "name": "Altitude Sensor",
      "group": "Simulated Project",
      "description": "World altitude or air pressure",
      "example": "63.4 m",
      "mod": "Simulated Project"
    },
    {
      "name": "Speed Sensor",
      "group": "Simulated Project",
      "description": "Relative speed and direction",
      "example": "12.0 m/s",
      "mod": "Simulated Project"
    },
    {
      "name": "Attitude Sensor",
      "group": "Simulated Project",
      "description": "Pitch and roll",
      "example": "4.2°",
      "mod": "Simulated Project"
    },
    {
      "name": "Optical Sensor",
      "group": "Simulated Project",
      "description": "Detected block or distance to the target",
      "example": "Stone - 4 blocks",
      "mod": "Simulated Project"
    },
    {
      "name": "Laser Sensor",
      "group": "Simulated Project",
      "description": "Hit distance",
      "example": "7.5 blocks",
      "mod": "Simulated Project"
    },
    {
      "name": "Portable Engine",
      "group": "Simulated Project",
      "description": "Remaining or total burn time",
      "example": "12.0 s",
      "mod": "Simulated Project"
    },
    {
      "name": "Docking Connector",
      "group": "Simulated Project",
      "description": "Docking partner",
      "example": "Airship Alpha",
      "mod": "Simulated Project"
    },
    {
      "name": "Navigation Table",
      "group": "Simulated Project",
      "description": "Distance to the target or estimated arrival time",
      "example": "1,280 blocks",
      "mod": "Simulated Project"
    },
    {
      "name": "Wireless Redstone Typewriter",
      "group": "Simulated Project",
      "description": "Entered text",
      "example": "Head to the dock",
      "mod": "Simulated Project"
    },
    {
      "name": "Worm Gear / Worm Drive Rod",
      "group": "Simulated Project",
      "description": "Item throughput",
      "example": "16/min",
      "mod": "Simulated Project"
    },
    {
      "name": "Hot Air Burner / Steam Vent",
      "group": "Aeronautics",
      "description": "Balloon fill volume or total lift",
      "example": "████▒▒ (gas volume) / 120 N (total lift)",
      "mod": "Create: Aeronautics"
    },
    {
      "name": "Navigation Terminal",
      "group": "Flight Control",
      "description": "Read the current target index (starting at 1), target world coordinates x,y,z and completion percentage of the current navigation segment, from 0 to 100. All three can be selected together. Coordinates are empty when there is no valid target; states without a defined segment completion percentage, such as following or continuous circling, do not output progress.",
      "example": "{\"导航目标序号\":2,\"导航目标坐标\":\"128,64,-32\",\"导航线段进度\":62.5}",
      "mod": "Create: Flight Control 0.8.3+"
    },
    {
      "name": "Fixed Cannon Mount - Yaw",
      "group": "Create Big Cannons",
      "description": "Read \"Cannon Yaw\": the mount yaw setting, from -45 to 45 degrees, rather than a world heading. It can be selected together with pitch; multiple selections output JSON.",
      "example": "20",
      "mod": "Create Big Cannons"
    },
    {
      "name": "Fixed Cannon Mount - Pitch",
      "group": "Create Big Cannons",
      "description": "Read \"Cannon Pitch\": the mount pitch setting, from -45 to 45 degrees, rather than the contraption actual attitude relative to the world. It can be selected together with yaw; multiple selections output JSON.",
      "example": "-10",
      "mod": "Create Big Cannons"
    },
    {
      "name": "Kinetic Battery",
      "group": "Create: Connected",
      "description": "Charge, percentage or progress bar",
      "example": "64%",
      "mod": "Create: Connected"
    },
    {
      "name": "Horizontal Fluid Tank (boiler structure)",
      "group": "Create: Connected",
      "description": "Boiler status",
      "example": "3/5",
      "mod": "Create: Connected"
    },
    {
      "name": "Note Block",
      "group": "Vanilla",
      "description": "Pitch",
      "example": "12"
    },
    {
      "name": "Target",
      "group": "Vanilla",
      "description": "Redstone strength",
      "example": "7"
    },
    {
      "name": "Respawn Anchor",
      "group": "Vanilla",
      "description": "Death count for each player",
      "example": "Steve · 3"
    },
    {
      "name": "Command Block (selected scoreboard objective)",
      "group": "Vanilla",
      "description": "Player score",
      "example": "Steve · 42"
    },
    {
      "name": "Enchanting Table",
      "group": "Vanilla",
      "description": "Maximum enchantment cost",
      "example": "15"
    },
    {
      "name": "CC:Tweaked Computer",
      "group": "CCT",
      "description": "Screen text",
      "example": "ready",
      "mod": "CC:Tweaked"
    },
    {
      "name": "Record Player",
      "group": "NetMusic",
      "description": "Read playback state, song information and lyrics. Select the required fields individually in the read dropdown. A single selection outputs its original value; multiple selections form JSON.",
      "fields": "Playback state, song title, artist, translated title, disc duration, elapsed time, remaining time, playback progress, current lyrics, all lyrics, song URL, loop playback, redstone state, VIP song, read-only disc, disc present",
      "example": "{\"歌名\":\"Example Song\",\"歌手\":\"Example Artist\",\"播放状态\":true,\"播放进度\":25}",
      "mod": "NetMusic",
      "sections": [
        {
          "heading": "Read result example",
          "code": "{\"歌名\":\"Example Song\",\"歌手\":\"Example Artist\",\"播放状态\":true,\"播放进度\":25}"
        },
        {
          "heading": "Duration and progress",
          "paragraphs": [
            "Durations are in seconds; playback progress ranges from 0 to 100. Elapsed time, remaining time and progress are estimated from the server countdown rather than exact audio time."
          ]
        },
        {
          "heading": "Lyrics and updates",
          "paragraphs": [
            "Unselected fields are not sampled and do not request lyrics. Lyrics are available only for supported NetEase Cloud Music songs; when selected, they are fetched asynchronously and cached. The result is empty when unavailable or the song has no lyrics. If all lyrics exceed 1024 characters or 4096 bytes, the output is \"Lyrics exceed the channel length limit\"."
          ]
        }
      ]
    },
    {
      "name": "Broadcast Speaker",
      "group": "NetMusic",
      "description": "Read the broadcast URL, name, range and playback state. A single selection preserves its original value; multiple selections output JSON.",
      "example": "{\"url\":\"https://sk.cri.cn/am846.m3u8\",\"name\":\"Central Radio\",\"range\":96,\"broadcasting\":true}",
      "mod": "NetMusic",
      "fields": "Broadcast URL, name, range, playback state"
    }
  ],
  "write": [
    {
      "name": "Nixie Tube",
      "group": "Create",
      "description": "Display a single column of text or numbers.",
      "example": "Speed 128 RPM"
    },
    {
      "name": "Display Board",
      "group": "Create",
      "description": "Supports multiple lines, per-line colors, glow, handwritten lines and segmented layouts. The board must be running normally. Width is measured in character cells; Chinese characters usually occupy two cells.",
      "example": "[green]Running normally\n[glow]Head to the dock\n{ [w=4,cycle=numeric] 03 | [w=12,right]Copper Ingot | [w=6] Left }"
    },
    {
      "name": "Sign",
      "group": "Vanilla",
      "description": "Write four lines through the display target, with up to 15 characters per line.",
      "example": "Warehouse\nCopper Ingot\n128\nSufficient"
    },
    {
      "name": "Lectern",
      "group": "Vanilla",
      "description": "Write content into book pages. The display target splits long text into pages.",
      "example": "Arrival notice\nNext: Factory"
    },
    {
      "name": "Display Link",
      "group": "Create",
      "description": "Relay content between a Mailbox and a display target. The link can also write content from other sources into a Mailbox.",
      "example": "Attach a Display Link to the Mailbox, then point it at a Nixie Tube or Display Board."
    },
    {
      "name": "Dashboard",
      "group": "Create: Connected",
      "description": "Multiple editable pages, each displaying automatic output in a grid.",
      "example": "Stock 128",
      "mod": "Create: Connected"
    },
    {
      "name": "Stock Ticker",
      "group": "Create",
      "description": "Set an explicit logistics network name: a new name creates a network, while an existing name joins that network. \"Unnamed Network\" in read output is only placeholder text and does not cause new networks to merge automatically.",
      "example": "{\"network\":\"Factory Main\"}",
      "fields": "network"
    },
    {
      "name": "Stock Link",
      "group": "Create",
      "description": "Move this Stock Link to the logistics network with the specified name. The same name identifies the same network. This changes the node logistics connections as well as its display label.",
      "example": "{\"network\":\"Factory Main\"}",
      "fields": "network"
    },
    {
      "name": "Frogport",
      "group": "Create",
      "description": "address = delivery address (0-25 characters).",
      "example": "{\"address\":\"East Warehouse\"}",
      "fields": "address (0-25 characters)"
    },
    {
      "name": "Postbox (all colors)",
      "group": "Create",
      "description": "address = postbox address (0-25 characters).",
      "example": "{\"address\":\"East Warehouse\"}",
      "fields": "address (0-25 characters)"
    },
    {
      "name": "Packager",
      "group": "Create",
      "description": "Request packaging from an item list. Supports stock JSON, Maps and loose item names, such as {Apple:4}; names must identify an item uniquely. By default, insufficient stock rejects the entire order; allow_partial=true permits partial packaging. Up to 256 entries per request, 1-4096 per entry and 65536 in total.",
      "example": "{\"items\":[{\"id\":\"minecraft:apple\",\"count\":4}],\"address\":\"East Warehouse\",\"allow_partial\":false}",
      "fields": "items, address, allow_partial"
    },
    {
      "name": "Brass Funnel / Brass Belt Funnel",
      "group": "Create",
      "description": "amount = maximum quantity per operation (1-64, also limited by the filter slot maximum). mode defines the behavior: at_most = take/deposit up to this amount, even if fewer are available; exact = require exactly this amount, otherwise do nothing. JSON also accepts mode indices 0/1.",
      "example": "{\"amount\":16,\"mode\":\"exact\"}",
      "fields": "amount (1–64), mode (at_most / exact)"
    },
    {
      "name": "Brass Tunnel",
      "group": "Create",
      "description": "mode = item distribution mode: split = split evenly, forced_split = forced even split, round_robin = round robin, forced_round_robin = forced round robin, prefer_nearest = prefer nearest, randomize = random, synchronize = synchronize. JSON accepts 0-6.",
      "example": "{\"mode\":\"round_robin\"}",
      "fields": "mode"
    },
    {
      "name": "Weighted Ejector",
      "group": "Create",
      "description": "Change the launch target or operation quantity; each pulse can write only one of them. The target must lie on a single horizontal axis through the ejector and satisfy Create maximum launch distance and height limits. Send {\"stack_size\":8} separately to set stack_size.",
      "example": "{\"target_pos\":[120,64,-30]}",
      "fields": "target_pos (world coordinates) or stack_size (0-64)"
    },
    {
      "name": "Rotation Speed Controller",
      "group": "Create",
      "description": "speed = target rotation speed: positive follows the facing direction, negative reverses it, with magnitude 0-256; 0 stops rotation.",
      "example": "{\"speed\":128}",
      "fields": "speed (−256–256)"
    },
    {
      "name": "Creative Motor",
      "group": "Create",
      "description": "speed = generated rotation speed: positive outputs in the facing direction, negative reverses it, with magnitude 0-256; 0 stops rotation. Reversing at a speed no greater than the current network speed is rejected (unsafe_direction).",
      "example": "{\"speed\":64}",
      "fields": "speed (−256–256)"
    },
    {
      "name": "Steam Engine",
      "group": "Create",
      "description": "direction = rotation direction: clockwise (cw) or counter_clockwise (ccw). JSON accepts 0/1.",
      "example": "{\"direction\":\"clockwise\"}",
      "fields": "direction"
    },
    {
      "name": "Windmill Bearing",
      "group": "Create",
      "description": "rotation_direction = windmill rotation direction: clockwise (cw/forward) or counter_clockwise (ccw/reverse). JSON accepts 0/1.",
      "example": "{\"rotation_direction\":\"counter_clockwise\"}",
      "fields": "rotation_direction"
    },
    {
      "name": "Mechanical Bearing",
      "group": "Create",
      "description": "movement_mode = how the contraption is handled when it stops: rotate_place = always disassemble, rotate_place_returned = disassemble only near the starting angle, rotate_never_place = disassemble only when destroyed. JSON accepts 0/1/2.",
      "example": "{\"movement_mode\":\"rotate_place_returned\"}",
      "fields": "movement_mode"
    },
    {
      "name": "Clockwork Bearing",
      "group": "Create",
      "description": "mode = clock mode: hour_first = hour hand first, minute_first = minute hand first, hour_first_24 = 24-hour hand. JSON accepts 0/1/2.",
      "example": "{\"mode\":\"hour_first_24\"}",
      "fields": "mode"
    },
    {
      "name": "Mechanical Arm",
      "group": "Create",
      "description": "Change pickup/deposit positions and selection order dynamically. Submitting fields for one side replaces that side targets; an empty list clears them. Changes made while carrying an item are queued and applied when the arm is empty.",
      "example": "{\"take_positions\":[[1,0,0]],\"deposit_positions_absolute\":[[120,64,-30]]}",
      "fields": "mode, take_positions, deposit_positions, take_positions_absolute, deposit_positions_absolute",
      "sections": [
        {
          "heading": "Coordinates and target rules",
          "paragraphs": [
            "take_positions and deposit_positions use coordinates relative to the Mechanical Arm. Fields ending in _absolute use absolute world coordinates. Each side supports up to 64 targets. Targets must be within the arm range, in loaded chunks and accessible to Create pickup/deposit operations. mode supports round_robin, forced_round_robin and prefer_first."
          ],
          "code": "{\"take_positions\":[[1,0,0]],\"deposit_positions_absolute\":[[120,64,-30]]}"
        },
        {
          "heading": "Example: deposit at map coordinates",
          "paragraphs": [
            "The Map Terminal sends x,y,z; a Mailbox receives them and automatically outputs to the Mechanical Arm. This syntax changes only the deposit position and preserves the pickup positions."
          ],
          "code": "{\"deposit_positions_absolute\":[[${$[0]},${$[1]},${$[2]}]]}"
        }
      ]
    },
    {
      "name": "Mechanical Saw",
      "group": "Create",
      "description": "Filter cutting recipes by their result item. Accepts a full registry ID, a short path or a unique localized name, rather than a recipe ID. Input and recipe conditions must still be met. minecraft:air clears the filter.",
      "example": "{\"result\":\"Oak Planks\"}",
      "fields": "result"
    },
    {
      "name": "Basin",
      "group": "Create",
      "description": "Filter Basin recipes by result item, including recipes used by processing equipment above it. Accepts a registry ID, path or unique item name. Ingredients, fluids, heat and other conditions must still be met. Fluid-only recipes can be filtered with the corresponding filled container recognized by Create. minecraft:air clears the filter.",
      "example": "{\"result\":\"create:brass_ingot\"}",
      "fields": "result"
    },
    {
      "name": "Sticky Mechanical Piston",
      "group": "Create",
      "description": "movement_mode = how the contraption is handled when it stops: move_place = always disassemble, move_place_returned = disassemble only at the starting position, move_never_place = disassemble only when destroyed. JSON accepts 0/1/2.",
      "example": "{\"movement_mode\":\"move_place_returned\"}",
      "fields": "movement_mode"
    },
    {
      "name": "Cart Assembler",
      "group": "Create",
      "description": "movement_mode = minecart movement mode: rotate = always face the travel direction, rotate_paused = pause the machine while the cart turns, rotation_locked = lock rotation. JSON accepts 0/1/2.",
      "example": "{\"movement_mode\":\"rotation_locked\"}",
      "fields": "movement_mode"
    },
    {
      "name": "Mechanical Roller",
      "group": "Create",
      "description": "mode selects tunnel_pave, straight_fill or wide_fill. material uses the registry ID of a placeable full block. An empty string or minecraft:air clears the material filter. Actual paving still requires materials in the contraption inventory; invalid blocks are rejected.",
      "example": "{\"mode\":\"wide_fill\",\"material\":\"minecraft:gravel\"}",
      "fields": "mode, material"
    },
    {
      "name": "Brass Diode",
      "group": "Create",
      "description": "delay = relay delay (2-72000 ticks). Shared by the Adjustable Repeater, Pulse Extender and Pulse Repeater.",
      "example": "{\"delay\":100}",
      "fields": "delay (2–72000 tick)"
    },
    {
      "name": "Valve Handle",
      "group": "Create",
      "description": "angle = valve handle rotation angle (-180 to 180 degrees).",
      "example": "{\"angle\":90}",
      "fields": "angle (−180–180°)"
    },
    {
      "name": "Sequenced Gearshift",
      "group": "Create",
      "description": "Replace the program remotely. Use shorthand separated by newlines or semicolons, or steps JSON. Instructions are rotate, drive, delay, await and end; directions support forward/backward/fast-forward/fast-backward. Up to five steps, including any automatically appended end step. Rotation: 1-360 degrees; drive: 1-128; delay: 1-600 ticks. Writing stops the old program without starting the new one; supply a separate redstone pulse.",
      "example": "rotate 90 forward; delay 20; end",
      "fields": "steps"
    },
    {
      "name": "Nameplate (all colors)",
      "group": "Simulated Project",
      "description": "name = nameplate text (shared by all nameplate colors, up to 32 characters, including newlines); text_color = text color (English color name or index 0-15); glow = whether it glows (true/false).",
      "example": "{\"name\":\"East Warehouse\",\"text_color\":\"yellow\",\"glow\":true}",
      "fields": "name, text_color, glow",
      "mod": "Simulated Project"
    },
    {
      "name": "Portable Engine",
      "group": "Simulated Project",
      "description": "rotation_direction = output direction: clockwise (cw/forward) or counter_clockwise (ccw/reverse). JSON accepts 0/1.",
      "example": "{\"rotation_direction\":\"clockwise\"}",
      "fields": "rotation_direction",
      "mod": "Simulated Project"
    },
    {
      "name": "Gimbal Sensor",
      "group": "Simulated Project",
      "description": "axis = gimbal set angle (-90 to 90 degrees).",
      "example": "{\"axis\":30}",
      "fields": "axis (−90–90°)",
      "mod": "Simulated Project"
    },
    {
      "name": "Optical Sensor",
      "group": "Simulated Project",
      "description": "range = optical sensor detection range (1-4096).",
      "example": "{\"range\":128}",
      "fields": "range (1–4096)",
      "mod": "Simulated Project"
    },
    {
      "name": "Laser Pointer",
      "group": "Simulated Project",
      "description": "max_range = maximum laser range in blocks, from 1 to the server limit.",
      "example": "{\"max_range\":64}",
      "fields": "max_range (1 to the server limit)",
      "mod": "Simulated Project"
    },
    {
      "name": "Speed Sensor",
      "group": "Simulated Project",
      "description": "max_speed = speed sensor measurement range (1-50).",
      "example": "{\"max_speed\":20}",
      "fields": "max_speed (1–50)",
      "mod": "Simulated Project"
    },
    {
      "name": "Steering Wheel",
      "group": "Simulated Project",
      "description": "max_angle = maximum steering wheel angle (1-360 degrees).",
      "example": "{\"max_angle\":90}",
      "fields": "max_angle (1–360°)",
      "mod": "Simulated Project"
    },
    {
      "name": "Torsion Spring",
      "group": "Simulated Project",
      "description": "max_angle = maximum torsion spring travel angle (1-360 degrees).",
      "example": "{\"max_angle\":180}",
      "fields": "max_angle (1–360°)",
      "mod": "Simulated Project"
    },
    {
      "name": "Rotary Bearing",
      "group": "Simulated Project",
      "description": "locking = locking mode: locked_always = always locked, locked_default = locked by default, unlocked_default = unlocked by default, unlocked_always = always unlocked. JSON accepts 0-3.",
      "example": "{\"locking\":\"locked_default\"}",
      "fields": "locking",
      "mod": "Simulated Project"
    },
    {
      "name": "Redstone Accumulator",
      "group": "Simulated Project",
      "description": "delay = accumulation delay (2-72000 ticks).",
      "example": "{\"delay\":20}",
      "fields": "delay (2–72000 tick)",
      "mod": "Simulated Project"
    },
    {
      "name": "Redstone Inductor",
      "group": "Simulated Project",
      "description": "delay = inductance delay (0-72000 ticks).",
      "example": "{\"delay\":20}",
      "fields": "delay (0–72000 tick)",
      "mod": "Simulated Project"
    },
    {
      "name": "Propeller Bearing",
      "group": "Aeronautics",
      "description": "thrust_direction = thrust direction: right_handed (rh) or left_handed (lh). JSON accepts 0/1.",
      "example": "{\"thrust_direction\":\"right_handed\"}",
      "fields": "thrust_direction",
      "mod": "Create: Aeronautics"
    },
    {
      "name": "Gyroscopic Propeller Bearing",
      "group": "Aeronautics",
      "description": "thrust_direction = thrust direction: right_handed (rh) or left_handed (lh). JSON accepts 0/1.",
      "example": "{\"thrust_direction\":\"left_handed\"}",
      "fields": "thrust_direction",
      "mod": "Create: Aeronautics"
    },
    {
      "name": "Hot Air Burner",
      "group": "Aeronautics",
      "description": "hot_air_amount = hot air production, from 5 to the server limit (default 500). Higher values provide more lift.",
      "example": "{\"hot_air_amount\":100}",
      "fields": "hot_air_amount (5 to the server limit)",
      "mod": "Create: Aeronautics"
    },
    {
      "name": "Steam Vent",
      "group": "Aeronautics",
      "description": "steam_amount = maximum steam discharge, from 0 to the server limit (device-specific default).",
      "example": "{\"steam_amount\":100}",
      "fields": "steam_amount (subject to the server limit)",
      "mod": "Create: Aeronautics"
    },
    {
      "name": "Wheel Mount",
      "group": "Create: Offroad",
      "description": "suspension_strength = suspension/shock absorption strength on the top face (5-180).",
      "example": "{\"suspension_strength\":30}",
      "fields": "suspension_strength (5–180)",
      "mod": "Create: Offroad"
    },
    {
      "name": "Fixed Cannon Mount",
      "group": "Create Big Cannons",
      "description": "Point a Mailbox automatic output at a Fixed Cannon Mount, or configure a Hidden Channel Terminal on the mount, to adjust angles, aim and fire remotely. Automatic aiming and firing require the cannon to be assembled and running.",
      "example": "{\"target\":[100,64,200],\"fire_count\":3}",
      "fields": "yaw (-45 to 45 degrees), pitch (-45 to 45 degrees), fire_count (0-64 shots), target (integer world coordinates [x,y,z], overrides yaw/pitch)",
      "mod": "Create Big Cannons",
      "anchor": "fixed-cannon-mount",
      "sections": [
        {
          "heading": "Set angles and shot count directly",
          "paragraphs": [
            "Shorthand uses \"yaw,pitch,shot count\": 20 changes only yaw; 20,-10 changes both angles; 20,-10,3 turns then fires three shots. Empty positions preserve the current angle, as in 20,,3 or ,-10,3; ,,3 fires three shots at the current angles. JSON accepts all fields or a subset."
          ],
          "code": "{\"yaw\":20,\"pitch\":-10,\"fire_count\":3}"
        },
        {
          "heading": "Aim automatically at world coordinates",
          "code": "{\"target\":[100,64,200],\"fire_count\":3}",
          "paragraphs": [
            "target is an absolute integer world coordinate [x,y,z]. When present, yaw and pitch are ignored. The system calculates the straight-line direction from the cannon to the target, turns and then fires. Omitting fire_count only turns the cannon.",
            "Sable contraptions transform world coordinates using their current attitude and recalculate the target direction before firing. Angles are rounded to the mount one-degree precision. Requests outside its angle range do nothing; gravity and other ballistic deviations are not compensated."
          ]
        },
        {
          "heading": "Firing queue",
          "paragraphs": [
            "Requests execute in order, with up to 64 pending shots per cannon, respecting native cooldown and ammunition requirements. Missing ammunition causes waiting; requests remain for up to 1200 ticks (normally 60 seconds). Changing only angles or the target without adding shots cancels pending requests; sending only {\"fire_count\":0} does not cancel them. Existing redstone firing control remains independent."
          ]
        },
        {
          "heading": "Example: select a cannon target with a Map Terminal",
          "paragraphs": [
            "The Map Terminal sends world coordinates x,y,z. A Mailbox on the same frequency receives them; its channel output syntax builds the target and shot count and automatically outputs to an assembled Fixed Cannon Mount. This example uses round to convert potentially fractional coordinates to integers."
          ],
          "code": "{\"target\":[${round($[0],0)},${round($[1],0)},${round($[2],0)}],\"fire_count\":1}",
          "after": [
            "Each reception and output of this content adds one request to aim and then fire. Remove fire_count to adjust direction only."
          ]
        }
      ]
    },
    {
      "name": "Centrifugal Clutch",
      "group": "Create: Connected",
      "description": "speed_threshold = rotation speed threshold for engaging/disengaging transmission (-256 to 256). Positive values engage when speed reaches the threshold; negative values engage only when speed falls below the threshold.",
      "example": "{\"speed_threshold\":64}",
      "fields": "speed_threshold (−256–256)",
      "mod": "Create: Connected"
    },
    {
      "name": "Flywheel Clutch",
      "group": "Create: Connected",
      "description": "direction = permitted rotation direction for transmission (clockwise/counter_clockwise or 0/1).",
      "example": "{\"direction\":\"clockwise\"}",
      "fields": "direction",
      "mod": "Create: Connected"
    },
    {
      "name": "Kinetic Battery",
      "group": "Create: Connected",
      "description": "direction = charge/discharge direction (clockwise/counter_clockwise or 0/1).",
      "example": "{\"direction\":\"counter_clockwise\"}",
      "fields": "direction",
      "mod": "Create: Connected"
    },
    {
      "name": "Kinetic Bridge",
      "group": "Create: Connected",
      "description": "stress_multiplier = stress multiplication setting (0-2048). Each increase of 10 doubles the multiplier; 40 is about 16 times.",
      "example": "{\"stress_multiplier\":40}",
      "fields": "stress_multiplier (0–2048)",
      "mod": "Create: Connected"
    },
    {
      "name": "Overstress Clutch",
      "group": "Create: Connected",
      "description": "delay = disengagement delay after overstress (1-72000 ticks; the GUI displays seconds/minutes).",
      "example": "{\"delay\":100}",
      "fields": "delay (1–72000 tick)",
      "mod": "Create: Connected"
    },
    {
      "name": "Note Block",
      "group": "Vanilla",
      "description": "instrument = sound: harp, basedrum (bass drum), snare, hat (hi-hat), bass, flute, bell, guitar, chime, xylophone, iron_xylophone, cow_bell, didgeridoo, bit (chip), banjo or pling; also zombie/skeleton/creeper/dragon/wither_skeleton/piglin head imitations and custom_head (requires a head above). note = pitch from 0 to 24, lowest to highest, covering 25 semitones.",
      "example": "{\"instrument\":\"bell\",\"note\":12}",
      "fields": "instrument, note (0–24)"
    },
    {
      "name": "Broadcast Speaker",
      "group": "NetMusic",
      "description": "Remotely set the live stream source, name, range and playback state. state=play starts/resumes playback; stop stops it. source accepts an m3u8 URL or the cnr1/cnr4/cnr16/cgtn presets. Live streams cannot pause: stop disconnects, and the next play reconnects. Range is 1-256 and subject to the server limit; clients must be able to access the audio.",
      "example": "{\"state\":\"play\",\"source\":\"cnr1\",\"name\":\"Factory Radio\",\"range\":64}",
      "fields": "state, source, name, range",
      "mod": "NetMusic"
    },
    {
      "name": "Dynamic Filter",
      "group": "AFN",
      "description": "Configure the receiving frequency, then insert the filter into a device filter slot. Received channel content updates item matching and quantity rules. Supports names, item IDs, tags and attributes, with disj/conj/deny matching modes.",
      "example": "mode:disj\nApple\nid:minecraft:bread\ntag:minecraft:logs\n\nQuota example: {Apple:2, minecraft:bread:1}",
      "fields": "mode, names, items, tags, attributes; quotas can use items/count and total",
      "anchor": "dynamic-filter",
      "sections": [
        {
          "heading": "Item matching rules",
          "code": "mode:disj\nApple\nid:minecraft:bread\ntag:minecraft:logs"
        },
        {
          "heading": "Quota-based passage",
          "paragraphs": [
            "A stock Map or JSON containing count enables quota-based passage. Quotas decrease by the actual quantity that passes; writing again resets them."
          ],
          "code": "{Apple:2, minecraft:bread:1}"
        },
        {
          "heading": "Usage limits",
          "paragraphs": [
            "The filter does not receive while held. Empty rules allow nothing; invalid new rules preserve the previous configuration. Unconfigured output rules do not create evaluation work."
          ]
        }
      ]
    },
    {
      "name": "Attitude Stabilizer",
      "group": "Flight Control",
      "description": "Remotely set the Attitude Stabilizer P/D gains, mode, forward direction and default enabled state. pd 2 0.5 sets P/D together. mode accepts LEVEL_NO_YAW, LEVEL or HOLD_CURRENT; forward is north/east/south/west. Omitted fields retain their current values.",
      "example": "{\"p\":2,\"d\":0.5,\"mode\":\"LEVEL_NO_YAW\",\"forward\":\"north\",\"enabled\":true}",
      "fields": "p, d (decimals; treated as absolute values by the device), mode, forward, enabled; supports pd shorthand",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "Altitude Stabilizer",
      "group": "Flight Control",
      "description": "Remotely set the Altitude Stabilizer P/D, mode, preset altitude, capture delay, step and default enabled state. mode accepts hold_current, hold_preset or minimum_altitude. Providing altitude enables preset altitude. Omitted fields retain their current values.",
      "example": "{\"p\":2,\"d\":0.5,\"mode\":\"hold_preset\",\"altitude\":20}",
      "fields": "p, d, mode, altitude, delay, step, enabled; pd accepts the p d shorthand",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "Distance Coupler",
      "group": "Flight Control",
      "description": "Change P/D, target distance interval, inversion and sampling mode. pd 2 0.5 sets both gains; range 4 12 sets min/max together. Distance ranges from 0 to 128; mode accepts AVERAGE, MAX or MIN. enabled changes the default coupling state; the redstone proxy master switch still inverts it according to the device rules.",
      "example": "{\"p\":2,\"d\":0.5,\"min\":4,\"max\":12,\"invert\":false,\"mode\":\"AVERAGE\"}",
      "fields": "p, d, min, max, invert, mode, enabled",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "Linear Velocity Coupler",
      "group": "Flight Control",
      "description": "Set P/D gains and positive/negative linear speed limits for the body X/Y/Z axes. pd takes paired values per axis: X-P, X-D, Y-P, Y-D, Z-P, Z-D. x/y/z set the positive and negative speed limits for each axis. Negative gains and limits are treated as absolute values.",
      "example": "pd 1 0.1 2 0.2 3 0.3",
      "fields": "px, py, pz, dx, dy, dz; pd shorthand pairs P/D per axis; xp/xn, yp/yn, zp/zn are positive/negative limits",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "Angular Velocity Coupler",
      "group": "Flight Control",
      "description": "Set P/D gains and positive/negative angular speed limits for the body X/Y/Z axes. pd takes paired values per axis: X-P, X-D, Y-P, Y-D, Z-P, Z-D. x/y/z set the positive and negative speed limits for each axis. Negative gains and limits are treated as absolute values.",
      "example": "pd 1 0.1 2 0.2 3 0.3",
      "fields": "px, py, pz, dx, dy, dz; pd shorthand pairs P/D per axis; xp/xn, yp/yn, zp/zn are positive/negative limits",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "Flight Control Terminal",
      "group": "Flight Control",
      "description": "Change the Flight Control Terminal sensitivity, direction, three-axis P/D, acceleration and angular speed limits, plus independent P/D and angular speed for redstone control. pitch_pd, yaw_pd and roll_pd group each axis P/D; redstone_pitch_pd and related fields set redstone parameters, while rpd sets redstone P/D for all three axes at once. sensitivity: 0.01-1; max_aim_angle: 10-89 degrees; P/D and acceleration: 0-100; angular speed: 0-4 pi. Omitted fields retain their current values.",
      "example": "pitch_pd 2 0.4",
      "fields": "enabled, forward, sensitivity, max_aim_angle, three-axis P/D, three-axis acceleration/angular speed, redstone P/D/angular speed, camera offset; supports PD shorthand per axis",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "Attitude Projector",
      "group": "Flight Control",
      "description": "Change the attitude projection height, size, ground plane position and visible elements. height: 0.5-3; scale: 0.25-4; ground_height: -1 to 1. show_ground/show_axes control visibility of the ground plane and body axes.",
      "example": "{\"height\":1.5,\"scale\":1.2,\"ground_height\":0,\"show_ground\":true,\"show_axes\":true}",
      "fields": "height, scale, ground_height, show_ground, show_axes",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "HUD Projector",
      "group": "Flight Control",
      "description": "Change the HUD projection height, front/back position, size and forward direction. height: 0.5-6; depth: -1 to 2; scale: 0.5-3. forward accepts north/east/south/west.",
      "example": "{\"height\":2,\"depth\":0.25,\"scale\":1.2,\"forward\":\"north\"}",
      "fields": "height, depth, scale, forward",
      "mod": "Create: Flight Control ≥ 0.8.3"
    }
  ]
};

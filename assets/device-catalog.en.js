window.AFN_DEVICE_CATALOG = {
  "read": [
    {
      "name": "Nixie Tube",
      "group": "Create",
      "description": "Currently displayed text",
      "example": "15",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Displayed text: exactly the text currently shown, rather than a measured redstone input."
          ]
        },
        {
          "heading": "Example",
          "code": "15"
        }
      ]
    },
    {
      "name": "Smart Observer",
      "group": "Create",
      "description": "Count or list of matching items or fluids",
      "example": "64",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Select the available native reading: observed item/fluid count or list, or a package delivery address. An address is text rather than a quantity."
          ]
        },
        {
          "heading": "Example",
          "code": "64"
        }
      ]
    },
    {
      "name": "Threshold Switch",
      "group": "Create",
      "description": "Container fill ratio",
      "example": "63%",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Fill ratio: used capacity divided by observed container capacity. Percentage/bar outputs describe this ratio rather than an absolute item count."
          ]
        },
        {
          "heading": "Example",
          "code": "63%"
        }
      ]
    },
    {
      "name": "Speedometer",
      "group": "Create",
      "description": "Rotation speed (RPM)",
      "example": "32 RPM",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Rotation speed: native rotational speed in RPM."
          ]
        },
        {
          "heading": "Example",
          "code": "32 RPM"
        }
      ]
    },
    {
      "name": "Stressometer",
      "group": "Create",
      "description": "Read the Stressometer bar, percentage, current stress, total stress and remaining stress. Multiple options can be selected together in the dropdown.",
      "example": "128 SU",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Progress Bar: visual proportion of stress used; Percentage: the same load ratio with a % suffix.",
            "Stress: current network stress consumption in SU. Total Stress: available network stress capacity in SU. Remaining Stress: capacity minus consumption in SU.",
            "Select a numeric or percentage reading for calculations. A progress bar is display text, not a number."
          ]
        },
        {
          "heading": "Example",
          "code": "128 SU"
        }
      ]
    },
    {
      "name": "Cuckoo Clock",
      "group": "Create",
      "description": "Current time or timer",
      "example": "08:30",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Time/timer: the original clock’s formatted time output, rather than a fixed JSON object."
          ]
        },
        {
          "heading": "Example",
          "code": "08:30"
        }
      ]
    },
    {
      "name": "Belt, Depot or Weighted Ejector",
      "group": "Create",
      "description": "Current item name",
      "example": "Iron Ingot",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Item name: displayed name of the currently presented item stack, not an inventory-wide stock list."
          ]
        },
        {
          "heading": "Example",
          "code": "Iron Ingot"
        }
      ]
    },
    {
      "name": "Andesite / Brass Tunnel",
      "group": "Create",
      "description": "Cumulative item count or throughput",
      "example": "128",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Item count: cumulative observed quantity; throughput: observed quantity per native time window. Select the appropriate native display mode."
          ]
        },
        {
          "heading": "Example",
          "code": "128"
        }
      ]
    },
    {
      "name": "Train Station",
      "group": "Create",
      "description": "Station summary or train operating status",
      "example": "Platform 2 · Express",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Station/train summary: the original source’s station or train-operation text. It is not a fixed JSON schema."
          ]
        },
        {
          "heading": "Example",
          "code": "Platform 2 · Express"
        }
      ]
    },
    {
      "name": "Track Observer",
      "group": "Create",
      "description": "Name of the detected train",
      "example": "Express 01",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Train name: name of the train currently detected by the observer."
          ]
        },
        {
          "heading": "Example",
          "code": "Express 01"
        }
      ]
    },
    {
      "name": "Smart Observer",
      "group": "Create",
      "description": "Package delivery address",
      "example": "factory.chest",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Select the available native reading: observed item/fluid count or list, or a package delivery address. An address is text rather than a quantity."
          ]
        },
        {
          "heading": "Example",
          "code": "factory.chest"
        }
      ]
    },
    {
      "name": "Fluid Tank in a boiler structure",
      "group": "Create",
      "description": "Boiler status",
      "example": "3/5",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Boiler status: native boiler capacity/operation summary, such as current and maximum levels. It is not stored FE energy."
          ]
        },
        {
          "heading": "Example",
          "code": "3/5"
        }
      ]
    },
    {
      "name": "Elevator Pulley",
      "group": "Create",
      "description": "Current elevator floor",
      "example": "2",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Current floor: the native elevator’s present floor indicator; this is a floor identifier rather than world Y height."
          ]
        },
        {
          "heading": "Example",
          "code": "2"
        }
      ]
    },
    {
      "name": "Factory Gauge (reads its connected Factory Panel)",
      "group": "Create",
      "description": "Item stock, item name and request status",
      "example": "12 · Iron Ingot",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Item stock: native linked panel’s stock count. Item name: its target item. Request status: its current request/fulfilment state."
          ]
        },
        {
          "heading": "Example",
          "code": "12 · Iron Ingot"
        }
      ]
    },
    {
      "name": "Seat",
      "group": "Create",
      "description": "Passenger name",
      "example": "Steve",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Passenger name: the display name of the seat’s current passenger."
          ]
        },
        {
          "heading": "Example",
          "code": "Steve"
        }
      ]
    },
    {
      "name": "Stock Ticker",
      "group": "Create",
      "description": "Read the AFN name of the logistics network this device belongs to. An unnamed network only displays \"Unnamed Network\"; actual networks retain their separate Create identities and are not merged automatically.",
      "example": "main",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Network name: explicitly configured logistics-network label. Unnamed Network is placeholder display text, not a shared network destination."
          ]
        },
        {
          "heading": "Example",
          "code": "main"
        }
      ]
    },
    {
      "name": "Stock Link",
      "group": "Create",
      "description": "Read the AFN name of the logistics network this device belongs to. An unnamed network only displays \"Unnamed Network\"; actual networks retain their separate Create identities and are not merged automatically.",
      "example": "main",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Network name: explicitly configured logistics-network label. It is a network identifier, not a delivery address."
          ]
        },
        {
          "heading": "Example",
          "code": "main"
        }
      ]
    },
    {
      "name": "Mailbox",
      "group": "AFN",
      "description": "Received or locally configured channel content",
      "example": "ready",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Channel content: the device’s current effective content, returned as its original text. This readout does not require the device to be active.",
            "JSON content remains the original JSON text from this one source; it is not split into separately selectable fields. No content returns an empty value."
          ]
        },
        {
          "heading": "Example",
          "code": "ready"
        }
      ]
    },
    {
      "name": "Directional Receiver",
      "group": "AFN",
      "description": "The channel content currently received by this directional receiver",
      "example": "ready",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Channel content: the device’s current effective content, returned as its original text. This readout does not require the device to be active.",
            "JSON content remains the original JSON text from this one source; it is not split into separately selectable fields. No content returns an empty value."
          ]
        },
        {
          "heading": "Example",
          "code": "ready"
        }
      ]
    },
    {
      "name": "Modulated Receiver",
      "group": "AFN",
      "description": "The channel content currently received by this modulated receiver",
      "example": "ready",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Channel content: the device’s current effective content, returned as its original text. This readout does not require the device to be active.",
            "JSON content remains the original JSON text from this one source; it is not split into separately selectable fields. No content returns an empty value."
          ]
        },
        {
          "heading": "Example",
          "code": "ready"
        }
      ]
    },
    {
      "name": "Altitude Sensor",
      "group": "Aeronautics",
      "description": "World altitude or air pressure",
      "example": "63.4 m",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Altitude: native measured world height. Air pressure: the native pressure reading. The selected mode determines the returned unit."
          ]
        },
        {
          "heading": "Example",
          "code": "63.4 m"
        }
      ]
    },
    {
      "name": "Speed Sensor",
      "group": "Aeronautics",
      "description": "Relative speed and direction",
      "example": "12.0 m/s",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Speed/direction: native measured motion in the sensor’s selected frame; preserve the displayed speed unit when showing it."
          ]
        },
        {
          "heading": "Example",
          "code": "12.0 m/s"
        }
      ]
    },
    {
      "name": "Attitude Sensor",
      "group": "Aeronautics",
      "description": "Pitch and roll",
      "example": "4.2°",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Pitch/roll: native orientation components in degrees. Each selected axis is its own angle."
          ]
        },
        {
          "heading": "Example",
          "code": "4.2°"
        }
      ]
    },
    {
      "name": "Optical Sensor",
      "group": "Aeronautics",
      "description": "Detected block or distance to the target",
      "example": "Stone - 4 blocks",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Detected block: reported target block information. Distance: separation from sensor to target, in blocks."
          ]
        },
        {
          "heading": "Example",
          "code": "Stone - 4 blocks"
        }
      ]
    },
    {
      "name": "Laser Sensor",
      "group": "Aeronautics",
      "description": "Hit distance",
      "example": "7.5 blocks",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Hit distance: measured separation to the native laser hit, in blocks."
          ]
        },
        {
          "heading": "Example",
          "code": "7.5 blocks"
        }
      ]
    },
    {
      "name": "Portable Engine",
      "group": "Aeronautics",
      "description": "Remaining or total burn time",
      "example": "12.0 s",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Remaining burn time: native fuel time left. Total burn time: full duration for its current fuel. The reading keeps the native time unit."
          ]
        },
        {
          "heading": "Example",
          "code": "12.0 s"
        }
      ]
    },
    {
      "name": "Docking Connector",
      "group": "Aeronautics",
      "description": "Docking partner",
      "example": "Airship Alpha",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Docking partner: the native connected partner’s name/identifier rather than its coordinates."
          ]
        },
        {
          "heading": "Example",
          "code": "Airship Alpha"
        }
      ]
    },
    {
      "name": "Navigation Table",
      "group": "Aeronautics",
      "description": "Distance to the target or estimated arrival time",
      "example": "1,280 blocks",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Distance: separation to the native navigation target in blocks. Estimated arrival time: native time estimate under current motion."
          ]
        },
        {
          "heading": "Example",
          "code": "1,280 blocks"
        }
      ]
    },
    {
      "name": "Wireless Redstone Typewriter",
      "group": "Aeronautics",
      "description": "Entered text",
      "example": "Head to the dock",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Entered text: the original typed content carried as channel information."
          ]
        },
        {
          "heading": "Example",
          "code": "Head to the dock"
        }
      ]
    },
    {
      "name": "Worm Gear / Worm Drive Rod",
      "group": "Aeronautics",
      "description": "Item throughput",
      "example": "16/min",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Item throughput: native transfer-rate text including its time unit, such as items per minute."
          ]
        },
        {
          "heading": "Example",
          "code": "16/min"
        }
      ]
    },
    {
      "name": "Hot Air Burner / Steam Vent",
      "group": "Aeronautics",
      "description": "Balloon fill volume or total lift",
      "example": "████▒▒ (gas volume) / 120 N (total lift)",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Balloon fill volume: native gas-volume/fill reading. Total lift: native combined-lift reading. Progress bars are visual text rather than numeric quantities."
          ]
        },
        {
          "heading": "Example",
          "code": "████▒▒ (gas volume) / 120 N (total lift)"
        }
      ]
    },
    {
      "name": "Navigation Terminal",
      "group": "Flight Control",
      "description": "Read current target index (starting at 1), target world coordinates x,y,z, current navigation-segment completion (0–100), and all saved route waypoints. Select only the required readings; absent targets and undefined progress return empty text.",
      "example": "{\"Navigation_waypoint_number\":2,\"Navigation_target_coordinates\":\"128,64,-32\",\"Navigation_leg_progress\":62.5}",
      "mod": "Create: Flight Control 0.8.3+",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Navigation waypoint number: one-based index of the current target in the active navigation route.",
            "Navigation target coordinates: current target world position as x,y,z. It is empty when no valid target is active.",
            "Navigation leg progress: completion percentage of the current distance-defined segment, 0–100; undefined-progress modes return empty text.",
            "All navigation waypoints: saved route positions as [[x,y,z],...]. Active routes use the native resolved route when available; selecting this alone produces an array suitable for a map."
          ]
        },
        {
          "heading": "Show the whole route",
          "paragraphs": [
            "Select only All navigation waypoints in Automatic Read. The result below is a route array rather than the combined-reading wrapper; send it directly to a Bridge map or AFN Radar."
          ],
          "code": "[[128,64,-32],[160,70,-20],[192,64,0]]"
        },
        {
          "heading": "Example",
          "code": "{\"Navigation_waypoint_number\":2,\"Navigation_target_coordinates\":\"128,64,-32\",\"Navigation_leg_progress\":62.5}"
        }
      ]
    },
    {
      "name": "Fixed Cannon Mount - Yaw",
      "group": "Create Big Cannons",
      "description": "Read \"Cannon Yaw\": the mount yaw setting, from -45 to 45 degrees, rather than a world heading. It can be selected together with pitch; multiple selections output JSON.",
      "example": "20",
      "mod": "Create Big Cannons",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Cannon Yaw: the fixed mount’s own yaw setting in degrees, −45–45. This is a configured mount-relative angle, not a world heading or an effective ballistic solution."
          ]
        },
        {
          "heading": "Example",
          "code": "20"
        }
      ]
    },
    {
      "name": "Fixed Cannon Mount - Pitch",
      "group": "Create Big Cannons",
      "description": "Read \"Cannon Pitch\": the mount pitch setting, from -45 to 45 degrees, rather than the contraption actual attitude relative to the world. It can be selected together with yaw; multiple selections output JSON.",
      "example": "-10",
      "mod": "Create Big Cannons",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Cannon Pitch: the fixed mount’s own pitch setting in degrees, −45–45. This does not describe the whole moving structure’s world attitude."
          ]
        },
        {
          "heading": "Example",
          "code": "-10"
        }
      ]
    },
    {
      "name": "Kinetic Battery",
      "group": "Create: Connected",
      "description": "Charge, percentage or progress bar",
      "example": "64%",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Charge: the native battery charge reading. Percentage and Progress Bar express its fill ratio; the bar is visual text and should not be used as a numeric value."
          ]
        },
        {
          "heading": "Example",
          "code": "64%"
        }
      ]
    },
    {
      "name": "Accumulator",
      "group": "Create Crafts & Additions",
      "description": "Attach to any block of the accumulator structure to read total stored energy, capacity, remaining capacity, percentage or a progress bar. The first three are exact integer FE values without units or K/M abbreviations.",
      "example": "500000",
      "mod": "Create Crafts & Additions",
      "sections": [
        {
          "heading": "Single reading",
          "paragraphs": [
            "Select stored energy, total capacity, remaining energy, percentage or progress bar in the Automatic Read dropdown. With only stored energy selected, the example means 500000 FE. Percentages retain %, while progress bars use compact text.",
            "A single reading remains text. For calculations, select the first component and convert it to a number: ${add(number($[0]),1)} produces 500001."
          ],
          "code": "500000"
        },
        {
          "heading": "Combined readings",
          "paragraphs": [
            "Multiple selections produce JSON and preserve numerical values as numbers. Keys follow the selected field labels, with spaces and punctuation replaced by underscores; ${add($.Total_Capacity,1)} calculates directly with the capacity field."
          ],
          "code": "{\"Energy_Stored_in\":500000,\"Total_Capacity\":2000000,\"Remaining\":1500000}"
        },
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Stored Energy: energy currently stored in the entire multiblock, as an integer FE value.",
            "Total Capacity: maximum energy storage in FE. Remaining: unused capacity, equal to capacity minus stored energy; it is not remaining stored energy.",
            "Percentage: stored energy divided by capacity, including a % suffix. Progress Bar: the same proportion represented by compact bar text rather than a numeric quantity."
          ]
        }
      ]
    },
    {
      "name": "Diesel Engine",
      "group": "Diesel Generators",
      "description": "Actual speed (RPM), direction (0 clockwise / 1 counterclockwise), power-production state, stress capacity (SU), fuel amount/tank capacity (mB), fluid name and ID. Numerical readings have no units; empty-fluid names and IDs are empty.",
      "example": "128",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Combined readings",
          "paragraphs": [
            "Select the fields you need in the dropdown. A single reading remains text; use ${number($[0])} for calculations. Multiple selections form JSON, accessible by field name such as ${$.Fluid_Amount}.",
            "Running indicates whether the engine produces power. When driven by another source, actual RPM can be nonzero while Running is false. Only selected fields are sampled."
          ],
          "code": "{\"Speed\":128,\"Direction\":0,\"Running\":true,\"Stress_Capacity\":4096,\"Fluid_Amount\":1000}"
        },
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Speed: actual shaft speed in RPM, which may be nonzero when another machine drives the network.",
            "Direction: 0 clockwise or 1 counterclockwise, using the engine’s native setting. Running: whether this engine is currently producing power.",
            "Stress Capacity: supplied stress capacity in SU.",
            "Fluid Amount: currently stored fluid, in mB. Tank Capacity: maximum fluid storage in mB; 1000 mB equals one bucket.",
            "Fluid Name: localized name of the stored fluid. Fluid ID: registry ID of that fluid. Name/ID are empty for an empty tank."
          ]
        }
      ]
    },
    {
      "name": "Modular Diesel Engine",
      "group": "Diesel Generators",
      "description": "Read actual speed, direction, production state, stress capacity and fuel information for the group. Attach a mailbox to any member; readings resolve to the controller without force-loading it.",
      "example": "{\"Speed\":128,\"Running\":true,\"Fluid_Amount\":1000}",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Speed: actual shaft speed in RPM, which may be nonzero when another machine drives the network.",
            "Direction: 0 clockwise or 1 counterclockwise, using the engine’s native setting. Running: whether this engine is currently producing power.",
            "Stress Capacity: supplied stress capacity in SU.",
            "Fluid Amount: currently stored fluid, in mB. Tank Capacity: maximum fluid storage in mB; 1000 mB equals one bucket.",
            "Fluid Name: localized name of the stored fluid. Fluid ID: registry ID of that fluid. Name/ID are empty for an empty tank."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"Speed\":128,\"Running\":true,\"Fluid_Amount\":1000}"
        }
      ]
    },
    {
      "name": "Huge Diesel Engine",
      "group": "Diesel Generators",
      "description": "Read this engine’s direction, production state and fuel information. Actual RPM and stress capacity come from its shared Powered Engine Shaft, so engines on the same shaft may report identical speed and capacity. Fuel amount and capacity are mB.",
      "example": "{\"Speed\":128,\"Running\":true,\"Direction\":0,\"Fluid_Amount\":1000}",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Speed: actual shaft speed in RPM, which may be nonzero when another machine drives the network.",
            "Direction: 0 clockwise or 1 counterclockwise, using the engine’s native setting. Running: whether this engine is currently producing power.",
            "Stress Capacity: supplied stress capacity in SU.",
            "Fluid Amount: currently stored fluid, in mB. Tank Capacity: maximum fluid storage in mB; 1000 mB equals one bucket.",
            "Fluid Name: localized name of the stored fluid. Fluid ID: registry ID of that fluid. Name/ID are empty for an empty tank."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"Speed\":128,\"Running\":true,\"Direction\":0,\"Fluid_Amount\":1000}"
        }
      ]
    },
    {
      "name": "Powered Engine Shaft",
      "group": "Diesel Generators",
      "description": "Read actual speed (RPM), running state and stress capacity (SU). Read fuel information from the connected Huge Diesel Engine instead.",
      "example": "{\"Speed\":128,\"Running\":true,\"Stress_Capacity\":4096}",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Speed: actual shaft speed in RPM, which may be nonzero when another machine drives the network.",
            "Running: whether the shaft is generating rotational power. Stress Capacity: the shared shaft’s native supplied capacity in SU. Read fuel from the Huge Diesel Engine, not from this shaft."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"Speed\":128,\"Running\":true,\"Stress_Capacity\":4096}"
        }
      ]
    },
    {
      "name": "Chemical Turret (placed chemical sprayer)",
      "group": "Diesel Generators",
      "description": "Read current/target yaw and pitch in degrees, actual spraying state, fluid amount/tank capacity in mB, fluid name and ID. Spraying reflects actual emission, not merely a request to spray.",
      "example": "{\"Current_Yaw\":90,\"Current_Pitch\":-20,\"Spraying\":true,\"Fluid_Amount\":500}",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Current Yaw/Current Pitch: actual current horizontal/vertical angles in degrees. Target Yaw/Target Pitch: requested angles before the mechanism finishes turning.",
            "Spraying: actual emission state, not merely a saved spray request.",
            "Fluid Amount: currently stored fluid, in mB. Tank Capacity: maximum fluid storage in mB; 1000 mB equals one bucket.",
            "Fluid Name: localized name of the stored fluid. Fluid ID: registry ID of that fluid. Name/ID are empty for an empty tank."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"Current_Yaw\":90,\"Current_Pitch\":-20,\"Spraying\":true,\"Fluid_Amount\":500}"
        }
      ]
    },
    {
      "name": "Burner",
      "group": "Diesel Generators",
      "description": "Read burn rate (valve opening 0–1), heat, output strength (0–15), fuel amount/tank capacity in mB, fluid name and ID. Burn rate is not fuel consumption per tick; heat may be -1 when unlit.",
      "example": "{\"Burn_Rate\":0.5,\"Heat\":1.5,\"Output_Strength\":9,\"Fluid_Amount\":500}",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Burn Rate: valve opening, 0–1; it is not fuel consumption per tick.",
            "Heat: native heat level; an unlit burner may report −1. Output Strength: current native output signal strength, 0–15.",
            "Fluid Amount: currently stored fluid, in mB. Tank Capacity: maximum fluid storage in mB; 1000 mB equals one bucket.",
            "Fluid Name: localized name of the stored fluid. Fluid ID: registry ID of that fluid. Name/ID are empty for an empty tank."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"Burn_Rate\":0.5,\"Heat\":1.5,\"Output_Strength\":9,\"Fluid_Amount\":500}"
        }
      ]
    },
    {
      "name": "Pumpjack Hole",
      "group": "Diesel Generators",
      "description": "Read oil reserves using the original integer B text (1 B=1000 mB). Fractions of a bucket are discarded by the original reading.",
      "example": "500B",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Oil reserves are reported using the native whole-bucket text: 1 B = 1000 mB. The native source discards the fractional bucket rather than rounding it."
          ]
        },
        {
          "heading": "Example",
          "code": "500B"
        }
      ]
    },
    {
      "name": "Horizontal Fluid Tank (boiler structure)",
      "group": "Create: Connected",
      "description": "Boiler status",
      "example": "3/5",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Boiler status: native connected-boiler summary, rather than FE energy-storage capacity."
          ]
        },
        {
          "heading": "Example",
          "code": "3/5"
        }
      ]
    },
    {
      "name": "Note Block",
      "group": "Vanilla",
      "description": "Pitch",
      "example": "12",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Pitch: integer note index 0–24, low to high; this is a semitone index, not a frequency in hertz."
          ]
        },
        {
          "heading": "Example",
          "code": "12"
        }
      ]
    },
    {
      "name": "Target",
      "group": "Vanilla",
      "description": "Redstone strength",
      "example": "7",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Redstone Strength: the block’s current signal level, 0–15."
          ]
        },
        {
          "heading": "Example",
          "code": "7"
        }
      ]
    },
    {
      "name": "Respawn Anchor",
      "group": "Vanilla",
      "description": "Death count for each player",
      "example": "Steve · 3",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Each displayed player name is paired with that player’s death count. This is the selected native display source’s score-like output, rather than the anchor’s respawn charge."
          ]
        },
        {
          "heading": "Example",
          "code": "Steve · 3"
        }
      ]
    },
    {
      "name": "Command Block (selected scoreboard objective)",
      "group": "Vanilla",
      "description": "Player score",
      "example": "Steve · 42",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "The selected objective chooses which scoreboard value is read. Each displayed player name identifies the score owner; the adjacent number is that player’s score in the chosen objective."
          ]
        },
        {
          "heading": "Example",
          "code": "Steve · 42"
        }
      ]
    },
    {
      "name": "Enchanting Table",
      "group": "Vanilla",
      "description": "Maximum enchantment cost",
      "example": "15",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Maximum Enchantment Cost: the native available enchantment-cost reading for the table’s current surroundings; this is not a player’s current experience."
          ]
        },
        {
          "heading": "Example",
          "code": "15"
        }
      ]
    },
    {
      "name": "CC:Tweaked Computer",
      "group": "CCT",
      "description": "Screen text",
      "example": "ready",
      "mod": "CC:Tweaked",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Screen Text: the computer terminal’s text content. AFN does not execute that text as a command."
          ]
        },
        {
          "heading": "Example",
          "code": "ready"
        }
      ]
    },
    {
      "name": "Record Player",
      "group": "NetMusic",
      "description": "Read playback state, song information and lyrics. Select the required fields individually in the read dropdown. A single selection outputs its original value; multiple selections form JSON.",
      "fields": "Playback state, song title, artist, translated title, disc duration, elapsed time, remaining time, playback progress, current lyrics, all lyrics, song URL, loop playback, redstone state, VIP song, read-only disc, disc present",
      "example": "{\"Title\":\"Example Song\",\"Artists\":\"Example Artist\",\"Playing\":true,\"Progress\":25}",
      "mod": "NetMusic",
      "sections": [
        {
          "heading": "Read result example",
          "code": "{\"Title\":\"Example Song\",\"Artists\":\"Example Artist\",\"Playing\":true,\"Progress\":25}"
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
        },
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Playing: native playback state, true/false. Title: song title. Artists: artist names joined as text. Translated title: the disc’s alternate/translated title, if present.",
            "Duration: disc duration in seconds. Elapsed: estimated played seconds. Remaining: estimated seconds left. Progress: estimated percentage from 0 to 100.",
            "Current lyric: lyric line at the estimated playback time. Lyrics: complete available lyric text. Missing/unsupported lyrics return empty text; overlong full lyrics return the length-limit message.",
            "Source: song URL stored on the disc. Loop: native loop-enabled state. Redstone: whether the player detects a redstone signal.",
            "VIP: the disc’s VIP-song flag. Read only: whether its song data is read-only. Has disc: whether the player’s disc slot is occupied; these flags are booleans, not access-permission commands.",
            "With multiple selections, JSON keys follow the runtime field labels, with punctuation/spaces replaced by underscores. The example below uses English labels; use the actual preview’s keys on your server."
          ]
        }
      ]
    },
    {
      "name": "Broadcast Speaker",
      "group": "NetMusic",
      "description": "Read one JSON snapshot of the speaker’s configured live-stream URL, name, range and broadcasting state.",
      "example": "{\"url\":\"https://example.com/radio.m3u8\",\"name\":\"Factory Radio\",\"range\":64,\"broadcasting\":true}",
      "mod": "NetMusic",
      "fields": "url, name, range, broadcasting (one JSON reading)",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "url: configured live-stream source URL.",
            "name: configured display name. range: configured broadcast radius in blocks.",
            "broadcasting: true while the native speaker is broadcasting, false otherwise. These four keys are returned together in one JSON object; they are not four independent dropdown selections."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"url\":\"https://example.com/radio.m3u8\",\"name\":\"Factory Radio\",\"range\":64,\"broadcasting\":true}"
        }
      ]
    },
    {
      "name": "Radar Bearing",
      "group": "Create: Radar",
      "description": "Read the device reported contacts, retaining jamming offsets and synthetic contacts rather than independently scanning the world. Also exposes running state, range, sweep angle/speed, input RPM and dish count.",
      "example": "[[128,64,-32],[160,70,-20]]",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "Coordinate Array",
          "paragraphs": [
            "Select only Coordinate Array under automatic reading. Its world x,y,z positions feed directly into a Bridge map or AFN Radar; no conversion syntax is needed."
          ],
          "code": "[[128,64,-32],[160,70,-20]]"
        },
        {
          "heading": "Map JSON",
          "paragraphs": [
            "Map JSON includes points plus total_count, returned_count and truncated. It can be displayed in a Bridge map or AFN Radar, or sent as a Pager map message. When combined with other readings, extract the map field with channel output syntax before passing it to a map."
          ],
          "code": "{\"points\":[{\"position\":[128,64,-32]},{\"position\":[160,70,-20]}],\"total_count\":2,\"returned_count\":2,\"truncated\":false}"
        },
        {
          "heading": "Detailed Contacts and Limits",
          "paragraphs": [
            "Detailed Contacts is a separate reading returning tracks. Each entry includes id, position, velocity and available category, scanned_time, entity_type, friendly and synthetic fields; unknown metadata is omitted. The detailed-contact wrapper is not itself a map format.",
            "Only selected fields are sampled; contact snapshots are shared and refresh at most once per 5 ticks. Count-only readings do not build geometry JSON. Capacity limits remove whole points/contacts rather than cutting JSON text. Standalone Returned Point Count/Points Truncated describe Coordinate Array; other formats carry their own metadata."
          ],
          "code": "{\"tracks\":[{\"id\":\"123e4567-e89b-12d3-a456-426614174000\",\"position\":[128,64,-32],\"velocity\":[0,0,0],\"category\":\"PLAYER\",\"friendly\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Coordinate Array: [[x,y,z],...] using absolute world positions. It carries coordinates only, with no IDs or per-contact metadata.",
            "Map JSON: points contains objects whose position is [x,y,z]. total_count is the total reported count, returned_count counts complete returned entries, and truncated reports whether some entries were omitted for capacity limits.",
            "Detailed Contacts: tracks is the returned contact array. Each tracks[i].id is that contact’s real identity text; position is its world position and velocity is [vx,vy,vz] in blocks per tick.",
            "Additional detailed fields appear only when available: category is the native category, scanned_time is the native scan game-tick timestamp, entity_type identifies the reported entity/contact type, friendly is the friendly-identification result, and synthetic marks a generated/false contact.",
            "Point Count/Total Point Count count all reported contacts. Returned Point Count/Points Truncated describe how many fit in Coordinate Array; Map JSON and Detailed Contacts carry their own returned_count/truncated values.",
            "Points Summary: format identifies points_array; total_count is the report total, returned_count is the coordinate-array count and truncated signals omitted points.",
            "Target ID identifies only the currently selected contact, not every detected contact. Target Position is its x,y,z; Target Velocity is vx,vy,vz in blocks/tick; Target Category is its native category and Target Is Friendly is the available identification result. Missing selections/metadata return empty text.",
            "Detailed lists are ordered by ID and may be truncated. Index [0] means the first returned entry, not the closest, most dangerous or selected contact. Select only Detailed Contacts to use the direct $.tracks path; multiple readings add a localized outer wrapper.",
            "Running: whether the native radar is operating. Detection Range: native detection distance in blocks.",
            "Current Angle: current sweep angle in degrees. Sweep Angular Speed: degrees per tick. Input RPM: available rotational input. Dish Count: native assembled dish count.",
            "Linked and Radar Count/Monitor Count/Weapon Count describe the connected network when a valid connection exists; they do not force distant chunks to load."
          ]
        }
      ]
    },
    {
      "name": "Plane Radar",
      "group": "Create: Radar",
      "description": "Read the device reported contacts, retaining jamming offsets and synthetic contacts rather than independently scanning the world. Also exposes running state, range and sweep angle; orientation follows the containing structure.",
      "example": "[[128,64,-32],[160,70,-20]]",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "Coordinate Array",
          "paragraphs": [
            "Select only Coordinate Array under automatic reading. Its world x,y,z positions feed directly into a Bridge map or AFN Radar; no conversion syntax is needed."
          ],
          "code": "[[128,64,-32],[160,70,-20]]"
        },
        {
          "heading": "Map JSON",
          "paragraphs": [
            "Map JSON includes points plus total_count, returned_count and truncated. It can be displayed in a Bridge map or AFN Radar, or sent as a Pager map message. When combined with other readings, extract the map field with channel output syntax before passing it to a map."
          ],
          "code": "{\"points\":[{\"position\":[128,64,-32]},{\"position\":[160,70,-20]}],\"total_count\":2,\"returned_count\":2,\"truncated\":false}"
        },
        {
          "heading": "Detailed Contacts and Limits",
          "paragraphs": [
            "Detailed Contacts is a separate reading returning tracks. Each entry includes id, position, velocity and available category, scanned_time, entity_type, friendly and synthetic fields; unknown metadata is omitted. The detailed-contact wrapper is not itself a map format.",
            "Only selected fields are sampled; contact snapshots are shared and refresh at most once per 5 ticks. Count-only readings do not build geometry JSON. Capacity limits remove whole points/contacts rather than cutting JSON text. Standalone Returned Point Count/Points Truncated describe Coordinate Array; other formats carry their own metadata."
          ],
          "code": "{\"tracks\":[{\"id\":\"123e4567-e89b-12d3-a456-426614174000\",\"position\":[128,64,-32],\"velocity\":[0,0,0],\"category\":\"PLAYER\",\"friendly\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Coordinate Array: [[x,y,z],...] using absolute world positions. It carries coordinates only, with no IDs or per-contact metadata.",
            "Map JSON: points contains objects whose position is [x,y,z]. total_count is the total reported count, returned_count counts complete returned entries, and truncated reports whether some entries were omitted for capacity limits.",
            "Detailed Contacts: tracks is the returned contact array. Each tracks[i].id is that contact’s real identity text; position is its world position and velocity is [vx,vy,vz] in blocks per tick.",
            "Additional detailed fields appear only when available: category is the native category, scanned_time is the native scan game-tick timestamp, entity_type identifies the reported entity/contact type, friendly is the friendly-identification result, and synthetic marks a generated/false contact.",
            "Point Count/Total Point Count count all reported contacts. Returned Point Count/Points Truncated describe how many fit in Coordinate Array; Map JSON and Detailed Contacts carry their own returned_count/truncated values.",
            "Points Summary: format identifies points_array; total_count is the report total, returned_count is the coordinate-array count and truncated signals omitted points.",
            "Target ID identifies only the currently selected contact, not every detected contact. Target Position is its x,y,z; Target Velocity is vx,vy,vz in blocks/tick; Target Category is its native category and Target Is Friendly is the available identification result. Missing selections/metadata return empty text.",
            "Detailed lists are ordered by ID and may be truncated. Index [0] means the first returned entry, not the closest, most dangerous or selected contact. Select only Detailed Contacts to use the direct $.tracks path; multiple readings add a localized outer wrapper.",
            "Detection Range: native configured detection distance in blocks. Current Angle and Sweep Angular Speed describe its orientation/sweep using degrees and degrees per tick; Input RPM is its native available rotational input.",
            "Linked and Radar Count/Monitor Count/Weapon Count describe the connected network when a valid connection exists; they do not force distant chunks to load."
          ]
        }
      ]
    },
    {
      "name": "Sky Radar",
      "group": "Create: Radar",
      "description": "Read the device reported contacts, retaining jamming offsets and synthetic contacts rather than independently scanning the world. Also exposes range, sweep angle, input RPM, dish count, assembly and manual-orientation state.",
      "example": "[[128,64,-32],[160,70,-20]]",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "Coordinate Array",
          "paragraphs": [
            "Select only Coordinate Array under automatic reading. Its world x,y,z positions feed directly into a Bridge map or AFN Radar; no conversion syntax is needed."
          ],
          "code": "[[128,64,-32],[160,70,-20]]"
        },
        {
          "heading": "Map JSON",
          "paragraphs": [
            "Map JSON includes points plus total_count, returned_count and truncated. It can be displayed in a Bridge map or AFN Radar, or sent as a Pager map message. When combined with other readings, extract the map field with channel output syntax before passing it to a map."
          ],
          "code": "{\"points\":[{\"position\":[128,64,-32]},{\"position\":[160,70,-20]}],\"total_count\":2,\"returned_count\":2,\"truncated\":false}"
        },
        {
          "heading": "Detailed Contacts and Limits",
          "paragraphs": [
            "Detailed Contacts is a separate reading returning tracks. Each entry includes id, position, velocity and available category, scanned_time, entity_type, friendly and synthetic fields; unknown metadata is omitted. The detailed-contact wrapper is not itself a map format.",
            "Only selected fields are sampled; contact snapshots are shared and refresh at most once per 5 ticks. Count-only readings do not build geometry JSON. Capacity limits remove whole points/contacts rather than cutting JSON text. Standalone Returned Point Count/Points Truncated describe Coordinate Array; other formats carry their own metadata."
          ],
          "code": "{\"tracks\":[{\"id\":\"123e4567-e89b-12d3-a456-426614174000\",\"position\":[128,64,-32],\"velocity\":[0,0,0],\"category\":\"PLAYER\",\"friendly\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Coordinate Array: [[x,y,z],...] using absolute world positions. It carries coordinates only, with no IDs or per-contact metadata.",
            "Map JSON: points contains objects whose position is [x,y,z]. total_count is the total reported count, returned_count counts complete returned entries, and truncated reports whether some entries were omitted for capacity limits.",
            "Detailed Contacts: tracks is the returned contact array. Each tracks[i].id is that contact’s real identity text; position is its world position and velocity is [vx,vy,vz] in blocks per tick.",
            "Additional detailed fields appear only when available: category is the native category, scanned_time is the native scan game-tick timestamp, entity_type identifies the reported entity/contact type, friendly is the friendly-identification result, and synthetic marks a generated/false contact.",
            "Point Count/Total Point Count count all reported contacts. Returned Point Count/Points Truncated describe how many fit in Coordinate Array; Map JSON and Detailed Contacts carry their own returned_count/truncated values.",
            "Points Summary: format identifies points_array; total_count is the report total, returned_count is the coordinate-array count and truncated signals omitted points.",
            "Target ID identifies only the currently selected contact, not every detected contact. Target Position is its x,y,z; Target Velocity is vx,vy,vz in blocks/tick; Target Category is its native category and Target Is Friendly is the available identification result. Missing selections/metadata return empty text.",
            "Detailed lists are ordered by ID and may be truncated. Index [0] means the first returned entry, not the closest, most dangerous or selected contact. Select only Detailed Contacts to use the direct $.tracks path; multiple readings add a localized outer wrapper.",
            "Running: native operating state. Detection Range: blocks. Current Angle: degrees. Sweep Angular Speed: degrees per tick. Input RPM: native rotational input.",
            "Dish Count: assembled dish count. Assembled: whether the radar structure is assembled. Manual Orientation: whether manual yaw is overriding shaft-driven rotation.",
            "Linked and Radar Count/Monitor Count/Weapon Count describe the connected network when a valid connection exists; they do not force distant chunks to load."
          ]
        }
      ]
    },
    {
      "name": "Sonar Bearing",
      "group": "Create: Radar",
      "description": "Read the device reported contacts, retaining jamming offsets and synthetic contacts rather than independently scanning the world. Also exposes range, sweep angle, input RPM, sensor count, assembly and structure validity.",
      "example": "[[128,64,-32],[160,70,-20]]",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "Coordinate Array",
          "paragraphs": [
            "Select only Coordinate Array under automatic reading. Its world x,y,z positions feed directly into a Bridge map or AFN Radar; no conversion syntax is needed."
          ],
          "code": "[[128,64,-32],[160,70,-20]]"
        },
        {
          "heading": "Map JSON",
          "paragraphs": [
            "Map JSON includes points plus total_count, returned_count and truncated. It can be displayed in a Bridge map or AFN Radar, or sent as a Pager map message. When combined with other readings, extract the map field with channel output syntax before passing it to a map."
          ],
          "code": "{\"points\":[{\"position\":[128,64,-32]},{\"position\":[160,70,-20]}],\"total_count\":2,\"returned_count\":2,\"truncated\":false}"
        },
        {
          "heading": "Detailed Contacts and Limits",
          "paragraphs": [
            "Detailed Contacts is a separate reading returning tracks. Each entry includes id, position, velocity and available category, scanned_time, entity_type, friendly and synthetic fields; unknown metadata is omitted. The detailed-contact wrapper is not itself a map format.",
            "Only selected fields are sampled; contact snapshots are shared and refresh at most once per 5 ticks. Count-only readings do not build geometry JSON. Capacity limits remove whole points/contacts rather than cutting JSON text. Standalone Returned Point Count/Points Truncated describe Coordinate Array; other formats carry their own metadata."
          ],
          "code": "{\"tracks\":[{\"id\":\"123e4567-e89b-12d3-a456-426614174000\",\"position\":[128,64,-32],\"velocity\":[0,0,0],\"category\":\"PLAYER\",\"friendly\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Coordinate Array: [[x,y,z],...] using absolute world positions. It carries coordinates only, with no IDs or per-contact metadata.",
            "Map JSON: points contains objects whose position is [x,y,z]. total_count is the total reported count, returned_count counts complete returned entries, and truncated reports whether some entries were omitted for capacity limits.",
            "Detailed Contacts: tracks is the returned contact array. Each tracks[i].id is that contact’s real identity text; position is its world position and velocity is [vx,vy,vz] in blocks per tick.",
            "Additional detailed fields appear only when available: category is the native category, scanned_time is the native scan game-tick timestamp, entity_type identifies the reported entity/contact type, friendly is the friendly-identification result, and synthetic marks a generated/false contact.",
            "Point Count/Total Point Count count all reported contacts. Returned Point Count/Points Truncated describe how many fit in Coordinate Array; Map JSON and Detailed Contacts carry their own returned_count/truncated values.",
            "Points Summary: format identifies points_array; total_count is the report total, returned_count is the coordinate-array count and truncated signals omitted points.",
            "Target ID identifies only the currently selected contact, not every detected contact. Target Position is its x,y,z; Target Velocity is vx,vy,vz in blocks/tick; Target Category is its native category and Target Is Friendly is the available identification result. Missing selections/metadata return empty text.",
            "Detailed lists are ordered by ID and may be truncated. Index [0] means the first returned entry, not the closest, most dangerous or selected contact. Select only Detailed Contacts to use the direct $.tracks path; multiple readings add a localized outer wrapper.",
            "Running: native operating state. Detection Range: blocks. Current Angle: degrees. Sweep Angular Speed: degrees per tick. Input RPM: native rotational input.",
            "Assembled: structure assembled; Structure Valid: native assembly-validity result; Sensor Count: number of sonar sensors.",
            "Linked and Radar Count/Monitor Count/Weapon Count describe the connected network when a valid connection exists; they do not force distant chunks to load."
          ]
        }
      ]
    },
    {
      "name": "Radar Monitor",
      "group": "Create: Radar",
      "description": "Read merged contacts from the actual display cache, selected target, link state and linked device counts. Joined monitors resolve their controller; the display cache can differ from individual radar reports.",
      "example": "{\"points\":[{\"position\":[128,64,-32]}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "Coordinate Array",
          "paragraphs": [
            "Select only Coordinate Array under automatic reading. Its world x,y,z positions feed directly into a Bridge map or AFN Radar; no conversion syntax is needed."
          ],
          "code": "[[128,64,-32],[160,70,-20]]"
        },
        {
          "heading": "Map JSON",
          "paragraphs": [
            "Map JSON includes points plus total_count, returned_count and truncated. It can be displayed in a Bridge map or AFN Radar, or sent as a Pager map message. When combined with other readings, extract the map field with channel output syntax before passing it to a map."
          ],
          "code": "{\"points\":[{\"position\":[128,64,-32]},{\"position\":[160,70,-20]}],\"total_count\":2,\"returned_count\":2,\"truncated\":false}"
        },
        {
          "heading": "Detailed Contacts and Limits",
          "paragraphs": [
            "Detailed Contacts is a separate reading returning tracks. Each entry includes id, position, velocity and available category, scanned_time, entity_type, friendly and synthetic fields; unknown metadata is omitted. The detailed-contact wrapper is not itself a map format.",
            "Only selected fields are sampled; contact snapshots are shared and refresh at most once per 5 ticks. Count-only readings do not build geometry JSON. Capacity limits remove whole points/contacts rather than cutting JSON text. Standalone Returned Point Count/Points Truncated describe Coordinate Array; other formats carry their own metadata."
          ],
          "code": "{\"tracks\":[{\"id\":\"123e4567-e89b-12d3-a456-426614174000\",\"position\":[128,64,-32],\"velocity\":[0,0,0],\"category\":\"PLAYER\",\"friendly\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Coordinate Array: [[x,y,z],...] using absolute world positions. It carries coordinates only, with no IDs or per-contact metadata.",
            "Map JSON: points contains objects whose position is [x,y,z]. total_count is the total reported count, returned_count counts complete returned entries, and truncated reports whether some entries were omitted for capacity limits.",
            "Detailed Contacts: tracks is the returned contact array. Each tracks[i].id is that contact’s real identity text; position is its world position and velocity is [vx,vy,vz] in blocks per tick.",
            "Additional detailed fields appear only when available: category is the native category, scanned_time is the native scan game-tick timestamp, entity_type identifies the reported entity/contact type, friendly is the friendly-identification result, and synthetic marks a generated/false contact.",
            "Point Count/Total Point Count count all reported contacts. Returned Point Count/Points Truncated describe how many fit in Coordinate Array; Map JSON and Detailed Contacts carry their own returned_count/truncated values.",
            "Points Summary: format identifies points_array; total_count is the report total, returned_count is the coordinate-array count and truncated signals omitted points.",
            "Target ID identifies only the currently selected contact, not every detected contact. Target Position is its x,y,z; Target Velocity is vx,vy,vz in blocks/tick; Target Category is its native category and Target Is Friendly is the available identification result. Missing selections/metadata return empty text.",
            "Detailed lists are ordered by ID and may be truncated. Index [0] means the first returned entry, not the closest, most dangerous or selected contact. Select only Detailed Contacts to use the direct $.tracks path; multiple readings add a localized outer wrapper.",
            "Running: whether any displayed radar snapshot reports running. Detection Range: its displayed radar range in blocks. Multi-block monitors resolve their controller block.",
            "Linked: whether its native radar-network connection resolves. Radar Count/Monitor Count/Weapon Count: corresponding endpoint counts in that network."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"points\":[{\"position\":[128,64,-32]}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        }
      ]
    },
    {
      "name": "Network Controller",
      "group": "Create: Radar",
      "description": "Read reported contacts from linked radars, the selected target, whether it was automatically selected, and radar/monitor/weapon counts. Target position, ID, velocity, category and friendliness can be selected separately; missing targets or metadata produce empty values.",
      "example": "contact_id",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "Coordinate Array",
          "paragraphs": [
            "Select only Coordinate Array under automatic reading. Its world x,y,z positions feed directly into a Bridge map or AFN Radar; no conversion syntax is needed."
          ],
          "code": "[[128,64,-32],[160,70,-20]]"
        },
        {
          "heading": "Map JSON",
          "paragraphs": [
            "Map JSON includes points plus total_count, returned_count and truncated. It can be displayed in a Bridge map or AFN Radar, or sent as a Pager map message. When combined with other readings, extract the map field with channel output syntax before passing it to a map."
          ],
          "code": "{\"points\":[{\"position\":[128,64,-32]},{\"position\":[160,70,-20]}],\"total_count\":2,\"returned_count\":2,\"truncated\":false}"
        },
        {
          "heading": "Detailed Contacts and Limits",
          "paragraphs": [
            "Detailed Contacts is a separate reading returning tracks. Each entry includes id, position, velocity and available category, scanned_time, entity_type, friendly and synthetic fields; unknown metadata is omitted. The detailed-contact wrapper is not itself a map format.",
            "Only selected fields are sampled; contact snapshots are shared and refresh at most once per 5 ticks. Count-only readings do not build geometry JSON. Capacity limits remove whole points/contacts rather than cutting JSON text. Standalone Returned Point Count/Points Truncated describe Coordinate Array; other formats carry their own metadata."
          ],
          "code": "{\"tracks\":[{\"id\":\"123e4567-e89b-12d3-a456-426614174000\",\"position\":[128,64,-32],\"velocity\":[0,0,0],\"category\":\"PLAYER\",\"friendly\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Coordinate Array: [[x,y,z],...] using absolute world positions. It carries coordinates only, with no IDs or per-contact metadata.",
            "Map JSON: points contains objects whose position is [x,y,z]. total_count is the total reported count, returned_count counts complete returned entries, and truncated reports whether some entries were omitted for capacity limits.",
            "Detailed Contacts: tracks is the returned contact array. Each tracks[i].id is that contact’s real identity text; position is its world position and velocity is [vx,vy,vz] in blocks per tick.",
            "Additional detailed fields appear only when available: category is the native category, scanned_time is the native scan game-tick timestamp, entity_type identifies the reported entity/contact type, friendly is the friendly-identification result, and synthetic marks a generated/false contact.",
            "Point Count/Total Point Count count all reported contacts. Returned Point Count/Points Truncated describe how many fit in Coordinate Array; Map JSON and Detailed Contacts carry their own returned_count/truncated values.",
            "Points Summary: format identifies points_array; total_count is the report total, returned_count is the coordinate-array count and truncated signals omitted points.",
            "Target ID identifies only the currently selected contact, not every detected contact. Target Position is its x,y,z; Target Velocity is vx,vy,vz in blocks/tick; Target Category is its native category and Target Is Friendly is the available identification result. Missing selections/metadata return empty text.",
            "Detailed lists are ordered by ID and may be truncated. Index [0] means the first returned entry, not the closest, most dangerous or selected contact. Select only Detailed Contacts to use the direct $.tracks path; multiple readings add a localized outer wrapper.",
            "Automatically Selected Target: whether the current selection was made automatically, rather than a manual selection.",
            "Linked: native network connection state. Radar Count/Monitor Count/Weapon Count: the corresponding connected endpoint counts."
          ]
        },
        {
          "heading": "Example",
          "code": "contact_id"
        }
      ]
    },
    {
      "name": "Auto Yaw Controller",
      "group": "Create: Radar",
      "description": "Running state, input RPM, target/requested angle, minimum/maximum angle, arrival/alignment, limit constraints and linked device counts. Angles use degrees.",
      "example": "90",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Running: controller movement state. Input RPM: available rotational drive, not a promise that the mechanism can instantly reach its command.",
            "Requested Angle: the request received by this controller, in degrees. Target Angle: its angle after effective movement-limit constraints. They are commands, not the cannon’s measured physical angle.",
            "Minimum Angle/Maximum Angle: configured movement limits in degrees. Constrained by Limits: whether the requested angle was constrained by the effective limits.",
            "At Target Angle: native single-axis arrival test. Aligned: native single-axis firing-alignment test. Neither proves that a complete, current ballistic solution exists.",
            "Linked and Radar Count/Monitor Count/Weapon Count: resolved network connection and endpoint counts. Target ID and Detailed Contacts are read from radar/network/monitor blocks, not from this controller."
          ]
        },
        {
          "heading": "Example",
          "code": "90"
        }
      ]
    },
    {
      "name": "Auto Pitch / T-Pitch Controller",
      "group": "Create: Radar",
      "description": "The same readings as Auto Yaw Controllers, plus engagement range. Reads existing device state without solving additional ballistics in the Mailbox.",
      "example": "90",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Running: controller movement state. Input RPM: available rotational drive, not a promise that the mechanism can instantly reach its command.",
            "Requested Angle: the request received by this controller, in degrees. Target Angle: its angle after effective movement-limit constraints. They are commands, not the cannon’s measured physical angle.",
            "Minimum Angle/Maximum Angle: configured movement limits in degrees. Constrained by Limits: whether the requested angle was constrained by the effective limits.",
            "At Target Angle: native single-axis arrival test. Aligned: native single-axis firing-alignment test. Neither proves that a complete, current ballistic solution exists.",
            "Linked and Radar Count/Monitor Count/Weapon Count: resolved network connection and endpoint counts. Target ID and Detailed Contacts are read from radar/network/monitor blocks, not from this controller.",
            "Engagement Range: native maximum engagement distance in blocks. T-Pitch can coordinate two weapon sides; a single controller angle is not both sides’ complete solution.",
            "During native compensated aiming these commands follow the original ballistic solver. When no usable solution exists, the native coordinate mode may still turn directly toward the target, or keep an old angle; an angle value alone must not be treated as a valid shot."
          ]
        },
        {
          "heading": "Example",
          "code": "90"
        }
      ]
    },
    {
      "name": "Fire Controller",
      "group": "Create: Radar",
      "description": "Read powered and firing state, as maintained by the original fire-control system.",
      "example": "false",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Powered: the native firing-control request state. Firing: the native firing output state. Both are booleans; neither is an accumulated shot count."
          ]
        },
        {
          "heading": "Example",
          "code": "false"
        }
      ]
    },
    {
      "name": "Directional Jammer",
      "group": "Create: Radar",
      "description": "Read enabled/discharging states, current and target yaw/pitch, selected emitter and position, connection state and jamming profile. Emitter fields are empty when no target is selected.",
      "example": "false",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Jammer Enabled: saved enabled state. Jammer Discharging: whether its native jamming discharge is active.",
            "Jammer Current Yaw/Jammer Current Pitch: actual orientation in degrees. Jammer Target Yaw/Jammer Target Pitch: requested orientation in degrees.",
            "Selected Emitter: native emitter identity text. Emitter Position: available world coordinates as x,y,z text, without JSON brackets. Jammer Linked: native connection state. Missing selected-emitter information returns empty text.",
            "Jamming Status: native Profile[...] diagnostic text, not JSON or a single state label. The record contains the following twelve values.",
            "jammerRpm: jammer rotational speed; powerFraction: normalized power; fullPowerRpm: speed needed for full power; alignmentDegrees: alignment error in degrees; alignmentFactor: alignment effectiveness.",
            "clusterSize: cooperating jammer count; stackingFactor: clustering multiplier; effectivenessFactor: overall effectiveness multiplier.",
            "outerStrength: outer-area jamming strength; directionalStrength: directional jamming strength; severeStrength: severe jamming strength; severeProgress: native progression through the severe jamming stage."
          ]
        },
        {
          "heading": "Example",
          "code": "false"
        }
      ]
    },
    {
      "name": "Radar Warning Receiver",
      "group": "Create: Radar",
      "description": "Read warning strength, threat count and detailed warnings: emitter, radar type, bearing, signal strength and available lock/engagement/friendly information. This is a warning list, not a normal entity point cloud.",
      "example": "15",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Warning Strength: native warning redstone level, 0–15. Threat Count: number of native reported warning contacts. Detailed Warnings: JSON containing contacts and count/truncation metadata.",
            "contacts[].source_id: emitter identity. radar_position: available emitter world [x,y,z]. radar_type: native radar-type identifier. bearing: emitter bearing in degrees; signal_strength: native warning-signal measurement, distinct from Warning Strength’s redstone output.",
            "lock_capable: source supports locking. within_radar_range: receiver is within the source’s native range. exact_locked: source reports an exact lock. engaged: source reports engagement. friendly: friendly-identification result. These booleans appear when available.",
            "total_count: all native warnings; returned_count: complete warning records included; truncated: capacity omitted some warnings. This contacts list is not a radar tracks list and source_id is not interchangeable with an ordinary target_id."
          ]
        },
        {
          "heading": "Example",
          "code": "15"
        }
      ]
    },
    {
      "name": "Identification Transponder",
      "group": "Create: Radar",
      "description": "Read the display name and identity-registration state of the containing loaded Sable structure. Identification codes are not exposed.",
      "example": "airship",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "Readout reference",
          "paragraphs": [
            "Structure Name: registered display name of the containing loaded Sable structure. Identity Registered: whether that structure has a native identity record. The identification code is not exposed as a reading."
          ]
        },
        {
          "heading": "Example",
          "code": "airship"
        }
      ]
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
      "example": "[green]Running normally\n[glow]Head to the dock\n{ [w=4,cycle=numeric] 03 | [w=12,right]Copper Ingot | [w=6] Left }",
      "sections": [
        {
          "heading": "Line and segment arguments",
          "paragraphs": [
            "[green], [red] and other dye-color prefixes set a line’s text color; [default] clears the assigned line color. [glow] enables glow and [noglow] disables it. Line breaks create separate display lines.",
            "[manual] marks a handwritten line; [auto] returns that line to automatic text updates. Plain automatic text preserves an existing manual line; explicit formatting can take over that line.",
            "{ ... | ... } splits a line into segments. Each segment may begin with [w=N,...]; w is width in character cells, 1–128. Chinese characters commonly require two cells.",
            "cycle selects native character behavior: alphabet for ordinary text, numeric for digits, pixel for pixel/bar characters, instant for direct updates, and arrival_time/fluid_units/shortened_numbers for the corresponding native formats. Omitting cycle uses alphabet.",
            "right aligns to the right edge; wide uses wider character cells; gap enables native section spacing; single enables the native single-flap option. Omitted flags are false."
          ],
          "code": "[green]{ [w=10,cycle=pixel] ██████▒▒▒▒ | [w=4,right] 60% }\n{ [w=4,cycle=numeric] 03 | [w=12,right] Copper Ingot | [w=6] Left }"
        },
        {
          "heading": "Example",
          "code": "[green]Running normally\n[glow]Head to the dock\n{ [w=4,cycle=numeric] 03 | [w=12,right]Copper Ingot | [w=6] Left }"
        }
      ]
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
      "fields": "network",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "network: explicit logistics-network name. An existing name joins that network; a new name creates one. This changes network membership, not only the displayed label."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"network\":\"Factory Main\"}"
        }
      ]
    },
    {
      "name": "Stock Link",
      "group": "Create",
      "description": "Move this Stock Link to the logistics network with the specified name. The same name identifies the same network. This changes the node logistics connections as well as its display label.",
      "example": "{\"network\":\"Factory Main\"}",
      "fields": "network",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "network: logistics-network name to join. Nodes with the same explicit name share that network."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"network\":\"Factory Main\"}"
        }
      ]
    },
    {
      "name": "Frogport",
      "group": "Create",
      "description": "address = delivery address (0-25 characters).",
      "example": "{\"address\":\"East Warehouse\"}",
      "fields": "address (0-25 characters)",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "address: delivery-address text, 0–25 characters. Empty text clears the configured address."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"address\":\"East Warehouse\"}"
        }
      ]
    },
    {
      "name": "Postbox (all colors)",
      "group": "Create",
      "description": "address = postbox address (0-25 characters).",
      "example": "{\"address\":\"East Warehouse\"}",
      "fields": "address (0-25 characters)",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "address: receiving-address text, 0–25 characters. Empty text clears the configured address."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"address\":\"East Warehouse\"}"
        }
      ]
    },
    {
      "name": "Packager",
      "group": "Create",
      "description": "Request packaging from an item list. Supports stock JSON, Maps and loose item names, such as {Apple:4}; names must identify an item uniquely. By default, insufficient stock rejects the entire order; allow_partial=true permits partial packaging. Up to 256 entries per request, 1-4096 per entry and 65536 in total.",
      "example": "{\"items\":[{\"id\":\"minecraft:apple\",\"count\":4}],\"address\":\"East Warehouse\",\"allow_partial\":false}",
      "fields": "items, address, allow_partial",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "items: requested stock list; each object uses id for a registry ID or name for a unique localized item name, and count for the requested quantity. A stock map such as {Apple:4} is also accepted.",
            "items[].count: 1–4096 items per entry; at most 256 entries and 65536 items per request. Counts request new packaging, rather than setting an inventory value.",
            "address: destination printed on the package; omitted address uses the Packager’s existing sign-based address.",
            "allow_partial: true permits packaging available items when the complete order cannot be fulfilled; false is the default and rejects an incomplete order."
          ]
        },
        {
          "heading": "Example: request four apples",
          "paragraphs": [
            "Attach the receiving Mailbox to the Packager and enable Automatic Output. Deliver this command on its receive frequency and activate the channel. id identifies the item; count is the quantity for this request. A later request with count:2 requests two new apples."
          ],
          "code": "{\"items\":[{\"id\":\"minecraft:apple\",\"count\":4}],\"address\":\"East Warehouse\",\"allow_partial\":false}"
        }
      ]
    },
    {
      "name": "Brass Funnel / Brass Belt Funnel",
      "group": "Create",
      "description": "amount = maximum quantity per operation (1-64, also limited by the filter slot maximum). mode defines the behavior: at_most = take/deposit up to this amount, even if fewer are available; exact = require exactly this amount, otherwise do nothing. JSON also accepts mode indices 0/1.",
      "example": "{\"amount\":16,\"mode\":\"exact\"}",
      "fields": "amount (1–64), mode (at_most / exact)",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "amount: item quantity per transfer, 1–64, further limited by the device/filter maximum.",
            "mode: at_most (0) transfers up to amount; exact (1) waits until exactly amount can be transferred. Omitted fields retain their settings."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"amount\":16,\"mode\":\"exact\"}"
        }
      ]
    },
    {
      "name": "Brass Tunnel",
      "group": "Create",
      "description": "mode = item distribution mode: split = split evenly, forced_split = forced even split, round_robin = round robin, forced_round_robin = forced round robin, prefer_nearest = prefer nearest, randomize = random, synchronize = synchronize. JSON accepts 0-6.",
      "example": "{\"mode\":\"round_robin\"}",
      "fields": "mode",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "mode: distribution policy; split (0) divides evenly, forced_split (1) waits for an even split, round_robin (2) visits outputs in order, forced_round_robin (3) waits for each output, prefer_nearest (4) prefers the nearest output, randomize (5) chooses randomly, and synchronize (6) synchronizes outputs."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"mode\":\"round_robin\"}"
        }
      ]
    },
    {
      "name": "Weighted Ejector",
      "group": "Create",
      "description": "Change the launch target or operation quantity; each pulse can write only one of them. The target must lie on a single horizontal axis through the ejector and satisfy Create maximum launch distance and height limits. Send {\"stack_size\":8} separately to set stack_size.",
      "example": "{\"target_pos\":[120,64,-30]}",
      "fields": "target_pos (world coordinates) or stack_size (0-64)",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "target_pos: [x,y,z] in absolute world block coordinates. The target must share a horizontal axis with the ejector and satisfy Create’s launch limits.",
            "stack_size: 0–64 items required per automatic launch; 0 is Create’s * setting and allows any nonempty quantity. Send either target_pos or stack_size in one command, rather than both."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"target_pos\":[120,64,-30]}"
        }
      ]
    },
    {
      "name": "Rotation Speed Controller",
      "group": "Create",
      "description": "speed = target rotation speed: positive follows the facing direction, negative reverses it, with magnitude 0-256; 0 stops rotation.",
      "example": "{\"speed\":128}",
      "fields": "speed (−256–256)",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "speed: signed target speed in RPM, −256–256; the sign selects direction and 0 requests a stop. Actual operation still requires power."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"speed\":128}"
        }
      ]
    },
    {
      "name": "Creative Motor",
      "group": "Create",
      "description": "speed = generated rotation speed: positive outputs in the facing direction, negative reverses it, with magnitude 0-256; 0 stops rotation. Reversing at a speed no greater than the current network speed is rejected (unsafe_direction).",
      "example": "{\"speed\":64}",
      "fields": "speed (−256–256)",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "speed: signed generated speed in RPM, −256–256; the sign selects direction and 0 stops output. Native network safety checks still apply when reversing."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"speed\":64}"
        }
      ]
    },
    {
      "name": "Steam Engine",
      "group": "Create",
      "description": "direction = rotation direction: clockwise (cw) or counter_clockwise (ccw). JSON accepts 0/1.",
      "example": "{\"direction\":\"clockwise\"}",
      "fields": "direction",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "direction: clockwise (cw, 0) or counter_clockwise (ccw, 1), using the device’s own rotation-direction convention."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"direction\":\"clockwise\"}"
        }
      ]
    },
    {
      "name": "Windmill Bearing",
      "group": "Create",
      "description": "rotation_direction = windmill rotation direction: clockwise (cw/forward) or counter_clockwise (ccw/reverse). JSON accepts 0/1.",
      "example": "{\"rotation_direction\":\"counter_clockwise\"}",
      "fields": "rotation_direction",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "rotation_direction: clockwise (cw/forward, 0) or counter_clockwise (ccw/reverse, 1). This configures direction and does not assemble the windmill."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"rotation_direction\":\"counter_clockwise\"}"
        }
      ]
    },
    {
      "name": "Mechanical Bearing",
      "group": "Create",
      "description": "movement_mode = how the contraption is handled when it stops: rotate_place = always disassemble, rotate_place_returned = disassemble only near the starting angle, rotate_never_place = disassemble only when destroyed. JSON accepts 0/1/2.",
      "example": "{\"movement_mode\":\"rotate_place_returned\"}",
      "fields": "movement_mode",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "movement_mode: rotate_place (0) disassembles when stopped; rotate_place_returned (1) disassembles only at the starting angle; rotate_never_place (2) disassembles only when destroyed."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"movement_mode\":\"rotate_place_returned\"}"
        }
      ]
    },
    {
      "name": "Clockwork Bearing",
      "group": "Create",
      "description": "mode = clock mode: hour_first = hour hand first, minute_first = minute hand first, hour_first_24 = 24-hour hand. JSON accepts 0/1/2.",
      "example": "{\"mode\":\"hour_first_24\"}",
      "fields": "mode",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "mode: hour_first (0) prioritizes the hour hand, minute_first (1) prioritizes the minute hand, and hour_first_24 (2) uses a 24-hour hand."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"mode\":\"hour_first_24\"}"
        }
      ]
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
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "mode: round_robin visits available points in order; forced_round_robin waits for the next point; prefer_first prefers the first available point.",
            "take_positions: list of pickup [x,y,z] offsets relative to the arm block.",
            "deposit_positions: list of deposit [x,y,z] offsets relative to the arm block.",
            "take_positions_absolute: pickup positions in absolute world block coordinates, converted to arm-relative positions when saved.",
            "deposit_positions_absolute: deposit positions in absolute world block coordinates, converted when saved. Provide only one coordinate form for each side.",
            "Each supplied position list replaces that side only; [] clears it. Each side allows at most 64 accessible, loaded targets inside native arm range. Omitted fields retain their settings."
          ]
        }
      ]
    },
    {
      "name": "Mechanical Saw",
      "group": "Create",
      "description": "Filter cutting recipes by their result item. Accepts a full registry ID, a short path or a unique localized name, rather than a recipe ID. Input and recipe conditions must still be met. minecraft:air clears the filter.",
      "example": "{\"result\":\"Oak Planks\"}",
      "fields": "result",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "result: the output item used to select cutting recipes. Use an item registry ID, a unique path, or a unique localized item name. It is an item, not a recipe ID; minecraft:air clears the filter."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"result\":\"Oak Planks\"}"
        }
      ]
    },
    {
      "name": "Basin",
      "group": "Create",
      "description": "Filter Basin recipes by result item, including recipes used by processing equipment above it. Accepts a registry ID, path or unique item name. Ingredients, fluids, heat and other conditions must still be met. Fluid-only recipes can be filtered with the corresponding filled container recognized by Create. minecraft:air clears the filter.",
      "example": "{\"result\":\"create:brass_ingot\"}",
      "fields": "result",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "result: the desired result item used by the Basin recipe filter. Use an item registry ID, path, or unique item name; minecraft:air clears the filter. Ingredients, fluid and heat requirements are still enforced."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"result\":\"create:brass_ingot\"}"
        }
      ]
    },
    {
      "name": "Sticky Mechanical Piston",
      "group": "Create",
      "description": "movement_mode = how the contraption is handled when it stops: move_place = always disassemble, move_place_returned = disassemble only at the starting position, move_never_place = disassemble only when destroyed. JSON accepts 0/1/2.",
      "example": "{\"movement_mode\":\"move_place_returned\"}",
      "fields": "movement_mode",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "movement_mode: move_place (0) disassembles whenever stopped; move_place_returned (1) disassembles only at its starting position; move_never_place (2) disassembles only when destroyed."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"movement_mode\":\"move_place_returned\"}"
        }
      ]
    },
    {
      "name": "Cart Assembler",
      "group": "Create",
      "description": "movement_mode = minecart movement mode: rotate = always face the travel direction, rotate_paused = pause the machine while the cart turns, rotation_locked = lock rotation. JSON accepts 0/1/2.",
      "example": "{\"movement_mode\":\"rotation_locked\"}",
      "fields": "movement_mode",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "movement_mode: rotate (0) follows the cart’s travel direction; rotate_paused (1) pauses while turning; rotation_locked (2) prevents rotation."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"movement_mode\":\"rotation_locked\"}"
        }
      ]
    },
    {
      "name": "Mechanical Roller",
      "group": "Create",
      "description": "mode selects tunnel_pave, straight_fill or wide_fill. material uses the registry ID of a placeable full block. An empty string or minecraft:air clears the material filter. Actual paving still requires materials in the contraption inventory; invalid blocks are rejected.",
      "example": "{\"mode\":\"wide_fill\",\"material\":\"minecraft:gravel\"}",
      "fields": "mode, material",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "mode: tunnel_pave paves the tunnel floor, straight_fill fills directly below, and wide_fill fills a wider area.",
            "material: registry ID of a valid placeable full block used for paving. Empty text or minecraft:air clears the filter; supplying material does not supply actual blocks."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"mode\":\"wide_fill\",\"material\":\"minecraft:gravel\"}"
        }
      ]
    },
    {
      "name": "Brass Diode",
      "group": "Create",
      "description": "delay = relay delay (2-72000 ticks). Shared by the Adjustable Repeater, Pulse Extender and Pulse Repeater.",
      "example": "{\"delay\":100}",
      "fields": "delay (2–72000 tick)",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "delay: native relay/extension/repetition delay in game ticks, 2–72000. At normal tick rate, 20 ticks equal one second."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"delay\":100}"
        }
      ]
    },
    {
      "name": "Valve Handle",
      "group": "Create",
      "description": "angle = valve handle rotation angle (-180 to 180 degrees).",
      "example": "{\"angle\":90}",
      "fields": "angle (−180–180°)",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "angle: rotation command in degrees, −180–180; a signed value selects the direction."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"angle\":90}"
        }
      ]
    },
    {
      "name": "Sequenced Gearshift",
      "group": "Create",
      "description": "Replace the program remotely. Use shorthand separated by newlines or semicolons, or steps JSON. Instructions are rotate, drive, delay, await and end; directions support forward/backward/fast_forward/fast_back. Up to five steps, including any automatically appended end step. Rotation: 1-360 degrees; drive: 1-128; delay: 1-600 ticks. Writing stops the old program without starting the new one; supply a separate redstone pulse.",
      "example": "rotate 90 forward; delay 20; end",
      "fields": "steps",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "steps: an array of instruction objects or a program string separated by semicolons/newlines. A replacement program stops the previous one; a separate redstone pulse starts it.",
            "steps[].instruction: rotate rotates through an angle; drive moves a distance; delay waits for time; await waits for a new signal; end terminates the program.",
            "steps[].value: rotate uses 1–360 degrees (default 90), drive uses 1–128 distance units (default 5), and delay uses 1–600 ticks (default 10). await/end need no value.",
            "steps[].direction: forward, backward, fast_forward or fast_back for rotate/drive. Ordinary directions use the input speed; fast directions use twice that speed. Omitted movement direction uses forward.",
            "At most five steps are stored. A missing end is appended automatically and counts toward that limit."
          ]
        },
        {
          "heading": "JSON program example",
          "code": "{\"steps\":[{\"instruction\":\"rotate\",\"value\":90,\"direction\":\"forward\"},{\"instruction\":\"delay\",\"value\":20},{\"instruction\":\"end\"}]}"
        },
        {
          "heading": "Example",
          "code": "rotate 90 forward; delay 20; end"
        }
      ]
    },
    {
      "name": "Nameplate (all colors)",
      "group": "Aeronautics",
      "description": "name = nameplate text (shared by all nameplate colors, up to 32 characters, including newlines); text_color = text color (English color name or index 0-15); glow = whether it glows (true/false).",
      "example": "{\"name\":\"East Warehouse\",\"text_color\":\"yellow\",\"glow\":true}",
      "fields": "name, text_color, glow",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "name: displayed text, up to 32 characters, with newlines supported.",
            "text_color: one of the native 16 dye/text colors, as an English color name or its device index 0–15.",
            "glow: true enables glowing text; false disables it. Omitted fields retain their settings."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"name\":\"East Warehouse\",\"text_color\":\"yellow\",\"glow\":true}"
        }
      ]
    },
    {
      "name": "Portable Engine",
      "group": "Aeronautics",
      "description": "rotation_direction = output direction: clockwise (cw/forward) or counter_clockwise (ccw/reverse). JSON accepts 0/1.",
      "example": "{\"rotation_direction\":\"clockwise\"}",
      "fields": "rotation_direction",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "rotation_direction: clockwise (cw/forward, 0) or counter_clockwise (ccw/reverse, 1)."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"rotation_direction\":\"clockwise\"}"
        }
      ]
    },
    {
      "name": "Gimbal Sensor",
      "group": "Aeronautics",
      "description": "axis = gimbal set angle (-90 to 90 degrees).",
      "example": "{\"axis\":30}",
      "fields": "axis (−90–90°)",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "axis: the gimbal’s configured target angle in degrees, −90–90."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"axis\":30}"
        }
      ]
    },
    {
      "name": "Optical Sensor",
      "group": "Aeronautics",
      "description": "range = optical sensor detection range (1-4096).",
      "example": "{\"range\":128}",
      "fields": "range (1–4096)",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "range: maximum optical detection distance in blocks, 1–4096."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"range\":128}"
        }
      ]
    },
    {
      "name": "Laser Pointer",
      "group": "Aeronautics",
      "description": "max_range = maximum laser range in blocks, from 1 to the server limit.",
      "example": "{\"max_range\":64}",
      "fields": "max_range (1 to the server limit)",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "max_range: maximum laser distance in blocks, from 1 to the server/device limit."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"max_range\":64}"
        }
      ]
    },
    {
      "name": "Speed Sensor",
      "group": "Aeronautics",
      "description": "max_speed = speed sensor measurement range (1-50).",
      "example": "{\"max_speed\":20}",
      "fields": "max_speed (1–50)",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "max_speed: native maximum speed measurement setting, 1–50. It sets the sensor range rather than forcing the structure to that speed."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"max_speed\":20}"
        }
      ]
    },
    {
      "name": "Steering Wheel",
      "group": "Aeronautics",
      "description": "max_angle = maximum steering wheel angle (1-360 degrees).",
      "example": "{\"max_angle\":90}",
      "fields": "max_angle (1–360°)",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "max_angle: maximum permitted steering rotation in degrees, 1–360."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"max_angle\":90}"
        }
      ]
    },
    {
      "name": "Torsion Spring",
      "group": "Aeronautics",
      "description": "max_angle = maximum torsion spring travel angle (1-360 degrees).",
      "example": "{\"max_angle\":180}",
      "fields": "max_angle (1–360°)",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "max_angle: maximum permitted spring travel in degrees, 1–360."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"max_angle\":180}"
        }
      ]
    },
    {
      "name": "Rotary Bearing",
      "group": "Aeronautics",
      "description": "locking = locking mode: locked_always = always locked, locked_default = locked by default, unlocked_default = unlocked by default, unlocked_always = always unlocked. JSON accepts 0-3.",
      "example": "{\"locking\":\"locked_default\"}",
      "fields": "locking",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "locking: locked_always (0), locked_default (1), unlocked_default (2), or unlocked_always (3). The default variants preserve the native redstone-controlled locking behavior."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"locking\":\"locked_default\"}"
        }
      ]
    },
    {
      "name": "Redstone Accumulator",
      "group": "Aeronautics",
      "description": "delay = accumulation delay (2-72000 ticks).",
      "example": "{\"delay\":20}",
      "fields": "delay (2–72000 tick)",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "delay: accumulation delay in game ticks, 2–72000; 20 ticks equal one second at normal tick rate."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"delay\":20}"
        }
      ]
    },
    {
      "name": "Redstone Inductor",
      "group": "Aeronautics",
      "description": "delay = inductance delay (0-72000 ticks).",
      "example": "{\"delay\":20}",
      "fields": "delay (0–72000 tick)",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "delay: induction delay in game ticks, 0–72000."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"delay\":20}"
        }
      ]
    },
    {
      "name": "Propeller Bearing",
      "group": "Aeronautics",
      "description": "thrust_direction = thrust direction: right_handed (rh) or left_handed (lh). JSON accepts 0/1.",
      "example": "{\"thrust_direction\":\"right_handed\"}",
      "fields": "thrust_direction",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "thrust_direction: right_handed (rh, 0) or left_handed (lh, 1), using the native handedness setting. It does not provide rotational power."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"thrust_direction\":\"right_handed\"}"
        }
      ]
    },
    {
      "name": "Gyroscopic Propeller Bearing",
      "group": "Aeronautics",
      "description": "thrust_direction = thrust direction: right_handed (rh) or left_handed (lh). JSON accepts 0/1.",
      "example": "{\"thrust_direction\":\"left_handed\"}",
      "fields": "thrust_direction",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "thrust_direction: right_handed (rh, 0) or left_handed (lh, 1). Tilt and powered state remain under the device’s native controls."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"thrust_direction\":\"left_handed\"}"
        }
      ]
    },
    {
      "name": "Hot Air Burner",
      "group": "Aeronautics",
      "description": "hot_air_amount = hot air production, from 5 to the server limit (default 500). Higher values provide more lift.",
      "example": "{\"hot_air_amount\":100}",
      "fields": "hot_air_amount (5 to the server limit)",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "hot_air_amount: configured hot-air production amount, from 5 to the device/server maximum. It changes the native production setting, not an inventory quantity."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"hot_air_amount\":100}"
        }
      ]
    },
    {
      "name": "Steam Vent",
      "group": "Aeronautics",
      "description": "steam_amount = maximum steam discharge, from 0 to the server limit (device-specific default).",
      "example": "{\"steam_amount\":100}",
      "fields": "steam_amount (subject to the server limit)",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "steam_amount: native maximum steam-discharge amount; 0 stops discharge. The device/server limits are enforced."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"steam_amount\":100}"
        }
      ]
    },
    {
      "name": "Wheel Mount",
      "group": "Aeronautics",
      "description": "suspension_strength = suspension/shock absorption strength on the top face (5-180).",
      "example": "{\"suspension_strength\":30}",
      "fields": "suspension_strength (5–180)",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "suspension_strength: native suspension-strength setting for the top mounting face, 5–180."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"suspension_strength\":30}"
        }
      ]
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
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "yaw: mount-relative yaw setting in degrees, −45–45.",
            "pitch: mount-relative pitch setting in degrees, −45–45; neither angle is a universal world heading.",
            "target: integer absolute world coordinates [x,y,z]. When present, the native mount orientation is aimed toward this position and overrides yaw/pitch. This direct mount path does not provide Radar ballistic compensation.",
            "fire_count: 0–64 shots requested; 0 cancels queued AFN shots. Ammunition and native readiness checks still apply. Omitted angles remain unchanged."
          ]
        }
      ]
    },
    {
      "name": "Electric Motor",
      "group": "Create Crafts & Additions",
      "description": "Set the target speed and direction remotely. The range follows the motor configuration, defaulting to −256–256 RPM. Power supply and redstone shutoff remain controlled by the motor itself.",
      "example": "{\"speed\":64,\"direction\":\"reverse\"}",
      "fields": "speed (integer RPM), direction (forward / reverse)",
      "mod": "Create Crafts & Additions",
      "sections": [
        {
          "heading": "Shorthand",
          "paragraphs": [
            "Send an integer directly: 64 runs forward, -64 reverses, and 0 stops. The pair 64,1 also selects reverse rotation."
          ],
          "code": "-64"
        },
        {
          "heading": "Set speed and direction together",
          "paragraphs": [
            "speed is signed RPM. When direction is supplied, it determines direction and speed supplies only the magnitude. forward corresponds to 0; reverse corresponds to 1. cw/ccw and the Chinese aliases are also accepted, relative to the motor's own direction setting."
          ],
          "code": "{\"speed\":64,\"direction\":\"reverse\"}"
        },
        {
          "heading": "Change one field",
          "paragraphs": [
            "JSON may contain speed or direction alone. Changing only direction preserves the current speed magnitude; this example reverses it."
          ],
          "code": "{\"direction\":\"reverse\"}"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "speed: integer target RPM. Its magnitude is constrained by the server-configured motor limit; 0 stops.",
            "direction: forward/reverse, or 0/1. With direction omitted, speed’s sign selects direction; with it supplied, direction explicitly selects the sign. The motor still requires energy."
          ]
        }
      ]
    },
    {
      "name": "Diesel Engine",
      "group": "Diesel Generators",
      "description": "Change this engine’s direction without setting RPM. Fuel and redstone shutdown rules still apply.",
      "example": "{\"direction\":\"counter_clockwise\"}",
      "fields": "direction (clockwise / counter_clockwise, 0 / 1)",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Direction",
          "paragraphs": [
            "Bare values accept 0/1, clockwise/counter_clockwise or cw/ccw. 0=clockwise and 1=counter_clockwise, relative to the device itself."
          ],
          "code": "1"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "direction: clockwise (cw, 0) or counter_clockwise (ccw, 1). This changes the engine’s native direction setting; it does not add fuel or force production."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"direction\":\"counter_clockwise\"}"
        }
      ]
    },
    {
      "name": "Modular Diesel Engine",
      "group": "Diesel Generators",
      "description": "Attach to any member to change the whole group’s direction. Original structure and shutdown conditions still apply.",
      "example": "{\"direction\":\"counter_clockwise\"}",
      "fields": "direction (clockwise / counter_clockwise, 0 / 1)",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Direction",
          "paragraphs": [
            "Bare values accept 0/1, clockwise/counter_clockwise or cw/ccw. 0=clockwise and 1=counter_clockwise, relative to the device itself."
          ],
          "code": "1"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "direction: clockwise (cw, 0) or counter_clockwise (ccw, 1), applied consistently to the loaded engine group."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"direction\":\"counter_clockwise\"}"
        }
      ]
    },
    {
      "name": "Huge Diesel Engine",
      "group": "Diesel Generators",
      "description": "Change connected engines on the same Powered Engine Shaft. Correct assembly and fuel are still required.",
      "example": "{\"direction\":\"counter_clockwise\"}",
      "fields": "direction (clockwise / counter_clockwise, 0 / 1)",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Direction",
          "paragraphs": [
            "Bare values accept 0/1, clockwise/counter_clockwise or cw/ccw. 0=clockwise and 1=counter_clockwise, relative to the device itself."
          ],
          "code": "1"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "direction: clockwise (cw, 0) or counter_clockwise (ccw, 1), using the shared native engine-shaft direction."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"direction\":\"counter_clockwise\"}"
        }
      ]
    },
    {
      "name": "Powered Engine Shaft",
      "group": "Diesel Generators",
      "description": "Configure connected Huge Diesel Engines through their shaft. An empty shaft has no engine to configure.",
      "example": "{\"direction\":\"counter_clockwise\"}",
      "fields": "direction (clockwise / counter_clockwise, 0 / 1)",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Direction",
          "paragraphs": [
            "Bare values accept 0/1, clockwise/counter_clockwise or cw/ccw. 0=clockwise and 1=counter_clockwise, relative to the device itself."
          ],
          "code": "1"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "direction: clockwise (cw, 0) or counter_clockwise (ccw, 1). It is a rotation setting, not a start/stop switch."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"direction\":\"counter_clockwise\"}"
        }
      ]
    },
    {
      "name": "Chemical Turret (placed chemical sprayer)",
      "group": "Diesel Generators",
      "description": "Set target angles, start/stop sustained spraying, or request a single spray. This controls the placed block and still requires fluid and kinetic power. Rotation follows the original smooth movement.",
      "example": "{\"yaw\":90,\"pitch\":-20,\"spray\":true,\"spray_once\":false}",
      "fields": "yaw, pitch, spray (sustained), spray_once (single spray)",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Angles and shorthand",
          "paragraphs": [
            "yaw accepts -360000–360000 degrees and normalizes to 0–360; pitch accepts -50–11 degrees, with negative values aiming upward. Send 90,-20 or [90,-20] to set both; a bare number changes only yaw."
          ],
          "code": "90,-20"
        },
        {
          "heading": "Spraying",
          "paragraphs": [
            "spray=true keeps spraying even after the channel deactivates; spray=false stops sustained spraying and cancels a pending single spray. Each message with spray_once=true requests one spray without waiting for rotation to finish. External redstone may override sustained spraying; player/entity control may take over aiming. JSON may supply only the fields to change."
          ],
          "code": "{\"spray_once\":true}"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "yaw: requested horizontal angle in degrees; large signed angles are accepted and normalized by the device.",
            "pitch: requested vertical angle in degrees, −50–11.",
            "spray: true requests sustained spraying; false stops that request. Actual spraying also depends on fluid and native conditions.",
            "spray_once: true requests a single spray; false does not schedule another one-shot; spray:false clears a pending one-shot. Omitted fields retain their state."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"yaw\":90,\"pitch\":-20,\"spray\":true,\"spray_once\":false}"
        }
      ]
    },
    {
      "name": "Burner",
      "group": "Diesel Generators",
      "description": "burn_rate is the valve opening from 0 to 1. Actual heat depends on fuel; mechanical valve movement and external redstone still adjust or override it under the original rules.",
      "example": "{\"burn_rate\":0.5}",
      "fields": "burn_rate (0–1)",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Shorthand",
          "paragraphs": [
            "Bare 0.5 sets half opening, while 0 closes the valve. Burn rate is not fuel consumption per tick and does not bypass fuel requirements."
          ],
          "code": "0.5"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "burn_rate: valve opening from 0 to 1, including decimals; 0 closes the valve and 1 fully opens it. It is not a fuel-consumption amount per tick."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"burn_rate\":0.5}"
        }
      ]
    },
    {
      "name": "Pumpjack Crank",
      "group": "Diesel Generators",
      "description": "Set crank size: normal is 0, large is 1. Original pumpjack assembly and connection requirements still apply.",
      "example": "{\"size\":\"large\"}",
      "fields": "size (normal / large, 0 / 1)",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "Shorthand",
          "paragraphs": [
            "Send bare 1 or large."
          ],
          "code": "1"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "size: normal (0) or large (1), selecting the native crank-size option."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"size\":\"large\"}"
        }
      ]
    },
    {
      "name": "Centrifugal Clutch",
      "group": "Create: Connected",
      "description": "speed_threshold = rotation speed threshold for engaging/disengaging transmission (-256 to 256). Positive values engage when speed reaches the threshold; negative values engage only when speed falls below the threshold.",
      "example": "{\"speed_threshold\":64}",
      "fields": "speed_threshold (−256–256)",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "speed_threshold: signed native coupling threshold in RPM, −256–256. A negative setting inverts the coupling rule."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"speed_threshold\":64}"
        }
      ]
    },
    {
      "name": "Flywheel Clutch",
      "group": "Create: Connected",
      "description": "direction = permitted rotation direction for transmission (clockwise/counter_clockwise or 0/1).",
      "example": "{\"direction\":\"clockwise\"}",
      "fields": "direction",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "direction: permitted coupling direction, clockwise (0) or counter_clockwise (1)."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"direction\":\"clockwise\"}"
        }
      ]
    },
    {
      "name": "Kinetic Battery",
      "group": "Create: Connected",
      "description": "direction = charge/discharge direction (clockwise/counter_clockwise or 0/1).",
      "example": "{\"direction\":\"counter_clockwise\"}",
      "fields": "direction",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "direction: native charge/discharge rotation direction, clockwise (0) or counter_clockwise (1). This is not a numeric charge-level command."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"direction\":\"counter_clockwise\"}"
        }
      ]
    },
    {
      "name": "Kinetic Bridge",
      "group": "Create: Connected",
      "description": "stress_multiplier = stress multiplication setting (0-2048). Each increase of 10 doubles the multiplier; 40 is about 16 times.",
      "example": "{\"stress_multiplier\":40}",
      "fields": "stress_multiplier (0–2048)",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "stress_multiplier: the native stress-scaling control value, 0–2048. This is a value-box setting, not a direct SU amount or an unscaled multiplication ratio."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"stress_multiplier\":40}"
        }
      ]
    },
    {
      "name": "Overstress Clutch",
      "group": "Create: Connected",
      "description": "delay = disengagement delay after overstress (1-72000 ticks; the GUI displays seconds/minutes).",
      "example": "{\"delay\":100}",
      "fields": "delay (1–72000 tick)",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "delay: disengagement delay in game ticks, 1–72000; 20 ticks equal one second at normal tick rate."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"delay\":100}"
        }
      ]
    },
    {
      "name": "Note Block",
      "group": "Vanilla",
      "description": "instrument = sound: harp, basedrum (bass drum), snare, hat (hi-hat), bass, flute, bell, guitar, chime, xylophone, iron_xylophone, cow_bell, didgeridoo, bit (chip), banjo or pling; also zombie/skeleton/creeper/dragon/wither_skeleton/piglin head imitations and custom_head (requires a head above). note = pitch from 0 to 24, lowest to highest, covering 25 semitones.",
      "example": "{\"instrument\":\"bell\",\"note\":12}",
      "fields": "instrument, note (0–24)",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "instrument: native sound name, such as harp, bass, bell, flute or pling; head imitation sounds require the matching native setup.",
            "note: integer pitch index 0–24, from low to high; 25 semitone positions. Omitted fields retain their settings."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"instrument\":\"bell\",\"note\":12}"
        }
      ]
    },
    {
      "name": "Broadcast Speaker",
      "group": "NetMusic",
      "description": "Remotely set the live stream source, name, range and playback state. state=play starts/resumes playback; stop stops it. source accepts an m3u8 URL or the cnr1/cnr4/cnr16/cgtn presets. Live streams cannot pause: stop disconnects, and the next play reconnects. Range is 1-256 and subject to the server limit; clients must be able to access the audio.",
      "example": "{\"state\":\"play\",\"source\":\"cnr1\",\"name\":\"Factory Radio\",\"range\":64}",
      "fields": "state, source, name, range",
      "mod": "NetMusic",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "state: play starts/reconnects the live stream; stop disconnects it. Live streams have no seekable pause state.",
            "source: stream URL or cnr1/cnr4/cnr16/cgtn preset alias; up to 1024 characters.",
            "name: displayed broadcast name, up to 256 characters.",
            "range: broadcast radius in blocks, 1–256, further constrained by the server limit. Omitted configuration fields retain their values."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"state\":\"play\",\"source\":\"cnr1\",\"name\":\"Factory Radio\",\"range\":64}"
        }
      ]
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
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "mode: disj matches any rule, conj requires all rules, and deny rejects matches. Without a stored mode, matching defaults to disj.",
            "names: array of displayed item names. items: array of item registry IDs. tags: array of item-tag IDs, with an optional leading #.",
            "attributes: array of Create attribute entries copied from the filter’s attribute editor. Each entry contains an attribute object and its native inversion flag; the attribute type determines its additional fields.",
            "attributes[].attribute: a Create attribute object; attribute.type is its registered type and remaining keys depend on that type. attributes[].inverted: true negates this attribute test, false tests normally. Copy exported attributes rather than guessing type-specific data.",
            "Quota form: items becomes an array of objects with id/item/name selecting an item and count setting its allowance. A quota object or a plain stock map {Apple:2} is also accepted.",
            "count: allowance per quota entry, 1–4096; total: additional combined passage limit, 0–65536; −1 or omission applies only individual allowances. Quota rules and ordinary mode/names/items/tags/attributes rules must not be mixed.",
            "truncated: stock-list metadata accepted for compatibility; it is not another quota. An empty rule document permits nothing; an invalid update preserves existing rules."
          ]
        },
        {
          "heading": "JSON matching and quota examples",
          "paragraphs": [
            "The first document matches listed item IDs/tags. The second is a separate quota document: at most four apples may pass, with a combined total cap of three. Send one document at a time."
          ],
          "code": "{\"mode\":\"disj\",\"items\":[\"minecraft:apple\"],\"tags\":[\"minecraft:logs\"]}\n\n{\"items\":[{\"id\":\"minecraft:apple\",\"count\":4}],\"total\":3}"
        },
        {
          "heading": "Example",
          "code": "mode:disj\nApple\nid:minecraft:bread\ntag:minecraft:logs\n\nQuota example: {Apple:2, minecraft:bread:1}"
        }
      ]
    },
    {
      "name": "Attitude Stabilizer",
      "group": "Flight Control",
      "description": "Remotely set the Attitude Stabilizer P/D gains, mode, forward direction and default enabled state. 2,0.5 sets P/D together. mode accepts LEVEL_NO_YAW, LEVEL or HOLD_CURRENT; forward is north/east/south/west. Omitted fields retain their current values.",
      "example": "{\"p\":2,\"d\":0.5,\"mode\":\"LEVEL_NO_YAW\",\"forward\":\"north\",\"enabled\":true}",
      "fields": "p, d, mode, forward, enabled; pair shorthand: 2,0.5",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "p: proportional gain; d: derivative/damping gain. Both are decimals and the device uses their absolute values.",
            "mode: LEVEL_NO_YAW levels without locking heading; LEVEL levels and holds heading; HOLD_CURRENT holds the captured current attitude.",
            "forward: the body’s forward direction, north/east/south/west.",
            "enabled: default enabled state, true/false; native redstone switching still applies. Omitted fields retain their settings."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"p\":2,\"d\":0.5,\"mode\":\"LEVEL_NO_YAW\",\"forward\":\"north\",\"enabled\":true}"
        }
      ]
    },
    {
      "name": "Altitude Stabilizer",
      "group": "Flight Control",
      "description": "Remotely set the Altitude Stabilizer P/D, mode, preset altitude, capture delay, step and default enabled state. mode accepts hold_current, hold_preset or minimum_altitude. Providing altitude enables preset altitude. Omitted fields retain their current values.",
      "example": "{\"p\":2,\"d\":0.5,\"mode\":\"hold_preset\",\"altitude\":20}",
      "fields": "p, d, mode, altitude, delay, step, enabled; pair shorthand: 2,0.5",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "p: proportional altitude gain; d: derivative/damping gain. The device uses their absolute values.",
            "mode: hold_current captures the current altitude; hold_preset holds the configured altitude; minimum_altitude enforces a minimum altitude.",
            "altitude: preset world altitude; providing it enables the preset-altitude value.",
            "delay: delay before capturing current altitude, in seconds, 0–3600.",
            "step: nonnegative preset-altitude adjustment step.",
            "enabled: default enabled state. Omitted fields retain their settings."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"p\":2,\"d\":0.5,\"mode\":\"hold_preset\",\"altitude\":20}"
        }
      ]
    },
    {
      "name": "Distance Coupler",
      "group": "Flight Control",
      "description": "Change P/D, target distance interval, inversion and sampling mode. 2,0.5 sets both gains; range 4 12 sets min/max together. Distance ranges from 0 to 128; mode accepts AVERAGE, MAX or MIN. enabled changes the default coupling state; the redstone proxy master switch still inverts it according to the device rules.",
      "example": "{\"p\":2,\"d\":0.5,\"min\":4,\"max\":12,\"invert\":false,\"mode\":\"AVERAGE\"}",
      "fields": "p, d, min, max, invert, mode, enabled",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "p: proportional coupling gain; d: derivative/damping gain; negative values are treated as absolute values.",
            "min/max: lower/upper target distance in blocks, 0–128; min must not exceed max.",
            "invert: true inverts the selected distance interval; false uses it normally.",
            "mode: AVERAGE uses the average distance sample, MAX the maximum, and MIN the minimum.",
            "enabled: default coupling state; the native redstone proxy can invert it. Omitted fields retain their settings."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"p\":2,\"d\":0.5,\"min\":4,\"max\":12,\"invert\":false,\"mode\":\"AVERAGE\"}"
        }
      ]
    },
    {
      "name": "Linear Velocity Coupler",
      "group": "Flight Control",
      "description": "Set P/D gains and positive/negative linear speed limits for the body X/Y/Z axes. The six-value shorthand takes paired values per axis: X-P, X-D, Y-P, Y-D, Z-P, Z-D. x/y/z set the positive and negative speed limits for each axis. Negative gains and limits are treated as absolute values.",
      "example": "1,0.1,2,0.2,3,0.3",
      "fields": "enabled, px, py, pz, dx, dy, dz, xp, xn, yp, yn, zp, zn",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "px/py/pz: proportional gains for the body X/Y/Z axes; dx/dy/dz: derivative/damping gains for the corresponding axes.",
            "xp/xn: positive/negative X-axis linear-speed limit magnitudes; yp/yn: positive/negative Y-axis magnitudes; zp/zn: positive/negative Z-axis magnitudes. These are native body-axis settings, not world-coordinate positions.",
            "enabled: default coupling state. Gains and limit magnitudes are treated as absolute values; omitted fields retain their settings.",
            "A six-value shorthand uses X-P,X-D,Y-P,Y-D,Z-P,Z-D order, for example 1,0.1,2,0.2,3,0.3. Named x/y/z groups set the two directional limits for an axis."
          ]
        },
        {
          "heading": "Example",
          "code": "1,0.1,2,0.2,3,0.3"
        }
      ]
    },
    {
      "name": "Angular Velocity Coupler",
      "group": "Flight Control",
      "description": "Set P/D gains and positive/negative angular speed limits for the body X/Y/Z axes. The six-value shorthand takes paired values per axis: X-P, X-D, Y-P, Y-D, Z-P, Z-D. x/y/z set the positive and negative speed limits for each axis. Negative gains and limits are treated as absolute values.",
      "example": "1,0.1,2,0.2,3,0.3",
      "fields": "enabled, px, py, pz, dx, dy, dz, xp, xn, yp, yn, zp, zn",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "px/py/pz: proportional gains for the body X/Y/Z axes; dx/dy/dz: derivative/damping gains for the corresponding axes.",
            "xp/xn: positive/negative X-axis angular-speed limit magnitudes; yp/yn: positive/negative Y-axis magnitudes; zp/zn: positive/negative Z-axis magnitudes. These are native body-axis settings, not world-coordinate positions.",
            "enabled: default coupling state. Gains and limit magnitudes are treated as absolute values; omitted fields retain their settings.",
            "A six-value shorthand uses X-P,X-D,Y-P,Y-D,Z-P,Z-D order, for example 1,0.1,2,0.2,3,0.3. Named x/y/z groups set the two directional limits for an axis."
          ]
        },
        {
          "heading": "Example",
          "code": "1,0.1,2,0.2,3,0.3"
        }
      ]
    },
    {
      "name": "Flight Control Terminal",
      "group": "Flight Control",
      "description": "Change the Flight Control Terminal sensitivity, direction, three-axis P/D, acceleration and angular speed limits, plus independent P/D and angular speed for redstone control. pitch_pd, yaw_pd and roll_pd group each axis P/D; redstone_pitch_pd and related fields set redstone parameters, while rpd sets redstone P/D for all three axes at once. sensitivity: 0.01-1; max_aim_angle: 10-89 degrees; P/D and acceleration: 0-100; angular speed: 0-4 pi. Omitted fields retain their current values.",
      "example": "2,0.4",
      "fields": "enabled, forward, sensitivity, max_aim_angle, pitch_p, pitch_d, yaw_p, yaw_d, roll_p, roll_d, max_pitch_acceleration, max_yaw_acceleration, max_roll_acceleration, max_bank_angle, aggressive_turn_angle, crosshair_distance, max_pitch_velocity, max_yaw_velocity, max_roll_velocity, redstone_pitch_p, redstone_pitch_d, redstone_yaw_p, redstone_yaw_d, redstone_roll_p, redstone_roll_d, redstone_max_pitch_velocity, redstone_max_yaw_velocity, redstone_max_roll_velocity, camera_y_offset, target_y_offset, sync_max_angular_velocity",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "enabled: default controller-enabled state. forward: body-forward direction, north/east/south/west.",
            "sensitivity: mouse sensitivity, 0.01–1. max_aim_angle: maximum mouse aim angle in degrees, 10–89.",
            "pitch_p/pitch_d: pitch proportional/damping gains; yaw_p/yaw_d: yaw gains; roll_p/roll_d: roll gains. Each accepts 0–100.",
            "max_pitch_acceleration/max_yaw_acceleration/max_roll_acceleration: native angular-acceleration caps for pitch/yaw/roll, each 0–100.",
            "max_pitch_velocity/max_yaw_velocity/max_roll_velocity: pitch/yaw/roll native angular-speed caps, each 0–4π (approximately 12.5664).",
            "max_bank_angle: maximum bank angle in degrees, 0–89. aggressive_turn_angle: angle at which full banking is reached, 1–180 degrees.",
            "crosshair_distance: nose-crosshair distance, 0–1024.",
            "redstone_pitch_p/redstone_pitch_d: redstone-control pitch gains; redstone_yaw_p/redstone_yaw_d: redstone-control yaw gains; redstone_roll_p/redstone_roll_d: redstone-control roll gains. Each accepts 0–100.",
            "redstone_max_pitch_velocity/redstone_max_yaw_velocity/redstone_max_roll_velocity: redstone-control native angular-speed caps for each axis, 0–4π.",
            "camera_y_offset: camera-center vertical offset, −16–16. target_y_offset: vertical reference offset for the mouse target circle, −0.4–0.4.",
            "sync_max_angular_velocity: true enables native synchronization of redstone maximum angular speeds; false keeps the independent settings.",
            "A bare pair such as 2,0.5 configures redstone_pitch_p/redstone_pitch_d. The other gains require their JSON keys or named axis groups; omitted fields retain their settings."
          ]
        },
        {
          "heading": "Example",
          "code": "2,0.4"
        }
      ]
    },
    {
      "name": "Attitude Projector",
      "group": "Flight Control",
      "description": "Change the attitude projection height, size, ground plane position and visible elements. height: 0.5-3; scale: 0.25-4; ground_height: -1 to 1. show_ground/show_axes control visibility of the ground plane and body axes.",
      "example": "{\"height\":1.5,\"scale\":1.2,\"ground_height\":0,\"show_ground\":true,\"show_axes\":true}",
      "fields": "height, scale, ground_height, show_ground, show_axes",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "height: projection height, 0.5–3.",
            "scale: projection size multiplier, 0.25–4; a bare number sets scale.",
            "ground_height: ground-plane height relative to the projection, −1–1.",
            "show_ground: whether the projected ground plane is visible.",
            "show_axes: whether body axes are visible. Omitted fields retain their settings."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"height\":1.5,\"scale\":1.2,\"ground_height\":0,\"show_ground\":true,\"show_axes\":true}"
        }
      ]
    },
    {
      "name": "HUD Projector",
      "group": "Flight Control",
      "description": "Change the HUD projection height, front/back position, size and forward direction. height: 0.5-6; depth: -1 to 2; scale: 0.5-3. forward accepts north/east/south/west.",
      "example": "{\"height\":2,\"depth\":0.25,\"scale\":1.2,\"forward\":\"north\"}",
      "fields": "height, depth, scale, forward",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "height: projection height, 0.5–6.",
            "depth: front/back projection offset, −1–2.",
            "scale: HUD size multiplier, 0.5–3; a bare number sets scale.",
            "forward: body-forward direction, north/east/south/west. Omitted fields retain their settings."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"height\":2,\"depth\":0.25,\"scale\":1.2,\"forward\":\"north\"}"
        }
      ]
    },
    {
      "name": "Auto Yaw Controller",
      "group": "Create: Radar",
      "description": "Set angle, limits and move/stop/reset actions using a bare number or complete/partial JSON. Original rotational-power requirements remain.",
      "example": "90",
      "mod": "Create: Radar 5.0.3+",
      "fields": "angle, min_angle, max_angle, action",
      "sections": [
        {
          "heading": "Angles, Limits and Actions",
          "paragraphs": [
            "A bare number sets angle; JSON may contain only changed fields. angle accepts -360 to 360 degrees; min_angle/max_angle accept -180 to 180 degrees relative to the original neutral orientation. The device validates actual limits. action accepts move, stop and reset.",
            "stop/reset affect the current action; original automatic fire control may take over again."
          ],
          "code": "{\"angle\":90,\"min_angle\":-180,\"max_angle\":180,\"action\":\"move\"}"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "angle: requested controller yaw in degrees, −360–360; a bare number sets it.",
            "min_angle/max_angle: permitted yaw offsets from the native neutral orientation, −180–180. The full −180 to 180 range permits a full revolution.",
            "action: move applies angle; stop stops the current controller movement; reset returns to its native initial orientation. Native automatic fire control may take over again."
          ]
        }
      ]
    },
    {
      "name": "Auto Pitch Controller",
      "group": "Create: Radar",
      "description": "Set angles/limits or give the original fire-control system a world position or detected target ID; radar control can be restored.",
      "example": "{\"target\":[128,64,-32],\"mode\":\"aim_only\"}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "angle, min_angle, max_angle, action, target, target_id, mode",
      "sections": [
        {
          "heading": "Angles, Limits and Actions",
          "paragraphs": [
            "A bare number sets angle; JSON may contain only changed fields. angle/min_angle/max_angle accept -90 to 90 degrees, subject to actual device limits. action accepts move, stop and reset.",
            "stop/reset affect the current action; original automatic fire control may take over again."
          ],
          "code": "{\"angle\":45,\"min_angle\":-90,\"max_angle\":90,\"action\":\"move\"}"
        },
        {
          "heading": "World Targets and Firing Mode",
          "paragraphs": [
            "target uses world coordinates. A coordinate without mode defaults to aim_only and never fires. mode=manual_target permits firing only when original aiming, motion limits, ammunition and safe-zone conditions allow it. target_id selects an already detected radar contact rather than inventing one.",
            "mode=auto or release returns control to the original radar without changing the Target Filter auto_target setting. Manual coordinates or angles do not guarantee automatic firing.",
            "Coordinate modes are maintained only while the source channel is active and both endpoints are loaded; inactivity or unloading restores radar control. Ordinary angle, limit, filter, safe-zone and identity settings are saved once and do not require a sustained signal."
          ],
          "code": "{\"target\":[128,64,-32],\"mode\":\"aim_only\"}"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "angle: controller pitch command in degrees, −90–90; a bare number sets it. min_angle/max_angle: user pitch limits in the same range, intersected with the assembled mount’s actual capabilities.",
            "action: move applies angle, stop stops current controller movement, and reset returns to zero. These actions do not calculate a ballistic solution by themselves.",
            "target: absolute world block coordinates [x,y,z]. The original Radar fire-control system calculates lead/drop and drives the native mount. This input currently uses integer block coordinates; decimals are truncated before the block center is targeted.",
            "mode: aim_only (the default for target) uses native compensated aiming without enabling automatic fire; manual_target permits native fire control to shoot when its conditions pass. auto/release returns control to the original radar network.",
            "target_id: the real ID of a contact already detected by the connected radar network. Read it from a Mailbox attached to the Network Controller or Radar Monitor: Target ID returns only the selected contact; Detailed Contacts contains each returned tracks[i].id.",
            "target_id changes the connected network’s selected target and retains its tracking/motion data. It is not an AFN frequency, item ID or a name you invent. Do not combine it with target or with the coordinate-only aim_only/manual_target modes.",
            "Coordinate control lasts while the source channel is active and both endpoints are loaded. Native ammunition, drive power, mount limits and safe zones remain effective. Angle readouts alone are not proof of a valid ballistic solution."
          ]
        },
        {
          "heading": "Example: target ID received from a Mailbox",
          "paragraphs": [
            "A source Mailbox attached to a Monitor/Network Controller selects only Target ID in Automatic Read. At this controller’s receiving Mailbox, use the output syntax below to turn the received ID into a selection command. See the Network Controller’s full target-ID example for obtaining candidate IDs."
          ],
          "code": "{\"target_id\":\"${$[0]}\"}"
        }
      ]
    },
    {
      "name": "T-Pitch Controller",
      "group": "Create: Radar",
      "description": "Set angles/limits or give the original fire-control system a world position or detected target ID; radar control can be restored.",
      "example": "{\"target\":[128,64,-32],\"mode\":\"aim_only\"}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "angle, min_angle, max_angle, action, target, target_id, mode",
      "sections": [
        {
          "heading": "Angles, Limits and Actions",
          "paragraphs": [
            "A bare number sets angle; JSON may contain only changed fields. angle/min_angle/max_angle accept -90 to 90 degrees, subject to actual device limits. action accepts move, stop and reset.",
            "stop/reset affect the current action; original automatic fire control may take over again."
          ],
          "code": "{\"angle\":45,\"min_angle\":-90,\"max_angle\":90,\"action\":\"move\"}"
        },
        {
          "heading": "World Targets and Firing Mode",
          "paragraphs": [
            "target uses world coordinates. A coordinate without mode defaults to aim_only and never fires. mode=manual_target permits firing only when original aiming, motion limits, ammunition and safe-zone conditions allow it. target_id selects an already detected radar contact rather than inventing one.",
            "mode=auto or release returns control to the original radar without changing the Target Filter auto_target setting. Manual coordinates or angles do not guarantee automatic firing.",
            "Coordinate modes are maintained only while the source channel is active and both endpoints are loaded; inactivity or unloading restores radar control. Ordinary angle, limit, filter, safe-zone and identity settings are saved once and do not require a sustained signal."
          ],
          "code": "{\"target\":[128,64,-32],\"mode\":\"aim_only\"}"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "angle: controller pitch command in degrees, −90–90; a bare number sets it. min_angle/max_angle: user pitch limits in the same range, intersected with the assembled mount’s actual capabilities.",
            "action: move applies angle, stop stops current controller movement, and reset returns to zero. These actions do not calculate a ballistic solution by themselves.",
            "target: absolute world block coordinates [x,y,z]. The original Radar fire-control system calculates lead/drop and drives the native mount. This input currently uses integer block coordinates; decimals are truncated before the block center is targeted.",
            "mode: aim_only (the default for target) uses native compensated aiming without enabling automatic fire; manual_target permits native fire control to shoot when its conditions pass. auto/release returns control to the original radar network.",
            "target_id: the real ID of a contact already detected by the connected radar network. Read it from a Mailbox attached to the Network Controller or Radar Monitor: Target ID returns only the selected contact; Detailed Contacts contains each returned tracks[i].id.",
            "target_id changes the connected network’s selected target and retains its tracking/motion data. It is not an AFN frequency, item ID or a name you invent. Do not combine it with target or with the coordinate-only aim_only/manual_target modes.",
            "Coordinate control lasts while the source channel is active and both endpoints are loaded. Native ammunition, drive power, mount limits and safe zones remain effective. Angle readouts alone are not proof of a valid ballistic solution.",
            "The T-Pitch Controller can coordinate two weapon sides. Their actual aiming directions and firing readiness may differ; one axis readout does not represent both complete solutions."
          ]
        },
        {
          "heading": "Example: target ID received from a Mailbox",
          "paragraphs": [
            "A source Mailbox attached to a Monitor/Network Controller selects only Target ID in Automatic Read. At this controller’s receiving Mailbox, use the output syntax below to turn the received ID into a selection command. See the Network Controller’s full target-ID example for obtaining candidate IDs."
          ],
          "code": "{\"target_id\":\"${$[0]}\"}"
        }
      ]
    },
    {
      "name": "Network Controller",
      "group": "Create: Radar",
      "description": "Select a radar target, update real installed filters and set network safe zones. A monitor resolves its controller and network; original fire-control rules remain.",
      "example": "{\"clear_target\":true}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "target_id, clear_target, detect_*, ignore_names, identification_code, target_*, auto_target, line_of_sight, prefer_high_arc, safe_zones, clear_safe_zones",
      "sections": [
        {
          "heading": "Select or Clear a Target",
          "paragraphs": [
            "target_id uses an ID returned by Detailed Contacts; bare text is also accepted. An empty string or clear_target=true clears selection. Active automatic targeting may select again after about 20 ticks; disable auto_target to stop automatic selection persistently."
          ],
          "code": "{\"clear_target\":true}"
        },
        {
          "heading": "Update Installed Filters",
          "paragraphs": [
            "detect_player/detect_sable/detect_contraption/detect_mob/detect_projectile/detect_animal/detect_item update the Detection Filter; ignore_names and identification_code update the Identification Filter; target_player/target_contraption/target_mob/target_animal/target_projectile/auto_target/line_of_sight/prefer_high_arc update the Target Filter.",
            "The relevant filter must already be installed. Missing cards reject the write; no items are created. Partial JSON retains unmentioned settings."
          ],
          "code": "{\"detect_player\":true,\"detect_projectile\":true,\"auto_target\":false}"
        },
        {
          "heading": "Replace or Clear Safe Zones",
          "paragraphs": [
            "safe_zones replaces the zone list. from/to are inclusive world block coordinates; an empty list or clear_safe_zones=true clears all zones.",
            "When an entry has structure, it must contain a loaded Sable structure UUID, and from/to become storage-local coordinates; the zone then moves with that structure."
          ],
          "code": "{\"safe_zones\":[{\"from\":[0,60,0],\"to\":[16,80,16]}]}"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "target_id: opaque text identifying a real radar contact. Obtain it from Detailed Contacts → tracks[i].id, or from Target ID after a target has been selected in the monitor. The receiving network must already contain that contact.",
            "clear_target: true clears the current selection. target_id:\"\" also clears it. Automatic selection may resume after about 20 ticks if auto_target remains enabled.",
            "detect_player: players; detect_sable: Sable structures; detect_contraption: Create contraptions; detect_mob: hostile mobs; detect_projectile: projectiles; detect_animal: animals; detect_item: dropped items. Each true/false updates that category in the installed Detection Filter.",
            "ignore_names: ignored-name list in the installed Identification Filter; entries may be supplied as an array or delimited text. identification_code: identification-filter code, up to 10 characters.",
            "target_player: players; target_contraption: structures/contraptions under the native mod’s category rules; target_mob: hostile mobs; target_animal: animals; target_projectile: projectiles. Each true/false changes that category in the Target Filter.",
            "auto_target: whether the native Target Filter automatically chooses contacts. line_of_sight: whether its target-selection policy requires line of sight. prefer_high_arc: whether its ballistic selection prefers a high trajectory.",
            "safe_zones: replacement list of no-fire zones. Each entry uses from:[x,y,z] and to:[x,y,z] as inclusive opposite world-block corners. [] replaces the list with no zones.",
            "safe_zones[].structure: loaded Sable structure UUID. When supplied, from/to use that structure’s storage-local coordinates, so the zone moves with it. Omit structure for fixed world coordinates.",
            "clear_safe_zones: true clears every safe zone. Omitted fields retain their settings; filter settings require the corresponding real card to be installed."
          ]
        },
        {
          "heading": "What target_id means and where to get it",
          "paragraphs": [
            "target_id is a detected contact’s identity string, often a UUID. It identifies a reported target, not an AFN frequency, item registry ID, coordinate or a player name you type yourself.",
            "For the selected target: click a detected contact in the original Radar Monitor. Attach Mailbox A to that monitor or its Network Controller, enable Automatic Read and select only Target ID. The Mailbox value is the ID itself, with no JSON wrapper; if nothing is selected it is empty.",
            "For all candidates: select only Detailed Contacts instead. Read tracks[i].id in the resulting JSON. Coordinate Array and Map JSON do not contain IDs. The UUID in the examples is illustrative: replace it with an actual returned ID."
          ],
          "code": "{\"tracks\":[{\"id\":\"123e4567-e89b-12d3-a456-426614174000\",\"position\":[128,64,-32],\"velocity\":[0,0,0]}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "Example: relay a monitor selection to another network",
          "paragraphs": [
            "1. Build and connect each native radar network normally. The receiving network must already detect the same contact; copying an ID does not create a new contact or bypass filters/safe zones.",
            "2. On Mailbox A, attached to the source monitor, select only Target ID for Automatic Read and use frequency radar.lock. Select a contact in the monitor, check the ID in A’s value preview, then activate A.",
            "3. Attach Mailbox B to the receiving Network Controller or Radar Monitor. Give it the same receive frequency, enable Automatic Output, and leave its output syntax empty. The bare ID is accepted there and selects that contact for the receiving network’s native turrets.",
            "4. If B is attached to a Pitch or T-Pitch Controller, wrap the incoming ID with the template below; a bare number/text at those controllers is otherwise an angle command. Selection still affects the connected network. Use the network’s original firing settings; target_id does not accept aim_only/manual_target."
          ],
          "code": "{\"target_id\":\"${$[0]}\"}"
        },
        {
          "heading": "Example: choose a contact from Detailed Contacts",
          "paragraphs": [
            "On A, select only Detailed Contacts. The expression below outputs the first returned contact’s ID. To send a complete selection command instead, use the JSON template on the next line as an alternative output syntax.",
            "tracks[0] is the first entry ordered by ID, not a nearest-target or danger-priority selector. With no returned contacts the expression has no valid target ID. Select another index only after inspecting the actual list.",
            "If you select several readings, JSON has an outer object whose keys follow the runtime language labels. Use the actual preview’s keys; the direct $.tracks path shown here assumes Detailed Contacts is the only selection."
          ],
          "code": "${$.tracks[0].id}\n\n{\"target_id\":\"${$.tracks[0].id}\"}"
        }
      ]
    },
    {
      "name": "Radar Monitor",
      "group": "Create: Radar",
      "description": "Select a radar target, update real installed filters and set network safe zones. A monitor resolves its controller and network; original fire-control rules remain.",
      "example": "{\"clear_target\":true}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "target_id, clear_target, detect_*, ignore_names, identification_code, target_*, auto_target, line_of_sight, prefer_high_arc, safe_zones, clear_safe_zones",
      "sections": [
        {
          "heading": "Select or Clear a Target",
          "paragraphs": [
            "target_id uses an ID returned by Detailed Contacts; bare text is also accepted. An empty string or clear_target=true clears selection. Active automatic targeting may select again after about 20 ticks; disable auto_target to stop automatic selection persistently."
          ],
          "code": "{\"clear_target\":true}"
        },
        {
          "heading": "Update Installed Filters",
          "paragraphs": [
            "detect_player/detect_sable/detect_contraption/detect_mob/detect_projectile/detect_animal/detect_item update the Detection Filter; ignore_names and identification_code update the Identification Filter; target_player/target_contraption/target_mob/target_animal/target_projectile/auto_target/line_of_sight/prefer_high_arc update the Target Filter.",
            "The relevant filter must already be installed. Missing cards reject the write; no items are created. Partial JSON retains unmentioned settings."
          ],
          "code": "{\"detect_player\":true,\"detect_projectile\":true,\"auto_target\":false}"
        },
        {
          "heading": "Replace or Clear Safe Zones",
          "paragraphs": [
            "safe_zones replaces the zone list. from/to are inclusive world block coordinates; an empty list or clear_safe_zones=true clears all zones.",
            "When an entry has structure, it must contain a loaded Sable structure UUID, and from/to become storage-local coordinates; the zone then moves with that structure."
          ],
          "code": "{\"safe_zones\":[{\"from\":[0,60,0],\"to\":[16,80,16]}]}"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "target_id: opaque text identifying a real radar contact. Obtain it from Detailed Contacts → tracks[i].id, or from Target ID after a target has been selected in the monitor. The receiving network must already contain that contact.",
            "clear_target: true clears the current selection. target_id:\"\" also clears it. Automatic selection may resume after about 20 ticks if auto_target remains enabled.",
            "detect_player: players; detect_sable: Sable structures; detect_contraption: Create contraptions; detect_mob: hostile mobs; detect_projectile: projectiles; detect_animal: animals; detect_item: dropped items. Each true/false updates that category in the installed Detection Filter.",
            "ignore_names: ignored-name list in the installed Identification Filter; entries may be supplied as an array or delimited text. identification_code: identification-filter code, up to 10 characters.",
            "target_player: players; target_contraption: structures/contraptions under the native mod’s category rules; target_mob: hostile mobs; target_animal: animals; target_projectile: projectiles. Each true/false changes that category in the Target Filter.",
            "auto_target: whether the native Target Filter automatically chooses contacts. line_of_sight: whether its target-selection policy requires line of sight. prefer_high_arc: whether its ballistic selection prefers a high trajectory.",
            "safe_zones: replacement list of no-fire zones. Each entry uses from:[x,y,z] and to:[x,y,z] as inclusive opposite world-block corners. [] replaces the list with no zones.",
            "safe_zones[].structure: loaded Sable structure UUID. When supplied, from/to use that structure’s storage-local coordinates, so the zone moves with it. Omit structure for fixed world coordinates.",
            "clear_safe_zones: true clears every safe zone. Omitted fields retain their settings; filter settings require the corresponding real card to be installed."
          ]
        },
        {
          "heading": "What target_id means and where to get it",
          "paragraphs": [
            "target_id is a detected contact’s identity string, often a UUID. It identifies a reported target, not an AFN frequency, item registry ID, coordinate or a player name you type yourself.",
            "For the selected target: click a detected contact in the original Radar Monitor. Attach Mailbox A to that monitor or its Network Controller, enable Automatic Read and select only Target ID. The Mailbox value is the ID itself, with no JSON wrapper; if nothing is selected it is empty.",
            "For all candidates: select only Detailed Contacts instead. Read tracks[i].id in the resulting JSON. Coordinate Array and Map JSON do not contain IDs. The UUID in the examples is illustrative: replace it with an actual returned ID."
          ],
          "code": "{\"tracks\":[{\"id\":\"123e4567-e89b-12d3-a456-426614174000\",\"position\":[128,64,-32],\"velocity\":[0,0,0]}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "Example: relay a monitor selection to another network",
          "paragraphs": [
            "1. Build and connect each native radar network normally. The receiving network must already detect the same contact; copying an ID does not create a new contact or bypass filters/safe zones.",
            "2. On Mailbox A, attached to the source monitor, select only Target ID for Automatic Read and use frequency radar.lock. Select a contact in the monitor, check the ID in A’s value preview, then activate A.",
            "3. Attach Mailbox B to the receiving Network Controller or Radar Monitor. Give it the same receive frequency, enable Automatic Output, and leave its output syntax empty. The bare ID is accepted there and selects that contact for the receiving network’s native turrets.",
            "4. If B is attached to a Pitch or T-Pitch Controller, wrap the incoming ID with the template below; a bare number/text at those controllers is otherwise an angle command. Selection still affects the connected network. Use the network’s original firing settings; target_id does not accept aim_only/manual_target."
          ],
          "code": "{\"target_id\":\"${$[0]}\"}"
        },
        {
          "heading": "Example: choose a contact from Detailed Contacts",
          "paragraphs": [
            "On A, select only Detailed Contacts. The expression below outputs the first returned contact’s ID. To send a complete selection command instead, use the JSON template on the next line as an alternative output syntax.",
            "tracks[0] is the first entry ordered by ID, not a nearest-target or danger-priority selector. With no returned contacts the expression has no valid target ID. Select another index only after inspecting the actual list.",
            "If you select several readings, JSON has an outer object whose keys follow the runtime language labels. Use the actual preview’s keys; the direct $.tracks path shown here assumes Detailed Contacts is the only selection."
          ],
          "code": "${$.tracks[0].id}\n\n{\"target_id\":\"${$.tracks[0].id}\"}"
        }
      ]
    },
    {
      "name": "Sky Radar",
      "group": "Create: Radar",
      "description": "A bare number or yaw sets manual yaw. resume_rotation=true resumes shaft-driven rotation; do not request both actions in one message.",
      "example": "{\"yaw\":90}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "yaw, resume_rotation",
      "sections": [
        {
          "heading": "Resume Original Rotation",
          "paragraphs": [
            "This does not create power or change the rotational network."
          ],
          "code": "{\"resume_rotation\":true}"
        },
        {
          "heading": "Field reference",
          "paragraphs": [
            "yaw: manual sweep yaw in degrees, −360–360; a bare number sets it.",
            "resume_rotation: true releases manual yaw and resumes shaft-driven rotation. Do not supply yaw and resume_rotation=true together."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"yaw\":90}"
        }
      ]
    },
    {
      "name": "Directional Jammer",
      "group": "Create: Radar",
      "description": "Set target yaw, pitch and enabled state. Actual discharge still requires rotation, redstone, a completed charge and a selected emitter.",
      "example": "{\"yaw\":90,\"pitch\":0,\"enabled\":true}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "yaw, pitch, enabled",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "yaw: target horizontal angle in degrees, −360–360.",
            "pitch: target vertical angle in degrees, −90–90.",
            "enabled: whether AFN allows the jammer to operate. Rotation, redstone, charge and selected-source requirements remain native; omitted fields retain their settings."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"yaw\":90,\"pitch\":0,\"enabled\":true}"
        }
      ]
    },
    {
      "name": "Identification Transponder",
      "group": "Create: Radar",
      "description": "Bare text changes the containing Sable structure name; JSON accepts name and code. Names allow up to 20 characters and codes up to 10. The structure must be loaded. name changes only that structure; code is shared with loaded connected structures while preserving their individual names.",
      "example": "{\"name\":\"airship\",\"code\":\"fleet_1\"}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "name, code",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "name: name of the loaded Sable structure containing the transponder, up to 20 characters; bare text sets it.",
            "code: identification code, up to 10 characters. The code is shared with loaded connected structures while their own names are preserved."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"name\":\"airship\",\"code\":\"fleet_1\"}"
        }
      ]
    },
    {
      "name": "Fire Controller",
      "group": "Create: Radar",
      "description": "Bare true/false or powered sets firing state. true is maintained only while the source channel stays active; inactivity or target unloading releases it. false does not permanently prevent original automatic fire control from firing again. Prefer an independently controlled Fire Controller, or manual_target on a Pitch Controller for aimed firing.",
      "example": "{\"powered\":true}",
      "fields": "powered",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "Field reference",
          "paragraphs": [
            "powered: true maintains the AFN firing request while its source channel stays active; false clears it. Inactivity/unloading releases AFN control. This is not a permanent veto on the original automatic fire-control system."
          ]
        },
        {
          "heading": "Example",
          "code": "{\"powered\":true}"
        }
      ]
    }
  ]
};

window.AFN_SYNTAX_CATALOG = {
  "functions": [
    {
      "name": "default",
      "category": "Missing Values and Structure",
      "signature": "default(x, fallback)",
      "description": "Return fallback when x has no source, its path is missing or its value is null. fallback is a JSON literal. Parse and type errors are still reported.",
      "example": "${default($.items[9], 0)}",
      "input": "{\"items\":[10,20]}",
      "output": "0",
      "outputType": "Number",
      "parameters": [
        {
          "name": "x",
          "description": "Source value to check, supplied by a path or nested function."
        },
        {
          "name": "fallback",
          "description": "JSON literal returned when the source is absent, the path is missing, or the value is null."
        }
      ]
    },
    {
      "name": "exists",
      "category": "Missing Values and Structure",
      "signature": "exists(x)",
      "description": "Return true when the source or path has a value; null counts as a value. Return false when there is no source or the path is missing.",
      "example": "${exists($.target)}",
      "input": "{\"target\":null}",
      "output": "true",
      "outputType": "Boolean",
      "parameters": [
        {
          "name": "x",
          "description": "Source or path to test; null still counts as present."
        }
      ]
    },
    {
      "name": "type",
      "category": "Missing Values and Structure",
      "signature": "type(x)",
      "description": "Return the value type: null, boolean, number, string, array or object. Return absent when there is no source, or missing when the path does not exist.",
      "example": "${type($.target)}",
      "input": "{\"target\":[1,2]}",
      "output": "array",
      "outputType": "Text",
      "parameters": [
        {
          "name": "x",
          "description": "Source value whose type is inspected."
        }
      ]
    },
    {
      "name": "size",
      "category": "Missing Values and Structure",
      "signature": "size(x)",
      "description": "Return the character count of text, the array length or the number of object members.",
      "example": "${size($.items)}",
      "input": "{\"items\":[10,20,30]}",
      "output": "3",
      "outputType": "Number",
      "parameters": [
        {
          "name": "x",
          "description": "Text, array or object; counts characters, elements or members respectively."
        }
      ]
    },
    {
      "name": "number",
      "category": "Type Conversion",
      "signature": "number(x)",
      "description": "Preserve numbers; extract the first number from text, ignoring commas within it. Supports signs, decimals and scientific notation. For example, 1,234,211 su becomes 1234211. Text with no number produces an error.",
      "example": "${number($[0])}",
      "input": "1,234,211 su",
      "output": "1234211",
      "outputType": "Number",
      "parameters": [
        {
          "name": "x",
          "description": "A number or text containing a number; extracts the first numeric fragment from text."
        }
      ]
    },
    {
      "name": "unit_number",
      "category": "Type Conversion",
      "signature": "unit_number(x)",
      "description": "Extract the first number and apply a multiplier: k/K = thousand, m/M = million, g/G = billion, t/T = trillion. Subsequent units are ignored. Lowercase m also means million, rather than milli.",
      "example": "${unit_number($[0])}",
      "input": "8.12 kV",
      "output": "8120",
      "outputType": "Number",
      "parameters": [
        {
          "name": "x",
          "description": "Text containing a value and magnitude, such as 8.12 kV; k/M/G/T determine the multiplier."
        }
      ]
    },
    {
      "name": "game_time",
      "category": "Type Conversion",
      "signature": "game_time(x)",
      "description": "Convert H:MM am/pm or HH:MM time text to ticks within the game day. 6:00 am is 0; 0:00 pm is 6000. Input must be time text.",
      "example": "${game_time($.clock)}",
      "input": "{\"clock\":\"0:00 pm\"}",
      "output": "6000",
      "outputType": "Number",
      "parameters": [
        {
          "name": "x",
          "description": "Clock text such as 6:00 am; returns game ticks within the day."
        }
      ]
    },
    {
      "name": "text",
      "category": "Type Conversion",
      "signature": "text(x)",
      "description": "Convert a number or boolean to text, or preserve existing text. Does not accept null, objects or ordinary arrays.",
      "example": "${text($.count)}",
      "input": "{\"count\":12}",
      "output": "12",
      "outputType": "Text",
      "parameters": [
        {
          "name": "x",
          "description": "Number, boolean or existing text to convert to text."
        }
      ]
    },
    {
      "name": "boolean",
      "category": "Type Conversion",
      "signature": "boolean(x)",
      "description": "Preserve a boolean, or convert text exactly matching lowercase true / false to a boolean. Does not interpret 0, 1 or other text as booleans.",
      "example": "${boolean($.flag)}",
      "input": "{\"flag\":\"true\"}",
      "output": "true",
      "outputType": "Boolean",
      "parameters": [
        {
          "name": "x",
          "description": "A boolean or text matching lowercase true / false exactly."
        }
      ]
    },
    {
      "name": "json",
      "category": "Type Conversion",
      "signature": "json(x)",
      "description": "Encode an existing value as stable JSON text, with object keys in a stable order. Scalars are encoded as single-element arrays. Can only be the outermost function of an expression.",
      "example": "${json($.stock)}",
      "input": "{\"stock\":{\"minecraft:apple\":8,\"minecraft:iron_ingot\":32}}",
      "output": "{\"minecraft:apple\":8,\"minecraft:iron_ingot\":32}",
      "outputType": "JSON Text",
      "parameters": [
        {
          "name": "x",
          "description": "Existing value to serialize; this function is allowed only at the outermost level."
        }
      ]
    },
    {
      "name": "strength",
      "category": "Signal Strength",
      "signature": "strength($) / strength($.ChannelName)",
      "description": "Read the current activation strength, from 0 to 15, regardless of whether the channel contains data. Inactive channels return 0. Use $ for a Mailbox; for a Bridge, use the complete channel root without a member name or array index.",
      "example": "${strength($)}",
      "input": "No data; received strength is 7",
      "output": "7",
      "outputType": "Number",
      "parameters": [
        {
          "name": "$ / $.channel_name",
          "description": "The full channel root whose strength is read. Use $ in a mailbox or $.channel_name on a multichannel device, without member access or array subscripts."
        }
      ]
    },
    {
      "name": "sum",
      "category": "Array Processing",
      "signature": "sum(x)",
      "description": "Sum a nonempty array whose elements are all numbers.",
      "example": "${sum($.values)}",
      "input": "{\"values\":[1,2,6]}",
      "output": "9",
      "outputType": "Number",
      "parameters": [
        {
          "name": "x",
          "description": "Nonempty numeric array; returns the sum."
        }
      ]
    },
    {
      "name": "avg",
      "category": "Array Processing",
      "signature": "avg(x)",
      "description": "Average a nonempty array whose elements are all numbers.",
      "example": "${avg($.values)}",
      "input": "{\"values\":[1,2,6]}",
      "output": "3",
      "outputType": "Number",
      "parameters": [
        {
          "name": "x",
          "description": "Nonempty numeric array; returns the arithmetic mean."
        }
      ]
    },
    {
      "name": "min",
      "category": "Array Processing",
      "signature": "min(x)",
      "description": "Return the minimum value in a nonempty numeric array.",
      "example": "${min($.values)}",
      "input": "{\"values\":[1,2,6]}",
      "output": "1",
      "outputType": "Number",
      "parameters": [
        {
          "name": "x",
          "description": "Nonempty numeric array; returns its smallest element."
        }
      ]
    },
    {
      "name": "max",
      "category": "Array Processing",
      "signature": "max(x)",
      "description": "Return the maximum value in a nonempty numeric array.",
      "example": "${max($.values)}",
      "input": "{\"values\":[1,2,6]}",
      "output": "6",
      "outputType": "Number",
      "parameters": [
        {
          "name": "x",
          "description": "Nonempty numeric array; returns its largest element."
        }
      ]
    },
    {
      "name": "join",
      "category": "Array Processing",
      "signature": "join(x, separator)",
      "description": "Join an array using the separator text. Elements may be text, numbers, booleans or null, but not nested objects or arrays.",
      "example": "${join($.labels, \" / \")}",
      "input": "{\"labels\":[\"Copper Ingot\",2,false]}",
      "output": "Copper Ingot / 2 / false",
      "outputType": "Text",
      "parameters": [
        {
          "name": "x",
          "description": "Array to join; elements must be text, numbers, booleans or null."
        },
        {
          "name": "separator",
          "description": "Text literal inserted between elements, such as \" / \"; an empty string concatenates them directly."
        }
      ]
    },
    {
      "name": "round",
      "category": "Numeric Operations",
      "signature": "round(x, digits)",
      "description": "Round to digits decimal places. digits is a nonnegative integer literal. The default allowed range is 0-3 places, adjustable by the server.",
      "example": "${round(number($.reading), 1)}",
      "input": "{\"reading\":\"1.26 su\"}",
      "output": "1.3",
      "outputType": "Number",
      "parameters": [
        {
          "name": "x",
          "description": "Number to round."
        },
        {
          "name": "digits",
          "description": "Number of decimal places, a nonnegative integer literal; the default budget allows 0–3."
        }
      ]
    },
    {
      "name": "clamp",
      "category": "Numeric Operations",
      "signature": "clamp(x, min, max)",
      "description": "Limit a number to the range from min to max. Bounds are numeric literals; min must not exceed max.",
      "example": "${clamp($.value, 0, 15)}",
      "input": "{\"value\":23}",
      "output": "15",
      "outputType": "Number",
      "parameters": [
        {
          "name": "x",
          "description": "Number to constrain."
        },
        {
          "name": "min",
          "description": "Smallest allowed value, a numeric literal."
        },
        {
          "name": "max",
          "description": "Largest allowed value, a numeric literal; must be at least min."
        }
      ]
    },
    {
      "name": "add",
      "category": "Numeric Operations",
      "signature": "add(a, b, ...)",
      "description": "Add two or more numbers, with up to eight arguments by default. Arguments may be paths, nested functions or numeric constants; at least one must be a path or function.",
      "example": "${add($.Fuel1, $.Fuel2, $.Fuel3)}",
      "input": "{\"Fuel1\":2,\"Fuel2\":3,\"Fuel3\":5}",
      "output": "10",
      "outputType": "Number",
      "parameters": [
        {
          "name": "a, b, ...",
          "description": "Numbers to add: at least two, up to eight by default. Paths, nested functions and numeric literals are accepted; at least one argument must be a path or function."
        }
      ]
    },
    {
      "name": "sub",
      "category": "Numeric Operations",
      "signature": "sub(a, b)",
      "description": "Subtract b from a. The two arguments may read different channels or use nested functions; at least one must come from a path or function.",
      "example": "${sub($.Stock, $.Demand)}",
      "input": "{\"Stock\":12,\"Demand\":5}",
      "output": "7",
      "outputType": "Number",
      "parameters": [
        {
          "name": "a",
          "description": "Number from which b is subtracted, supplied dynamically or as a numeric literal."
        },
        {
          "name": "b",
          "description": "Number to subtract; at least one of a and b must be a path or function."
        }
      ]
    },
    {
      "name": "mul",
      "category": "Numeric Operations",
      "signature": "mul(a, b)",
      "description": "Multiply two numbers. At least one argument must come from a path or function.",
      "example": "${mul(number($[0]), 2)}",
      "input": "8 su",
      "output": "16",
      "outputType": "Number",
      "parameters": [
        {
          "name": "a, b",
          "description": "The two numbers to multiply; at least one must be a path or function."
        }
      ]
    },
    {
      "name": "div",
      "category": "Numeric Operations",
      "signature": "div(a, b)",
      "description": "Divide a by b. The divisor cannot be 0; at least one argument must come from a path or function. Calculations follow the server numeric precision limit.",
      "example": "${div($.Completed, $.Target)}",
      "input": "{\"Completed\":3,\"Target\":4}",
      "output": "0.75",
      "outputType": "Number",
      "parameters": [
        {
          "name": "a",
          "description": "Dividend."
        },
        {
          "name": "b",
          "description": "Divisor, which cannot be zero; at least one of a and b must be a path or function."
        }
      ]
    },
    {
      "name": "if",
      "category": "Conditional Branches",
      "signature": "if(test, yes, no)",
      "description": "Return yes when test is boolean true, or no when it is false or missing. Only the selected branch is evaluated. Arbitrary numbers or text cannot be used as conditions.",
      "example": "${if($.enabled, \"Running\", \"Stopped\")}",
      "input": "{\"enabled\":true}",
      "output": "Running",
      "outputType": "Text",
      "parameters": [
        {
          "name": "test",
          "description": "Boolean source; true selects yes, while false or a missing value selects no."
        },
        {
          "name": "yes",
          "description": "Result when test is true: a path, nested function or JSON literal."
        },
        {
          "name": "no",
          "description": "Result when test is false or missing; the unselected result branch is not evaluated."
        }
      ]
    },
    {
      "name": "switch",
      "category": "Conditional Branches",
      "signature": "switch(x, match, result, ...[, fallback])",
      "description": "Match by both value and type, returning the first matching result. Match values must be JSON scalar literals. An optional final argument supplies a fallback result. Only the selected result is evaluated; number 1 and text \"1\" are not equal.",
      "example": "${switch($.mode, \"auto\", \"Automatic\", \"manual\", \"Manual\", \"Unknown\")}",
      "input": "{\"mode\":\"manual\"}",
      "output": "Manual",
      "outputType": "Text",
      "parameters": [
        {
          "name": "x",
          "description": "Source value to match."
        },
        {
          "name": "match, result, ...",
          "description": "Ordered pairs of match literals and results. match is a JSON scalar; result may be a path, function or literal."
        },
        {
          "name": "fallback",
          "description": "Final unpaired default result; omitting it returns a missing value if no pair matches."
        }
      ]
    },
    {
      "name": "substr",
      "category": "Text Processing",
      "signature": "substr(x, start[, length])",
      "description": "Extract text by character. start is zero-based; negative values count from the end. Omitting length takes the remainder of the text.",
      "example": "${substr($[0], 0, 5)}",
      "input": "Power: 8.12kv",
      "output": "Power",
      "outputType": "Text",
      "parameters": [
        {
          "name": "x",
          "description": "Text to extract from."
        },
        {
          "name": "start",
          "description": "Starting character index, an integer literal; 0 starts at the beginning and negative values count from the end."
        },
        {
          "name": "length",
          "description": "Maximum character count, a nonnegative integer literal; omit it to read through the end."
        }
      ]
    },
    {
      "name": "contains",
      "category": "Text Processing",
      "signature": "contains(x, part)",
      "description": "Return true when the text contains part. Matching is literal and case-sensitive.",
      "example": "${contains($[0], \"Power\")}",
      "input": "Power: 8.12kv",
      "output": "true",
      "outputType": "Boolean",
      "parameters": [
        {
          "name": "x",
          "description": "Text to inspect."
        },
        {
          "name": "part",
          "description": "Case-sensitive text literal to find."
        }
      ]
    },
    {
      "name": "starts_with",
      "category": "Text Processing",
      "signature": "starts_with(x, part)",
      "description": "Return true when the text starts with part. Matching is literal and case-sensitive.",
      "example": "${starts_with($[0], \"Power\")}",
      "input": "Power: 8.12kv",
      "output": "true",
      "outputType": "Boolean",
      "parameters": [
        {
          "name": "x",
          "description": "Text to inspect."
        },
        {
          "name": "part",
          "description": "Case-sensitive text literal required at the beginning."
        }
      ]
    },
    {
      "name": "ends_with",
      "category": "Text Processing",
      "signature": "ends_with(x, part)",
      "description": "Return true when the text ends with part. Matching is literal and case-sensitive.",
      "example": "${ends_with($[0], \"su\")}",
      "input": "8120 su",
      "output": "true",
      "outputType": "Boolean",
      "parameters": [
        {
          "name": "x",
          "description": "Text to inspect."
        },
        {
          "name": "part",
          "description": "Case-sensitive text literal required at the end."
        }
      ]
    },
    {
      "name": "replace",
      "category": "Text Processing",
      "signature": "replace(x, from, to)",
      "description": "Replace every occurrence of from with to. Matching is literal, without regular expressions; from cannot be empty.",
      "example": "${replace($[0], \"Power\", \"Voltage\")}",
      "input": "Power: 8.12kv",
      "output": "Voltage: 8.12kv",
      "outputType": "Text",
      "parameters": [
        {
          "name": "x",
          "description": "Text to transform."
        },
        {
          "name": "from",
          "description": "Nonempty text literal to replace, matched as ordinary text."
        },
        {
          "name": "to",
          "description": "Replacement text literal; an empty string removes matches."
        }
      ]
    },
    {
      "name": "split",
      "category": "Text Processing",
      "signature": "split(x, separator)",
      "description": "Split text on a nonempty separator, returning a text array and preserving empty elements. The result can be joined with join.",
      "example": "${split($.line, \",\")}",
      "input": "{\"line\":\"a,b,,c\"}",
      "output": "[\"a\",\"b\",\"\",\"c\"]",
      "outputType": "JSON Text",
      "parameters": [
        {
          "name": "x",
          "description": "Text to split."
        },
        {
          "name": "separator",
          "description": "Nonempty separator text literal; empty entries from adjacent separators are retained."
        }
      ]
    },
    {
      "name": "trim",
      "category": "Text Processing",
      "signature": "trim(x)",
      "description": "Remove whitespace from both ends of text.",
      "example": "${trim($.label)}",
      "input": "{\"label\":\"  Copper Ingot  \"}",
      "output": "Copper Ingot",
      "outputType": "Text",
      "parameters": [
        {
          "name": "x",
          "description": "Text whose leading and trailing whitespace is removed; interior whitespace is retained."
        }
      ]
    },
    {
      "name": "lower",
      "category": "Text Processing",
      "signature": "lower(x)",
      "description": "Convert text to lowercase.",
      "example": "${lower($[0])}",
      "input": "MiXeD",
      "output": "mixed",
      "outputType": "Text",
      "parameters": [
        {
          "name": "x",
          "description": "Text to convert to lowercase."
        }
      ]
    },
    {
      "name": "upper",
      "category": "Text Processing",
      "signature": "upper(x)",
      "description": "Convert text to uppercase.",
      "example": "${upper($[0])}",
      "input": "MiXeD",
      "output": "MIXED",
      "outputType": "Text",
      "parameters": [
        {
          "name": "x",
          "description": "Text to convert to uppercase."
        }
      ]
    }
  ],
  "examples": [
    {
      "title": "Extract a stress reading with units",
      "description": "Treat the entire reading as one text value; thousands separators do not truncate the number at the first comma.",
      "context": "single",
      "source": "1,234,211 su",
      "template": "${number($[0])}",
      "result": "1234211"
    },
    {
      "title": "Read members and combine text",
      "description": "Read JSON members with dots. Array indices start at 0. Combining expressions with literal text produces text.",
      "context": "single",
      "source": "{\"user\":{\"name\":\"Alex\"},\"items\":[10,20]}",
      "template": "${user.name}: ${items[1]} items",
      "result": "Alex: 20 items"
    },
    {
      "title": "Provide a fallback for a missing path",
      "description": "The array has only two elements. When reading the tenth, default returns 0.",
      "context": "single",
      "source": "{\"items\":[10,20]}",
      "template": "${default($.items[9], 0)}",
      "result": "0"
    },
    {
      "title": "Average an array",
      "description": "avg processes a numeric array, then round controls the number of decimal places.",
      "context": "single",
      "source": "{\"values\":[1,2,6]}",
      "template": "${round(avg($.values), 2)}",
      "result": "3"
    },
    {
      "title": "Choose display text with a boolean",
      "description": "if evaluates only the selected result. Here enabled is a JSON boolean.",
      "context": "single",
      "source": "{\"enabled\":true}",
      "template": "${if($.enabled, \"Running\", \"Stopped\")}",
      "result": "Running"
    },
    {
      "title": "Switch output by mode",
      "description": "switch checks each match in order. The final argument is the fallback text when none matches.",
      "context": "single",
      "source": "{\"mode\":\"manual\"}",
      "template": "${switch($.mode, \"auto\", \"Automatic\", \"manual\", \"Manual\", \"Unknown\")}",
      "result": "Manual"
    },
    {
      "title": "Join labels from an array",
      "description": "join can combine text, numbers and booleans.",
      "context": "single",
      "source": "{\"labels\":[\"Copper Ingot\",2,false]}",
      "template": "${join($.labels, \" / \")}",
      "result": "Copper Ingot / 2 / false"
    },
    {
      "title": "Convert clock text to game ticks",
      "description": "A game day begins at 6:00 am with tick 0; noon corresponds to 6000.",
      "context": "single",
      "source": "{\"clock\":\"0:00 pm\"}",
      "template": "${game_time($.clock)}",
      "result": "6000"
    },
    {
      "title": "Convert signal strength to data",
      "description": "This example has received strength 7 and does not rely on the message body.",
      "context": "single",
      "source": "Strength can be read without data",
      "strength": 7,
      "template": "${strength($)}",
      "result": "7"
    },
    {
      "title": "Export a stock object as JSON",
      "description": "json encodes existing data; it does not parse a string.",
      "context": "single",
      "source": "{\"stock\":{\"minecraft:apple\":8,\"minecraft:iron_ingot\":32}}",
      "template": "${json($.stock)}",
      "result": "{\"minecraft:apple\":8,\"minecraft:iron_ingot\":32}"
    },
    {
      "title": "Use a comma-separated component list",
      "description": "A simple list such as 1,2,6 is read as a numeric component array and can be aggregated directly.",
      "context": "single",
      "source": "1,2,6",
      "template": "${sum($)}",
      "result": "9"
    },
    {
      "title": "Add three Bridge channels",
      "description": "Fuel1, Fuel2 and Fuel3 are native numeric channels with one component each, so [0] can be omitted.",
      "context": "bridge",
      "source": "Fuel1 = 2; Fuel2 = 3; Fuel3 = 5 (all numeric channels)",
      "channels": {
        "Fuel1": 2,
        "Fuel2": 3,
        "Fuel3": 5
      },
      "template": "${add($.Fuel1, $.Fuel2, $.Fuel3)}",
      "result": "10"
    },
    {
      "title": "Activate only when a condition is met",
      "description": "Enter this in \"Activate when condition is met\". Comparisons and logical combinations go outside expression blocks.",
      "context": "condition",
      "source": "{\"temperature\":31,\"ready\":true}",
      "template": "${$.temperature} ≥ 30 & ${$.ready} = true",
      "result": "true"
    },
    {
      "title": "Convert a reading with a unit multiplier",
      "description": "unit_number reads the number and applies the k, m, g or t unit multiplier.",
      "context": "single",
      "source": "8.12 kV",
      "template": "${unit_number($[0])}",
      "result": "8120"
    },
    {
      "title": "Filter and replace text",
      "description": "Text functions can be combined directly; the result is text that can be output.",
      "context": "single",
      "source": "Power: 8.12kv",
      "template": "${replace($[0], \"Power\", \"Voltage\")}",
      "result": "Voltage: 8.12kv"
    },
    {
      "title": "Split and rejoin text",
      "description": "split returns an array; join combines it back into text using the chosen separator.",
      "context": "single",
      "source": "{\"line\":\"a,b,c\"}",
      "template": "${join(split($.line, \",\"), \" / \")}",
      "result": "a / b / c"
    }
  ],
  "rules": [
    {
      "title": "Mailboxes and Bridges use different roots",
      "description": "Mailboxes, Stock Mailboxes and Hidden Terminals use $ for their own input. Bridges use ${ChannelName} directly, or $.ChannelName inside functions. A bare $ is not supported by Bridges."
    },
    {
      "title": "Read raw values and reference other channels",
      "description": "A Bridge reference to its own name reads the raw value; references to other channels read their effective output. Cyclic dependencies across channels are not allowed. Channel names are GUI names rather than wireless frequencies."
    },
    {
      "title": "Paths are static",
      "description": "Use .name for object members and [0], [1] for arrays. Use double-quoted brackets for special member names or channel names containing spaces, such as $[\"minecraft:apple\"] or $[\"Door Status\"]. Dynamic indices are not supported."
    },
    {
      "title": "Handle text and numbers separately",
      "description": "Ordinary text is read as a single-element array containing the entire text. Use $[0] to access it, then number() to extract a number. A native numeric value with one component can be used directly in calculations. JSON arrays require an explicit [0] even when they contain only one element."
    },
    {
      "title": "When templates preserve value types",
      "description": "A single ${...} expression block preserves its value type. Adding surrounding text or using multiple expression blocks produces text. Plain text is output unchanged; whitespace means unconfigured."
    },
    {
      "title": "Function arguments have defined roles",
      "description": "The first argument of an ordinary function is a static path beginning with $ or a nested function; configuration arguments use JSON literals. add/sub/mul/div support multiple dynamic numeric sources. Result branches of if/switch can also read paths or functions. Function names are case-insensitive."
    },
    {
      "title": "Condition expressions",
      "description": "Conditions support comparisons, parentheses and logical operations. They must reference channel data and produce a boolean. Precedence is parentheses, comparison, AND, then OR. Ordinary output syntax does not support infix arithmetic, pipes or scripts."
    },
    {
      "title": "Convert signal strength separately",
      "description": "Output strength accepts a number or output syntax that produces a number. Leaving it blank follows the original input strength; local automatic activation is usually 15. Decimals are rounded down and clamped to 0-15. A value of 0, a missing value or an error sends nothing. Convert numeric text with number() first."
    },
    {
      "title": "Avoid strength feedback",
      "description": "A Mailbox activation condition cannot read its own strength($), but output strength can convert the input strength. Bridge conditions and output strength cannot depend on their own output strength; they can read the strength of other channels. The current Hidden Terminal output strength configuration also rejects strength($)."
    },
    {
      "title": "Missing values differ from errors",
      "description": "Missing values usually produce no output. default handles only an absent source, a missing path or null. It cannot suppress invalid JSON, type errors, division by zero or exceeded budgets."
    }
  ],
  "operators": [
    {
      "symbol": "= / ==",
      "description": "Equal; numbers and text are compared according to their types."
    },
    {
      "symbol": "!=",
      "description": "Not equal."
    },
    {
      "symbol": "< / > / <= / >= / ≤ / ≥",
      "description": "Ordering comparisons; numbers only."
    },
    {
      "symbol": "& / &&",
      "description": "AND: true when both sides are true."
    },
    {
      "symbol": "||",
      "description": "OR: true when at least one side is true."
    },
    {
      "symbol": "( ... )",
      "description": "Explicitly group conditions to control evaluation order."
    }
  ],
  "limits": {
    "description": "These are default budgets, adjustable by the server. Unconfigured rules are not evaluated. Configured rules are compiled and cached, then updated when data or dependencies change.",
    "sourceCodePoints": 1024,
    "sourceUtf8Bytes": 4096,
    "functionArguments": 8,
    "functionDepth": 8,
    "pathDepth": 8,
    "references": 16,
    "arrayLength": 128,
    "objectMembers": 64,
    "roundDigits": 3,
    "significantDigits": 34,
    "outputCodePoints": 1024,
    "outputUtf8Bytes": 4096
  }
};

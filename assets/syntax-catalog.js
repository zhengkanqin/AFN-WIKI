window.AFN_SYNTAX_CATALOG = {
  "functions": [
    {
      "name": "default",
      "category": "缺值与结构",
      "signature": "default(x, fallback)",
      "description": "x 没有来源、路径不存在或为 null 时返回 fallback；fallback 是 JSON 字面量。解析错误与类型错误仍会报告。",
      "example": "${default($.items[9], 0)}",
      "input": "{\"items\":[10,20]}",
      "output": "0",
      "outputType": "数字",
      "parameters": [
        {
          "name": "x",
          "description": "要检查的来源值，可用路径或嵌套函数。"
        },
        {
          "name": "fallback",
          "description": "来源缺失、路径不存在或为 null 时使用的 JSON 字面量。"
        }
      ]
    },
    {
      "name": "exists",
      "category": "缺值与结构",
      "signature": "exists(x)",
      "description": "来源或路径有值时返回 true，null 也算有值；没有来源或路径不存在时返回 false。",
      "example": "${exists($.target)}",
      "input": "{\"target\":null}",
      "output": "true",
      "outputType": "布尔",
      "parameters": [
        {
          "name": "x",
          "description": "要检查是否存在的来源或路径；null 仍算存在。"
        }
      ]
    },
    {
      "name": "type",
      "category": "缺值与结构",
      "signature": "type(x)",
      "description": "查看值类型：null、boolean、number、string、array、object；无来源返回 absent，路径不存在返回 missing。",
      "example": "${type($.target)}",
      "input": "{\"target\":[1,2]}",
      "output": "array",
      "outputType": "文本",
      "parameters": [
        {
          "name": "x",
          "description": "要查看类型的来源值。"
        }
      ]
    },
    {
      "name": "size",
      "category": "缺值与结构",
      "signature": "size(x)",
      "description": "返回文本的字符数、数组长度或对象成员数。",
      "example": "${size($.items)}",
      "input": "{\"items\":[10,20,30]}",
      "output": "3",
      "outputType": "数字",
      "parameters": [
        {
          "name": "x",
          "description": "文本、数组或对象；分别计算字符数、元素数、成员数。"
        }
      ]
    },
    {
      "name": "number",
      "category": "类型转换",
      "signature": "number(x)",
      "description": "保留数字；从文本中提取第一个数字，忽略数值内部的逗号，支持符号、小数与科学记数法。例如 1,234,211 su 得到 1234211。文本中没有数字时报告错误。",
      "example": "${number($[0])}",
      "input": "1,234,211 su",
      "output": "1234211",
      "outputType": "数字",
      "parameters": [
        {
          "name": "x",
          "description": "数字或含数字的文本；文本提取第一个数字片段。"
        }
      ]
    },
    {
      "name": "unit_number",
      "category": "类型转换",
      "signature": "unit_number(x)",
      "description": "提取第一个数字并换算倍率：k/K 千、m/M 百万、g/G 十亿、t/T 万亿；忽略后续单位。小写 m 也按百万处理，不表示毫。",
      "example": "${unit_number($[0])}",
      "input": "8.12 kV",
      "output": "8120",
      "outputType": "数字",
      "parameters": [
        {
          "name": "x",
          "description": "含数值与倍率的文本，如 8.12 kV；k/M/G/T 参与倍率换算。"
        }
      ]
    },
    {
      "name": "game_time",
      "category": "类型转换",
      "signature": "game_time(x)",
      "description": "把 H:MM am/pm 或 HH:MM 时间文本转成当天游戏刻。6:00 am 为 0，0:00 pm 为 6000；输入须为时间文本。",
      "example": "${game_time($.clock)}",
      "input": "{\"clock\":\"0:00 pm\"}",
      "output": "6000",
      "outputType": "数字",
      "parameters": [
        {
          "name": "x",
          "description": "要转换的时钟文本，例如 6:00 am；返回一天内的游戏刻。"
        }
      ]
    },
    {
      "name": "text",
      "category": "类型转换",
      "signature": "text(x)",
      "description": "把数字或布尔值转成文本，也可保留文本；不接受 null、对象与普通数组。",
      "example": "${text($.count)}",
      "input": "{\"count\":12}",
      "output": "12",
      "outputType": "文本",
      "parameters": [
        {
          "name": "x",
          "description": "要转成文本的数字、布尔或原有文本。"
        }
      ]
    },
    {
      "name": "boolean",
      "category": "类型转换",
      "signature": "boolean(x)",
      "description": "保留布尔值，或把完全匹配小写 true / false 的文本转成布尔值；不把 0、1 或其他文字猜成布尔。",
      "example": "${boolean($.flag)}",
      "input": "{\"flag\":\"true\"}",
      "output": "true",
      "outputType": "布尔",
      "parameters": [
        {
          "name": "x",
          "description": "布尔值，或完全匹配小写 true / false 的文本。"
        }
      ]
    },
    {
      "name": "json",
      "category": "类型转换",
      "signature": "json(x)",
      "description": "把已有值编码为稳定的 JSON 文本，对象键按稳定顺序排列；标量编码为单项数组。只能用作表达式最外层函数。",
      "example": "${json($.stock)}",
      "input": "{\"stock\":{\"minecraft:apple\":8,\"minecraft:iron_ingot\":32}}",
      "output": "{\"minecraft:apple\":8,\"minecraft:iron_ingot\":32}",
      "outputType": "JSON 文本",
      "parameters": [
        {
          "name": "x",
          "description": "要序列化的已有值；只能作为最外层函数。"
        }
      ]
    },
    {
      "name": "strength",
      "category": "信号强度",
      "signature": "strength($) / strength($.信道名)",
      "description": "读取当前激活强度 0–15，与有无信道内容无关，未激活为 0。信箱用 $，桥接器用完整信道根，不加成员名或数组下标。",
      "example": "${strength($)}",
      "input": "无数据；接收强度为 7",
      "output": "7",
      "outputType": "数字",
      "parameters": [
        {
          "name": "$ / $.信道名",
          "description": "要读取强度的完整信道根。信箱用 $，多信道设备用 $.信道名；不能在后面接成员或数组下标。"
        }
      ]
    },
    {
      "name": "sum",
      "category": "数组处理",
      "signature": "sum(x)",
      "description": "对非空且所有元素都是数字的数组求和。",
      "example": "${sum($.values)}",
      "input": "{\"values\":[1,2,6]}",
      "output": "9",
      "outputType": "数字",
      "parameters": [
        {
          "name": "x",
          "description": "非空数字数组；返回元素总和。"
        }
      ]
    },
    {
      "name": "avg",
      "category": "数组处理",
      "signature": "avg(x)",
      "description": "对非空且所有元素都是数字的数组求平均值。",
      "example": "${avg($.values)}",
      "input": "{\"values\":[1,2,6]}",
      "output": "3",
      "outputType": "数字",
      "parameters": [
        {
          "name": "x",
          "description": "非空数字数组；返回算术平均值。"
        }
      ]
    },
    {
      "name": "min",
      "category": "数组处理",
      "signature": "min(x)",
      "description": "取非空数字数组中的最小值。",
      "example": "${min($.values)}",
      "input": "{\"values\":[1,2,6]}",
      "output": "1",
      "outputType": "数字",
      "parameters": [
        {
          "name": "x",
          "description": "非空数字数组；返回最小元素。"
        }
      ]
    },
    {
      "name": "max",
      "category": "数组处理",
      "signature": "max(x)",
      "description": "取非空数字数组中的最大值。",
      "example": "${max($.values)}",
      "input": "{\"values\":[1,2,6]}",
      "output": "6",
      "outputType": "数字",
      "parameters": [
        {
          "name": "x",
          "description": "非空数字数组；返回最大元素。"
        }
      ]
    },
    {
      "name": "join",
      "category": "数组处理",
      "signature": "join(x, separator)",
      "description": "使用 separator 文本拼接数组。元素可为文本、数字、布尔或 null，不可为嵌套对象和数组。",
      "example": "${join($.labels, \" / \")}",
      "input": "{\"labels\":[\"铜锭\",2,false]}",
      "output": "铜锭 / 2 / false",
      "outputType": "文本",
      "parameters": [
        {
          "name": "x",
          "description": "要拼接的数组，元素限文本、数字、布尔或 null。"
        },
        {
          "name": "separator",
          "description": "元素之间插入的文本字面量，例如 \" / \"；空字符串表示直接相连。"
        }
      ]
    },
    {
      "name": "round",
      "category": "数字运算",
      "signature": "round(x, digits)",
      "description": "四舍五入到 digits 位小数。digits 是非负整数字面量，默认允许 0–3 位，服务器可调整。",
      "example": "${round(number($.reading), 1)}",
      "input": "{\"reading\":\"1.26 su\"}",
      "output": "1.3",
      "outputType": "数字",
      "parameters": [
        {
          "name": "x",
          "description": "要舍入的数字。"
        },
        {
          "name": "digits",
          "description": "保留的小数位数，非负整数字面量；默认预算允许 0～3。"
        }
      ]
    },
    {
      "name": "clamp",
      "category": "数字运算",
      "signature": "clamp(x, min, max)",
      "description": "把数字限制在 min 与 max 之间；边界是数字字面量，min 不得大于 max。",
      "example": "${clamp($.value, 0, 15)}",
      "input": "{\"value\":23}",
      "output": "15",
      "outputType": "数字",
      "parameters": [
        {
          "name": "x",
          "description": "要限制范围的数字。"
        },
        {
          "name": "min",
          "description": "允许的最小值，数字字面量。"
        },
        {
          "name": "max",
          "description": "允许的最大值，数字字面量；不得小于 min。"
        }
      ]
    },
    {
      "name": "add",
      "category": "数字运算",
      "signature": "add(a, b, ...)",
      "description": "把两个或更多数字相加，默认最多 8 个参数。参数可为路径、嵌套函数或数字常量，至少有一个路径或函数。",
      "example": "${add($.燃料1, $.燃料2, $.燃料3)}",
      "input": "{\"燃料1\":2,\"燃料2\":3,\"燃料3\":5}",
      "output": "10",
      "outputType": "数字",
      "parameters": [
        {
          "name": "a, b, ...",
          "description": "依次相加的数字；至少两项，默认最多 8 项。可用路径、嵌套函数或数字字面量，至少一项是路径或函数。"
        }
      ]
    },
    {
      "name": "sub",
      "category": "数字运算",
      "signature": "sub(a, b)",
      "description": "数字 a 减去 b；两项可读取不同信道或使用嵌套函数，至少一项来自路径或函数。",
      "example": "${sub($.库存, $.需求)}",
      "input": "{\"库存\":12,\"需求\":5}",
      "output": "7",
      "outputType": "数字",
      "parameters": [
        {
          "name": "a",
          "description": "被减数，数字来源或数字字面量。"
        },
        {
          "name": "b",
          "description": "减数；a、b 至少一项是路径或函数。"
        }
      ]
    },
    {
      "name": "mul",
      "category": "数字运算",
      "signature": "mul(a, b)",
      "description": "将两个数字相乘；至少一项来自路径或函数。",
      "example": "${mul(number($[0]), 2)}",
      "input": "8 su",
      "output": "16",
      "outputType": "数字",
      "parameters": [
        {
          "name": "a, b",
          "description": "两个相乘的数字，至少一项是路径或函数。"
        }
      ]
    },
    {
      "name": "div",
      "category": "数字运算",
      "signature": "div(a, b)",
      "description": "数字 a 除以 b；除数不能为 0，至少一项来自路径或函数。计算遵守服务器数字精度限制。",
      "example": "${div($.完成, $.目标)}",
      "input": "{\"完成\":3,\"目标\":4}",
      "output": "0.75",
      "outputType": "数字",
      "parameters": [
        {
          "name": "a",
          "description": "被除数。"
        },
        {
          "name": "b",
          "description": "除数，不能为 0；a、b 至少一项是路径或函数。"
        }
      ]
    },
    {
      "name": "if",
      "category": "条件分支",
      "signature": "if(test, yes, no)",
      "description": "test 为布尔 true 时返回 yes，为 false 或缺值时返回 no；只计算选中的分支。不支持把任意数字或文字当作条件。",
      "example": "${if($.enabled, \"运行\", \"停机\")}",
      "input": "{\"enabled\":true}",
      "output": "运行",
      "outputType": "文本",
      "parameters": [
        {
          "name": "test",
          "description": "布尔来源；true 选 yes，false 或缺值选 no。"
        },
        {
          "name": "yes",
          "description": "条件为 true 时的结果，可用路径、嵌套函数或 JSON 字面量。"
        },
        {
          "name": "no",
          "description": "条件为 false 或缺值时的结果；未选中的结果分支不求值。"
        }
      ]
    },
    {
      "name": "switch",
      "category": "条件分支",
      "signature": "switch(x, match, result, ...[, fallback])",
      "description": "按值与类型匹配，返回第一个命中的结果；匹配值须为 JSON 标量字面量。可在末尾添加默认结果，只计算选中的结果；数字 1 与文本 \"1\" 不相等。",
      "example": "${switch($.mode, \"auto\", \"自动\", \"manual\", \"手动\", \"未知\")}",
      "input": "{\"mode\":\"manual\"}",
      "output": "手动",
      "outputType": "文本",
      "parameters": [
        {
          "name": "x",
          "description": "要匹配的来源值。"
        },
        {
          "name": "match, result, ...",
          "description": "按顺序成对填写匹配字面量和结果；match 为 JSON 标量，result 可用路径、函数或字面量。"
        },
        {
          "name": "fallback",
          "description": "末尾省略匹配值的默认结果；不填且均不匹配时返回缺值。"
        }
      ]
    },
    {
      "name": "substr",
      "category": "文本处理",
      "signature": "substr(x, start[, length])",
      "description": "按字符截取文本；start 从 0 开始，负数从末尾计算，省略 length 则取到末尾。",
      "example": "${substr($[0], 0, 5)}",
      "input": "Power: 8.12kv",
      "output": "Power",
      "outputType": "文本",
      "parameters": [
        {
          "name": "x",
          "description": "要截取的文本。"
        },
        {
          "name": "start",
          "description": "起始字符下标，整数字面量；0 为开头，负数从末尾计算。"
        },
        {
          "name": "length",
          "description": "最多截取的字符数，非负整数字面量；省略则取到末尾。"
        }
      ]
    },
    {
      "name": "contains",
      "category": "文本处理",
      "signature": "contains(x, part)",
      "description": "文本包含 part 时返回 true；按普通文字匹配并区分大小写。",
      "example": "${contains($[0], \"Power\")}",
      "input": "Power: 8.12kv",
      "output": "true",
      "outputType": "布尔",
      "parameters": [
        {
          "name": "x",
          "description": "要检查的文本。"
        },
        {
          "name": "part",
          "description": "要查找的文本字面量，区分大小写。"
        }
      ]
    },
    {
      "name": "starts_with",
      "category": "文本处理",
      "signature": "starts_with(x, part)",
      "description": "文本以 part 开头时返回 true；按普通文字匹配并区分大小写。",
      "example": "${starts_with($[0], \"Power\")}",
      "input": "Power: 8.12kv",
      "output": "true",
      "outputType": "布尔",
      "parameters": [
        {
          "name": "x",
          "description": "要检查的文本。"
        },
        {
          "name": "part",
          "description": "开头应匹配的文本字面量，区分大小写。"
        }
      ]
    },
    {
      "name": "ends_with",
      "category": "文本处理",
      "signature": "ends_with(x, part)",
      "description": "文本以 part 结尾时返回 true；按普通文字匹配并区分大小写。",
      "example": "${ends_with($[0], \"su\")}",
      "input": "8120 su",
      "output": "true",
      "outputType": "布尔",
      "parameters": [
        {
          "name": "x",
          "description": "要检查的文本。"
        },
        {
          "name": "part",
          "description": "结尾应匹配的文本字面量，区分大小写。"
        }
      ]
    },
    {
      "name": "replace",
      "category": "文本处理",
      "signature": "replace(x, from, to)",
      "description": "将文本中所有 from 替换为 to；按普通文字匹配，不使用正则，from 不能为空。",
      "example": "${replace($[0], \"Power\", \"Voltage\")}",
      "input": "Power: 8.12kv",
      "output": "Voltage: 8.12kv",
      "outputType": "文本",
      "parameters": [
        {
          "name": "x",
          "description": "要替换内容的文本。"
        },
        {
          "name": "from",
          "description": "要被替换的非空文本字面量，按普通文字匹配。"
        },
        {
          "name": "to",
          "description": "用于替换的文本字面量；空字符串表示删除匹配内容。"
        }
      ]
    },
    {
      "name": "split",
      "category": "文本处理",
      "signature": "split(x, separator)",
      "description": "按非空 separator 分割文本，返回文本数组并保留空项；可继续用 join 拼接。",
      "example": "${split($.line, \",\")}",
      "input": "{\"line\":\"a,b,,c\"}",
      "output": "[\"a\",\"b\",\"\",\"c\"]",
      "outputType": "JSON 文本",
      "parameters": [
        {
          "name": "x",
          "description": "要拆分的文本。"
        },
        {
          "name": "separator",
          "description": "非空分隔文本字面量；相邻分隔符产生的空项会保留。"
        }
      ]
    },
    {
      "name": "trim",
      "category": "文本处理",
      "signature": "trim(x)",
      "description": "去除文本两端空白。",
      "example": "${trim($.label)}",
      "input": "{\"label\":\"  铜锭  \"}",
      "output": "铜锭",
      "outputType": "文本",
      "parameters": [
        {
          "name": "x",
          "description": "要去除两端空白的文本，中间的空白保留。"
        }
      ]
    },
    {
      "name": "lower",
      "category": "文本处理",
      "signature": "lower(x)",
      "description": "将文本转换为小写。",
      "example": "${lower($[0])}",
      "input": "MiXeD",
      "output": "mixed",
      "outputType": "文本",
      "parameters": [
        {
          "name": "x",
          "description": "要转为小写的文本。"
        }
      ]
    },
    {
      "name": "upper",
      "category": "文本处理",
      "signature": "upper(x)",
      "description": "将文本转换为大写。",
      "example": "${upper($[0])}",
      "input": "MiXeD",
      "output": "MIXED",
      "outputType": "文本",
      "parameters": [
        {
          "name": "x",
          "description": "要转为大写的文本。"
        }
      ]
    }
  ],
  "examples": [
    {
      "title": "提取带单位的应力读数",
      "description": "整个读数作为一个文本处理，千位逗号不会把数值截成首段。",
      "context": "single",
      "source": "1,234,211 su",
      "template": "${number($[0])}",
      "result": "1234211"
    },
    {
      "title": "读取成员并拼接文字",
      "description": "JSON 成员用点号读取；数组下标从 0 开始。混合文字输出文本。",
      "context": "single",
      "source": "{\"user\":{\"name\":\"Alex\"},\"items\":[10,20]}",
      "template": "${user.name}：${items[1]} 个",
      "result": "Alex：20 个"
    },
    {
      "title": "为缺失路径设置兜底",
      "description": "数组只有两项，读取第十项时用 default 返回 0。",
      "context": "single",
      "source": "{\"items\":[10,20]}",
      "template": "${default($.items[9], 0)}",
      "result": "0"
    },
    {
      "title": "数组求平均",
      "description": "avg 处理数字数组，再用 round 控制小数位数。",
      "context": "single",
      "source": "{\"values\":[1,2,6]}",
      "template": "${round(avg($.values), 2)}",
      "result": "3"
    },
    {
      "title": "布尔值决定显示文字",
      "description": "if 只计算被选中的结果。这里 enabled 是 JSON 布尔值。",
      "context": "single",
      "source": "{\"enabled\":true}",
      "template": "${if($.enabled, \"运行\", \"停机\")}",
      "result": "运行"
    },
    {
      "title": "用模式切换输出",
      "description": "switch 逐项匹配，最后一个参数是未匹配时的默认文字。",
      "context": "single",
      "source": "{\"mode\":\"manual\"}",
      "template": "${switch($.mode, \"auto\", \"自动\", \"manual\", \"手动\", \"未知\")}",
      "result": "手动"
    },
    {
      "title": "拼接数组中的标签",
      "description": "join 可以混排文本、数字与布尔值。",
      "context": "single",
      "source": "{\"labels\":[\"铜锭\",2,false]}",
      "template": "${join($.labels, \" / \")}",
      "result": "铜锭 / 2 / false"
    },
    {
      "title": "时钟显示转游戏刻",
      "description": "游戏一天从 6:00 am 的 0 tick 开始，中午对应 6000。",
      "context": "single",
      "source": "{\"clock\":\"0:00 pm\"}",
      "template": "${game_time($.clock)}",
      "result": "6000"
    },
    {
      "title": "把信号强度变成数据",
      "description": "这个例子的接收强度是 7；不需要依赖消息正文。",
      "context": "single",
      "source": "无数据也可读强度",
      "strength": 7,
      "template": "${strength($)}",
      "result": "7"
    },
    {
      "title": "导出存量对象的 JSON",
      "description": "json 编码的是已有数据，不是解析字符串的函数。",
      "context": "single",
      "source": "{\"stock\":{\"minecraft:apple\":8,\"minecraft:iron_ingot\":32}}",
      "template": "${json($.stock)}",
      "result": "{\"minecraft:apple\":8,\"minecraft:iron_ingot\":32}"
    },
    {
      "title": "兼容逗号分量列表",
      "description": "简单的 1,2,6 读取为数字分量数组，可以直接聚合。",
      "context": "single",
      "source": "1,2,6",
      "template": "${sum($)}",
      "result": "9"
    },
    {
      "title": "三个桥接器信道相加",
      "description": "燃料1、燃料2、燃料3 都是单分量原生数值信道，可省略 [0]。",
      "context": "bridge",
      "source": "燃料1 = 2；燃料2 = 3；燃料3 = 5（均为数值信道）",
      "channels": {
        "燃料1": 2,
        "燃料2": 3,
        "燃料3": 5
      },
      "template": "${add($.燃料1, $.燃料2, $.燃料3)}",
      "result": "10"
    },
    {
      "title": "条件满足才激活",
      "description": "填在“满足条件时激活”中。比较和逻辑组合位于表达式块外。",
      "context": "condition",
      "source": "{\"temperature\":31,\"ready\":true}",
      "template": "${$.temperature} ≥ 30 & ${$.ready} = true",
      "result": "true"
    },
    {
      "title": "带单位读数换算",
      "description": "unit_number 会读取数值并应用 k、m、g、t 单位倍率。",
      "context": "single",
      "source": "8.12 kV",
      "template": "${unit_number($[0])}",
      "result": "8120"
    },
    {
      "title": "文本筛选与替换",
      "description": "文本函数可以直接组合，结果是可继续输出的文本。",
      "context": "single",
      "source": "Power: 8.12kv",
      "template": "${replace($[0], \"Power\", \"Voltage\")}",
      "result": "Voltage: 8.12kv"
    },
    {
      "title": "拆分后重新拼接",
      "description": "split 返回数组，join 可以把数组按指定分隔符拼回文本。",
      "context": "single",
      "source": "{\"line\":\"a,b,c\"}",
      "template": "${join(split($.line, \",\"), \" / \")}",
      "result": "a / b / c"
    }
  ],
  "rules": [
    {
      "title": "信箱与桥接器的根不同",
      "description": "信箱、存量信箱和隐藏终端用 $ 表示自己的输入。桥接器直接用 ${信道名}，函数内用 $.信道名；桥接器不支持裸 $。"
    },
    {
      "title": "读取原始值与引用其他信道",
      "description": "桥接器引用自身名称读取原始值，引用其他信道读取其有效输出；不允许跨信道循环依赖。信道名是 GUI 名称，不是无线频率。"
    },
    {
      "title": "路径是静态的",
      "description": "对象成员用 .name，数组用 [0]、[1]。特殊成员名或带空格的信道名用双引号方括号，例如 $[\"minecraft:apple\"]、$[\"门 状态\"]。不支持动态下标。"
    },
    {
      "title": "文本与数值分开处理",
      "description": "普通文本整体读取为单项数组，用 $[0] 取文本，再用 number() 提取数字。原生单分量数值可以直接参与计算；JSON 数组即使只有一项，也应明确写 [0]。"
    },
    {
      "title": "模板保留类型的规则",
      "description": "只有一个 ${...} 表达式块时保留其值类型；前后拼上文字或使用多个表达式块时输出文本。纯文字会原样输出；空白表示未配置。"
    },
    {
      "title": "函数参数有明确位置",
      "description": "普通函数首参为 $ 开头的静态路径或嵌套函数；配置参数使用 JSON 字面量。add/sub/mul/div 支持多个动态数字来源；if/switch 的结果分支也可读取路径或函数。函数名不区分大小写。"
    },
    {
      "title": "条件不是普通输出模板",
      "description": "条件可用比较、括号和逻辑运算，必须引用信道数据，最终为布尔值；优先级为括号、比较、并且、或者。普通输出语法不支持中缀算术、管道或脚本。"
    },
    {
      "title": "信号强度单独转换",
      "description": "输出强度填写数字，或结果为数字的输出语法。留空跟随原有输入强度；本地自动激活通常为 15。小数向下取整并限制到 0–15，0、缺值或错误不发送；文字数字先用 number()。"
    },
    {
      "title": "避免强度回授",
      "description": "信箱激活条件不能读取自身 strength($)，但输出强度可以转换输入强度；桥接器条件与输出强度不能依赖自身输出强度，可读取其他信道的强度。隐藏终端当前的输出强度配置也不接受 strength($)。"
    },
    {
      "title": "缺值与错误不同",
      "description": "缺值通常不产生输出；default 只处理没有来源、路径不存在和 null，不能掩盖非法 JSON、类型错误、除零或预算超限。"
    }
  ],
  "operators": [
    {
      "symbol": "= / ==",
      "description": "相等；数字与文本按各自类型比较。"
    },
    {
      "symbol": "!=",
      "description": "不相等。"
    },
    {
      "symbol": "< / > / <= / >= / ≤ / ≥",
      "description": "大小比较，仅支持数字。"
    },
    {
      "symbol": "& / &&",
      "description": "并且，左右两边都为 true 时成立。"
    },
    {
      "symbol": "||",
      "description": "或者，至少一边为 true 时成立。"
    },
    {
      "symbol": "( ... )",
      "description": "明确条件组合顺序。"
    }
  ],
  "limits": {
    "description": "以下为默认预算，服务器可调整。未配置规则时不求值，已配置规则编译缓存，按数据与依赖变化更新。",
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

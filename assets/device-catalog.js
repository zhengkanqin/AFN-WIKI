window.AFN_DEVICE_CATALOG = {
  "read": [
    {
      "name": "辉光管",
      "group": "机械动力",
      "description": "当前显示文本",
      "example": "15",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "当前显示文本：直接读取管上显示的文字，不等于测量输入红石强度。"
          ]
        },
        {
          "heading": "示例",
          "code": "15"
        }
      ]
    },
    {
      "name": "智能侦测器",
      "group": "机械动力",
      "description": "匹配物品或流体的数量/列表",
      "example": "64",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "按读取菜单选择匹配物品 / 流体的数量、列表或包裹收件地址。数量用于计算，列表保留本体文本；收件地址是文字，不是数量。"
          ]
        },
        {
          "heading": "示例",
          "code": "64"
        }
      ]
    },
    {
      "name": "存量转信器",
      "group": "机械动力",
      "description": "容器填充比例",
      "example": "63%",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "容器填充比例：已用容量相对容器总容量的占比。百分比 / 进度条表示同一填充率，不代表物品的绝对数量。"
          ]
        },
        {
          "heading": "示例",
          "code": "63%"
        }
      ]
    },
    {
      "name": "转速表",
      "group": "机械动力",
      "description": "转速（RPM）",
      "example": "32 RPM",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "转速：被测动力网络的转速，保留本体的 RPM 单位。"
          ]
        },
        {
          "heading": "示例",
          "code": "32 RPM"
        }
      ]
    },
    {
      "name": "应力表",
      "group": "机械动力",
      "description": "读取应力表的进度条、百分比、当前应力、总应力与剩余应力，可在下拉列表中同时勾选多项。",
      "example": "128 SU",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "进度条：按当前应力占总容量的比例绘制的短文本条，用于显示，不是数值。百分比：同一占用率，保留 %。",
            "应力：当前网络已使用的应力；总应力：网络可提供的应力容量；剩余应力：总容量中尚未使用的部分，单位均为 SU。",
            "自动读取中单选保持该来源原样输出；多选组合 JSON。字段名以实际信箱预览为准，不把翻译名猜成固定的代码字段。"
          ]
        },
        {
          "heading": "示例",
          "code": "128 SU"
        }
      ]
    },
    {
      "name": "布谷鸟钟",
      "group": "机械动力",
      "description": "当前时刻或计时",
      "example": "08:30",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "时刻 / 计时：按所选读取模式返回钟表的时间文本，保留本体格式，不是固定结构的 JSON。"
          ]
        },
        {
          "heading": "示例",
          "code": "08:30"
        }
      ]
    },
    {
      "name": "传送带、置物台或弹射置物台",
      "group": "机械动力",
      "description": "当前物品名称",
      "example": "Iron Ingot",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "物品名称：设备上当前呈现的物品名称，不是扫描整片仓库得到的存量清单。"
          ]
        },
        {
          "heading": "示例",
          "code": "Iron Ingot"
        }
      ]
    },
    {
      "name": "安山/黄铜隧道",
      "group": "机械动力",
      "description": "累计物品数量或吞吐量",
      "example": "128",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "累计数量：经过隧道的物品总数；吞吐量：本体统计时间窗口内的传输量。通过读取菜单选择需要的模式，吞吐量保留其时间单位。"
          ]
        },
        {
          "heading": "示例",
          "code": "128"
        }
      ]
    },
    {
      "name": "列车站点",
      "group": "机械动力",
      "description": "站点摘要或列车运行状态",
      "example": "Platform 2 · Express",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "站点 / 列车运行信息：返回本体显示来源提供的文字摘要；所选模式决定具体内容，不是固定字段的列车 JSON。"
          ]
        },
        {
          "heading": "示例",
          "code": "Platform 2 · Express"
        }
      ]
    },
    {
      "name": "列车侦测器",
      "group": "机械动力",
      "description": "检测到的列车名称",
      "example": "Express 01",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "列车名称：当前被侦测器检测到的列车名称。"
          ]
        },
        {
          "heading": "示例",
          "code": "Express 01"
        }
      ]
    },
    {
      "name": "智能侦测器",
      "group": "机械动力",
      "description": "包裹收件地址",
      "example": "factory.chest",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "按读取菜单选择匹配物品 / 流体的数量、列表或包裹收件地址。数量用于计算，列表保留本体文本；收件地址是文字，不是数量。"
          ]
        },
        {
          "heading": "示例",
          "code": "factory.chest"
        }
      ]
    },
    {
      "name": "锅炉结构中的流体储罐",
      "group": "机械动力",
      "description": "锅炉状态",
      "example": "3/5",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "锅炉状态：读取储罐所在锅炉结构的本体状态摘要，如当前等级与最大等级；不代表储罐中的 FE 电量。"
          ]
        },
        {
          "heading": "示例",
          "code": "3/5"
        }
      ]
    },
    {
      "name": "升降机锚点",
      "group": "机械动力",
      "description": "升降机当前楼层",
      "example": "2",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "当前楼层：升降机本体提供的楼层标识，不是方块的世界 Y 坐标。"
          ]
        },
        {
          "heading": "示例",
          "code": "2"
        }
      ]
    },
    {
      "name": "工厂仪表（读取其连接的工厂面板）",
      "group": "机械动力",
      "description": "物品存量、物品名称与请求状态",
      "example": "12 · Iron Ingot",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "物品存量：关联工厂面板的存量计数；物品名称：该面板的目标物品；请求状态：面板的请求 / 满足状态。按读取菜单选择需要的项目。"
          ]
        },
        {
          "heading": "示例",
          "code": "12 · Iron Ingot"
        }
      ]
    },
    {
      "name": "座椅",
      "group": "机械动力",
      "description": "乘客名称",
      "example": "Steve",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "乘客名称：当前座椅乘客的显示名称。"
          ]
        },
        {
          "heading": "示例",
          "code": "Steve"
        }
      ]
    },
    {
      "name": "仓储发报机",
      "group": "机械动力",
      "description": "读取所属物流网络的 AFN 名称。未命名网络只显示“未命名网络”，实际网络仍按 Create 的独立身份区分，不会自动并网。",
      "example": "main",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "物流网络名称：读取已配置的网络名，例如 main；“未命名网络”是显示占位，不会让所有未命名网络合并。"
          ]
        },
        {
          "heading": "示例",
          "code": "main"
        }
      ]
    },
    {
      "name": "仓储链接站",
      "group": "机械动力",
      "description": "读取所属物流网络的 AFN 名称。未命名网络只显示“未命名网络”，实际网络仍按 Create 的独立身份区分，不会自动并网。",
      "example": "main",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "物流网络名称：读取已配置的网络名；它不是包裹地址，也不是仓储物品清单。"
          ]
        },
        {
          "heading": "示例",
          "code": "main"
        }
      ]
    },
    {
      "name": "信箱",
      "group": "AFN",
      "description": "把读取用信箱附到此信箱上，读取其当前有效信道内容。",
      "example": "{\"fuel\":64}",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "当前信道内容：读取来源信箱的有效输出内容，包括其输出语法处理后的结果；不是未提交的草稿、频率或红石强度。",
            "来源无需处于激活态；没有内容时为空。JSON 内容仍作为一个来源原样输出，不会自动把其中每个键拆成独立勾选项；需要字段时使用输出语法提取。",
            "示例中的 fuel 是发送者自定义的业务字段，64 是其内容；不是信箱固定读取字段。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"fuel\":64}"
        }
      ]
    },
    {
      "name": "定向收信箱",
      "group": "AFN",
      "description": "把读取用信箱附到此信箱上，读取其当前有效信道内容。",
      "example": "{\"fuel\":64}",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "当前信道内容：读取来源信箱的有效输出内容，包括其输出语法处理后的结果；不是未提交的草稿、频率或红石强度。",
            "来源无需处于激活态；没有内容时为空。JSON 内容仍作为一个来源原样输出，不会自动把其中每个键拆成独立勾选项；需要字段时使用输出语法提取。",
            "示例中的 fuel 是发送者自定义的业务字段，64 是其内容；不是信箱固定读取字段。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"fuel\":64}"
        }
      ]
    },
    {
      "name": "调制收信箱",
      "group": "AFN",
      "description": "把读取用信箱附到此信箱上，读取其当前有效信道内容。",
      "example": "{\"fuel\":64}",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "当前信道内容：读取来源信箱的有效输出内容，包括其输出语法处理后的结果；不是未提交的草稿、频率或红石强度。",
            "来源无需处于激活态；没有内容时为空。JSON 内容仍作为一个来源原样输出，不会自动把其中每个键拆成独立勾选项；需要字段时使用输出语法提取。",
            "示例中的 fuel 是发送者自定义的业务字段，64 是其内容；不是信箱固定读取字段。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"fuel\":64}"
        }
      ]
    },
    {
      "name": "高度传感器",
      "group": "航空学",
      "description": "世界高度或气压",
      "example": "63.4 m",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "高度：本体测得的世界高度；气压：本体测得的气压。读取菜单决定输出哪一项，保留本体提供的单位。"
          ]
        },
        {
          "heading": "示例",
          "code": "63.4 m"
        }
      ]
    },
    {
      "name": "速度传感器",
      "group": "航空学",
      "description": "相对速度与方向",
      "example": "12.0 m/s",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "速度 / 方向：按传感器本体的坐标系与读取模式返回运动信息，速度保留原单位。"
          ]
        },
        {
          "heading": "示例",
          "code": "12.0 m/s"
        }
      ]
    },
    {
      "name": "姿态传感器",
      "group": "航空学",
      "description": "俯仰角与滚转角",
      "example": "4.2°",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "俯仰角 / 滚转角：对应姿态轴上的角度，单位度；选择哪一轴就返回哪一轴的值。"
          ]
        },
        {
          "heading": "示例",
          "code": "4.2°"
        }
      ]
    },
    {
      "name": "光学传感器",
      "group": "航空学",
      "description": "检测到的方块或与目标的距离",
      "example": "石头 · 4 格",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "检测方块：传感器当前报告的目标方块信息；距离：传感器与目标之间的距离，单位格。"
          ]
        },
        {
          "heading": "示例",
          "code": "石头 · 4 格"
        }
      ]
    },
    {
      "name": "激光传感器",
      "group": "航空学",
      "description": "命中距离",
      "example": "7.5 格",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "命中距离：沿激光方向到本体判定命中位置的距离，单位格。"
          ]
        },
        {
          "heading": "示例",
          "code": "7.5 格"
        }
      ]
    },
    {
      "name": "便携式引擎",
      "group": "航空学",
      "description": "剩余或总燃烧时间",
      "example": "12.0 s",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "剩余燃烧时间：当前燃料尚可燃烧的时间；总燃烧时间：当前燃料完整的燃烧时长，保留本体时间单位。"
          ]
        },
        {
          "heading": "示例",
          "code": "12.0 s"
        }
      ]
    },
    {
      "name": "对接连接器",
      "group": "航空学",
      "description": "对接对象",
      "example": "Airship Alpha",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "对接对象：本体报告的连接目标名称 / 标识，不是目标坐标。"
          ]
        },
        {
          "heading": "示例",
          "code": "Airship Alpha"
        }
      ]
    },
    {
      "name": "导航台",
      "group": "航空学",
      "description": "目标距离或预计抵达时间",
      "example": "1,280 格",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "目标距离：与当前导航目标的距离，单位格；预计抵达时间：按当前运动状态估算的抵达时长。"
          ]
        },
        {
          "heading": "示例",
          "code": "1,280 格"
        }
      ]
    },
    {
      "name": "无线红石打字机",
      "group": "航空学",
      "description": "输入文本",
      "example": "前往码头",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "输入文本：打字机当前提供的文字内容。"
          ]
        },
        {
          "heading": "示例",
          "code": "前往码头"
        }
      ]
    },
    {
      "name": "螺旋齿轮/螺旋传动杆",
      "group": "航空学",
      "description": "物品吞吐量",
      "example": "16/min",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "物品吞吐量：本体提供的传输速率文字，保留时间单位，例如每分钟物品数。"
          ]
        },
        {
          "heading": "示例",
          "code": "16/min"
        }
      ]
    },
    {
      "name": "热空气燃烧室/蒸汽喷口",
      "group": "航空学",
      "description": "气球填充体积或总升力",
      "example": "████▒▒（气体体积）／120 N（总升力）",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "气球填充体积：本体提供的气体体积 / 填充情况；总升力：本体提供的合计升力。进度条仅是可视文本，不能当数值计算。"
          ]
        },
        {
          "heading": "示例",
          "code": "████▒▒（气体体积）／120 N（总升力）"
        }
      ]
    },
    {
      "name": "导航终端",
      "group": "飞控学",
      "description": "读取当前导航目标序号、世界坐标、线段进度及完整路径点数组。只选一项原样输出，多选组成 JSON；具体格式见下方。",
      "example": "{\"导航目标序号\":2,\"导航目标坐标\":\"128,64,-32\",\"导航线段进度\":62.5}",
      "mod": "Create: Flight Control 0.8.3+",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "导航目标序号：当前目标的 1 起始序号；导航目标坐标：世界坐标 x,y,z 文本；导航线段进度：当前线段完成百分比 0～100，不附 %。无有效目标时目标相关值为空；跟随、持续盘旋等没有明确线段进度的模式不输出百分比。",
            "导航全部路径点：按航路顺序输出全部路径点 [[x,y,z],...]；运行时优先读取当前已解析路线。它不是当前目标坐标，也不附带目标 ID。路径超过信道长度限制时输出 {\"error\":\"content_limit\"}，其中 error 表示内容超限，不是坐标点。",
            "仅选择“导航全部路径点”时可以直接发给支持坐标数组的设备。多选后有外层字段名，应先提取对应值；字段名随运行端语言变化，以实际预览为准。"
          ],
          "code": "[[128,64,-32],[160,70,-20]]"
        },
        {
          "heading": "示例",
          "code": "{\"导航目标序号\":2,\"导航目标坐标\":\"128,64,-32\",\"导航线段进度\":62.5}"
        }
      ]
    },
    {
      "name": "固定式火炮底座 · 水平角",
      "group": "机械动力：火炮",
      "description": "读取“火炮水平角”：底座的水平角设置，范围 −45～45°，不是世界方位角。可与俯仰角同时勾选，按多选规则输出 JSON。",
      "example": "20",
      "mod": "Create Big Cannons",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "火炮水平角：底座本体的整数角度设置，−45～45 度；不是炮口在世界坐标中的绝对朝向。"
          ]
        },
        {
          "heading": "示例",
          "code": "20"
        }
      ]
    },
    {
      "name": "固定式火炮底座 · 俯仰角",
      "group": "机械动力：火炮",
      "description": "读取“火炮俯仰角”：底座的俯仰角设置，范围 −45～45°，不是结构相对世界的实际姿态。可与水平角同时勾选，按多选规则输出 JSON。",
      "example": "-10",
      "mod": "Create Big Cannons",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "火炮俯仰角：底座本体的整数角度设置，−45～45 度；不是结构相对世界的实际姿态。"
          ]
        },
        {
          "heading": "示例",
          "code": "-10"
        }
      ]
    },
    {
      "name": "动能电池",
      "group": "创意传动",
      "description": "电量、百分比或进度条",
      "example": "64%",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "电量：本体显示的剩余动能；百分比：电量占最大容量的百分比；进度条：同一比例的短文本条。单选保留本体单位和文本格式，进度条不用于数值计算。"
          ]
        },
        {
          "heading": "示例",
          "code": "64%"
        }
      ]
    },
    {
      "name": "蓄电池",
      "group": "创想附加",
      "description": "连接蓄电池任一组成方块，读取整个结构的储能、总容量、剩余容量、百分比或进度条。前三项为精确整数 FE，不附单位或 K/M 缩写。",
      "example": "500000",
      "mod": "Create Crafts & Additions",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "储存的 FE 能量：当前结构储能；容量：结构可存储的总 FE；剩余的 FE 能量：总容量减当前储能，即还能充入的空间，不是当前可释放的电量。前三项均为精确整数 FE。",
            "百分比：当前储能占容量的百分比文本，保留 %；进度条：同一比例的短文本显示，不是数值。多选 JSON 的键由运行端翻译名生成，空格会变为下划线，以信箱预览为准。"
          ]
        },
        {
          "heading": "单项读数",
          "paragraphs": [
            "在自动读取下拉列表中勾选「储存的 FE 能量」「容量」「剩余的 FE 能量」「百分比」或「进度条」。只选储能时，下例表示 500000 FE；百分比保留 %，进度条为短文本条。",
            "单项读数保留文本。需要计算时先取第一个分量，再转为数字，例如 ${add(number($[0]),1)} 输出 500001。"
          ],
          "code": "500000"
        },
        {
          "heading": "组合读数",
          "paragraphs": [
            "多选时输出 JSON，数值保持数字类型。可用 ${$.容量} 或 ${$.储存的_FE_能量} 引用对应字段，${add($.容量,1)} 可直接计算。 示例中的“剩余的_FE_能量”同样表示容量减当前储能。"
          ],
          "code": "{\"储存的_FE_能量\":500000,\"容量\":2000000,\"剩余的_FE_能量\":1500000}"
        }
      ]
    },
    {
      "name": "柴油引擎",
      "group": "柴油动力",
      "description": "实际转速（RPM）、转向（0 顺时针／1 逆时针）、生产运行状态、应力容量（SU），以及燃料的流体量、储罐容量（mB）、名称与注册名。数值不附单位，空流体名称和注册名为空。",
      "example": "128",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "转速：实际动力网络 RPM，不附单位；方向：0 顺时针、1 逆时针；运行：true 表示当前正在生产动力，false 表示未生产，不能仅凭转速是否非零判断。",
            "应力容量：当前设备 / 对应动力输出的 SU 容量，不是剩余应力。流体量：当前燃料量，mB；储罐容量：燃料储罐最大容量，mB。",
            "流体名称：本地化显示名称；流体注册名：完整资源名，例如 minecraft:water。空罐时名称和注册名为空。勾选的数字项不附单位，布尔项为 true / false。"
          ]
        },
        {
          "heading": "组合读数",
          "paragraphs": [
            "下拉列表中勾选需要的字段，单选保留原始文本；如需计算，使用 ${number($[0])}。多选组成 JSON，可按字段名读取，例如 ${$.流体量}。",
            "运行表示引擎是否在生产动力；被其他动力源带动时，实际转速可以非零而运行仍为 false。只为勾选字段取样。"
          ],
          "code": "{\"转速\":128,\"方向\":0,\"运行\":true,\"应力容量\":4096,\"流体量\":1000}"
        }
      ]
    },
    {
      "name": "模块柴油引擎",
      "group": "柴油动力",
      "description": "读取整组模块的实际转速、转向、生产运行状态、应力容量及燃料信息。可把信箱附在任意成员上，读数自动取自主控制器。未加载的控制器不强行加载。",
      "example": "{\"转速\":128,\"运行\":true,\"流体量\":1000}",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "转速：实际动力网络 RPM，不附单位；方向：0 顺时针、1 逆时针；运行：true 表示当前正在生产动力，false 表示未生产，不能仅凭转速是否非零判断。",
            "应力容量：当前设备 / 对应动力输出的 SU 容量，不是剩余应力。流体量：当前燃料量，mB；储罐容量：燃料储罐最大容量，mB。",
            "流体名称：本地化显示名称；流体注册名：完整资源名，例如 minecraft:water。空罐时名称和注册名为空。勾选的数字项不附单位，布尔项为 true / false。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"转速\":128,\"运行\":true,\"流体量\":1000}"
        }
      ]
    },
    {
      "name": "大型柴油引擎",
      "group": "柴油动力",
      "description": "读取当前引擎的转向、生产运行状态与燃料信息；实际 RPM 和应力容量取其对应的共同动力曲轴，因此同轴引擎可能显示相同的转速和容量。燃料量、容量为 mB。",
      "example": "{\"转速\":128,\"运行\":true,\"方向\":0,\"流体量\":1000}",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "转速：实际动力网络 RPM，不附单位；方向：0 顺时针、1 逆时针；运行：true 表示当前正在生产动力，false 表示未生产，不能仅凭转速是否非零判断。",
            "应力容量：当前设备 / 对应动力输出的 SU 容量，不是剩余应力。流体量：当前燃料量，mB；储罐容量：燃料储罐最大容量，mB。",
            "流体名称：本地化显示名称；流体注册名：完整资源名，例如 minecraft:water。空罐时名称和注册名为空。勾选的数字项不附单位，布尔项为 true / false。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"转速\":128,\"运行\":true,\"方向\":0,\"流体量\":1000}"
        }
      ]
    },
    {
      "name": "动力曲轴",
      "group": "柴油动力",
      "description": "读取实际转速（RPM）、运行状态和应力容量（SU）。燃料信息应从连接的大型柴油引擎读取。",
      "example": "{\"转速\":128,\"运行\":true,\"应力容量\":4096}",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "转速：曲轴实际转速，RPM；运行：曲轴是否在生产动力，true / false；应力容量：对应动力输出容量，SU。数值不附单位。燃料与方向应从连接的柴油引擎读取。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"转速\":128,\"运行\":true,\"应力容量\":4096}"
        }
      ]
    },
    {
      "name": "化学炮塔（放置式化学喷雾器）",
      "group": "柴油动力",
      "description": "读取当前和目标水平角／俯仰角（度）、喷射状态，以及流体量、储罐容量（mB）、流体名称与注册名。喷射状态反映实际是否喷射，并非只看喷射请求。",
      "example": "{\"当前水平角\":90,\"当前俯仰角\":-20,\"喷射中\":true,\"流体量\":500}",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "当前水平角 / 当前俯仰角：炮塔此刻的实际角度，单位度；目标水平角 / 目标俯仰角：正在追随的设定角，并非已经转到的角度。",
            "喷射中：实际喷射状态，true / false，不是仅有喷射请求。流体量 / 储罐容量：当前喷射介质量与储罐容量，mB；流体名称 / 流体注册名：显示名与完整资源名，空罐时为空。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"当前水平角\":90,\"当前俯仰角\":-20,\"喷射中\":true,\"流体量\":500}"
        }
      ]
    },
    {
      "name": "可控燃烧室",
      "group": "柴油动力",
      "description": "读取燃烧速率（阀门开度 0～1）、热量、输出强度（0～15）及燃料的流体量、储罐容量（mB）、名称、注册名。燃烧速率不是每刻耗油量；未燃烧时热量可能为 -1。",
      "example": "{\"燃烧速率\":0.5,\"热量\":1.5,\"输出强度\":9,\"流体量\":500}",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "燃烧速率：阀门开度 0～1，不是每 tick 油耗；热量：本体当前热量状态，未燃烧时可能为 −1；输出强度：当前红石输出，0～15。",
            "流体量 / 储罐容量：燃料量与储罐总容量，mB；流体名称 / 流体注册名：本地化名称和完整资源名，空罐时为空。数值不附单位。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"燃烧速率\":0.5,\"热量\":1.5,\"输出强度\":9,\"流体量\":500}"
        }
      ]
    },
    {
      "name": "抽油机油泵",
      "group": "柴油动力",
      "description": "读取原油储量，沿用本体的整数 B 文本；1 B=1000 mB。小于一桶的余量会按本体规则舍去。",
      "example": "500B",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "原油储量：保留本体的整数桶数文本，1 B = 1000 mB；不足一桶的余量按本体规则舍去。"
          ]
        },
        {
          "heading": "示例",
          "code": "500B"
        }
      ]
    },
    {
      "name": "横向流体储罐（锅炉结构）",
      "group": "创意传动",
      "description": "锅炉状态",
      "example": "3/5",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "锅炉状态：读取所属锅炉的本体状态摘要，不是 FE 储能。"
          ]
        },
        {
          "heading": "示例",
          "code": "3/5"
        }
      ]
    },
    {
      "name": "音符盒",
      "group": "原版",
      "description": "音高",
      "example": "12",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "音高：整数音符序号 0～24，由低到高；是半音序号，不是 Hz 频率。"
          ]
        },
        {
          "heading": "示例",
          "code": "12"
        }
      ]
    },
    {
      "name": "标靶",
      "group": "原版",
      "description": "红石强度",
      "example": "7",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "红石强度：标靶当前输出强度，0～15。"
          ]
        },
        {
          "heading": "示例",
          "code": "7"
        }
      ]
    },
    {
      "name": "重生锚",
      "group": "原版",
      "description": "各玩家死亡次数",
      "example": "Steve · 3",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "死亡次数：读取来源提供的玩家名称及对应死亡次数；不是重生锚的充能数量。"
          ]
        },
        {
          "heading": "示例",
          "code": "Steve · 3"
        }
      ]
    },
    {
      "name": "命令方块（指定记分项）",
      "group": "原版",
      "description": "玩家分数",
      "example": "Steve · 42",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "先在读取配置中选择记分项；玩家名称表示分数所属者，数值表示其在该记分项中的得分。"
          ]
        },
        {
          "heading": "示例",
          "code": "Steve · 42"
        }
      ]
    },
    {
      "name": "附魔台",
      "group": "原版",
      "description": "最大附魔花费",
      "example": "15",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "最大附魔花费：由附魔台周边环境决定的本体可用附魔花费，不是玩家当前经验等级。"
          ]
        },
        {
          "heading": "示例",
          "code": "15"
        }
      ]
    },
    {
      "name": "CC:Tweaked 电脑",
      "group": "CCT",
      "description": "屏幕文本",
      "example": "ready",
      "mod": "CC:Tweaked",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "屏幕文本：读取电脑终端显示的文字；不会把读出的文字作为命令执行。"
          ]
        },
        {
          "heading": "示例",
          "code": "ready"
        }
      ]
    },
    {
      "name": "唱片机",
      "group": "网络音乐机",
      "description": "读取播放状态、歌曲信息与歌词。在读取下拉列表中分别勾选所需字段，单项原样输出，多项组成 JSON。",
      "fields": "播放状态、歌名、歌手、译名、唱片时长、已播时长、剩余时长、播放进度、当前歌词、全部歌词、歌曲地址、循环播放、红石状态、VIP 歌曲、只读唱片、存在唱片",
      "example": "{\"歌名\":\"示例歌曲\",\"歌手\":\"示例歌手\",\"播放状态\":true,\"播放进度\":25}",
      "mod": "NetMusic",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "播放状态：true 正在播放，false 未播放；歌名：原歌曲标题；歌手：歌曲提供的歌手文本；译名：歌曲提供的翻译标题，没有则为空。",
            "唱片时长：整首总秒数；已播时长：估计已播放秒数；剩余时长：估计剩余秒数；播放进度：0～100 的百分比数字，不是 0～1。上述播放时间由服务端状态估算。",
            "当前歌词：当前时间对应的歌词文本；全部歌词：整份歌词文本。未取得、歌曲不支持或没有歌词时为空；未选择歌词不发起歌词获取。",
            "歌曲地址：当前歌曲的播放来源地址；循环播放：是否循环；红石状态：本体当前红石状态；VIP 歌曲：是否为 VIP 曲目；只读唱片：唱片是否只读；存在唱片：是否插入唱片。状态项均为 true / false。",
            "每项在读取列表中独立勾选。多选 JSON 使用运行端翻译名作为键，例如“歌名”“播放状态”；空格变为下划线，服务端可能采用英文键，以实际预览为准。"
          ]
        },
        {
          "heading": "读取结果示例",
          "code": "{\"歌名\":\"示例歌曲\",\"歌手\":\"示例歌手\",\"播放状态\":true,\"播放进度\":25}",
          "paragraphs": []
        },
        {
          "heading": "时长与进度",
          "paragraphs": [
            "时长以秒计，播放进度为 0～100。已播时长、剩余时长与进度按服务端倒计时估算，并非精确音频时间。"
          ]
        },
        {
          "heading": "歌词与更新",
          "paragraphs": [
            "未勾选的字段不取样，也不请求歌词。歌词仅适用于其支持的网易云歌曲，选中后异步获取并缓存；未获得或歌曲无歌词时为空。全部歌词超过 1024 个字符或 4096 字节时，输出“歌词超出信道长度限制”。"
          ]
        }
      ]
    },
    {
      "name": "播音喇叭",
      "group": "网络音乐机",
      "description": "读取一份包含直播地址、名称、范围和播放状态的 JSON；各键含义如下，不能把整份对象当成纯直播地址。",
      "example": "{\"url\":\"https://sk.cri.cn/am846.m3u8\",\"name\":\"中央广播\",\"range\":96,\"broadcasting\":true}",
      "mod": "NetMusic",
      "fields": "url：直播地址；name：显示名称；range：广播范围；broadcasting：是否正在广播",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "url：当前配置的直播流地址，文本；name：广播显示名称，文本；range：广播范围，整数格数；broadcasting：当前是否广播，true / false。",
            "这四项属于同一个 JSON 读取源，不是四个独立读取选项。需要单项时使用输出语法，如 ${$.url} 取得地址，${$.broadcasting} 取得播放状态。"
          ],
          "code": "{\"url\":\"https://sk.cri.cn/am846.m3u8\",\"name\":\"中央广播\",\"range\":96,\"broadcasting\":true}"
        }
      ]
    },
    {
      "name": "雷达轴承",
      "group": "机械动力：雷达",
      "description": "读取该设备的报告点集，保留干扰造成的偏移与合成目标；不是绕过雷达重新扫描世界。另可读取运行、范围、当前扫角、扫角速度、输入 RPM 与雷达碟数量。",
      "example": "[[128,64,-32],[160,70,-20]]",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "点坐标数组：[[x,y,z],...]，每组三个数字为一个世界坐标；只含位置，不含名称或目标 ID。地图 JSON：{\"points\":[{\"position\":[x,y,z]}],...}，位置同样是世界坐标。",
            "详细目标：{\"tracks\":[...],...}，每项 id 是真实目标标识，position 是世界坐标 [x,y,z]。velocity 是速度 [vx,vy,vz]，单位格 / tick；category 是原生目标类别；scanned_time 是原生扫描游戏刻；entity_type 是原生实体类型信息；friendly 是友方标记；synthetic 是合成目标标记。来源未提供的字段不输出。",
            "total_count：来源目标总数；returned_count：本次实际写入的目标数；truncated：true 表示因长度或数量预算未返回全部目标。点数 / 总点数读取来源总数；已返回点数 / 点集已裁减 / 点集概况按简单数组格式的容量统计，未必等于详细目标 JSON 的容量。",
            "目标坐标、目标 ID、目标速度、目标类别、目标为友方：当前已选择目标对应的数据，不是第一个候选目标。显示器使用其当前选择；扫描雷达和网络控制器使用所属网络选择，未选择或对应信息不存在时为空。",
            "已连接：是否能解析到雷达网络；雷达数量 / 显示器数量 / 武器数量：该网络中对应端点的数量。设备独立工作时可有点集，但未必有网络或已选目标。",
            "运行中：雷达是否运行；探测范围：当前探测范围，格；当前角度：当前扫描角，度；扫角速度：度 / tick；输入转速：RPM；雷达碟数量：组装结构中识别到的碟数。",
            "点集概况返回 total_count、returned_count、truncated 和 format；format 为 \"points_array\"，表示其容量统计按简单坐标数组格式计算。"
          ]
        },
        {
          "heading": "点坐标数组",
          "paragraphs": [
            "在自动读取中只勾选“点坐标数组”，输出可直接送到桥接器地图模式或 AFN 雷达。坐标为世界 x,y,z，不需要另写转换语法。"
          ],
          "code": "[[128,64,-32],[160,70,-20]]"
        },
        {
          "heading": "地图 JSON",
          "paragraphs": [
            "地图 JSON 包含 points 以及 total_count、returned_count、truncated。可直接显示在桥接器地图或 AFN 雷达，也能作为寻呼机地图消息。多选其他读数时，先用信道输出语法提取地图字段，不要把整份多选外壳当点集。"
          ],
          "code": "{\"points\":[{\"position\":[128,64,-32]},{\"position\":[160,70,-20]}],\"total_count\":2,\"returned_count\":2,\"truncated\":false}"
        },
        {
          "heading": "详细目标与裁减",
          "paragraphs": [
            "“详细目标”另选，输出 tracks 数组。每项包含 id、position、velocity，以及能够提供的 category、scanned_time、entity_type、friendly、synthetic；未知字段省略。不要把详细目标外壳直接当地图格式。",
            "只采样所选项，点集快照最多每 5 tick 更新并共享。点数不组装几何 JSON。信道容量不足时按完整点/完整目标裁减；不会截断 JSON 文本。独立“已返回点数／点集已裁减”以点坐标数组为准，其他格式看自身元信息。"
          ],
          "code": "{\"tracks\":[{\"id\":\"contact_id\",\"position\":[128,64,-32],\"velocity\":[0,0,0],\"category\":\"PLAYER\",\"friendly\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "详细目标 JSON：字段与提取示例",
          "paragraphs": [
            "示例中只展示一条候选。id 使用字符串且不应自行编造；它不是频段板频率、物品注册名、玩家名称或列表序号。下面演示性 ID 必须换成实际读数。",
            "仅勾选“详细目标”时，${$.tracks[0].id} 取返回列表第一项的 ID；[0] 从 0 开始。列表按 ID 稳定排序，不代表最近、最危险或当前锁定；truncated=true 时列表不是全部目标。"
          ],
          "code": "{\"tracks\":[{\"position\":[128,64,-32],\"id\":\"f3b1a6a0-1dbd-4d59-9bd0-0d27bb230f79\",\"velocity\":[0.2,0,0],\"category\":\"PLAYER\",\"friendly\":false,\"synthetic\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        }
      ]
    },
    {
      "name": "平面雷达",
      "group": "机械动力：雷达",
      "description": "读取该设备的报告点集，保留干扰造成的偏移与合成目标；不是绕过雷达重新扫描世界。另可读取运行、范围与扫角；朝向跟随设备所在结构。",
      "example": "[[128,64,-32],[160,70,-20]]",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "点坐标数组：[[x,y,z],...]，每组三个数字为一个世界坐标；只含位置，不含名称或目标 ID。地图 JSON：{\"points\":[{\"position\":[x,y,z]}],...}，位置同样是世界坐标。",
            "详细目标：{\"tracks\":[...],...}，每项 id 是真实目标标识，position 是世界坐标 [x,y,z]。velocity 是速度 [vx,vy,vz]，单位格 / tick；category 是原生目标类别；scanned_time 是原生扫描游戏刻；entity_type 是原生实体类型信息；friendly 是友方标记；synthetic 是合成目标标记。来源未提供的字段不输出。",
            "total_count：来源目标总数；returned_count：本次实际写入的目标数；truncated：true 表示因长度或数量预算未返回全部目标。点数 / 总点数读取来源总数；已返回点数 / 点集已裁减 / 点集概况按简单数组格式的容量统计，未必等于详细目标 JSON 的容量。",
            "目标坐标、目标 ID、目标速度、目标类别、目标为友方：当前已选择目标对应的数据，不是第一个候选目标。显示器使用其当前选择；扫描雷达和网络控制器使用所属网络选择，未选择或对应信息不存在时为空。",
            "已连接：是否能解析到雷达网络；雷达数量 / 显示器数量 / 武器数量：该网络中对应端点的数量。设备独立工作时可有点集，但未必有网络或已选目标。",
            "运行中：雷达是否运行；探测范围：当前探测范围，格；当前角度：扫描角，度；扫角速度：度 / tick；输入转速：本体可用转速，RPM。",
            "点集概况返回 total_count、returned_count、truncated 和 format；format 为 \"points_array\"，表示其容量统计按简单坐标数组格式计算。"
          ]
        },
        {
          "heading": "点坐标数组",
          "paragraphs": [
            "在自动读取中只勾选“点坐标数组”，输出可直接送到桥接器地图模式或 AFN 雷达。坐标为世界 x,y,z，不需要另写转换语法。"
          ],
          "code": "[[128,64,-32],[160,70,-20]]"
        },
        {
          "heading": "地图 JSON",
          "paragraphs": [
            "地图 JSON 包含 points 以及 total_count、returned_count、truncated。可直接显示在桥接器地图或 AFN 雷达，也能作为寻呼机地图消息。多选其他读数时，先用信道输出语法提取地图字段，不要把整份多选外壳当点集。"
          ],
          "code": "{\"points\":[{\"position\":[128,64,-32]},{\"position\":[160,70,-20]}],\"total_count\":2,\"returned_count\":2,\"truncated\":false}"
        },
        {
          "heading": "详细目标与裁减",
          "paragraphs": [
            "“详细目标”另选，输出 tracks 数组。每项包含 id、position、velocity，以及能够提供的 category、scanned_time、entity_type、friendly、synthetic；未知字段省略。不要把详细目标外壳直接当地图格式。",
            "只采样所选项，点集快照最多每 5 tick 更新并共享。点数不组装几何 JSON。信道容量不足时按完整点/完整目标裁减；不会截断 JSON 文本。独立“已返回点数／点集已裁减”以点坐标数组为准，其他格式看自身元信息。"
          ],
          "code": "{\"tracks\":[{\"id\":\"contact_id\",\"position\":[128,64,-32],\"velocity\":[0,0,0],\"category\":\"PLAYER\",\"friendly\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "详细目标 JSON：字段与提取示例",
          "paragraphs": [
            "示例中只展示一条候选。id 使用字符串且不应自行编造；它不是频段板频率、物品注册名、玩家名称或列表序号。下面演示性 ID 必须换成实际读数。",
            "仅勾选“详细目标”时，${$.tracks[0].id} 取返回列表第一项的 ID；[0] 从 0 开始。列表按 ID 稳定排序，不代表最近、最危险或当前锁定；truncated=true 时列表不是全部目标。"
          ],
          "code": "{\"tracks\":[{\"position\":[128,64,-32],\"id\":\"f3b1a6a0-1dbd-4d59-9bd0-0d27bb230f79\",\"velocity\":[0.2,0,0],\"category\":\"PLAYER\",\"friendly\":false,\"synthetic\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        }
      ]
    },
    {
      "name": "天空雷达",
      "group": "机械动力：雷达",
      "description": "读取该设备的报告点集，保留干扰造成的偏移与合成目标；不是绕过雷达重新扫描世界。另可读取范围、扫角、输入 RPM、雷达碟数量、组装状态与手动朝向状态。",
      "example": "[[128,64,-32],[160,70,-20]]",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "点坐标数组：[[x,y,z],...]，每组三个数字为一个世界坐标；只含位置，不含名称或目标 ID。地图 JSON：{\"points\":[{\"position\":[x,y,z]}],...}，位置同样是世界坐标。",
            "详细目标：{\"tracks\":[...],...}，每项 id 是真实目标标识，position 是世界坐标 [x,y,z]。velocity 是速度 [vx,vy,vz]，单位格 / tick；category 是原生目标类别；scanned_time 是原生扫描游戏刻；entity_type 是原生实体类型信息；friendly 是友方标记；synthetic 是合成目标标记。来源未提供的字段不输出。",
            "total_count：来源目标总数；returned_count：本次实际写入的目标数；truncated：true 表示因长度或数量预算未返回全部目标。点数 / 总点数读取来源总数；已返回点数 / 点集已裁减 / 点集概况按简单数组格式的容量统计，未必等于详细目标 JSON 的容量。",
            "目标坐标、目标 ID、目标速度、目标类别、目标为友方：当前已选择目标对应的数据，不是第一个候选目标。显示器使用其当前选择；扫描雷达和网络控制器使用所属网络选择，未选择或对应信息不存在时为空。",
            "已连接：是否能解析到雷达网络；雷达数量 / 显示器数量 / 武器数量：该网络中对应端点的数量。设备独立工作时可有点集，但未必有网络或已选目标。",
            "运行中：当前运行状态；探测范围：探测范围，格；当前角度：扫描角，度；扫角速度：度 / tick；输入转速：RPM；雷达碟数量：结构中的碟数；已组装：结构是否组装；手动朝向：是否用手动角度覆盖轴驱动。",
            "点集概况返回 total_count、returned_count、truncated 和 format；format 为 \"points_array\"，表示其容量统计按简单坐标数组格式计算。"
          ]
        },
        {
          "heading": "点坐标数组",
          "paragraphs": [
            "在自动读取中只勾选“点坐标数组”，输出可直接送到桥接器地图模式或 AFN 雷达。坐标为世界 x,y,z，不需要另写转换语法。"
          ],
          "code": "[[128,64,-32],[160,70,-20]]"
        },
        {
          "heading": "地图 JSON",
          "paragraphs": [
            "地图 JSON 包含 points 以及 total_count、returned_count、truncated。可直接显示在桥接器地图或 AFN 雷达，也能作为寻呼机地图消息。多选其他读数时，先用信道输出语法提取地图字段，不要把整份多选外壳当点集。"
          ],
          "code": "{\"points\":[{\"position\":[128,64,-32]},{\"position\":[160,70,-20]}],\"total_count\":2,\"returned_count\":2,\"truncated\":false}"
        },
        {
          "heading": "详细目标与裁减",
          "paragraphs": [
            "“详细目标”另选，输出 tracks 数组。每项包含 id、position、velocity，以及能够提供的 category、scanned_time、entity_type、friendly、synthetic；未知字段省略。不要把详细目标外壳直接当地图格式。",
            "只采样所选项，点集快照最多每 5 tick 更新并共享。点数不组装几何 JSON。信道容量不足时按完整点/完整目标裁减；不会截断 JSON 文本。独立“已返回点数／点集已裁减”以点坐标数组为准，其他格式看自身元信息。"
          ],
          "code": "{\"tracks\":[{\"id\":\"contact_id\",\"position\":[128,64,-32],\"velocity\":[0,0,0],\"category\":\"PLAYER\",\"friendly\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "详细目标 JSON：字段与提取示例",
          "paragraphs": [
            "示例中只展示一条候选。id 使用字符串且不应自行编造；它不是频段板频率、物品注册名、玩家名称或列表序号。下面演示性 ID 必须换成实际读数。",
            "仅勾选“详细目标”时，${$.tracks[0].id} 取返回列表第一项的 ID；[0] 从 0 开始。列表按 ID 稳定排序，不代表最近、最危险或当前锁定；truncated=true 时列表不是全部目标。"
          ],
          "code": "{\"tracks\":[{\"position\":[128,64,-32],\"id\":\"f3b1a6a0-1dbd-4d59-9bd0-0d27bb230f79\",\"velocity\":[0.2,0,0],\"category\":\"PLAYER\",\"friendly\":false,\"synthetic\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        }
      ]
    },
    {
      "name": "声呐轴承",
      "group": "机械动力：雷达",
      "description": "读取该设备的报告点集，保留干扰造成的偏移与合成目标；不是绕过雷达重新扫描世界。另可读取范围、扫角、输入 RPM、传感器数量、组装与结构有效性。",
      "example": "[[128,64,-32],[160,70,-20]]",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "点坐标数组：[[x,y,z],...]，每组三个数字为一个世界坐标；只含位置，不含名称或目标 ID。地图 JSON：{\"points\":[{\"position\":[x,y,z]}],...}，位置同样是世界坐标。",
            "详细目标：{\"tracks\":[...],...}，每项 id 是真实目标标识，position 是世界坐标 [x,y,z]。velocity 是速度 [vx,vy,vz]，单位格 / tick；category 是原生目标类别；scanned_time 是原生扫描游戏刻；entity_type 是原生实体类型信息；friendly 是友方标记；synthetic 是合成目标标记。来源未提供的字段不输出。",
            "total_count：来源目标总数；returned_count：本次实际写入的目标数；truncated：true 表示因长度或数量预算未返回全部目标。点数 / 总点数读取来源总数；已返回点数 / 点集已裁减 / 点集概况按简单数组格式的容量统计，未必等于详细目标 JSON 的容量。",
            "目标坐标、目标 ID、目标速度、目标类别、目标为友方：当前已选择目标对应的数据，不是第一个候选目标。显示器使用其当前选择；扫描雷达和网络控制器使用所属网络选择，未选择或对应信息不存在时为空。",
            "已连接：是否能解析到雷达网络；雷达数量 / 显示器数量 / 武器数量：该网络中对应端点的数量。设备独立工作时可有点集，但未必有网络或已选目标。",
            "运行中：声呐是否运行；探测范围：探测范围，格；当前角度：扫描角，度；扫角速度：度 / tick；输入转速：RPM；传感器数量：识别到的声呐传感器数；已组装：是否组装；结构有效：本体结构校验结果。",
            "点集概况返回 total_count、returned_count、truncated 和 format；format 为 \"points_array\"，表示其容量统计按简单坐标数组格式计算。"
          ]
        },
        {
          "heading": "点坐标数组",
          "paragraphs": [
            "在自动读取中只勾选“点坐标数组”，输出可直接送到桥接器地图模式或 AFN 雷达。坐标为世界 x,y,z，不需要另写转换语法。"
          ],
          "code": "[[128,64,-32],[160,70,-20]]"
        },
        {
          "heading": "地图 JSON",
          "paragraphs": [
            "地图 JSON 包含 points 以及 total_count、returned_count、truncated。可直接显示在桥接器地图或 AFN 雷达，也能作为寻呼机地图消息。多选其他读数时，先用信道输出语法提取地图字段，不要把整份多选外壳当点集。"
          ],
          "code": "{\"points\":[{\"position\":[128,64,-32]},{\"position\":[160,70,-20]}],\"total_count\":2,\"returned_count\":2,\"truncated\":false}"
        },
        {
          "heading": "详细目标与裁减",
          "paragraphs": [
            "“详细目标”另选，输出 tracks 数组。每项包含 id、position、velocity，以及能够提供的 category、scanned_time、entity_type、friendly、synthetic；未知字段省略。不要把详细目标外壳直接当地图格式。",
            "只采样所选项，点集快照最多每 5 tick 更新并共享。点数不组装几何 JSON。信道容量不足时按完整点/完整目标裁减；不会截断 JSON 文本。独立“已返回点数／点集已裁减”以点坐标数组为准，其他格式看自身元信息。"
          ],
          "code": "{\"tracks\":[{\"id\":\"contact_id\",\"position\":[128,64,-32],\"velocity\":[0,0,0],\"category\":\"PLAYER\",\"friendly\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "详细目标 JSON：字段与提取示例",
          "paragraphs": [
            "示例中只展示一条候选。id 使用字符串且不应自行编造；它不是频段板频率、物品注册名、玩家名称或列表序号。下面演示性 ID 必须换成实际读数。",
            "仅勾选“详细目标”时，${$.tracks[0].id} 取返回列表第一项的 ID；[0] 从 0 开始。列表按 ID 稳定排序，不代表最近、最危险或当前锁定；truncated=true 时列表不是全部目标。"
          ],
          "code": "{\"tracks\":[{\"position\":[128,64,-32],\"id\":\"f3b1a6a0-1dbd-4d59-9bd0-0d27bb230f79\",\"velocity\":[0.2,0,0],\"category\":\"PLAYER\",\"friendly\":false,\"synthetic\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        }
      ]
    },
    {
      "name": "雷达显示器",
      "group": "机械动力：雷达",
      "description": "读取实际显示缓存的融合点集、当前目标、连接状态及所连设备数量。多方块显示器自动读取控制块；显示缓存与原始雷达报告可能不同。",
      "example": "{\"points\":[{\"position\":[128,64,-32]}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "点坐标数组：[[x,y,z],...]，每组三个数字为一个世界坐标；只含位置，不含名称或目标 ID。地图 JSON：{\"points\":[{\"position\":[x,y,z]}],...}，位置同样是世界坐标。",
            "详细目标：{\"tracks\":[...],...}，每项 id 是真实目标标识，position 是世界坐标 [x,y,z]。velocity 是速度 [vx,vy,vz]，单位格 / tick；category 是原生目标类别；scanned_time 是原生扫描游戏刻；entity_type 是原生实体类型信息；friendly 是友方标记；synthetic 是合成目标标记。来源未提供的字段不输出。",
            "total_count：来源目标总数；returned_count：本次实际写入的目标数；truncated：true 表示因长度或数量预算未返回全部目标。点数 / 总点数读取来源总数；已返回点数 / 点集已裁减 / 点集概况按简单数组格式的容量统计，未必等于详细目标 JSON 的容量。",
            "目标坐标、目标 ID、目标速度、目标类别、目标为友方：当前已选择目标对应的数据，不是第一个候选目标。显示器使用其当前选择；扫描雷达和网络控制器使用所属网络选择，未选择或对应信息不存在时为空。",
            "已连接：是否能解析到雷达网络；雷达数量 / 显示器数量 / 武器数量：该网络中对应端点的数量。设备独立工作时可有点集，但未必有网络或已选目标。",
            "运行、探测范围：来自显示器当前雷达显示状态；多方块显示器自动使用其控制块。显示点集采用显示缓存，可能与扫描设备原始报告不同。",
            "点集概况返回 total_count、returned_count、truncated 和 format；format 为 \"points_array\"，表示其容量统计按简单坐标数组格式计算。"
          ]
        },
        {
          "heading": "点坐标数组",
          "paragraphs": [
            "在自动读取中只勾选“点坐标数组”，输出可直接送到桥接器地图模式或 AFN 雷达。坐标为世界 x,y,z，不需要另写转换语法。"
          ],
          "code": "[[128,64,-32],[160,70,-20]]"
        },
        {
          "heading": "地图 JSON",
          "paragraphs": [
            "地图 JSON 包含 points 以及 total_count、returned_count、truncated。可直接显示在桥接器地图或 AFN 雷达，也能作为寻呼机地图消息。多选其他读数时，先用信道输出语法提取地图字段，不要把整份多选外壳当点集。"
          ],
          "code": "{\"points\":[{\"position\":[128,64,-32]},{\"position\":[160,70,-20]}],\"total_count\":2,\"returned_count\":2,\"truncated\":false}"
        },
        {
          "heading": "详细目标与裁减",
          "paragraphs": [
            "“详细目标”另选，输出 tracks 数组。每项包含 id、position、velocity，以及能够提供的 category、scanned_time、entity_type、friendly、synthetic；未知字段省略。不要把详细目标外壳直接当地图格式。",
            "只采样所选项，点集快照最多每 5 tick 更新并共享。点数不组装几何 JSON。信道容量不足时按完整点/完整目标裁减；不会截断 JSON 文本。独立“已返回点数／点集已裁减”以点坐标数组为准，其他格式看自身元信息。"
          ],
          "code": "{\"tracks\":[{\"id\":\"contact_id\",\"position\":[128,64,-32],\"velocity\":[0,0,0],\"category\":\"PLAYER\",\"friendly\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "详细目标 JSON：字段与提取示例",
          "paragraphs": [
            "示例中只展示一条候选。id 使用字符串且不应自行编造；它不是频段板频率、物品注册名、玩家名称或列表序号。下面演示性 ID 必须换成实际读数。",
            "仅勾选“详细目标”时，${$.tracks[0].id} 取返回列表第一项的 ID；[0] 从 0 开始。列表按 ID 稳定排序，不代表最近、最危险或当前锁定；truncated=true 时列表不是全部目标。"
          ],
          "code": "{\"tracks\":[{\"position\":[128,64,-32],\"id\":\"f3b1a6a0-1dbd-4d59-9bd0-0d27bb230f79\",\"velocity\":[0.2,0,0],\"category\":\"PLAYER\",\"friendly\":false,\"synthetic\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "实战：从当前锁定目标取得 ID",
          "paragraphs": [
            "1. 先让雷达正常探测，并在雷达显示器上选中一个目标；把读取用信箱贴到这个显示器或所属网络控制器。",
            "2. 打开信箱“自动读取”，只勾选“目标 ID”。预览应是一串实际目标标识；空值表示没有可读取的已选目标，不能用玩家名代替。",
            "3. 把该信箱的信号发送到接收信箱，并让接收信箱自动输出到要控制的网络控制器或雷达显示器。输出语法填写下例，将纯 ID 包装成选择指令。",
            "4. 激活发送端。接收端所属网络必须仍能找到这个真实目标，否则拒绝选择；成功后由雷达原生火控追踪，是否射击由目标过滤器决定。选择影响整个目标网络。"
          ],
          "code": "{\"target_id\":\"${$[0]}\"}"
        },
        {
          "heading": "实战：从候选列表选一条目标",
          "paragraphs": [
            "把读取用信箱改为只选“详细目标”，查看 tracks 数组，按 position、category 等信息确认所需目标。若只是测试第一条，可在接收信箱输出语法中使用下例。",
            "此处 tracks[0] 仅为返回的第一项，不是最近目标或锁定目标；更换 [0] 为所需索引，或者把确认后的实际 id 填入指令。点坐标数组和地图 JSON 没有 id，不能从这两种输出中读取 target_id。",
            "若多选读取项，会增加以翻译名为键的外层 JSON，原来的 $.tracks 路径不再位于根部。多选键受运行端语言影响，以预览为准；本案例先单选以避免层级混淆。"
          ],
          "code": "{\"target_id\":\"${$.tracks[0].id}\"}"
        },
        {
          "heading": "示例",
          "code": "{\"points\":[{\"position\":[128,64,-32]}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        }
      ]
    },
    {
      "name": "网络控制器",
      "group": "机械动力：雷达",
      "description": "读取所连雷达的报告点集、当前目标与是否自动选敌，以及雷达、显示器与武器数量。目标还可单独读取坐标、ID、速度、类别与友方标记；不存在的目标或元信息为空。",
      "example": "contact_id",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "点坐标数组：[[x,y,z],...]，每组三个数字为一个世界坐标；只含位置，不含名称或目标 ID。地图 JSON：{\"points\":[{\"position\":[x,y,z]}],...}，位置同样是世界坐标。",
            "详细目标：{\"tracks\":[...],...}，每项 id 是真实目标标识，position 是世界坐标 [x,y,z]。velocity 是速度 [vx,vy,vz]，单位格 / tick；category 是原生目标类别；scanned_time 是原生扫描游戏刻；entity_type 是原生实体类型信息；friendly 是友方标记；synthetic 是合成目标标记。来源未提供的字段不输出。",
            "total_count：来源目标总数；returned_count：本次实际写入的目标数；truncated：true 表示因长度或数量预算未返回全部目标。点数 / 总点数读取来源总数；已返回点数 / 点集已裁减 / 点集概况按简单数组格式的容量统计，未必等于详细目标 JSON 的容量。",
            "目标坐标、目标 ID、目标速度、目标类别、目标为友方：当前已选择目标对应的数据，不是第一个候选目标。显示器使用其当前选择；扫描雷达和网络控制器使用所属网络选择，未选择或对应信息不存在时为空。",
            "已连接：是否能解析到雷达网络；雷达数量 / 显示器数量 / 武器数量：该网络中对应端点的数量。设备独立工作时可有点集，但未必有网络或已选目标。",
            "目标为自动选择：当前目标是否由原生自动选敌机制选择，true / false；不是 auto_target 过滤器开关本身。点集是所连雷达的融合报告，保留原生干扰及合成目标。",
            "点集概况返回 total_count、returned_count、truncated 和 format；format 为 \"points_array\"，表示其容量统计按简单坐标数组格式计算。"
          ]
        },
        {
          "heading": "点坐标数组",
          "paragraphs": [
            "在自动读取中只勾选“点坐标数组”，输出可直接送到桥接器地图模式或 AFN 雷达。坐标为世界 x,y,z，不需要另写转换语法。"
          ],
          "code": "[[128,64,-32],[160,70,-20]]"
        },
        {
          "heading": "地图 JSON",
          "paragraphs": [
            "地图 JSON 包含 points 以及 total_count、returned_count、truncated。可直接显示在桥接器地图或 AFN 雷达，也能作为寻呼机地图消息。多选其他读数时，先用信道输出语法提取地图字段，不要把整份多选外壳当点集。"
          ],
          "code": "{\"points\":[{\"position\":[128,64,-32]},{\"position\":[160,70,-20]}],\"total_count\":2,\"returned_count\":2,\"truncated\":false}"
        },
        {
          "heading": "详细目标与裁减",
          "paragraphs": [
            "“详细目标”另选，输出 tracks 数组。每项包含 id、position、velocity，以及能够提供的 category、scanned_time、entity_type、friendly、synthetic；未知字段省略。不要把详细目标外壳直接当地图格式。",
            "只采样所选项，点集快照最多每 5 tick 更新并共享。点数不组装几何 JSON。信道容量不足时按完整点/完整目标裁减；不会截断 JSON 文本。独立“已返回点数／点集已裁减”以点坐标数组为准，其他格式看自身元信息。"
          ],
          "code": "{\"tracks\":[{\"id\":\"contact_id\",\"position\":[128,64,-32],\"velocity\":[0,0,0],\"category\":\"PLAYER\",\"friendly\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "详细目标 JSON：字段与提取示例",
          "paragraphs": [
            "示例中只展示一条候选。id 使用字符串且不应自行编造；它不是频段板频率、物品注册名、玩家名称或列表序号。下面演示性 ID 必须换成实际读数。",
            "仅勾选“详细目标”时，${$.tracks[0].id} 取返回列表第一项的 ID；[0] 从 0 开始。列表按 ID 稳定排序，不代表最近、最危险或当前锁定；truncated=true 时列表不是全部目标。"
          ],
          "code": "{\"tracks\":[{\"position\":[128,64,-32],\"id\":\"f3b1a6a0-1dbd-4d59-9bd0-0d27bb230f79\",\"velocity\":[0.2,0,0],\"category\":\"PLAYER\",\"friendly\":false,\"synthetic\":false}],\"total_count\":1,\"returned_count\":1,\"truncated\":false}"
        },
        {
          "heading": "实战：从当前锁定目标取得 ID",
          "paragraphs": [
            "1. 先让雷达正常探测，并在雷达显示器上选中一个目标；把读取用信箱贴到这个显示器或所属网络控制器。",
            "2. 打开信箱“自动读取”，只勾选“目标 ID”。预览应是一串实际目标标识；空值表示没有可读取的已选目标，不能用玩家名代替。",
            "3. 把该信箱的信号发送到接收信箱，并让接收信箱自动输出到要控制的网络控制器或雷达显示器。输出语法填写下例，将纯 ID 包装成选择指令。",
            "4. 激活发送端。接收端所属网络必须仍能找到这个真实目标，否则拒绝选择；成功后由雷达原生火控追踪，是否射击由目标过滤器决定。选择影响整个目标网络。"
          ],
          "code": "{\"target_id\":\"${$[0]}\"}"
        },
        {
          "heading": "实战：从候选列表选一条目标",
          "paragraphs": [
            "把读取用信箱改为只选“详细目标”，查看 tracks 数组，按 position、category 等信息确认所需目标。若只是测试第一条，可在接收信箱输出语法中使用下例。",
            "此处 tracks[0] 仅为返回的第一项，不是最近目标或锁定目标；更换 [0] 为所需索引，或者把确认后的实际 id 填入指令。点坐标数组和地图 JSON 没有 id，不能从这两种输出中读取 target_id。",
            "若多选读取项，会增加以翻译名为键的外层 JSON，原来的 $.tracks 路径不再位于根部。多选键受运行端语言影响，以预览为准；本案例先单选以避免层级混淆。"
          ],
          "code": "{\"target_id\":\"${$.tracks[0].id}\"}"
        }
      ]
    },
    {
      "name": "自动偏航控制器",
      "group": "机械动力：雷达",
      "description": "当前运行、输入 RPM、目标／请求角度、最小／最大角度、是否到位／对准、是否受到限位约束及网络连接数量。角度单位为度。",
      "example": "90",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "请求角度：控制器收到的角度请求；目标角度：按控制器与设备允许范围约束后的命令角。单位均为度，偏航会归一化；两项都不是炮口当前实际角，也不是保证命中的补偿量。",
            "已到达角度：原生单轴到位判断；已对准：原生单轴对准条件；最小角度 / 最大角度：当前用户限位；受到限位约束：请求是否被限位，均按原生设备规则。",
            "运行中：控制器是否运行；输入转速：可用动力转速 RPM；已连接及雷达 / 显示器 / 武器数量：所属网络连接与端点数量。俯仰及 T 型设备另可读交战距离，单位格。",
            "这些控制器不提供“目标 ID”或“详细目标”读取项，请在网络控制器、显示器或扫描设备上读取。无弹道解时仍可能直线转向或保留旧角，不能仅凭到位状态判定补偿成功。"
          ]
        },
        {
          "heading": "示例",
          "code": "90"
        }
      ]
    },
    {
      "name": "自动俯仰／T 型俯仰控制器",
      "group": "机械动力：雷达",
      "description": "与自动偏航控制器相同，并可读交战距离。只读实际设备状态，不在信箱内额外求解弹道。",
      "example": "90",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "请求角度：控制器收到的角度请求；目标角度：按控制器与设备允许范围约束后的命令角。单位均为度，偏航会归一化；两项都不是炮口当前实际角，也不是保证命中的补偿量。",
            "已到达角度：原生单轴到位判断；已对准：原生单轴对准条件；最小角度 / 最大角度：当前用户限位；受到限位约束：请求是否被限位，均按原生设备规则。",
            "运行中：控制器是否运行；输入转速：可用动力转速 RPM；已连接及雷达 / 显示器 / 武器数量：所属网络连接与端点数量。俯仰及 T 型设备另可读交战距离，单位格。",
            "这些控制器不提供“目标 ID”或“详细目标”读取项，请在网络控制器、显示器或扫描设备上读取。无弹道解时仍可能直线转向或保留旧角，不能仅凭到位状态判定补偿成功。"
          ]
        },
        {
          "heading": "示例",
          "code": "90"
        }
      ]
    },
    {
      "name": "开火控制器",
      "group": "机械动力：雷达",
      "description": "读取是否激活、是否射击。该状态由原生火控负责。",
      "example": "false",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "射击中：本体是否处于发射状态；已激活：当前 powered 开火请求。它们是状态值，不是射击次数或自动火控的永久许可；本体会管理超时和续期。"
          ]
        },
        {
          "heading": "示例",
          "code": "false"
        }
      ]
    },
    {
      "name": "定向干扰器",
      "group": "机械动力：雷达",
      "description": "读取开启／放电状态、当前与目标水平角／俯仰角、选中的辐射源与其坐标、连接状态和干扰档案。未选目标时对应读数为空。",
      "example": "false",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "干扰器已开启：是否允许工作；干扰器放电中：当前是否实际放电。干扰器当前水平角 / 当前俯仰角是实际角度；干扰器目标水平角 / 目标俯仰角是设定角，单位均为度。",
            "选中辐射源：当前选择的原生辐射源标识；辐射源坐标：可用的世界坐标 x,y,z 文本，不是 JSON 数组；干扰器已连接：是否接入反辐射网络。无对应对象时为空。",
            "干扰状态：原生 Profile[...] 记录文本，不是 JSON，也不是单一状态枚举。其字段如下；要直接判断开关或放电，优先勾选对应布尔读数。",
            "jammerRpm：干扰器输入转速绝对值，RPM；powerFraction：相对满功率转速的功率比例，0～1；fullPowerRpm：原生配置中达到满功率的转速，RPM。",
            "alignmentDegrees：与目标方向的夹角，0～180 度；alignmentFactor：由夹角产生的对准系数，0～1，越接近目标方向越高。",
            "clusterSize：分担干扰效果的群组规模；stackingFactor：群组分摊系数；effectivenessFactor：原生效果系数。它们是原生算法的运行结果，不是 AFN 可写参数。",
            "outerStrength：基础 / 引导干扰强度；directionalStrength：定向干扰强度；severeStrength：强干扰强度；severeProgress：进入强干扰区间的进度。均为原生归一化结果，不等于 0～15 红石强度。"
          ],
          "code": "Profile[jammerRpm=128.0, powerFraction=1.0, fullPowerRpm=128.0, alignmentDegrees=0.0, alignmentFactor=1.0, clusterSize=1, stackingFactor=1.0, effectivenessFactor=1.0, outerStrength=1.0, directionalStrength=1.0, severeStrength=1.0, severeProgress=1.0]"
        },
        {
          "heading": "示例",
          "code": "false"
        }
      ]
    },
    {
      "name": "雷达警报接收器",
      "group": "机械动力：雷达",
      "description": "读取告警强度、威胁数量与详细告警。包含辐射源、雷达类型、方位、信号强度、锁定／交战／友方等可用信息；这是告警列表，不是普通实体坐标点集。",
      "example": "15",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "告警强度：0～15 的红石告警值；威胁数量：原生告警来源数；详细告警：contacts 数组与 total_count、returned_count、truncated。后三项分别为总数、已返回数、是否截断。",
            "contacts[].source_id：辐射源标识；radar_position：可用的世界坐标 [x,y,z]；radar_type：雷达类型标识；bearing：方位角，度；signal_strength：原生信号强度。",
            "lock_capable：来源是否具有锁定能力；within_radar_range：是否在其雷达范围内；exact_locked：是否精确锁定本接收器；engaged：是否处于交战状态；friendly：是否友方。状态字段为 true / false；来源未提供的字段不出现。",
            "source_id 是告警辐射源标识，不能直接当作普通探测点的 target_id 使用。此项是告警数据，不是普通点坐标数组。"
          ]
        },
        {
          "heading": "示例",
          "code": "15"
        }
      ]
    },
    {
      "name": "识别应答器",
      "group": "机械动力：雷达",
      "description": "读取所在 Sable 结构的显示名称与身份是否登记；不输出识别码。设备必须处于已加载结构。",
      "example": "airship",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "读数说明",
          "paragraphs": [
            "结构名称：所在已加载 Sable 结构的显示名称；已登记身份：是否具有原生身份登记，true / false。不提供识别码读取；结构不可用时读数为空。"
          ]
        },
        {
          "heading": "示例",
          "code": "airship"
        }
      ]
    }
  ],
  "write": [
    {
      "name": "辉光管",
      "group": "机械动力",
      "description": "显示单列文本或数字。",
      "example": "转速 128 RPM",
      "sections": [
        {
          "heading": "内容说明",
          "paragraphs": [
            "内容为直接显示的文字或数字，不使用翻牌显示器的 [w=...] 等分段标记。"
          ]
        },
        {
          "heading": "示例",
          "code": "转速 128 RPM"
        }
      ]
    },
    {
      "name": "翻牌显示器",
      "group": "机械动力",
      "description": "支持多行文字、逐行颜色、发光、手写行与分段布局；显示器需要正常运转。宽度按字符格数计算，中文通常占两格。",
      "example": "[green]运行正常\n[glow]前往码头\n{ [w=4,cycle=numeric] 03 | [w=12,right]铜锭 | [w=6] 剩余 }",
      "sections": [
        {
          "heading": "格式字段说明",
          "paragraphs": [
            "一行一个文本行。行首 [颜色] 设置该行染料色，如 [red] / [红色]；[default] 恢复默认色。[glow] / [noglow] 开关发光；[manual] / [auto] 设置手写 / 自动行。省略这些标记保留该行原设置。",
            "{ 分段 | 分段 } 将同一行划成若干段；每段前的 [w=N] 指定 1～128 个字符格，省略按段内字符数确定，中文显示通常占两格。right 右对齐；wide 使用宽字符格；gap 在段尾留间距；single 把整段作为单个翻牌区段。",
            "cycle：翻牌字符轮，默认 alphabet；numeric 数字，pixel 像素图形，arrival_time 到站时间，fluid_units 流体单位，shortened_numbers 缩写数字，instant 即时文字。也可直接写 [numeric]。宽度、字符轮和实际文本应互相匹配。"
          ],
          "code": "[green]{ [w=10,cycle=pixel] ██████▒▒▒▒ | [w=4,right] 60% }\n[red]警告：轴承过热\n[glow]运行中\n{ [w=4,cycle=numeric] 03 | [w=12,right]铜锭 | [w=6] 剩余 }"
        },
        {
          "heading": "示例",
          "code": "[green]运行正常\n[glow]前往码头\n{ [w=4,cycle=numeric] 03 | [w=12,right]铜锭 | [w=6] 剩余 }"
        }
      ]
    },
    {
      "name": "告示牌",
      "group": "原版",
      "description": "通过显示目标写入 4 行文字，每行最多 15 个字符。",
      "example": "仓库\n铜锭\n128\n充足",
      "sections": [
        {
          "heading": "内容说明",
          "paragraphs": [
            "按换行分成最多 4 行，由原版显示目标写入；每行最多 15 字符，过长内容受本体限制。"
          ]
        },
        {
          "heading": "示例",
          "code": "仓库\n铜锭\n128\n充足"
        }
      ]
    },
    {
      "name": "讲台",
      "group": "原版",
      "description": "将内容写入书页；长文本由显示目标分页。",
      "example": "到站通知\n下一站：工厂",
      "sections": [
        {
          "heading": "内容说明",
          "paragraphs": [
            "内容为写入书页的文字；换行保留，超出单页的内容由显示目标分页，不需要 page 等 JSON 字段。"
          ]
        },
        {
          "heading": "示例",
          "code": "到站通知\n下一站：工厂"
        }
      ]
    },
    {
      "name": "显示连接器",
      "group": "机械动力",
      "description": "作为信箱与显示目标之间的中转；连接器也可把其他来源的内容写入信箱。",
      "example": "把显示连接器贴在信箱上，再指向辉光管或翻牌显示器。",
      "sections": [
        {
          "heading": "内容说明",
          "paragraphs": [
            "贴附面决定读取来源，指向端决定显示目标；信箱内容作为文字传递。目标自身的容量、行数与工作条件仍有效。"
          ]
        },
        {
          "heading": "示例",
          "code": "把显示连接器贴在信箱上，再指向辉光管或翻牌显示器。"
        }
      ]
    },
    {
      "name": "仪表板",
      "group": "创意传动",
      "description": "多个可编辑页面，每页按格显示自动输出内容。",
      "example": "库存 128",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "内容说明",
          "paragraphs": [
            "内容为写入当前目标页面的显示文字；页面与格位沿用仪表板本体配置，不把信道文本当作页面配置 JSON。"
          ]
        },
        {
          "heading": "示例",
          "code": "库存 128"
        }
      ]
    },
    {
      "name": "仓储发报机",
      "group": "机械动力",
      "description": "设置一个明确的物流网络名：新名称建立网络，已有名称连接到该网络。读取时的“未命名网络”只是占位文本，不会让新网络自动合并。",
      "example": "{\"network\":\"工厂主网\"}",
      "fields": "network",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "network：物流网络名称，文本。新名称建立网络，已有名称连接到对应网络；它改变物流连接，并非只改显示标签。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"network\":\"工厂主网\"}"
        }
      ]
    },
    {
      "name": "仓储链接站",
      "group": "机械动力",
      "description": "将当前链接站迁移到指定名称的物流网络；同一名称对应同一网络。这会改变该节点的物流连接，不只是修改显示标签。",
      "example": "{\"network\":\"工厂主网\"}",
      "fields": "network",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "network：迁入的物流网络名称，文本。相同名称指向同一网络；未提供字段不会自动迁移。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"network\":\"工厂主网\"}"
        }
      ]
    },
    {
      "name": "物流蛙港",
      "group": "机械动力",
      "description": "address=收件地址（0–25 字）。",
      "example": "{\"address\":\"东侧仓库\"}",
      "fields": "address（0–25 字）",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "address：包裹收件地址，0～25 字符；空字符串清空地址。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"address\":\"东侧仓库\"}"
        }
      ]
    },
    {
      "name": "邮筒（全部颜色）",
      "group": "机械动力",
      "description": "address=邮箱地址（0–25 字）。",
      "example": "{\"address\":\"东侧仓库\"}",
      "fields": "address（0–25 字）",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "address：邮筒收件地址，0～25 字符；空字符串清空地址。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"address\":\"东侧仓库\"}"
        }
      ]
    },
    {
      "name": "打包机",
      "group": "机械动力",
      "description": "按物品清单请求打包。支持存量 JSON、Map 与宽松名称写法，例如 {苹果:4}；名称必须能唯一识别。缺货时默认整单拒绝，allow_partial=true 允许部分打包；一次最多 256 项，每项 1–4096，合计不超过 65536。",
      "example": "{\"items\":[{\"id\":\"minecraft:apple\",\"count\":4}],\"address\":\"东侧仓库\",\"allow_partial\":false}",
      "fields": "items、address、allow_partial",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "items：请求清单数组；每个条目的 id 是物品注册名，count 是请求数量，整数 1～4096。一次最多 256 项，总数不超过 65536。也可直接写 {苹果:4} 这样的“物品名:数量”Map。",
            "address：该次请求的包裹地址，最多 25 字符；省略或留空时保留打包机的告示牌 / 电脑地址，不清空原地址。",
            "allow_partial：true 库存不足时允许部分打包；省略或 false 要求整单满足。物品不存在或无法唯一识别时拒绝请求，不执行上次清单。"
          ],
          "code": "{\"items\":[{\"id\":\"minecraft:apple\",\"count\":4}],\"address\":\"东侧仓库\",\"allow_partial\":false}"
        }
      ]
    },
    {
      "name": "黄铜漏斗 / 黄铜传送带漏斗",
      "group": "机械动力",
      "description": "amount=每次操作的最大数量（1–64，另受过滤槽上限影响）；mode 决定语义：at_most=最多取/放这么多（不足也执行）、exact=必须正好这么多（不足则不动）；JSON 里 mode 也可写序号 0/1。",
      "example": "{\"amount\":16,\"mode\":\"exact\"}",
      "fields": "amount（1–64）、mode（at_most / exact）",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "amount：每次操作的物品数量，整数 1～64，还受过滤槽允许的最大数量限制。",
            "mode：at_most（0）最多取放 amount 个，数量不足仍执行；exact（1）必须恰好 amount 个，不足则等待。省略任一字段保留该项原值。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"amount\":16,\"mode\":\"exact\"}"
        }
      ]
    },
    {
      "name": "黄铜隧道",
      "group": "机械动力",
      "description": "mode=物品分配模式：split=均分、forced_split=强制均分、round_robin=轮询、forced_round_robin=强制轮询、prefer_nearest=就近、randomize=随机、synchronize=同步；JSON 可写 0–6。",
      "example": "{\"mode\":\"round_robin\"}",
      "fields": "mode",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "mode：split（0）均分；forced_split（1）强制均分；round_robin（2）轮询；forced_round_robin（3）强制轮询；prefer_nearest（4）优先最近出口；randomize（5）随机；synchronize（6）同步分配。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"mode\":\"round_robin\"}"
        }
      ]
    },
    {
      "name": "弹射置物台",
      "group": "机械动力",
      "description": "修改弹射目标或操作数量，每个脉冲只能写其中一项。目标必须位于穿过置物台的单条水平轴线上，并满足 Create 的最大弹射距离和高度限制；stack_size 可另发 {\"stack_size\":8}。",
      "example": "{\"target_pos\":[120,64,-30]}",
      "fields": "target_pos（世界坐标）或 stack_size（0–64）",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "target_pos：弹射落点的世界整数坐标 [x,y,z]，不是相对坐标。须满足本体的单条水平轴线、距离和高度限制。",
            "stack_size：自动弹射所需数量，整数 0～64；0 对应本体的 *，任意非空数量即可，不是必须凑满一组。target_pos 与 stack_size 每次只能写一项；省略项保持原值。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"target_pos\":[120,64,-30]}"
        }
      ]
    },
    {
      "name": "转速控制器",
      "group": "机械动力",
      "description": "speed=目标转速：正数按朝向正转、负数反转，绝对值 0–256；0 停转。",
      "example": "{\"speed\":128}",
      "fields": "speed（−256–256）",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "speed：目标转速，整数 −256～256 RPM；正负号表示相对设备朝向的正反转，0 停转。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"speed\":128}"
        }
      ]
    },
    {
      "name": "创造马达",
      "group": "机械动力",
      "description": "speed=生成转速：正数按朝向输出、负数反转，绝对值 0–256；0 停转。反向且不超过当前网络速度时会被拒绝（unsafe_direction）。",
      "example": "{\"speed\":64}",
      "fields": "speed（−256–256）",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "speed：生成的转速，整数 −256～256 RPM；正负号表示相对设备朝向的正反转，0 停转。反向接入现有动力网络仍须通过本体的安全检查。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"speed\":64}"
        }
      ]
    },
    {
      "name": "蒸汽引擎",
      "group": "机械动力",
      "description": "direction=旋转方向：clockwise=顺时针（cw）、counter_clockwise=逆时针（ccw）；JSON 可写 0/1。",
      "example": "{\"direction\":\"clockwise\"}",
      "fields": "direction",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "direction：clockwise（0）顺时针，counter_clockwise（1）逆时针；相对本体朝向判断。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"direction\":\"clockwise\"}"
        }
      ]
    },
    {
      "name": "风车轴承",
      "group": "机械动力",
      "description": "rotation_direction=风车转向：clockwise=顺时针（cw/正转）、counter_clockwise=逆时针（ccw/反转）；JSON 可写 0/1。",
      "example": "{\"rotation_direction\":\"counter_clockwise\"}",
      "fields": "rotation_direction",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "rotation_direction：clockwise（0）顺时针，counter_clockwise（1）逆时针；改变风车旋转方向。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"rotation_direction\":\"counter_clockwise\"}"
        }
      ]
    },
    {
      "name": "动力轴承",
      "group": "机械动力",
      "description": "movement_mode=停止时结构的处理方式：rotate_place=总是方块化、rotate_place_returned=回到接近初始角度才方块化、rotate_never_place=仅被摧毁后才方块化；JSON 可写 0/1/2。",
      "example": "{\"movement_mode\":\"rotate_place_returned\"}",
      "fields": "movement_mode",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "movement_mode：rotate_place（0）停止时总是方块化；rotate_place_returned（1）接近初始角度才方块化；rotate_never_place（2）不自动方块化。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"movement_mode\":\"rotate_place_returned\"}"
        }
      ]
    },
    {
      "name": "发条轴承",
      "group": "机械动力",
      "description": "mode=表盘模式：hour_first=时针优先、minute_first=分针优先、hour_first_24=24 小时制时针；JSON 可写 0/1/2。",
      "example": "{\"mode\":\"hour_first_24\"}",
      "fields": "mode",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "mode：hour_first（0）时针优先；minute_first（1）分针优先；hour_first_24（2）24 小时制时针。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"mode\":\"hour_first_24\"}"
        }
      ]
    },
    {
      "name": "动力臂",
      "group": "机械动力",
      "description": "动态修改取放位置与选择顺序。提交某侧字段会替换该侧目标，空列表清除；搬运中变更会排队，空手后应用。",
      "example": "{\"take_positions\":[[1,0,0]],\"deposit_positions_absolute\":[[120,64,-30]]}",
      "fields": "mode、take_positions、deposit_positions、take_positions_absolute、deposit_positions_absolute",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "mode：round_robin 轮流取放；forced_round_robin 强制按轮次等待；prefer_first 优先列表前面的可用目标。",
            "take_positions：拿取目标，相对动力臂的整数坐标数组，例如 [[1,0,0],[2,0,0]]；deposit_positions：放置目标，使用同样的相对坐标格式。",
            "take_positions_absolute：拿取目标的世界整数坐标数组；deposit_positions_absolute：放置目标的世界整数坐标数组。每侧使用相对或绝对字段之一，不同时写同一侧的两种字段。",
            "每侧提交列表会替换该侧全部目标，[] 清空该侧；未提交的侧保持原样。每侧最多 64 点，目标须已加载、在动力臂范围内且允许原生取放；搬运中变更在空手后生效。"
          ]
        },
        {
          "heading": "坐标与目标规则",
          "paragraphs": [
            "take_positions 和 deposit_positions 使用相对动力臂的坐标；带 _absolute 后缀的字段使用世界绝对坐标。每侧最多 64 个目标，目标须在动力臂范围内、区块已加载且可被 Create 取放。mode 支持 round_robin、forced_round_robin、prefer_first。"
          ],
          "code": "{\"take_positions\":[[1,0,0]],\"deposit_positions_absolute\":[[120,64,-30]]}"
        },
        {
          "heading": "实战：追着地图坐标放置",
          "paragraphs": [
            "地图终端发出 x,y,z，信箱接收后自动输出到动力臂。下列语法只改放置点，保留拿取位置。"
          ],
          "code": "{\"deposit_positions_absolute\":[[${$[0]},${$[1]},${$[2]}]]}"
        }
      ]
    },
    {
      "name": "动力锯",
      "group": "机械动力",
      "description": "按配方结果物品筛选切割配方。支持完整注册名、简写路径或唯一的本地化名称；不是配方 ID。输入和配方条件仍须满足，minecraft:air 清除筛选。",
      "example": "{\"result\":\"橡木木板\"}",
      "fields": "result",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "result：目标配方的结果物品，支持完整注册名、简写路径或唯一物品名称，如“橡木木板”；不是配方注册名。minecraft:air 清除筛选。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"result\":\"橡木木板\"}"
        }
      ]
    },
    {
      "name": "工作盆",
      "group": "机械动力",
      "description": "按结果物品筛选工作盆配方，连同上方加工设备使用的配方一起受影响。支持注册名、路径或唯一物品名称；原料、流体、热量等条件仍须满足。只产流体的配方可用 Create 识别的对应装液容器筛选；minecraft:air 清除。",
      "example": "{\"result\":\"create:brass_ingot\"}",
      "fields": "result",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "result：目标配方的结果物品，支持注册名、路径或唯一物品名称；不是配方注册名。只产流体的配方可使用本体认可的对应装液容器；minecraft:air 清除。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"result\":\"create:brass_ingot\"}"
        }
      ]
    },
    {
      "name": "黏性动力活塞",
      "group": "机械动力",
      "description": "movement_mode=停止时结构的处理方式：move_place=总是方块化、move_place_returned=回到初始位置才方块化、move_never_place=仅被摧毁后才方块化；JSON 可写 0/1/2。",
      "example": "{\"movement_mode\":\"move_place_returned\"}",
      "fields": "movement_mode",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "movement_mode：move_place（0）停止时总是方块化；move_place_returned（1）回到初始位置才方块化；move_never_place（2）不自动方块化。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"movement_mode\":\"move_place_returned\"}"
        }
      ]
    },
    {
      "name": "矿车装配站",
      "group": "机械动力",
      "description": "movement_mode=矿车运动模式：rotate=始终面朝前进方向、rotate_paused=矿车转向时机器停止工作、rotation_locked=旋转锁定；JSON 可写 0/1/2。",
      "example": "{\"movement_mode\":\"rotation_locked\"}",
      "fields": "movement_mode",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "movement_mode：rotate（0）机器随矿车转向；rotate_paused（1）转向时暂停机器；rotation_locked（2）锁定机器朝向。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"movement_mode\":\"rotation_locked\"}"
        }
      ]
    },
    {
      "name": "动力压路机",
      "group": "机械动力",
      "description": "mode 选择 tunnel_pave、straight_fill 或 wide_fill。material 使用可放置完整方块的注册 ID；空串或 minecraft:air 清除材料筛选。实际铺路仍需结构库存中有材料，非法方块会被拒绝。",
      "example": "{\"mode\":\"wide_fill\",\"material\":\"minecraft:gravel\"}",
      "fields": "mode、material",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "mode：tunnel_pave（0）清理方块并铺路；straight_fill（1）竖直填充下方；wide_fill（2）按坡度填充下方。",
            "material：铺路材料的物品注册名，必须为本体允许的可放置完整方块；空字符串或 minecraft:air 清除材料筛选。结构仍须携带实际材料；省略字段保留对应配置。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"mode\":\"wide_fill\",\"material\":\"minecraft:gravel\"}"
        }
      ]
    },
    {
      "name": "黄铜中继器",
      "group": "机械动力",
      "description": "delay=中继延迟（tick，2–72000）；可调中继器、脉冲延长器、脉冲中继器共用。",
      "example": "{\"delay\":100}",
      "fields": "delay（2–72000 tick）",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "delay：延时，整数 2～72000 tick；20 tick 约 1 秒。可调中继器、脉冲延长器、脉冲中继器共用此字段。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"delay\":100}"
        }
      ]
    },
    {
      "name": "阀门手轮",
      "group": "机械动力",
      "description": "angle=阀门手轮转角（度，-180–180）。",
      "example": "{\"angle\":90}",
      "fields": "angle（−180–180°）",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "angle：目标转角，整数 −180～180 度；正负号控制相反方向。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"angle\":90}"
        }
      ]
    },
    {
      "name": "可编程齿轮箱",
      "group": "机械动力",
      "description": "远程替换程序。可用每行或分号分隔的简写，也可写 steps JSON；指令为旋转、驱动、延迟、等待、停止，方向支持正向/反向/快进/快退。至多 5 步，末尾自动补的停止也计一步；旋转 1–360°、驱动 1–128、延迟 1–600 tick。写入停止旧程序，不会自动启动；另给红石脉冲。",
      "example": "旋转 90 正向; 延迟 20; 停止",
      "fields": "steps",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "steps：完整程序列表，可写指令字符串或指令对象数组；提交后替换旧程序并停止运行，需另给红石脉冲启动。至多 5 步，自动补的停止也计一步。",
            "steps[].instruction：指令。rotate / 旋转按角度驱动；drive / 驱动按距离驱动；delay / 延迟等待指定时长；await / 等待红石信号；stop / 停止结束程序。",
            "steps[].value：旋转时为 1～360 度，驱动时为 1～128 格，延迟时为 1～600 tick。省略时分别为 90、5、10。等待和停止不填写 value。",
            "steps[].direction：forward 正向、back 反向、fast_forward 快进、fast_back 快退；省略为 forward。仅旋转、驱动填写方向；延迟、等待、停止不填写。"
          ],
          "code": "{\"steps\":[{\"instruction\":\"rotate\",\"value\":90,\"direction\":\"forward\"},{\"instruction\":\"delay\",\"value\":20},{\"instruction\":\"stop\"}]}"
        },
        {
          "heading": "示例",
          "code": "旋转 90 正向; 延迟 20; 停止"
        }
      ]
    },
    {
      "name": "铭牌（全部颜色）",
      "group": "航空学",
      "description": "name=铭牌文本（任意颜色铭牌共用，最多 32 字符，可含换行）；text_color=文字颜色（英文色名或 0–15 序号）；glow=是否发光（true/false）。",
      "example": "{\"name\":\"东侧仓库\",\"text_color\":\"yellow\",\"glow\":true}",
      "fields": "name、text_color、glow",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "name：铭牌文字，最多 32 字符，允许换行。",
            "text_color：原版文字色名或 0～15 的对应颜色序号，如 yellow；不是任意 RGB 值。",
            "glow：true 文字发光，false 普通文字。省略任一字段保留该项原值。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"name\":\"东侧仓库\",\"text_color\":\"yellow\",\"glow\":true}"
        }
      ]
    },
    {
      "name": "便携式引擎",
      "group": "航空学",
      "description": "rotation_direction=输出方向：clockwise=顺时针（cw/正转）、counter_clockwise=逆时针（ccw/反转）；JSON 可写 0/1。",
      "example": "{\"rotation_direction\":\"clockwise\"}",
      "fields": "rotation_direction",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "rotation_direction：clockwise（0）顺时针，counter_clockwise（1）逆时针，改变相对引擎朝向的输出方向。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"rotation_direction\":\"clockwise\"}"
        }
      ]
    },
    {
      "name": "万向节传感器",
      "group": "航空学",
      "description": "axis=万向节设定角（度，-90–90）。",
      "example": "{\"axis\":30}",
      "fields": "axis（−90–90°）",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "axis：万向节设定角，整数 −90～90 度。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"axis\":30}"
        }
      ]
    },
    {
      "name": "光学传感器",
      "group": "航空学",
      "description": "range=光学传感器探测距离（1–4096）。",
      "example": "{\"range\":128}",
      "fields": "range（1–4096）",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "range：探测距离上限，整数 1～4096 格。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"range\":128}"
        }
      ]
    },
    {
      "name": "激光指示器",
      "group": "航空学",
      "description": "max_range=激光最大射程（格，1 到服务器上限）。",
      "example": "{\"max_range\":64}",
      "fields": "max_range（1 至服务器上限）",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "max_range：激光最大射程，整数格数，最小 1，最大受服务器配置限制。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"max_range\":64}"
        }
      ]
    },
    {
      "name": "速度传感器",
      "group": "航空学",
      "description": "max_speed=速度传感器量程（1–50）。",
      "example": "{\"max_speed\":20}",
      "fields": "max_speed（1–50）",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "max_speed：传感器速度量程，整数 1～50，沿用本体界面的速度单位。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"max_speed\":20}"
        }
      ]
    },
    {
      "name": "舵轮",
      "group": "航空学",
      "description": "max_angle=舵轮最大转角（度，1–360）。",
      "example": "{\"max_angle\":90}",
      "fields": "max_angle（1–360°）",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "max_angle：允许的最大转角，整数 1～360 度。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"max_angle\":90}"
        }
      ]
    },
    {
      "name": "扭力弹簧",
      "group": "航空学",
      "description": "max_angle=扭力弹簧最大行程角度（度，1–360）。",
      "example": "{\"max_angle\":180}",
      "fields": "max_angle（1–360°）",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "max_angle：允许的最大行程角，整数 1～360 度。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"max_angle\":180}"
        }
      ]
    },
    {
      "name": "旋转轴承",
      "group": "航空学",
      "description": "locking=锁定模式：locked_always=始终锁定、locked_default=默认锁定、unlocked_default=默认解锁、unlocked_always=始终解锁；JSON 可写 0–3。",
      "example": "{\"locking\":\"locked_default\"}",
      "fields": "locking",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "locking：locked_always（0）始终锁定；locked_default（1）默认锁定；unlocked_default（2）默认解锁；unlocked_always（3）始终解锁。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"locking\":\"locked_default\"}"
        }
      ]
    },
    {
      "name": "红石累加器",
      "group": "航空学",
      "description": "delay=累加延时（tick，2–72000）。",
      "example": "{\"delay\":20}",
      "fields": "delay（2–72000 tick）",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "delay：累加延时，整数 2～72000 tick；20 tick 约 1 秒。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"delay\":20}"
        }
      ]
    },
    {
      "name": "红石电感器",
      "group": "航空学",
      "description": "delay=电感延时（tick，0–72000）。",
      "example": "{\"delay\":20}",
      "fields": "delay（0–72000 tick）",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "delay：电感延时，整数 0～72000 tick；20 tick 约 1 秒。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"delay\":20}"
        }
      ]
    },
    {
      "name": "螺旋桨轴承",
      "group": "航空学",
      "description": "thrust_direction=推力方向：right_handed=右手系（rh）、left_handed=左手系（lh）；JSON 可写 0/1。",
      "example": "{\"thrust_direction\":\"right_handed\"}",
      "fields": "thrust_direction",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "thrust_direction：right_handed（0）右手系推力，left_handed（1）左手系推力。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"thrust_direction\":\"right_handed\"}"
        }
      ]
    },
    {
      "name": "陀螺螺旋桨轴承",
      "group": "航空学",
      "description": "thrust_direction=推力方向：right_handed=右手系（rh）、left_handed=左手系（lh）；JSON 可写 0/1。",
      "example": "{\"thrust_direction\":\"left_handed\"}",
      "fields": "thrust_direction",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "thrust_direction：right_handed（0）右手系推力，left_handed（1）左手系推力。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"thrust_direction\":\"left_handed\"}"
        }
      ]
    },
    {
      "name": "热空气燃烧室",
      "group": "航空学",
      "description": "hot_air_amount=热空气产量（5 到服务器上限，默认 500），越大升力越强。",
      "example": "{\"hot_air_amount\":100}",
      "fields": "hot_air_amount（5 至服务器上限）",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "hot_air_amount：热空气产量设定，整数，至少 5，最大受服务器配置限制；不是燃料余量。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"hot_air_amount\":100}"
        }
      ]
    },
    {
      "name": "蒸汽排放口",
      "group": "航空学",
      "description": "steam_amount=蒸汽排放上限（0 到服务器上限，默认按装置）。",
      "example": "{\"steam_amount\":100}",
      "fields": "steam_amount（受服务器上限限制）",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "steam_amount：蒸汽排放量设定，整数，从 0 到本体服务器上限；不是储存的蒸汽总量。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"steam_amount\":100}"
        }
      ]
    },
    {
      "name": "车轮支座",
      "group": "航空学",
      "description": "suspension_strength=顶面减震/悬挂强度（5–180）。",
      "example": "{\"suspension_strength\":30}",
      "fields": "suspension_strength（5–180）",
      "mod": "Create: Aeronautics",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "suspension_strength：悬挂强度，整数 5～180，对应顶面设置。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"suspension_strength\":30}"
        }
      ]
    },
    {
      "name": "固定式火炮底座",
      "group": "机械动力：火炮",
      "description": "将信箱的自动输出指向固定式火炮底座，或在底座上配置隐藏式信道终端，即可远程调角、瞄准与发射。自动瞄准和发射需要火炮已组装运行。",
      "example": "{\"target\":[100,64,200],\"fire_count\":3}",
      "fields": "yaw（水平角 −45～45°）、pitch（俯仰角 −45～45°）、fire_count（发射数 0～64）、target（世界整数坐标 [x,y,z]，覆盖 yaw/pitch）",
      "mod": "Create Big Cannons",
      "anchor": "fixed-cannon-mount",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "yaw：底座水平角，整数 −45～45 度；pitch：俯仰角，整数 −45～45 度。这是底座局部设定，不是世界方位角。",
            "target：世界整数坐标 [x,y,z]，据此进行直线朝向计算，并覆盖同条消息的 yaw/pitch；不包含雷达的提前量、阻力与下坠补偿。需补偿时把目标输入雷达自动俯仰控制器。",
            "fire_count：此次请求发射数量，整数 0～64；0 取消等待中的 AFN 发射请求，省略不新增发射请求。发射仍需组装火炮、弹药、到位等本体条件。"
          ]
        },
        {
          "heading": "直接设置角度与发射数",
          "paragraphs": [
            "简写按“水平角,俯仰角,发射数”排列：20 只改水平角，20,-10 同时改两角，20,-10,3 转向后发射 3 发。空位保留原角度，例如 20,,3、,-10,3；,,3 按当前角度发射 3 发。JSON 可写完整或部分字段。"
          ],
          "code": "{\"yaw\":20,\"pitch\":-10,\"fire_count\":3}"
        },
        {
          "heading": "按世界坐标自动瞄准",
          "code": "{\"target\":[100,64,200],\"fire_count\":3}",
          "paragraphs": [
            "target 是世界绝对整数坐标 [x,y,z]，存在时忽略 yaw 和 pitch。系统计算火炮到目标的直线方向，转向完成后再发射；不填 fire_count 则只转向。",
            "Sable 结构按当前姿态换算世界坐标，实际发射前重新计算目标方向。角度按底座的 1° 精度取整；超出转角范围不执行，也不补偿重力或其他弹道偏移。"
          ]
        },
        {
          "heading": "射击队列",
          "paragraphs": [
            "请求按顺序执行，每座炮最多待发 64 发，遵守原生冷却与弹药条件；缺弹时等待，请求最多保留 1200 tick（正常为 60 秒）。只改角度或目标、不追加射击时，会取消待发请求；单独发送 {\"fire_count\":0} 不取消。原有红石开火控制保持独立。"
          ]
        },
        {
          "heading": "实战：地图终端指定火炮目标",
          "paragraphs": [
            "地图终端发送世界坐标 x,y,z。同频信箱接收后，在信道输出语法中组装目标与发射数，并自动输出到已组装的固定式火炮底座。下例用 round 将可能带小数的坐标取整。"
          ],
          "code": "{\"target\":[${round($[0],0)},${round($[1],0)},${round($[2],0)}],\"fire_count\":1}",
          "after": [
            "每次收到并输出这条内容，就追加一次瞄准后的射击请求。只想调整朝向时，移除 fire_count 字段。"
          ]
        }
      ]
    },
    {
      "name": "电动马达",
      "group": "创想附加",
      "description": "远程设置目标转速与方向。转速范围跟随本体配置，默认 −256–256 RPM；供电与红石启停仍由电动马达本身决定。",
      "example": "{\"speed\":64,\"direction\":\"reverse\"}",
      "fields": "speed（整数 RPM）、direction（forward / reverse）",
      "mod": "Create Crafts & Additions",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "speed：整数转速 RPM，范围由当前马达的本体配置决定；负数请求反向，0 请求停止。",
            "direction：forward 正向、reverse 反向；与 speed 同时使用时明确指定最终方向。省略项保留原值，仍需电力及正常动力网络。"
          ]
        },
        {
          "heading": "最简写法",
          "paragraphs": [
            "直接发送整数：64 正转、-64 反转、0 停转。也可写 64,1 或「转速 64 方向 反转」。"
          ],
          "code": "-64"
        },
        {
          "heading": "同时设置转速与方向",
          "paragraphs": [
            "speed 是有符号转速；提供 direction 时由它决定方向，speed 只取绝对值。forward/正转 对应 0，reverse/反转 对应 1；也接受 顺时针/逆时针、cw/ccw，方向以马达自身设置为准。"
          ],
          "code": "{\"speed\":64,\"direction\":\"reverse\"}"
        },
        {
          "heading": "只改一个字段",
          "paragraphs": [
            "JSON 可以只提供 speed 或 direction。只改方向时保留当前转速大小；下例把现有转速切换为反转。"
          ],
          "code": "{\"direction\":\"reverse\"}"
        }
      ]
    },
    {
      "name": "柴油引擎",
      "group": "柴油动力",
      "description": "改变当前引擎方向；不指定 RPM，燃料与红石停机规则仍有效。",
      "example": "{\"direction\":\"counter_clockwise\"}",
      "fields": "direction（clockwise / counter_clockwise，0 / 1）",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "direction：clockwise（0）顺时针，counter_clockwise（1）逆时针，修改本体的动力输出方向；不改变燃料或强制启动引擎。"
          ]
        },
        {
          "heading": "转向",
          "paragraphs": [
            "裸值可写 0/1、顺时针/逆时针、正转/反转或 cw/ccw。0=clockwise，1=counter_clockwise；方向相对设备本身。"
          ],
          "code": "1"
        },
        {
          "heading": "示例",
          "code": "{\"direction\":\"counter_clockwise\"}"
        }
      ]
    },
    {
      "name": "模块柴油引擎",
      "group": "柴油动力",
      "description": "附着任一成员即可改变整组引擎方向；保留原生结构和停机条件。",
      "example": "{\"direction\":\"counter_clockwise\"}",
      "fields": "direction（clockwise / counter_clockwise，0 / 1）",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "direction：clockwise（0）顺时针，counter_clockwise（1）逆时针，修改本体的动力输出方向；不改变燃料或强制启动引擎。"
          ]
        },
        {
          "heading": "转向",
          "paragraphs": [
            "裸值可写 0/1、顺时针/逆时针、正转/反转或 cw/ccw。0=clockwise，1=counter_clockwise；方向相对设备本身。"
          ],
          "code": "1"
        },
        {
          "heading": "示例",
          "code": "{\"direction\":\"counter_clockwise\"}"
        }
      ]
    },
    {
      "name": "大型柴油引擎",
      "group": "柴油动力",
      "description": "改变同一动力曲轴上连接引擎的方向；仍需正确装配和供油。",
      "example": "{\"direction\":\"counter_clockwise\"}",
      "fields": "direction（clockwise / counter_clockwise，0 / 1）",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "direction：clockwise（0）顺时针，counter_clockwise（1）逆时针，修改本体的动力输出方向；不改变燃料或强制启动引擎。"
          ]
        },
        {
          "heading": "转向",
          "paragraphs": [
            "裸值可写 0/1、顺时针/逆时针、正转/反转或 cw/ccw。0=clockwise，1=counter_clockwise；方向相对设备本身。"
          ],
          "code": "1"
        },
        {
          "heading": "示例",
          "code": "{\"direction\":\"counter_clockwise\"}"
        }
      ]
    },
    {
      "name": "动力曲轴",
      "group": "柴油动力",
      "description": "通过曲轴修改连接的大型柴油引擎方向；空轴没有可配置引擎。",
      "example": "{\"direction\":\"counter_clockwise\"}",
      "fields": "direction（clockwise / counter_clockwise，0 / 1）",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "direction：clockwise（0）顺时针，counter_clockwise（1）逆时针，修改本体的动力输出方向；不改变燃料或强制启动引擎。"
          ]
        },
        {
          "heading": "转向",
          "paragraphs": [
            "裸值可写 0/1、顺时针/逆时针、正转/反转或 cw/ccw。0=clockwise，1=counter_clockwise；方向相对设备本身。"
          ],
          "code": "1"
        },
        {
          "heading": "示例",
          "code": "{\"direction\":\"counter_clockwise\"}"
        }
      ]
    },
    {
      "name": "化学炮塔（放置式化学喷雾器）",
      "group": "柴油动力",
      "description": "设置目标角度、开始或停止持续喷射，或请求单次喷射。只控制可放置方块，仍需流体与动力；转向沿用原生平滑运动。",
      "example": "{\"yaw\":90,\"pitch\":-20,\"spray\":true,\"spray_once\":false}",
      "fields": "yaw（水平角）、pitch（俯仰角）、spray（持续喷射）、spray_once（单次喷射）",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "yaw：目标水平角，十进制角度 −360000～360000，归一到 0～360 度。",
            "pitch：目标俯仰角，十进制角度 −50～11，负值抬头；当前角会逐步追随目标角。",
            "spray：true 持续请求喷射，false 停止持续喷射并清除待喷的单次；实际喷射仍取决于流体和本体条件。",
            "spray_once：true 请求一次喷射，false 不新增单次请求，也不清除既有待喷请求。它不等同于持续喷射；省略字段保留原配置。"
          ]
        },
        {
          "heading": "角度与简写",
          "paragraphs": [
            "yaw 接受 -360000～360000 度并归一到 0～360；pitch 接受 -50～11 度，负值抬头。直接写 90,-20 或 [90,-20] 同时修改两角；裸数值只修改水平角。"
          ],
          "code": "90,-20"
        },
        {
          "heading": "喷射控制",
          "paragraphs": [
            "spray=true 持续喷射，不会仅因信道熄灭复位；spray=false 停止持续喷射并取消待喷的单次。spray_once=true 每条消息请求一次，不等待转向完成。外部红石可能覆盖持续喷射，玩家或实体操控可能接管瞄准。JSON 可以只提供需要修改的字段。"
          ],
          "code": "{\"spray_once\":true}"
        },
        {
          "heading": "示例",
          "code": "{\"yaw\":90,\"pitch\":-20,\"spray\":true,\"spray_once\":false}"
        }
      ]
    },
    {
      "name": "可控燃烧室",
      "group": "柴油动力",
      "description": "burn_rate 为 0～1 阀门开度。实际热量取决于燃料；机械阀门驱动和外部红石仍按本体规则调整或覆盖该值。",
      "example": "{\"burn_rate\":0.5}",
      "fields": "burn_rate（0～1）",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "burn_rate：燃烧速率阀门开度，小数 0～1；0 关闭，1 全开，不是每 tick 固定消耗的燃料量。"
          ]
        },
        {
          "heading": "最简写法",
          "paragraphs": [
            "裸值 0.5 设为一半开度，0 关闭阀门。燃烧速率不是每刻耗油量；不绕过燃料条件。"
          ],
          "code": "0.5"
        },
        {
          "heading": "示例",
          "code": "{\"burn_rate\":0.5}"
        }
      ]
    },
    {
      "name": "抽油机曲柄",
      "group": "柴油动力",
      "description": "设置曲柄尺寸：normal/普通 为 0，large/大型 为 1。仍需满足抽油机原生装配与连接条件。",
      "example": "{\"size\":\"large\"}",
      "fields": "size（normal / large，0 / 1）",
      "mod": "Create Diesel Generators",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "size：normal（0）普通尺寸，large（1）大型尺寸；更改后仍需满足本体结构条件。"
          ]
        },
        {
          "heading": "最简写法",
          "paragraphs": [
            "裸值可写 1、large 或「大型」。"
          ],
          "code": "1"
        },
        {
          "heading": "示例",
          "code": "{\"size\":\"large\"}"
        }
      ]
    },
    {
      "name": "离心式离合器",
      "group": "创意传动",
      "description": "speed_threshold=开始/停止传动的转速阈值（-256–256）；正值时转速达到阈值后耦合，负值时转速低于阈值才耦合。",
      "example": "{\"speed_threshold\":64}",
      "fields": "speed_threshold（−256–256）",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "speed_threshold：耦合转速阈值，整数 −256～256 RPM；正值在达到阈值后耦合，负值在低于相应阈值时耦合。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"speed_threshold\":64}"
        }
      ]
    },
    {
      "name": "飞轮离合器",
      "group": "创意传动",
      "description": "direction=允许传动的旋转方向（clockwise/counter_clockwise，也可写 0/1）。",
      "example": "{\"direction\":\"clockwise\"}",
      "fields": "direction",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "direction：允许传动的转向；clockwise（0）顺时针，counter_clockwise（1）逆时针。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"direction\":\"clockwise\"}"
        }
      ]
    },
    {
      "name": "动能电池",
      "group": "创意传动",
      "description": "direction=充放电方向（clockwise/counter_clockwise，也可写 0/1）。",
      "example": "{\"direction\":\"counter_clockwise\"}",
      "fields": "direction",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "direction：充放电所用旋转方向；clockwise（0）顺时针，counter_clockwise（1）逆时针，沿用本体充放电规则。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"direction\":\"counter_clockwise\"}"
        }
      ]
    },
    {
      "name": "动能桥",
      "group": "创意传动",
      "description": "stress_multiplier=应力放大档位（0–2048）；每 +10 翻一倍，40 约为 16 倍。",
      "example": "{\"stress_multiplier\":40}",
      "fields": "stress_multiplier（0–2048）",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "stress_multiplier：应力放大档位，整数 0～2048，不是直接倍率；每增加 10 档翻一倍，40 档约 16 倍。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"stress_multiplier\":40}"
        }
      ]
    },
    {
      "name": "过应力离合器",
      "group": "创意传动",
      "description": "delay=过应力后的解耦延迟（tick，1–72000；GUI 以秒/分钟显示）。",
      "example": "{\"delay\":100}",
      "fields": "delay（1–72000 tick）",
      "mod": "Create: Connected",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "delay：过应力后解耦的延时，整数 1～72000 tick；20 tick 约 1 秒。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"delay\":100}"
        }
      ]
    },
    {
      "name": "音符盒",
      "group": "原版",
      "description": "含义：instrument=音色，可选 harp 竖琴、basedrum 底鼓、snare 小军鼓、hat 踩镲、bass 贝斯、flute 长笛、bell 铃铛、guitar 吉他、chime 钟琴、xylophone 木琴、iron_xylophone 铁木琴、cow_bell 牛铃、didgeridoo 迪吉里杜管、bit 芯片、banjo 班卓琴、pling 叮当，以及 zombie/skeleton/creeper/dragon/wither_skeleton/piglin 六种头颅模仿音、custom_head（需上方头颅）；note=音高 0-24（0 最低，24 最高，共 25 个半音）。",
      "example": "{\"instrument\":\"bell\",\"note\":12}",
      "fields": "instrument、note（0–24）",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "instrument：音色名或对应序号。harp 竖琴、basedrum 底鼓、snare 小军鼓、hat 踩镲、bass 贝斯、flute 长笛、bell 铃铛、guitar 吉他、chime 钟琴、xylophone 木琴、iron_xylophone 铁木琴、cow_bell 牛铃、didgeridoo 迪吉里杜管、bit 芯片、banjo 班卓琴、pling 叮当；序号依此为 0～15。",
            "instrument 还支持 zombie（16）僵尸、skeleton（17）骷髅、creeper（18）苦力怕、dragon（19）末影龙、wither_skeleton（20）凋灵骷髅、piglin（21）猪灵、custom_head（22）自定义头颅，后者需上方相应头颅。",
            "note：音高，整数 0～24，共 25 个半音；0 最低，24 最高。省略项保留原值；写配置不是播放脉冲，邻接方块更新也可能按原版规则重置音色。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"instrument\":\"bell\",\"note\":12}"
        }
      ]
    },
    {
      "name": "播音喇叭",
      "group": "网络音乐机",
      "description": "远程设置直播源、名称、范围及播放状态。state=play 播放/继续，stop 停止；source 可写 m3u8 地址或 cnr1/cnr4/cnr16/cgtn 预设。直播没有暂停，stop 会断开连接，之后 play 重新连接。范围 1–256 且受服务器限制；音频内容需客户端能访问。",
      "example": "{\"state\":\"play\",\"source\":\"cnr1\",\"name\":\"工厂广播\",\"range\":64}",
      "fields": "state、source、name、range",
      "mod": "NetMusic",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "state：play（0）开始 / 重新连接广播，stop（1）断开广播；直播没有保留进度的暂停。省略 state 只更新配置，正在广播且配置变化时重新连接。",
            "source：直播音频地址，最长 1024 字符；也支持 cnr1（中国之声）、cnr4（音乐之声）、cnr16（中国交通广播）、cgtn 预设。",
            "name：显示名称，最长 256 字符；播放时不能留空。",
            "range：广播范围，整数 1～256 格，还受服务器本体配置限制。省略 source、name、range 时保留对应配置；客户端须能访问音频地址。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"state\":\"play\",\"source\":\"cnr1\",\"name\":\"工厂广播\",\"range\":64}"
        }
      ]
    },
    {
      "name": "动态过滤器",
      "group": "AFN",
      "description": "先配置接收频率，再装入设备过滤槽；收到信道内容后调整物品匹配与数量规则。支持名称、物品 ID、标签与属性，以及 disj/conj/deny 三种匹配模式。",
      "example": "mode:disj\n苹果\nid:minecraft:bread\ntag:minecraft:logs\n\n限额示例：{苹果:2, minecraft:bread:1}",
      "fields": "mode、names、items、tags、attributes；限额可使用 items/count 与 total",
      "anchor": "dynamic-filter",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "mode：disj（0）满足任一规则放行，conj（1）满足全部规则放行，deny（2）排除匹配规则；未给 mode 时按已保存模式，未设置模式采用 disj。",
            "names：物品名称字符串数组，如 [\"苹果\",\"泥土\"]；items：物品注册名字符串数组，如 [\"minecraft:apple\"]；tags：物品标签字符串数组，如 [\"minecraft:logs\"]。名称与注册名不是同一种字段。",
            "attributes：Create 属性条目数组，使用属性复制页给出的完整对象；每项的 attribute 为原生属性对象，inverted 表示是否反选。属性对象的专属键依属性类型而定，直接复制页面结果，勿凭名称猜测。",
            "限额格式与普通匹配规则分开：items 可写含 id / name 与 count 的对象数组；id 为物品注册名，name 为物品名称，count 为该物品最多通过数量，整数 1～4096。也可用 quota 对象或直接 Map 表达“物品:数量”；最多 32 条。",
            "total：所有限额条目共同的总通过上限，整数 0～65536；省略或 −1 表示不另设总额度。额度按实际通过数量扣减，新规则写入后重置。truncated 是存量读数携带的截断标记，不是过滤规则。",
            "普通 names/items/tags/attributes 与限额 quota / 含 count 的清单不能混在同一个规则文档。空规则不放行；非法新文档保留旧规则。",
            "普通 names / items / tags 各最多 32 条，attributes 最多 32 项，名称最多 64 字符；整份规则最多 4096 字符。"
          ],
          "code": "{\"mode\":\"disj\",\"names\":[\"苹果\"],\"items\":[\"minecraft:bread\"],\"tags\":[\"minecraft:logs\"]}"
        },
        {
          "heading": "物品匹配规则",
          "code": "mode:disj\n苹果\nid:minecraft:bread\ntag:minecraft:logs"
        },
        {
          "heading": "限额通过",
          "paragraphs": [
            "存量 Map 或含 count 的 JSON 进入限额通过，按实际通过数量扣减；重新写入重置额度。"
          ],
          "code": "{苹果:2, minecraft:bread:1}"
        },
        {
          "heading": "使用边界",
          "paragraphs": [
            "手持时不接收，空规则不放行，非法新规则保留旧配置。未配置的输出规则不创建对应求值工作。"
          ]
        },
        {
          "heading": "示例",
          "code": "mode:disj\n苹果\nid:minecraft:bread\ntag:minecraft:logs\n\n限额示例：{苹果:2, minecraft:bread:1}"
        }
      ]
    },
    {
      "name": "姿态稳定器",
      "group": "飞控学",
      "description": "远程设置 P/D、姿态模式、机头朝向与默认启用。最简写法 2,0.5 同时设置 P=2、D=0.5；完整或部分 JSON 均可，未提供的字段保留原值。",
      "example": "{\"p\":2,\"d\":0.5,\"mode\":\"LEVEL_NO_YAW\",\"forward\":\"north\",\"enabled\":true}",
      "fields": "p、d（小数，设备按绝对值处理）、mode、forward、enabled；支持 pd 简写",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "p：比例增益，增大偏差响应；d：微分增益，用于抑制变化和振荡。支持有限小数，负数按设备规则取绝对值。",
            "mode：LEVEL_NO_YAW 保持水平但不锁航向；LEVEL 保持水平并控制航向；HOLD_CURRENT 保持当前姿态。",
            "forward：机头方向，north 北、east 东、south 南、west 西。",
            "enabled：默认启用状态，true 启用、false 禁用；实际状态仍按设备原生开关规则。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"p\":2,\"d\":0.5,\"mode\":\"LEVEL_NO_YAW\",\"forward\":\"north\",\"enabled\":true}"
        }
      ]
    },
    {
      "name": "高度稳定器",
      "group": "飞控学",
      "description": "远程设置高度稳定器的 P/D、模式、预设高度、捕获延迟、步长和默认启用状态。mode 可用 hold_current、hold_preset、minimum_altitude；填写 altitude 时启用预设高度。未提供的字段保留原值。",
      "example": "{\"p\":2,\"d\":0.5,\"mode\":\"hold_preset\",\"altitude\":20}",
      "fields": "p、d、mode、altitude、delay、step、enabled；pd 可简写 p d",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "p / d：比例 / 微分增益，有限小数，按本体规则取绝对值。最简写法 2,0.5 同时设置 P、D。",
            "mode：hold_current 保持当前高度；hold_preset 保持预设高度；minimum_altitude 保持不低于预设高度。",
            "altitude：预设高度，小数，沿用本体高度基准；填写时启用预设高度配置。",
            "delay：捕获当前高度前的延迟，0～3600 秒。step：预设高度调节步长，非负小数。",
            "enabled：默认启用状态，true / false；省略字段保留原值。"
          ],
          "code": "{\"p\":2,\"d\":0.5,\"mode\":\"hold_preset\",\"altitude\":20,\"delay\":0,\"step\":1,\"enabled\":true}"
        },
        {
          "heading": "示例",
          "code": "{\"p\":2,\"d\":0.5,\"mode\":\"hold_preset\",\"altitude\":20}"
        }
      ]
    },
    {
      "name": "距离耦合器",
      "group": "飞控学",
      "description": "修改 P/D、目标距离区间、反选与采样模式。2,0.5 为 P/D 最简写法；range 4 12 同时设置 min/max。未写字段保持原值。",
      "example": "{\"p\":2,\"d\":0.5,\"min\":4,\"max\":12,\"invert\":false,\"mode\":\"AVERAGE\"}",
      "fields": "p、d、min、max、invert、mode、enabled",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "p / d：比例 / 微分增益，有限小数，设备按绝对值处理。",
            "min / max：目标距离区间下限 / 上限，0～128 格；下限不得大于上限。",
            "invert：false 使用区间内距离，true 反选区间；mode：AVERAGE 平均距离，MAX 最大距离，MIN 最小距离。",
            "enabled：默认耦合状态，true / false；红石代理总开关仍按本体规则反转该状态。"
          ],
          "code": "{\"p\":2,\"d\":0.5,\"min\":4,\"max\":12,\"invert\":false,\"mode\":\"AVERAGE\",\"enabled\":true}"
        },
        {
          "heading": "示例",
          "code": "{\"p\":2,\"d\":0.5,\"min\":4,\"max\":12,\"invert\":false,\"mode\":\"AVERAGE\"}"
        }
      ]
    },
    {
      "name": "线速度耦合器",
      "group": "飞控学",
      "description": "设置机体 X/Y/Z 轴的 P/D 增益与正负方向线速度上限。pd 按每轴成对填写 X-P、X-D、Y-P、Y-D、Z-P、Z-D；x/y/z 可分别设置各轴的正负速度上限。负增益和限额会按绝对值处理。",
      "example": "1,0.1,2,0.2,3,0.3",
      "fields": "enabled、px、py、pz、dx、dy、dz、xp、xn、yp、yn、zp、zn",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "enabled：默认耦合状态，true / false。",
            "px、py、pz：机体 X、Y、Z 轴的比例增益；dx、dy、dz：对应三轴的微分增益。均为有限小数，设备按绝对值处理。",
            "xp / xn：X 轴正向 / 负向线速度上限；yp / yn：Y 轴正向 / 负向上限；zp / zn：Z 轴正向 / 负向上限。数值按本体单位填写，负值按绝对值处理。",
            "最简六值顺序为 px,dx,py,dy,pz,dz；例如 1,0.1,2,0.2,3,0.3。JSON 使用实际字段名，未写字段保持现值；x 4 2 只设置 xp=4、xn=2。"
          ],
          "code": "{\"enabled\":true,\"px\":1,\"py\":2,\"pz\":3,\"dx\":0.1,\"dy\":0.2,\"dz\":0.3,\"xp\":4,\"xn\":2,\"yp\":4,\"yn\":2,\"zp\":4,\"zn\":2}"
        },
        {
          "heading": "示例",
          "code": "1,0.1,2,0.2,3,0.3"
        }
      ]
    },
    {
      "name": "角速度耦合器",
      "group": "飞控学",
      "description": "设置机体 X/Y/Z 轴的 P/D 增益与正负方向角速度上限。pd 按每轴成对填写 X-P、X-D、Y-P、Y-D、Z-P、Z-D；x/y/z 可分别设置各轴的正负速度上限。负增益和限额会按绝对值处理。",
      "example": "1,0.1,2,0.2,3,0.3",
      "fields": "enabled、px、py、pz、dx、dy、dz、xp、xn、yp、yn、zp、zn",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "enabled：默认耦合状态，true / false。",
            "px、py、pz：机体 X、Y、Z 轴的比例增益；dx、dy、dz：对应三轴的微分增益。均为有限小数，设备按绝对值处理。",
            "xp / xn：X 轴正向 / 负向角速度上限；yp / yn：Y 轴正向 / 负向上限；zp / zn：Z 轴正向 / 负向上限。数值按本体单位填写，负值按绝对值处理。",
            "最简六值顺序为 px,dx,py,dy,pz,dz；例如 1,0.1,2,0.2,3,0.3。JSON 使用实际字段名，未写字段保持现值；x 4 2 只设置 xp=4、xn=2。"
          ],
          "code": "{\"enabled\":true,\"px\":1,\"py\":2,\"pz\":3,\"dx\":0.1,\"dy\":0.2,\"dz\":0.3,\"xp\":4,\"xn\":2,\"yp\":4,\"yn\":2,\"zp\":4,\"zn\":2}"
        },
        {
          "heading": "示例",
          "code": "1,0.1,2,0.2,3,0.3"
        }
      ]
    },
    {
      "name": "飞行控制终端",
      "group": "飞控学",
      "description": "修改飞行控制终端的灵敏度、方向、三轴 P/D、加速度和角速度上限，以及红石控制的独立 P/D 与角速度。俯仰、偏航、滚转分别用 pitch_pd、yaw_pd、roll_pd 成组简写；redstone_pitch_pd 等设置红石参数，rpd 可一次设置红石三轴 P/D。sensitivity 为 0.01–1，max_aim_angle 为 10–89°；P/D 和加速度为 0–100，角速度为 0–4π；未写字段保持现值。",
      "example": "2,0.4",
      "fields": "enabled、forward、sensitivity、max_aim_angle、pitch_p、pitch_d、yaw_p、yaw_d、roll_p、roll_d、max_pitch_acceleration、max_yaw_acceleration、max_roll_acceleration、max_bank_angle、aggressive_turn_angle、crosshair_distance、max_pitch_velocity、max_yaw_velocity、max_roll_velocity、redstone_pitch_p、redstone_pitch_d、redstone_yaw_p、redstone_yaw_d、redstone_roll_p、redstone_roll_d、redstone_max_pitch_velocity、redstone_max_yaw_velocity、redstone_max_roll_velocity、camera_y_offset、target_y_offset、sync_max_angular_velocity",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "基础与鼠标控制字段",
          "paragraphs": [
            "enabled：默认启用状态，true / false。forward：机头方向，north 北、east 东、south 南、west 西。省略的字段保持当前配置。",
            "sensitivity：鼠标灵敏度，0.01～1；max_aim_angle：最大瞄准角，10～89 度。",
            "pitch_p / pitch_d：俯仰 P / D；yaw_p / yaw_d：偏航 P / D；roll_p / roll_d：滚转 P / D。各值 0～100；P 决定偏差响应，D 抑制变化与振荡。",
            "max_pitch_acceleration：最大俯仰角加速度；max_yaw_acceleration：最大偏航角加速度；max_roll_acceleration：最大滚转角加速度，均为 0～100，按本体控制单位填写。",
            "max_bank_angle：最大倾侧角，0～89 度；aggressive_turn_angle：达到完整压坡的转向角，1～180 度；crosshair_distance：机头准星距离，0～1024 格。",
            "max_pitch_velocity、max_yaw_velocity、max_roll_velocity：俯仰、偏航、滚转最大角速度，分别为 0～4π，使用本体角速度单位，不是 RPM。"
          ]
        },
        {
          "heading": "红石与视角字段",
          "paragraphs": [
            "redstone_pitch_p / redstone_pitch_d：红石俯仰 P / D；redstone_yaw_p / redstone_yaw_d：红石偏航 P / D；redstone_roll_p / redstone_roll_d：红石滚转 P / D。各值 0～100，独立于鼠标控制参数。",
            "redstone_max_pitch_velocity、redstone_max_yaw_velocity、redstone_max_roll_velocity：红石控制对应三轴最大角速度，0～4π，使用本体角速度单位。",
            "camera_y_offset：视角中心的垂直偏移，−16～16；target_y_offset：鼠标目标圆的垂直基准偏移，−0.4～0.4。",
            "sync_max_angular_velocity：true 同步本体的最大角速度设置，false 取消同步；具体联动遵循飞控学原生界面。",
            "最简 2,0.4 修改 redstone_pitch_p、redstone_pitch_d；六值顺序为红石俯仰 P,D、偏航 P,D、滚转 P,D。pitch_pd / yaw_pd / roll_pd 则修改鼠标三轴的各组 P/D，不要混淆。"
          ],
          "code": "{\"redstone_pitch_p\":2,\"redstone_pitch_d\":0.4,\"redstone_yaw_p\":2,\"redstone_yaw_d\":0.4,\"redstone_roll_p\":2,\"redstone_roll_d\":0.4}"
        },
        {
          "heading": "全量 JSON 字段示例",
          "paragraphs": [
            "下列数值仅演示所有键的组织方式，不是推荐调参；可删去不需要改的键，保留当前配置。"
          ],
          "code": "{\"enabled\":true,\"forward\":\"north\",\"sensitivity\":0.5,\"max_aim_angle\":45,\"pitch_p\":2,\"pitch_d\":0.4,\"yaw_p\":2,\"yaw_d\":0.4,\"roll_p\":2,\"roll_d\":0.4,\"max_pitch_acceleration\":10,\"max_yaw_acceleration\":10,\"max_roll_acceleration\":10,\"max_bank_angle\":30,\"aggressive_turn_angle\":45,\"crosshair_distance\":64,\"max_pitch_velocity\":1,\"max_yaw_velocity\":1,\"max_roll_velocity\":1,\"redstone_pitch_p\":2,\"redstone_pitch_d\":0.4,\"redstone_yaw_p\":2,\"redstone_yaw_d\":0.4,\"redstone_roll_p\":2,\"redstone_roll_d\":0.4,\"redstone_max_pitch_velocity\":1,\"redstone_max_yaw_velocity\":1,\"redstone_max_roll_velocity\":1,\"camera_y_offset\":0,\"target_y_offset\":0,\"sync_max_angular_velocity\":false}"
        },
        {
          "heading": "示例",
          "code": "2,0.4"
        }
      ]
    },
    {
      "name": "姿态投影仪",
      "group": "飞控学",
      "description": "修改姿态投影的高度、大小、地平面位置与显示元素。height 范围 0.5–3，scale 为 0.25–4，ground_height 为 −1–1；show_ground/show_axes 控制地平面与机体轴向是否显示。",
      "example": "{\"height\":1.5,\"scale\":1.2,\"ground_height\":0,\"show_ground\":true,\"show_axes\":true}",
      "fields": "height、scale、ground_height、show_ground、show_axes",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "height：投影高度，0.5～3；scale：投影缩放，0.25～4，裸数值默认修改 scale。",
            "ground_height：投影地平面高度，−1～1；show_ground：true 显示地平面，false 隐藏；show_axes：true 显示机体轴向，false 隐藏。省略项保留原值。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"height\":1.5,\"scale\":1.2,\"ground_height\":0,\"show_ground\":true,\"show_axes\":true}"
        }
      ]
    },
    {
      "name": "HUD投影仪",
      "group": "飞控学",
      "description": "修改 HUD 投影高度、前后位置、大小与机头方向。height 范围 0.5–6，depth 为 −1–2，scale 为 0.5–3，forward 支持 north/east/south/west。",
      "example": "{\"height\":2,\"depth\":0.25,\"scale\":1.2,\"forward\":\"north\"}",
      "fields": "height、depth、scale、forward",
      "mod": "Create: Flight Control ≥ 0.8.3",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "height：投影高度，0.5～6；depth：前后偏移，−1～2；scale：投影缩放，0.5～3，裸数值默认修改 scale。",
            "forward：机头方向，north 北、east 东、south 南、west 西。未写字段保持原值。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"height\":2,\"depth\":0.25,\"scale\":1.2,\"forward\":\"north\"}"
        }
      ]
    },
    {
      "name": "自动偏航控制器",
      "group": "机械动力：雷达",
      "description": "修改角度、限位与移动／停止／回零动作；支持裸数值、完整或残缺 JSON。原生传动条件继续有效。",
      "example": "90",
      "mod": "Create: Radar 5.0.3+",
      "fields": "angle、min_angle、max_angle、action",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "angle：目标偏航，小数 −360～360 度；min_angle / max_angle：相对设备中立方向的最小 / 最大限位，−180～180 度。−180～180 表示全周，不是只允许半圈。",
            "action：move（0）移动到 angle，stop（1）停止当前动作，reset（2）回到原生初始朝向；省略动作且给 angle 时执行移动。",
            "未写项保留原值，最终还受原生装配、动力和实际射界限制；stop 或 reset 不是持续禁止自动火控接管。"
          ]
        },
        {
          "heading": "角度、限位与动作",
          "paragraphs": [
            "裸数值设置 angle；JSON 可只改需要的字段。angle 为 -360～360 度；min_angle、max_angle 为 -180～180 度，相对于设备原生的中立方向。设备复核实际射界；action 支持 move、stop、reset（移动、停止、回零）。",
            "stop／reset 影响当前动作；原生自动火控仍可能重新接管。"
          ],
          "code": "{\"angle\":90,\"min_angle\":-180,\"max_angle\":180,\"action\":\"move\"}"
        }
      ]
    },
    {
      "name": "自动俯仰控制器",
      "group": "机械动力：雷达",
      "description": "调整角度与限位，或把原生火控目标切换为世界坐标／已发现的目标 ID。可归还雷达控制。",
      "example": "{\"target\":[128,64,-32],\"mode\":\"aim_only\"}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "angle、min_angle、max_angle、action、target、target_id、mode",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "angle：目标俯仰，小数 −90～90 度；min_angle / max_angle：用户最小 / 最大俯仰，−90～90 度，执行取用户范围与真实炮体射界交集。",
            "action：move（0）移动、stop（1）停止、reset（2）回零；与 angle 配合时只使用 move。",
            "target：世界整数方块坐标 [x,y,z]，原生瞄准该方块中心；小数输入先向零截断。它与 angle 或 target_id 不同时填写。",
            "mode：aim_only（2）原生补偿瞄准但不自动射击，是只给 target 时的默认值；manual_target（1）允许原生条件满足后射击；auto（0）和 release（3）归还原雷达控制。auto / release 不同时给 target；坐标控制需要来源持续激活。",
            "target_id：真实已探测目标的字符串标识。在网络控制器 / 雷达显示器上用信箱“自动读取→目标 ID”取得已选目标，或单选“详细目标”后读取 tracks[i].id。它不是频率、玩家名、坐标或自编编号。",
            "target_id 选择所属网络中的真实目标，影响该网络；必须由该网络仍能识别到，不创建伪造目标。当前仅单独写 JSON target_id，不与 aim_only / manual_target 组合，开火规则沿用网络过滤器。",
            "angle / action 是直接动作，不请求弹道补偿；target 和 target_id 进入雷达原生火控，补偿由雷达负责。未写字段保留原值。"
          ]
        },
        {
          "heading": "角度、限位与动作",
          "paragraphs": [
            "裸数值设置 angle；JSON 可只改需要的字段。angle、min_angle、max_angle 均为 -90～90 度，设备复核实际射界；action 支持 move、stop、reset（移动、停止、回零）。",
            "stop／reset 影响当前动作；原生自动火控仍可能重新接管。"
          ],
          "code": "{\"angle\":45,\"min_angle\":-90,\"max_angle\":90,\"action\":\"move\"}"
        },
        {
          "heading": "世界坐标与射击模式",
          "paragraphs": [
            "target 是世界坐标。只提供坐标默认 aim_only，仅瞄准不射击。mode=manual_target 才允许在原生瞄准、射界、弹药和安全区条件满足时射击。target_id 则选取雷达已发现的目标，不生成伪造雷达目标。",
            "mode=auto 或 release 归还原来的雷达控制，不修改目标过滤器的 auto_target。不要把手动坐标或角度当作自动开火保证。",
            "坐标模式只在来源信道激活且源／目标已加载时维持，失活或卸载即归还原雷达控制。普通角度、限位、过滤器、安全区和身份配置是单次保存，不要求持续信号。"
          ],
          "code": "{\"target\":[128,64,-32],\"mode\":\"aim_only\"}"
        },
        {
          "heading": "实战：指定坐标，由雷达补偿瞄准",
          "paragraphs": [
            "把自动输出接到自动俯仰控制器，先用原生方式完成火炮底座、自动偏航与俯仰控制器的装配和动力连接。发送下例并保持来源信道激活；目标为世界坐标，不是相对炮台。",
            "雷达按当前炮口、弹药与运动状态计算提前量和下坠，再驱动原生控制器；无需 AFN 计算补偿。先用 aim_only 检查瞄准，需要允许射击时改为 manual_target。",
            "未找到有效弹道时原生可能先直线转向，此时不允许该路自动射击；“角度有值”不是有效解证明。停止来源信号或发送 {\"mode\":\"release\"} 归还原控制，不等同于永久停火。"
          ],
          "code": "{\"target\":[128,64,-32],\"mode\":\"aim_only\"}"
        },
        {
          "heading": "实战：按真实目标 ID 追踪",
          "paragraphs": [
            "先在网络控制器或雷达显示器旁用信箱单选“目标 ID”，确认预览非空；接收信箱指向本控制器，输出语法用下例。若读取“详细目标”，则改为 {\"target_id\":\"${$.tracks[0].id}\"} 并自行确定索引。",
            "输入 ID 后雷达沿用真实轨迹及运动预测；不要把静态坐标反复更新当成等价轨迹。没有网络、ID 不在当前网络或目标已消失时拒绝选择。"
          ],
          "code": "{\"target_id\":\"${$[0]}\"}"
        }
      ]
    },
    {
      "name": "T 型俯仰控制器",
      "group": "机械动力：雷达",
      "description": "调整角度与限位，或把原生火控目标切换为世界坐标／已发现的目标 ID。可归还雷达控制。",
      "example": "{\"target\":[128,64,-32],\"mode\":\"aim_only\"}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "angle、min_angle、max_angle、action、target、target_id、mode",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "angle：目标俯仰，小数 −90～90 度；min_angle / max_angle：用户最小 / 最大俯仰，−90～90 度，执行取用户范围与真实炮体射界交集。",
            "action：move（0）移动、stop（1）停止、reset（2）回零；与 angle 配合时只使用 move。",
            "target：世界整数方块坐标 [x,y,z]，原生瞄准该方块中心；小数输入先向零截断。它与 angle 或 target_id 不同时填写。",
            "mode：aim_only（2）原生补偿瞄准但不自动射击，是只给 target 时的默认值；manual_target（1）允许原生条件满足后射击；auto（0）和 release（3）归还原雷达控制。auto / release 不同时给 target；坐标控制需要来源持续激活。",
            "target_id：真实已探测目标的字符串标识。在网络控制器 / 雷达显示器上用信箱“自动读取→目标 ID”取得已选目标，或单选“详细目标”后读取 tracks[i].id。它不是频率、玩家名、坐标或自编编号。",
            "target_id 选择所属网络中的真实目标，影响该网络；必须由该网络仍能识别到，不创建伪造目标。当前仅单独写 JSON target_id，不与 aim_only / manual_target 组合，开火规则沿用网络过滤器。",
            "angle / action 是直接动作，不请求弹道补偿；target 和 target_id 进入雷达原生火控，补偿由雷达负责。未写字段保留原值。"
          ]
        },
        {
          "heading": "角度、限位与动作",
          "paragraphs": [
            "裸数值设置 angle；JSON 可只改需要的字段。angle、min_angle、max_angle 均为 -90～90 度，设备复核实际射界；action 支持 move、stop、reset（移动、停止、回零）。",
            "stop／reset 影响当前动作；原生自动火控仍可能重新接管。"
          ],
          "code": "{\"angle\":45,\"min_angle\":-90,\"max_angle\":90,\"action\":\"move\"}"
        },
        {
          "heading": "世界坐标与射击模式",
          "paragraphs": [
            "target 是世界坐标。只提供坐标默认 aim_only，仅瞄准不射击。mode=manual_target 才允许在原生瞄准、射界、弹药和安全区条件满足时射击。target_id 则选取雷达已发现的目标，不生成伪造雷达目标。",
            "mode=auto 或 release 归还原来的雷达控制，不修改目标过滤器的 auto_target。不要把手动坐标或角度当作自动开火保证。",
            "坐标模式只在来源信道激活且源／目标已加载时维持，失活或卸载即归还原雷达控制。普通角度、限位、过滤器、安全区和身份配置是单次保存，不要求持续信号。"
          ],
          "code": "{\"target\":[128,64,-32],\"mode\":\"aim_only\"}"
        },
        {
          "heading": "实战：指定坐标，由雷达补偿瞄准",
          "paragraphs": [
            "把自动输出接到自动俯仰控制器，先用原生方式完成火炮底座、自动偏航与俯仰控制器的装配和动力连接。发送下例并保持来源信道激活；目标为世界坐标，不是相对炮台。",
            "雷达按当前炮口、弹药与运动状态计算提前量和下坠，再驱动原生控制器；无需 AFN 计算补偿。先用 aim_only 检查瞄准，需要允许射击时改为 manual_target。",
            "未找到有效弹道时原生可能先直线转向，此时不允许该路自动射击；“角度有值”不是有效解证明。停止来源信号或发送 {\"mode\":\"release\"} 归还原控制，不等同于永久停火。"
          ],
          "code": "{\"target\":[128,64,-32],\"mode\":\"aim_only\"}"
        },
        {
          "heading": "实战：按真实目标 ID 追踪",
          "paragraphs": [
            "先在网络控制器或雷达显示器旁用信箱单选“目标 ID”，确认预览非空；接收信箱指向本控制器，输出语法用下例。若读取“详细目标”，则改为 {\"target_id\":\"${$.tracks[0].id}\"} 并自行确定索引。",
            "输入 ID 后雷达沿用真实轨迹及运动预测；不要把静态坐标反复更新当成等价轨迹。没有网络、ID 不在当前网络或目标已消失时拒绝选择。"
          ],
          "code": "{\"target_id\":\"${$[0]}\"}"
        }
      ]
    },
    {
      "name": "网络控制器",
      "group": "机械动力：雷达",
      "description": "远程指定雷达目标、修改实际安装的过滤器和网络安全区。显示器自动转到其控制块与所属网络；不绕过原生火控。",
      "example": "{\"clear_target\":true}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "target_id、clear_target、detect_*、ignore_names、identification_code、target_*、auto_target、line_of_sight、prefer_high_arc、safe_zones、clear_safe_zones",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "target_id：目标字符串 ID，从信箱单选“目标 ID”的结果或单选“详细目标”的 tracks[i].id 获取。前者是当前已选目标，后者是候选列表；不是频率、名称或自编序号。网络控制器 / 显示器可直接接收裸 ID；空字符串清除选择。",
            "clear_target：true 清除当前目标；false 不执行清除。目标选择影响整个所属网络。原生自动选敌仍开启时约 20 tick 后可能重新选择，持续停用自动选敌应设置 auto_target=false。",
            "detect_player：探测玩家；detect_sable：探测 Sable 物理结构；detect_contraption：探测 Create 动态结构；detect_mob：探测敌对生物；detect_projectile：探测弹射物；detect_animal：探测动物；detect_item：探测掉落物。均为 true / false，修改已安装的探测卡。",
            "ignore_names：识别忽略名单，以字符串列表给出要忽略的名称；identification_code：识别码，最长 10 字符。修改已安装的识别卡。",
            "target_player：攻击玩家；target_contraption：攻击原生结构类别；target_mob：攻击敌对生物；target_animal：攻击动物；target_projectile：攻击弹射物。均为 true / false，修改已安装的目标卡，具体类别仍由雷达当前版本决定。",
            "auto_target：true 自动选敌，false 停止自动选敌；line_of_sight：是否使用目标过滤器的视线规则；prefer_high_arc：是否优先高抛弹道。均为 true / false，修改真实目标卡，并不绕过其他原生火控条件。",
            "safe_zones：整体替换安全区列表；每项 from / to 是两端世界整数坐标 [x,y,z]，包含两端方块。条目带 structure 时，其值是已加载 Sable 结构 UUID，from / to 改为该结构存储局部坐标，区域随结构移动。",
            "clear_safe_zones：true 清空安全区；safe_zones=[] 也清空。未写字段保持当前值；所需过滤器未插入时拒绝对应配置写入，不生成卡片。"
          ]
        },
        {
          "heading": "选择或清除目标",
          "paragraphs": [
            "target_id 使用“详细目标”中读出的真实 ID；裸文本也可。空字符串或 clear_target=true 清除选择。自动锁定仍开着时，约 20 tick 后可能重新选敌；长期停止自动选敌需关闭 auto_target。"
          ],
          "code": "{\"clear_target\":true}"
        },
        {
          "heading": "修改真实过滤器",
          "paragraphs": [
            "detect_player、detect_sable、detect_contraption、detect_mob、detect_projectile、detect_animal、detect_item 修改探测卡；ignore_names、identification_code 修改识别卡；target_player、target_contraption、target_mob、target_animal、target_projectile、auto_target、line_of_sight、prefer_high_arc 修改目标卡。",
            "必须先插入对应过滤器；没有对应卡时拒绝写入，不凭空生成物品。JSON 可只带一个或几个字段，其他项保持不变。"
          ],
          "code": "{\"detect_player\":true,\"detect_projectile\":true,\"auto_target\":false}"
        },
        {
          "heading": "替换或清空安全区",
          "paragraphs": [
            "safe_zones 数组整体替换安全区。from/to 是世界方块坐标，包含两端整块；空列表或 clear_safe_zones=true 清空。",
            "若条目带 structure 字段，其值必须是已加载 Sable 结构 UUID，from/to 改为该结构的存储局部坐标，安全区随后随结构移动。"
          ],
          "code": "{\"safe_zones\":[{\"from\":[0,60,0],\"to\":[16,80,16]}]}"
        },
        {
          "heading": "实战：取得真实 ID 再选择目标",
          "paragraphs": [
            "1. 把读取信箱贴到雷达网络控制器或显示器，启用自动读取，只勾选“详细目标”。等待雷达正常工作，预览中应有 tracks 数组。",
            "2. 记录所需条目的 id，例如确认第一项 position 正是所需目标；[0] 只是 ID 排序后的第一条，不代表最近、最危险或已锁定。",
            "3. 另一个信箱接收这份详细目标，自动输出指向要控制的网络控制器 / 显示器，输出语法填下例并激活信号。要控制的网络也必须能识别此 ID，不能只靠坐标创建目标。",
            "4. 雷达选择对应轨迹并使用原生补偿追踪。当前目标也可在读数菜单中单选“目标 ID”，用 {\"target_id\":\"${$[0]}\"} 直接转发；为空时先在显示器上选目标。",
            "手动常量写法如 {\"target_id\":\"f3b1a6a0-1dbd-4d59-9bd0-0d27bb230f79\"}，其中演示 ID 必须替换成自己读到的实际 ID。"
          ],
          "code": "{\"target_id\":\"${$.tracks[0].id}\"}"
        },
        {
          "heading": "安全区 JSON 字段示例",
          "paragraphs": [
            "from / to 的 x、y、z 按世界轴排列，条目不带 structure 时不随飞行结构移动。省略安全区字段保留旧区；提交列表会替换全部，不是追加。"
          ],
          "code": "{\"safe_zones\":[{\"from\":[0,60,0],\"to\":[16,80,16]}]}"
        }
      ]
    },
    {
      "name": "雷达显示器",
      "group": "机械动力：雷达",
      "description": "远程指定雷达目标、修改实际安装的过滤器和网络安全区。显示器自动转到其控制块与所属网络；不绕过原生火控。",
      "example": "{\"clear_target\":true}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "target_id、clear_target、detect_*、ignore_names、identification_code、target_*、auto_target、line_of_sight、prefer_high_arc、safe_zones、clear_safe_zones",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "target_id：目标字符串 ID，从信箱单选“目标 ID”的结果或单选“详细目标”的 tracks[i].id 获取。前者是当前已选目标，后者是候选列表；不是频率、名称或自编序号。网络控制器 / 显示器可直接接收裸 ID；空字符串清除选择。",
            "clear_target：true 清除当前目标；false 不执行清除。目标选择影响整个所属网络。原生自动选敌仍开启时约 20 tick 后可能重新选择，持续停用自动选敌应设置 auto_target=false。",
            "detect_player：探测玩家；detect_sable：探测 Sable 物理结构；detect_contraption：探测 Create 动态结构；detect_mob：探测敌对生物；detect_projectile：探测弹射物；detect_animal：探测动物；detect_item：探测掉落物。均为 true / false，修改已安装的探测卡。",
            "ignore_names：识别忽略名单，以字符串列表给出要忽略的名称；identification_code：识别码，最长 10 字符。修改已安装的识别卡。",
            "target_player：攻击玩家；target_contraption：攻击原生结构类别；target_mob：攻击敌对生物；target_animal：攻击动物；target_projectile：攻击弹射物。均为 true / false，修改已安装的目标卡，具体类别仍由雷达当前版本决定。",
            "auto_target：true 自动选敌，false 停止自动选敌；line_of_sight：是否使用目标过滤器的视线规则；prefer_high_arc：是否优先高抛弹道。均为 true / false，修改真实目标卡，并不绕过其他原生火控条件。",
            "safe_zones：整体替换安全区列表；每项 from / to 是两端世界整数坐标 [x,y,z]，包含两端方块。条目带 structure 时，其值是已加载 Sable 结构 UUID，from / to 改为该结构存储局部坐标，区域随结构移动。",
            "clear_safe_zones：true 清空安全区；safe_zones=[] 也清空。未写字段保持当前值；所需过滤器未插入时拒绝对应配置写入，不生成卡片。"
          ]
        },
        {
          "heading": "选择或清除目标",
          "paragraphs": [
            "target_id 使用“详细目标”中读出的真实 ID；裸文本也可。空字符串或 clear_target=true 清除选择。自动锁定仍开着时，约 20 tick 后可能重新选敌；长期停止自动选敌需关闭 auto_target。"
          ],
          "code": "{\"clear_target\":true}"
        },
        {
          "heading": "修改真实过滤器",
          "paragraphs": [
            "detect_player、detect_sable、detect_contraption、detect_mob、detect_projectile、detect_animal、detect_item 修改探测卡；ignore_names、identification_code 修改识别卡；target_player、target_contraption、target_mob、target_animal、target_projectile、auto_target、line_of_sight、prefer_high_arc 修改目标卡。",
            "必须先插入对应过滤器；没有对应卡时拒绝写入，不凭空生成物品。JSON 可只带一个或几个字段，其他项保持不变。"
          ],
          "code": "{\"detect_player\":true,\"detect_projectile\":true,\"auto_target\":false}"
        },
        {
          "heading": "替换或清空安全区",
          "paragraphs": [
            "safe_zones 数组整体替换安全区。from/to 是世界方块坐标，包含两端整块；空列表或 clear_safe_zones=true 清空。",
            "若条目带 structure 字段，其值必须是已加载 Sable 结构 UUID，from/to 改为该结构的存储局部坐标，安全区随后随结构移动。"
          ],
          "code": "{\"safe_zones\":[{\"from\":[0,60,0],\"to\":[16,80,16]}]}"
        },
        {
          "heading": "实战：取得真实 ID 再选择目标",
          "paragraphs": [
            "1. 把读取信箱贴到雷达网络控制器或显示器，启用自动读取，只勾选“详细目标”。等待雷达正常工作，预览中应有 tracks 数组。",
            "2. 记录所需条目的 id，例如确认第一项 position 正是所需目标；[0] 只是 ID 排序后的第一条，不代表最近、最危险或已锁定。",
            "3. 另一个信箱接收这份详细目标，自动输出指向要控制的网络控制器 / 显示器，输出语法填下例并激活信号。要控制的网络也必须能识别此 ID，不能只靠坐标创建目标。",
            "4. 雷达选择对应轨迹并使用原生补偿追踪。当前目标也可在读数菜单中单选“目标 ID”，用 {\"target_id\":\"${$[0]}\"} 直接转发；为空时先在显示器上选目标。",
            "手动常量写法如 {\"target_id\":\"f3b1a6a0-1dbd-4d59-9bd0-0d27bb230f79\"}，其中演示 ID 必须替换成自己读到的实际 ID。"
          ],
          "code": "{\"target_id\":\"${$.tracks[0].id}\"}"
        },
        {
          "heading": "安全区 JSON 字段示例",
          "paragraphs": [
            "from / to 的 x、y、z 按世界轴排列，条目不带 structure 时不随飞行结构移动。省略安全区字段保留旧区；提交列表会替换全部，不是追加。"
          ],
          "code": "{\"safe_zones\":[{\"from\":[0,60,0],\"to\":[16,80,16]}]}"
        }
      ]
    },
    {
      "name": "天空雷达",
      "group": "机械动力：雷达",
      "description": "裸数值或 yaw 设置手动水平角。resume_rotation=true 恢复传动轴旋转；不要在一条消息中同时要求两个动作。",
      "example": "{\"yaw\":90}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "yaw、resume_rotation",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "yaw：手动水平角，小数 −360～360 度；设置后覆盖原生传动轴的旋转角控制，但不生成动力。",
            "resume_rotation：true 退出手动角度覆盖并恢复轴驱动旋转，false 不执行恢复；不要与 yaw 同条提交。"
          ]
        },
        {
          "heading": "恢复原生旋转",
          "paragraphs": [
            "不创建或改变传动网络的动力。"
          ],
          "code": "{\"resume_rotation\":true}"
        },
        {
          "heading": "示例",
          "code": "{\"yaw\":90}"
        }
      ]
    },
    {
      "name": "定向干扰器",
      "group": "机械动力：雷达",
      "description": "配置目标水平角、俯仰角与开关。仍需旋转动力、红石、充能完成及选中的辐射源才能实际放电。",
      "example": "{\"yaw\":90,\"pitch\":0,\"enabled\":true}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "yaw、pitch、enabled",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "yaw：目标水平角，小数 −360～360 度。",
            "pitch：目标俯仰角，小数 −90～90 度。",
            "enabled：true 允许干扰，false 禁用；启用不代表立即放电，仍需原生动力、红石、充能和辐射源条件。省略项保留原值。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"yaw\":90,\"pitch\":0,\"enabled\":true}"
        }
      ]
    },
    {
      "name": "识别应答器",
      "group": "机械动力：雷达",
      "description": "裸文本修改所在 Sable 结构名称；JSON 支持 name 与 code。名称最多 20 字符，识别码最多 10 字符，要求设备位于已加载结构。name 只改当前结构；code 同步到已加载的连接结构，并保留各自名称。",
      "example": "{\"name\":\"airship\",\"code\":\"fleet_1\"}",
      "mod": "Create: Radar 5.0.3+",
      "fields": "name、code",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "name：所在 Sable 结构名称，最多 20 字符；只改当前结构。",
            "code：识别码，最多 10 字符；写入已加载的连接结构并保留各自名称。省略项保留原值，设备须位于已加载结构。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"name\":\"airship\",\"code\":\"fleet_1\"}"
        }
      ]
    },
    {
      "name": "开火控制器",
      "group": "机械动力：雷达",
      "description": "裸 true／false 或 powered 设置开火状态。true 仅在来源信道保持激活时维持，信号失活或目标卸载后释放；false 不是阻止原生自动火控再次开火的永久停火。推荐用于未被自动火控接管的开火控制器；瞄准后射击优先使用俯仰控制器的 manual_target。",
      "example": "{\"powered\":true}",
      "fields": "powered",
      "mod": "Create: Radar 5.0.3+",
      "sections": [
        {
          "heading": "字段说明",
          "paragraphs": [
            "powered：true 在来源信道激活期间维持开火请求；false 取消 AFN 请求。原生自动火控可能再次开火，因此 false 不代表永久停火；来源失活或卸载释放请求。"
          ]
        },
        {
          "heading": "示例",
          "code": "{\"powered\":true}"
        }
      ]
    }
  ]
};

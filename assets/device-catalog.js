window.AFN_DEVICE_CATALOG = {
  "read": [
    {
      "name": "辉光管",
      "group": "机械动力",
      "description": "当前显示文本",
      "example": "15"
    },
    {
      "name": "智能侦测器",
      "group": "机械动力",
      "description": "匹配物品或流体的数量/列表",
      "example": "64"
    },
    {
      "name": "存量转信器",
      "group": "机械动力",
      "description": "容器填充比例",
      "example": "63%"
    },
    {
      "name": "转速表",
      "group": "机械动力",
      "description": "转速（RPM）",
      "example": "32 RPM"
    },
    {
      "name": "应力表",
      "group": "机械动力",
      "description": "读取应力表的进度条、百分比、当前应力、总应力与剩余应力，可在下拉列表中同时勾选多项。",
      "example": "128 SU"
    },
    {
      "name": "布谷鸟钟",
      "group": "机械动力",
      "description": "当前时刻或计时",
      "example": "08:30"
    },
    {
      "name": "传送带、置物台或弹射置物台",
      "group": "机械动力",
      "description": "当前物品名称",
      "example": "Iron Ingot"
    },
    {
      "name": "安山/黄铜隧道",
      "group": "机械动力",
      "description": "累计物品数量或吞吐量",
      "example": "128"
    },
    {
      "name": "列车站点",
      "group": "机械动力",
      "description": "站点摘要或列车运行状态",
      "example": "Platform 2 · Express"
    },
    {
      "name": "列车侦测器",
      "group": "机械动力",
      "description": "检测到的列车名称",
      "example": "Express 01"
    },
    {
      "name": "智能侦测器",
      "group": "机械动力",
      "description": "包裹收件地址",
      "example": "factory.chest"
    },
    {
      "name": "锅炉结构中的流体储罐",
      "group": "机械动力",
      "description": "锅炉状态",
      "example": "3/5"
    },
    {
      "name": "升降机锚点",
      "group": "机械动力",
      "description": "升降机当前楼层",
      "example": "2"
    },
    {
      "name": "工厂仪表（读取其连接的工厂面板）",
      "group": "机械动力",
      "description": "物品存量、物品名称与请求状态",
      "example": "12 · Iron Ingot"
    },
    {
      "name": "座椅",
      "group": "机械动力",
      "description": "乘客名称",
      "example": "Steve"
    },
    {
      "name": "仓储发报机",
      "group": "机械动力",
      "description": "读取所属物流网络的 AFN 名称。未命名网络只显示“未命名网络”，实际网络仍按 Create 的独立身份区分，不会自动并网。",
      "example": "main"
    },
    {
      "name": "仓储链接站",
      "group": "机械动力",
      "description": "读取所属物流网络的 AFN 名称。未命名网络只显示“未命名网络”，实际网络仍按 Create 的独立身份区分，不会自动并网。",
      "example": "main"
    },
    {
      "name": "高度传感器",
      "group": "Simulated Project",
      "description": "世界高度或气压",
      "example": "63.4 m",
      "mod": "Simulated Project"
    },
    {
      "name": "速度传感器",
      "group": "Simulated Project",
      "description": "相对速度与方向",
      "example": "12.0 m/s",
      "mod": "Simulated Project"
    },
    {
      "name": "姿态传感器",
      "group": "Simulated Project",
      "description": "俯仰角与滚转角",
      "example": "4.2°",
      "mod": "Simulated Project"
    },
    {
      "name": "光学传感器",
      "group": "Simulated Project",
      "description": "检测到的方块或与目标的距离",
      "example": "石头 · 4 格",
      "mod": "Simulated Project"
    },
    {
      "name": "激光传感器",
      "group": "Simulated Project",
      "description": "命中距离",
      "example": "7.5 格",
      "mod": "Simulated Project"
    },
    {
      "name": "便携式引擎",
      "group": "Simulated Project",
      "description": "剩余或总燃烧时间",
      "example": "12.0 s",
      "mod": "Simulated Project"
    },
    {
      "name": "对接连接器",
      "group": "Simulated Project",
      "description": "对接对象",
      "example": "Airship Alpha",
      "mod": "Simulated Project"
    },
    {
      "name": "导航台",
      "group": "Simulated Project",
      "description": "目标距离或预计抵达时间",
      "example": "1,280 格",
      "mod": "Simulated Project"
    },
    {
      "name": "无线红石打字机",
      "group": "Simulated Project",
      "description": "输入文本",
      "example": "前往码头",
      "mod": "Simulated Project"
    },
    {
      "name": "螺旋齿轮/螺旋传动杆",
      "group": "Simulated Project",
      "description": "物品吞吐量",
      "example": "16/min",
      "mod": "Simulated Project"
    },
    {
      "name": "热空气燃烧室/蒸汽喷口",
      "group": "航空学",
      "description": "气球填充体积或总升力",
      "example": "████▒▒（气体体积）／120 N（总升力）",
      "mod": "Create: Aeronautics"
    },
    {
      "name": "导航终端",
      "group": "飞控学",
      "description": "读取当前目标序号（从 1 开始）、目标世界坐标 x,y,z 与当前导航线段完成百分比 0～100，可同时勾选三项。无有效目标时坐标为空；跟随、持续盘旋等没有明确线段完成率的状态不输出进度。",
      "example": "{\"导航目标序号\":2,\"导航目标坐标\":\"128,64,-32\",\"导航线段进度\":62.5}",
      "mod": "Create: Flight Control 0.8.3+"
    },
    {
      "name": "固定式火炮底座 · 水平角",
      "group": "机械动力：火炮",
      "description": "读取“火炮水平角”：底座的水平角设置，范围 −45～45°，不是世界方位角。可与俯仰角同时勾选，按多选规则输出 JSON。",
      "example": "20",
      "mod": "Create Big Cannons"
    },
    {
      "name": "固定式火炮底座 · 俯仰角",
      "group": "机械动力：火炮",
      "description": "读取“火炮俯仰角”：底座的俯仰角设置，范围 −45～45°，不是结构相对世界的实际姿态。可与水平角同时勾选，按多选规则输出 JSON。",
      "example": "-10",
      "mod": "Create Big Cannons"
    },
    {
      "name": "动能电池",
      "group": "创意传动",
      "description": "电量、百分比或进度条",
      "example": "64%",
      "mod": "Create: Connected"
    },
    {
      "name": "横向流体储罐（锅炉结构）",
      "group": "创意传动",
      "description": "锅炉状态",
      "example": "3/5",
      "mod": "Create: Connected"
    },
    {
      "name": "音符盒",
      "group": "原版",
      "description": "音高",
      "example": "12"
    },
    {
      "name": "标靶",
      "group": "原版",
      "description": "红石强度",
      "example": "7"
    },
    {
      "name": "重生锚",
      "group": "原版",
      "description": "各玩家死亡次数",
      "example": "Steve · 3"
    },
    {
      "name": "命令方块（指定记分项）",
      "group": "原版",
      "description": "玩家分数",
      "example": "Steve · 42"
    },
    {
      "name": "附魔台",
      "group": "原版",
      "description": "最大附魔花费",
      "example": "15"
    },
    {
      "name": "CC:Tweaked 电脑",
      "group": "CCT",
      "description": "屏幕文本",
      "example": "ready",
      "mod": "CC:Tweaked"
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
          "heading": "读取结果示例",
          "code": "{\"歌名\":\"示例歌曲\",\"歌手\":\"示例歌手\",\"播放状态\":true,\"播放进度\":25}"
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
      "description": "读取广播地址、名称、范围与播放状态。单选保留原始值，多选输出 JSON。",
      "example": "{\"url\":\"https://sk.cri.cn/am846.m3u8\",\"name\":\"中央广播\",\"range\":96,\"broadcasting\":true}",
      "mod": "NetMusic",
      "fields": "广播地址、名称、范围、播放状态"
    }
  ],
  "write": [
    {
      "name": "辉光管",
      "group": "机械动力",
      "description": "显示单列文本或数字。",
      "example": "转速 128 RPM"
    },
    {
      "name": "翻牌显示器",
      "group": "机械动力",
      "description": "支持多行文字、逐行颜色、发光、手写行与分段布局；显示器需要正常运转。宽度按字符格数计算，中文通常占两格。",
      "example": "[green]运行正常\n[glow]前往码头\n{ [w=4,cycle=numeric] 03 | [w=12,right]铜锭 | [w=6] 剩余 }"
    },
    {
      "name": "告示牌",
      "group": "原版",
      "description": "通过显示目标写入 4 行文字，每行最多 15 个字符。",
      "example": "仓库\n铜锭\n128\n充足"
    },
    {
      "name": "讲台",
      "group": "原版",
      "description": "将内容写入书页；长文本由显示目标分页。",
      "example": "到站通知\n下一站：工厂"
    },
    {
      "name": "显示连接器",
      "group": "机械动力",
      "description": "作为信箱与显示目标之间的中转；连接器也可把其他来源的内容写入信箱。",
      "example": "把显示连接器贴在信箱上，再指向辉光管或翻牌显示器。"
    },
    {
      "name": "仪表板",
      "group": "创意传动",
      "description": "多个可编辑页面，每页按格显示自动输出内容。",
      "example": "库存 128",
      "mod": "Create: Connected"
    },
    {
      "name": "仓储发报机",
      "group": "机械动力",
      "description": "设置一个明确的物流网络名：新名称建立网络，已有名称连接到该网络。读取时的“未命名网络”只是占位文本，不会让新网络自动合并。",
      "example": "{\"network\":\"工厂主网\"}",
      "fields": "network"
    },
    {
      "name": "仓储链接站",
      "group": "机械动力",
      "description": "将当前链接站迁移到指定名称的物流网络；同一名称对应同一网络。这会改变该节点的物流连接，不只是修改显示标签。",
      "example": "{\"network\":\"工厂主网\"}",
      "fields": "network"
    },
    {
      "name": "物流蛙港",
      "group": "机械动力",
      "description": "address=收件地址（0–25 字）。",
      "example": "{\"address\":\"东侧仓库\"}",
      "fields": "address（0–25 字）"
    },
    {
      "name": "邮筒（全部颜色）",
      "group": "机械动力",
      "description": "address=邮箱地址（0–25 字）。",
      "example": "{\"address\":\"东侧仓库\"}",
      "fields": "address（0–25 字）"
    },
    {
      "name": "打包机",
      "group": "机械动力",
      "description": "按物品清单请求打包。支持存量 JSON、Map 与宽松名称写法，例如 {苹果:4}；名称必须能唯一识别。缺货时默认整单拒绝，allow_partial=true 允许部分打包；一次最多 256 项，每项 1–4096，合计不超过 65536。",
      "example": "{\"items\":[{\"id\":\"minecraft:apple\",\"count\":4}],\"address\":\"东侧仓库\",\"allow_partial\":false}",
      "fields": "items、address、allow_partial"
    },
    {
      "name": "黄铜漏斗 / 黄铜传送带漏斗",
      "group": "机械动力",
      "description": "amount=每次操作的最大数量（1–64，另受过滤槽上限影响）；mode 决定语义：at_most=最多取/放这么多（不足也执行）、exact=必须正好这么多（不足则不动）；JSON 里 mode 也可写序号 0/1。",
      "example": "{\"amount\":16,\"mode\":\"exact\"}",
      "fields": "amount（1–64）、mode（at_most / exact）"
    },
    {
      "name": "黄铜隧道",
      "group": "机械动力",
      "description": "mode=物品分配模式：split=均分、forced_split=强制均分、round_robin=轮询、forced_round_robin=强制轮询、prefer_nearest=就近、randomize=随机、synchronize=同步；JSON 可写 0–6。",
      "example": "{\"mode\":\"round_robin\"}",
      "fields": "mode"
    },
    {
      "name": "弹射置物台",
      "group": "机械动力",
      "description": "修改弹射目标或操作数量，每个脉冲只能写其中一项。目标必须位于穿过置物台的单条水平轴线上，并满足 Create 的最大弹射距离和高度限制；stack_size 可另发 {\"stack_size\":8}。",
      "example": "{\"target_pos\":[120,64,-30]}",
      "fields": "target_pos（世界坐标）或 stack_size（0–64）"
    },
    {
      "name": "转速控制器",
      "group": "机械动力",
      "description": "speed=目标转速：正数按朝向正转、负数反转，绝对值 0–256；0 停转。",
      "example": "{\"speed\":128}",
      "fields": "speed（−256–256）"
    },
    {
      "name": "创造马达",
      "group": "机械动力",
      "description": "speed=生成转速：正数按朝向输出、负数反转，绝对值 0–256；0 停转。反向且不超过当前网络速度时会被拒绝（unsafe_direction）。",
      "example": "{\"speed\":64}",
      "fields": "speed（−256–256）"
    },
    {
      "name": "蒸汽引擎",
      "group": "机械动力",
      "description": "direction=旋转方向：clockwise=顺时针（cw）、counter_clockwise=逆时针（ccw）；JSON 可写 0/1。",
      "example": "{\"direction\":\"clockwise\"}",
      "fields": "direction"
    },
    {
      "name": "风车轴承",
      "group": "机械动力",
      "description": "rotation_direction=风车转向：clockwise=顺时针（cw/正转）、counter_clockwise=逆时针（ccw/反转）；JSON 可写 0/1。",
      "example": "{\"rotation_direction\":\"counter_clockwise\"}",
      "fields": "rotation_direction"
    },
    {
      "name": "动力轴承",
      "group": "机械动力",
      "description": "movement_mode=停止时结构的处理方式：rotate_place=总是方块化、rotate_place_returned=回到接近初始角度才方块化、rotate_never_place=仅被摧毁后才方块化；JSON 可写 0/1/2。",
      "example": "{\"movement_mode\":\"rotate_place_returned\"}",
      "fields": "movement_mode"
    },
    {
      "name": "发条轴承",
      "group": "机械动力",
      "description": "mode=表盘模式：hour_first=时针优先、minute_first=分针优先、hour_first_24=24 小时制时针；JSON 可写 0/1/2。",
      "example": "{\"mode\":\"hour_first_24\"}",
      "fields": "mode"
    },
    {
      "name": "动力臂",
      "group": "机械动力",
      "description": "动态修改取放位置与选择顺序。提交某侧字段会替换该侧目标，空列表清除；搬运中变更会排队，空手后应用。",
      "example": "{\"take_positions\":[[1,0,0]],\"deposit_positions_absolute\":[[120,64,-30]]}",
      "fields": "mode、take_positions、deposit_positions、take_positions_absolute、deposit_positions_absolute",
      "sections": [
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
      "fields": "result"
    },
    {
      "name": "工作盆",
      "group": "机械动力",
      "description": "按结果物品筛选工作盆配方，连同上方加工设备使用的配方一起受影响。支持注册名、路径或唯一物品名称；原料、流体、热量等条件仍须满足。只产流体的配方可用 Create 识别的对应装液容器筛选；minecraft:air 清除。",
      "example": "{\"result\":\"create:brass_ingot\"}",
      "fields": "result"
    },
    {
      "name": "黏性动力活塞",
      "group": "机械动力",
      "description": "movement_mode=停止时结构的处理方式：move_place=总是方块化、move_place_returned=回到初始位置才方块化、move_never_place=仅被摧毁后才方块化；JSON 可写 0/1/2。",
      "example": "{\"movement_mode\":\"move_place_returned\"}",
      "fields": "movement_mode"
    },
    {
      "name": "矿车装配站",
      "group": "机械动力",
      "description": "movement_mode=矿车运动模式：rotate=始终面朝前进方向、rotate_paused=矿车转向时机器停止工作、rotation_locked=旋转锁定；JSON 可写 0/1/2。",
      "example": "{\"movement_mode\":\"rotation_locked\"}",
      "fields": "movement_mode"
    },
    {
      "name": "动力压路机",
      "group": "机械动力",
      "description": "mode 选择 tunnel_pave、straight_fill 或 wide_fill。material 使用可放置完整方块的注册 ID；空串或 minecraft:air 清除材料筛选。实际铺路仍需结构库存中有材料，非法方块会被拒绝。",
      "example": "{\"mode\":\"wide_fill\",\"material\":\"minecraft:gravel\"}",
      "fields": "mode、material"
    },
    {
      "name": "黄铜中继器",
      "group": "机械动力",
      "description": "delay=中继延迟（tick，2–72000）；可调中继器、脉冲延长器、脉冲中继器共用。",
      "example": "{\"delay\":100}",
      "fields": "delay（2–72000 tick）"
    },
    {
      "name": "阀门手轮",
      "group": "机械动力",
      "description": "angle=阀门手轮转角（度，-180–180）。",
      "example": "{\"angle\":90}",
      "fields": "angle（−180–180°）"
    },
    {
      "name": "可编程齿轮箱",
      "group": "机械动力",
      "description": "远程替换程序。可用每行或分号分隔的简写，也可写 steps JSON；指令为旋转、驱动、延迟、等待、停止，方向支持正向/反向/快进/快退。至多 5 步，末尾自动补的停止也计一步；旋转 1–360°、驱动 1–128、延迟 1–600 tick。写入停止旧程序，不会自动启动；另给红石脉冲。",
      "example": "旋转 90 正向; 延迟 20; 停止",
      "fields": "steps"
    },
    {
      "name": "铭牌（全部颜色）",
      "group": "Simulated Project",
      "description": "name=铭牌文本（任意颜色铭牌共用，最多 32 字符，可含换行）；text_color=文字颜色（英文色名或 0–15 序号）；glow=是否发光（true/false）。",
      "example": "{\"name\":\"东侧仓库\",\"text_color\":\"yellow\",\"glow\":true}",
      "fields": "name、text_color、glow",
      "mod": "Simulated Project"
    },
    {
      "name": "便携式引擎",
      "group": "Simulated Project",
      "description": "rotation_direction=输出方向：clockwise=顺时针（cw/正转）、counter_clockwise=逆时针（ccw/反转）；JSON 可写 0/1。",
      "example": "{\"rotation_direction\":\"clockwise\"}",
      "fields": "rotation_direction",
      "mod": "Simulated Project"
    },
    {
      "name": "万向节传感器",
      "group": "Simulated Project",
      "description": "axis=万向节设定角（度，-90–90）。",
      "example": "{\"axis\":30}",
      "fields": "axis（−90–90°）",
      "mod": "Simulated Project"
    },
    {
      "name": "光学传感器",
      "group": "Simulated Project",
      "description": "range=光学传感器探测距离（1–4096）。",
      "example": "{\"range\":128}",
      "fields": "range（1–4096）",
      "mod": "Simulated Project"
    },
    {
      "name": "激光指示器",
      "group": "Simulated Project",
      "description": "max_range=激光最大射程（格，1 到服务器上限）。",
      "example": "{\"max_range\":64}",
      "fields": "max_range（1 至服务器上限）",
      "mod": "Simulated Project"
    },
    {
      "name": "速度传感器",
      "group": "Simulated Project",
      "description": "max_speed=速度传感器量程（1–50）。",
      "example": "{\"max_speed\":20}",
      "fields": "max_speed（1–50）",
      "mod": "Simulated Project"
    },
    {
      "name": "舵轮",
      "group": "Simulated Project",
      "description": "max_angle=舵轮最大转角（度，1–360）。",
      "example": "{\"max_angle\":90}",
      "fields": "max_angle（1–360°）",
      "mod": "Simulated Project"
    },
    {
      "name": "扭力弹簧",
      "group": "Simulated Project",
      "description": "max_angle=扭力弹簧最大行程角度（度，1–360）。",
      "example": "{\"max_angle\":180}",
      "fields": "max_angle（1–360°）",
      "mod": "Simulated Project"
    },
    {
      "name": "旋转轴承",
      "group": "Simulated Project",
      "description": "locking=锁定模式：locked_always=始终锁定、locked_default=默认锁定、unlocked_default=默认解锁、unlocked_always=始终解锁；JSON 可写 0–3。",
      "example": "{\"locking\":\"locked_default\"}",
      "fields": "locking",
      "mod": "Simulated Project"
    },
    {
      "name": "红石累加器",
      "group": "Simulated Project",
      "description": "delay=累加延时（tick，2–72000）。",
      "example": "{\"delay\":20}",
      "fields": "delay（2–72000 tick）",
      "mod": "Simulated Project"
    },
    {
      "name": "红石电感器",
      "group": "Simulated Project",
      "description": "delay=电感延时（tick，0–72000）。",
      "example": "{\"delay\":20}",
      "fields": "delay（0–72000 tick）",
      "mod": "Simulated Project"
    },
    {
      "name": "螺旋桨轴承",
      "group": "航空学",
      "description": "thrust_direction=推力方向：right_handed=右手系（rh）、left_handed=左手系（lh）；JSON 可写 0/1。",
      "example": "{\"thrust_direction\":\"right_handed\"}",
      "fields": "thrust_direction",
      "mod": "Create: Aeronautics"
    },
    {
      "name": "陀螺螺旋桨轴承",
      "group": "航空学",
      "description": "thrust_direction=推力方向：right_handed=右手系（rh）、left_handed=左手系（lh）；JSON 可写 0/1。",
      "example": "{\"thrust_direction\":\"left_handed\"}",
      "fields": "thrust_direction",
      "mod": "Create: Aeronautics"
    },
    {
      "name": "热空气燃烧室",
      "group": "航空学",
      "description": "hot_air_amount=热空气产量（5 到服务器上限，默认 500），越大升力越强。",
      "example": "{\"hot_air_amount\":100}",
      "fields": "hot_air_amount（5 至服务器上限）",
      "mod": "Create: Aeronautics"
    },
    {
      "name": "蒸汽排放口",
      "group": "航空学",
      "description": "steam_amount=蒸汽排放上限（0 到服务器上限，默认按装置）。",
      "example": "{\"steam_amount\":100}",
      "fields": "steam_amount（受服务器上限限制）",
      "mod": "Create: Aeronautics"
    },
    {
      "name": "车轮支座",
      "group": "Create: Offroad",
      "description": "suspension_strength=顶面减震/悬挂强度（5–180）。",
      "example": "{\"suspension_strength\":30}",
      "fields": "suspension_strength（5–180）",
      "mod": "Create: Offroad"
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
      "name": "离心式离合器",
      "group": "创意传动",
      "description": "speed_threshold=开始/停止传动的转速阈值（-256–256）；正值时转速达到阈值后耦合，负值时转速低于阈值才耦合。",
      "example": "{\"speed_threshold\":64}",
      "fields": "speed_threshold（−256–256）",
      "mod": "Create: Connected"
    },
    {
      "name": "飞轮离合器",
      "group": "创意传动",
      "description": "direction=允许传动的旋转方向（clockwise/counter_clockwise，也可写 0/1）。",
      "example": "{\"direction\":\"clockwise\"}",
      "fields": "direction",
      "mod": "Create: Connected"
    },
    {
      "name": "动能电池",
      "group": "创意传动",
      "description": "direction=充放电方向（clockwise/counter_clockwise，也可写 0/1）。",
      "example": "{\"direction\":\"counter_clockwise\"}",
      "fields": "direction",
      "mod": "Create: Connected"
    },
    {
      "name": "动能桥",
      "group": "创意传动",
      "description": "stress_multiplier=应力放大档位（0–2048）；每 +10 翻一倍，40 约为 16 倍。",
      "example": "{\"stress_multiplier\":40}",
      "fields": "stress_multiplier（0–2048）",
      "mod": "Create: Connected"
    },
    {
      "name": "过应力离合器",
      "group": "创意传动",
      "description": "delay=过应力后的解耦延迟（tick，1–72000；GUI 以秒/分钟显示）。",
      "example": "{\"delay\":100}",
      "fields": "delay（1–72000 tick）",
      "mod": "Create: Connected"
    },
    {
      "name": "音符盒",
      "group": "原版",
      "description": "含义：instrument=音色，可选 harp 竖琴、basedrum 底鼓、snare 小军鼓、hat 踩镲、bass 贝斯、flute 长笛、bell 铃铛、guitar 吉他、chime 钟琴、xylophone 木琴、iron_xylophone 铁木琴、cow_bell 牛铃、didgeridoo 迪吉里杜管、bit 芯片、banjo 班卓琴、pling 叮当，以及 zombie/skeleton/creeper/dragon/wither_skeleton/piglin 六种头颅模仿音、custom_head（需上方头颅）；note=音高 0-24（0 最低，24 最高，共 25 个半音）。",
      "example": "{\"instrument\":\"bell\",\"note\":12}",
      "fields": "instrument、note（0–24）"
    },
    {
      "name": "播音喇叭",
      "group": "网络音乐机",
      "description": "远程设置直播源、名称、范围及播放状态。state=play 播放/继续，stop 停止；source 可写 m3u8 地址或 cnr1/cnr4/cnr16/cgtn 预设。直播没有暂停，stop 会断开连接，之后 play 重新连接。范围 1–256 且受服务器限制；音频内容需客户端能访问。",
      "example": "{\"state\":\"play\",\"source\":\"cnr1\",\"name\":\"工厂广播\",\"range\":64}",
      "fields": "state、source、name、range",
      "mod": "NetMusic"
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
        }
      ]
    },
    {
      "name": "姿态稳定器",
      "group": "飞控学",
      "description": "远程设置姿态稳定器的 P/D 增益、模式、机头朝向与默认启用状态。可用 pd 2 0.5 一起设置 P/D；mode 可用 LEVEL_NO_YAW、LEVEL、HOLD_CURRENT，forward 为 north/east/south/west。未提供的字段保留原值。",
      "example": "{\"p\":2,\"d\":0.5,\"mode\":\"LEVEL_NO_YAW\",\"forward\":\"north\",\"enabled\":true}",
      "fields": "p、d（小数，设备按绝对值处理）、mode、forward、enabled；支持 pd 简写",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "高度稳定器",
      "group": "飞控学",
      "description": "远程设置高度稳定器的 P/D、模式、预设高度、捕获延迟、步长和默认启用状态。mode 可用 hold_current、hold_preset、minimum_altitude；填写 altitude 时启用预设高度。未提供的字段保留原值。",
      "example": "{\"p\":2,\"d\":0.5,\"mode\":\"hold_preset\",\"altitude\":20}",
      "fields": "p、d、mode、altitude、delay、step、enabled；pd 可简写 p d",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "距离耦合器",
      "group": "飞控学",
      "description": "修改 P/D、目标距离区间、反选与采样模式。pd 2 0.5 同时设置增益；range 4 12 同时设置 min/max。距离范围为 0–128；mode 可写 AVERAGE、MAX、MIN。enabled 改默认耦合状态，红石代理总开关仍按设备规则反转它。",
      "example": "{\"p\":2,\"d\":0.5,\"min\":4,\"max\":12,\"invert\":false,\"mode\":\"AVERAGE\"}",
      "fields": "p、d、min、max、invert、mode、enabled",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "线速度耦合器",
      "group": "飞控学",
      "description": "设置机体 X/Y/Z 轴的 P/D 增益与正负方向线速度上限。pd 按每轴成对填写 X-P、X-D、Y-P、Y-D、Z-P、Z-D；x/y/z 可分别设置各轴的正负速度上限。负增益和限额会按绝对值处理。",
      "example": "pd 1 0.1 2 0.2 3 0.3",
      "fields": "px、py、pz、dx、dy、dz；pd 简写为逐轴 P/D；xp/xn、yp/yn、zp/zn 为正负限额",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "角速度耦合器",
      "group": "飞控学",
      "description": "设置机体 X/Y/Z 轴的 P/D 增益与正负方向角速度上限。pd 按每轴成对填写 X-P、X-D、Y-P、Y-D、Z-P、Z-D；x/y/z 可分别设置各轴的正负速度上限。负增益和限额会按绝对值处理。",
      "example": "pd 1 0.1 2 0.2 3 0.3",
      "fields": "px、py、pz、dx、dy、dz；pd 简写为逐轴 P/D；xp/xn、yp/yn、zp/zn 为正负限额",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "飞行控制终端",
      "group": "飞控学",
      "description": "修改飞行控制终端的灵敏度、方向、三轴 P/D、加速度和角速度上限，以及红石控制的独立 P/D 与角速度。俯仰、偏航、滚转分别用 pitch_pd、yaw_pd、roll_pd 成组简写；redstone_pitch_pd 等设置红石参数，rpd 可一次设置红石三轴 P/D。sensitivity 为 0.01–1，max_aim_angle 为 10–89°；P/D 和加速度为 0–100，角速度为 0–4π；未写字段保持现值。",
      "example": "pitch_pd 2 0.4",
      "fields": "enabled、forward、sensitivity、max_aim_angle、三轴 P/D、三轴加速度/角速度、红石 P/D/角速度、相机偏移；支持按轴 PD 简写",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "姿态投影仪",
      "group": "飞控学",
      "description": "修改姿态投影的高度、大小、地平面位置与显示元素。height 范围 0.5–3，scale 为 0.25–4，ground_height 为 −1–1；show_ground/show_axes 控制地平面与机体轴向是否显示。",
      "example": "{\"height\":1.5,\"scale\":1.2,\"ground_height\":0,\"show_ground\":true,\"show_axes\":true}",
      "fields": "height、scale、ground_height、show_ground、show_axes",
      "mod": "Create: Flight Control ≥ 0.8.3"
    },
    {
      "name": "HUD投影仪",
      "group": "飞控学",
      "description": "修改 HUD 投影高度、前后位置、大小与机头方向。height 范围 0.5–6，depth 为 −1–2，scale 为 0.5–3，forward 支持 north/east/south/west。",
      "example": "{\"height\":2,\"depth\":0.25,\"scale\":1.2,\"forward\":\"north\"}",
      "fields": "height、depth、scale、forward",
      "mod": "Create: Flight Control ≥ 0.8.3"
    }
  ]
};

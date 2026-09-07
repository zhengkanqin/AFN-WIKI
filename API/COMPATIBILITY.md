# 兼容说明

## 版本

| 项目 | 要求 |
|---|---|
| AFN | `1.1.6+` |
| Channel API | `1.1`（major 1） |
| Minecraft | 1.21.1 |
| Java | 21 |
| Create | 6.x，以 AFN 模组元数据为准 |

`AFNChannelApi.API_MAJOR` 表示不兼容版本线，`API_MINOR` 表示兼容新增能力。运行时可检查：

```java
AFNChannelApi.supports(1, 1);
AFNChannelApi.supports(ChannelCapability.LONG_SIGNAL);
```

能力检查不能代替 `neoforge.mods.toml` 的最低版本声明。

## API 兼容规则

兼容包为 `com.createafn.api.channel`。API major 1 保证：

- 不删除或改变现有公共成员及既有语义；
- `ChannelEndpoint` 由 AFN 创建，后续兼容增强不增加新的抽象方法；
- `ChannelValue` 保持 `REAL`、`TEXT`、`BOOLEAN` 三类；
- 三元 `REAL` 表示坐标，不新增值类型；
- `LongSignalReason` 可能增加诊断值，调用方应保留默认处理；
- 长度、数值、UUID 和信号强度限制保持有效。

其他 `com.createafn` 包、数据包、Mixin、方块实体和 GUI 不属于兼容 API。

## 必需依赖

```toml
[[dependencies.your_mod_id]]
modId="create_afn"
type="required"
versionRange="[1.1.6,)"
ordering="AFTER"
side="BOTH"
```

## 可选依赖

```toml
[[dependencies.your_mod_id]]
modId="create_afn"
type="optional"
versionRange="[1.1.6,)"
ordering="AFTER"
side="BOTH"
```

可选接入需满足：

1. 常规代码的字段、父类、接口、注解和方法签名不引用 AFN 类型。
2. 初始化时检查 `ModList.get().isLoaded("create_afn")`。
3. 延迟加载独立适配类，并检查所需 `ChannelCapability`。
4. 缺少 AFN、能力或类链接失败时只关闭该功能。
5. 分别测试无 AFN、最低支持版本和专用服务端。

参考 [可选依赖示例](examples/optional/README.md)。

## API JAR

仅作为编译依赖：

```groovy
compileOnly files("libs/create_afn-channel-api.jar")
```

API JAR 不是运行模组，不得放入 `mods/`，也不得通过 `implementation`、Shade、Relocate 或 Jar-in-Jar 进入附属成品。运行时由完整 AFN 提供 API 类和实现。

未经修改的 API JAR、Javadoc、文档、示例和 `LICENSE-API.txt` 可按许可证原样镜像；分发时须保留许可证和版权声明。

## 服务端要求

`ChannelEndpoint` 只在所属服务器主线程使用。客户端配置应通过附属自己的有界数据包提交，并由服务端重新验证槽位、权限和输入。

发布前至少检查：

- 附属 JAR 不含 `com/createafn/**`；
- 必需依赖模式能随完整 AFN 启动；
- 可选依赖模式能在未安装 AFN 时启动；
- 专用服务端不加载客户端类。

## 长信号

- 首次申请使用 `requestLongSignal(ServerPlayer)`；
- AFN 从真实频率槽计算 Owner，并按 `deviceId` 聚合设备额度；
- 同一设备的多条长信号只结算一次真实鉴权组合，不按信道重复计算；
- 长信号至少需要一块已绑定且有效的鉴权频段板；
- 仅在 `registered()` 为 `true` 后保存启用状态；
- 临时卸载用 `detach()`，重载用 `restoreLongSignal()`；
- 主动关闭用 `disableLongSignal()`，永久删除用 `close()`；
- 删除未完成时 `registered()` 仍为 `true`，应保留状态并重试；
- AFN 管理区块或完整物理结构加载；
- 拒绝、超额或暂不可用时，普通短信号继续工作。

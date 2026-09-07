# AFN 信道 SDK

供 NeoForge 模组接入 AFN 的频段匹配、鉴权、红石强度、类型化信息和长信号。

- 最低 AFN 版本：`1.1.6+`
- Channel API：`1.1`
- 适用环境：Minecraft 1.21.1、NeoForge、Java 21、Create 6.x

## 文件

| 文件 | 内容 |
|---|---|
| `create_afn-channel-api.jar` | 编译期 API |
| `create_afn-channel-api-javadoc.jar` | API Javadoc |
| `QUICKSTART.md` | 接入流程 |
| `API_REFERENCE.md` | 类型与方法 |
| `COMPATIBILITY.md` | 兼容与打包要求 |
| `PERFORMANCE_AND_ARCHITECTURE.md` | 性能建议 |
| `examples/required` | 必需依赖示例 |
| `examples/optional` | 可选依赖示例 |
| `LICENSE-API.txt` | API 使用许可 |

## 引入 API

将 API JAR 放入开发工程的 `libs/`：

```groovy
dependencies {
    compileOnly files("libs/create_afn-channel-api.jar")
}
```

运行环境安装完整 AFN，不安装 API JAR。附属成品不得嵌入、Shade、Relocate 或 Jar-in-Jar API 类。

AFN 为必需依赖时声明 `type="required"`；仅提供可选功能时声明 `type="optional"`，并按 [可选依赖示例](examples/optional/README.md) 隔离 AFN 类型。两种情况的最低版本均为 `[1.1.6,)`。

## 接入概要

1. 从设备的服务端频率槽创建 `ChannelFrequencyPair`。
2. 为设备和每条信道持久化稳定 UUID。
3. 在服务端主线程创建 `ChannelEndpoint` 并调用 `attach()`。
4. 输出变化时调用 `setTransmission(...)`。
5. 读取 `reception()`，仅在 `changeVersion()` 变化时更新设备。
6. 频率、模式或位置变化时调用对应的 `setFrequencies`、`setMode`、`moveTo`。
7. 临时卸载调用 `detach()`；永久删除调用 `close()`。

## 鉴权

设备 GUI 可通过下列接口检查频率槽中所有鉴权板的权限交集：

```java
ChannelAccess access = AFNChannelApi.accessFor(frequencies, player.getUUID());
```

`accessFor` 不包含 `mayBuild`、领地、距离和菜单有效性检查。普通信号参与无线网络不依赖当前操作者。

## 长信号

先检查 `ChannelCapability.LONG_SIGNAL`，并确保频率槽中至少有一块已绑定且有效的鉴权频段板，再由服务端玩家操作调用 `requestLongSignal(player)`。AFN 负责鉴权板 Owner、设备额度、持久登记、区块或物理结构加载以及释放。同一逻辑设备的信道必须共享 `deviceId`；该设备启用多条长信号时只结算一次真实鉴权组合，不随 `channelId` 数量叠加。

仅当返回值的 `registered()` 为 `true` 时保存启用状态。重载调用 `restoreLongSignal()`，主动关闭调用 `disableLongSignal()`；删除未完成时保留状态并重试。申请失败或额度超限时仅停用长信号，普通短信号继续工作。

## 公共包

仅使用：

```text
com.createafn.api.channel
```

不要调用 `com.createafn.internal`、`com.createafn.network`、`com.createafn.remote` 或具体方块实体实现。

继续阅读：[快速开始](QUICKSTART.md) · [API 参考](API_REFERENCE.md) · [兼容说明](COMPATIBILITY.md) · [性能建议](PERFORMANCE_AND_ARCHITECTURE.md)

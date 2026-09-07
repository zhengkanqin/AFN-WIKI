# 必需依赖示例

此示例展示一个必须依赖 AFN 的方块实体信道设备，文件仅用于参考。

## 模组元数据

```toml
[[dependencies.example_device]]
modId="create_afn"
type="required"
versionRange="[1.1.6,)"
ordering="AFTER"
side="BOTH"
```

## Gradle

```groovy
dependencies {
    compileOnly files("libs/create_afn-channel-api.jar")
}
```

API JAR 只参与编译，不能放入 `mods/` 或打进成品。运行时安装完整 AFN。

## 示例要点

- 为设备保存一个稳定 `deviceId`，为每条信道保存不同的稳定 `channelId`；
- 加载时在服务端主线程创建并 `attach()`；
- 输出变化时调用 `setTransmission(...)`；
- 接收只处理 `changeVersion()` 的变化；
- 临时卸载调用 `detach()`，永久删除调用 `close()`；
- 长信号首次申请使用真实 `ServerPlayer`，仅在 `registered()` 为 `true` 时保存启用状态；
- 恢复使用 `restoreLongSignal()`，关闭使用 `disableLongSignal()`；
- AFN 负责 Owner、额度、远程身份和加载租约。

多信道设备共享 `deviceId`，每条信道使用不同 `channelId`。同一设备的长信号信道须保持相同位置锚点、物理结构身份和主 Owner；AFN 只结算一次该设备的真实鉴权组合。申请被拒或额度超限时，普通短信号仍可用。

# 可选依赖示例

当模组没有 AFN 时仍可运行时，将所有直接 AFN 引用放在独立适配类中，并在初始化阶段延迟加载。

## 模组元数据

```toml
[[dependencies.example_device]]
modId="create_afn"
type="optional"
versionRange="[1.1.6,)"
ordering="AFTER"
side="BOTH"
```

## 编译

```groovy
dependencies {
    compileOnly files("libs/create_afn-channel-api.jar")
}
```

API JAR 不安装、不嵌入。基础设备只依赖示例中的 `OptionalChannel`，AFN 缺失或能力不可用时使用空实现。

## 推荐结构

1. 核心设备的字段、父类、接口和方法签名不出现 AFN 类型；
2. 初始化时检查 `ModList.get().isLoaded("create_afn")`；
3. 通过 `Class.forName` 等延迟入口加载 `AfnChannelAdapter`；
4. 捕获 `LinkageError` 和反射异常，失败时保留基础功能；
5. 适配器创建 endpoint 后，热路径只调用已建立的接口，不重复反射；
6. 临时卸载使用 `detach()`，永久删除使用 `close()`。

详见同目录的 `OptionalChannel.java`、`ExampleOptionalCompat.java` 和 `AfnChannelAdapter.java`。

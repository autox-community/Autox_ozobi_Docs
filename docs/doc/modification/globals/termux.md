# termux

:::info 前情提要

安装 termux(版本需 0.95 以上)

编辑 ~/.termux/termux.properties 文件, 将 allow-external-apps=true 前面的注释 # 去掉, 保存退出

```shell
# termux 安装 adb 工具
pkg update
pkg install android-tools
```

adb 连接手机后授予 termux 权限， autoxjs 或者打包后的应用

(如果有)比如小米：手机需要开启 USB 调试(安全设置) - 可在开发者选项里找到

(如果有)比如 oppo：手机需要开启 禁止权限监控 - 可在开发者选项里找到

```shell
adb shell pm grant 包名 com.termux.permission.RUN_COMMAND
```

:::

```js
// 返回桌面
termux("adb shell input keyevent 3");
// 这里默认后台执行, 若想使用自己构建的 intent 可以使用 sendTermuxIntent(intent)
```

## sendTermuxIntent(intent)

-   `intent` Intent
-   `return` void

发送 Intent 到 Termux

```js
function getTermuxCommandIntent(execBinName, args) {
    let intent = new Intent();
    intent.setClassName("com.termux", "com.termux.app.RunCommandService");
    intent.setAction("com.termux.RUN_COMMAND");
    intent.putExtra("com.termux.RUN_COMMAND_PATH", "/data/data/com.termux/files/usr/bin/" + execBinName);
    intent.putExtra("com.termux.RUN_COMMAND_ARGUMENTS", args);
    intent.putExtra("com.termux.RUN_COMMAND_WORKDIR", "/data/data/com.termux/files/home");
    intent.putExtra("com.termux.RUN_COMMAND_BACKGROUND", true);
    intent.putExtra("com.termux.RUN_COMMAND_SESSION_ACTION", 0);
    return intent;
}
let intent = getTermuxCommandIntent("adb", ["shell", "input", "tap", "66", "88"]);
sendTermuxIntent(intent); // adb 点击屏幕位置: 66,88
```

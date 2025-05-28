# termux(command [,options])

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
// 输出字符串到文件
termux("echo 'hello world' > /sdcard/termuxRunResult.autox");

// 获取执行结果
termux("ls /sdcard/", {
    outputPath: "/sdcard/termux_output.txt",
    callback: (result) => {
        log("输出结果:\n" + result);
        toast(result);
    },
    runBackground: false, // 需要打开 termux 的悬浮窗、后台弹出界面权限
    sessionAction: 0, //指定 会话动作
    clean: false, // 执行完后清理输出文件
    top: true, // 不创建新的活动
    checkGap: 100, // 检查间隔时间，单位毫秒
    checkCount: 600, // 检查次数
});
```

## sendTermuxIntent(intent)

-   `intent` Intent 意图
-   `return` void

发送 Intent 到 Termux

```js
// 自己构建 intent
function getTermuxIntent(command, runBackground, sessionAction, top) {
    let intent = new Intent();
    let args = stringArray("-c", command);
    intent.setClassName("com.termux", "com.termux.app.RunCommandService");
    intent.setAction("com.termux.RUN_COMMAND");
    intent.putExtra("com.termux.RUN_COMMAND_PATH", "/data/data/com.termux/files/usr/bin/bash");
    intent.putExtra("com.termux.RUN_COMMAND_ARGUMENTS", args);
    intent.putExtra("com.termux.RUN_COMMAND_WORKDIR", "/data/data/com.termux/files/home");
    intent.putExtra("com.termux.RUN_COMMAND_BACKGROUND", runBackground);
    intent.putExtra("com.termux.RUN_COMMAND_SESSION_ACTION", sessionAction);
    if (top) {
        intent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
    }
    return intent;
}
let myIntent = getTermuxIntent("echo 'termux 运行成功' > " + files.cwd() + "/termuxRunResult.autox", true, 0, true);
// 发送 intent 执行 Termux 命令
sendTermuxIntent(myIntent);
```

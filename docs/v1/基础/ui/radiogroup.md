# 单选框组控件: radiogroup

1.垂直布局

垂直布局是将选择框控件按从上到下的顺序排列。这是最常见的布局方式，特别适合选项较少的情况。

示例代码:

```js
"ui";

ui.layout(
    <vertical padding="16">
        <text text="请选择一个选项：" textSize="18sp" />
        <radiogroup id="rg">
            <radio id="rb1" text="选项1" checked="{{true}}" />
            <radio id="rb2" text="选项2" />
            <radio id="rb3" text="选项3" />
        </radiogroup>

        <text text="请选择一个或多个选项：" textSize="18sp" marginTop="16" />
        <checkbox id="cb1" text="复选选项1" checked="{{false}}" />
        <checkbox id="cb2" text="复选选项2" checked="{{false}}" />
        <checkbox id="cb3" text="复选选项3" checked="{{false}}" />
    </vertical>
);
```

在上述代码中：

使用`<vertical>`标签将所有控件按垂直方向排列。

单选按钮被包含在一个`<radiogroup>`中，确保只能选择一个选项。

复选框则单独排列，允许用户选择多个选项。

2.水平布局

水平布局是将选择框控件按从左到右的顺序排列。这种布局适合选项较少且希望节省垂直空间的情况。

示例代码:

```js
"ui";

ui.layout(
    <vertical padding="16">
        <text text="请选择一个选项：" textSize="18sp" />
        <horizontal>
            <radiogroup id="rg">
                <radio id="rb1" text="选项1" checked="{{true}}" />
                <radio id="rb2" text="选项2" />
                <radio id="rb3" text="选项3" />
            </radiogroup>
        </horizontal>

        <text text="请选择一个或多个选项：" textSize="18sp" marginTop="16" />
        <horizontal>
            <checkbox id="cb1" text="复选选项1" checked="{{false}}" />
            <checkbox id="cb2" text="复选选项2" checked="{{false}}" />
            <checkbox id="cb3" text="复选选项3" checked="{{false}}" />
        </horizontal>
    </vertical>
);
```

在上述代码中：

使用`<horizontal>`标签将选择框控件按水平方向排列。

单选按钮和复选框都被包含在各自的`<horizontal>`标签中，实现水平布局。

3.网格布局

网格布局是将选择框控件按行和列的方式排列，适合选项较多的情况，可以更有效地利用屏幕空间。

示例代码:

```js
"ui";

ui.layout(
    <vertical padding="16">
        <text text="请选择一个选项：" textSize="18sp" />
        <grid layout_width="match_parent" layout_height="wrap_content" columns="2">
            <radiogroup id="rg">
                <radio id="rb1" text="选项1" checked="{{true}}" />
                <radio id="rb2" text="选项2" />
                <radio id="rb3" text="选项3" />
                <radio id="rb4" text="选项4" />
                <radio id="rb5" text="选项5" />
                <radio id="rb6" text="选项6" />
            </radiogroup>
        </grid>

        <text text="请选择一个或多个选项：" textSize="18sp" marginTop="16" />
        <grid layout_width="match_parent" layout_height="wrap_content" columns="2">
            <checkbox id="cb1" text="复选选项1" checked="{{false}}" />
            <checkbox id="cb2" text="复选选项2" checked="{{false}}" />
            <checkbox id="cb3" text="复选选项3" checked="{{false}}" />
            <checkbox id="cb4" text="复选选项4" checked="{{false}}" />
            <checkbox id="cb5" text="复选选项5" checked="{{false}}" />
            <checkbox id="cb6" text="复选选项6" checked="{{false}}" />
        </grid>
    </vertical>
);
```

在上述代码中：

使用`<grid>`标签将选择框控件按网格方式排列。

`columns="2"`属性指定了每行显示两个控件。

单选按钮和复选框都被包含在各自的`<grid>`标签中，实现网格布局。

4.响应式布局

为了适应不同屏幕尺寸，可以使用**权重（weight）**来实现响应式布局。权重可以让控件按比例分配可用空间。

示例代码:

```js
"ui";

ui.layout(
    <vertical padding="16">
        <text text="请选择一个选项：" textSize="18sp" />
        <horizontal>
            <radiogroup id="rg">
                <radio id="rb1" text="选项1" checked="{{true}}" layout_weight="1" />
                <radio id="rb2" text="选项2" layout_weight="1" />
                <radio id="rb3" text="选项3" layout_weight="1" />
            </radiogroup>
        </horizontal>

        <text text="请选择一个或多个选项：" textSize="18sp" marginTop="16" />
        <horizontal>
            <checkbox id="cb1" text="复选选项1" checked="{{false}}" layout_weight="1" />
            <checkbox id="cb2" text="复选选项2" checked="{{false}}" layout_weight="1" />
            <checkbox id="cb3" text="复选选项3" checked="{{false}}" layout_weight="1" />
        </horizontal>
    </vertical>
);
```

在上述代码中:

`layout_weight="1"`使用属性为每个选择框控件设置了相同的权重。
这样，每个控件将平分水平方向上的可用空间，实现响应式布局。

5.完整示例

以下是一个完整的示例代码，结合了垂直布局、水平布局和网格布局：

```js
"ui";

ui.layout(
    <vertical padding="16">
        <text text="垂直布局 - 单选按钮：" textSize="18sp" />
        <radiogroup id="rgVertical">
            <radio id="rbv1" text="选项1" checked="{{true}}" />
            <radio id="rbv2" text="选项2" />
            <radio id="rbv3" text="选项3" />
        </radiogroup>

        <text text="水平布局 - 复选框：" textSize="18sp" marginTop="16" />
        <horizontal>
            <checkbox id="cbh1" text="复选选项1" checked="{{false}}" />
            <checkbox id="cbh2" text="复选选项2" checked="{{false}}" />
            <checkbox id="cbh3" text="复选选项3" checked="{{false}}" />
        </horizontal>

        <text text="网格布局 - 单选按钮：" textSize="18sp" marginTop="16" />
        <grid layout_width="match_parent" layout_height="wrap_content" columns="2">
            <radiogroup id="rgGrid">
                <radio id="rbg1" text="选项1" checked="{{true}}" />
                <radio id="rbg2" text="选项2" />
                <radio id="rbg3" text="选项3" />
                <radio id="rbg4" text="选项4" />
            </radiogroup>
        </grid>

        <text text="响应式布局 - 复选框：" textSize="18sp" marginTop="16" />
        <horizontal>
            <checkbox id="cbr1" text="复选选项1" checked="{{false}}" layout_weight="1" />
            <checkbox id="cbr2" text="复选选项2" checked="{{false}}" layout_weight="1" />
            <checkbox id="cbr3" text="复选选项3" checked="{{false}}" layout_weight="1" />
        </horizontal>
    </vertical>
);
```

**官方教程：**

radiogroup 单选框组合提供了几个单选框 radio 选项，但用户至多只能选择其中一个选项，即实现选项选中互斥功能。

参见 Android [RadioGroup](https://developer.android.google.cn/reference/android/widget/RadioGroup)

`checkedButton`:

设置 radiogroup 单选框组合中初始勾选的单选框 id。例如`checkedButton="@+id/radio5"`，则使 id 为 radio5 的单选框选项为初始勾选状态。

例子：

```js
"ui";

$ui.layout(
    <vertical padding="16">
        <radiogroup checkedButton="@+id/radio5">
            <radio id="radio4" text="单选框4" />
            <radio id="radio5" text="初始勾选的单选框5" />
            <radio id="radio6" text="单选框6" />
        </radiogroup>
    </vertical>
);
```

`setOnCheckedChangeListener(listener)`:

`listener`{Function} 勾选监听的回调函数，其参数为:

-   `group` {RadioGroup} 发生勾选变化事件的 radiogroup 对象

-   `checkedId` {number} 被勾选的 radio 的 id，是一个整数；若当前没有任何单选框被勾选，则为`-1`

    设置某个 radiogroup 单选框组合中的单选框被选中时的监听。需要注意的是这里的`checkedId`是一个整数，并不是类似于`radio5`这样的 id 字符串，我们可以通过`findViewById()`函数来获取具体被勾选的单选框，比如：

    ```js
    "ui";

    $ui.layout(
        <vertical padding="16">
            <radiogroup id="radiogroup1">
                <radio id="radio1" text="单选框1" />
                <radio id="radio2" text="单选框2" />
                <radio id="radio3" text="单选框3" />
            </radiogroup>
        </vertical>
    );

    $ui.radiogroup1.setOnCheckedChangeListener((group, checkedId) => {
        // 根据整数id获取勾选的radio控件
        let checkedRadio = $ui.radiogroup1.findViewById(checkedId);
        switch (checkedRadio) {
            case $ui.radio1:
                toastLog("单选框1被勾选");
                break;
            case $ui.radio2:
                toastLog("单选框2被勾选");
                break;
            case $ui.radio3:
                toastLog("单选框3被勾选");
                break;
            default:
                toastLog("没有任何单选框被勾选");
                break;
        }
    });
    ```

`getCheckedRadioButtonId()`:

-   返回 {number}

获取单选框组合中的已勾选的单选框选项的整数 ID，若当前没有任何单选框被勾选，则为`-1`。

需要注意的是这里的`checkedId`是一个整数，并不是类似于`radio5`这样的 id 字符串，我们可以通过`findViewById()`函数来获取具体被勾选的单选框。

进一步，我们可以通过`indexOfChild`获取被勾选的单选框在 radiogroup 中的位置。

例如：

```js
"ui";

$ui.layout(
    <vertical padding="16">
        <radiogroup id="radiogroup2">
            <radio id="radio4" text="单选框4" />
            <radio id="radio5" text="单选框5" />
            <radio id="radio6" text="单选框6" />
        </radiogroup>
        <button id="get" text="获取当前勾选项" />
    </vertical>
);

$ui.get.on("click", () => {
    // 获取radiogroup2勾选的单选框ID
    let checkedId = $ui.radiogroup2.getCheckedRadioButtonId();
    if (checkedId === -1) {
        toastLog("没有任何单选框被勾选");
    } else {
        // 根据id获取勾选的radio
        let checkedRadio = $ui.radiogroup2.findViewById(checkedId);
        // 获取勾选的位置
        let i = $ui.radiogroup2.indexOfChild(checkedRadio);
        toastLog("当前勾选的单选框的文本: " + checkedRadio.getText().toString() + ", 位置: " + i);
    }
});
```

`clearCheck()`:

清空单选框组合的各单选框选项的勾选状态。也即让单选框组合重置为未勾选状态。

例如:

```js
"ui";

$ui.layout(
    <vertical padding="16">
        <checkbox id="cb1" text="复选框" />
        <radiogroup id="radiogroup1">
            <radio id="radio1" text="单选框1" />
            <radio id="radio2" text="单选框2" />
            <radio id="radio3" text="单选框3" />
        </radiogroup>
        <button id="clear" text="清空选择" />
    </vertical>
);

$ui.clear.on("click", () => {
    // 清空单选框选择
    $ui.radiogroup1.clearCheck();
    // 设置复选框为不勾选
    $ui.cb1.attr("checked", "false");
});
```

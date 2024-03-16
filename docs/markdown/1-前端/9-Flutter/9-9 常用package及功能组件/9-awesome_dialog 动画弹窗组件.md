# awesome_dialog 动画弹窗组件

## 1. 🚀 轮子介绍

- 名称：`awesome_dialog`
- 概述：一个简单易用的内置动画弹窗
效果预览：
![](https://github.com/marcos930807/awesomeDialogs/raw/master/doc/gif.gif)

## 2. ⚙️ 安装及使用
```yaml
dependencies:
  awesome_dialog: ^2.1.2
```
```dart
import 'package:awesome_dialog/awesome_dialog.dart';
```
## 3. 🔧 常用属性
 | 属性 | 类型 | 描述 | 默认值 |
 |------|------|------|-------|
 | dialogType | DialogType | 设置弹窗类型 | null |
 | customHeader | Widget | 设置自定义标题（如果设置了，DiaologType将被忽略。） | null |
 | width | double | 弹窗最大宽度 | MediaQuery.of(context).size.width |
 | title | String | 弹窗标题 | null |
 | desc | String | 弹窗描述文本 | null |
 | body | Widget | 弹窗主体，如果设置了此属性，标题和描述将被忽略。 | null |
 | context | BuildContext | @required | null |
 | btnOkText | String | 确认按钮的文本 | 'Ok' |
 | btnOkIcon | IconData | 确认按钮的图标 | null |
 | btnOkOnPress | Function | 确认按钮事件 | null |
 | btnOkColor | Color | 确认按钮颜色 | Color(0xFF00CA71) |
 | btnOk | Widget | 创建自定义按钮，以上确认按钮相关属性将被忽略 | null |
 | btnCancelText | String | 取消按钮的文本 | 'Cancel' |
 | btnCancelIcon | IconData | 取消按钮的图标 | null |
 | btnCancelOnPress | Function | 取消按钮事件 | null |
 | btnCancelColor | Color | 取消按钮颜色 | Colors.red |
 | btnCancel | Widget | 创建自定义按钮，以上取消按钮相关属性将被忽略 | null |
 | buttonsBorderRadius | BorderRadiusGeometry | 按钮圆角 | BorderRadius.all(Radius.circular(100)) |
 | dismissOnTouchOutside | bool | 点击外部消失 | true |
 | onDissmissCallback | Function | 弹窗关闭回调 | null |
 | animType | AnimType | 动画类型 | AnimType.SCALE |
 | aligment | AlignmentGeometry | 弹出方式 | Alignment.center |
 | useRootNavigator | bool | 使用根导航控制器而不是当前根导航控制器，可处理跨界面关闭弹窗。 | false |
 | headerAnimationLoop | bool | 标题动画是否循环播放 | true |
 | padding | EdgeInsetsGeometry | 弹窗内边距 | EdgeInsets.only(left: 5, right: 5) |
 | autoHide | Duration | 自动隐藏时间 | null |
 | keyboardAware | bool | 键盘弹出内容被遮挡时是否跟随移动 | true |
 | dismissOnBackKeyPress | bool | 控制弹窗是否可以通过关闭按钮消失 | true |
 | buttonsBorderRadius | BorderRadiusGeometry | 按钮圆角 |  	BorderRadius.all(Radius.circular(100)) |
 | buttonsTextStyle | TextStyle | 按钮文字风格 | TextStyle(color: Colors.white, fontWeight:FontWeight.w700, fontSize: 14) |
 | showCloseIcon | bool | 是否显示关闭按钮 | false |
 | closeIcon | Widget | 关闭按钮图标 | null |
 | dialogBackgroundColor | Color | 弹窗背景色 | Theme.of(context).cardColor |
 | borderSide | BorderSide | 整个弹窗形状 | null |
 | autoDismiss | bool | 当设置为 false 时，单击“确定”或“取消”按钮不会关闭该对话框。 您可以在 onDissmissCallback 中传递自定义 Navigator.pop 函数。 | true |
 | barrierColor | Color | 对话框周围屏障的颜色 | Colors.black54 |
 | enableEnterKey | bool | 如果为 true，则按 Enter 键将如同按“确定”按钮一样。 | false |

## 4. 🗂 示例

### 1.带有点击动画的按钮
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403161041435.webp)

```dart
AnimatedButton(
    color: Colors.cyan, 
    text: '这是一个带有点击动画的按钮', 
    pressEvent: () {},
);
```
### 2.固定宽度并带有确认 / 取消按钮的提示框
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403161042790.webp)

```dart
AnimatedButton(
    text: '固定宽度并带有确认 / 取消按钮的提示框',
    pressEvent: () {
        AwesomeDialog(
            context: context,
            dialogType: DialogType.INFO_REVERSED,
            borderSide: const BorderSide(
                color: Colors.green,
                width: 2,
                ),
            width: 380,
            buttonsBorderRadius: const BorderRadius.all(
                Radius.circular(2),
                ),
            btnCancelText: '不予理会',
            btnOkText: '冲啊！',
            headerAnimationLoop: false,
            animType: AnimType.BOTTOMSLIDE,
            title: '提示',
            desc: '一个1级bug向你发起挑衅，是否迎战？',
            showCloseIcon: true,
            btnCancelOnPress: () {},
            btnOkOnPress: () {},
        ).show();
});
```
### 3.自定义按钮样式的问题对话框
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403161043104.webp)

```dart
AnimatedButton(
    color: Colors.orange[700],
    text: '具有自定义按钮样式的问题对话框',
    pressEvent: () {
        AwesomeDialog(
            context: context,
            dialogType: DialogType.QUESTION,
            headerAnimationLoop: false,
            animType: AnimType.BOTTOMSLIDE,
            title: '触发额外剧情',
            desc: '发现一名晕倒在草丛的路人，你会？',
            buttonsTextStyle: const TextStyle(color: Colors.black),
            btnCancelText: '拿走他的钱袋',
            btnOkText: '救助',
            showCloseIcon: true,
            btnCancelOnPress: () {},
            btnOkOnPress: () {},
        ).show();
});
```
### 4.无按钮的信息提示框
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403161043377.webp)

```dart
AnimatedButton(
    color: Colors.grey,
    text: '无按钮的信息提示框',
    pressEvent: () {
        AwesomeDialog(
        context: context,
        headerAnimationLoop: true,
        animType: AnimType.BOTTOMSLIDE,
        title: '提示',
        desc:
        '你救下路人，意外发现他是一位精通Flutter的满级大佬，大佬为了向你表示感谢，赠送你了全套Flutter的学习资料...',
    ).show();
});
```
### 5.警示框
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403161043553.webp)
```dart
AnimatedButton(
    color: Colors.orange,
    text: '警示框',
    pressEvent: () {
        AwesomeDialog(
        context: context,
        dialogType: DialogType.WARNING,
        headerAnimationLoop: false,
        animType: AnimType.TOPSLIDE,
        showCloseIcon: true,
        closeIcon: const Icon(Icons.close_fullscreen_outlined),
        title: '警告',
        desc: '意外发现bug的窝点,你准备？',
        btnCancelOnPress: () {},
        onDissmissCallback: (type) {
            debugPrint('Dialog Dissmiss from callback $type');
        },
        btnCancelText: '暂且撤退',
        btnOkText: '发起战斗',
        btnOkOnPress: () {},
    ).show();
});
```
### 6.错误提示框
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403161043134.webp)
```dart
AnimatedButton(
    color: Colors.red,
    text: '错误提示框',
    pressEvent: () {
        AwesomeDialog(
        context: context,
        dialogType: DialogType.ERROR,
        animType: AnimType.RIGHSLIDE,
        headerAnimationLoop: true,
        title: '挑战失败',
        desc: '你寡不敌众，败下阵来，（回到出生点后，拿出大佬赠送的全套学习资料，立志学成后报仇血恨... ）',
        btnOkOnPress: () {},
        btnOkIcon: Icons.cancel,
        btnOkColor: Colors.red,
    ).show();
});
```
### 7.成功提示框
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403161044988.webp)

```dart
AnimatedButton(
    color: Colors.green,
    text: '成功提示框',
    pressEvent: () {
        AwesomeDialog(
        context: context,
        animType: AnimType.LEFTSLIDE,
        headerAnimationLoop: false,
        dialogType: DialogType.SUCCES,
        showCloseIcon: true,
        title: '挑战成功',
        desc: '经过三天三夜的苦战，你成功消灭了所有的bug',
        btnOkOnPress: () {
            debugPrint('OnClcik');
        },
        btnOkIcon: Icons.check_circle,
        onDissmissCallback: (type) {
            debugPrint('Dialog Dissmiss from callback $type');
        },
    ).show();
});
```
### 8.不带顶部动画的弹窗
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403161044930.webp)

```dart
AnimatedButton(
    color: Colors.cyan,
    text: '不带顶部动画的弹窗',
    pressEvent: () {
        AwesomeDialog(
        context: context,
        headerAnimationLoop: false,
        dialogType: DialogType.NO_HEADER,
        title: 'No Header',
        desc:'Dialog description here...',
        btnOkOnPress: () {
            debugPrint('OnClcik');
        },
        btnOkIcon: Icons.check_circle,
    ).show();
});
```

### 9.自定义内容弹窗
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403161044464.webp)

```dart
AnimatedButton(
    color: Colors.purple,
    text: '自定义内容弹窗',
    pressEvent: () {
        AwesomeDialog(
        context: context,
        animType: AnimType.SCALE,
        dialogType: DialogType.INFO,
        body: const Center(
            child: Text(
                    'If the body is specified, then title and description will be ignored, this allows to further customize the dialogue.',
                    style: TextStyle(fontStyle: FontStyle.italic),
                   ),
              ),
        title: 'This is Ignored',
        desc: 'This is also Ignored',
    ).show();
});
```
### 10.自动隐藏弹窗
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403161044410.webp)

```dart
AnimatedButton(
    color: Colors.grey,
    text: '自动隐藏弹窗',
    pressEvent: () {
        AwesomeDialog(
        context: context,
        dialogType: DialogType.INFO,
        animType: AnimType.SCALE,
        title: 'Auto Hide Dialog',
        desc: 'AutoHide after 2 seconds',
        autoHide: const Duration(seconds: 2),
    ).show();
});
```
### 11.测试弹窗
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403161045644.webp)

```dart
AnimatedButton(
    color: Colors.blue,
    text: '测试弹窗',
    pressEvent: () {
        AwesomeDialog(
        context: context,
        keyboardAware: true,
        dismissOnBackKeyPress: false,
        dialogType: DialogType.WARNING,
        animType: AnimType.BOTTOMSLIDE,
        btnCancelText: "Cancel Order",
        btnOkText: "Yes, I will pay",
        title: 'Continue to pay?',
        desc:'Please confirm that you will pay 3000 INR within 30 mins. Creating orders without paying will create penalty charges, and your account may be disabled.',
        btnCancelOnPress: () {},
        btnOkOnPress: () {},
    ).show();
});
```
### 12.文本输入弹窗
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403161045235.webp)

```dart
AnimatedButton(
    color: Colors.blueGrey,
    text: '带有文本输入框的弹窗',
    pressEvent: () {
        late AwesomeDialog dialog;
        dialog = AwesomeDialog(
        context: context,
        animType: AnimType.SCALE,
        dialogType: DialogType.INFO,
        keyboardAware: true,
        body: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
            children: <Widget>[
                Text('Form Data',
                    style: Theme.of(context).textTheme.headline6,),
                const SizedBox(height: 10,),
                Material(
                    elevation: 0,
                    color: Colors.blueGrey.withAlpha(40),
                    child: TextFormField(
                        autofocus: true,
                        minLines: 1,
                        decoration: const InputDecoration(
                        border: InputBorder.none,
                        labelText: 'Title',
                        prefixIcon: Icon(Icons.text_fields),
                        ),
                    ),
                ),
                const SizedBox(height: 10,),
                Material(
                    elevation: 0,
                    color: Colors.blueGrey.withAlpha(40),
                    child: TextFormField(
                        autofocus: true,
                        keyboardType: TextInputType.multiline,
                        minLines: 2,
                        maxLines: null,
                        decoration: const InputDecoration(
                        border: InputBorder.none,
                        labelText: 'Description',
                        prefixIcon: Icon(Icons.text_fields),
                        ),
                    ),
                ),
                const SizedBox(height: 10,),
                AnimatedButton(
                    isFixedHeight: false,
                    text: 'Close',
                    pressEvent: () {
                        dialog.dismiss();
                    },
                )
            ],),
        ),
    )..show();
});
```
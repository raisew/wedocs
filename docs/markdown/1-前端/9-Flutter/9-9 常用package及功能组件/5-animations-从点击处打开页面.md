# animations-从点击处打开页面

## 1.package地址

https://pub-web.flutter-io.cn/packages/animations

## 2.引入

在 `pubspec.yaml` 中添加以下依赖：

```dart
dependencies:
  flutter:
    sdk: flutter
  # print colorful logs
  animations: ^2.0.11
```

## 3.封装
新建一个 `open_page.dart` 的文件，代码如下
```dart
import 'package:animations/animations.dart';
import 'package:flutter/material.dart';

class OpenPage extends StatelessWidget {
  final Widget curPage;
  final Widget nextPage;
  const OpenPage({Key? key, required this.curPage, required this.nextPage}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return buildOpenContainer();
  }

  OpenContainer<dynamic> buildOpenContainer() {
    return OpenContainer(
      //背景颜色
      closedColor: Colors.transparent,
      //阴影
      closedElevation: 0.0,
      //圆角
      closedShape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(10.0)),
      ),
      //显示的布局
      closedBuilder: (context, action) {
        return curPage;
      },
      //过渡的方式
      transitionType: ContainerTransitionType.fade,
      //过渡的时间
      transitionDuration: const Duration(milliseconds: 500),
      //即将打开的 Widget 的边框样式
      openShape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(0.0)),
      ),
      //即将打开的 Widget 的背景
      openColor: Colors.transparent,
      useRootNavigator: false,
      //阴影
      openElevation: 0.0,
      //布局
      openBuilder: (context, action) {
        return nextPage;
      },
    );
  }
}

```
## 4.使用
```dart
//引入 open_page.dart 文件
OpenPage(
  curPage: '这里放点击的Widget',
  nextPage: '这里放打开的Widget',
)
```
# scroll_loop_auto_scroll 自动无限滚动

## 1. 介绍

该小部件自动将自定义子小部件滚动到无限循环。

[pub](https://pub.dev/packages/scroll_loop_auto_scroll)

![](https://github.com/Ashish-Raturi/scroll_loop_auto_scroll/raw/master/doc/example.gif)
![](https://github.com/Ashish-Raturi/scroll_loop_auto_scroll/raw/master/doc/stockIndexLoop.gif)

### 特征

- 用户滚动输入 🆕
- 无限自动滚动
- 自定义子部件
- 自定义滚动方向
- 指定自定义持续时间和间隙

## 2. 安装

添加 `scroll_loop_auto_scroll: ^0.0.5` 到您的 `pubspec.yaml` 依赖项。

线上版本在页面切换时会报错，使用以下 widget:

scroll_loop_auto_scroll.dart

```dart
library scroll_loop_auto_scroll;

import 'package:flutter/material.dart';

class ScrollLoopAutoScroll extends StatefulWidget {
  const ScrollLoopAutoScroll({
    required this.child,
    required this.scrollDirection,
    Key? key,
    this.delay = const Duration(seconds: 1),
    this.duration = const Duration(seconds: 50),
    this.gap = 25,
    this.reverseScroll = false,
    this.duplicateChild = 25,
    this.enableScrollInput = true,
    this.delayAfterScrollInput = const Duration(seconds: 1),
  }) : super(key: key);

  /// Widget to display in loop
  ///
  /// required
  final Widget child;

  /// Duration to wait before starting animation
  ///
  /// Default set to Duration(seconds: 1).
  ///

  final Duration delay;

  /// Duration of animation
  ///
  /// Default set to Duration(seconds: 30).
  final Duration duration;

  /// Sized between end of child and beginning of next child instance
  ///
  /// Default set to 25.
  final double gap;

  /// The axis along which the scroll view scrolls.
  ///
  /// required
  final Axis scrollDirection;

  ///
  /// true : Right to Left
  ///
  // |___________________________<--Scrollbar-Starting-Right-->|
  ///
  /// fasle : Left to Right (Default)
  ///
  // |<--Scrollbar-Starting-Left-->____________________________|
  final bool reverseScroll;

  /// The number of times duplicates child. So when the user scrolls then, he can't find the end.
  ///
  /// Default set to 25.
  ///
  final int duplicateChild;

  ///User scroll input
  ///
  ///Default set to true
  final bool enableScrollInput;

  /// Duration to wait before starting animation, after user scroll Input.
  ///
  /// Default set to Duration(seconds: 1).
  ///
  final Duration delayAfterScrollInput;
  @override
  State<ScrollLoopAutoScroll> createState() => _ScrollLoopAutoScrollState();
}

class _ScrollLoopAutoScrollState extends State<ScrollLoopAutoScroll> with SingleTickerProviderStateMixin {
  late final AnimationController animationController;
  late Animation<Offset> offset;

  ValueNotifier<bool> shouldScroll = ValueNotifier<bool>(false);
  late ScrollController _scrollController; // Remove late keyword

  @override
  void initState() {
    animationController = AnimationController(
      duration: widget.duration,
      vsync: this,
    );

    offset = Tween<Offset>(
      begin: Offset.zero,
      end: widget.scrollDirection == Axis.horizontal
          ? widget.reverseScroll
              ? const Offset(.5, 0)
              : const Offset(-.5, 0)
          : widget.reverseScroll
              ? const Offset(0, .5)
              : const Offset(0, -.5),
    ).animate(animationController);

    WidgetsBinding.instance.addPostFrameCallback((timeStamp) async {
      await Future.delayed(widget.delay);
      animationHandler();
    });

    super.initState();
  }

  @override
  void didChangeDependencies() {
    _scrollController = ScrollController();
    _scrollController.addListener(() async {
      if (widget.enableScrollInput) {
        if (animationController.isAnimating) {
          animationController.stop();
        } else {
          await Future.delayed(widget.delayAfterScrollInput);
          animationHandler();
        }
      }
    });
    super.didChangeDependencies();
  }

  animationHandler() async {
    if (_scrollController.hasClients && _scrollController.position.maxScrollExtent > 0) {
      shouldScroll.value = true;

      if (shouldScroll.value && mounted) {
        animationController.forward().then((_) async {
          animationController.reset();

          if (shouldScroll.value && mounted) {
            animationHandler();
          }
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      physics: widget.enableScrollInput ? const BouncingScrollPhysics() : const NeverScrollableScrollPhysics(),
      controller: _scrollController,
      scrollDirection: widget.scrollDirection,
      reverse: widget.reverseScroll,
      child: SlideTransition(
        position: offset,
        child: ValueListenableBuilder<bool>(
          valueListenable: shouldScroll,
          builder: (BuildContext context, bool shouldScroll, _) {
            return widget.scrollDirection == Axis.horizontal
                ? Row(
                    children: List.generate(
                        widget.duplicateChild,
                        (index) => Padding(
                              padding: EdgeInsets.only(right: shouldScroll && !widget.reverseScroll ? widget.gap : 0, left: shouldScroll && widget.reverseScroll ? widget.gap : 0),
                              child: widget.child,
                            )))
                : Column(
                    children: List.generate(
                    widget.duplicateChild,
                    (index) => Padding(
                      padding: EdgeInsets.only(bottom: shouldScroll && !widget.reverseScroll ? widget.gap : 0, top: shouldScroll && widget.reverseScroll ? widget.gap : 0),
                      child: widget.child,
                    ),
                  ));
          },
        ),
      ),
    );
  }

  @override
  void dispose() {
    _scrollController.dispose();
    animationController.dispose(); // Dispose AnimationController here
    super.dispose();
  }
}

```

在需要页面导入：

```dart
import 'package:scroll_loop_auto_scroll/scroll_loop_auto_scroll.dart';
```

或者

```dart
import '/components/scroll_loop_auto_scroll.dart';
```

## 3. 如何使用

只需创建一个 `ScrollLoopAutoScroll` 小部件，并传递所需的参数：

```dart
  ScrollLoopAutoScroll(
    child: Text(
      'Very long text that bleeds out of the rendering space',
      style: TextStyle(fontSize: 20),
    ),
    scrollDirection: Axis.horizontal,
  )
```

## 4. 参数

```dart
ScrollLoopAutoScroll(
   child: child, //required
   scrollDirection: Axis.horizontal, //required
   delay: Duration(seconds: 1), // 延迟时间
   duration: Duration(seconds: 50), // 滚动数据
   gap: 25, // 间距
   reverseScroll: false,
   duplicateChild : 25,
   enableScrollInput : true,
   delayAfterScrollInput : Duration(seconds: 1)
 )
```

## 5. 示例

```dart
import 'package:flutter/material.dart';
import 'package:scroll_loop_auto_scroll/scroll_loop_auto_scroll.dart';

void main() => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
        title: 'Scroll Loop Auto Scroll',
        debugShowCheckedModeBanner: false,
        home: HomePage());
  }
}

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              //Example 01
              const Text(
                '# Expample 01 : left to right scroll',
                style: TextStyle(color: Colors.grey),
              ),
              const SizedBox(
                height: 10,
              ),
              const ScrollLoopAutoScroll(
                child: Text(
                  'Very long text that bleeds out of the rendering space',
                  style: TextStyle(fontSize: 20),
                ),
                scrollDirection: Axis.horizontal,
              ),
              const SizedBox(
                height: 40,
              ),
              //Example 02
              const Text(
                '# Expample 02 : righ to left scroll',
                style: TextStyle(color: Colors.grey),
              ),
              const SizedBox(
                height: 5,
              ),
              const ScrollLoopAutoScroll(
                child: Text(
                  'Very long text that bleeds out of the rendering space',
                  style: TextStyle(fontSize: 20),
                ),
                scrollDirection: Axis.horizontal,
                reverseScroll: true,
              ),
              const SizedBox(
                height: 40,
              ),

              //Example 03
              const Text(
                '# Expample 03 : Vertical Scroll Direction',
                style: TextStyle(color: Colors.grey),
              ),
              const SizedBox(
                height: 10,
              ),
              SizedBox(
                height: 199,
                child: ScrollLoopAutoScroll(
                  scrollDirection: Axis.vertical,
                  child: Column(
                    children: [
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width - 40,
                        color: Colors.green,
                        alignment: Alignment.center,
                        child: const Text(
                          'ONE',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width - 40,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: const Text(
                          'FOR',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width - 40,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: const Text(
                          'ALL',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width - 40,
                        color: Colors.orange,
                        alignment: Alignment.center,
                        child: const Text(
                          'AND',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width - 40,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: const Text(
                          'ALL',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width - 40,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: const Text(
                          'FOR',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width - 40,
                        color: Colors.green,
                        alignment: Alignment.center,
                        child: const Text(
                          'ONE',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(
                height: 40,
              ),

              //Example 04
              const Text(
                '# Expample 04 : Horizontal Scroll Direction',
                style: TextStyle(color: Colors.grey),
              ),
              const SizedBox(
                height: 10,
              ),
              SizedBox(
                width: MediaQuery.of(context).size.width - 40,
                child: ScrollLoopAutoScroll(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    children: [
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / 2,
                        color: Colors.green,
                        alignment: Alignment.center,
                        child: const Text(
                          'ONE',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / 2,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: const Text(
                          'FOR',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / 2,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: const Text(
                          'ALL',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / 2,
                        color: Colors.orange,
                        alignment: Alignment.center,
                        child: const Text(
                          'AND',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / 2,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: const Text(
                          'ALL',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / 2,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: const Text(
                          'FOR',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / 2,
                        color: Colors.green,
                        alignment: Alignment.center,
                        child: const Text(
                          'ONE',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                    ],
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
```

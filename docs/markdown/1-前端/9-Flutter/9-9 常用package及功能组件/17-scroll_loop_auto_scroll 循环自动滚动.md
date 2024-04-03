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

添加 `scroll_loop_auto_scroll: ^0.0.5` 到您的 `pubspec.yaml` 依赖项。并导入它：

```dart
import 'package:scroll_loop_auto_scroll/scroll_loop_auto_scroll.dart';
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

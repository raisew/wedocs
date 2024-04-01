# easy_refresh 下拉刷新上拉加载

[![License](https://img.shields.io/badge/license-MIT-green.svg)](/LICENSE)
[![Platform Flutter](https://img.shields.io/badge/platform-Flutter-blue.svg)](https://flutter.dev)
[![Pub](https://img.shields.io/pub/v/easy_refresh)](https://pub.dev/packages/easy_refresh)

## [English](https://github.com/xuelongqy/flutter_easy_refresh/blob/v3/README.md) | 中文

正如名字一样，EasyRefresh 很容易就能在 Flutter 应用上实现下拉刷新以及上拉加载操作，它支持几乎所有的 Flutter 滚动组件。它的功能与 Android 的 SmartRefreshLayout 很相似，同样也吸取了很多三方库的优点。EasyRefresh 中集成了多种风格的 Header 和 Footer，但是它并没有局限性，你可以很轻松的自定义。使用 Flutter 强大的动画，甚至随便一个简单的控件也可以完成。EasyRefresh 的目标是为 Flutter 打造一个强大，稳定，成熟的下拉刷新框架。

[在线演示](https://xuelongqy.github.io/flutter_easy_refresh/)

[APK 下载](https://github.com/xuelongqy/flutter_easy_refresh/releases)

[API 文档](https://pub.dev/documentation/easy_refresh/latest/)

## 特点功能:

- 支持所有的滚动组件
- 滚动物理作用域，精确匹配滚动组件
- 集成多个炫酷的 Header 和 Footer
- 支持自定义样式，实现各种动画效果
- 支持下拉刷新、上拉加载(可使用控制器触发和结束)
- 支持指示器位置设定，结合监听器也放置在任何位置
- 支持页面启动时刷新，并自定义视图
- 支持安全区域，不再有遮挡
- 自定义滚动参数，让列表具有不同的滚动反馈和惯性

## 简单用例

### 1.默认构造器

- child 作用域内，所有滚动组件会公用一个 physics。如果有滚动嵌套，请使用 EasyRefresh.builder 或用 ScrollConfiguration 设置作用域

```dart
  EasyRefresh(
    onRefresh: () async {
      ....
    },
    onLoad: () async {
      ....
    },
    child: ListView(),
  )
```

### 2.builder 构造器

```dart
  EasyRefresh.builder(
    onRefresh: () async {
      ....
      return IndicatorResult.success;
    },
    onLoad: () async {
      ....
    },
    childBuilder: (context, physics) {
      return ListView(
        physics: physics,
      );
    },
  )
```

### 3.指示器定位

```dart
  EasyRefresh(
    header: Header(
      position: IndicatorPosition.locator,
    ),
    footer: Footer(
      position: IndicatorPosition.locator,
    ),
    onRefresh: () async {
      ....
    },
    onLoad: () async {
      ....
      return IndicatorResult.noMore;
    },
    child: CustomScrollView(
      slivers: [
        SliverAppBar(),
        const HeaderLocator.sliver(),
        ...
        const FooterLocator.sliver(),
        ],
      ),
  )
```

### 4.控制器使用

```dart
  EasyRefreshController _controller = EasyRefreshController(
    controlFinishRefresh: true,
    controlFinishLoad: true,
  );
  ....
  EasyRefresh(
    controller: _controller,
    onRefresh: () async {
      ....
      _controller.finishRefresh();
      _controller.resetFooter();
    },
    onLoad: () async {
      ....
      _controller.finishLoad(IndicatorResult.noMore);
    },
    ....
  );
  ....
  _controller.callRefresh();
  _controller.callLoad();
```

### 5.使用指定的 Header 和 Footer

```dart
  EasyRefresh(
    header: MaterialHeader(),
    footer: MaterialFooter(),
    child: ListView(),
    ....
  )
  // 全局设置
  EasyRefresh.defaultHeaderBuilder = () => ClassicHeader();
  EasyRefresh.defaultFooterBuilder = () => ClassicFooter();
```

### 6. Cupertino 风格的案例

```dart
import 'package:easy_refresh/easy_refresh.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class MyList extends StatefulWidget {
  const MyList({Key? key}) : super(key: key);

  @override
  State<MyList> createState() => _CupertinoIndicatorPageState();
}

class _CupertinoIndicatorPageState extends State<MyList> {
  Axis _scrollDirection = Axis.vertical;
  int _count = 10;
  late EasyRefreshController _controller;

  @override
  void initState() {
    super.initState();
    _controller = EasyRefreshController(
      controlFinishRefresh: true,
      controlFinishLoad: true,
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final themeData = Theme.of(context);
    return Material(
      color: Colors.transparent,
      child: CupertinoPageScaffold(
        navigationBar: _scrollDirection == Axis.vertical
            ? null
            : CupertinoNavigationBar(
                middle: Text(
                  'iOS Cupertino',
                  style: TextStyle(
                    color: themeData.textTheme.titleMedium?.color,
                  ),
                ),
                trailing: IconButton(
                  iconSize: 24,
                  onPressed: () {
                    setState(() {
                      _scrollDirection = _scrollDirection == Axis.horizontal ? Axis.vertical : Axis.horizontal;
                    });
                  },
                  icon: Icon(_scrollDirection == Axis.horizontal ? Icons.horizontal_distribute : Icons.vertical_distribute),
                ),
              ),
        child: SafeArea(
          top: _scrollDirection == Axis.horizontal,
          bottom: false,
          left: false,
          right: false,
          child: EasyRefresh(
            controller: _controller,
            header: const CupertinoHeader(
              position: IndicatorPosition.locator,
              safeArea: false,
            ),
            footer: const CupertinoFooter(
              position: IndicatorPosition.locator,
              emptyWidget: Text(
                '没有更多数据',
                style: TextStyle(
                  color: Colors.black26,
                ),
              ),
            ),
            onRefresh: () async {
              await Future.delayed(const Duration(seconds: 2));
              if (!mounted) {
                return;
              }
              setState(() {
                _count = 10;
              });
              _controller.finishRefresh();
              _controller.resetFooter();
            },
            onLoad: () async {
              await Future.delayed(const Duration(seconds: 2));
              if (!mounted) {
                return;
              }
              setState(() {
                _count += 5;
              });
              _controller.finishLoad(_count >= 20 ? IndicatorResult.noMore : IndicatorResult.success);
            },
            child: CustomScrollView(
              scrollDirection: _scrollDirection,
              slivers: [
                if (_scrollDirection == Axis.vertical)
                  CupertinoSliverNavigationBar(
                    largeTitle: Text(
                      'iOS Cupertino',
                      style: TextStyle(
                        color: themeData.textTheme.titleMedium?.color,
                      ),
                    ),
                    trailing: IconButton(
                      iconSize: 24,
                      onPressed: () {
                        setState(() {
                          _scrollDirection = _scrollDirection == Axis.horizontal ? Axis.vertical : Axis.horizontal;
                        });
                      },
                      icon: Icon(_scrollDirection == Axis.horizontal ? Icons.horizontal_distribute : Icons.vertical_distribute),
                    ),
                  ),
                const HeaderLocator.sliver(),
                SliverList(
                  delegate: SliverChildBuilderDelegate(
                    (context, index) {
                      return Container(
                        margin: const EdgeInsets.symmetric(vertical: 8),
                        height: 100,
                        color: Colors.black12,
                        child: Text('demo$index'),
                      );
                    },
                    childCount: _count,
                  ),
                ),
                const FooterLocator.sliver(),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

```

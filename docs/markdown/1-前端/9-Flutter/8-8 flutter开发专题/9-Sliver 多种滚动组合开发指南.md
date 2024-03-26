# Sliver 多种滚动组合开发指南

`sliver` 可以把几个不同滚动行为组件（顶部 `appBar`、内容固定块、`tabBar` 切换、`tabBarView` 视图、自适应高度、横向滚动）黏贴成一个组件。

<!-- ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403261458451.png)
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403261443994.png) -->

<div class="flex w-100">
    <div class="flex-1">
      <img src="https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403261458451.png">
    </div>
    <div class="flex-1">
      <img src="https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403261443994.png" class="flex-1">
    </div>
</div>

## 知识点 sliver

`Sliver` 是 `Flutter` 中用于构建可滚动视图的基本构建块之一。`Sliver` 是可滚动区域中的一小部分，具有固定的大小和位置，可以根据需要动态加载和卸载。`Sliver` 通常用于创建高性能、高度灵活的可滚动视图，例如列表、网格、瀑布流等。

在 `Flutter` 中，有许多不同类型的 `Sliver` 组件，每个组件都有特定的作用和用途。下面是一些常见的 `Sliver` 组件：

- **SliverAppBar**：一个带有滚动效果的应用栏，可以在向上滚动时隐藏，并在向下滚动时显示。
- **SliverList**：将子组件放置在一个垂直列表中，可以根据需要动态加载和卸载列表项。
- **SliverGrid**：将子组件放置在一个网格中，可以根据需要动态加载和卸载网格项。
- **SliverPadding**：为子组件提供填充，以使它们与其他 Sliver 组件的大小和位置保持一致。
- **SliverToBoxAdapter**：将一个普通的组件包装成一个 Sliver 组件，以便将其放置在 CustomScrollView 中。

## 第一步：Sliver 横向滚动

lib/page.dart

```dart
Widget _mainView() {
    return CustomScrollView(
      slivers: [
        // 横向滚动
        SliverToBoxAdapter(
          child: SizedBox(
            height: 100,
            child: PageView(
              children: [
                Container(
                  color: Colors.yellow,
                  child: const Center(child: Text('横向滚动')),
                ),
                Container(color: Colors.green),
                Container(color: Colors.blue),
              ],
            ),
          ),
        ),
        ...
      ]
    );
}
```

> `SliverToBoxAdapter` 进行包装才能 `slivers` 使用。

```dart
 @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Sliver Scroll')),
      body: _mainView(),
    );
  }
```

## 第二步：固定高度的 tabView

```dart
return CustomScrollView(
      slivers: [
      ...
        // 固定高度内容
        SliverToBoxAdapter(
          child: Container(
            height: 200,
            color: Colors.greenAccent,
            child: const Center(child: Text('固定高度内容')),
          ),
        ),
      ]
);
```

```dart
// tabView 内容
SliverToBoxAdapter(
  child: DefaultTabController(
    length: 3,
    child: Column(
      children: [
        const TabBar(
          tabs: [
            Tab(text: 'Tab 1'),
            Tab(text: 'Tab 2'),
            Tab(text: 'Tab 3'),
          ],
        ),
        SizedBox(
          height: 200,
          child: TabBarView(
            children: [
              Container(color: Colors.yellow),
              Container(color: Colors.green),
              Container(color: Colors.blue),
            ],
          ),
        ),
      ],
    ),
  ),
),
```

> 外层嵌套 `DefaultTabController` ，才能让 `TabBar`、`TabBarView` 顺利工作。

## 第三步：自适应高度的 tabView

实现 `SliverPersistentHeaderDelegate` 抽象类

```dart
class _SliverDelegate extends SliverPersistentHeaderDelegate {
  _SliverDelegate({
    required this.minHeight,
    required this.maxHeight,
    required this.child,
  });

  final double minHeight; //最小高度
  final double maxHeight; //最大高度
  final Widget child;

  @override
  double get minExtent => minHeight;

  @override
  double get maxExtent => max(maxHeight, minHeight);

  @override
  Widget build(
      BuildContext context, double shrinkOffset, bool overlapsContent) {
    return SizedBox.expand(child: child);
  }

  @override //是否需要重建
  bool shouldRebuild(_SliverDelegate oldDelegate) {
    return maxHeight != oldDelegate.maxHeight ||
        minHeight != oldDelegate.minHeight ||
        child != oldDelegate.child;
  }
}
```

编写固定头部 `sliver` 组件

```dart
 Widget _buildPersistentHeader(Widget child,
          {double? minHeight, double? maxHeight}) =>
      SliverPersistentHeader(
          pinned: true,
          delegate: _SliverDelegate(
            minHeight: minHeight ?? 40.0,
            maxHeight: maxHeight ?? 40.0,
            child: child,
          ));
```

定义 `TabController`

```dart
class _MyPageViewState extends State<MyPageView> with TickerProviderStateMixin {
	...
}
```

> 混入 `TickerProviderStateMixin`

```dart
 late TabController _tabController;
```

```dart
@override
void initState() {
  _tabController = TabController(length: 3, vsync: this);
  super.initState();
}
```

```dart
@override
void dispose() {
  _tabController.dispose(); // 释放内存
  super.dispose();
}
```

加入 `slivers`

```dart
 Widget _mainView() {
    return CustomScrollView(
      slivers: [
        ...

				// TabBar 固定
        _buildPersistentHeader(TabBar(
          controller: _tabController,
          tabs: const [
            Tab(text: 'Tab 1'),
            Tab(text: 'Tab 2'),
            Tab(text: 'Tab 3'),
          ],
        )),
      ]
    );
 }
```

使用 `SliverFillRemaining` 来撑开剩余空间

```dart
 // TabBarView 自适应高度
SliverFillRemaining(
  child: TabBarView(
    controller: _tabController,
    children: [
      // 第一个选项卡的内容
      ListView.builder(
        itemCount: 20,
        itemBuilder: (BuildContext context, int index) {
          return ListTile(title: Text('Item $index'));
        },
      ),
      // 第二个选项卡的内容
      ListView.builder(
        itemCount: 10,
        itemBuilder: (BuildContext context, int index) {
          return ListTile(title: Text('Item $index'));
        },
      ),
      // 第三个选项卡的内容
      ListView.builder(
        itemCount: 5,
        itemBuilder: (BuildContext context, int index) {
          return ListTile(title: Text('Item $index'));
        },
      ),
    ],
  ),
),
```

> `SliverFillRemaining` 是一个可以填充剩余空间的 `sliver` 组件，它可以将子组件放置在视图区域的剩余空间中，并自动调整子组件的大小以填充整个空间。通常情况下，`SliverFillRemaining` 用于在滚动视图中放置一个占满整个视图区域的组件，例如底部栏或页脚。

## 第四步：子 tabBar

还可以加入子 `tabBar` 组成父子选项切换

```dart
// 子 TabBar 固定
_buildPersistentHeader(TabBar(
  controller: _tabController,
  tabs: const [
    Tab(text: 'subTab 1'),
    Tab(text: 'subTab 2'),
    Tab(text: 'subTab 3'),
  ],
)),
```

父子 `tabBar` 中间再加一个固定块，查看滚动效果

```dart
// 固定高度内容
SliverToBoxAdapter(
  child: Container(
    height: 100,
    color: Colors.greenAccent,
    child: const Center(child: Text('固定高度内容')),
  ),
),
```

## 最后：底部再加入 SliverList

我们在底部再加一个 `list` 模块，看看效果。

```dart
Widget _mainView() {
    return CustomScrollView(
      slivers: [
        ...

        // 固定高度内容
        SliverToBoxAdapter(
          child: Container(
            height: 200,
            color: Colors.greenAccent,
            child: const Center(child: Text('固定高度内容')),
          ),
        ),

        // 列表 100 行
        SliverList(
          delegate: SliverChildBuilderDelegate(
            (BuildContext context, int index) {
              return ListTile(title: Text('Item $index'));
            },
            childCount: 100,
          ),
        ),
      ]
    );
}
```

## 完整代码

main.dart

```dart
import 'package:flutter/material.dart';

import 'nested.dart';
import 'page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
        useMaterial3: true,
      ),
      // home: const MyPageView(),
      home: const NestedScrollPage(),
    );
  }
}

```

app_bar.dart

```dart
import 'package:flutter/material.dart';

class MyCustomAppBar extends StatelessWidget implements PreferredSizeWidget {
  final Widget child;

  const MyCustomAppBar({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return child;
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight + 20.0);
}

```

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403261458451.png)

page.dart

```dart
import 'dart:math';

import 'package:flutter/material.dart';

class MyPageView extends StatefulWidget {
  const MyPageView({super.key});

  @override
  State<MyPageView> createState() => _MyPageViewState();
}

class _MyPageViewState extends State<MyPageView>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    _tabController = TabController(length: 3, vsync: this);
    super.initState();
  }

  @override
  void dispose() {
    _tabController.dispose(); // 释放内存
    super.dispose();
  }

  Widget _buildPersistentHeader(Widget child,
          {double? minHeight, double? maxHeight}) =>
      SliverPersistentHeader(
          pinned: true,
          delegate: _SliverDelegate(
            minHeight: minHeight ?? 40.0,
            maxHeight: maxHeight ?? 40.0,
            child: child,
          ));

  Widget _mainView() {
    return CustomScrollView(
      slivers: [
        // 横向滚动
        SliverToBoxAdapter(
          child: SizedBox(
            height: 100,
            child: PageView(
              children: [
                Container(
                  color: Colors.yellow,
                  child: const Center(child: Text('横向滚动')),
                ),
                Container(color: Colors.green),
                Container(color: Colors.blue),
              ],
            ),
          ),
        ),

        // 固定高度内容
        SliverToBoxAdapter(
          child: Container(
            height: 200,
            color: Colors.greenAccent,
            child: const Center(child: Text('固定高度内容')),
          ),
        ),

        // tabView 内容
        SliverToBoxAdapter(
          child: DefaultTabController(
            length: 3,
            child: Column(
              children: [
                const TabBar(
                  tabs: [
                    Tab(text: 'Tab 1'),
                    Tab(text: 'Tab 2'),
                    Tab(text: 'Tab 3'),
                  ],
                ),
                SizedBox(
                  height: 200,
                  child: TabBarView(
                    children: [
                      Container(color: Colors.yellow),
                      Container(color: Colors.green),
                      Container(color: Colors.blue),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),

        // TabBar 固定
        _buildPersistentHeader(TabBar(
          controller: _tabController,
          tabs: const [
            Tab(text: 'Tab 1'),
            Tab(text: 'Tab 2'),
            Tab(text: 'Tab 3'),
          ],
        )),

        // 固定高度内容
        SliverToBoxAdapter(
          child: Container(
            height: 100,
            color: Colors.greenAccent,
            child: const Center(child: Text('固定高度内容')),
          ),
        ),

        // 子 TabBar 固定
        _buildPersistentHeader(TabBar(
          controller: _tabController,
          tabs: const [
            Tab(text: 'subTab 1'),
            Tab(text: 'subTab 2'),
            Tab(text: 'subTab 3'),
          ],
        )),

        // TabBarView 自适应高度
        SliverFillRemaining(
          child: TabBarView(
            controller: _tabController,
            children: [
              // 第一个选项卡的内容
              ListView.builder(
                itemCount: 20,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(title: Text('Item $index'));
                },
              ),
              // 第二个选项卡的内容
              ListView.builder(
                itemCount: 10,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(title: Text('Item $index'));
                },
              ),
              // 第三个选项卡的内容
              ListView.builder(
                itemCount: 5,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(title: Text('Item $index'));
                },
              ),
            ],
          ),
        ),

        // 固定高度内容
        SliverToBoxAdapter(
          child: Container(
            height: 200,
            color: Colors.greenAccent,
            child: const Center(child: Text('固定高度内容')),
          ),
        ),

        // 列表 100 行
        SliverList(
          delegate: SliverChildBuilderDelegate(
            (BuildContext context, int index) {
              return ListTile(title: Text('Item $index'));
            },
            childCount: 100,
          ),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Sliver Scroll')),
      body: _mainView(),
    );
  }
}

class _SliverDelegate extends SliverPersistentHeaderDelegate {
  _SliverDelegate({
    required this.minHeight,
    required this.maxHeight,
    required this.child,
  });

  final double minHeight; //最小高度
  final double maxHeight; //最大高度
  final Widget child;

  @override
  double get minExtent => minHeight;

  @override
  double get maxExtent => max(maxHeight, minHeight);

  @override
  Widget build(
      BuildContext context, double shrinkOffset, bool overlapsContent) {
    return SizedBox.expand(child: child);
  }

  @override //是否需要重建
  bool shouldRebuild(_SliverDelegate oldDelegate) {
    return maxHeight != oldDelegate.maxHeight ||
        minHeight != oldDelegate.minHeight ||
        child != oldDelegate.child;
  }
}

```

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403261443994.png)

nested.dart

```dart
import 'package:flutter/material.dart';

import 'app_bar.dart';

class NestedScrollPage extends StatefulWidget {
  const NestedScrollPage({super.key});

  @override
  State<NestedScrollPage> createState() => _NestedScrollPageState();
}

class _NestedScrollPageState extends State<NestedScrollPage> {
  final List<String> _tabs = const ['tab1', 'tab2', "tab3", "tab4"];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: DefaultTabController(
        length: _tabs.length,
        child: NestedScrollView(
          headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
            return <Widget>[
              _buildHeader(context, innerBoxIsScrolled),
            ];
          },
          body: _buildTabBarView(),
        ),
      ),
    );
  }

  // 头部
  Widget _buildHeader(BuildContext context, bool innerBoxIsScrolled) {
    return // SliverOverlapAbsorber 的作用是处理重叠滚动效果，
        // 防止 CustomScrollView 中的滚动视图与其他视图重叠。
        SliverOverlapAbsorber(
      handle: NestedScrollView.sliverOverlapAbsorberHandleFor(context),
      sliver:
          // SliverAppBar 的作用是创建可折叠的顶部应用程序栏，
          // 它可以随着滚动而滑动或固定在屏幕顶部，并且可以与其他 Sliver 小部件一起使用。
          SliverAppBar(
        title: const Text('滚动一致性'),
        pinned: true,
        elevation: 6, //影深
        expandedHeight: 300.0,
        forceElevated: innerBoxIsScrolled, //为true时展开有阴影
        flexibleSpace: FlexibleSpaceBar(
          background: Image.asset(
            "assets/images/banner-bg.jpg",
            fit: BoxFit.cover,
          ),
        ),

        // 底部固定栏
        bottom: MyCustomAppBar(
          child: Column(
            children: [
              Container(
                color: Colors.greenAccent,
                child: const Center(child: Text('固定高度内容')),
              ),
              TabBar(
                tabs: _tabs
                    .map((String name) => Tab(
                          text: name,
                        ))
                    .toList(),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTabBarView() {
    return TabBarView(
      children: _tabs.map((String name) {
        return SafeArea(
          top: false,
          bottom: false,
          child: Builder(
            builder: (BuildContext context) {
              return CustomScrollView(
                key: PageStorageKey<String>(name),
                slivers: <Widget>[
                  // SliverOverlapInjector 的作用是处理重叠滚动效果，
                  // 确保 CustomScrollView 中的滚动视图不会与其他视图重叠。
                  SliverOverlapInjector(
                    handle: NestedScrollView.sliverOverlapAbsorberHandleFor(context),
                  ),

                  // 横向滚动
                  SliverToBoxAdapter(
                    child: SizedBox(
                      height: 100,
                      child: PageView(
                        children: [
                          Container(
                            color: Colors.yellow,
                            child: const Center(child: Text('横向滚动')),
                          ),
                          Container(color: Colors.green),
                          Container(color: Colors.blue),
                        ],
                      ),
                    ),
                  ),

                  // 固定高度内容
                  SliverToBoxAdapter(
                    child: Container(
                      height: 100,
                      color: Colors.greenAccent,
                      child: const Center(child: Text('固定高度内容')),
                    ),
                  ),

                  // 列表
                  buildContent(name),

                  // 固定高度内容
                  SliverToBoxAdapter(
                    child: Container(
                      height: 100,
                      color: Colors.greenAccent,
                      child: const Center(child: Text('固定高度内容')),
                    ),
                  ),

                  // 列表 100 行
                  SliverList(
                    delegate: SliverChildBuilderDelegate(
                      (BuildContext context, int index) {
                        return ListTile(title: Text('Item $index'));
                      },
                      childCount: 100,
                    ),
                  ),
                ],
              );
            },
          ),
        );
      }).toList(),
    );
  }

  // 内容列表
  Widget buildContent(String name) => SliverPadding(
        padding: const EdgeInsets.all(8.0),
        sliver: SliverFixedExtentList(
          itemExtent: 48.0,
          delegate: SliverChildBuilderDelegate(
            (BuildContext context, int index) {
              return ListTile(
                title: Text('$name - $index'),
              );
            },
            childCount: 50,
          ),
        ),
      );
}

```

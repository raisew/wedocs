# 盘点主流 Flutter 状态管理库

### 状态管理作用

1. 数据共享和同步：在应用程序中，不同部分可能需要共享和同步数据。通过状态管理，可以轻松地在应用程序的各个部分之间共享数据，并确保数据的一致性。
2. UI 更新：`Flutter` 状态管理可以帮助开发者管理应用程序中的 `UI` 状态，以便在数据变化时更新用户界面。这样可以确保应用程序的 `UI` 与数据的状态保持同步。
3. 复杂状态管理：随着应用程序变得越来越复杂，管理应用程序的状态变得更加困难。`Flutter` 状态管理工具可以帮助开发者更有效地管理应用程序的状态，使代码更具可维护性和可扩展性。
4. 性能优化：有效的状态管理可以帮助应用程序避免不必要的重绘和重新构建，从而提高应用程序的性能和响应速度。
5. 代码结构：通过良好的状态管理，开发者可以更好地组织应用程序的代码结构，使其更易于理解和维护。

### 考量纬度

1. 编写代码的复杂度，是否简洁
2. 适用规模（小型、中大型、参与人数、迭代频率）
3. 开发团队的前端组件化经验
4. 项目是否快速开发，`MVP`

## Provider

轻量级、易学习、内置于 `Flutter` 中，适用于基本状态管理。

https://pub.dev/packages/provider

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403231339288.png)

```dart
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

/// This is a reimplementation of the default Flutter application using provider + [ChangeNotifier].

void main() {
  runApp(
    /// Providers are above [MyApp] instead of inside it, so that tests
    /// can use [MyApp] while mocking the providers
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => Counter()),
      ],
      child: const MyApp(),
    ),
  );
}

/// Mix-in [DiagnosticableTreeMixin] to have access to [debugFillProperties] for the devtool
// ignore: prefer_mixin
class Counter with ChangeNotifier, DiagnosticableTreeMixin {
  int _count = 0;

  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }

  /// Makes `Counter` readable inside the devtools by listing all of its properties
  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(IntProperty('count', count));
  }
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Example'),
      ),
      body: const Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('You have pushed the button this many times:'),

            /// Extracted as a separate widget for performance optimization.
            /// As a separate widget, it will rebuild independently from [MyHomePage].
            ///
            /// This is totally optional (and rarely needed).
            /// Similarly, we could also use [Consumer] or [Selector].
            Count(),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        key: const Key('increment_floatingActionButton'),

        /// Calls `context.read` instead of `context.watch` so that it does not rebuild
        /// when [Counter] changes.
        onPressed: () => context.read<Counter>().increment(),
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}

class Count extends StatelessWidget {
  const Count({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      /// Calls `context.watch` to make [Count] rebuild when [Counter] changes.
      '${context.watch<Counter>().count}',
      key: const Key('counterState'),
      style: Theme.of(context).textTheme.headlineMedium,
    );
  }
}
```

## BLoC/Cubit

基于块模式构建，将业务逻辑与用户界面解耦，适用于复杂的状态管理。

https://pub.dev/packages/flutter_bloc

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403231342067.png)

- `Bloc` 架构

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403231343565.png)

https://bloclibrary.dev/#/zh-cn/coreconcepts?id=bloc

- 快手上手文档

https://bloclibrary.dev/#/zh-cn/gettingstarted

- 计数器 项目结构

```
├── lib
│   ├── app.dart
│   ├── counter
│   │   ├── counter.dart
│   │   ├── cubit
│   │   │   └── counter_cubit.dart
│   │   └── view
│   │       ├── counter_page.dart
│   │       └── counter_view.dart
│   ├── counter_observer.dart
│   └── main.dart
├── pubspec.lock
├── pubspec.yaml
```

> 这个应用中我们使用的是功能驱动（feature-driven）的项目结构。
>
> 这种项目结构可以让我们通过一个个独立的功能来扩展项目。

- login 登录 项目结构

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403231345339.png)

## Riverpod

适用于中大型应用程序的具有类型、作用域和关注点分离的改进版提供程序。

https://pub.dev/packages/riverpod

https://riverpod.dev/zh-hans/docs/introduction/getting_started

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403231346988.png)

```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'main.g.dart';

// 我们创建了一个 "provider"，它可以存储一个值（这里是 "Hello world"）。
// 通过使用提供者程序，这可以允许我们模拟或者覆盖一个暴露的值。
@riverpod
String helloWorld(HelloWorldRef ref) {
  return 'Hello world';
}

void main() {
  runApp(
    // 为了使小组件可以读取提供者程序，
    // 我们需要将整个应用程序包装在“ProviderScope”小部件中。
    // 这是我们的提供者程序的状态将被存储的地方。
    ProviderScope(
      child: MyApp(),
    ),
  );
}

// 继承父类使用 ConsumerWidget 替代 StatelessWidget，这样可以获取到提供者程序的引用
class MyApp extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final String value = ref.watch(helloWorldProvider);

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Example')),
        body: Center(
          child: Text(value),
        ),
      ),
    );
  }
}
```

## GetX

全能框架，用于状态管理、路由和依赖注入，非常适用于低到中等复杂度的应用程序。

https://pub.dev/packages/get

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403231347181.png)

### 优点

1. 简单易用：
   - `GetX` 提供了简洁而直观的 `API` ，使得状态管理和导航等功能变得非常容易实现。
   - 开发者可以通过少量的代码实现复杂的功能，提高开发效率。
2. 性能优秀：
   - `GetX` 被设计为高性能的状态管理库，具有出色的性能表现。
   - `GetX` 使用响应式编程和观察者模式，可以确保只有在数据变化时才会触发 `UI` 更新，从而提高应用程序的性能。
3. 依赖注入：
   - `GetX` 内置了依赖注入功能，可以方便地管理应用程序中的依赖关系。
   - 通过 `GetX` 的依赖注入功能，开发者可以更好地组织和管理应用程序的代码。
4. 路由管理：
   - `GetX` 提供了强大的路由管理功能，支持命名路由、动画过渡等。
   - 开发者可以轻松地管理应用程序的导航逻辑，实现页面之间的切换和传递参数。
5. 轻量级：
   - `GetX` 是一个轻量级的库，不会给应用程序增加过多的负担。
   - 使用 `GetX` 可以避免引入过多的依赖，使应用程序保持简洁和高效。

### 示例

- 订阅更新

```dart
void main() => runApp(MaterialApp(home: Home()));

class Home extends StatelessWidget {
  var count = 0.obs;
  @override
  Widget build(context) => Scaffold(
      appBar: AppBar(title: Text("counter")),
      body: Center(
        child: Obx(() => Text("$count")),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () => count ++,
      ));
}
```

- 手动更新

```dart
@override
  Widget build(BuildContext context) {
    return GetBuilder<MatchIndexController>(
      init: MatchIndexController(fixtureId),
      id: "match_index",
      tag: tag, // 区分不同控制器
      builder: (_) {
        return controller.fixturesInfo == null
            ? const ProgressIndicatorWidget().paddingTop(100)
            : _buildView();
      },
    );
  }
```

```dart
 _initData() async {
    await _loadData();
    update(["match_index"]);
  }
```

### 官方脚手架

https://github.com/jonataslaw/get_cli/blob/master/README-zh_CN.md

### 猫哥 vsc 插件

https://marketplace.visualstudio.com/items?itemName=ducafecat.getx-template

![](https://ducafecat.oss-cn-beijing.aliyuncs.com/podcast/2024/02/ac7b5ea445d85bb7f9bc3c46f73b6beb.png)

### getx 实战视频+代码模版

https://ducafecat.com/course/flutter-woo

## MobX

`MobX` 是一种状态管理库，它让应用程序的响应式数据与 `UI` 关联起来变得很简单。

https://pub.dev/packages/flutter_mobx

https://github.com/mobxjs/mobx.dart/tree/master/mobx_examples/lib/counter

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403231357042.png)

```dart
import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:mobx/mobx.dart';

part 'counter.g.dart';

class Counter = CounterBase with _$Counter;

abstract class CounterBase with Store {
  @observable
  int value = 0;

  @action
  void increment() {
    value++;
  }
}

class CounterExample extends StatefulWidget {
  const CounterExample({Key key}) : super(key: key);

  @override
  _CounterExampleState createState() => _CounterExampleState();
}

class _CounterExampleState extends State<CounterExample> {
  final _counter = Counter();

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          title: const Text('Counter'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              const Text(
                'You have pushed the button this many times:',
              ),
              Observer(
                  builder: (_) => Text(
                        '${_counter.value}',
                        style: const TextStyle(fontSize: 20),
                      )),
            ],
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: _counter.increment,
          tooltip: 'Increment',
          child: const Icon(Icons.add),
        ),
      );
}
```

监视变化

```dart
import 'package:mobx/mobx.dart';

final greeting = Observable('Hello World');

final dispose = reaction((_) => greeting.value, (msg) => print(msg));

greeting.value = 'Hello MobX'; // Cause a change

// Done with the reaction()
dispose();


// Prints:
// Hello MobX
```

## Redux

具有集中式存储、操作和减速器的可预测状态管理，适用于需要强大可预测性和工具的应用程序。

https://pub.dev/packages/flutter_redux

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403231358991.png)

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403231358059.png)

```dart
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:redux/redux.dart';

// One simple action: Increment
enum Actions { Increment }

// The reducer, which takes the previous count and increments it in response
// to an Increment action.
int counterReducer(int state, dynamic action) {
  return action == Actions.Increment ? state + 1 : state;
}

void main() {
  // Create your store as a final variable in the main function or inside a
  // State object. This works better with Hot Reload than creating it directly
  // in the `build` function.
  final store = Store<int>(counterReducer, initialState: 0);

  runApp(FlutterReduxApp(
    title: 'Flutter Redux Demo',
    store: store,
  ));
}

class FlutterReduxApp extends StatelessWidget {
  final Store<int> store;
  final String title;

  FlutterReduxApp({Key key, this.store, this.title}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // The StoreProvider should wrap your MaterialApp or WidgetsApp. This will
    // ensure all routes have access to the store.
    return StoreProvider<int>(
      // Pass the store to the StoreProvider. Any ancestor `StoreConnector`
      // Widgets will find and use this value as the `Store`.
      store: store,
      child: MaterialApp(
        theme: ThemeData.dark(),
        title: title,
        home: Scaffold(
          appBar: AppBar(title: Text(title)),
          body: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Connect the Store to a Text Widget that renders the current
                // count.
                //
                // We'll wrap the Text Widget in a `StoreConnector` Widget. The
                // `StoreConnector` will find the `Store` from the nearest
                // `StoreProvider` ancestor, convert it into a String of the
                // latest count, and pass that String  to the `builder` function
                // as the `count`.
                //
                // Every time the button is tapped, an action is dispatched and
                // run through the reducer. After the reducer updates the state,
                // the Widget will be automatically rebuilt with the latest
                // count. No need to manually manage subscriptions or Streams!
                StoreConnector<int, String>(
                  converter: (store) => store.state.toString(),
                  builder: (context, count) {
                    return Text(
                      'The button has been pushed this many times: $count',
                      style: Theme.of(context).textTheme.display1,
                    );
                  },
                )
              ],
            ),
          ),
          // Connect the Store to a FloatingActionButton. In this case, we'll
          // use the Store to build a callback that will dispatch an Increment
          // Action.
          //
          // Then, we'll pass this callback to the button's `onPressed` handler.
          floatingActionButton: StoreConnector<int, VoidCallback>(
            converter: (store) {
              // Return a `VoidCallback`, which is a fancy name for a function
              // with no parameters and no return value.
              // It only dispatches an Increment action.
              return () => store.dispatch(Actions.Increment);
            },
            builder: (context, callback) {
              return FloatingActionButton(
                // Attach the `callback` to the `onPressed` attribute
                onPressed: callback,
                tooltip: 'Increment',
                child: Icon(Icons.add),
              );
            },
          ),
        ),
      ),
    );
  }
}
```

## Fish-Redux

一个针对 `Flutter` 优化的 `Redux` 版本，减少样板代码，同时保持架构概念。

https://pub.dev/packages/fish_redux

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403231359983.png)

## GetIt

这是一个依赖管理工具，当然也能用来作为简单的状态管理，比如全局、局部的数据维护。

https://pub.dev/packages/get_it

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403231359499.png)

视频 https://www.bilibili.com/video/BV1EG411X7zz

文档 https://ducafecat.com/blog/use-get_it-in-getx

## 小结

每个库都有其优点和缺点，适用于不同的应用程序大小和复杂性。对于基本应用程序，推荐使用 `Provider` 和 `GetX` ，而对于较大的应用程序，可以从 `BLoC/Cubit`、`Riverpod` 或 `MobX` 中受益。在选择库时，请考虑您的应用程序需求、团队偏好和架构风格。

总之，强大的状态管理对于应用的稳定性和增长至关重要。`Flutter` 提供了一系列的库来满足不同的需求，确保稳定性、可测试性和可维护性。无论你是初创公司还是已经建立起来的企业，选择合适的状态管理库对于成功至关重要。

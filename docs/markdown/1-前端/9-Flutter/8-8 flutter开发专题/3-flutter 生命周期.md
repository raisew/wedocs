# flutter 生命周期

在 `Flutter` 中，生命周期涉及到两个主要概念：`Widget` 生命周期和 `App` 生命周期。

## Widget 生命周期

### StatefulWidget 生命周期

1. **createState()**: 当 Widget 首次被插入到 Widget 树中时，Flutter 调用此方法来创建与该 Widget 相关的 State 对象。
2. **initState()**: 当 State 对象被插入到树中时调用，用于一次性初始化，例如订阅流或设置初始值。
3. **didChangeDependencies()**: 当 State 对象依赖的对象发生变化时调用，它是在 initState 之后立即调用的，并且可能会在构建之前调用。
4. **build()**: 构建 Widget 树的方法，在此方法中创建并返回渲染 UI 的 Widget。
5. **didUpdateWidget()**: 当父 Widget 更新时调用，可以用于在新 Widget 与旧 Widget 之间进行比较以执行一些操作。
6. **setState()**: 用于通知 Flutter 框架状态已更改，需要重新构建以反映这些更改。
7. **dispose()**: 当 State 对象从树中永久删除时调用，用于释放资源或取消订阅。

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() {
    print('createState');
    return _MyAppState();
  }
  // 正常简写
  // State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int _counter = 0;

  _MyAppState() {
    print('Constructor');
  }

  @override
  void initState() {
    super.initState();
    print('initState');
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    print('didChangeDependencies');
  }

  @override
  Widget build(BuildContext context) {
    print('build');
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('StatefulWidget Lifecycle Example'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'Counter:',
              ),
              Text(
                '$_counter',
                style: Theme.of(context).textTheme.headline4,
              ),
            ],
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            setState(() {
              _counter++;
            });
          },
          child: Icon(Icons.add),
        ),
      ),
    );
  }

  @override
  void didUpdateWidget(MyApp oldWidget) {
    super.didUpdateWidget(oldWidget);
    print('didUpdateWidget');
  }

  @override
  void deactivate() {
    print('deactivate');
    super.deactivate();
  }

  @override
  void dispose() {
    print('dispose');
    super.dispose();
  }
}

```

### StatelessWidget 生命周期

无状态的 Widget 生命周期相对简单，主要集中在 build 方法中，因为它们没有状态需要管理。

## App 生命周期

Flutter 应用程序的生命周期由 WidgetsBindingObserver 管理。以下是 App 生命周期中的重要方法：

1. **didChangeAppLifecycleState()**: 当应用程序的生命周期状态发生变化时调用，包括 resumed（恢复）、paused（暂停）、inactive（不活动）和 detached（分离）状态。

下面是一个示例，演示了如何使用 Flutter 的生命周期方法：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> with WidgetsBindingObserver {
  AppLifecycleState _appLifecycleState = AppLifecycleState.resumed;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance!.addObserver(this);
  }

  @override
  void dispose() {
    WidgetsBinding.instance!.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    setState(() {
      _appLifecycleState = state;
    });
    print('App Lifecycle State: $_appLifecycleState');
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter Lifecycle Example'),
        ),
        body: Center(
          child: Text('App Lifecycle State: $_appLifecycleState'),
        ),
      ),
    );
  }
}
```

在这个示例中，我们使用了一个 `StatefulWidget` 来监听应用程序的生命周期状态。当应用程序的生命周期状态发生变化时，`didChangeAppLifecycleState` 方法会被调用，并且我们在 `build` 方法中显示当前的应用程序生命周期状态。

2. 封装 WidgetsBindingObserver

```dart
import 'package:flutter/material.dart';

class AppLifecycleObserver with WidgetsBindingObserver {
  void Function()? onAppResumed;
  void Function()? onAppPaused;
  void Function()? onAppInactive;
  void Function()? onAppDetached;
  void Function()? onAppHidden;

  void initialize({
    void Function()? onResumed,
    void Function()? onPaused,
    void Function()? onInactive,
    void Function()? onDetached,
    void Function()? onHidden,
  }) {
    onAppResumed = onResumed;
    onAppPaused = onPaused;
    onAppInactive = onInactive;
    onAppDetached = onDetached;
    onAppHidden = onHidden;

    WidgetsBinding.instance.addObserver(this);
  }

  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);
    switch (state) {
      case AppLifecycleState.resumed:
        onAppResumed?.call(); // 回到前台
        break;
      case AppLifecycleState.paused:
        onAppPaused?.call(); // 进入后台
        break;
      case AppLifecycleState.inactive:
        onAppInactive?.call(); // 不活动
        break;
      case AppLifecycleState.detached:
        onAppDetached?.call(); // 分离
        break;
      case AppLifecycleState.hidden:
        onAppHidden?.call(); // 所有视图都隐藏
        break;
    }
  }
}
```

在 StatefulWidget 中使用：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  late AppLifecycleObserver _lifecycleObserver;

  @override
  void initState() {
    super.initState();
    _lifecycleObserver = AppLifecycleObserver()
      ..initialize(
        onResumed: () {
          print('App resumed');
        },
        onPaused: () {
          print('App paused');
        },
        onInactive: () {
          print('App inactive');
        },
        onDetached: () {
          print('App detached');
        },
      );
  }

  @override
  void dispose() {
    _lifecycleObserver.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter App'),
        ),
        body: Center(
          child: Text('Hello, Flutter!'),
        ),
      ),
    );
  }
}

```

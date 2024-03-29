# Logger【终端输出带颜色】

## 1.package 地址

https://pub-web.flutter-io.cn/packages/logger

## 2.引入

在 `pubspec.yaml` 中添加以下依赖：

```dart
dependencies:
  flutter:
    sdk: flutter

  logger: ^2.1.0
```

## 3.封装

新建一个 `app_logger.dart` 的文件

```dart

import 'package:flutter/foundation.dart';
import 'package:logger/logger.dart';

class AppLogger {
  static final AppLogger _instance = AppLogger._internal();
  static Logger? _logger;

  factory AppLogger() {
    return _instance;
  }

  AppLogger._internal() {
    _logger = Logger(
      printer: PrettyPrinter(
        methodCount: 2,
        errorMethodCount: 8,
        lineLength: 120,
        colors: true,
        printEmojis: true,
        printTime: false,
      ),
    );
  }

  void log(dynamic message) {
    if (kDebugMode) {
      _logger?.d(message);
    }
  }

  void info(dynamic message) {
    if (kDebugMode) {
      _logger?.i(message);
    }
  }

  void warn(dynamic message) {
    if (kDebugMode) {
      _logger?.w(message);
    }
  }

  void error(dynamic message, [dynamic error, StackTrace? stackTrace]) {
    if (kDebugMode) {
      _logger?.e(message, error: error, stackTrace: stackTrace);
    }
  }


}
```

## 4.使用

引入 `app_logger.dart` 文件

```dart
AppLogger().log('这里是log日志【正常颜色】');
AppLogger().info('这里是info日志【浅蓝色】');
AppLogger().warn('这里是warning日志【橘色】');
AppLogger().error('这里是error日志【红色颜色】');
```

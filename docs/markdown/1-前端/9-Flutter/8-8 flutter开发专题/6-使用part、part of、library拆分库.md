# 使用 part、part of、library 拆分库

`dart` 中，通过使用 `part` 、`part of` 、 `library` 来实现拆分库，这样，就可以将一个庞大的库拆分成各种小库，只要引用主库即可，用法如下：

假设有三个文件，两个子库 `calculator` 和 `logger` ，一个主库 `util`

- `logger.dart` 代码：

```dart
//和主库建立连接
part of util;

class Logger {
  String _app_name;
  Logger(this._app_name);
  void error(error) {
    print('${_app_name}Error:${error}');
  }

  void warn(msg) {
    print('${_app_name}Error:${msg}');
  }

  void debug(msg) {
    print('${_app_name}Error:${msg}');
  }
}
```

- `calculator.dart` 代码：

```dart
//和主库建立连接
part of util;

int add(int i, int j) {
  return i + j;
}

int sub(int i, int j) {
  return i - j;
}

int random(int no) {
  return Random().nextInt(no);
}
```

- 主库 `util.dart` 代码：

```dart
//给库命名
library util;

//导入math，子库用到
import 'dart:math';

//和子库建立联系
part 'logger.dart';
part 'calculator.dart';
```

- 使用：

```dart
import './util.dart';

void main() {
  //使用logger库定义的类
  Logger logger = Logger('Demo');
  logger.debug('这是debug信息');

  //使用calculator库定义的方法
  print(add(1, 2));
}
```

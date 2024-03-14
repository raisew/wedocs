# PopScope控制返回按键

## 封装主界面连续返回退出

- 封装 `widget`

新建一个 `keyback_pop.dart` 的文件，把以下代码复制进去
```dart
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class KeybackPop extends StatelessWidget {
  const KeybackPop({Key? key, this.child}) : super(key: key);
  final Widget? child;
  @override
  Widget build(BuildContext context) {
    // 退出时间间隔
    const int exitTimeInterval = 1500;
    // 上次点击返回时间
    DateTime? lastPressedAt;

    return kIsWeb
        ? SizedBox(
            child: child!,
          )
        : PopScope(
            canPop: false,
            onPopInvoked: (bool didPop) async {
              if (didPop) {
                return;
              }
              if (lastPressedAt == null || DateTime.now().difference(lastPressedAt!) > const Duration(milliseconds: exitTimeInterval)) {
                // 更新上次点击返回时间为当前时间
                lastPressedAt = DateTime.now();
                // 提示再按一次返回退出
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(Radius.circular(50)),
                    ),
                    elevation: 0,
                    behavior: SnackBarBehavior.floating,
                    width: 280.0,
                    duration: Duration(milliseconds: exitTimeInterval),
                    content: Text(
                      '再按一次返回退出',
                      textAlign: TextAlign.center,
                    ),
                  ),
                );
                // 返回 false，表示不退出应用程序
                return;
              }
              SystemNavigator.pop();
            },
            child: child!,
          );
  }
}

```

- 使用

引入 `keyback_pop.dart` 文件

```dart
Scaffold(
  body: KeybackPop(
    child: `这里换成内容widget`
  )
)
```
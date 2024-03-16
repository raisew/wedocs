# Shimmer 骨架屏、加载页效果

## 1.🚀 轮子介绍

- 名称：`Shimmer`
- 概述：闪光效果、加载页、骨架屏闪屏动效。
效果预览：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/blob/main/wedoc/202403161048409.gif)

## 2.⚙️安装及使用
```yaml
dependencies:
  shimmer: ^2.0.0
```
```dart
import 'package:shimmer/shimmer.dart';
```
```dart
SizedBox(
  width: 200.0,
  height: 100.0,
  child: Shimmer.fromColors(
    baseColor: Colors.red,
    highlightColor: Colors.yellow,
    child: Text(
      'Shimmer',
      textAlign: TextAlign.center,
      style: TextStyle(
        fontSize: 40.0,
        fontWeight:
        FontWeight.bold,
      ),
    ),
  ),
);

```
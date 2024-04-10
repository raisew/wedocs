# appBar 顶部只留状态栏

```dart
appBar: PreferredSize(
  preferredSize: Size.fromHeight(MediaQueryData.fromWindow(window).padding.top),
  child: const SafeArea(
    top: true,
    child: Offstage(),
  ),
),
```

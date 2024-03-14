# flutter 背景图片

```dart
Container(
  decoration: BoxDecoration(
    color: Colors.green,
    image: DecorationImage(
      image: AssetImage('assets/images/背景图片.png'),
      fit: BoxFit.fill,
    ),
  ),
);
```
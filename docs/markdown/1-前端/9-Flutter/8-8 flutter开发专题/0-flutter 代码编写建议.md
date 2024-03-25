# flutter 代码编写建议

## 1. 不要使用 print 方法在 flutter 中打印任何内容

```dart
void main() {
  int a =10;
  /// 错误
  print(a);
}
```

```dart
void main() {
  int a =10;
  /// 正确
  log('$a');
  /// 或者
  debugPrint('$a');
}
```

使用 `log` 或 `debugPrint` 方法在 `flutter` 中打印任何内容

## 2. 不要使用三元运算符来比较空值。

```dart
void main() {
 String? name;
 /// 错误
  String nameCopy=name==null?'Ankit':name;
  debugPrint(nameCopy);
}
```

```dart
void main() {
 String? name;
 /// 正确
  String nameCopy=name ?? 'Ankit';
  debugPrint(nameCopy);
}
```

只需使用 `null` 感知运算符来处理变量是否为 `null` 。

## 3. 如果该变量默认已经具有 null 值，则不要分配 null。

```dart
void main() {
  /// 错误
  var name = user == null ? null : user.name;
  debugPrint(name);
}
```

```dart
void main() {
  /// 正确
  var name = user?.name;
  debugPrint(name);
}
```

只需使用`？`运算符为已经为空的变量分配默认值。

## 4. 当你想将一个数组数据添加到另一个数组时，不要使用 addAll 方法。

```dart
void main() {
  List<int> mainList = [4, 5, 6];
  List<int> secondList = [1, 2];
  /// 错误
  secondList.addAll(mainList);
}
```

```dart
void main() {
  List<int> mainList = [4, 5, 6];
  List<int> secondList = [1, 2];

  /// 正确
  secondList = [...secondList,...mainList];
  debugPrint('$secondList');
}
```

使用 `Spread` 运算符在列表中添加数据。

## 5. 如果您知道变量的数据类型，请不要使用 var 关键字

```dart
void main() {
  /// 错误
  var age = 25;
  const radius = 20.4;
  const list = ['A', 'B', 'C'];
}
```

```dart
void main() {
  /// 正确
  int age = 25;
  const double radius = 20.4;
  const List<String> list = ['A', 'B', 'C'];
}
```

如果您知道要使用的值，请使用 `data-type` 而不是 `decalring var` 。

## 6. 当你想第一次初始化列表时，不要使用 for 循环来创建数据。

```dart
void main() {
  /// 错误
  List<int> data = [];
  for (int i = 0; i < 100; i++) {
    data.add(i);
  }
}
```

```dart
void main() {
  /// 正确
  List<int> data = [];
  data = List.generate(100, (index) => index);
}
```

第一次使用 `List` 类的 `generate` 方法初始化 `list` 。

## 7. 不要使用动态类型返回任何方法或函数。

```dart
/// 错误
dynamic getName(){
  return "Ankit Tiwari";
}

/// 错误
getName(){
  return "Ankit Tiwari";
}
```

```dart
/// 正确
String getName(){
  return "Ankit Tiwari";
}
```

如果您知道方法的返回类型，请使用数据类型；

## 8. 如果您知道变量的返回类型，请不要使用 var 关键字

```dart
void main() {
  /// 错误
  var message = 'Hi';
}
```

```dart
void main() {
   /// 正确
  String message = 'Hi';
}
```

如果您知道变量的返回类型，请使用数据类型；

## 9. 不要检查 bool 值是否为 true，默认情况下它始终检查 true。

```dart
void main() {
  bool isCheck = true;

  /// 错误
  if (isCheck == true) {}
}
```

```dart
void main() {
  bool isCheck = true;

  /// 正确
  if (isCheck) {}
}
```

直接检查……！

## 10. 不要使用 forEch 循环。

```dart
void main() {
  List<int> ids = [];

  /// 错误
  ids.forEach((element) {});
}
```

```dart
void main() {
  List<int> ids = [];

  /// 正确
  for (var element in ids) {}
}
```

使用 `for in` 循环它更具可读性和方便性。

## 11. 不要使用“+”运算符来连接字符串。

```dart
void main() {
  String m1 = "Hello";
  String m2 = "How are you?";
  String m3 = "Ankit!";

  /// 错误
  String message = m1 + m2 + m3;
}
```

```dart
void main() {
  String m1 = "Hello";
  String m2 = "How are you?";
  String m3 = "Ankit!";

  /// 正确
  String message = '$m1 $m2 $m3';
}
```

使用 `$` 符号而不是使用`“+”`运算符。

## 12. 不要使用 length 来检查数组是否为空。

```dart
void main() {
  List<int> id = [];

  /// 错误
  if (id.length == 0) {}
}
```

```dart
void main() {
  List<int> id = [];

  /// 正确
  if (id.isEmpty) {}
}
```

使用 `isEmpty` 方法而不是检查 `lengt==0`。

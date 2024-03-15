# TextButtonFull 文本长按钮
```dart
import 'package:flutter/material.dart';

class TextButtonFull extends StatelessWidget {
  const TextButtonFull({Key? key, this.text, this.onPressed, this.textStyle}) : super(key: key);

  final String? text;
  final VoidCallback? onPressed;
  final TextStyle? textStyle;

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: onPressed,
      style: ButtonStyle(
        padding: MaterialStateProperty.all(EdgeInsets.zero),
        tapTargetSize: MaterialTapTargetSize.shrinkWrap,
        shape: MaterialStateProperty.all(
          const RoundedRectangleBorder(
            borderRadius: BorderRadius.zero,
          ),
        ),
        minimumSize: MaterialStateProperty.all(const Size(double.maxFinite, 50.0)),
      ),
      child: Text(
        text!,
        style: textStyle,
      ),
    );
  }
}

```

- 使用

```dart
TextButtonFull(
  text: '确定',
  textStyle: const TextStyle(
    color: Colors.black,
  ),
  onPressed: () {
    _pickImage(ImageSource.camera);
  },
),
```
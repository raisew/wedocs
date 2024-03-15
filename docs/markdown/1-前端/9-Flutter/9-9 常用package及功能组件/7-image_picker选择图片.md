# image_picker 选择图片
## 1.package地址

https://pub-web.flutter-io.cn/packages/logger

## 2. 引入

在 `pubspec.yaml` 中添加以下依赖：

```dart
dependencies:
  flutter:
    sdk: flutter

  image_picker: ^1.0.7
```

## 3. 封装

```dart
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import '../utils/app_logger.dart';
import './text_button_full.dart';

class ImgPicker extends StatefulWidget {
  const ImgPicker({Key? key, this.onChanged}) : super(key: key);
  final ValueChanged? onChanged;

  @override
  State<ImgPicker> createState() => _ImgPickerState();
}

class _ImgPickerState extends State<ImgPicker> {
  File? _imgFile;
  Future<void> _pickImage(ImageSource source) async {
    final picker = ImagePicker();
    try {
      final pickedFile = await picker.pickImage(
        source: source,
        maxWidth: 1000.0,
        maxHeight: 1000.0,
        imageQuality: 90,
      );
      _imgFile = pickedFile != null ? File(pickedFile.path) : null;
      XFile? webFile = pickedFile;
      widget.onChanged?.call({'file': _imgFile!, 'fileWeb': webFile});

      // widget.onChanged?.call(_imgFile!); // 调用回调函数
    } catch (e) {
      AppLogger().error(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        TextButtonFull(
          text: '拍摄',
          textStyle: const TextStyle(
            color: Colors.black,
          ),
          onPressed: () {
            _pickImage(ImageSource.camera);
          },
        ),
        const Divider(
          height: 1.0,
          color: Colors.black12,
        ),
        TextButtonFull(
          text: '从相册选择',
          textStyle: const TextStyle(
            color: Colors.black,
          ),
          onPressed: () {
            _pickImage(ImageSource.gallery);
          },
        ),
        const Divider(
          height: 1.0,
          color: Colors.black12,
        ),
        // _imgFile == null
        //     ? Text("请点击按钮选择图片")
        //     : Image.file(
        //         _imgFile!,
        //         width: 300,
        //         height: 300,
        //         fit: BoxFit.cover,
        //       ),
      ],
    );
  }
}
```
## 4. 使用

通过 `showCustomBottomSheet` 自己封装的方法弹出图片选择上传

```dart
showCustomBottomSheet(context, ImgPicker(
  onChanged: (value) {
    uploadImg(value); // 上传图片的方法
    Navigator.of(context).pop();
  },
));
```
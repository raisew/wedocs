# Image my_image 自用图片封装

```dart
import 'dart:convert';
import 'dart:typed_data';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter/material.dart';
import '../config/config.dart';

class MyImage extends StatelessWidget {
  final String url;
  final double? width;
  final double? height;
  final BoxFit? fit;
  final Widget loadingWidget;
  final Widget errorWidget;
  final bool? loading;

  const MyImage({
    super.key,
    required this.url,
    this.width,
    this.height,
    this.fit,
    this.loading,
    this.loadingWidget = const CircularProgressIndicator(
      color: Colors.black38,
    ),
    this.errorWidget = const Icon(Icons.error),
  });

  String imgType(String url) {
    // 判断链接是否以常见的网络协议前缀开头
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return 'network'; // 不是本地链接
    } else if (url.startsWith('data:image/svg')) {
      return 'svg';
    } else if (url.startsWith('data:image/')) {
      return 'base64';
    } else if (url.startsWith('/uploads/')) {
      return 'uploads';
    } else {
      return 'asset'; // 是本地链接
    }
  }

  @override
  Widget build(BuildContext context) {
    if (imgType(url) == 'network') {
      return Image.network(
        url,
        width: width,
        height: height,
        fit: fit ?? BoxFit.cover,
        loadingBuilder: (BuildContext context, Widget child, ImageChunkEvent? loadingProgress) {
          if (loadingProgress == null) {
            return child;
          } else {
            if (loading == null || loading == false) {
              return child;
            }
            return Center(
              child: SizedBox(
                width: 24.0,
                height: 24.0,
                child: loadingWidget,
              ),
            );
          }
        },
        errorBuilder: (BuildContext context, Object error, StackTrace? stackTrace) {
          return errorWidget;
        },
      );
    } else if (imgType(url) == 'svg') {
      Uint8List bytes = base64Decode(url.split(',').last);
      return SvgPicture.memory(
        bytes,
        width: width,
        height: height,
        fit: fit ?? BoxFit.cover,
        alignment: Alignment.bottomCenter,
      );
    } else if (imgType(url) == 'base64') {
      Uint8List bytes = const Base64Decoder().convert(url.split(',').last);
      return Image.memory(
        bytes,
        width: width,
        height: height,
        fit: fit ?? BoxFit.cover,
        errorBuilder: (BuildContext context, Object error, StackTrace? stackTrace) {
          return errorWidget;
        },
      );
    } else if (imgType(url) == 'uploads') {
      return Image.network(
        Config.apiUrl + url,
        width: width,
        height: height,
        fit: fit ?? BoxFit.cover,
        loadingBuilder: (BuildContext context, Widget child, ImageChunkEvent? loadingProgress) {
          if (loadingProgress == null) {
            return child;
          } else {
            if (loading == null || loading == false) {
              return child;
            }
            return Center(
              child: SizedBox(
                width: 24.0,
                height: 24.0,
                child: loadingWidget,
              ),
            );
          }
        },
        errorBuilder: (BuildContext context, Object error, StackTrace? stackTrace) {
          return errorWidget;
        },
      );
    } else {
      return Image.asset(
        url,
        width: width,
        height: height,
        fit: fit ?? BoxFit.cover,
        errorBuilder: (BuildContext context, Object error, StackTrace? stackTrace) {
          return errorWidget;
        },
      );
    }
  }
}

```

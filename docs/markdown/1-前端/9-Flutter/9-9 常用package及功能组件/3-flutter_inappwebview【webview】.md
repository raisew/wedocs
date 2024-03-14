# flutter_inappwebview 

## 1.package地址

https://pub.dev/packages/flutter_inappwebview

## 2.引入

在 `pubspec.yaml` 中添加以下依赖：

```dart
dependencies:
  flutter:
    sdk: flutter
  # print colorful logs
  flutter_inappwebview: ^6.0.0
```

## 3. 使用案例

在 `android/app/src/main/AndroidManifest.xml`里面添加

```java
<application android:usesCleartextTraffic="true">
```

```dart
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

final InAppLocalhostServer localhostServer = InAppLocalhostServer(documentRoot: 'assets/kline', port: 8100);

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // start the localhost server
  if (!kIsWeb) {
    // start the localhost server
    await localhostServer.start();
    print(localhostServer);
  }

  if (!kIsWeb && defaultTargetPlatform == TargetPlatform.android) {
    await InAppWebViewController.setWebContentsDebuggingEnabled(kDebugMode);
  }
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Main(),
    );
  }
}

class Main extends StatelessWidget {
  Main({super.key});
  InAppWebViewController? _webViewController;
  String htmlUrl = kIsWeb ? 'assets/kline/index.html?pair=usdtbtc' : 'http://localhost:8100/index.html';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        width: double.infinity,
        height: 400.0,
        child: InAppWebView(
          initialSettings: InAppWebViewSettings(
            isInspectable: kDebugMode,
            allowFileAccess: true,
            allowFileAccessFromFileURLs: true,
            javaScriptEnabled: true,
            javaScriptCanOpenWindowsAutomatically: true,
            supportMultipleWindows: true,
          ),
          // initialFile: "assets/kline/index.html?pair=usdtbtc",
          initialUrlRequest: URLRequest(url: WebUri(htmlUrl)),
          // initialUrlRequest: URLRequest(url: WebUri("https://www.baidu.com", forceToStringRawValue: true)),
          onWebViewCreated: (InAppWebViewController controller) {
            _webViewController = controller;
            print(controller);
          },
          onLoadStart: (controller, url) {
            print(url);
          },
          onLoadStop: (controller, url) {
            print(url);
          },
        ),
      ),
    );
  }
}

```

## 4.使用klinecharts实现K线图功能

assets/kline 里面的文件

[kline文件](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202403131037231.zip)

## 5.封装成app时，添加返回功能

```dart
import 'dart:ffi';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
// import 'package:url_launcher/url_launcher.dart';
// import 'package:flutter_fai_webview/flutter_fai_webview.dart';

final InAppLocalhostServer localhostServer = InAppLocalhostServer(documentRoot: 'assets/kline', port: 8100);

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // start the localhost server
  if (!kIsWeb) {
    // start the localhost server
    await localhostServer.start();
    print(localhostServer);
  }

  if (!kIsWeb && defaultTargetPlatform == TargetPlatform.android) {
    await InAppWebViewController.setWebContentsDebuggingEnabled(kDebugMode);
  }
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Main(),
    );
  }
}

class Main extends StatelessWidget {
  Main({super.key});
  InAppWebViewController? _webViewController;
  String htmlUrl = kIsWeb ? 'assets/kline/index.html?pair=usdtbtc' : 'http://localhost:8100/index.html';
  // 退出时间间隔
  final int exitTimeInterval = 1500;
  // 上次点击返回时间
  DateTime? lastPressedAt;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        top: true,
        bottom: true,
        child: PopScope(
          canPop: false,
          onPopInvoked: (bool didPop) async {
            if (didPop) {
              return;
            }
            bool? isCanBack = await _webViewController?.canGoBack();
            print('返回状态$isCanBack');

            if (isCanBack != null && isCanBack) {
              print('1');
              _webViewController?.goBack();
            } else {
              print('2');

              if (lastPressedAt == null || DateTime.now().difference(lastPressedAt!) > Duration(milliseconds: exitTimeInterval)) {
                print('3');
                // 更新上次点击返回时间为当前时间
                lastPressedAt = DateTime.now();
                // 提示再按一次返回退出
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(Radius.circular(50)),
                    ),
                    elevation: 0,
                    behavior: SnackBarBehavior.floating,
                    width: 280.0,
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
            }
          },
          child: SizedBox(
            width: double.infinity,
            height: 400.0,
            child: InAppWebView(
              initialSettings: InAppWebViewSettings(
                isInspectable: kDebugMode,
                allowFileAccess: true,
                allowFileAccessFromFileURLs: true,
                javaScriptEnabled: true,
                javaScriptCanOpenWindowsAutomatically: true,
                supportMultipleWindows: true,
              ),
              // initialFile: "assets/kline/index.html?pair=usdtbtc",
              // initialUrlRequest: URLRequest(url: WebUri(htmlUrl)),
              initialUrlRequest: URLRequest(url: WebUri("https://www.baidu.com", forceToStringRawValue: true)),
              onWebViewCreated: (InAppWebViewController controller) {
                _webViewController = controller;
                print(controller);
              },
              onLoadStart: (controller, url) {
                print(url);
              },
              onLoadStop: (controller, url) {
                print(url);
              },
            ),
          ),
        ),
      ),
    );
  }
}

```
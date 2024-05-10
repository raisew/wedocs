# flutter_native_splash 启动屏幕

## 简介

[flutter_native_splash](https://pub.dev/packages/flutter_native_splash) 是一个 Flutter 库，可以帮助您在启动应用程序时添加原生的启动屏幕。通过使用 flutter_native_splash，您可以轻松地创建适用于 Android 和 iOS 平台的启动屏幕，而无需手动编辑原生代码。

## 使用场景

flutter_native_splash 适用于以下场景：

- 想要为您的应用程序添加原生启动屏幕。
- 不希望手动编辑原生代码。

## 使用步骤

### 步骤 1：

要使用 flutter_native_splash 库，您需要在项目中添加依赖项。您可以在 pubspec.yaml 文件中添加以下代码：

```yaml
dependencies:
  flutter_native_splash: ^2.3.0
```

如下图：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404011135194.png)

然后在终端执行命令：

```sh
flutter pub get
```

看到库更新成功了说明库就下载好了。

### 步骤 2：

自定义下面的设置，然后添加到工程的 pubspec.yaml 文件中，或者在工程文件夹下放置名为 flutter_native_splash.yaml 的新文件。个人强烈建议单独创建一个 flutter_native_splash.yaml 的新文件，特别注意名字就叫 flutter_native_splash.yaml 不要取其他名字，如下图：

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404011136232.png)

创建好之后，然后设置里面的内容，内容如下，直接全部复制即可。

```yaml
flutter_native_splash:
  # 该锯生成原生代码来自定义 Flutter 默认白色原生闪屏界面的背景色和闪屏图像。
  # 自定义下面的参数，然后在命令行终端运行下面的命令：
  # flutter pub run flutter_native_splash:create
  # 要恢复为 Flutter 默认的白色闪屏界面，运行下面的命令：
  # flutter pub run flutter_native_splash:remove

  # 只有 color 或 background_image 是必需的参数。使用 color 将闪屏界面的背景设置为单色。
  # 使用 background_image 可将 png 图像设置为闪屏界面的背景。该图像会被拉伸以适应应用大小。
  # color 和 background_image 不能同时设置，只有一个会被使用。
  color: "#ffffff"
  image: "assets/splash.png"

  # 以下是可选的参数。去掉注释前面的 #可使参数起作用。

  # image 参数允许你指定在闪屏界面使用的图像。它必须是 png 文件，且应该是用于4倍像素密度的大小。
  #image: assets/splash.png

  # 该属性允许你指定图像作为商标在闪屏界面显示。它必须是 png 文件。现在它只支持 Android 和 iOS 。
  #branding: assets/dart.png

  # 为黑暗模式指定商标图像
  #branding_dark: assets/dart_dark.png

  # 要将商标图像放置在界面底部，可以使用 bottom 、 bottomRight 和 bottomLeft 。如果未指定或者指定了其它值，使用默认值 bottom 。
  # 确保该内容模式值与 android_gravity 值 和 ios_content_mode 值不相似。
  #branding_mode: bottom

  # color_dark 、 background_image_dark 和 image_dark 用于设备在黑暗模式时设置背景色和图像。
  # 如果没有指定，应用会使用上面的参数。如果指定了 image_dark ，必须要指定 color_dark 或 background_image_dark 。
  # color_dark 和 background_image_dark 不能同时设置。
  #color_dark: "#042a49"
  #background_image_dark: "assets/dark-background.png"
  #image_dark: assets/splash-invert.png

  android_12:
    image: assets/splash.png
    icon_background_color: "#ffffff"
    image_dark: assets/splash.png
    icon_background_color_dark: "#ffffff"

  # android 、 ios 和 web 参数可用于不为对应的平台生成闪屏界面。
  #android: false
  #ios: false
  #web: false

  #  可用 android_gravity 、 android_gravity 、 ios_content_mode 和 web_image_mode 来设置闪屏图像的位置。默认是居中。
  #
  # android_gravity 可以是以下 Android Gravity 其中之一 (查看
  # https://developer.android.com/reference/android/view/Gravity): bottom 、 center 、
  # center_horizontal 、 center_vertical 、 clip_horizontal 、 clip_vertical 、
  # end 、 fill 、 fill_horizontal 、 fill_vertical 、 left 、 right 、 start 或 top 。
  android_gravity: center
  #
  # ios_content_mode 可以是以下 iOS UIView.ContentMode 其中之一 (查看
  # https://developer.apple.com/documentation/uikit/uiview/contentmode): scaleToFill 、
  # scaleAspectFit 、 scaleAspectFill 、 center 、 top 、 bottom 、
  # left 、 right 、 topLeft 、 topRight 、 bottomLeft 或  bottomRight 。
  #ios_content_mode: center
  #
  # web_image_mode 可以是以下模式其中之一：center 、 contain 、 stretch 和 cover 。
  web_image_mode: center

  # 要隐藏通知栏，使用 fullscreen 参数 。在 Web 上不起作为，因为 Web 没有通知栏。默认是 false 。
  # 注意: 不像 Android 、 iOS 当应用加载时不会自动显示通知栏。
  #       要显示通知栏，在 Flutter 应用中添加以下代码：
  #       WidgetsFlutterBinding.ensureInitialized();
  #       SystemChrome.setEnabledSystemUIOverlays([SystemUiOverlay.bottom, SystemUiOverlay.top]);
  fullscreen: true

  # 如果改变了 info.plist 的名字，可以使用 info_plist_files 指定对应的文件名。
  # 只需移除下面三行前面的 # 字符，不要移除任何空格：
  #info_plist_files:
  #  - 'ios/Runner/Info-Debug.plist'
  #  - 'ios/Runner/Info-Release.plist'
```

说明一下，上面我的需求就是一张图片当启动图，所以设置了一张图，每个人根据自己的需求进行不同的设置即可。

### 步骤 3：

添加文件之后之后，在命令行终端运行以下命令：

```sh
flutter pub run flutter_native_splash:create
```

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404011137655.png)

当包完成运行后，你的闪屏界面就准备好了。

要指定 YAML 文件的位置，只需在终端命令后添加 --path：

```sh
flutter pub run flutter_native_splash:create --path=path/to/my/file.yaml

```

**注意**：上面只是一个示例，就是需要找到自己 `flutter_native_splash.yaml` 文件所在的位置，如果不确定的话，可以按如下操作进行获取文件路径，然后把上面命令中 “`path/to/my/file.yaml`” 替换成自己文件的路径，获取路径的方法如下图：

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404011138984.png)

如果上面和我这里是一模一样的操作的话，可以直接复制下面的命令进行操作

```sh
flutter pub run flutter_native_splash:create --path=flutter_native_splash.yaml

```

执行效果如下图：

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404011139116.png)

这里就是像上图里面所示的文字要特别说明一下，如果 `flutter_native_splash.yaml` 里面的内容有变动更新，建议再次执行一遍上面的命令。

### 步骤 4：

在 main.dart 进行启动图相关移除和显示时间设置，如下图：

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404011139648.png)

代码如下：

```dart
import 'package:flutter_native_splash/flutter_native_splash.dart';

void main() async {
  WidgetsBinding widgetsBinding = WidgetsFlutterBinding.ensureInitialized();
  // Keep native splash screen up until app is finished bootstrapping
  FlutterNativeSplash.preserve(widgetsBinding: widgetsBinding);
  runApp(MyApp());
  // Remove splash screen when bootstrap is complete
  FlutterNativeSplash.remove();
}
```

或者

```dart
//原生的启动屏幕
import 'package:flutter_native_splash/flutter_native_splash.dart';


void main() {

  WidgetsFlutterBinding.ensureInitialized();

  initialization(null);

  runApp(const MyApp());
}

//启动图延时移除方法
void initialization(BuildContext? context) async {
  //延迟3秒
  await Future.delayed(const Duration(seconds: 3));
  FlutterNativeSplash.remove();
}

```

同样也可以用下面的方法

默认，闪屏界面在首次绘制 Flutter 时会被移除。如果想要在应用初始化时保持闪屏界面，可以如下使用 removeAfter 方法：

```dart
mport 'package:flutter_native_splash/flutter_native_splash.dart';

void main() {
  FlutterNativeSplash.removeAfter(initialization);
  // runApp 会运行，但是在初始化完成前不会显示：
  runApp(const MyApp());
}

void initialization(BuildContext context) async {
  // 这里可以在闪屏界面显示时初始化应用所需的资源。
  // 该函数完成后，闪屏界面会被移除。
}

```

**注意**: 为了使用此方法， `flutter_native_splash` 必须在 `pubspec.yaml` 的 `dependencies` 部分里，而不是在 `dev_dependencies` 里。之前的版本是在推后者里。

提一句如果需要移除的可以执行下面这个命令

```sh
flutter pub run flutter_native_splash:remove
```

到此为止在 Flutter 中集成和使用 flutter_native_splash 库的详细步骤就已经全部完成了。

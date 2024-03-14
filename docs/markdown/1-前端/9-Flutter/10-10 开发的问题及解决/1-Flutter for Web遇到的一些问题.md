# Flutter for Web遇到的一些问题 

## 1.渲染方式
`Flutter for Web` 有两种渲染方式 `html` 和 `canvaskit` ，打包命令分别如下

::: code-group

```sh [html]
  flutter build web --web-renderer html --release
```
```sh [canvaskit]
  flutter build web --web-renderer canvaskit --release
```
:::

默认使用的是 `canvaskit` ，但是对中文支持不好，刚开始加载会显示乱码，那是因为默认使用的是 `Nato` 字体，会去网上下载，就会有明显的感觉，可以设定项目字体就能解决；当然 `html` 方式没有这个问题，但是如果项目中有使用 `RenderRepaintBoundary` 保存图片的功能， `html` 的方式就会报错了，所以还是建议使用 `canvaskit` 。

打包后确保路径没问题，建议把 `index.html` 文件中的`<base href="/">`改成`<base href="./">`

## 2.跨域问题

`Web` 开发都会遇到跨域问题，本地开发的解决方式目前我看到的有两种，修改启动配置或者设置本地代理服务器

### 修改启动配置

因为目前的开发环境只支持 Chrome，其实就是使用浏览器自带的非安全模式启动，只需要修改下面路径下的文件

> `flutter -> packages -> flutter_tools -> lib -> src -> web -> chrome.dart
`

在 `--disable-translate` 后面 添加 `--disable-web-security` ，然后删除下列文件，运行项目即可

> `flutter -> bin -> cache -> flutter_tools.stamp`
>
> `flutter -> bin -> cache -> flutter_tools.snapshot`

其实 `Safari` 也是可以的，只需要运行项目之后打开 `Safari` ，输入 `Chrome` 打开的地址，打开开发下面的 停用跨域限制 即可

### 设置本地代理服务器

安装 `shelf_proxy` 依赖，使用以下代码设置代理服务器，启用请求转发
```dart
Future<void> main() async {
  var reaHandle = proxyHandler('https://duicode.com/api');
  var server = await shelf_io.serve(reaHandle, 'localhost', 8080);
  server.defaultResponseHeaders.add('Access-Control-Allow-Origin', '*');
  server.defaultResponseHeaders.add('Access-Control-Allow-Credentials', true);
}
```
然后设置项目的请求地址为本机的 `8080` 端口即可。

## 3. 去除请求地址的 `#` 号

访问项目的时候会发现 `url` 上都有一个 `#` 符号，请使用 `flutter_web_plugins` 库中提供的 `setUrlStrategy` 方法，只需要在 `main` 中添加下面一句即可
```dart
import 'package:flutter_web_plugins/url_strategy.dart';

void main() {
  usePathUrlStrategy();
  runApp(ExampleApp());
}

```
## 4. 一些库的适配

`webview_flutter` 也是对 `web` 做了适配的，只需要设置下面一句即可

```dart
WebView.platform = WebWebViewPlatform();
```

包括 `dio` 也是需要简单适配的，代码如下

```dart
dio.httpClientAdapter = BrowserHttpClientAdapter();
```
可是 `web` 上就不能抓包了，不过 `web` 上的网络请求直接可以看到了，也没必要抓包

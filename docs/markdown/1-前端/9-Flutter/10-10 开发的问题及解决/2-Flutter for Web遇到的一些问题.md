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
### 项目部署后，直接通过路由访问会出现 `404` 错误

**问题：**

解决了上述问题，测试阶段的各个功能都正常。然而部署上线之后，直接访问子路径下的某个页面，居然返回了 404 错误。

命名路由的 `routes` 是有的，或者如果使用 `GetX` ，设置了 `getPages` 是一样的。在调试模式下，这个问题是不存在的，仅仅出现在部署之后，一度让我大为困惑。

对照之前的改动，把 `URL` 策略切换回 `Hash` 模式，这个问题就消失了,

难道是 `Flutter Web` 编译的 `bug` 嘛?

**解决方法：**

一通搜索后总算有了结论，原来是托管应用页面的 `web` 服务(例如 `Nginx` )，默认会把多级路径的 `URL` 按目录去解析，访问最后一个目录下的 `index.html` 文件。而对于单页应用来说，显然后续的路径都是作为参数来使用的。而 `Hash` 模式由于使用一个井号把后续路径隔开了，自然就没有这个问题了

- `Apache Web`服务器（`.htaccess`文件）
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
- `Nginx Web`服务器（`nginx.conf`文件）

```nginx
location / {
  # ...
  try_files $uri $uri/ /index.html;
}
```

- `Vercel` 
在 `Vercel` 上配置路由重定向也是很简单的。 `Vercel` 提供了一个名为 `vercel.json` 的配置文件，你可以在其中指定路由重定向规则。

以下是一个示例 `vercel.json` 文件，用于将所有的URL请求重定向到 `index.html`：
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

- `Firebase Hosting`

`Firebase Hosting` 通常在 `firebase.json` 中配置重写规则：

```json
{
  "hosting": {
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

```

意为:先尝试访问 `URL` 和其路径下的文件，如果不存在，则直接访问根目录的 `index.html` 。

为什么开发的时候没有出现这个问题呢?原因就是在调试模式下， `Flutter` 优化了本地开发服务器，会优雅的处理各类 `URL` 策略并指向根目录的 `Html` 文件，也就是替我们做了上面这一步。

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

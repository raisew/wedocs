# flutter 打包 APP

## 1. 修改 App 名称

主要在两个地方进行修改
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404150933339.png)
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404150938471.png)

## 2. 添加网络权限

如果 `App` 没有涉及到联网步骤可以跳过这个步骤，本 `App` 进行了网络访问，故需要进行两
处设置：

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404150939127.png)
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404150940894.png)

代码如下：

```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
```

## 3. 图标

可以借助 `Ai` 制作图标：

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404150943582.png)

也可以是普通的 png 图片，进入网站：
[图标工场 - 移动应用图标/启动图生成工具，一键生成所有尺寸的应用图标/启
动图 (wuruihong.com)](https://wuruihong.com)

得到不同分辨率下的文件，如下：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404150954057.png)

接着下载下来并解压得到如下：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151037284.png)

分别将之中的文件替换掉原来的文件，：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151038687.png)

## 4. App 签名以及配置

### 生成安卓密钥

打开终端，输入：

```sh
Keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

如下：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151039019.png)
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151040351.png)

按下回车后：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151041282.png)

由于作者是在项目开发工具 idea 中直接调用终端进行操作，生成的文件在项目根目录下,如下：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151041195.png)

接下来将这个文件复制或者裁剪到 `Android` 中的 `App` 目录下，如下：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151042658.png)

然后，在 android 目录下新建一个名为 `key.properties` 的文件，写入如下内容：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151045482.png)

代码：

```sh
storePassword=123456
keyPassword=123456
keyAlias=my-key-alias
storeFile=my-release-key.keystore
```

之后，在 `build.gradle` 中配置签名，进行如下操作：

将 `android{` 进行替换：

替换前：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151047731.png)

替换后：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151048848.png)

代码：

```java
  def keystorePropertiesFile = rootProject.file("key.properties")
  def keystoreProperties = new Properties()
  keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
  android {
```

接着继续替换该文件的一处：

替换前：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151056931.png)

替换后：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151056289.png)

代码：

```sh
signingConfigs {
release {
keyAlias keystoreProperties['keyAlias']
keyPassword keystoreProperties['keyPassword']
storeFile file(keystoreProperties['storeFile'])
storePassword keystoreProperties['storePassword']
}
}
buildTypes {
release {
signingConfig signingConfigs.release
//signingConfig signingConfigs.debug
}
}
```

## 5. 生成 App

项目终端下输入:

```sh
flutter build app
```

即可：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151058991.png)

实际上这是一种生成不同种类系统架构都可以适用的 `app` 包，比较大，解决方法是输入：

```sh
flutter build apk --target-platform android-arm,android-arm64,android-x64 --split-per-abi
```

来分别构建不同架构的 `app` ，如下：
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151059850.png)

可以看出，这样生成 `app` 的大小几乎是之前方法的 `1/3`，市面上手机主要使用 `armeabi` 架构
的 `app`，`x86_64` 多见于平板和模拟器

虽然打包后形成了文件，但是如果使用的开发工具时 `idea` 等时，可能不能看见 `build` 目录，
实际上 `build` 目录在根目录下，打开资源管理器即可看到，如下：

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202404151100284.png)

## 6. 打包 win 平台

终端输入：

```sh
flutter build windows
```

## 7. 打包 web 平台

终端输入(以下三个中的一个，优选第一个)：

```sh
flutter build web
```

```sh
flutter build web --web-renderer html
```

```sh
flutter build web --web-renderer canvaskit
```

打包的结果在 `build/web` 中，

在 `web` 文件夹中启动终端，输入

```sh
python3 -m http.server
```

或者

```sh
py -m http.server
```

之后在本地就可以访问 `localhost:8000` 就可以看到界面了

端口默认是 `8000`，也可以自定义端口

```sh
py -m http.server xxx
```

# Flutter 常用命令

## 1.创建和管理项目

- 创建新项目：
```bash
flutter create <project_name>
```

- 为项目添加支持的平台:
```bash
flutter create .
```

- 查看项目中的pub依赖:
```bash
flutter pub deps
```

- 运行测试:
```bash
flutter test
```

- 启用 `web` 支持:
```bash
flutter create . --web
```

## 2.运行和构建

- 运行应用程序:
```bash
flutter run
```

- 在设备上运行调试模式:
```bash
flutter run --debug
```

- 在设备上运行发行模式:
```bash
flutter run --release
```

- 构建应用程序:
```bash
flutter build <platform>
```

- 构建 `web` 应用程序:
```bash
flutter build web
```

- 构建应用程序并导出 `APK` （安卓）:
```bash
flutter build apk
```

- 构建应用程序并导出 `AAB` （安卓）:
```bash
flutter build appbundle
```

- 构建应用程序并导出 `IPA（iOS）`:
```bash
flutter build ios
```

## 3.调试和分析

- 查看设备列表:
```bash
flutter devices
```

- 调试应用程序:
```bash
flutter attach
```

- 运行性能分析:
```bash
flutter analyze
```

- 使用 `Flutter Inspector` 调试 `UI` :
```bash
flutter inspect
```

## 4.依赖管理

- 获取或更新依赖:
```bash
flutter pub get
```

- 添加依赖:
```bash
flutter pub add <package_name>
```

- 升级依赖:
```bash
flutter pub upgrade
```

- 移除依赖:
```bash
flutter pub remove <package_name>
```

## 5.其他命令

- 升级`Flutter`:
```bash
flutter upgrade
```

- 生成应用程序的图标和启动画面:
```bash
flutter pub run flutter_launcher_icons:main
flutter pub run flutter_native_splash:create
```

- 生成本地化资源:
```bash
flutter pub run flutter_localizations:generate
```

- 设置应用程序基本路径`（base href）`:
```bash
flutter build web --base-href=<base_href>
```

- 设置`Web`渲染器:
```bash
flutter run --web-renderer=<renderer> 
```
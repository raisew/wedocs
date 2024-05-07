# getx 实现换肤、多语言、api 请求、路由封装等多功能脚手架

## 1. pubspec.yaml 添加 package

将下面依赖复制到 `pubspec.yaml` 文件的 `dependencies` 下面

```yaml
logger: ^2.2.0

get: ^4.6.5
get_storage: ^2.1.1

dio: ^5.4.1

flutter_swiper_view: ^1.1.8

contained_tab_bar_view: ^0.8.0

flutter_easyloading: ^3.0.0

animations: ^2.0.11

image_picker: ^1.0.7

easy_refresh: ^3.3.4
```

`analysis_options.yaml` 文件

```yaml
# This file configures the analyzer, which statically analyzes Dart code to
# check for errors, warnings, and lints.
#
# The issues identified by the analyzer are surfaced in the UI of Dart-enabled
# IDEs (https://dart.dev/tools#ides-and-editors). The analyzer can also be
# invoked from the command line by running `flutter analyze`.

# The following line activates a set of recommended lints for Flutter apps,
# packages, and plugins designed to encourage good coding practices.
analyzer:
  errors:
    depend_on_referenced_packages: ignore
    deprecated_member_use: ignore
    file_names: ignore
    must_be_immutable: ignore
    non_constant_identifier_names: ignore
    use_function_type_syntax_for_parameters: ignore
    use_super_parameters: ignore

include: package:flutter_lints/flutter.yaml

linter:
  # The lint rules applied to this project can be customized in the
  # section below to disable rules from the `package:flutter_lints/flutter.yaml`
  # included above or to enable additional rules. A list of all available lints
  # and their documentation is published at https://dart.dev/lints.
  #
  # Instead of disabling a lint rule for the entire project in the
  # section below, it can also be suppressed for a single line of code
  # or a specific dart file by using the `// ignore: name_of_lint` and
  # `// ignore_for_file: name_of_lint` syntax on the line or in the file
  # producing the lint.
  rules:
    - avoid_print
    - avoid_returning_null_for_void
    # constant_identifier_names: false
    # avoid_print: false  # Uncomment to disable the `avoid_print` rule
    # prefer_single_quotes: true  # Uncomment to enable the `prefer_single_quotes` rule
# Additional information about this file can be found at
# https://dart.dev/guides/language/analysis-options
```

## 2. 项目结构

```
|-- lib
    |-- main.dart
    |-- api
    |   |-- api.dart
    |   |-- apis.dart
    |   |-- http.dart
    |-- auth
    |   |-- auth_controller.dart
    |-- components
    |   |-- CusRouter.dart
    |   |-- images_picker.dart
    |   |-- image_picker.dart
    |   |-- keyback_pop.dart
    |   |-- my_boottom_sheet.dart
    |   |-- my_image.dart
    |   |-- my_marquee.dart
    |   |-- my_textfield.dart
    |   |-- open_page.dart
    |   |-- picker.dart
    |   |-- remote_image.dart
    |   |-- text_button_full.dart
    |-- config
    |   |-- config.dart
    |-- locales
    |   |-- locale.dart
    |   |-- locale_controller.dart
    |   |-- locale_set.dart
    |   |-- langs
    |       |-- intl_de_de.dart
    |       |-- intl_zh_cn.dart
    |-- pages
    |   |-- hall
    |   |   |-- hall.dart
    |   |-- home
    |   |   |-- home.dart
    |   |-- login
    |   |   |-- login.dart
    |   |-- mine
    |   |   |-- mine.dart
    |   |-- order
    |   |   |-- order.dart
    |   |-- register
    |   |   |-- register.dart
    |   |-- root
    |       |-- root.dart
    |       |-- root_controller.dart
    |-- routes
    |   |-- routes.dart
    |-- themes
    |   |-- themes.dart
    |   |-- themes_controller.dart
    |   |-- theme_colors.dart
    |-- utils
        |-- app_logger.dart
        |-- create_page.dart
        |-- platform.dart
        |-- show_bottom_sheet.dart
        |-- storage.dart
        |-- store.dart
```

## 3. main.dart 文件

```dart
import 'package:flutter/material.dart';
import 'dart:ui';
import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:flutter_native_splash/flutter_native_splash.dart';

// import 'package:flutter_web_plugins/url_strategy.dart';
import './routes/routes.dart';
import './pages/root/root.dart';
import './locales/locale.dart';
import './themes/themes_controller.dart';
import './locales/locale_controller.dart';
import './auth/auth_controller.dart';
import './pages/login/login.dart';

void main() async {
  WidgetsBinding widgetsBinding = WidgetsFlutterBinding.ensureInitialized();
  FlutterNativeSplash.preserve(widgetsBinding: widgetsBinding);
  await GetStorage.init();
  // usePathUrlStrategy();
  runApp(MyApp());
  // Remove splash screen when bootstrap is complete
  FlutterNativeSplash.remove();
}

class MyApp extends StatelessWidget {
  MyApp({
    Key? key,
  }) : super(key: key);

  final ThemeController themeC = Get.put(ThemeController(), permanent: true);
  final LocaleController localeC = Get.put(LocaleController(), permanent: true);
  final AuthController authC = Get.put(AuthController(), permanent: true);
  void updateLanguage() {
    // 监听系统语言变化
    window.onLocaleChanged = () {
      var langCode = window.locale.languageCode;
      localeC.setLocale(langCode);
      Future.delayed(Duration.zero, () {
        String name = authC.token.isEmpty ? '/login' : '/root';
        Get.offAllNamed(name);
      });
    };
  }

  @override
  Widget build(BuildContext context) {
    return Obx(() => GetMaterialApp(
          title: '标题',
          initialRoute: '/',
          getPages: routes,
          home: authC.token.isEmpty ? Login() : const Root(),
          defaultTransition: Transition.cupertino,
          debugShowCheckedModeBanner: false,
          transitionDuration: const Duration(milliseconds: 300),
          translations: Messages(),
          locale: Locale(localeC.languageCode.value, localeC.countryCode.value),
          // theme: themes[themeName!.isNotEmpty ? themeName : Config.theme],
          theme: ThemeData(
            primaryColor: themeC.themeColor['c-primary'],
            scaffoldBackgroundColor: themeC.themeColor['bgc-base'],
            colorScheme: ColorScheme.fromSeed(
              seedColor: themeC.themeColor['c-primary'],
              brightness: themeC.themeColor['brightness'],
            ),
            textTheme: TextTheme(
              bodyText2: TextStyle(
                color: themeC.themeColor['c-text-1'],
                fontSize: 12.0,
              ),
            ),
            buttonTheme: ButtonThemeData(
              buttonColor: themeC.themeColor['c-primary'],
            ),
            elevatedButtonTheme: ElevatedButtonThemeData(
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all(themeC.themeColor['c-primary']),
                foregroundColor: MaterialStateProperty.all(
                  Colors.white, // 将文本颜色设置为白色
                ),
                overlayColor: MaterialStateProperty.all(
                  const Color.fromRGBO(200, 200, 200, 0.2), // 设置水波纹颜色为红色
                ),
              ),
            ),
            textButtonTheme: TextButtonThemeData(
              style: ButtonStyle(
                foregroundColor: MaterialStateProperty.all(themeC.themeColor['c-primary']),
                padding: MaterialStateProperty.all(const EdgeInsets.only(left: 6.0, right: 6.0)),
                tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                shape: MaterialStateProperty.all(
                  RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8.0),
                  ),
                ),
                overlayColor: MaterialStateProperty.all(
                  const Color.fromRGBO(200, 200, 200, 0.2), // 设置水波纹颜色为红色
                ),
              ),
            ),
            useMaterial3: true,
          ),
          // home: token!.isEmpty ? Login() : Root(),
          builder: EasyLoading.init(builder: (BuildContext content, child) {
            updateLanguage();
            return Scaffold(
              body: Center(
                child: Container(
                  constraints: const BoxConstraints(maxWidth: 540), // 设置页面最大宽度为540
                  child: child,
                ),
              ),
            );
          }),
        ));
  }
}

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key, required this.child});

  final Widget child;

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadData(); // 加载数据
  }

  Future<void> _loadData() async {
    // 模拟加载数据的过程
    await Future.delayed(const Duration(seconds: 3));
    setState(() {
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.transparent, // 设置为透明
      body: Stack(
        fit: StackFit.expand,
        children: [
          // 显示启动屏内容
          Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage('assets/splash.png'),
                fit: BoxFit.cover,
              ),
            ),
          ),
          // 加载指示器
          _isLoading
              ? Container(
                  color: Colors.black.withOpacity(0.5), // 半透明黑色背景
                  child: const Center(
                    child: CircularProgressIndicator(),
                  ),
                )
              : widget.child, // 加载完成后隐藏
        ],
      ),
    );
  }
}

```

## 4. config.dart 配置文件

```dart
class Config {
  static const String theme = 'light';

  static const String languageCode = 'de';

  static const String countryCode = 'DE';

  static const String apiUrl = 'https://admin.be-cc.com';
}
```

## 5. utils 工具类文件

### `app_logger.dart`

打印日志工具

```dart
import 'package:flutter/foundation.dart';
import 'package:logger/logger.dart';

class AppLogger {
  static final AppLogger _instance = AppLogger._internal();
  static Logger? _logger;

  factory AppLogger() {
    return _instance;
  }

  AppLogger._internal() {
    _logger = Logger(
      printer: PrettyPrinter(
        methodCount: 2,
        errorMethodCount: 8,
        lineLength: 120,
        colors: true,
        printEmojis: true,
        printTime: true,
      ),
    );
  }

  void log(dynamic message) {
    if (kDebugMode) {
      _logger?.d(message);
    }
  }

  void error(dynamic message, [dynamic error, StackTrace? stackTrace]) {
    if (kDebugMode) {
      _logger?.e(message, error: error, stackTrace: stackTrace);
    }
  }

  void warn(dynamic message) {
    if (kDebugMode) {
      _logger?.w(message);
    }
  }

  void info(dynamic message) {
    if (kDebugMode) {
      _logger?.i(message);
    }
  }
}
```

### `create_page.dart`

创建动画路由页面

```dart
import 'package:flutter/material.dart';

Route createPage(page) {
  return PageRouteBuilder(
    pageBuilder: (context, animation, secondaryAnimation) => page,
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      const begin = Offset(0.0, 1.0);
      const end = Offset.zero;
      const curve = Curves.ease;
      var tween = Tween(begin: begin, end: end).chain(CurveTween(curve: curve));
      final offsetAnimation = animation.drive(tween);
      return SlideTransition(
        position: offsetAnimation,
        child: child,
      );
    },
  );
}
```

### `platform.dart`

判断平台

```dart
import 'dart:io';

class Platforms {
  static bool isWeb = identical(0, 0.0);

  static bool isAndroid = Platform.isAndroid;

  static bool isIos = Platform.isIOS;

  static bool isWindows = Platform.isWindows;

  static bool isMacOS = Platform.isMacOS;

  static bool isLinux = Platform.isLinux;

  static bool isFuchsia = Platform.isFuchsia;
}
```

### `show_bottom_sheet.dart`

底部弹出操作界面

```dart
import 'package:flutter/material.dart';

void showCustomBottomSheet(BuildContext context, Widget bottomSheetContent, {bool showCancel = true}) {
  showModalBottomSheet(
    isScrollControlled: true,
    isDismissible: false,
    backgroundColor: Colors.white,
    elevation: 10.0,
    shape: const RoundedRectangleBorder(
      borderRadius: BorderRadius.vertical(top: Radius.circular(20.0)),
    ),
    context: context,
    useSafeArea: true,
    builder: (BuildContext context) {
      return ClipRRect(
        borderRadius: const BorderRadius.vertical(top: Radius.circular(20.0)),
        child: Container(
          padding: const EdgeInsets.all(0.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              // 底部操作表内容
              bottomSheetContent,
              // 添加一个取消按钮（可选）
              showCancel
                  ? Container(
                      width: double.infinity,
                      height: 8.0,
                      color: Colors.black12,
                    )
                  : const SizedBox(),
              showCancel
                  ? TextButton(
                      onPressed: () {
                        Navigator.of(context).pop(); // 关闭底部操作表
                      },
                      style: ButtonStyle(
                        padding: MaterialStateProperty.all(EdgeInsets.zero),
                        tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                        shape: MaterialStateProperty.all(
                          const RoundedRectangleBorder(
                            borderRadius: BorderRadius.zero,
                          ),
                        ),
                        minimumSize: const MaterialStatePropertyAll(Size(double.infinity, 50)),
                      ),
                      child: const Text(
                        '取消',
                        style: TextStyle(
                          color: Colors.black54,
                        ),
                      ),
                    )
                  : const SizedBox(), // 如果showCancel为false或null，返回一个空白的SizedBox
            ],
          ),
        ),
      );
    },
  );
}
```

### `store.dart`

`get_storage` 长缓存封装

```dart
import 'package:get_storage/get_storage.dart';

class Store {
  // 存储数据的方法
  static void set(String key, dynamic value) {
    var box = GetStorage();
    box.write(key, value);
  }

  // 获取数据的方法
  static dynamic get(String key) {
    var box = GetStorage();
    return box.read(key);
  }

  // 清除数据的方法
  static void clear() {
    var box = GetStorage();
    box.erase(); // 清空所有数据
  }
}
```

### `storage.dart`

`shared_preferences` 长缓存封装

```dart
import 'package:shared_preferences/shared_preferences.dart';

class Storage {
  /*保存数据时，调用set方法，传入key值和需要保存的数据*/
  static set(String key, dynamic value) async {
    //获得SharedPreferences的实例
    var prefer = await SharedPreferences.getInstance();
    // String 类型
    if (value is String) {
      prefer.setString(key, value);
    }
    //int 类型
    else if (value is int) {
      prefer.setInt(key, value);
    }
    //bool 类型
    else if (value is bool) {
      prefer.setBool(key, value);
    }
    //double 类型
    else if (value is double) {
      prefer.setDouble(key, value);
    }
    //List 类型
    else if (value is List) {
      /*如果 value 是List类型，则将它强制转换成一个字符串列表*/
      prefer.setStringList(key, value.cast<String>());
    }
  }

  // 读取数据
  /*传入key值，从 key 值中读取数据并赋值给data，如果数据为空则返回0*/
  static get(String key) async {
    var prefer = await SharedPreferences.getInstance();
    var data = prefer.get(key);
    return data ?? '';
  }

  //清除 key 键的值
  static remove(String key) async {
    SharedPreferences prefer = await SharedPreferences.getInstance();
    prefer.remove(key);
  }

  //清除所有
  static removeall() async {
    SharedPreferences prefer = await SharedPreferences.getInstance();
    prefer.clear();
  }

  //key 键是否存在
  static containsKey(String key) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    return prefs.containsKey(key);
  }

  //获取所有的key
  static getKeys() async {
    var prefs = await SharedPreferences.getInstance();
    var keys = prefs.getKeys();
    return keys;
  }
}
```

## 6. auth_controller.dart 登录状态管理

```dart
import 'package:get/get.dart';
import '../../utils/store.dart';

class AuthController extends GetxController {
  var token = ''.obs;

  void setToken(val) {
    token.value = val;
    Store.set('token', token.value);
  }

  @override
  void onInit() async {
    setToken(Store.get('token') ?? '');
    super.onInit();
  }

  @override
  void onClose() {
    token.close();
    super.onClose();
  }
}
```

## 7. routes.dart 路由文件

```dart
import 'package:get/get.dart';
import '../pages/root/root.dart';
import '../pages/login/login.dart';

final routes = [
  GetPage(
    name: '/root',
    page: () => Root(),
    transition: Transition.rightToLeftWithFade,
  ),
  GetPage(
    name: '/login',
    page: () => Login(),
  ),
];
```

## 8. api dio 封装

### `http.dart`

`dio`请求封装，`get`、`post`、`put`、`delete`、`postFile`等方法

```dart
import 'dart:typed_data';
import 'package:dio/dio.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'dart:convert';
import '../config/config.dart';
import '../utils/Store.dart';
import '../utils/app_logger.dart';
import '../utils/platform.dart';
import 'package:get/get.dart' as getx;

class Http {
  static final Http _instance = Http._internal();
  late Dio _dio;

  factory Http() {
    return _instance;
  }

  Http._internal() {
    BaseOptions options = BaseOptions(
      baseUrl: Config.apiUrl,
      connectTimeout: const Duration(seconds: 30),
      receiveTimeout: const Duration(seconds: 30),
    );
    _dio = Dio(options);

    _dio.interceptors.add(InterceptorsWrapper(
      onRequest: (options, handler) async {
        // Do something before request is sent
        // Map<String, dynamic> requesets = {
        //   'method': options.method,
        //   'uri': options.uri,
        //   'header': options.headers,
        //   'params': options.data,
        // };
        // AppLogger().log('请求：$requesets');
        // AppLogger().log(requesets);
        handler.next(options); // Must call handler.next to continue
      },
      onResponse: (response, handler) async {
        // Do something with response data
        Map<String, dynamic> requesets = {
          'method': response.requestOptions.method,
          'uri': response.requestOptions.uri,
          'headers': response.requestOptions.headers,
          'data': response.requestOptions.data,
        };
        AppLogger().log('请求数据：$requesets');
        AppLogger().info('响应数据：${response.data}');
        AppLogger().info(response.data);
        handler.next(response); // Must call handler.next to continue
      },
      onError: (DioError e, handler) async {
        // Do something with response error
        AppLogger().error('请求错误: ${e.message}');
        handler.next(e); // Must call handler.next to continue
      },
    ));
  }

  Future<dynamic> request(
    String method,
    String path, {
    Map<dynamic, dynamic>? data,
    Map<String, dynamic>? queryParameters,
    Map<String, dynamic>? headers,
    bool loading = false,
  }) async {
    var token = await Store.get('token');
    var lang = await Store.get('languageCode');
    final options = Options(method: method);
    options.headers = {
      'content-type': 'application/json',
      'Accept-Language': lang ?? '',
      'token': token,
      ...?headers,
    };
    if (token.isNotEmpty) {
      if (method.toUpperCase() == 'GET') {
        queryParameters?['token'] = token.toString();
      } else {
        data?['token'] = token;
      }
    }
    final loadingStatus = loading;
    if (loadingStatus) {
      // Show loading indicator
      EasyLoading.show(maskType: EasyLoadingMaskType.clear);
    }

    try {
      final response = await _dio.request(path, data: data, queryParameters: queryParameters, options: options);
      final res = response.data;
      if (res['code'] != 1) {
        EasyLoading.showToast(res['msg']);
      }
      return response.data;
    } catch (e) {
      AppLogger().error(e);
      EasyLoading.showError('Network_error'.tr);
      return {};
    } finally {
      if (loadingStatus) {
        // Hide loading indicator
        EasyLoading.dismiss();
      }
    }
  }

  Future<dynamic> get(
    String path, {
    Map<String, dynamic>? queryParameters,
    Map<String, dynamic>? headers,
    bool loading = false,
  }) async {
    return request(
      'GET',
      path,
      queryParameters: queryParameters,
      headers: headers,
      loading: loading,
    );
  }

  Future<dynamic> post(
    String path, {
    Map<dynamic, dynamic>? data,
    Map<String, dynamic>? headers,
    bool loading = false,
  }) async {
    return request(
      'POST',
      path,
      data: data,
      headers: headers,
      loading: loading,
    );
  }

  Future<dynamic> put(
    String path, {
    Map<String, dynamic>? data,
    Map<String, dynamic>? headers,
    bool loading = false,
  }) async {
    return request(
      'PUT',
      path,
      data: data,
      headers: headers,
      loading: loading,
    );
  }

  Future<dynamic> delete(
    String path, {
    Map<String, dynamic>? data,
    Map<String, dynamic>? headers,
    bool loading = false,
  }) async {
    return request(
      'DELETE',
      path,
      data: data,
      headers: headers,
      loading: loading,
    );
  }

  Future<dynamic> postForm(
    String path, {
    Map<String, dynamic>? data,
    bool loading = true,
  }) async {
    final headers = {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };
    return post(
      path,
      data: data,
      headers: headers,
      loading: loading,
    );
  }

  // Function to handle file upload
  Future<dynamic> postFile(
    String path,
    Map fileData, {
    Map<String, dynamic>? data,
    Map<String, dynamic>? headers,
    bool loading = true,
  }) async {
    var token = await Store.get('token');
    String fileName = fileData['file'].path.split('/').last;
    dynamic file;
    if (Platforms.isWeb) {
      Uint8List bytes = await fileData['fileWeb'].readAsBytes();
      var base64Url = 'data:image/png;base64,${base64Encode(bytes)}';
      file = MultipartFile.fromString(
        base64Url,
        filename: fileName,
      );
      // file = MultipartFile(
      //   fileData['fileWeb'].readAsBytes().asStream(),
      //   bytes.length,
      //   filename: fileName,
      // );
    } else {
      file = await MultipartFile.fromFile(fileData['file'].path, filename: fileName);
    }
    FormData formData = FormData.fromMap({
      'file': file,
      'token': token,
      ...?data,
    });

    final options = Options(
      headers: {
        'Content-type': 'multipart/form-data',
        ...?headers,
      },
    );

    final loadingStatus = loading; // Assume you want to show loading indicator here
    if (loadingStatus) {
      // Show loading indicator
      EasyLoading.show();
    }
    try {
      final response = await _dio.post(path, data: formData, options: options);
      return response.data;
    } catch (e) {
      EasyLoading.showToast(e.toString());
    } finally {
      if (loadingStatus) {
        // Hide loading indicator
        EasyLoading.dismiss();
      }
    }
  }
}

final http = Http();

```

### `apis.dart`

`api`列表管理

```dart
class Api {
  final String name;
  final String url;
  final String method;
  final bool loading; // 是否显示加载状态
  final dynamic headers;

  Api({
    required this.name,
    required this.url,
    required this.method,
    this.loading = false,
    this.headers,
  });
}

List<Api> apiList = [
  Api(
    name: 'login',
    url: '/api/user/login',
    method: 'post',
    loading: true,
  ),
  Api(
    name: 'register',
    url: '/api/user/login',
    method: 'post',
    loading: true,
  ),
  Api(
    name: 'uploadImg',
    url: '/api/common/upload',
    method: 'postFile',
    loading: true,
  ),
  // 添加更多的API对象
];
```

### `api.dart`

把 `apis.dart` 里面的 api 列表组装成对应的方法导出使用

```dart
import 'http.dart'; // 导入http.dart中的http对象
import 'apis.dart';

Map<String, Function> apiFuncs() {
  Map<String, Function> apiFuns = {}; // 创建一个空的Map，用于存储转换后的API函数

  for (var api in apiList) {
    switch (api.method) {
      case 'get':
        apiFuns[api.name] = (params) {
          return http.get(api.url, data: params, loading: api.loading, headers: api.headers);
        };
        break;
      case 'post':
        apiFuns[api.name] = (params) {
          return http.post(api.url, data: params, loading: api.loading, headers: api.headers);
        };
        break;
      case 'put':
        apiFuns[api.name] = (params) {
          return http.put(api.url, data: params, loading: api.loading, headers: api.headers);
        };
        break;
      case 'delete':
        apiFuns[api.name] = (params) {
          return http.delete(api.url, data: params, loading: api.loading, headers: api.headers);
        };
        break;
      case 'postFile':
        apiFuns[api.name] = (file, {Map<String, dynamic>? params}) {
          return http.postFile(api.url, file, data: params, loading: api.loading, headers: api.headers);
        };
        break;
      default:
        // 默认情况下使用POST方法
        apiFuns[api.name] = (params) {
          return http.post(api.url, data: params, loading: api.loading, headers: api.headers);
        };
        break;
    }
  }
  return apiFuns;
}

final Map<String, Function> apis = apiFuncs();

```

### 使用方法

引入 `api.dart` 文件

```dart
void login() async {
    if (formData['account'] == '') {
      EasyLoading.showToast('请输入邮箱/手机号码');
      return;
    }
    if (formData['password'] == '') {
      EasyLoading.showToast('请输入密码');
      return;
    }
    final res = await apis['login']!(formData);
    if (res['code'] == 1) {
      EasyLoading.showSuccess(res['msg']);
      authC.setToken(res['data']['userinfo']['token']);
      Get.offAllNamed('/root');
    }
  }
```

## 9. 多主题配置

### `theme_colors.dart`

存放主题颜色

```dart
import 'package:flutter/material.dart';

final Map<String, Color> light = {
  'c-primary': const Color(0xffF48E55),
  'c-second': const Color(0xff5eba89),
  'c-price': const Color(0xffff0000),
  'c-text-1': const Color(0xff212121),
  'c-text-2': const Color(0xff333333),
  'c-text-3': const Color(0xff666666),
  'c-fall': const Color(0xff0fcb81),
  'c-rise': const Color(0xffe53343),
  'bgc-base': const Color(0xfffff7ee),
  'bgc-primary': const Color(0xffffffff),
  'bgc-header': const Color(0xfffff7ee),
  'bgc-footer': const Color(0xfffff7ee),
  'bgc-input': const Color(0xffffffff),
  'bd-base': const Color(0xffdfdfdf),
  'bd-second': const Color(0xffcccccc),
};
final Map<String, Color> dark = {
  'c-primary': const Color(0xffF48E55),
  'c-second': const Color(0xff5eba89),
  'c-price': const Color(0xffff0000),
  'c-text-1': const Color(0xffffffff),
  'c-text-2': const Color(0xffaaacb1),
  'c-text-3': const Color(0xff666666),
  'c-fall': const Color(0xff0fcb81),
  'c-rise': const Color(0xffe53343),
  'bgc-base': const Color(0xff21252f),
  'bgc-primary': const Color(0xff2a303c),
  'bgc-header': const Color(0xff21252f),
  'bgc-footer': const Color(0xff21252f),
  'bgc-input': const Color(0xff2a303c),
  'bd-base': const Color(0xff1b1d29),
  'bd-second': const Color(0xff999999),
};

final Map<String, dynamic> themeColors = {
  'light': {
    ...light,
    'brightness': Brightness.light,
  },
  'dark': {
    ...dark,
    'brightness': Brightness.dark,
  },
};
```

### `themes_controller.dart`

主题状态控制器

```dart
import 'package:get/get.dart';
import '../utils/store.dart';
import './theme_colors.dart';
import '../config/config.dart';

class ThemeController extends GetxController {
  var themeName = ''.obs;
  var themeColor = {}.obs;

  void changeTheme(val) {
    themeName.value = val;
    themeColor.value = themeColors[themeName.value];
    Store.set('themeName', themeName.value);
  }

  @override
  void onInit() {
    changeTheme(Store.get('themeName') ?? Config.theme);
    super.onInit();
  }

  @override
  void onClose() {
    super.onClose();
  }
}
```

- 在页面使用

引入 `themes_controller.dart` 文件

```dart
final ThemeController themeC = Get.find();
...
// 使用颜色
themeC.themeColor['c-primary']
// 设置主题
themeC.changeTheme('light');
// or
themeC.changeTheme('dark');
```

## 10. 多语言配置

### 新建目录 `langs`

多语言存放文件，命名由 `intl` 、 `LanguageCode`、`CountryCode` 拼接 `-` 组成。

大部分用 `LanguageCode` 命名就行。

中文文件 `zh.dart`

```dart
final zh = {
  "hello": "你好 世界",
  "test": "测试",
};
```

德语文件 `de.dart`

```dart
final de = {
  "hello": "Hallo Welt",
  "test": "prüfen",
};
```

### `locale.dart`

语言输出文件，用于赋值给 `main.dart` - `GetMaterialApp` - `translations`

```dart
import 'package:get/get.dart';

import 'langs/zh.dart';
import 'langs/de.dart';
import 'langs/en.dart';

class Messages extends Translations {
  @override
  Map<String, Map<String, String>> get keys => {
        'zh': zh,
        'de': de,
        'en': en,
      };
}

```

- 使用

```dart
translations: Messages(),
```

### `locale_controller.dart`

locale 语言状态控制器

```dart
import 'dart:ui';
import 'package:get/get.dart';
import '../utils/store.dart';
import '../config/config.dart';

class LocaleController extends GetxController {
  var languageCode = ''.obs;
  var countryCode = ''.obs;

  void setLocale(String languageVal, [String? countryVal]) {
    languageCode.value = languageVal;
    countryCode.value = countryVal!;
    var locale = Locale(languageCode.value, countryCode.value);
    Get.updateLocale(locale);
    Store.set('languageCode', languageCode.value);
    Store.set('countryCode', countryCode.value);
  }

  @override
  void onInit() async {

    setLocale(Store.get('languageCode') ?? Config.languageCode, Store.get('countryCode') ?? Config.countryCode);

    super.onInit();
  }

  @override
  void onClose() {
    countryCode.close();
    super.onClose();
  }
}
```

- 可以添加 `locale_set.dart` 文件

```dart
import 'package:get/get.dart';
import './locale_controller.dart';

final LocaleController localeController = Get.put(LocaleController());
void localeSet(languageVal, [String? countryVal]) {
  localeController.setLocale(languageVal, countryVal);
}
```

在页面上使用直接加上 `.tr` 即可

改变语言

```dart
final LocaleController localeC = Get.find();
localC.setLocale(LanguageCode, CountryCode); // CountryCode可不传
```

或者，引入 `locale_set.dart` 文件

```dart
localeSet(LanguageCode, CountryCode); // CountryCode可不传
```

## 11. flutter web index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <!--
    If you are serving your web app in a path other than the root, change the
    href value below to reflect the base path you are serving from.

    The path provided below has to start and end with a slash "/" in order for
    it to work correctly.

    For more details:
    * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base

    This is a placeholder for base href that will be replaced by the value of
    the `--base-href` argument provided to `flutter build`.
  -->
    <base href="$FLUTTER_BASE_HREF" />

    <meta charset="UTF-8" />
    <meta content="IE=Edge" http-equiv="X-UA-Compatible" />
    <meta name="description" content="A new Flutter project." />

    <!-- iOS meta tags & icons -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="pc28" />
    <link rel="apple-touch-icon" href="icons/Icon-192.png" />

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png" />

    <title>Phú Quốc</title>
    <link rel="manifest" href="manifest.json" />

    <script>
      // The value below is injected by flutter build, do not touch.
      const serviceWorkerVersion = null
    </script>
    <!-- This script adds the flutter initialization JS code -->
    <script src="flutter.js" defer=""></script>

    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />

    <!-- Croppie -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.5/croppie.css" />
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/exif-js/2.3.0/exif.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.5/croppie.min.js"></script> -->
    <link rel="stylesheet" href="croppie/croppie.css" />
    <script defer src="croppie/exif.js"></script>
    <script src="croppie/croppie.min.js"></script>

    <style id="splash-screen-style">
      html {
        height: 100%;
        max-width: 540px;
        margin-left: auto;
        margin-right: auto;
      }

      body {
        margin: 0;
        min-height: 100%;
        background-color: #ffffff;
        background-size: 100% 100%;
      }

      .center {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        height: 80%;
        max-width: 540px;
        object-fit: cover;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }

      .contain {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .stretch {
        display: block;
        width: 100%;
        height: 100%;
      }

      .cover {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .bottom {
        position: absolute;
        bottom: 0;
        left: 50%;
        -ms-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
      }

      .bottomLeft {
        position: absolute;
        bottom: 0;
        left: 0;
      }

      .bottomRight {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    </style>
    <script id="splash-screen-script">
      function removeSplashFromWeb() {
        document.getElementById("splash")?.remove()
        document.getElementById("splash-branding")?.remove()
        document.body.style.background = "transparent"
      }
    </script>
  </head>

  <body>
    <picture id="splash">
      <source srcset="splash/img/light-4x.png 1x, splash/img/light-4x.png 2x, splash/img/light-4x.png 3x, splash/img/light-4x.png 4x" media="(prefers-color-scheme: light)" />
      <source srcset="splash/img/dark-4x.png 1x, splash/img/dark-4x.png 2x, splash/img/dark-4x.png 3x, splash/img/dark-4x.png 4x" media="(prefers-color-scheme: dark)" />
      <img class="center" aria-hidden="true" src="splash/img/light-4x.png" alt="" />
    </picture>

    <script>
      window.addEventListener("load", function (ev) {
        // Generate a version number, e.g., using a timestamp
        var version = Date.now()

        // Construct the URL of main.dart.js with the version number
        var scriptUrl = "main.dart.js?version=" + version

        // Download main.dart.js with the version number
        _flutter.loader.loadEntrypoint({
          serviceWorker: {
            serviceWorkerVersion: serviceWorkerVersion,
          },
          // Use the modified scriptUrl
          loadUrl: scriptUrl,
          onEntrypointLoaded: function (engineInitializer) {
            engineInitializer.initializeEngine().then(function (appRunner) {
              appRunner.runApp()
            })
          },
        })
      })
    </script>
  </body>
</html>
```

## 12. app_bar 封装

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../themes/themes_controller.dart';

class MyAppBar extends StatelessWidget implements PreferredSizeWidget {
  final Widget? leading;
  final String? title;
  final Color? titleColor;
  final TextStyle? titleStyle;
  final List<Widget>? actions;
  final Widget? flexibleSpace;
  final double? elevation;
  final Color? backgroundColor;
  final IconThemeData? iconTheme;
  final bool? automaticallyImplyLeading;
  final bool? centerTitle;
  final bool? primary;
  final double? titleSpacing;
  final double? toolbarOpacity;
  final double? bottomOpacity;
  final double? toolbarHeight;
  final double? scrolledUnderElevation;

  MyAppBar({
    Key? key,
    this.leading,
    this.title = '',
    this.titleColor,
    this.titleStyle,
    this.actions,
    this.flexibleSpace,
    this.elevation,
    this.backgroundColor,
    this.iconTheme,
    this.automaticallyImplyLeading = true,
    this.centerTitle = true,
    this.primary = true,
    this.titleSpacing,
    this.toolbarOpacity,
    this.bottomOpacity,
    this.toolbarHeight,
    this.scrolledUnderElevation,
  }) : super(key: key);

  ThemeController themeC = Get.find<ThemeController>();

  @override
  Widget build(BuildContext context) {
    return AppBar(
      leading: leading ??
          IconButton(
            icon: Icon(
              Icons.arrow_back_ios_outlined,
              color: titleColor ?? themeC.themeColor['c-text-3'],
              size: 20.0,
            ),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
      title: Text(
        title!,
        style: TextStyle(fontSize: 16, fontWeight: FontWeight.w400, color: titleColor ?? Colors.black87),
      ),
      actions: actions,
      flexibleSpace: flexibleSpace,
      scrolledUnderElevation: scrolledUnderElevation ?? 0,
      elevation: elevation ?? 0,
      backgroundColor: backgroundColor ?? themeC.themeColor['bgc-header'],
      iconTheme: iconTheme,
      automaticallyImplyLeading: automaticallyImplyLeading ?? true,
      centerTitle: centerTitle,
      primary: primary ?? true,
      titleSpacing: titleSpacing,
      toolbarOpacity: toolbarOpacity ?? 1.0,
      bottomOpacity: bottomOpacity ?? 1.0,
      toolbarHeight: toolbarHeight ?? kToolbarHeight,
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}

```

## 13. 图片加载封装

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
    } else if (url.startsWith('/uploads/') || url.startsWith('/img/')) {
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

## 14. Textfield 文本框封装

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:flutter/services.dart';
import '../themes/themes_controller.dart';

///自带删除键的MyTextfield
typedef ITextFieldCallBack = void Function(String content);

typedef ITextFieldControlCallBack = void Function(TextEditingController control);

enum ITextInputType {
  text,
  multiline,
  number,
  phone,
  datetime,
  emailAddress,
  url,
  password,
}

class MyTextfield extends StatefulWidget {
  final ITextInputType keyboardType;
  final int? maxLines;
  final int? maxLength;
  final String? labelText;
  final String? hintText;
  final TextStyle? hintStyle;
  final Icon? deleteIcon;
  final InputBorder? inputBorder;
  final Widget? prefixIcon;
  final String? prefixText;
  final TextStyle? textStyle;
  final Color? backgroundColor;
  final ITextFieldCallBack? fieldCallBack;
  final FormFieldValidator<String>? validator;
  final double? paddingVetical;
  final String? initValue;
  final bool? enabled;
  final bool showCount;
  final List<TextInputFormatter>? formatter;
  final ITextFieldControlCallBack? controlCallBack;

  const MyTextfield({
    Key? key,
    ITextInputType keyboardType = ITextInputType.text,
    this.maxLines = 1,
    this.maxLength,
    this.labelText,
    this.hintText,
    this.hintStyle,
    this.deleteIcon,
    this.inputBorder,
    this.textStyle,
    this.prefixIcon,
    this.prefixText,
    this.fieldCallBack,
    this.backgroundColor,
    this.validator,
    this.paddingVetical = 10.0,
    this.initValue,
    this.enabled,
    this.showCount = false,
    this.formatter,
    this.controlCallBack,
  })  : assert(maxLines == null || maxLines > 0),
        assert(maxLength == null || maxLength > 0),
        keyboardType = maxLines == 1 ? keyboardType : ITextInputType.multiline,
        super(key: key);

  @override
  State<MyTextfield> createState() => _MyTextfieldState();
}

class _MyTextfieldState extends State<MyTextfield> {
  ThemeController themeC = Get.find<ThemeController>();

  String _inputText = "";
  bool _hasDeleteIcon = false;
  // bool _hasFocus = false;
  bool _isNumber = false;
  bool _isPassword = false;
  bool _obscureText = true;

  int maxLen = 20;

  ///输入类型
  TextInputType? _getTextInputType() {
    switch (widget.keyboardType) {
      case ITextInputType.text:
        return TextInputType.text;
      case ITextInputType.multiline:
        return TextInputType.multiline;
      case ITextInputType.number:
        setState(() {
          _isNumber = true;
        });
        return TextInputType.number;
      case ITextInputType.phone:
        setState(() {
          _isNumber = true;
        });
        return TextInputType.phone;
      case ITextInputType.datetime:
        return TextInputType.datetime;
      case ITextInputType.emailAddress:
        return TextInputType.emailAddress;
      case ITextInputType.url:
        return TextInputType.url;
      case ITextInputType.password:
        setState(() {
          _isPassword = true;
        });
        return TextInputType.text;
      default:
        return null;
    }
  }

  ///输入框焦点控制
  late final FocusNode _focusNode;

  double _contentPaddingVertical = 0.0;

  @override
  void initState() {
    super.initState();
    _focusNode = FocusNode();
    setState(() {
      _contentPaddingVertical = widget.paddingVetical ?? 10.0;
    });
    // _focusNode.addListener(() {
    //   if (!_focusNode.hasFocus) {
    //     // 处理失去焦点的逻辑
    //     setState(() {
    //       _hasFocus = false;
    //     });
    //   } else {
    //     setState(() {
    //       _hasFocus = true;
    //     });
    //   }
    // });
  }

  @override
  void dispose() {
    _focusNode.dispose();
    super.dispose();
  }

  ///输入范围
  List<TextInputFormatter>? _getTextInputFormatter() {
    List<TextInputFormatter> formatters = [];

    // 如果是数字输入，添加仅数字的过滤器
    if (_isNumber) {
      formatters.add(FilteringTextInputFormatter.digitsOnly);
    }

    // 添加禁止输入空格的过滤器
    formatters.add(FilteringTextInputFormatter.deny(RegExp(r'\s')));

    // 添加额外的自定义格式化器
    if (widget.formatter != null) {
      formatters.addAll(widget.formatter!);
    }

    return formatters;
  }

  @override
  Widget build(BuildContext context) {
    TextEditingController controller;
    if (widget.initValue != null) {
      _inputText = widget.initValue!;
    }
    controller = TextEditingController.fromValue(
      TextEditingValue(
        text: _inputText,
        selection: TextSelection.fromPosition(
          TextPosition(
            affinity: TextAffinity.downstream,
            offset: _inputText.length,
          ),
        ),
      ),
    );
    if (widget.controlCallBack != null) {
      widget.controlCallBack!(controller);
    }
    TextField textField = TextField(
      focusNode: _focusNode,
      controller: controller,
      enabled: widget.enabled,
      onEditingComplete: () {
        FocusScope.of(context).requestFocus(_focusNode);
      },
      autofocus: false,
      textAlignVertical: TextAlignVertical.center,
      decoration: InputDecoration(
        contentPadding: EdgeInsets.symmetric(horizontal: 10.0, vertical: _contentPaddingVertical),
        hintStyle: widget.hintStyle ?? TextStyle(color: themeC.themeColor['c-text-5']),
        counterText: widget.showCount ? null : '',
        counterStyle: const TextStyle(color: Colors.grey),
        labelText: widget.labelText,
        hintText: widget.hintText,
        prefixText: widget.prefixText,
        prefixStyle: const TextStyle(
          fontSize: 16.0,
        ),
        border: widget.inputBorder ??
            const OutlineInputBorder(
              borderRadius: BorderRadius.all(Radius.circular(8.0)),
              borderSide: BorderSide(
                width: 1.0,
              ),
            ),
        enabledBorder: const OutlineInputBorder(
          borderRadius: BorderRadius.all(Radius.circular(8.0)),
          borderSide: BorderSide(
            color: Color(0xffd9d9d9),
            width: 1,
          ),
        ),
        focusedBorder: OutlineInputBorder(
          borderSide: BorderSide(
            color: themeC.themeColor['c-primary'],
            width: 2,
          ),
          borderRadius: const BorderRadius.all(Radius.circular(8.0)),
        ),
        fillColor: widget.backgroundColor ?? Colors.transparent,
        filled: true,
        prefixIcon: widget.prefixIcon,
        suffixIcon: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (_hasDeleteIcon)
              IconButton(
                alignment: Alignment.center,
                padding: const EdgeInsets.all(0.0),
                iconSize: 20.0,
                icon: widget.deleteIcon ?? const Icon(Icons.cancel),
                onPressed: () {
                  setState(() {
                    _inputText = "";
                    _hasDeleteIcon = _inputText.isNotEmpty;
                    widget.fieldCallBack!(_inputText);
                  });
                },
              ),
            if (_isPassword)
              IconButton(
                icon: Icon(_obscureText ? Icons.visibility : Icons.visibility_off),
                padding: const EdgeInsets.all(0.0),
                iconSize: 22.0,
                onPressed: () {
                  setState(() {
                    _obscureText = !_obscureText;
                  });
                },
              ),
          ],
        ),
      ),
      onChanged: (str) {
        setState(() {
          _inputText = str;
          _hasDeleteIcon = _inputText.isNotEmpty;
          // _hasFocus = true;
        });
        widget.fieldCallBack!(_inputText);
      },
      onSubmitted: (str) {
        _inputText = str;
        widget.fieldCallBack!(_inputText);
        // setState(() {
        //   _hasFocus = false;
        // });
      },
      keyboardType: _getTextInputType(),
      maxLength: widget.maxLength ?? maxLen,
      maxLines: widget.maxLines,
      style: widget.textStyle,
      obscureText: _isPassword && _obscureText,
      inputFormatters: _getTextInputFormatter(),
    );
    return textField;
  }
}

```

## 15. 空状态封装

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class Empty extends StatelessWidget {
  const Empty({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.hourglass_empty,
            size: 100,
            color: Colors.grey.withOpacity(0.5),
          ),
          const SizedBox(height: 10),
          Text(
            'No_data'.tr,
            style: TextStyle(
              fontSize: 12,
              color: Colors.grey.withOpacity(0.5),
            ),
          ),
          const SizedBox(height: 100),
        ],
      ),
    );
  }
}

```

## 16. image_picker 选择图片封装

```dart
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
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
      widget.onChanged?.call({'pickfile': pickedFile, 'file': _imgFile!, 'fileWeb': webFile});

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
          text: 'shooting'.tr,
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
          text: 'album'.tr,
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

## 17. open_page 从点击处打开页面

```dart
import 'package:animations/animations.dart';
import 'package:flutter/material.dart';

class OpenPage extends StatelessWidget {
  final Widget curPage;
  final Widget nextPage;
  const OpenPage({Key? key, required this.curPage, required this.nextPage}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return buildOpenContainer();
  }

  OpenContainer<dynamic> buildOpenContainer() {
    return OpenContainer(
      //背景颜色
      closedColor: Colors.transparent,
      //阴影
      closedElevation: 0.0,
      //圆角
      closedShape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(10.0)),
      ),
      //显示的布局
      closedBuilder: (context, action) {
        return curPage;
      },
      //过渡的方式
      transitionType: ContainerTransitionType.fade,
      //过渡的时间
      transitionDuration: const Duration(milliseconds: 500),
      //即将打开的 Widget 的边框样式
      openShape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(0.0)),
      ),
      //即将打开的 Widget 的背景
      openColor: Colors.transparent,
      useRootNavigator: false,
      //阴影
      openElevation: 0.0,
      //布局
      openBuilder: (context, action) {
        return nextPage;
      },
    );
  }
}

```

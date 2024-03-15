# getx实现换肤、多语言、api请求、路由封装等多功能脚手架

## 1. pubspec.yaml添加package
将下面依赖复制到 `pubspec.yaml` 文件的 `dependencies` 下面
```dart
  get: ^4.6.5
  get_storage: ^2.1.1

  dio: ^5.4.1
  pretty_dio_logger: ^1.3.1

  flutter_swiper_view: ^1.1.8

  contained_tab_bar_view: ^0.8.0

  flutter_easyloading: ^3.0.0

  animations: ^2.0.11

  shared_preferences: ^2.2.2

  image_picker: ^1.0.7
```
`analysis_options.yaml` 文件
```dart
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
import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
// import 'package:flutter_web_plugins/url_strategy.dart';
import './routes/routes.dart';
import './pages/root/root.dart';
import './locales/locale.dart';
import './themes/themes_controller.dart';
import './locales/locale_controller.dart';
import './auth/auth_controller.dart';
import './pages/login/login.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await GetStorage.init();
  // usePathUrlStrategy();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({
    Key? key,
  }) : super(key: key);

  final ThemeController themeC = Get.put(ThemeController(), permanent: true);
  final LocaleController localeC = Get.put(LocaleController(), permanent: true);
  final AuthController authC = Get.put(AuthController(), permanent: true);

  @override
  Widget build(BuildContext context) {
    return Obx(() => GetMaterialApp(
          title: 'coins',
          initialRoute: '/',
          getPages: routes,
          home: authC.token.value.isEmpty ? Login() : Root(),
          defaultTransition: Transition.downToUp,
          debugShowCheckedModeBanner: false,
          transitionDuration: const Duration(milliseconds: 250),
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
                  Colors.black12, // 设置水波纹颜色为红色
                ),
              ),
            ),
            textButtonTheme: TextButtonThemeData(
              style: ButtonStyle(
                foregroundColor: MaterialStateProperty.all(themeC.themeColor['c-primary']),
                padding: MaterialStateProperty.all(const EdgeInsets.only(left: 6.0, right: 6.0)),
                tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                // shape: MaterialStateProperty.all(
                //   const RoundedRectangleBorder(
                //     borderRadius: BorderRadius.zero,
                //   ),
                // ),
                // overlayColor: MaterialStateProperty.all(
                //   Colors.black12, // 设置水波纹颜色为红色
                // ),
              ),
            ),
            useMaterial3: true,
          ),
          // home: token!.isEmpty ? Login() : Root(),
          builder: EasyLoading.init(),
        ));
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
        printTime: false,
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
    transition: Transition.fadeIn,
  ),
  GetPage(
    name: '/login',
    page: () => Login(),
  ),
];
```

## 8. api dio封装
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
        AppLogger().log('请求： ${options.method} ${options.uri}');
        AppLogger().log('请求头： ${options.headers}');
        AppLogger().log('请求参数：${options.data}');
        AppLogger().log(options.data);
        handler.next(options); // Must call handler.next to continue
      },
      onResponse: (response, handler) async {
        // Do something with response data
        AppLogger().info('响应： ${response.requestOptions.method} ${response.requestOptions.uri}');
        AppLogger().info('响应数据：${response.data}');
        AppLogger().info(response.data);
        handler.next(response); // Must call handler.next to continue
      },
      onError: (DioError e, handler) async {
        // Do something with response error
        AppLogger().error('请求错误: ${e.message}');
        AppLogger().error(e.message);
        handler.next(e); // Must call handler.next to continue
      },
    ));
  }

  Future<dynamic> request(
    String method,
    String path, {
    Map<String, dynamic>? data,
    Map<String, dynamic>? headers,
    bool loading = false,
  }) async {
    var token = await Store.get('token');
    final options = Options(method: method);
    options.headers = {
      'content-type': 'application/json',
      'token': token,
      ...?headers,
    };

    final loadingStatus = loading;
    if (loadingStatus) {
      // Show loading indicator
      EasyLoading.show(maskType: EasyLoadingMaskType.clear);
    }

    try {
      final response = await _dio.request(path, data: data, options: options);
      final res = response.data;
      if (res['code'] != 1) {
        EasyLoading.showToast(res['msg']);
      }
      return response.data;
    } catch (e) {
      AppLogger().error(e);
    } finally {
      if (loadingStatus) {
        // Hide loading indicator
        EasyLoading.dismiss();
      }
    }
  }

  Future<dynamic> get(
    String path, {
    Map<String, dynamic>? data,
    Map<String, dynamic>? headers,
    bool loading = false,
  }) async {
    return request(
      'GET',
      path,
      data: data,
      headers: headers,
      loading: loading,
    );
  }

  Future<dynamic> post(
    String path, {
    Map<String, dynamic>? data,
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
把 `apis.dart` 里面的api列表组装成对应的方法导出使用
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

## 9. 多主题文件配置

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
多语言存放文件，命名由 `intl` 、 `LanguageCode`、`CountryCode` 拼接 `-` 组成

中文文件 `intl_zh_cn.dart`
```dart
final intlZhCn = {
  "hello": "你好 世界",
  "test": "测试",
};
```
德语文件 `intl_de_DE.dart`
```dart
final intlDeDe = {
  "hello": "Hallo Welt",
  "test": "prüfen",
};
```

### `locale.dart`
语言输出文件，用于赋值给 `main.dart` - `GetMaterialApp` - `translations`

```dart
import 'package:get/get.dart';

import 'langs/intl_zh_cn.dart';
import 'langs/intl_de_de.dart';

class Messages extends Translations {
  @override
  Map<String, Map<String, String>> get keys => {
        'zh_CN': intlZhCn,
        'de_DE': intlDeDe,
      };
}
```
- 使用
```dart
translations: Messages(),
```

### `locale_controller.dart`
locale语言状态控制器
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

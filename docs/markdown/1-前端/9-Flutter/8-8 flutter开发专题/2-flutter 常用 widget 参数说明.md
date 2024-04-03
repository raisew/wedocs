# flutter 常用 widget 参数说明

## GetMaterialApp

```dart
GetMaterialApp(
  // 应用程序的首页 Widget
  home: MyHomePage(),

  // 应用程序的初始路由
  initialRoute: '/',

  // 一个包含所有页面路由配置的列表
  getPages: [
    GetPage(
      name: '/',
      page: () => MyHomePage(),
    ),
    GetPage(
      name: '/details',
      page: () => DetailsPage(),
    ),
  ],

  // 当尝试导航到未注册的路由时，会调用该回调函数
  unknownRoute: GetPage(
    name: '/error',
    page: () => ErrorPage(),
  ),

  // 应用程序的命名路由映射表
  routes: {
    '/': (context) => MyHomePage(),
    '/details': (context) => DetailsPage(),
  },

  // 用于与 Navigator 相关的操作
  navigatorKey: GlobalKey<NavigatorState>(),

  // 用于注册导航观察器
  navigatorObservers: [RouteObserver<PageRoute>()],

  // 路由转换动画的持续时间
  transitionDuration: Duration(milliseconds: 500),

  // 默认的路由转换动画效果
  defaultTransition: Transition.fade,

  customTransition: MyCustomTransition(),

  // 应用程序的标题
  title: 'My App',

  // 应用程序的主题数据
  theme: ThemeData(primarySwatch: Colors.blue),

  // 当前应用程序的语言环境
  locale: Locale('en', 'US'),

  // 用于多语言国际化的翻译数据
  translations: MyTranslations(),

  // 如果指定的 locale 不存在对应的翻译数据，则会使用该参数指定的备用语言环境
  fallbackLocale: Locale('en', 'US'),

  // 当导航到命名路由时，会调用该回调函数
  onGenerateRoute: (settings) {
    return MaterialPageRoute(builder: (context) => NotFoundPage());
  },

  // 当导航到未注册的命名路由时，会调用该回调函数
  onUnknownRoute: (settings) {
    return MaterialPageRoute(builder: (context) => NotFoundPage());
  },

  // 用于构建应用程序根 Widget 的函数
  builder: (context, child) {
    return MyCustomWrapper(child: child);
  },

  // 是否在应用程序标题旁边显示调试模式的横幅
  debugShowCheckedModeBanner: false,
)


//自定义切换动画
class MyCustomTransition extends CustomTransition {
  @override
  Widget buildTransition(
    BuildContext context,
    Curve? curve,
    Alignment? alignment,
    Animation<double> animation,
    Animation<double> secondaryAnimation,
    Widget child,
  ) {
    return SlideTransition(
      position: Tween<Offset>(
        begin: Offset(1.0, 0.0),
        end: Offset.zero,
      ).animate(
        CurvedAnimation(
          parent: animation,
          curve: Curves.bounceInOut, // 弹性曲线
        ),
      ),
      child: child,
    );
  }
}

```

## ThemeData

```dart
ThemeData(
  // 主题的亮度，通常为 light 或 dark
  brightness: Brightness.light,

  // 应用程序的整体颜色样式
  primaryColor: Colors.blue,

  // 前景色，如文本、按钮等，默认为 ThemeData.primaryColor
  accentColor: Colors.orange,

  // 用于表示不同状态的颜色，如按下、悬停等，默认为 ThemeData.primaryColor
  highlightColor: Colors.green,

  // 应用程序的背景颜色，默认为 ThemeData.scaffoldBackgroundColor
  backgroundColor: Colors.white,

  // 页面的背景颜色，默认为 ThemeData.scaffoldBackgroundColor
  scaffoldBackgroundColor: Colors.grey[200],

  // 文本颜色，通常用于标题文本
  primaryTextTheme: TextTheme(
    headline6: TextStyle(color: Colors.black),
  ),

  // 文本颜色，通常用于正文文本
  textTheme: TextTheme(
    bodyText2: TextStyle(color: Colors.black87),
  ),

  // 输入框的边框颜色，默认为 ThemeData.dividerColor
  inputDecorationTheme: InputDecorationTheme(
    border: OutlineInputBorder(
      borderSide: BorderSide(color: Colors.grey),
    ),
  ),

  // 卡片的阴影效果，默认为 ThemeData.shadowColor
  cardTheme: CardTheme(
    shadowColor: Colors.grey,
  ),

  // 应用程序的图标主题
  iconTheme: IconThemeData(
    color: Colors.black,
    size: 24,
  ),

  // AppBar 的颜色，默认为 ThemeData.primaryColor
  appBarTheme: AppBarTheme(
    color: Colors.blue,
  ),

  // 滚动条的颜色，默认为 ThemeData.primaryColor
  scrollbarTheme: ScrollbarThemeData(
    thumbColor: MaterialStateProperty.all(Colors.blue),
  ),

  // 所有按钮的默认样式
  buttonTheme: ButtonThemeData(
    buttonColor: Colors.blue,
    textTheme: ButtonTextTheme.primary,
  ),

  // FloatingActionButton 的样式
  floatingActionButtonTheme: FloatingActionButtonThemeData(
    backgroundColor: Colors.blue,
  ),

  // 应用程序的字体样式
  fontFamily: 'Roboto',

  // 应用程序的文字比例因子
  textScaleFactor: 1.0,
)

```

## Scaffold

```dart
Scaffold(
  // 应用栏
  appBar: AppBar(
    title: Text('Title'),
    actions: [
      // 应用栏操作按钮
      IconButton(
        icon: Icon(Icons.search),
        onPressed: () {
          // 处理按钮点击事件
        },
      ),
    ],
  ),

  // 主内容区域
  body: Container(
    child: Text('Main Content'),
  ),

  // 底部导航栏
  bottomNavigationBar: BottomNavigationBar(
    // 导航栏项目
    items: [
      BottomNavigationBarItem(
        icon: Icon(Icons.home),
        label: 'Home',
      ),
      // 其他导航栏项目
    ],
    // 当前选中的项目索引
    currentIndex: 0,
    // 导航栏点击事件处理函数
    onTap: (index) {
      // 处理导航栏点击事件
    },
  ),

  // 浮动操作按钮
  floatingActionButton: FloatingActionButton(
    // 按钮图标
    child: Icon(Icons.add),
    // 按钮点击事件处理函数
    onPressed: () {
      // 处理按钮点击事件
    },
  ),

  // 悬浮操作按钮位置
  floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,

  // 主动态抽屉菜单
  drawer: Drawer(
    // 抽屉菜单内容
    child: ListView(
      children: [
        // 菜单项
        ListTile(
          title: Text('Item 1'),
          onTap: () {
            // 处理菜单项点击事件
          },
        ),
        // 其他菜单项
      ],
    ),
  ),

  // 主静态抽屉菜单
  endDrawer: Drawer(
    // 抽屉菜单内容
    child: ListView(
      children: [
        // 菜单项
        ListTile(
          title: Text('Item 1'),
          onTap: () {
            // 处理菜单项点击事件
          },
        ),
        // 其他菜单项
      ],
    ),
  ),
)
```

::: info
注意事项：

- Scaffold 是一个结构布局的组件，用于构建典型的 Material Design 布局结构。
- Scaffold 可以包含应用栏、主内容区域、底部导航栏、浮动操作按钮、抽屉菜单等部件。
- Scaffold 中的各个部分可以根据实际需要进行组合，灵活构建出不同风格的页面布局。
  :::

## SafeArea

`SafeArea` 组件用于确保其子组件在屏幕上显示时不会受到设备边缘的干扰，例如不会被设备的状态栏、导航栏等遮挡。以下是 `SafeArea` 的常用参数说明：

```dart
SafeArea(
  // 是否应该应用SafeArea，即是否考虑顶部和底部的安全区域
  // 默认为true
  maintainBottomViewPadding: true,
  maintainTopViewPadding: true,

  // 左侧安全区域
  left: true,

  // 右侧安全区域
  right: true,

  // 顶部安全区域
  top: true,

  // 底部安全区域
  bottom: true,

  // 子组件
  child: Container(
    color: Colors.blue,
    child: Text('Content'),
  ),
)
```

::: info
注意事项：

- SafeArea 组件用于确保其子组件在屏幕上显示时不会受到设备边缘的干扰。
- maintainBottomViewPadding 和 maintainTopViewPadding 参数用于指定是否应该应用底部和顶部的安全区域。默认情况下，它们都是 true。
- left、right、top 和 bottom 参数用于分别指定左侧、右侧、顶部和底部的安全区域。默认情况下，它们都是 true。
  :::

## AppBar

```dart
AppBar(
  // 标题
  title: Text('Title'),

  // 左侧图标按钮
  leading: IconButton(
    icon: Icon(Icons.menu),
    onPressed: () {
      // 处理按钮点击事件
    },
  ),

  // 右侧操作按钮
  actions: [
    // 按钮 1
    IconButton(
      icon: Icon(Icons.search),
      onPressed: () {
        // 处理按钮点击事件
      },
    ),
    // 按钮 2
    IconButton(
      icon: Icon(Icons.settings),
      onPressed: () {
        // 处理按钮点击事件
      },
    ),
    // ...
  ],

  // 应用栏的背景颜色
  backgroundColor: Colors.blue,

  // 应用栏的阴影
  elevation: 4.0,

  // 是否显示在状态栏下方
  toolbarOpacity: 0.8,

  // 应用栏的高度
  toolbarHeight: 56.0,

  // 是否在滚动时隐藏
  // 仅当下拉内容列表或向上滚动时才会隐藏应用栏，向下滚动时会重新显示
  // 默认值为 false
  automaticallyImplyLeading: true,

  // 标题居中
  centerTitle: true,

  // 是否自动调整文本大小以适合空间
  titleSpacing: NavigationToolbar.kMiddleSpacing,

  // 标题的样式
  titleTextStyle: TextStyle(
    color: Colors.white,
    fontWeight: FontWeight.bold,
    fontSize: 20.0,
  ),

  // 被滚动控件遮住时是否随动
  primary: true,
)
```

::: info
注意事项：

- AppBar 通常用于作为 Scaffold 的顶部导航栏。
- leading 参数用于设置左侧图标按钮，通常用于显示菜单按钮或返回按钮。
- actions 参数用于设置右侧操作按钮，可以添加多个操作按钮。
- backgroundColor 参数用于设置应用栏的背景颜色。
- elevation 参数用于设置应用栏的阴影。
- automaticallyImplyLeading 参数控制是否自动添加返回按钮。
  :::

## BottomNavigationBar

`BottomNavigationBar` 是一个位于屏幕底部的导航栏，常用于切换不同页面或功能模块。以下是 `BottomNavigationBar` 的常用参数说明：

```dart
BottomNavigationBar(
  // 导航栏项目
  items: [
    // 项目 1
    BottomNavigationBarItem(
      icon: Icon(Icons.home),
      label: 'Home',
    ),
    // 项目 2
    BottomNavigationBarItem(
      icon: Icon(Icons.search),
      label: 'Search',
    ),
    // 项目 3
    BottomNavigationBarItem(
      icon: Icon(Icons.person),
      label: 'Profile',
    ),
  ],

  // 当前选中的项目索引
  currentIndex: 0,

  // 选中项目的颜色
  selectedItemColor: Colors.blue,

  // 未选中项目的颜色
  unselectedItemColor: Colors.grey,

  // 导航栏背景颜色
  backgroundColor: Colors.white,

  // 导航栏的类型
  // 默认值为 BottomNavigationBarType.fixed，固定样式
  // BottomNavigationBarType.shifting，移动样式
  type: BottomNavigationBarType.fixed,

  // 切换项目时的回调函数
  onTap: (int index) {
    // 处理项目切换事件
  },
)
```

::: info
注意事项：

- BottomNavigationBar 组件通常作为 Scaffold 的 bottomNavigationBar 参数使用。
- items 参数接受一个包含 BottomNavigationBarItem 组件的列表，用于定义每个项目的图标和文本。
- currentIndex 参数用于指定当前选中的项目索引。
- selectedItemColor 参数用于设置选中项目的颜色。
- unselectedItemColor 参数用于设置未选中项目的颜色。
- backgroundColor 参数用于设置导航栏的背景颜色。
- type 参数用于指定导航栏的类型，可以是 BottomNavigationBarType.fixed（固定样式）或 BottomNavigationBarType.shifting（移动样式）。
- onTap 参数是一个回调函数，当切换项目时触发，可以在此处理项目切换事件。
  :::

## PreferredSize

`PreferredSize` 用于指定一个 `Widget` 的首选尺寸。通常用于自定义 `AppBar` 或 `BottomAppBar` 中的组件，以指定其高度。以下是 `PreferredSize` 的常用参数说明：

```dart
PreferredSize(
  // 首选尺寸
  preferredSize: Size.fromHeight(MediaQueryData.fromWindow(window).padding.top),

  // 子组件
  child: const SafeArea(
    top: true,
    child: Offstage(),
  ),
)
```

## Text

```dart
Text(
  // 显示的文本内容
  'Hello, World!',

  // 文本的样式
  style: TextStyle(
    // 文本的颜色
    color: Colors.black,

    // 字体大小
    fontSize: 16.0,

    // 字体加粗
    fontWeight: FontWeight.bold,

    // 字体倾斜
    fontStyle: FontStyle.italic,

    // 字体族，如 'Roboto'
    fontFamily: 'Roboto',

    // 文本对齐方式
    textAlign: TextAlign.center,

    // 文本方向，如 TextDirection.ltr 或 TextDirection.rtl
    textDirection: TextDirection.ltr,

    // 行高，通常用于设置多行文本的行间距
    height: 1.5,

    // 文本装饰，如下划线、删除线等
    decoration: TextDecoration.underline,

    // 文本装饰样式，如实线、虚线等
    decorationStyle: TextDecorationStyle.dashed,

    // 文本的溢出处理方式，如省略号
    overflow: TextOverflow.ellipsis,

    // 最大显示行数
    maxLines: 2,

    // 文本截断方式，如尾部截断
    softWrap: true,

    // 文本缩放比例
    textScaleFactor: 1.0,
  ),

  // 文本的语义描述，用于无障碍访问
  semanticsLabel: 'Hello, World!',
)
```

## ElevatedButton

```dart
ElevatedButton(
  // 按钮上显示的文本
  child: Text('Elevated Button'),

  // 按钮点击事件处理函数
  onPressed: () {
    // 处理按钮点击事件
  },

  // 按钮的样式
  style: ElevatedButton.styleFrom(
    // 按钮背景颜色
    primary: Colors.blue,

    // 阴影高度
    elevation: 4,

    // 文本样式
    textStyle: TextStyle(
      color: Colors.white,
      fontSize: 16.0,
    ),
  ),
)
```

## TextButton

```dart
TextButton(
  // 按钮上显示的文本
  child: Text('Text Button'),

  // 按钮点击事件处理函数
  onPressed: () {
    // 处理按钮点击事件
  },

  // 按钮的样式
  style: TextButton.styleFrom(
    // 文本样式
    primary: Colors.blue,

    // 按钮的背景颜色
    backgroundColor: Colors.transparent,

    // 文本样式
    textStyle: TextStyle(
      color: Colors.blue,
      fontSize: 16.0,
    ),
  ),
)
```

## OutlinedButton

```dart
OutlinedButton(
  // 按钮上显示的文本
  child: Text('Outlined Button'),

  // 按钮点击事件处理函数
  onPressed: () {
    // 处理按钮点击事件
  },

  // 按钮的样式
  style: OutlinedButton.styleFrom(
    // 边框颜色
    side: BorderSide(color: Colors.blue),

    // 文本样式
    primary: Colors.blue,
  ),
)
```

## IconButton

```dart
IconButton(
  // 按钮图标
  icon: Icon(Icons.add),

  // 按钮点击事件处理函数
  onPressed: () {
    // 处理按钮点击事件
  },

  // 按钮的样式
  color: Colors.blue,
)
```

## Icon

```dart
Icon(
  // 图标的图标数据
  Icons.add,

  // 图标的大小，默认为 24.0
  size: 24.0,

  // 图标的颜色，默认为当前主题的颜色
  color: Colors.black,

  // 图标的语义描述，用于无障碍访问
  semanticLabel: 'Add',
)
```

## AssetImage

```dart
Image(
  // 从 assets 中加载图片
  image: AssetImage('assets/image.png'),

  // 图片的宽度
  width: 100,

  // 图片的高度
  height: 100,

  // 图片的适应方式，默认为 BoxFit.contain
  fit: BoxFit.cover,
)
```

## NetworkImage

```dart
Image(
  // 从网络加载图片
  image: NetworkImage('https://example.com/image.png'),

  // 图片的宽度
  width: 100,

  // 图片的高度
  height: 100,

  // 图片的适应方式，默认为 BoxFit.contain
  fit: BoxFit.cover,
)
```

## FileImage

```dart
Image(
  // 从文件加载图片
  image: FileImage(File('path/to/image.png')),

  // 图片的宽度
  width: 100,

  // 图片的高度
  height: 100,

  // 图片的适应方式，默认为 BoxFit.contain
  fit: BoxFit.cover,
)
```

## MemoryImage

```dart
Image(
  // 从内存加载图片
  image: MemoryImage(Uint8List.fromList(imageBytes)),

  // 图片的宽度
  width: 100,

  // 图片的高度
  height: 100,

  // 图片的适应方式，默认为 BoxFit.contain
  fit: BoxFit.cover,
)
```

## CircleAvatar

`CircleAvatar` 是一个圆形头像组件，通常用于显示用户头像或图标。以下是 `CircleAvatar` 的常用参数说明：

```dart
CircleAvatar(
  // 头像图片
  backgroundImage: AssetImage('assets/avatar.png'),

  // 头像半径
  radius: 50.0,

  // 背景颜色
  backgroundColor: Colors.blue,

  // 前景图标
  child: Icon(Icons.person),

  // 前景图标大小
  foregroundIconSize: 30.0,

  // 是否带有阴影
  // 默认为false
  shadowColor: Colors.grey,

  // 阴影的高度
  // 默认为0.0
  elevation: 4.0,

  // 前景颜色
  // 默认为Colors.transparent
  foregroundColor: Colors.white,
)
```

::: info
注意事项：

- CircleAvatar 是一个用于显示圆形头像的组件。
- backgroundImage 参数用于设置头像图片，可以是 AssetImage、NetworkImage 等。
- radius 参数用于设置头像的半径大小。
- backgroundColor 参数用于设置头像的背景颜色。
- child 参数用于设置头像的前景图标，可以是一个 Icon 组件。
- foregroundIconSize 参数用于设置前景图标的大小。
- shadowColor 参数用于设置阴影的颜色。
- elevation 参数用于设置阴影的高度。
- foregroundColor 参数用于设置前景图标的颜色。
  :::

## Textfield

```dart
TextField(
  // 控制输入的文本
  controller: TextEditingController(),

  // 占位符
  hintText: 'Enter your text',

  // 输入文本的样式
  style: TextStyle(color: Colors.black),

  // 输入框的外边距
  margin: EdgeInsets.all(8.0),

  // 输入框的内边距
  padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),

  // 输入框的装饰
  decoration: InputDecoration(
    // 前缀图标
    prefixIcon: Icon(Icons.person),

    // 后缀图标
    suffixIcon: Icon(Icons.clear),

    // 边框样式
    border: OutlineInputBorder(),

    // 聚焦时的边框样式
    focusedBorder: OutlineInputBorder(
      borderSide: BorderSide(color: Colors.blue),
    ),
  ),

  // 是否自动获取焦点
  autofocus: false,

  // 输入文本的键盘类型
  keyboardType: TextInputType.text,

  // 输入文本的最大长度
  maxLength: 100,

  // 输入文本的最大行数
  maxLines: 1,

  // 输入文本的最小行数
  minLines: 1,

  // 输入文本变化时的回调函数
  onChanged: (value) {
    // 处理文本变化事件
  },

  // 输入文本提交时的回调函数
  onSubmitted: (value) {
    // 处理文本提交事件
  },
)
```

```dart
  const TextField({
    Key key,
    this.controller,//控制器
    this.focusNode,//焦点
    this.decoration = const InputDecoration(),//装饰
    TextInputType keyboardType,//键盘类型，即输入类型
    this.textInputAction,//键盘按钮
    this.textCapitalization = TextCapitalization.none,//大小写
    this.style,//样式
    this.strutStyle,
    this.textAlign = TextAlign.start,//对齐方式
    this.textDirection,
    this.autofocus = false,//自动聚焦
    this.obscureText = false,//是否隐藏文本，即显示密码类型
    this.autocorrect = true,//自动更正
    this.maxLines = 1,//最多行数，高度与行数同步
    this.minLines,//最小行数
    this.expands = false,
    this.maxLength,//最多输入数，有值后右下角就会有一个计数器
    this.maxLengthEnforced = true,
    this.onChanged,//输入改变回调
    this.onEditingComplete,//输入完成时，配合TextInputAction.done使用
    this.onSubmitted,//提交时,配合TextInputAction
    this.inputFormatters,//输入校验
    this.enabled,//是否可用
    this.cursorWidth = 2.0,//光标宽度
    this.cursorRadius,//光标圆角
    this.cursorColor,//光标颜色
    this.keyboardAppearance,
    this.scrollPadding = const EdgeInsets.all(20.0),
    this.dragStartBehavior = DragStartBehavior.start,
    this.enableInteractiveSelection,
    this.onTap,//点击事件
    this.buildCounter,
    this.scrollPhysics,
  })
```

```dart
InputDecoration({
  this.icon,    //位于装饰器外部和输入框前面的图标
  this.labelText,  //用于描述输入框，例如这个输入框是用来输入用户名还是密码的，当输入框获取焦点时默认会浮动到上方，
  this.labelStyle,  // 控制labelText的样式,接收一个TextStyle类型的值
  this.helperText, //辅助文本，位于输入框下方，如果errorText不为空的话，则helperText不会显示
  this.helperStyle, //helperText的样式
  this.hintText,  //提示文本，位于输入框内部
  this.hintStyle, //hintText的样式
  this.hintMaxLines, //提示信息最大行数
  this.errorText,  //错误信息提示
  this.errorStyle, //errorText的样式
  this.errorMaxLines,   //errorText最大行数
  this.hasFloatingPlaceholder = true,  //labelText是否浮动，默认为true，修改为false则labelText在输入框获取焦点时不会浮动且不显示
  this.isDense,   //改变输入框是否为密集型，默认为false，修改为true时，图标及间距会变小
  this.contentPadding, //内间距
  this.prefixIcon,  //位于输入框内部起始位置的图标。
  this.prefix,   //预先填充的Widget,跟prefixText同时只能出现一个
  this.prefixText,  //预填充的文本，例如手机号前面预先加上区号等
  this.prefixStyle,  //prefixText的样式
  this.suffixIcon, //位于输入框后面的图片,例如一般输入框后面会有个眼睛，控制输入内容是否明文
  this.suffix,  //位于输入框尾部的控件，同样的不能和suffixText同时使用
  this.suffixText,//位于尾部的填充文字
  this.suffixStyle,  //suffixText的样式
  this.counter,//位于输入框右下方的小控件，不能和counterText同时使用
  this.counterText,//位于右下方显示的文本，常用于显示输入的字符数量
  this.counterStyle, //counterText的样式
  this.filled,  //如果为true，则输入使用fillColor指定的颜色填充
  this.fillColor,  //相当于输入框的背景颜色
  this.errorBorder,   //errorText不为空，输入框没有焦点时要显示的边框
  this.focusedBorder,  //输入框有焦点时的边框,如果errorText不为空的话，该属性无效
  this.focusedErrorBorder,  //errorText不为空时，输入框有焦点时的边框
  this.disabledBorder,  //输入框禁用时显示的边框，如果errorText不为空的话，该属性无效
  this.enabledBorder,  //输入框可用时显示的边框，如果errorText不为空的话，该属性无效
  this.border, //正常情况下的border
  this.enabled = true,  //输入框是否可用
  this.semanticCounterText,
  this.alignLabelWithHint,
})
```

::: info
注意事项：

- controller 参数可用于控制输入的文本，可以监听输入内容的变化，并可以设置或获取文本内容。
- hintText 参数为输入框的占位符，当输入框为空时显示。
- style 参数控制输入文本的样式，如文本颜色、字体大小等。
- decoration 参数用于定义输入框的装饰，包括边框样式、前缀图标、后缀图标等。
- keyboardType 参数指定输入文本的键盘类型，如数字键盘、邮箱键盘等。
- maxLength 参数指定输入文本的最大长度。
- maxLines 参数指定输入文本的最大行数。
- onChanged 参数用于监听输入文本的变化事件，可以实时获取输入内容。
- onSubmitted 参数用于监听输入文本的提交事件，通常在按下键盘的完成按钮时触发。
  :::

## Container

```dart
Container(
  // 子组件
  child: ...,

  // 内边距
  padding: EdgeInsets.all(8.0),

  // 外边距
  margin: EdgeInsets.all(8.0),

  // 背景颜色
  color: Colors.blue,

  // 前景色，即子组件的颜色
  foregroundDecoration: BoxDecoration(color: Colors.red),

  // 宽度
  width: 200,

  // 高度
  height: 100,

  // 最大宽度
  constraints: BoxConstraints(maxWidth: 300),

  // 裁剪行为
  clipBehavior: Clip.none,

  // 对齐方式
  alignment: Alignment.center,

  // 装饰器
  decoration: BoxDecoration(
    // 边框样式
    border: Border.all(color: Colors.black, width: 2.0),

    // 边框圆角
    borderRadius: BorderRadius.circular(10.0),

    // 背景图片
    image: DecorationImage(
      image: AssetImage('assets/image.png'),
      fit: BoxFit.cover,
    ),
  ),

  // 转换
  transform: Matrix4.rotationZ(0.1),
)
```

::: info
注意事项：

- 当子组件大小不受限制时，Container 会根据 width、height、constraints 等参数确定自身大小。
- 使用 alignment 参数时，如果 Container 没有设置固定大小，子组件会居中显示，但如果设置了固定大小，子组件可能不会居中。
- 在使用 alignment 属性时，如果容器不是无限制大小，则它将会定位子部件。
- 当容器设置了宽度或高度时，子组件的大小不受 Container 的大小限制，但在没有设置宽度或高度时，子组件的大小受 Container 的约束影响。
  :::

## Row

```dart
Row(
  // 主轴上的对齐方式
  mainAxisAlignment: MainAxisAlignment.start,

  // 交叉轴上的对齐方式
  crossAxisAlignment: CrossAxisAlignment.center,

  // 主轴尺寸约束，可选值为 MainAxisSize.min 和 MainAxisSize.max
  mainAxisSize: MainAxisSize.max,

  // 主轴方向上的间距
  mainAxisSpacing: 8.0,

  // 交叉轴方向上的间距
  crossAxisAlignment: CrossAxisAlignment.start,

  // 子组件列表
  children: [
    // 子组件 1,
    // 子组件 2,
    // ...
  ],
)
```

::: info
注意事项：

- Row 组件将子组件沿水平方向排列。
- mainAxisAlignment 参数控制子组件在主轴上的对齐方式，例如 MainAxisAlignment.start 将子组件靠近 Row 的开始位置。
- crossAxisAlignment 参数控制子组件在交叉轴上的对齐方式，例如 CrossAxisAlignment.center 将子组件在交叉轴上居中对齐。
- 如果 Row 的尺寸超过父容器的尺寸，可以使用 MainAxisSize.min 来让 Row 尽可能小，或者使用 MainAxisSize.max 来让 Row 尽可能大。
- 可以使用 mainAxisSpacing 参数控制主轴上子组件的间距。
- Row 组件还有其他参数，如 textDirection、verticalDirection 等，可以根据需要设置。
  :::

## Column

```dart
Column(
  // 主轴上的对齐方式
  mainAxisAlignment: MainAxisAlignment.start,

  // 交叉轴上的对齐方式
  crossAxisAlignment: CrossAxisAlignment.center,

  // 主轴尺寸约束，可选值为 MainAxisSize.min 和 MainAxisSize.max
  mainAxisSize: MainAxisSize.max,

  // 主轴方向上的间距
  mainAxisSpacing: 8.0,

  // 交叉轴方向上的间距
  crossAxisAlignment: CrossAxisAlignment.start,

  // 子组件列表
  children: [
    // 子组件 1,
    // 子组件 2,
    // ...
  ],
)
```

::: info
注意事项：

- Column 组件将子组件沿垂直方向排列。
- mainAxisAlignment 参数控制子组件在主轴上的对齐方式，例如 MainAxisAlignment.start 将子组件靠近 Column 的开始位置。
- crossAxisAlignment 参数控制子组件在交叉轴上的对齐方式，例如 CrossAxisAlignment.center 将子组件在交叉轴上居中对齐。
- 如果 Column 的尺寸超过父容器的尺寸，可以使用 MainAxisSize.min 来让 Column 尽可能小，或者使用 MainAxisSize.max 来让 Column 尽可能大。
- 可以使用 mainAxisSpacing 参数控制主轴上子组件的间距。
- Column 组件还有其他参数，如 textDirection、verticalDirection 等，可以根据需要设置。
  :::

## ListView

```dart
ListView(
  // 滚动方向
  scrollDirection: Axis.vertical,

  // 是否反向排列
  reverse: false,

  // 是否根据子组件尺寸调整自身尺寸
  shrinkWrap: false,

  // 内边距
  padding: EdgeInsets.all(8.0),

  // 主轴上的间距
  primary: true,

  // 滚动控制器
  controller: ScrollController(),

  // 子组件列表
  children: [
    // 子组件 1,
    // 子组件 2,
    // ...
  ],
)
```

::: info
注意事项：

- ListView 组件用于显示一个线性排列的子组件列表，可以沿水平或垂直方向滚动。
- scrollDirection 参数指定滚动方向，可以是 Axis.vertical（垂直方向）或 Axis.horizontal（水平方向）。
- reverse 参数决定了子组件的排列顺序，为 true 时子组件会从末尾开始排列。
- shrinkWrap 参数用于控制 ListView 是否根据子组件尺寸调整自身尺寸，通常在嵌套 ListView 中使用。
- padding 参数为内边距，用于控制子组件与 ListView 边缘的间距。
- primary 参数指定滚动控制器是否使用子组件的尺寸作为滚动视图的尺寸。
- controller 参数用于指定一个滚动控制器，可以用于控制 ListView 的滚动行为。
- children 参数为子组件列表，用于定义 ListView 中显示的内容。
  :::

## ListView.separated

`ListView.separated` 是 `ListView` 的一个变体，它允许在列表项之间插入分隔符。以下是 `ListView.separated` 的常用参数说明：

```dart
ListView.separated(
  // 列表项构建器
  itemBuilder: (BuildContext context, int index) {
    return ListTile(
      title: Text('Item $index'),
    );
  },

  // 分隔符构建器
  separatorBuilder: (BuildContext context, int index) {
    return Divider(
      color: Colors.grey,
    );
  },

  // 列表项数量
  itemCount: 10,
)
```

::: info
注意事项：

- ListView.separated 通常用于在列表项之间插入分隔符。
- itemBuilder 参数用于构建每个列表项的内容。
- separatorBuilder 参数用于构建分隔符，它接受一个函数，该函数根据索引返回一个 Widget。
- itemCount 参数用于指定列表项的数量。
  :::

## GridView

```dart
GridView(
  // 每行子组件数量
  crossAxisCount: 2,

  // 主轴上的间距
  mainAxisSpacing: 8.0,

  // 交叉轴上的间距
  crossAxisSpacing: 8.0,

  // 是否为滚动视图
  shrinkWrap: true,

  // 滚动方向
  scrollDirection: Axis.vertical,

  // 控制滚动的方式
  physics: ScrollPhysics(),

  // 子组件列表
  children: [
    // 子组件 1,
    // 子组件 2,
    // ...
  ],
)
```

::: info
注意事项：

- GridView 组件用于显示一个二维网格列表，可以沿水平或垂直方向滚动。
- crossAxisCount 参数指定每行（列）的子组件数量。
- mainAxisSpacing 和 crossAxisSpacing 参数分别控制主轴和交叉轴方向上子组件的间距。
- shrinkWrap 参数用于控制 GridView 是否根据子组件尺寸调整自身尺寸。
- scrollDirection 参数指定滚动方向，可以是 Axis.vertical（垂直方向）或 Axis.horizontal（水平方向）。
- physics 参数用于控制滚动的方式，如是否允许滚动、滚动的阻尼等。
- children 参数为子组件列表，用于定义 GridView 中显示的内容。
  :::

## Stack

```dart
Stack(
  // 子组件的对齐方式
  alignment: AlignmentDirectional.topStart,

  // 子组件列表
  children: [
    // 子组件 1,
    // 子组件 2,
    // ...
  ],
)
```

::: info
注意事项：

- Stack 组件用于在单个堆叠中排列子组件。
- alignment 参数控制子组件在堆叠中的对齐方式，例如 AlignmentDirectional.topStart 表示子组件在堆叠的顶部和起始位置对齐。
- 子组件在 Stack 中的显示顺序由其在 children 列表中的位置决定，越靠后的子组件越在上层。
- 如果未指定子组件的位置和大小，则它们将占据 Stack 组件的整个空间。
- Stack 组件还有其他参数，如 textDirection、fit 等，可以根据需要设置。
  :::

## Flex

`Flex` 组件用于沿着主轴方向排列子组件，并根据子组件的 `Flex` 权重来分配剩余空间。通常与 `Row` 或 `Column` 一起使用。以下是 `Flex` 的常用参数说明：

```dart
Flex(
  // 主轴方向
  direction: Axis.horizontal,

  // 主轴对齐方式
  mainAxisAlignment: MainAxisAlignment.start,

  // 主轴尺寸约束
  mainAxisSize: MainAxisSize.max,

  // 交叉轴对齐方式
  crossAxisAlignment: CrossAxisAlignment.center,

  // 子组件
  children: [
    // 子组件 1,
    // 子组件 2,
    // ...
  ],
)
```

::: info
注意事项：

- Flex 组件是灵活的布局组件，通常与 Row 或 Column 一起使用。
- direction 参数用于指定主轴方向，可以是 Axis.horizontal（水平方向）或 Axis.vertical（垂直方向）。
- mainAxisAlignment 参数用于指定主轴对齐方式，可以是 MainAxisAlignment.start、MainAxisAlignment.center、MainAxisAlignment.end 等。
- mainAxisSize 参数用于指定主轴尺寸约束，可以是 MainAxisSize.min（尽可能小）或 MainAxisSize.max（尽可能大）。
- crossAxisAlignment 参数用于指定交叉轴对齐方式，可以是 CrossAxisAlignment.start、CrossAxisAlignment.center、CrossAxisAlignment.end 等。
  :::

## Expanded

```dart
Expanded(
  // 子组件在父容器中所占比例
  flex: 1,
  child: Container(
    color: Colors.red,
  ),
),
```

::: info
在这个例子中，Expanded 组件将其子组件的宽度（或高度，具体取决于其父组件的方向）扩展以填充父容器的可用空间。flex 参数指定了子组件在剩余空间中所占的比例。在这里，如果有多个 Expanded 子组件，它们的 flex 值将决定它们在父容器中所占的比例。比如，如果一个子组件的 flex 为 2，另一个的 flex 为 1，前者将占据剩余空间的 2/3，而后者将占据 1/3。
:::

## Flexible

```dart
Flexible(
  // 子组件在父容器中所占比例
  flex: 2,
  child: Container(
    color: Colors.blue,
  ),
),
```

::: info
与 Expanded 不同，Flexible 可以根据需要收缩。flex 参数也用于指定子组件在父容器中所占的比例，但与 Expanded 不同，Flexible 不会强制子组件填充剩余空间，而是根据需要调整大小。
:::

## Visibility

```dart
Visibility(
  // 子组件
  child: Container(
    width: 100,
    height: 100,
    color: Colors.blue,
  ),

  // 是否可见
  visible: true,

  // 是否保留空间
  maintainSize: true,

  // 是否保留动画
  maintainAnimation: true,

  // 是否保留语义
  maintainState: true,
)
```

::: info
注意事项：

- Visibility 组件用于控制其子组件的可见性。
- visible 参数用于指定子组件是否可见，为 true 时显示子组件，为 false 时隐藏子组件。
- maintainSize 参数用于控制当子组件不可见时是否保留其空间。
- maintainAnimation 参数用于控制当子组件不可见时是否保留其动画状态。
- maintainState 参数用于控制当子组件不可见时是否保留其语义信息。
  :::

## ClipRRect

```dart
ClipRRect(
  // 圆角矩形的圆角
  borderRadius: BorderRadius.circular(10.0),

  // 裁剪行为
  clipBehavior: Clip.antiAlias,

  // 子组件
  child: Container(
    width: 100,
    height: 100,
    color: Colors.blue,
  ),
)
```

::: info
注意事项：

- ClipRRect 组件用于将其子组件裁剪为圆角矩形。
- borderRadius 参数用于指定圆角矩形的圆角大小。
- clipBehavior 参数用于指定裁剪的行为，例如 Clip.antiAlias 表示裁剪时使用抗锯齿。
  :::

## SingleChildScrollView

```dart
SingleChildScrollView(
  // 滚动方向
  scrollDirection: Axis.vertical,

  // 控制滚动的方式
  physics: BouncingScrollPhysics(),

  // 是否反转滚动方向
  reverse: false,

  // 滚动控制器
  controller: ScrollController(),

  // 滚动视图的边距
  padding: EdgeInsets.all(8.0),

  // 子组件
  child: Column(
    children: [
      // 子组件 1,
      // 子组件 2,
      // ...
    ],
  ),
)
```

::: info
注意事项：

- SingleChildScrollView 组件用于创建只有单个子组件的滚动视图。
- scrollDirection 参数指定滚动方向，可以是 Axis.vertical（垂直方向）或 Axis.horizontal（水平方向）。
- physics 参数用于控制滚动的方式，例如 BouncingScrollPhysics() 可以创建具有回弹效果的滚动视图。
- reverse 参数用于控制滚动方向是否反转。
- controller 参数用于指定一个滚动控制器，可以用于控制滚动位置、监听滚动事件等。
- padding 参数用于设置滚动视图的内边距。
- child 参数是一个子组件，可以是任何 Widget，但通常是一个 Column 或 Row，用于包含所有需要滚动的子组件。
  :::

## DefaultTabController

`DefaultTabController` 是一个用于管理 `TabBar` 和 `TabBarView` 的控制器，通常与 `TabBar` 和 `TabBarView` 一起使用。以下是 `DefaultTabController` 的常用参数说明：

```dart
DefaultTabController(
  // tab的数量
  length: 3,

  // 初始选中的tab索引
  initialIndex: 0,

  // 用于设置选项卡控制器的回调函数
  child: Scaffold(
    appBar: AppBar(
      // 选项卡栏
      bottom: TabBar(
        // 选项卡的数量，必须与DefaultTabController的length属性相同
        tabs: [
          Tab(icon: Icon(Icons.directions_car)),
          Tab(icon: Icon(Icons.directions_transit)),
          Tab(icon: Icon(Icons.directions_bike)),
        ],
      ),
    ),
    // 选项卡视图
    body: TabBarView(
      children: [
        // 视图 1,
        // 视图 2,
        // 视图 3,
      ],
    ),
  ),
)
```

::: info
注意事项：

- DefaultTabController 通常作为 Scaffold 的直接子组件。
- length 参数用于指定 TabBar 中选项卡的数量。
- initialIndex 参数用于指定默认选中的选项卡的索引。
- child 参数接受一个 Widget，通常是 Scaffold，并包含了 TabBar 和 TabBarView。
- TabBar 是一个选项卡栏，它的 tabs 参数接受一个 List，其中包含了 Tab 组件，用于定义每个选项卡的内容。
- TabBarView 是一个包含选项卡内容的视图，它的 children 参数接受一个 List，其中包含了每个选项卡对应的内容视图。
  :::

## NestedScrollView

`NestedScrollView` 组件用于创建一个支持嵌套滚动的视图，通常用于处理多个滚动视图的嵌套。以下是 `NestedScrollView` 的常用参数说明：

```dart
NestedScrollView(
  // 滚动控制器
  controller: ScrollController(),

  // 是否应该与父级widget分享PrimaryScrollController
  // 默认为true
  primary: true,

  // 是否启用手势
  // 默认为true
  physics: AlwaysScrollableScrollPhysics(),

  // 顶部悬停栏
  headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
    return <Widget>[
      SliverAppBar(
        title: Text('Title'),
        floating: true,
        pinned: true,
      ),
      // 其他悬停栏
    ];
  },

  // 主内容区域
  body: SingleChildScrollView(
    // 滚动方向
    scrollDirection: Axis.vertical,
    // 子组件
    child: Column(
      children: [
        // 子组件 1,
        // 子组件 2,
        // ...
      ],
    ),
  ),
)
```

::: info

- 注意事项：

- NestedScrollView 可以嵌套其他滚动视图，例如 ListView、GridView 等。
- controller 参数用于设置滚动控制器，控制滚动位置等。
- primary 参数用于指定是否应该与父级 Widget 分享 PrimaryScrollController。默认情况下为 true，表示与父级共享。
- physics 参数用于指定是否启用手势。默认情况下为 AlwaysScrollableScrollPhysics()，表示始终可以通过手势进行滚动。
- headerSliverBuilder 参数是一个回调函数，用于构建顶部悬停栏，通常返回一个 List，其中包含一个或多个 SliverAppBar 组件。这些悬停栏会随着滚动而固定在顶部。
- body 参数是主内容区域，通常是一个滚动视图，例如 ListView、SingleChildScrollView 等。
  :::

## SliverOverlapAbsorber

`SliverOverlapAbsorber` 是一个用于处理重叠区域的组件，通常与 `NestedScrollView` 和 `SliverAppBar` 一起使用。它可以吸收 `SliverAppBar` 重叠的部分，以便 `SliverOverlapInjector` 可以正确处理重叠。以下是 `SliverOverlapAbsorber` 的常用参数说明：

```dart
NestedScrollView(
  // 滚动控制器
  controller: ScrollController(),

  // 是否应该与父级widget分享PrimaryScrollController
  primary: true,

  // 顶部悬停栏
  headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
    return <Widget>[
      SliverAppBar(
        title: Text('Title'),
        floating: true,
        pinned: true,
      ),
      // 其他悬停栏
    ];
  },

  // 主内容区域
  body: SliverOverlapAbsorber(
    // 指定一个Key来识别SliverOverlapAbsorber
    handle: NestedScrollView.sliverOverlapAbsorberHandleFor(context),
    // 子组件
    child: SingleChildScrollView(
      // 滚动方向
      scrollDirection: Axis.vertical,
      // 子组件
      child: Column(
        children: [
          // 子组件 1,
          // 子组件 2,
          // ...
        ],
      ),
    ),
  ),
)
```

::: info

- 注意事项：

- SliverOverlapAbsorber 通常作为 NestedScrollView 的主体部分使用，用于处理重叠区域。
- handle 参数需要指定一个 Key 来唯一标识 SliverOverlapAbsorber。通常可以使用 NestedScrollView.sliverOverlapAbsorberHandleFor(context) 来获取一个与当前 NestedScrollView 相关的 Key。
- SliverOverlapAbsorber 的子组件通常是一个滚动视图，例如 SingleChildScrollView，用于显示主要内容。
  :::

## FlexibleSpaceBar

`FlexibleSpaceBar` 是 `SliverAppBar` 的一个子组件，用于定义一个可伸缩的空间，通常用于创建具有自定义效果的应用栏。以下是 `FlexibleSpaceBar` 的常用参数说明：

```dart
FlexibleSpaceBar(
  // 标题
  title: Text('Title'),

  // 标题居中
  centerTitle: true,

  // 标题样式
  titleTextStyle: TextStyle(
    color: Colors.white,
    fontSize: 16.0,
  ),

  // 背景
  background: Container(
    color: Colors.blue,
    child: Image.asset(
      'assets/background_image.jpg',
      fit: BoxFit.cover,
    ),
  ),

  // 是否在收起时向上展开
  collapseMode: CollapseMode.parallax,

  // 伸缩空间的高度
  // 默认情况下，它的高度是跟随AppBar的高度变化而变化
  // 当指定了foregroundBackgroundContainer时，该高度为最小高度
  stretchModes: [
    StretchMode.zoomBackground,
    StretchMode.blurBackground,
    StretchMode.fadeTitle,
  ],

  // 前景容器
  foregroundBackgroundContainer: Container(
    color: Colors.transparent,
    child: Center(
      child: Text('Foreground'),
    ),
  ),

  // 展开时标题的缩放比例
  expandedTitleScale: 1.0,
)
```

::: info
注意事项：

- FlexibleSpaceBar 通常作为 SliverAppBar 的 flexibleSpace 参数使用，用于定义一个可伸缩的空间。
- title 参数用于设置标题，通常是一个 Text 组件。
- centerTitle 参数用于指定标题是否居中显示。
- titleTextStyle 参数用于指定标题文本的样式。
- background 参数用于设置背景，可以是一个颜色或一个 Widget。
- collapseMode 参数用于指定伸缩空间在收起时的行为。
- stretchModes 参数用于指定伸缩空间的拉伸模式，可以是 StretchMode.zoomBackground、StretchMode.blurBackground、StretchMode.fadeTitle 等。
- foregroundBackgroundContainer 参数用于设置前景容器，通常用于显示额外的内容，例如按钮、文本等。
- expandedTitleScale 参数用于控制标题在展开时的缩放比例。默认情况下，标题在展开时不会缩放，其值为 1.0。如果将 expandedTitleScale 设置为 2.0，则标题在展开时将以原始大小的两倍显示。
  :::

## PageView

PageView 是 Flutter 中用来展示多个页面并支持滑动切换的组件之一。它常用于创建引导页、图片轮播、应用程序的欢迎页面等。

```dart
PageView({
  Key? key,
  Axis scrollDirection = Axis.horizontal, // 滚动方向，默认水平方向
  bool reverse = false, // 子页面的排序是否是倒序，默认为false
  PageController? controller, // 控制PageView的行为
  ScrollPhysics? physics, // 滑动效果
  bool pageSnapping = true, // 设置是否整页滚动，默认为true
  ValueChanged<int>? onPageChanged, // 页面发生改变时的回调函数
  DragStartBehavior dragStartBehavior = DragStartBehavior.start, // 认定开始拖动行为的方式，默认是start
  bool allowImplicitScrolling = false, // 是否缓存当前页面的前后两页
  String? restorationId, // restoreidID 以字符串为对象
  Clip clipBehavior = Clip.hardEdge, // 内容剪辑
  List<Widget> children = const <Widget>[], // 子页面组件列表
})
```

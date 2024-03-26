# flutter 常用 widget 简单说明

1. **Container（容器）**：用于包裹其他 Widget，并提供修饰、变换、限制等功能。
2. **Text（文本）**：用于显示文本内容。
3. **Image（图片）**：用于显示图片。
4. **AppBar（应用栏）**：位于顶部，通常包含标题、操作按钮等。
5. **Scaffold（脚手架）**：应用程序的基本布局结构，包含 appBar、body 等。
6. **TextField（文本输入框）**：用于用户输入文本。
7. **Button（按钮）**：用户交互元素，用于触发操作。
8. **AlertDialog（警告对话框）**：用于向用户显示一些提示信息。
9. **BottomNavigationBar（底部导航栏）**：显示在屏幕底部的导航栏。
10. **TabBar（选项卡栏）**：用于在不同的标签页之间切换。
11. **PopupMenuButton（弹出菜单按钮）**：点击后显示一个弹出菜单。
12. **Opacity（透明度）**：用于控制子 widget 的透明度。
13. **Spacer（弹性空间）**：占据可用空间的空白 widget。
14. **Divider（分割线）**：在视图中添加分割线。
15. **ListView.builder（构建列表）**：根据需要构建列表项的 ListView。
16. **GridView.builder（构建网格）**：根据需要构建网格项的 GridView。
17. **Expanded（扩展）**：用于子 widget 沿着父 widget 的主轴扩展。
18. **AspectRatio（宽高比）**：用于调整子 widget 的宽高比。
19. **Flexible（灵活空间）**：根据可用空间调整尺寸。
20. **Wrap（换行布局）**：根据特定算法自动换行的布局。
21. **IndexedStack（索引堆叠）**：根据索引显示单个子 widget。
22. **ClipRRect（圆角矩形裁剪）**：用于裁剪子 widget 为圆角矩形。
23. **ClipOval（椭圆裁剪）**：用于裁剪子 widget 为椭圆形。
24. **ClipPath（路径裁剪）**：用于根据路径裁剪子 widget。
25. **AnimatedContainer（动画容器）**：带动画效果的容器。
26. **AnimatedOpacity（动画透明度）**：带动画效果的透明度。
27. **AnimatedCrossFade（动画淡入淡出）**：两个子 widget 之间带动画效果的淡入淡出。
28. **AnimatedSwitcher（动画切换）**：两个子 widget 之间带动画效果的切换。
29. **AnimatedBuilder（动画构建器）**：用于在动画过程中构建 widget。
30. **Positioned（定位）**：用于定位子 widget。
31. **Stack（堆叠布局）**：堆叠子 widget，可以自由定位。
32. **Flex（弹性布局）**：使用 flexbox 布局算法排列子 widget。
33. **MediaQuery（媒体查询）**：获取设备屏幕的尺寸信息。
34. **CupertinoNavigationBar（iOS 风格导航栏）**：iOS 风格的导航栏。
35. **CupertinoButton（iOS 风格按钮）**：iOS 风格的按钮。
36. **CupertinoTextField（iOS 风格文本输入框）**：iOS 风格的文本输入框。
37. **CupertinoPicker（iOS 风格选择器）**：iOS 风格的选择器。
38. **CupertinoAlertDialog（iOS 风格警告对话框）**：iOS 风格的警告对话框。
39. **CupertinoPageScaffold（iOS 风格页面布局）**：iOS 风格的页面布局。
40. **SnackBar（消息提示）**：底部显示消息提示，带有操作按钮。
41. **RefreshIndicator（刷新指示器）**：下拉刷新指示器。
42. **Tooltip（提示工具）**：长按或悬停时显示提示信息。
43. **Draggable（可拖动）**：可拖动的 widget。
44. **DragTarget（拖放目标）**：用于接收拖放操作。
45. **Dismissible（可滑动删除）**：可滑动删除的 widget。
46. **NotificationListener（通知监听器）**：监听通知事件。
47. **WillPopScope（返回按钮监听）**：监听返回按钮的点击事件。
48. **InkWell（水波纹点击效果）**：材料设计风格的水波纹点击效果。
49. **InkResponse（响应触摸事件）**：用于响应触摸事件的材料设计 widget。
50. **Hero（共享元素动画）**：在页面切换时实现平滑过渡效果。
51. **PageView（页面视图）**：用于显示可滑动的页面视图。
52. **GridView（网格视图）**：用于显示网格布局的列表。
53. **ListView（列表视图）**：用于显示垂直方向的列表。
54. **Column（垂直布局）**：用于垂直排列子 widget。
55. **Row（水平布局）**：用于水平排列子 widget。
56. **Wrap（流式布局）**：根据特定算法自动换行的布局。
57. **Align（对齐布局）**：用于对齐子 widget。
58. **Center（居中布局）**：用于将子 widget 居中。
59. **Padding（填充）**：用于给子 widget 添加填充。
60. **SafeArea（安全区域）**：根据设备屏幕安全区域设置内边距。
61. **SingleChildScrollView（单子 widget 滚动视图）**：用于包裹单个子 widget，并允许滚动。
62. **ClipRect（矩形裁剪）**：用于将子 widget 裁剪为矩形。
63. **FractionalTranslation（分数位移）**：在父 widget 中根据百分比平移子 widget。
64. **RotatedBox（旋转盒子）**：用于旋转子 widget。
65. **SizedBox（固定尺寸盒子）**：用于设置子 widget 的固定大小。
66. **LimitedBox（限制盒子）**：用于限制子 widget 的最大宽高。
67. **ConstrainedBox（约束盒子）**：用于强制子 widget 遵循指定的约束条件。
68. **IntrinsicWidth（固有宽度）**：用于使子 widget 的宽度符合其内容的宽度。
69. **IntrinsicHeight（固有高度）**：用于使子 widget 的高度符合其内容的高度。
70. **Baseline（基线布局）**：用于根据基线对齐子 widget。
71. **AspectRation（宽高比）**：用于调整子 widget 的宽高比。
72. **Offstage（不可见）**：用于控制子 widget 是否显示在屏幕上。
73. **Placeholder（占位符）**：占据空间但不显示任何内容。
74. **ReorderableListView（可重新排序的列表视图）**：允许用户通过拖动重新排序列表项。
75. **LayoutBuilder（布局构建器）**：根据父 widget 的约束条件构建 widget 树。
76. **ValueListenableBuilder（可监听值的构建器）**：根据值的变化来构建 widget 树。
77. **AbsorbPointer（吸收指针事件）**：使子 widget 完全接收触摸事件。
78. **AnimatedDefaultTextStyle（动画文本样式）**：在文本样式变化时自动执行动画。
79. **AnimatedList（动画列表）**：提供动画效果的列表，可以动态添加或删除项目。
80. **AnimatedPadding（动画填充）**：在子 widget 的 padding 变化时自动执行动画。
81. **AnimatedPhysicalModel（动画物理模型）**：带有动画效果的物理模型。
82. **AnimatedPositioned（动画定位）**：在子 widget 位置变化时自动执行动画。
83. **AnimatedSize（动画尺寸）**：在子 widget 尺寸变化时自动执行动画。
84. **AnimatedWidget（动画组件）**：用于将不可变的 widget 包装在动画中。
85. **DecoratedBoxTransition（装饰盒子过渡）**：用于装饰盒子的过渡动画。
86. **FadeTransition（透明度过渡）**：用于透明度过渡动画。
87. **IgnorePointer（忽略指针事件）**：使子 widget 不响应触摸事件。
88. **Builder（构造器）**：用于构建 UI，通常用于 BuildContext 的传递。
89. **BottomSheet（底部滑动面板）**：从屏幕底部弹出的面板。
90. **CustomPaint（自定义绘制）**：用于在画布上自定义绘制子 widget。
91. **CustomScrollView（自定义滚动视图）**：创建一个自定义的滚动视图。
92. **DataTable（数据表格）**：用于显示二维表格数据。
93. **Date & Time Pickers（日期和时间选择器）**：用于选择日期和时间。
94. **DecoratedBox（装饰盒子）**：用于装饰子 widget，并可以设置背景、边框等。
95. **Drawer（抽屉）**：从屏幕边缘滑入的面板，通常用于导航菜单。
96. **DropdownButton（下拉菜单按钮）**：触发下拉菜单的按钮。
97. **ExpansionPanel（可展开面板）**：可展开的面板，用于显示更多内容。
98. **FlatButton（扁平按钮）**：扁平化的按钮，不带阴影。
99. **FloatingActionButton（浮动动作按钮）**：固定在屏幕上方的圆形按钮，用于执行主要操作。
100. **GestureDetector（手势检测器）**：用于检测各种手势，如点击、拖动等。
101. **IconButton（图标按钮）**：带有图标的按钮。
102. **Material（材料设计样式）**：Material 组件库的顶层容器，提供材料设计的外观风格。
103. **MergeSemantics（合并语义）**：将子 widget 的语义合并为一个语义节点。
104. **Navigator（导航器）**：用于管理页面的导航栈。
105. **OutlineButton（轮廓按钮）**：带有轮廓边框的按钮。
106. **OverflowBox（溢出盒子）**：用于控制子 widget 的溢出行为。
107. **Radio（单选框）**：用于单选操作。
108. **RaisedButton（凸起按钮）**：带有阴影的凸起按钮。
109. **RichText（富文本）**：用于显示具有不同样式的文本。
110. **PositionedTransition（定位过渡）**：用于位置过渡动画。
111. **RotationTransition（旋转过渡）**：用于旋转过渡动画。
112. **ScaleTransition（缩放过渡）**：用于缩放过渡动画。
113. **SizeTransition（尺寸过渡）**：用于尺寸过渡动画。
114. **SlideTransition（滑动过渡）**：用于滑动过渡动画。
115. **AnimatedAlign（动画对齐）**：在子 widget 对齐方式变化时自动执行动画。

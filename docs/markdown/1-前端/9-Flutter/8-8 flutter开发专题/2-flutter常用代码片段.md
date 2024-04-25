# flutter 常用代码片段

## 表格

你可以使用 `Flutter` 的 `DataTable` 组件来创建表格，并将其包装在 `SingleChildScrollView` 中以支持横向滚动。以下是一个简单的示例代码，用于创建包含 `10` 个属性的表格：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter DataTable'),
        ),
        body: SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: DataTable(
            columnSpacing: 20.0,
            columns: <DataColumn>[
              DataColumn(
                label: Text(
                  '属性1',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              DataColumn(
                label: Text(
                  '属性2',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              DataColumn(
                label: Text(
                  '属性3',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              DataColumn(
                label: Text(
                  '属性4',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              DataColumn(
                label: Text(
                  '属性5',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              DataColumn(
                label: Text(
                  '属性6',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              DataColumn(
                label: Text(
                  '属性7',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              DataColumn(
                label: Text(
                  '属性8',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              DataColumn(
                label: Text(
                  '属性9',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              DataColumn(
                label: Text(
                  '属性10',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
            ],
            rows: List<DataRow>.generate(
              10,
              (int index) => DataRow(
                cells: <DataCell>[
                  DataCell(Text('值${index + 1}')),
                  DataCell(Text('值${index + 2}')),
                  DataCell(Text('值${index + 3}')),
                  DataCell(Text('值${index + 4}')),
                  DataCell(Text('值${index + 5}')),
                  DataCell(Text('值${index + 6}')),
                  DataCell(Text('值${index + 7}')),
                  DataCell(Text('值${index + 8}')),
                  DataCell(Text('值${index + 9}')),
                  DataCell(Text('值${index + 10}')),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

```

## appBar 下面添加内容，并且悬浮

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: <Widget>[
          SliverAppBar(
            pinned: true, // 设置AppBar固定在顶部
            expandedHeight: 200.0,
            flexibleSpace: FlexibleSpaceBar(
              title: Text('Page Title'),
            ),
          ),
          SliverToBoxAdapter(
            child: Container(
              color: Colors.grey.shade300,
              padding: const EdgeInsets.all(16.0),
              child: Text(
                '这里是AppBar下面的一行文字',
                style: TextStyle(fontSize: 18),
              ),
            ),
          ),
          // 列表内容
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) {
                return Container(
                  padding: const EdgeInsets.all(16.0),
                  color: Colors.primaries[index % Colors.primaries.length],
                  child: Text(
                    'Item ${index + 1}',
                    style: TextStyle(fontSize: 20),
                  ),
                );
              },
              childCount: 100,
            ),
          ),
        ],
      ),
    );
  }
}
```

## ListTitle 编写用户中心栏目列表

使用 `ListTile` 来创建用户中心栏目列表，每一项包括一个图标、文字和右边的箭头符号：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // 用户中心栏目数据
  final List<Map<String, dynamic>> userMenuItems = [
    {'icon': Icons.person, 'text': '个人资料'},
    {'icon': Icons.payment, 'text': '我的订单'},
    {'icon': Icons.favorite, 'text': '我的收藏'},
    {'icon': Icons.settings, 'text': '设置'},
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('User Center'),
        ),
        body: ListView.builder(
          itemCount: userMenuItems.length,
          itemBuilder: (context, index) {
            return Container(
              margin: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(8.0), // 圆角边框
                child: Material(
                  color: themeC.themeColor['bgc-primary'],
                  child: InkWell(
                    onTap: () {
                      // 处理点击事件
                      print('You tapped on ${userMenuItems[index]['text']}');
                    },
                    child: ListTile(
                      leading: Icon(userMenuItems[index]['icon']),
                      title: Text(userMenuItems[index]['text']),
                      trailing: Icon(Icons.keyboard_arrow_right), // 右边箭头
                    ),
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

```

## TextButton ElevatedButton 等按钮尺寸大小

要设置 TextButton 的尺寸大小，你可以使用 ButtonStyle 中的 minimumSize 属性来指定按钮的最小尺寸。minimumSize 属性接受一个 Size 对象，表示按钮的最小宽度和高度。

```dart
TextButton(
  onPressed: () {
    // 按钮点击事件
  },
  child: Text('TextButton'),
  style: ButtonStyle(
    minimumSize: MaterialStateProperty.all(Size(100.0, 50.0)), // 指定按钮的最小尺寸
  ),
)

```

## ListView 循环，并且每项加背景和边框

要为 ListTile 添加背景颜色并在底部添加 1 像素的边框，你可以将 ListTile 包装在一个带有背景颜色和边框的 Container 中。以下是一个示例：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  final List<String> items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Array Loop Example'),
        ),
        body: ListView.builder(
          itemCount: items.length,
          itemBuilder: (context, index) {
            return Container(
              color: Colors.grey[200], // 设置背景颜色
              child: Column(
                children: [
                  ListTile(
                    title: Text(items[index]),
                  ),
                  Divider(
                    height: 1, // 设置分隔线高度
                    color: Colors.grey, // 设置分隔线颜色
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}

```

## 列表循环

通过判断条件输出不同的列表循环

```dart

Container(
  constraints: const BoxConstraints(maxHeight: 200),
  child: SingleChildScrollView(
    physics: const AlwaysScrollableScrollPhysics(), // 允许内容滚动
    child: Wrap(
      spacing: 4,
      runSpacing: 10,
      children: type == 'normal'
          ? List.generate(4, (index) {
              return SizedBox(
                width: contentMaxWidth / 4 - 12,
                child: PrizeItem(),
              );
            }).toList()
          : List.generate(28, (index) {
              return SizedBox(
                width: contentMaxWidth / 4 - 12,
                child: PrizeItem(),
              );
            }).toList(),
    ),
  ),
),
```

## InkWell 点击效果

需要放在 Material 里面

```dart
Material(
    color: themeC.themeColor['bgc-primary'],
    child: InkWell(
      onTap: () {
        // 处理点击事件
        clickItem(userMenuItems[index]);
      },
      child: ListTile(
        contentPadding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 0.0),
        leading: Icon(userMenuItems[index]['icon']),
        title: Text(userMenuItems[index]['text']),
        trailing: Icon(Icons.keyboard_arrow_right), // 右边箭头
      ),
    ),
  ),
```

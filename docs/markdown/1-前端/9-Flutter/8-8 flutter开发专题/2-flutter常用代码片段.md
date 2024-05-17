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

## ScrollController 监听滚动到底部，加载更多数据

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:pc28/components/empty.dart';
import '../../locales/locale_controller.dart';
import '../../themes/themes_controller.dart';
import '../../components/my_app_bar.dart';
import '../../api/api.dart';
import '../game/game_num.dart';

class Bill extends StatefulWidget {
  const Bill({Key? key}) : super(key: key);

  @override
  State<Bill> createState() => _BillState();
}

class _BillState extends State<Bill> with SingleTickerProviderStateMixin {
  LocaleController localeC = Get.find<LocaleController>();
  ThemeController themeC = Get.find<ThemeController>();

  final ScrollController _scrollController = ScrollController();
  bool _isLoading = false;
  bool isLoaded = false;

  Map<String, dynamic> pageParams = {
    'page': 1,
    'limit': 20,
  };
  Map<String, dynamic> pageData = {
    'isNomore': false,
    'dataList': [],
  };

  void getData({bool? isMore, Function? callback}) async {
    final res = await apis['orderLog']!(pageParams);
    setState(() {
      isLoaded = true;
    });
    if (res['code'] == 1) {
      var resdata = res['data'] ?? {};
      if (resdata.isEmpty) return;
      if (isMore != null && !isMore) {
        if (mounted) {
          setState(() {
            pageData['dataList'] = resdata['data'];
          });
        }
      } else {
        if (mounted) {
          setState(() {
            pageData['dataList'] = [...pageData['dataList'], ...resdata['data']];
          });
        }
      }
      if (resdata['last_page'] > pageParams['page']) {
        setState(() {
          pageData['isNomore'] = false;
        });
      } else {
        setState(() {
          pageData['isNomore'] = true;
        });
      }
      if (callback != null) {
        callback();
      }
    }
  }

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_scrollListener);
    getData();
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  void _scrollListener() {
    if (_scrollController.position.pixels >= _scrollController.position.maxScrollExtent) {
      // 滚动到底部
      if (!pageData['isNomore']) {
        _loadMoreData();
      }
    }
  }

  void _loadMoreData() {
    if (!_isLoading) {
      setState(() {
        _isLoading = true;
        ++pageParams['page'];
      });
      getData(
        isMore: true,
        callback: () {
          setState(() {
            _isLoading = false;
          });
        },
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    String getNum(types, nums) {
      String betdata = '';
      List typesList = types.split(',');
      List<Map<String, dynamic>> bets = normalNumbs.where((item) => typesList.contains(item['type'].toString())).toList();
      betdata = bets.map((numb) => numb['name'] as String).join(', ');
      if (typesList.contains('5')) {
        betdata = betdata == '' ? nums : '$betdata,$nums';
      }
      return betdata;
    }

    // String getStatus(status) {
    //   String statusText = '';
    //   if (status == 1) {
    //     statusText = 'Won'.tr;
    //   } else if (status == 2) {
    //     statusText = 'Didn_win'.tr;
    //   } else {
    //     statusText = 'Not_drawn_yet'.tr;
    //   }
    //   return statusText;
    // }
    String getCheck(status) {
      String statusText = '';
      if (status == 1) {
        statusText = 'Drawn_result'.tr;
      } else {
        statusText = 'Not_drawn_yet'.tr;
      }
      return statusText;
    }

    // String getSign(status) {
    //   String signText = '';
    //   if (status == 1) {
    //     signText = '+';
    //   } else if (status == 2) {
    //     signText = '';
    //   } else {
    //     signText = '';
    //   }
    //   return signText;
    // }

    return Scaffold(
      appBar: MyAppBar(
        title: 'financial_bill'.tr, // 将字符串包装在Text小部件中
        backgroundColor: themeC.themeColor['bgc-primary'],
      ),
      body: Column(
        children: [
          Container(
            height: 46.0,
            color: themeC.themeColor['bgc-primary'],
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Row(
              children: [
                Expanded(
                  flex: 1,
                  child: Center(
                    child: Text(
                      'Issue'.tr,
                      style: const TextStyle(
                        fontSize: 14.0,
                      ),
                    ),
                  ),
                ),
                Expanded(
                  flex: 3,
                  child: Center(
                    child: Text(
                      'Betting_details'.tr,
                      style: const TextStyle(
                        fontSize: 14.0,
                      ),
                    ),
                  ),
                ),
                Expanded(
                  flex: 1,
                  child: Center(
                    child: Text(
                      'state'.tr,
                      style: const TextStyle(
                        fontSize: 14.0,
                      ),
                    ),
                  ),
                ),
                Expanded(
                  flex: 2,
                  child: Center(
                    child: Text(
                      'Profit_and_loss'.tr,
                      style: const TextStyle(
                        fontSize: 14.0,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          isLoaded && pageData['dataList'].isEmpty
              ? const Expanded(child: Empty())
              : Expanded(
                  child: ListView.builder(
                    controller: _scrollController,
                    shrinkWrap: true, // 防止与SingleChildScrollView冲突
                    itemCount: pageData['dataList'].length + (_isLoading ? 1 : 0),
                    itemBuilder: (BuildContext content, int index) {
                      if (index < pageData['dataList'].length) {
                        var item = pageData['dataList'][index];
                        var betStr = getNum(item['buy_type'], item['buy_num']);
                        return Container(
                          margin: const EdgeInsets.symmetric(horizontal: 8.0),
                          padding: const EdgeInsets.symmetric(
                            vertical: 10.0,
                          ),
                          decoration: BoxDecoration(
                            border: Border(
                              bottom: BorderSide(
                                width: 1.0,
                                color: themeC.themeColor['bd-base']!,
                              ),
                            ),
                          ),
                          child: Row(
                            children: [
                              Expanded(
                                flex: 1,
                                child: Center(
                                  child: Text(
                                    '${item['code_sn']}',
                                    style: TextStyle(
                                      fontSize: 12.0,
                                      fontWeight: FontWeight.w700,
                                      color: themeC.themeColor['c-text-2'],
                                    ),
                                  ),
                                ),
                              ),
                              Expanded(
                                flex: 3,
                                child: Column(
                                  children: [
                                    RichText(
                                      textAlign: TextAlign.center,
                                      text: TextSpan(
                                          style: TextStyle(
                                            color: themeC.themeColor['c-text-3'],
                                          ),
                                          children: [
                                            TextSpan(
                                              text: '$betStr/',
                                              style: const TextStyle(
                                                fontSize: 10,
                                              ),
                                            ),
                                            TextSpan(
                                              text: '${item['buy_amount_one']}',
                                              style: TextStyle(
                                                color: themeC.themeColor['c-price'],
                                              ),
                                            ),
                                            const TextSpan(
                                              text: 'VND',
                                              style: TextStyle(
                                                fontSize: 11,
                                              ),
                                            ),
                                          ]),
                                    ),
                                    const SizedBox(
                                      height: 5,
                                    ),
                                    RichText(
                                      textAlign: TextAlign.center,
                                      text: TextSpan(
                                          style: TextStyle(
                                            color: themeC.themeColor['c-text-2'],
                                            fontWeight: FontWeight.w700,
                                          ),
                                          children: [
                                            TextSpan(
                                              text: '${'total'.tr}:',
                                              style: const TextStyle(
                                                fontSize: 10,
                                              ),
                                            ),
                                            TextSpan(
                                              text: '${item['buy_amount']}',
                                              style: TextStyle(
                                                color: themeC.themeColor['c-price'],
                                              ),
                                            ),
                                            const TextSpan(
                                              text: 'VND',
                                              style: TextStyle(
                                                fontSize: 11,
                                              ),
                                            ),
                                          ]),
                                    ),
                                  ],
                                ),
                              ),
                              Expanded(
                                flex: 1,
                                child: Center(
                                  child: Text(
                                    getCheck(item['is_check']),
                                    style: TextStyle(
                                      color: item['is_check'] == 1 ? themeC.themeColor['c-fall'] : themeC.themeColor['c-rise'],
                                    ),
                                  ),
                                ),
                              ),
                              Expanded(
                                flex: 2,
                                child: Center(
                                  child: Text(
                                    '${num.parse(item['earn_lost']) >= 0 ? '+' + item['earn_lost'] : item['earn_lost']}',
                                    style: TextStyle(
                                      color: num.parse(item['earn_lost']) >= 0 ? themeC.themeColor['c-fall'] : themeC.themeColor['c-rise'],
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        );
                      } else {
                        if (pageData['isNomore']) {
                          return const SizedBox();
                        } else {
                          return Padding(
                            padding: const EdgeInsets.symmetric(vertical: 16.0),
                            child: Center(
                              child: SizedBox(
                                width: 24,
                                height: 24,
                                child: CircularProgressIndicator(
                                  color: Colors.grey.withOpacity(0.5),
                                  strokeWidth: 3,
                                ),
                              ), // 加载指示器
                            ),
                          );
                        }
                      }
                    },
                  ),
                ),
        ],
      ),
    );
  }
}


```

## dart 数组操作

### 创建数组

- 使用 List 字面量创建数组

```dart
List<int> numbers = [1, 2, 3, 4, 5];

```

- 使用 List 构造函数创建数组

```dart
List<String> fruits = List<String>();
fruits.add('Apple');
fruits.add('Banana');
fruits.add('Orange');

```

### 获取数组长度

```dart
List<int> numbers = [1, 2, 3, 4, 5];
int length = numbers.length;
print('Length of numbers: $length');

```

### 访问数组元素

```dart
List<String> fruits = ['Apple', 'Banana', 'Orange'];
String firstFruit = fruits[0];
print('First fruit: $firstFruit');

```

### 添加元素到数组

```dart
List<String> fruits = ['Apple', 'Banana', 'Orange'];
fruits.add('Mango');
print('Updated fruits: $fruits');

```

### 移除数组中的元素

```dart
List<int> numbers = [1, 2, 3, 4, 5];
numbers.remove(3); // 移除元素 3
print('Updated numbers: $numbers');

```

### 遍历数组

- 使用 for 循环

```dart
List<int> numbers = [1, 2, 3, 4, 5];
for (int i = 0; i < numbers.length; i++) {
  print('Element at index $i: ${numbers[i]}');
}

```

- 使用 forEach 方法

```dart
List<String> fruits = ['Apple', 'Banana', 'Orange'];
fruits.forEach((fruit) {
  print('Fruit: $fruit');
});

```

### 转换数组

- 将数组转换为字符串

```dart
List<String> fruits = ['Apple', 'Banana', 'Orange'];
String fruitsStr = fruits.join(', ');
print('Fruits: $fruitsStr');

```

- 将数组中的元素映射到新的数组

```dart
List<int> numbers = [1, 2, 3, 4, 5];
List<String> numberStrs = numbers.map((number) => number.toString()).toList();
print('Number strings: $numberStrs');

```

### 检查数组是否包含某个元素

```dart
List<String> fruits = ['Apple', 'Banana', 'Orange'];
bool containsBanana = fruits.contains('Banana');
print('Contains Banana? $containsBanana');

```

### 一个数组的某个标识包含另外一个数组的值

要判断 normalNumbs 列表中 type 字段的值是否在 [2, 3] 中，可以使用 where() 方法来过滤列表，然后使用 any() 方法来检查是否存在符合条件的元素。以下是示例代码：

```dart
void main() {
  List<Map<String, dynamic>> normalNumbs = [
    {'type': 1, 'name': '大', 'rate': 'big_rate', 'check': false},
    {'type': 2, 'name': '小', 'rate': 'small_rate', 'check': false},
    {'type': 3, 'name': '单', 'rate': 'd_rate', 'check': false},
    {'type': 4, 'name': '双', 'rate': 's_rate', 'check': false}
  ];

  List<Map<String, dynamic>> filteredItems = normalNumbs.where((item) => [2, 3].contains(item['type'])).toList();

  print(filteredItems); // 输出包含指定类型的项目列表
}

```

在这个示例中，where() 方法将用于过滤列表，只保留 type 字段的值在 [2, 3] 中的元素。然后，isNotEmpty 属性将用于检查过滤后的列表是否包含任何元素，如果列表不为空，则表示 type 字段的值在 [2, 3] 中。

### 将数组的值复制到另一个数组

```dart
List<int> originalList = [1, 2, 3, 4, 5];
List<int> copiedList = List<int>.from(originalList);
print('Copied list: $copiedList');

```

```dart
List<Map<String, dynamic>> normalNumbs = [
  {'type': 1, 'name': '大', 'rate': 'big_rate', 'check': false},
  {'type': 2, 'name': '小', 'rate': 'small_rate', 'check': false},
  {'type': 3, 'name': '单', 'rate': 'd_rate', 'check': false},
  {'type': 4, 'name': '双', 'rate': 's_rate', 'check': false}
];
List<Map<String, dynamic>> normalList = List.from(normalNumbs.map((element) => {...element}));
List<Map<String, dynamic>> specialList = List.from(specialNumbs.map((element) => {...element}));
```

### 筛选数组中满足条件的元素

```dart
List<int> numbers = [1, 2, 3, 4, 5];
List<int> evenNumbers = numbers.where((number) => number % 2 == 0).toList();
print('Even numbers: $evenNumbers');

```

### 对数组进行排序

```dart
List<int> numbers = [5, 2, 8, 1, 3];
numbers.sort();
print('Sorted numbers: $numbers');

```

### 将数组拆分为多个部分

```dart
List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
List<List<int>> chunks = [];
int chunkSize = 3;
for (int i = 0; i < numbers.length; i += chunkSize) {
  chunks.add(numbers.sublist(i, i + chunkSize));
}
print('Chunks: $chunks');

```

### 合并多个数组

```dart
List<int> list1 = [1, 2, 3];
List<int> list2 = [4, 5, 6];
List<int> mergedList = [...list1, ...list2];
print('Merged list: $mergedList');

```

### 数组中的重复项计数

```dart
List<int> numbers = [1, 2, 3, 2, 4, 3, 2, 5, 2];
Map<int, int> countMap = {};
numbers.forEach((number) {
  countMap[number] = (countMap[number] ?? 0) + 1;
});
print('Count map: $countMap');

```

### 扁平化多维数组

```dart
List<List<int>> matrix = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8]
];
List<int> flatList = [];
matrix.forEach((row) {
  flatList.addAll(row);
});
print('Flat list: $flatList');

```

### 按条件分组数组元素

```dart
List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Map<bool, List<int>> groupedMap = numbers.groupBy((number) => number % 2 == 0);
print('Grouped map: $groupedMap');

```

### 转置矩阵

```dart
List<List<int>> matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
List<List<int>> transposedMatrix = List.generate(matrix[0].length, (colIndex) {
  return List.generate(matrix.length, (rowIndex) => matrix[rowIndex][colIndex]);
});
print('Transposed matrix: $transposedMatrix');

```

## 滚动到底部触发加载更多

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../../locales/locale_controller.dart';
import '../../themes/themes_controller.dart';
import '../../components/my_app_bar.dart';
import '../../api/api.dart';
import '../game/game_num.dart';

class Bill extends StatefulWidget {
  const Bill({Key? key}) : super(key: key);

  @override
  State<Bill> createState() => _BillState();
}

class _BillState extends State<Bill> with SingleTickerProviderStateMixin {
  LocaleController localeC = Get.find<LocaleController>();
  ThemeController themeC = Get.find<ThemeController>();

  final ScrollController _scrollController = ScrollController();
  bool _isLoading = false;

  Map<String, dynamic> pageData = {
    'page': 1,
    'limit': 20,
    'isNomore': false,
    'dataList': [],
  };

  void getData({bool? isMore, Function? callback}) async {
    final res = await apis['orderLog']!(pageData);
    if (res['code'] == 1) {
      var resdata = res['data'] ?? {};
      if (resdata.isEmpty) return;
      if (isMore != null && !isMore) {
        if (mounted) {
          setState(() {
            pageData['dataList'] = resdata['data'];
          });
        }
      } else {
        if (mounted) {
          setState(() {
            pageData['dataList'] = [...pageData['dataList'], ...resdata['data']];
          });
        }
      }
      if (resdata['last_page'] > pageData['page']) {
        pageData['isNomore'] = false;
      } else {
        pageData['isNomore'] = true;
      }
      callback ?? ();
    }
  }

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_scrollListener);
    getData();
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  void _scrollListener() {
    if (_scrollController.position.pixels == _scrollController.position.maxScrollExtent) {
      // 滚动到底部
      if (!pageData['isNomore']) {
        _loadMoreData();
      }
    }
  }

  void _loadMoreData() {
    if (!_isLoading) {
      setState(() {
        _isLoading = true;
        ++pageData['page'];
      });
      getData(
        isMore: true,
        callback: () {
          _isLoading = false;
        },
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    String getNum(types, nums) {
      String betdata = '';
      List typesList = types.split(',');
      List<Map<String, dynamic>> bets = normalNumbs.where((item) => typesList.contains(item['type'].toString())).toList();
      betdata = bets.map((numb) => numb['name'] as String).join(', ');
      if (typesList.contains('5')) {
        betdata = betdata == '' ? nums : '$betdata,$nums';
      }
      return betdata;
    }

    String getStatus(status) {
      String statusText = '';
      if (status == 1) {
        statusText = '已中奖';
      } else if (status == 2) {
        statusText = '未中奖';
      } else {
        statusText = '未开奖';
      }
      return statusText;
    }

    String getSign(status) {
      String signText = '';
      if (status == 1) {
        signText = '+';
      } else if (status == 2) {
        signText = '-';
      } else {
        signText = '';
      }
      return signText;
    }

    return Scaffold(
      appBar: MyAppBar(
        title: '财务账单', // 将字符串包装在Text小部件中
        backgroundColor: themeC.themeColor['bgc-primary'],
      ),
      body: Column(
        children: [
          Container(
            height: 46.0,
            color: themeC.themeColor['bgc-primary'],
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: const Row(
              children: [
                Expanded(
                  flex: 1,
                  child: Center(
                    child: Text(
                      '期号',
                      style: TextStyle(
                        fontSize: 14.0,
                      ),
                    ),
                  ),
                ),
                Expanded(
                  flex: 3,
                  child: Center(
                    child: Text(
                      '下注详情',
                      style: TextStyle(
                        fontSize: 14.0,
                      ),
                    ),
                  ),
                ),
                Expanded(
                  flex: 1,
                  child: Center(
                    child: Text(
                      '状态',
                      style: TextStyle(
                        fontSize: 14.0,
                      ),
                    ),
                  ),
                ),
                Expanded(
                  flex: 2,
                  child: Center(
                    child: Text(
                      '盈亏',
                      style: TextStyle(
                        fontSize: 14.0,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: ListView.builder(
              controller: _scrollController,
              shrinkWrap: true, // 防止与SingleChildScrollView冲突
              itemCount: pageData['dataList'].length + (_isLoading ? 1 : 0),
              itemBuilder: (BuildContext content, int index) {
                if (index < pageData['dataList'].length) {
                  var item = pageData['dataList'][index];
                  var betStr = getNum(item['buy_type'], item['buy_num']);
                  return Container(
                    margin: const EdgeInsets.symmetric(horizontal: 8.0),
                    padding: const EdgeInsets.symmetric(
                      vertical: 10.0,
                    ),
                    decoration: BoxDecoration(
                      border: Border(
                        bottom: BorderSide(
                          width: 1.0,
                          color: themeC.themeColor['bd-base']!,
                        ),
                      ),
                    ),
                    child: Row(
                      children: [
                        Expanded(
                          flex: 1,
                          child: Center(
                            child: Text(
                              '${item['code_sn']}',
                              style: TextStyle(
                                fontSize: 12.0,
                                color: themeC.themeColor['c-text-3'],
                              ),
                            ),
                          ),
                        ),
                        Expanded(
                          flex: 3,
                          child: Center(
                            child: RichText(
                              text: TextSpan(
                                  style: TextStyle(
                                    color: themeC.themeColor['c-text-2'],
                                  ),
                                  children: [
                                    TextSpan(
                                      text: '$betStr/',
                                      style: const TextStyle(
                                        fontSize: 10,
                                      ),
                                    ),
                                    TextSpan(
                                      text: '${item['buy_amount_one']}',
                                      style: TextStyle(
                                        color: themeC.themeColor['c-price'],
                                      ),
                                    ),
                                    const TextSpan(
                                      text: 'VND',
                                      style: TextStyle(
                                        fontSize: 12,
                                      ),
                                    ),
                                  ]),
                            ),
                          ),
                        ),
                        Expanded(
                          flex: 1,
                          child: Center(
                            child: Text(
                              getStatus(item['status']),
                              style: TextStyle(
                                color: item['status'] == 1 ? themeC.themeColor['c-fall'] : themeC.themeColor['c-rise'],
                              ),
                            ),
                          ),
                        ),
                        Expanded(
                          flex: 2,
                          child: Center(
                            child: Text(
                              '${getSign(item['status'])}${item['earn_lost']}',
                              style: TextStyle(
                                color: item['status'] == 1 ? themeC.themeColor['c-fall'] : themeC.themeColor['c-rise'],
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  );
                } else {
                  if (pageData['isNomore']) {
                    return const SizedBox();
                  } else {
                    return Padding(
                      padding: const EdgeInsets.symmetric(vertical: 16.0),
                      child: Center(
                        child: SizedBox(
                          width: 24,
                          height: 24,
                          child: CircularProgressIndicator(
                            color: Colors.grey.withOpacity(0.5),
                            strokeWidth: 3,
                          ),
                        ), // 加载指示器
                      ),
                    );
                  }
                }
              },
            ),
          ),
        ],
      ),
    );
  }
}

```

## 判断 web 平台引入 dart:html 包

```dart
import 'package:pc28/utils/file_to_base64.dart' if (dart.library.html) 'package:pc28/utils/file_to_base64_web.dart';
```

## 文字描边效果

```dart
Stack(
  children: <Widget>[
    // 文字描边
    Text(
      '文字描边',
      style: TextStyle(
        fontSize: 20,
        fontWeight: FontWeight.w700,
        foreground: Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 4
          ..color = Colors.white,
      ),
    ),
    // 实际文字
    Text(
      '文字描边',
      style: const TextStyle(
        fontSize: 20,
        fontWeight: FontWeight.w700,
        color: Color(0xff0080DD), // 或者你想要的文字颜色
      ),
    ),
  ],
)
```

## 弹窗里面有列表切换，有表单操作

```dart
void showBuy(BuildContext context) {
    showModalBottomSheet(
      isScrollControlled: true,
      isDismissible: true,
      elevation: 10.0,
      context: context,
      useSafeArea: true,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(0)),
      ),
      builder: (BuildContext context) {
        return StatefulBuilder(builder: (BuildContext context, StateSetter setState) {
          return SingleChildScrollView(
            child: LayoutBuilder(
              builder: (BuildContext context, BoxConstraints constraints) {
                double contentMaxWidth = constraints.maxWidth;
                return GestureDetector(
                  behavior: HitTestBehavior.translucent,
                  onTap: () {
                    FocusScope.of(context).requestFocus(FocusNode());
                  },
                  child: Container(
                    padding: const EdgeInsets.symmetric(vertical: 12.0, horizontal: 15.0),
                    child: Column(
                      children: [
                        Row(
                          children: [
                            Expanded(
                              flex: 1,
                              child: Center(
                                child: ElevatedButton(
                                  onPressed: () {
                                    setState(() {
                                      type = 'normal';
                                    });
                                  },
                                  style: ButtonStyle(
                                    backgroundColor: MaterialStatePropertyAll(type == 'normal' ? themeC.themeColor['c-second'] : themeC.themeColor['c-primary']),
                                    shape: MaterialStatePropertyAll(
                                      RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(4.0),
                                      ),
                                    ),
                                  ),
                                  child: Text(
                                    'ordinary'.tr,
                                    style: const TextStyle(fontSize: 16.0),
                                  ),
                                ),
                              ),
                            ),
                            Expanded(
                              flex: 1,
                              child: Center(
                                child: ElevatedButton(
                                  onPressed: () {
                                    setState(() {
                                      type = 'special';
                                    });
                                  },
                                  style: ButtonStyle(
                                    backgroundColor: MaterialStatePropertyAll(type == 'special' ? themeC.themeColor['c-second'] : themeC.themeColor['c-primary']),
                                    shape: MaterialStatePropertyAll(
                                      RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(4.0),
                                      ),
                                    ),
                                  ),
                                  child: Text(
                                    'special'.tr,
                                    style: const TextStyle(fontSize: 16.0),
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                        const Divider(
                          height: 14,
                          color: Colors.black26,
                        ),
                        Container(
                          constraints: const BoxConstraints(maxHeight: 200),
                          child: SingleChildScrollView(
                            physics: const AlwaysScrollableScrollPhysics(), // 允许内容滚动
                            child: Wrap(
                              spacing: 4,
                              runSpacing: 10,
                              children: type == 'normal'
                                  ? normalList.map((item) {
                                      int index = normalList.indexOf(item);
                                      return SizedBox(
                                        width: contentMaxWidth / 4 - 12,
                                        height: 28,
                                        child: Material(
                                          color: item['check'] ? themeC.themeColor['c-second'].withOpacity(0.8) : themeC.themeColor['bgc-primary'],
                                          borderRadius: BorderRadius.circular(4.0),
                                          child: InkWell(
                                            onTap: () {
                                              setState(() {
                                                normalList[index]['check'] = !normalList[index]['check'];
                                              });
                                            },
                                            child: PrizeItem(config: codeConfig, data: item),
                                          ),
                                        ),
                                      );
                                    }).toList()
                                  : specialList.map((item) {
                                      int index = specialList.indexOf(item);
                                      return SizedBox(
                                        width: contentMaxWidth / 4 - 12,
                                        height: 28,
                                        child: Material(
                                          color: item['check'] ? themeC.themeColor['c-second'].withOpacity(0.8) : themeC.themeColor['bgc-primary'],
                                          borderRadius: BorderRadius.circular(4.0),
                                          child: InkWell(
                                            onTap: () {
                                              setState(() {
                                                specialList[index]['check'] = !specialList[index]['check'];
                                              });
                                            },
                                            child: PrizeItem(config: codeConfig, data: item),
                                          ),
                                        ),
                                      );
                                    }).toList(),
                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 12, bottom: 12, left: 4, right: 4),
                          child: Wrap(
                            children: [
                              Container(
                                margin: const EdgeInsets.all(4),
                                height: 26,
                                decoration: BoxDecoration(
                                  border: Border.all(
                                    width: 1,
                                    color: themeC.themeColor['c-primary'],
                                  ),
                                  borderRadius: BorderRadius.circular(4),
                                ),
                                child: TextButton(
                                  onPressed: () {
                                    Get.toNamed('/rule');
                                  },
                                  child: Text('Rule_description'.tr),
                                ),
                              ),
                              Container(
                                margin: const EdgeInsets.all(4),
                                height: 26,
                                decoration: BoxDecoration(
                                  border: Border.all(
                                    width: 1,
                                    color: themeC.themeColor['c-primary'],
                                  ),
                                  borderRadius: BorderRadius.circular(4),
                                ),
                                child: TextButton(
                                  onPressed: () {
                                    rootC.changePageIndex(1);
                                    Get.toNamed('/root');
                                  },
                                  child: Text('Online_deposit'.tr),
                                ),
                              ),
                              Container(
                                margin: const EdgeInsets.all(4),
                                height: 26,
                                decoration: BoxDecoration(
                                  border: Border.all(
                                    width: 1,
                                    color: themeC.themeColor['c-primary'],
                                  ),
                                  borderRadius: BorderRadius.circular(4),
                                ),
                                child: TextButton(
                                  onPressed: () {
                                    Get.toNamed('/withdraw');
                                  },
                                  child: Text('Quick_cash_withdrawal'.tr),
                                ),
                              ),
                              Container(
                                margin: const EdgeInsets.all(4),
                                height: 26,
                                decoration: BoxDecoration(
                                  border: Border.all(
                                    width: 1,
                                    color: themeC.themeColor['c-primary'],
                                  ),
                                  borderRadius: BorderRadius.circular(4),
                                ),
                                child: TextButton(
                                  onPressed: () {
                                    Get.toNamed('/bill');
                                  },
                                  child: Text('Betting_records'.tr),
                                ),
                              ),
                            ],
                          ),
                        ),
                        Row(
                          children: [
                            Text('${'Buy_points'.tr}：'),
                            Expanded(
                              child: Container(
                                  height: 40.0,
                                  padding: const EdgeInsets.symmetric(horizontal: 6.0),
                                  child: MyTextfield(
                                    maxLength: 10,
                                    backgroundColor: Colors.white,
                                    keyboardType: ITextInputType.number,
                                    hintText: 'Please_enter_purchase_points'.tr,
                                    controlCallBack: (control) {
                                      numControl = control;
                                    },
                                    fieldCallBack: (val) {
                                      formData['buy_amount_one'] = val;
                                    },
                                  )),
                            ),
                            ElevatedButton(
                              onPressed: () {
                                buyOrder(context);
                              },
                              style: ButtonStyle(
                                backgroundColor: MaterialStatePropertyAll(themeC.themeColor['c-second']),
                                shape: MaterialStatePropertyAll(
                                  RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(4.0),
                                  ),
                                ),
                              ),
                              child: Text('Buy'.tr),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
          );
        });
      },
    );
  }
}
```

## 点击展开收缩图片旋转动画

```dart

bool _isExpanded = false;

TweenAnimationBuilder(
  duration: const Duration(milliseconds: 300),
  tween: Tween<double>(begin: _isExpanded ? -1 : 0.0, end: _isExpanded ? 1.0 : 0.0),
  builder: (context, double value, child) {
    return Transform.rotate(
      angle: value * -1.0 * 3.14,
      child: const MyImage(
        url: 'assets/images/icon_arrow_down.png',
        width: 18,
        height: 18,
      ),
    );
  },
)
```

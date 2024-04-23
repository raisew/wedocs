# flutter 常用代码片段

## 编写表格

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

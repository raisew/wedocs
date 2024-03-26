# Autocomplete 自动完成

在 `Flutter` 中，`Autocomplete`（自动完成）小部件可用于向用户提供输入建议并帮助他们快速选择适当的选项。`Autocomplete` 小部件由 `Autocomplete` 类和 `AutocompleteOptions` 类组成。以下是 `Autocomplete` 的详细说明：

## Autocomplete 类

`Autocomplete` 类是 `Autocomplete` 小部件的核心，用于包装输入字段并提供自动完成的功能。以下是 `Autocomplete` 类的一些主要属性和方法：

- **optionsBuilder**: 一个函数，用于生成与用户输入匹配的选项列表。它接受用户输入并返回与输入匹配的选项列表。
- **onSelected**: 一个回调函数，在用户选择一个选项时调用。您可以在此回调中执行适当的操作，例如更新输入字段的值。
- **optionsViewBuilder**: 一个函数，用于自定义显示自动完成选项的外观。您可以在此函数中定义自定义选项列表的外观。
- **fieldViewBuilder**: 一个函数，用于自定义输入字段的外观。您可以在此函数中定义输入字段的外观和行为。
- **displayStringForOption**: 一个可选的函数，用于自定义显示在自动完成选项列表中的每个选项的文本。

## AutocompleteOptions 类

`AutocompleteOptions` 类用于表示自动完成的选项。它包含两个主要属性：

- **value**: 选项的值，通常是一个字符串。
- **label**: 选项的标签，用于显示在自动完成列表中。

## 示例用法

以下是一个简单的示例，演示了如何在 `Flutter` 中使用 `Autocomplete` 小部件：

```dart
import 'package:flutter/material.dart';

class AutocompleteExample extends StatefulWidget {
  @override
  _AutocompleteExampleState createState() => _AutocompleteExampleState();
}

class _AutocompleteExampleState extends State<AutocompleteExample> {
  TextEditingController _textEditingController = TextEditingController();
  String _selectedOption = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Autocomplete Example'),
      ),
      body: Padding(
        padding: EdgeInsets.all(20.0),
        child: Column(
          children: [
            Autocomplete<String>(
              optionsBuilder: (TextEditingValue textEditingValue) {
                return ['Apple', 'Banana', 'Orange']
                    .where((String option) =>
                        option.toLowerCase().contains(textEditingValue.text.toLowerCase()))
                    .toList();
              },
              onSelected: (String selectedOption) {
                setState(() {
                  _selectedOption = selectedOption;
                });
              },
              fieldViewBuilder: (BuildContext context,
                  TextEditingController textEditingController,
                  FocusNode focusNode,
                  VoidCallback onFieldSubmitted) {
                _textEditingController = textEditingController;
                return TextField(
                  controller: textEditingController,
                  focusNode: focusNode,
                  onChanged: (String value) {
                    setState(() {});
                  },
                  decoration: InputDecoration(
                    hintText: 'Type a fruit',
                  ),
                );
              },
              optionsViewBuilder: (BuildContext context,
                  AutocompleteOnSelected<String> onSelected, Iterable<String> options) {
                return Align(
                  alignment: Alignment.topLeft,
                  child: Material(
                    elevation: 4.0,
                    child: Container(
                      color: Colors.white,
                      width: 200.0,
                      child: ListView.builder(
                        padding: EdgeInsets.zero,
                        shrinkWrap: true,
                        itemCount: options.length,
                        itemBuilder: (BuildContext context, int index) {
                          final String option = options.elementAt(index);
                          return ListTile(
                            title: Text(option),
                            onTap: () {
                              onSelected(option);
                            },
                          );
                        },
                      ),
                    ),
                  ),
                );
              },
            ),
            SizedBox(height: 20.0),
            Text('Selected Option: $_selectedOption'),
          ],
        ),
      ),
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: AutocompleteExample(),
  ));
}

```

此示例创建了一个简单的自动完成小部件，其中用户可以键入水果名称。根据用户的输入，它会显示相匹配的选项列表。选项列表是从预定义的水果列表中生成的。当用户选择一个选项时，所选选项的值将显示在页面上。

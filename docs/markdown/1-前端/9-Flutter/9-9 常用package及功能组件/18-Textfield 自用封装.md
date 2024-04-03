# Textfield 自用封装

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:flutter/services.dart';
import '../themes/themes_controller.dart';

ThemeController themeC = Get.put(ThemeController());

///自带删除键的MyTextfield
typedef ITextFieldCallBack = void Function(String content);

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
  })  : assert(maxLines == null || maxLines > 0),
        assert(maxLength == null || maxLength > 0),
        keyboardType = maxLines == 1 ? keyboardType : ITextInputType.multiline,
        super(key: key);

  @override
  State<MyTextfield> createState() => _MyTextfieldState();
}

class _MyTextfieldState extends State<MyTextfield> {
  String _inputText = "";
  bool _hasDeleteIcon = false;
  bool _hasFocus = false;
  bool _isNumber = false;
  bool _isPassword = false;

  ///输入类型
  TextInputType? _getTextInputType() {
    switch (widget.keyboardType) {
      case ITextInputType.text:
        return TextInputType.text;
      case ITextInputType.multiline:
        return TextInputType.multiline;
      case ITextInputType.number:
        _isNumber = true;
        return TextInputType.number;
      case ITextInputType.phone:
        _isNumber = true;
        return TextInputType.phone;
      case ITextInputType.datetime:
        return TextInputType.datetime;
      case ITextInputType.emailAddress:
        return TextInputType.emailAddress;
      case ITextInputType.url:
        return TextInputType.url;
      case ITextInputType.password:
        _isPassword = true;
        return TextInputType.text;
      default:
        return null;
    }
  }

  ///输入框焦点控制
  // final FocusNode _focusNode = FocusNode();

  @override
  void initState() {
    super.initState();
    // _focusNode.addListener(_focusNodeListener);
  }

  // Future<void> _focusNodeListener() async {
  //   if (_focusNode.hasFocus) {
  //     setState(() {
  //       _hasFocus = false;
  //     });
  //   } else {
  //     setState(() {
  //       _hasFocus = true;
  //     });
  //   }
  // }

  ///输入范围
  List<TextInputFormatter>? _getTextInputFormatter() {
    return _isNumber
        ? <TextInputFormatter>[
            FilteringTextInputFormatter.digitsOnly,
          ]
        : null;
  }

  @override
  Widget build(BuildContext context) {
    TextEditingController controller = TextEditingController.fromValue(TextEditingValue(
        text: _inputText,
        selection: TextSelection.fromPosition(TextPosition(
          affinity: TextAffinity.downstream,
          offset: _inputText.length,
        ))));
    TextField textField = TextField(
      // focusNode: _focusNode,
      controller: controller,
      autofocus: false,
      decoration: InputDecoration(
        hintStyle: widget.hintStyle,
        counterStyle: const TextStyle(color: Colors.white),
        labelText: widget.labelText,
        hintText: widget.hintText,
        prefixText: widget.prefixText,
        prefixStyle: const TextStyle(
          fontSize: 16.0,
        ),
        border: widget.inputBorder ??
            const OutlineInputBorder(
              borderRadius: BorderRadius.all(Radius.circular(10.0)),
              borderSide: BorderSide(
                width: 1.0,
              ),
            ),
        enabledBorder: const OutlineInputBorder(
          borderRadius: BorderRadius.all(Radius.circular(10.0)),
          borderSide: BorderSide(
            color: Colors.black12,
            width: 1,
          ),
        ),
        focusedBorder: const OutlineInputBorder(
          borderSide: BorderSide(
            color: Color.fromRGBO(244, 142, 85, 1),
            width: 2,
          ),
          borderRadius: BorderRadius.all(Radius.circular(10.0)),
        ),
        fillColor: widget.backgroundColor ?? Colors.transparent,
        filled: true,
        prefixIcon: widget.prefixIcon,
        suffixIcon: _hasDeleteIcon && _hasFocus
            ? SizedBox(
                width: 20.0,
                height: 20.0,
                child: IconButton(
                  alignment: Alignment.center,
                  padding: const EdgeInsets.all(0.0),
                  iconSize: 18.0,
                  icon: widget.deleteIcon ?? const Icon(Icons.cancel),
                  onPressed: () {
                    setState(() {
                      _inputText = "";
                      _hasDeleteIcon = _inputText.isNotEmpty;
                      widget.fieldCallBack!(_inputText);
                    });
                  },
                ),
              )
            : const Text(""),
      ),
      onChanged: (str) {
        setState(() {
          _inputText = str;
          _hasDeleteIcon = _inputText.isNotEmpty;
          widget.fieldCallBack!(_inputText);
        });
      },
      onSubmitted: (str) {
        _inputText = str;
        widget.fieldCallBack!(_inputText);
        setState(() {
          _hasFocus = false;
        });
      },
      keyboardType: _getTextInputType(),
      maxLength: widget.maxLength,
      maxLines: widget.maxLines,
      style: widget.textStyle,
      obscureText: _isPassword,
      inputFormatters: _getTextInputFormatter(),
    );
    return textField;
  }
}

```

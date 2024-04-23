# Textfield 自用封装

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:flutter/services.dart';
import '../themes/themes_controller.dart';

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
  final double? paddingVetical;

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
  bool _hasFocus = false;
  bool _isNumber = false;
  bool _isPassword = false;
  bool _obscureText = true;

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
  final FocusNode _focusNode = FocusNode();

  double _contentPaddingVertical = 0.0;

  @override
  void initState() {
    super.initState();
    setState(() {
      _contentPaddingVertical = widget.paddingVetical ?? 10.0;
    });
    _focusNode.addListener(() {
      if (!_focusNode.hasFocus) {
        // 处理失去焦点的逻辑
        setState(() {
          _hasFocus = false;
        });
      } else {
        setState(() {
          _hasFocus = true;
        });
      }
    });
  }

  @override
  void dispose() {
    _focusNode.dispose();
    super.dispose();
  }

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
    TextEditingController controller = TextEditingController.fromValue(
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
    TextField textField = TextField(
      focusNode: _focusNode,
      controller: controller,
      onEditingComplete: () {
        FocusScope.of(context).requestFocus(_focusNode);
      },
      autofocus: false,
      textAlignVertical: TextAlignVertical.center,
      decoration: InputDecoration(
        contentPadding: EdgeInsets.symmetric(horizontal: 10.0, vertical: _contentPaddingVertical),
        hintStyle: widget.hintStyle ?? TextStyle(color: themeC.themeColor['c-text-5']),
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
            color: Color(0xfff3f3f3),
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
            _hasDeleteIcon && _hasFocus
                ? IconButton(
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
                  )
                : const SizedBox(
                    width: 0,
                  ),
            _isPassword
                ? IconButton(
                    icon: Icon(_obscureText ? Icons.visibility : Icons.visibility_off),
                    padding: const EdgeInsets.all(0.0),
                    iconSize: 22.0,
                    onPressed: () {
                      setState(() {
                        _obscureText = !_obscureText;
                      });
                    },
                  )
                : const SizedBox(
                    width: 0,
                  ),
          ],
        ),
      ),
      onChanged: (str) {
        setState(() {
          _inputText = str;
          _hasDeleteIcon = _inputText.isNotEmpty;
          setState(() {
            _hasFocus = true;
          });
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
      obscureText: _isPassword && _obscureText,
      inputFormatters: _getTextInputFormatter(),
    );
    return textField;
  }
}

```

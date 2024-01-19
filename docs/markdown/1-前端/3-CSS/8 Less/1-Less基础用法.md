# Less 基础用法

`Less` 是一种动态样式语言，它在 `CSS` 的基础上扩展了混合、嵌套、变量等实用功能。 `Less` 也是一种 `CSS` 预处理语言， `less` 文件在经过 `less.js` 处理后，最终会生成 `.css` 文件

## 1. 安装 Less

使用 `npm` 或者 `yarn` 全局安装 `Less`

::: code-group

```sh [npm]
npm install less -g
```

```sh [yarn]
yarn add less global
```

:::

使用以下命令将 `style.less` 文件编译为 `style.css`

```sh
lessc style.less style.css
```

## 2. 基础功能

### 1. 嵌套

`Less` 支持在选择器中定义选择器，代码如下：

```less
.root {
  color: black;
  #container {
    font-size: 12px;
    .list {
      background-color: red;
    }
  }
}

// compile
.root {
  color: black;
}
.root #container {
  font-size: 12px;
}
.root #container .list {
  background-color: red;
}
```

> 注意：在 `Lynx` 中使用 `Less` 时，`Lynx2.8` 版本前仅支持两层选择器嵌套，`2.8` 版本及之后支持多层选择器嵌套。

### 2. 运算

`Less` 支持在定义属性或变量的值时进行加减乘除运算，代码如下：

```less
.container {
  background-color: (#ffffff / 16);
  width: 10px + 10%;
  height: 2cm * 3mm; // 乘除运算单位冲突时，优先使用第一个运算数的单位
}

// compile
.container {
  background-color: #101010;
  width: 20px;
  height: 6cm;
}
```

### 3. 函数

`Less` 提供了功能丰富的函数，如：字符串处理、列表操作、逻辑判断、数学运算、颜色调整、类型判断等，代码如下：

```less
.container {
  color: if((iscolor(red)), red, black);
}

// compile
.container {
  color: red;
}
```

### 4. 引用

通过 `“&”` 可以获取父选择器名称的引用，代码如下：

```less
.container {
  background-color: black;
  .list {
    color: red;
    &-item {
      font-size: 2rem;
    }
  }
}

// compile
.container {
  background-color: black;
}
.container .list {
  color: red;
}
.container .list-item {
  font-size: 2rem;
}
```

> 注意：`“&”` 获取的父选择器名称为全部层级的父选择器名称。

#### 嵌套反转

通过使用 `“&”` ，可以为父选择器指定父选择器，改变嵌套关系，代码如下：

```less
.container {
  background-color: black;
  .list {
    color: red;
    .root & {
      font-size: 2rem;
    }
  }
}

// compile
.container {
  background-color: black;
}
.container .list {
  color: red;
}
.root .container .list {
  font-size: 2rem;
}
```

#### 选择器列表的引用

当一个选择器某一层级的父选择器为列表形式时，调用 `“&”` 获取父选择器，会遍历获取列表中的每一个选择器，代码如下：

```less
.a,
.b,
.c {
  color: red;
  & & {
    color: blue;
  }
}

// compile
.a,
.b,
.c {
  color: red;
}
.a .a,
.a .b,
.a .c,
.b .a,
.b .b,
.b .c,
.c .a,
.c .b,
.c .c {
  color: blue;
}
```

### 5. 导入

通过 `“@import”` 导入 `.less` 文件和 `.css` 文件，被导入文件中所有的变量和选择器都可以被使用，代码如下：

```less
// 导入.less文件
@import "library";
// 导入.css文件
@import "typo.css";
```

# 高级功能

## 3. 变量

### 1. 变量的定义

通过 `“@”` 定义一个变量，变量的名称与变量的值通过 `“:”` 分隔，代码如下：

```less
// 定义属性值
@container-color: #428bca;

// 定义属性名称
@bg: background-color;

// 定义选择器
@my-video: container;
// 扩展：Less3.5版本之前写法，当前不推荐
@my-video: ~"container"; // 定义字符串

@images: "../img";
```

### 2. 变量的使用

在属性值中使用变量，代码如下：

```less
@container-color: #428bca;

.container {
  background-color: @container-color;
}

// compile
.container {
  background-color: #428bca;
}
```

在属性名称中使用变量，代码如下：

```less
@bg: background-color;

.container {
  @{bg}: #428bca;
}

// compile
.container {
  background-color: #428bca;
}
```

在选择器名称中使用变量，代码如下：

```less
@my-video: container;

.@{my-video} {
  background-color: #428bca;
}

// compile
.container {
  background-color: #428bca;
}
```

在字符串中使用变量，代码如下：

```less
@images: "../img";

.container {
  background: url("@{images}/test.png");
}

//compile
.container {
  background: url("../img/test.png");
}
```

### 3. 变量的引用

变量引用类似于替换，有两种形式，代码如下：

```less
@primary: green;

.container {
  @color: primary;

  background-color: @@color;
}

.container {
  @color: @primary;

  background-color: @color;
}

// compile
.container {
  background-color: green;
}
```

### 4. 变量的懒加载

在变量定义前先使用，在需要的时候再对变量定义，代码如下：

```less
.container {
  background-color: @var;
}
@var: @bg;
@bg: blue;

// compile
.container {
  background-color: blue;
}
```

### 5. 变量的作用域

当变量使用时，优先在当前选择器内查找。如果找不到，则在当前选择器的父选择器中查找。若父选择器中也查找不到，则在父选择器的父选择器中查找，以此类推。

当同一作用域内出现同名变量时，后定义变量的值会覆盖先定义变量的值。代码如下：

```less
@bg: green;
.container {
  @bg: blue;
  .list {
    @bg: red;
    background-color: @bg;
    @bg: white;
  }
  background-color: @bg;
}

// compile
.container {
  background-color: blue;
}
.container .list {
  background-color: white;
}
```

### 6. 属性引用

通过 `“$”` 引用属性的值，代码如下：

```less
.container {
  color: #efefef;
  background-color: $color;
}

// compile
.container {
  color: #efefef;
  background-color: #efefef;
}
```

## 4. 混合

混合是指通过选择器之间的调用，使一个选择器包含另一个选择器的属性，以此可以实现属性的分组与复用。

在 `Less` 中，被调用的选择器称为 `Mixin` (混合)。

### 1. 混合的调用

目前在 `Less` 中，混合支持类选择器和 `Id` 选择器，如下所示：

```less
.bg {
  background-color: red;
}
#text {
  color: blue;
}
.container {
  #text();
  .bg();
}

// compile
.bg {
  background-color: red;
}
#text {
  color: blue;
}
.container {
  color: blue;
  background-color: red;
}

// 扩展：老版本调用方式，当前不推荐
.container {
  #text;
  .bg;
}
.container {
  #text ();
  .bg ();
}
```

### 2. 括号选择器与命名空间

括号选择器是指名称中带有括号的选择器。当不希望某个选择器出现在生成的 `.css` 文件中，可以在定义这个选择器时在名称后加上 `“()”` ，代码如下：

```less
.bg() {
  background-color: red;
}
.container {
  .bg();
}

// compile
.container {
  background-color: red;
}
```

当括号选择器中定义了其他的选择器时，这时的括号选择器称为命名空间，代码如下：

```less
#color() {
  .bg {
    background-color: red;
  }
}

.container {
  #color.bg();
}

// compile
.container {
  background-color: red;
}

//扩展：老版本调用方式，当前不推荐
.container {
  #color > .bg();
}
.container {
  #color .bg();
}
```

### 3. 括号选择器的参数

通过 `“@”` 可以在括号选择器的括号中定义参数，代码如下：

```less
.colors(@color) {
  background-color: @color;
  color: @color;
}
.container {
  .colors(red);
}

// compile
.container {
  background-color: red;
  color: red;
}
```

### 4. 括号选择器的参数调用

括号选择器共有三种调用方式：显示调用、隐式调用、显隐式结合调用，代码如下：

```less
.colors(@text, @bg) {
  background-color: @bg;
  color: @text;
}
// 显式
.container {
  .colors(@text: red, @bg: blue);
}
// 隐式
.container {
  .colors(red, blue);
}
// 显式 + 隐式
.container {
  .colors(@bg: blue, red);
}

// compile
.container {
  background-color: blue;
  color: red;
}
```

### 5. 括号选择器的参数类型

括号选择器中的参数支持两种形式：一种是单参数，一种是列表参数。单参数可以理解为列表中只有一个元素的列表参数，二者分隔规则如下：

- 单参数之间使用 `,` 分隔，单参数与列表参数之间使用 `;` 分隔。
- 列表参数以 `;` 结尾，列表参数内部元素之间使用 `,` 分隔。

参考代码如下：

```less
// 两个参数：单参数red，列表参数1,2,3
.selector(1,2,3; red)

// 两个参数：列表参数red，列表参数1,2,3
.selector(red; 1,2,3;)
.selector(1,2,3; red;)

// 三个参数：单参数1，单参数2，单参数3
.selector(1,2,3)

// 一个参数：列表参数1,2,3
.selector(1,2,3;)

// 显示调用时，参数分割规则仍适用
.selector(@single: red; @list: 1,2,3;);
```

### 6. 括号选择器的参数默认值

括号选择器中的参数可以指定默认值，代码如下：

```less
.colors(@text: red, @bg: blue) {
  background-color: @bg;
  color: @text;
}
.container1 {
  .colors();
}
.container2 {
  .colors(@bg: green);
}

// compile
.container1 {
  background-color: blue;
  color: red;
}
.container2 {
  background-color: green;
  color: red;
}
```

### 7. 括号选择器的重载

`Less` 中支持多个名字相同且参数也相同的括号选择器。当一个选择器被调用时，其他重载且参数匹配的括号选择器也会被调用，代码如下：

```less
.colors(@text: red, @bg: blue) {
  background-color-1: @bg;
  color-1: @text;
}

.colors(@text, @bg: blue) {
  background-color-2: @bg;
  color-2: @text;
}

.colors(@text, @bg) {
  background-color-3: @bg;
  color-3: @text;
}

.colors(@text) {
  color-4: @text;
}

.container1 {
  .colors(green);
}

//compile
.container1 {
  background-color-1: blue;
  color-1: green;
  background-color-2: blue;
  color-2: green;
  color-4: green;
}
```

### 8. 括号选择器的固定参数

当括号选择器中的参数没有使用 `@` 定义，那么这个参数会变成固定参数。这种括号选择器在使用时，固定参数的名称和位置都不能变，代码如下：

```less
.colors(dark, @color, @bg) {
  color: darken(@color, 10%);
  background-color: darken(@bg, 10%);
}

.colors(light, @color, @bg) {
  color: lighten(@color, 10%);
  background-color: lighten(@bg, 10%);
}

@switch: dark;

.container {
  .colors(@switch, @bg:#888, @color:#888);
}

// compile
.container {
  color: #6f6f6f;
  background-color: #6f6f6f;
}
```

### 9. 括号选择器的全参数获取

通过 `@arguments` 可以获取括号选择器中的全部参数，代码如下：

```less
.margins(@top, @right, @bottom, @left) {
  margin: @arguments;
  padding: @arguments;
}

.container {
  .margins(10%, 10%, 10%, 10%);
}

// compile
.container {
  margin: 10% 10% 10% 10%;
  padding: 10% 10% 10% 10%;
}
```

### 10. 括号选择器的剩余参数分配

在定义括号选择器的参数时，当在参数名称后加上 `…` 时，这个参数会接收到剩余的所有参数。名称带有 `…` 的参数必须置于所有参数的最后，代码如下：

### 11. 括号选择器的变量(属性)查找

通过 `@` 可以在括号选择器中定义变量(或直接在括号选择器中定义属性)，通过 `[]` 获取变量(属性)的值。这种括号选择器可以作为函数来处理逻辑，代码如下：

```less
// 变量
.avg1(@x, @y) {
  @result: ((@x + @y) / 2);
}
.container1 {
  margin-top: .avg1(10%, 50px) [ @result];
}

// 属性
.avg2(@x, @y) {
  result: ((@x + @y) / 2);
}
.container2 {
  margin-top: .avg2(10%, 50px) [result];
}

// compile
.container1 {
  margin-top: 30%;
}
.container2 {
  margin-top: 30%;
}
```

### 12. 括号选择器的获取默认值

当通过 `[]` 获取括号选择器变量(属性)的值，而在 `[]` 内并没有指定变量(属性)的名称。这时括号选择器内所有的变量(属性)都会被计算，最后定义的变量(属性)会被输出，代码如下：

```less
// 变量
.avg1(@x, @y) {
  @result: ((@x + @y) / 2);
  @default: @result - 100px;
}

.container1 {
  margin-right: .avg1(10px, 50px) [ @result];
  margin-top: .avg1(10px, 50px) [];
  margin-left: .avg1(10px, 50px) [ @default];
}

// 属性
.avg2(@x, @y) {
  result: ((@x + @y) / 2);
  default: $result - 100px; // 注意属性引用的写法
}

.container2 {
  margin-right: .avg2(10px, 50px) [result];
  margin-top: .avg2(10px, 50px) [];
  margin-left: .avg2(10px, 50px) [default];
}

// compile
.container1 {
  margin-right: 30px;
  margin-top: -70px;
  margin-left: -70px;
}
.container2 {
  margin-right: 30px;
  margin-top: -70px;
  margin-left: -70px;
}
```

### 13. 括号选择器的变量引入

在选择器中调用一个括号选择器，会引入该括号选择器中定义的变量和选择器，代码如下：

```less
.colors() {
  @bg: red;
  .text() {
    color: green;
  }
}

.container {
  background-color: @bg;
  .colors();
  .text();
}

// compile
.container {
  background-color: red;
  color: green;
}
```

当在选择器中调用括号选择器，如果选择器中定义的变量与括号选择器中定义的变量发生冲突，括号选择器中的变量会被覆盖，代码如下：

```less
.colors() {
  @bg: red;
  @text: green;
}

.container {
  @bg: black;
  .colors();
  background-color: @bg;
  color: @text;
  @text: white;
}

// compile
.container {
  background-color: black;
  color: white;
}
```

当在选择器中调用多个括号选择器，如果后调用的括号选择器中定义的变量与已调用的括号选择器中定义的变量发生相同，则后调用的括号选择器中冲突的变量不会被引入，代码如下：

```less
.colors1() {
  @text: green;
}

.colors2() {
  @text: red;
}

.container {
  .colors1();
  .colors2();
  color: @text;
}

// compile
.container {
  color: green;
}
```

为了防止括号选择器中的变量被修改，可以将属性定义成参数，代码如下：

```less
.colors(@color) {
  .bg() {
    background-color: @color;
  }
}

.container {
  @color: black;
  .colors(red);
  .bg();
  @color: white;
}

// compile
.container {
  background-color: red;
}
```

### 14. 括号选择器的别名

通过变量引用，可以对括号选择器中的变量和选择器进行重命名，代码如下：

```less
#lib() {
  .main() {
    .colors() {
      bg: red;
      @text: blue;
    }

    .margins() {
      margin: 10% 10% 10% 10%;
    }
  }
}

.container {
  @color: #lib.main.colors();
  background-color: @color[bg]; // 引用指定属性
  color: @color[@text]; // 引用指定变量

  @mg: #lib.main.margins(); // 注意结尾处的括号
  @mg();
}

// compile
.container {
  background-color: red;
  color: blue;
  margin: 10% 10% 10% 10%;
}
```

### 15. 括号选择器的覆盖

当导入文件中的括号选择器与被导入文件中的括号选择器相同(名称、结构)时，后定义的括号选择器会覆盖先定义的括号选择器，代码如下：

```less
// library.less
#colors() {
  @bg: red;
}

// main.less
@import "library";
#colors() {
  @bg: blue;
}

.container {
  background-color: #colors[ @bg];
}

// compile
.container {
  background-color: blue;
}
```

### 16. 括号选择器的调用保护

括号选择器中定义的变量支持在调用保护中使用，代码如下：

```less
.max(@a; @b) when (@a >= @b) {
  width: @a;
}
.max(@a; @b) when (@a < @b) {
  width: @b;
}

.container {
  .max(10, 20);
}

// compile
.container {
  width: 20;
}
```

通过调用保护，可以实现括号选择器的递归调用，代码如下：

```less
.create(@count) when (@count > 0) {
  .container-@{count} {
    width: @count * 100px;
  }
  .create((@count - 1));
}

.create(5);

// compile
.container-5 {
  width: 500px;
}
.container-4 {
  width: 400px;
}
.container-3 {
  width: 300px;
}
.container-2 {
  width: 200px;
}
.container-1 {
  width: 100px;
}
```

## 5. 合并

当在一个选择器中调用另一个选择器，如果两个选择器中存在相同属性时，默认两个相同的属性都会保留，代码如下：

```less
#colors() {
  color: red;
}

.container {
  #colors();
  color: black;
}

// compile
.container {
  color: red;
  color: black;
}
```

### 1. 逗号合并

当在两个相同属性后添加 `+` 后，两个属性在合并后会以逗号间隔进行合并，代码如下：

```less
.shadow() {
  box-shadow+: inset 0 0 10px #555;
}
.container {
  .shadow();
  box-shadow+: 0 0 20px black;
}

// compile
.container {
  box-shadow: inset 0 0 10px #555, 0 0 20px black;
}
```

### 2. 空格合并

当在两个相同属性后添加`+_`后，两个属性在合并后会以空格间隔进行合并，代码如下：

```less
.scales() {
  transform+_: scale(2);
}
.container {
  .scales();
  transform+_: rotate(15deg);
}

// compile
.container {
  transform: scale(2) rotate(15deg);
}
```

### 3. 合并冲突

当在两个相同属性，一个属性后添加 `+_` ，另一个属性后添加 `+` 。这时两个属性在进行合并时，以最后定义的属性为主，代码如下：

```less
.scales() {
  transform+: scale(2);
}
.container1 {
  .scales();
  transform+_: rotate(15deg);
}

.container2 {
  transform+_: rotate(15deg);
  .scales();
}

// compile
.container1 {
  transform: scale(2) rotate(15deg);
}
.container2 {
  transform: rotate(15deg), scale(2);
}
```

## 6. 规则集

规则集与变量类似，都是通过 `@` 定义名称，名称与值通过 `:` 分隔。不同的是，变量的值是一个值，而规则集的值是一个集合，可以包括属性、变量、选择器、规则集等。

### 1. 规则集的定义

通过 `@` 定义一个规则集，规则集的名称与变量的值通过 `:` 分隔，规则集的值全部放在 `{}` 中，代码如下：

```less
@colors: {
  background-color: red;
  color: blue;
};
```

### 2. 规则集的调用

在选择器中通过调用规则集的名称加 `()` ，可以引入规则集。

对于规则集中定义的属性和非括号选择器，调用规则集后会加入到选择器中，代码如下：

```less
@colors: {
  background-color: red;
  color: blue;
  .bg {
    color: green;
  }
};

.container {
  @colors();
  font-size: 15px;
}

// compile
.container {
  background-color: red;
  color: blue;
  font-size: 15px;
}
.container .bg {
  color: green;
}
```

对于规则集中定义的括号选择器，需要二次调用，才能将属性加入到选择器中，代码如下：

```less
@colors: {
  .bg() {
    color: green;
  }
};

.container {
  @colors();
  .bg();
}

// compile
.container {
  color: green;
}
```

### 3. 规则集的变量

规则集中定义的变量是规则集私有的，即在规则集外部无法使用规则集中定义的变量，代码如下：

```less
@colors: {
  @text: green;
  .bg() {
    color: @text;
  }
};

.container {
  @colors();
  // color: @text;会编译错误
  .bg();
}

// compile
.container {
  color: green;
}
```

### 4. 规则集的作用域

规则集的作用域是指规则集可以调用变量和括号选择器的范围。规则集的作用域分为三种：内部作用域、定义作用域、调用作用域。

内部作用域就是规则集所在 `{}` 的内部范围，定义作用域是定义规则集所在的 `{}` 的范围，调用作用域是调用规则集时所在的 `{}` 的范围。

#### 4.1 规则集作用域的优先级

当规则集中使用的变量和括号选择器在作用域中出现多个相同定义时，变量使用的优先级为：内部作用域 > 定义作用域 > 调用作用域。代码如下：

```less
#bg() {
  // 定义作用域
  @text: red;
  @colors1: {
    // 内部作用域
    @text: green;
    color: @text;
  };

  @colors2: {
    color: @text;
  };
}

@colors3: {
  color: @text;
};

.container1 {
  #bg();
  @colors1();
}
.container2 {
  #bg();
  @colors2();
}
.container3 {
  @colors3();
  // 调用作用域
  @text: blue;
}

// compile
.container1 {
  color: green;
}
.container2 {
  color: red;
}
.container3 {
  color: blue;
}
```

#### 4.2 规则集的引用

规则集的引用不会改变规则集的作用范围，代码如下：

```less
@rules: {
  color: @text;
};

.colors() {
  .bg() {
    @rules1: @rules;
  }
  @text: red;
}
.container {
  .colors.bg();
  @rules1();
}

// compile
Error at Ln 2, Col 9:
variable @text is undefined

```

如果选择器中引入了其他的属性，则在调用规则集时，这些属性会作为调用作用域的一部分，可以被规则集调用，代码如下：

```less
@rules: {
  color: @text;
};

.colors() {
  .bg() {
    @rules1: @rules;
  }
  @text: red;
}
.container {
  .colors();
  .colors.bg();
  @rules1();
}

// compile
.container {
  color: red;
}
```

### 5. 规则集的变量(属性)查找

通过使用 `[]` 可以获取规则集中指定的变量(属性)，代码如下：

```less
@colors: {
  @bg: red;
  color: green;
};

.container {
  background-color: @colors[@bg];
  @colors [color];
}

// compile
.container {
  background-color: red;
  color: green;
}
```

规则集支持变量(属性)的多级查找，代码如下：

```less
@colors: {
  @light: {
    color: white;
  };
  @dark: {
    color: black;
  };
};

.container {
  background-color: @colors[@light][color];
}

// compile
.container {
  background-color: white;
}
```

## 7. 调用保护

调用保护是指在调用一个选择器时需要满足的规则和条件，只有当选择器满足条件时调用才会生效。调用保护是 `Less` 提供的一种语法糖，在设计上参考了 `CSS` 的 `@media`，以此来保持语法上的兼容。

### 1. 调用保护的定义

在选择器名称后，通过 `when` 在 `()` 中定义选择器的调用保护，代码如下：

```less
.container when(@is-root = true) {
  color: red;
}

@is-root: true;

// compile
.container {
  color: red;
}
```

### 2. 匿名调用保护

通过 `&` 与 `when` 实现匿名调用保护，可用于选择器的分组管理，代码如下：

```less
& when(@use-color = true) {
  .container1 {
    color: red;
  }
  .container2 {
    color: green;
  }
}

@use-color: true;

// compile
.container1 {
  color: red;
}
.container2 {
  color: green;
}
```

使用 `if` 函数也可以实现相同的效果，代码如下：

```less
@colors: if(
  @use-color = true, {
    .container1 {
      color: red;
    }
    .container2 {
      color: green;
    }
  }
);

@use-color: true;

@colors();

// compile
.container1 {
  color: red;
}
.container2 {
  color: green;
}

```

### 3. 调用保护的判断逻辑

调用保护支持大于`>`、大于等于`>=`、等于`=`、小于等于`=<`、小于`<`五种判断逻辑，代码如下：

```less
.container when(@value >= 1) {
  color: red;
}

@value: 2;

// compile
.container {
  color: red;
}
```

### 4. 调用保护的运算逻辑

调用保护支持与、或、非三种运算逻辑。

#### 4.1 与逻辑

通过`and`实现与逻辑，代码如下：

```less
.container when(@value1 >= 1) and (@value2 < 0) {
  color: red;
}

@value1: 2;
@value2: -1;

// compile
.container {
  color: red;
}
```

#### 4.2 或逻辑

通过 `,` 实现或逻辑，代码如下：

```less
.container when(@value1 >= 1), (@value2 < 0) {
  color: red;
}

@value1: 2;
@value2: 0;

// compile
.container {
  color: red;
}
```

#### 4.3 非逻辑

通过`not`实现非逻辑，代码如下：

```less
.container when not(@value >= 1) {
  color: red;
}

@value: 0;

// compile
.container {
  color: red;
}
```

## 8. 继承

继承是指一个选择器继承另一个选择器的属性，实现的效果与混合相同，但不会给选择器引入额外的属性。通过使用伪类`extend`实现选择器之间的继承。

### 1. 继承的定义形式

继承有两种定义形式，一种是外部定义，即定义在选择器的后面，另一种是内部定义，定义到选择器的`{}`里面。

#### 1.1 继承的外部定义

```less
.containerA:extend(.containerB) {
  background: blue;
}
.containerB {
  color: red;
}

// compile
.containerA {
  background: blue;
}
.containerB,
.containerA {
  color: red;
}
```

#### 1.2 继承的内部定义

```less
.containerA {
  &:extend(.containerB);
  background: blue;
}
.containerB {
  color: red;
}

// compile
.containerA {
  background: blue;
}
.containerB,
.containerA {
  color: red;
}
```

### 2. 多继承的写法

在 `Less` 中继承支持多继承。多继承共有三种写法：第一种是在同一个 `extend` 中实现多继承，第二种是分别多次调用 `extend` 实现多继承，第三种是连续多次调用 `extend` 实现多继承。

#### 2.1 同一个 `extend` 中实现多继承

这种写法同时支持内部定义与外部定义，代码如下：

```less
.containerA {
  &:extend(.containerB,
  .containerC);
  background: blue;
}
.containerB {
  color: red;
}

.containerC {
  width: 100px;
}

// compile
.containerA {
  background: blue;
}
.containerB,
.containerA {
  color: red;
}
.containerC,
.containerA {
  width: 100px;
}
```

#### 2.2 分别多次调用 `extend` 实现多继承

这种写法仅支持内部定义，代码如下：

```less
.containerA {
  &:extend(.containerB);
  &:extend(.containerC);
  background: blue;
}
.containerB {
  color: red;
}

.containerC {
  width: 100px;
}

// compile
.containerA {
  background: blue;
}
.containerB,
.containerA {
  color: red;
}
.containerC,
.containerA {
  width: 100px;
}
```

#### 2.3 连续多次调用 `extend` 实现多继承

这种写法仅支持外部定义，代码如下：

```less
.containerA:extend(.containerB):extend(.containerC) {
  background: blue;
}
.containerB {
  color: red;
}

.containerC {
  width: 100px;
}

// compile
.containerA {
  background: blue;
}
.containerB,
.containerA {
  color: red;
}
.containerC,
.containerA {
  width: 100px;
}
```

### 3. 继承的匹配机制

继承关注选择器最终在 `.css` 文件中的名称。当被继承的选择器名称无法找到时，相当于被继承的选择器不存在，代码如下：

```less
.containerA:extend(.containerB) {
  background: blue;
}

// compile
.containerA {
  background: blue;
}
```

参与继承的选择器( `extend` 前后的选择器)的名称中不能存在变量，变量会被继承忽略，代码如下：

```less
.colors {
  color: red;
}

@selector1: .colors;
@selector2: .container;

.container:extend(@{selector1}) {
}
@{selector2}:extend(.colors) {
}

// compile
.colors {
  color: red;
}
```

`extend` 必须排在选择器的最后面，代码如下：

```less
.containerA:extend(.containerB):hover {
  background: blue;
}

// compile
Error at Ln 1, Col 38:
Extend can only be used at the end of selector

```

### 4. 嵌套选择器的继承

当被继承的选择器为嵌套选择器时，选择器的名称必须为在 `.css` 文件中最终生成的名称，代码如下：

```less
.containerA {
  .containerB {
    color: blue;
  }
}
.containerC:extend(.containerA .containerB) {
}

// compile
.containerA .containerB,
.containerC {
  color: blue;
}
```

### 5. 匹配继承

当选择器 A 继承选择器 B 时，通过选择器 B 后加入 `all` ，选择器 A 可以继承所有名字中带有选择器 B 名称的选择器，这些选择器的名称中与选择器 B 名称相同的部分，会被替换成选择器 A 的名称，代码如下：

```less
.color {
  color: red;
}
.a.color {
  color: green;
}
.color .b {
  color: blue;
}

.container:extend(.color all) {
}

// compile
.color,
.container {
  color: red;
}
.a.color,
.a.container {
  color: green;
}
.color .b,
.container .b {
  color: blue;
}
```

### 6. 重复继承检测

目前 `Less` 不支持重复继承检测。选择器继承两个属性相同但名称不同的选择器会被同时输出，代码如下：

```less
.container1,
.container2 {
  color: red;
}

.container3:extend(.container1, .container2) {
}

// compile
.container1,
.container2,
.container3,
.container3 {
  color: red;
}
```

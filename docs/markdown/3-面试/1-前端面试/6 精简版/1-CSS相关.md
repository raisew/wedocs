# CSS 相关

## 1. 左边定宽，右边自适应方案：float + margin ，float + calc

```css
/* 方案1 */
.left {
  width: 120px;
  float: left;
}
.right {
  margin-left: 120px;
}
/* 方案2 */
.left {
  width: 120px;
  float: left;
}
.right {
  width: calc(100% - 120px);
  float: left;
}
```

## 2. 左右两边定宽， 中间自适应：float ，float + calc, 圣杯布局 (设置 BFC ， margin 负值法) ，flex

```css
.wrap {
  width: 100%;
  height: 200px;
}
.wrap > div {
  height: 100%;
}
/* 方案1 */
.left {
  width: 120px;
  float: left;
}
.right {
  float: right;
  width: 120px;
}
.center {
  margin: 0 120px;
}
/* 方案2 */
.left {
  width: 120px;
  float: left;
}
.right {
  float: right;
  width: 120px;
}
.center {
  width: calc(100% - 240px);
  margin-left: 120px;
}
/* 方案3 */
.wrap {
  display: flex;
}
.left {
  width: 120px;
}
.right {
  width: 120px;
}
.center {
  flex: 1;
}
```

### 3. 左右居中

- 行内元素: `text-align: center`
- 定宽块状元素: 左右 `margin` 值为 `auto`
- 不定宽块状元素: `table` 布局， `position` + `transform`

```css
/* 方案1 */
.wrap {
  text-align: center;
}
.center {
  display: inline;
  /* or */
  /* display: inline-block; */
}
/* 方案2 */
.center {
  width: 100px;
  margin: 0 auto;
}
/* 方案2 */
.wrap {
  position: relative;
}
.center {
  position: absulote;
  left: 50%;
  transform: translateX(-50%);
}
```

## 4. 上下垂直居中

- 定高： `margin` ， `position` + `margin` (负值)
- 不定高： `position` + `transform` ， `flex` ， `IFC` + `vertical-align:middle`

```css
/* 定高方案1 */
.center {
  height: 100px;
  margin: 50px 0;
}
/* 定高方案2 */
.center {
  height: 100px;
  position: absolute;
  top: 50%;
  margin-top: -25px;
}
/* 不定高方案1 */
.center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
/* 不定高方案2 */
.wrap {
  display: flex;
  align-items: center;
}
.center {
  width: 100%;
}
/* 不定高方案3 */
/* 设置 inline-block 则会在外层产生 IFC， 高度设为 100% 撑开 wrap 的高度 */
.wrap::before {
  content: "";
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.wrap {
  text-align: center;
}
.center {
  display: inline-block;
  vertical-align: middle;
}
```

## 5. 盒模型：content (元素内容) + padding ( 内边距) + border ( 边框) + margin (外边距)

> 延伸： `box-sizing`

- `content-box` ：默认值，总宽度 = `margin` + `border` + `padding` + `width`
- `border-box` ：盒子宽度包含 `padding` 和 `border` ， 总宽度 = `margin` + `width`
- `inherit` ：从父元素继承 `box-sizing` 属性

## 6. BFC 、IFC 、GFC 、FFC： FC ( Formatting Contexts) ，格式化上下文

`BFC` ：块级格式化上下文， 容器里面的子元素不会在布局上影响到外面的元素， 反之也是如此(按照这个理念来想， 只要脱离文档流， 肯定就能产生 `BFC` )。产生 `BFC` 方式如下

- `float` 的值不为 `none` 。
- `overflow` 的值不为 `visible` 。
- `position` 的值不为 `relative` 和 `static` 。
- `display` 的值为 `table-cell` , `table-caption` , `inline-block` 中的任何⼀个

用处？常见的多栏布局， 结合块级别元素浮动， 里面的元素则是在⼀个相对隔离的环境里运行

`IFC` ： 内联格式化上下文， `IFC` 的 `line box` ( 线框) 高度由其包含行内元素中最高的实际高度计算而来 (不受到竖直方向的 `padding/margin` 影响)。

`IFC` 中的 `line box` ⼀般左右都贴紧整个 `IFC` ，但是会因为 `float` 元素而扰乱 。 `float` 元素会位于 `ImC` 与 `line box` 之间，使得 `line box` 宽度缩短 。 同个 `ifc` 下的多个 `line box` 高度会不同 。 `IFC` 中时不可能有块级元素的， 当插⼊块级元素时 ( 如 `p` 中插⼊ `div` ) 会产生两个匿名块与 `div` 分隔开， 即产生两个 `IFC` ，每个 `IFC` 对外表现为块级元素，与 `div` 垂直排列。

用处？

- 水平居中： 当⼀个块要在环境中水平居中时，设置其为 `inline-block` 则会在外层产生 `IFC` ， 通过 `text-align` 则可以使其水平居中。
- 垂直居中：创建⼀个 `IFC` ，用其中⼀个元素撑开父元素的高度，然后设置其 `vertical-align : middle` ， 其他行内元素则可以在此父元素下垂直居中

  - `GFC` ：网格布局格式化上下文 ( `display: grid` )
  - `FFC` ： 自适应格式化上下文 ( `display: flex` )

# CSS

## 1. css sprite 是什么,有什么优缺点

1. 概念：将多个小图片拼接到⼀个图片中 。通过 background-position 和元素尺寸调节需
   要显示的背景图案。
2. 优点：

   - 减少 `HTTP` 请求数，极大地提高页面加载速度
   - 增加图片信息重复度，提高压缩比，减少图片大小
   - 更换⻛格⽅便， 只需在⼀张或⼏张图片上修改颜色或样式即可实现

3. 缺点：

   - 图片合并麻烦
   - 维护麻烦，修改⼀个图片可能需要从新布局整个图片，样式

## 2. `display: none;` 与 `visibility: hidden;` 的区别

1. 联系：它们都能让元素不可⻅
2. 区别：

   - `display: none` ;会让元素完全从渲染树中消失， 渲染的时候不占据任何空间；`visibility: hidden` ;不会让元素从渲染树消失， 渲染师元素继续占据空间， 只是内容不可⻅
   - `display: none` ;是⾮继承属性， ⼦孙节点消失由于元素从渲染树消失造成， 通过修改⼦孙节点属性⽆法显示 ；`visibility: hidden` ; 是继承属性， ⼦孙节点消失由于继承了 `hidden` ， 通过设置 `visibility: visible` ; 可以让⼦孙节点显式
   - 修改常规流中元素的 `display` 通常会造成⽂档重排 。修改 `visibility` 属性只会造成本元素的重绘。
   - 读屏器不会读取 `display: none` ;元素内容；会读取 `visibility: hidden` ; 元素内容

## 3. `link` 与 `@import` 的区别

1. `link` 是 `HTML` ⽅式， `@import` 是 CSS ⽅式
2. `link` 最大限度⽀持并⾏下载， `@import` 过多嵌套导致串⾏下载， 出现 `FOUC` (⽂档样式
   短暂失效)
3. `link` 可以通过 `rel="alternate stylesheet"` 指定候选样式
4. 浏览器对 `link` ⽀持早于 `@import` ， 可以使用 `@import` 对老浏览器隐藏样式
5. `@import` 必须在样式规则之前， 可以在 css ⽂件中引用其他⽂件
6. 总体来说： `link` 优于 `@import`

## 4. 什么是 FOUC?如何避免

1. `Flash Of Unstyled Content` ：用户定义样式表加载之前浏览器使用默认样式显示⽂
   档，用户样式加载渲染之后再从新显示⽂档， 造成⻚⾯闪烁。
2. 解决方法：把样式表放到⽂档的 `<head>`

## 5. 如何创建块级格式化上下文(block formatting context),BFC 有什么用

1. 创建规则：

   - 根元素
   - 浮动元素 ( `float` 不取值为 `none` )
   - 绝对定位元素 ( `position` 取值为 `absolute` 或 `fixed` )
   - `display` 取值为 `inline-block` 、 `table-cell` 、 `table-caption` 、 `flex` 、 `inline-flex` 之⼀的元素
   - `overflow` 不取值为 `visible` 的元素

2. 作用：

   - 可以包含浮动元素
   - 不被浮动元素覆盖
   - 阻止父子元素的 `margin` 折叠

## 6. display 、float 、position 的关系

1. 如果 `display` 取值为 `none` ，那么 `position` 和 `float` 都不起作用， 这种情况下元素不产生框
2. 否则， 如果 `position` 取值为 `absolute` 或者 `fixed` ，框就是绝对定位的， `float` 的计算值为 `none` ， `display` 根据下面的表格进行调整。
3. 否则， 如果 `float` 不是 `none` ，框是浮动的， `display` 根据下表进行调整
4. 否则， 如果元素是根元素， `display` 根据下表进行调整
5. 其他情况下 `display` 的值为指定值
6. 总结起来：绝对定位、浮动、根元素都需要调整 `display`

## 7. 清除浮动的几种方式，各自的优缺点

1. 父级 `div` 定义 `height`
2. 结尾处加空 `div` 标签 `clear:both`
3. 父级 `div` 定义伪类 `:after` 和 `zoom`
4. 父级 `div` 定义 `overflow:hidden`
5. 父级 `div` 也浮动， 需要定义宽度
6. 结尾处加 `br` 标签 `clear:both`
7. 比较好的是第 3 种方式， 好多网站都这么用

## 8. 为什么要初始化 CSS 样式?

1. 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的， 如果没对 `CSS` 初始化
   往往会出现浏览器之间的页面显示差异。
2. 当然，初始化样式会对 `SEO` 有⼀定的影响，但鱼和熊掌不可兼得，但⼒求影响最⼩的情况
   下初始化

## 9. css3 有哪些新特性

1. 新增各种 `css` 选择器
2. 圆角 `border-radius`
3. 多列布局
4. 阴影和反射
5. 文字特效 `text-shadow`
6. 线性渐变
7. 旋转 `transform`

### CSS3 新增伪类有那些？

- `p:first-of-type` 选择属于其父元素的首个 `<p>` 元素的每个 `<p>` 元素。
- `p:last-of-type` 选择属于其父元素的最后 `<p>` 元素的每个 `<p>` 元素。
- `p:only-of-type` 选择属于其父元素唯⼀的 `<p>` 元素的每个 `<p>` 元素。
- `p:only-child` 选择属于其父元素的唯⼀⼦元素的每个 `<p>` 元素。
- `p:nth-child(2)` 选择属于其父元素的第⼆个⼦元素的每个 `<p>` 元素。
- `:after` 在元素之前添加内容,也可以用来做清除浮动。
- `:before` 在元素之后添加内容。
- `:enabled` 已启用的表单元素。
- `:disabled` 已禁用的表单元素。
- `:checked` 单选框或复选框被选中。

## 10. display 有哪些值？说明他们的作用

1. `block` 转换成块状元素。
2. `inline` 转换成行内元素。
3. `none` 设置元素不可见。
4. `inline-block` 象行内元素⼀样显示，但其内容象块类型元素⼀样显示。
5. `list-item` 象块类型元素⼀样显示， 并添加样式列表标记。
6. `table` 此元素会作为块级表格来显示
7. `inherit` 规定应该从父元素继承 `display` 属性的值

## 11. 介绍⼀下标准的 CSS 的盒子模型？低版本 IE 的盒子模型有什么不同的？

1. 有两种， `IE` 盒子模型 、 `W3C` 盒子模型；
2. 盒模型： 内容(`content`)、填充( `padding` )、边界( `margin` )、 边框( `border` )；
3. 区 别： IE 的 `content` 部分把 `border` 和 `padding` 计算了进去;

## 12. CSS 优先级算法如何计算？

1. 优先级就近原则， 同权重情况下样式定义最近者为准
2. 载⼊样式以最后载⼊的定位为准
3. 优先级为: `!important` > `id` > `class` > `tag` ; `!important` 比 内联优先级高

## 13. 对 BFC 规范的理解？

它决定了元素如何对其内容进行定位,以及与其他元素的关系和相互作用

## 14. 谈谈浮动和清除浮动

浮动的框可以向左或向右移动， 直到他的外边缘碰到包含框或另⼀个浮动框的边框为止。由于浮动框不在文档的普通流中，所以文档的普通流的块框表现得就像浮动框不存在⼀样 。浮动的块框会漂浮在文档普通流的块框上

## 15. position 的值， relative 和 absolute 定位原点是

1. `absolute` ：生成绝对定位的元素，相对于 `static` 定位以外的第⼀个父元素进行定位
2. `fixed` ：生成绝对定位的元素，相对于浏览器窗⼝进行定位
3. `relative` ：生成相对定位的元素，相对于其正常位置进行定位
4. `static` 默认值 。没有定位，元素出现在正常的流中
5. `inherit` 规定从父元素继承 `position` 属性的值

## 16. display:inline-block 什么时候不会显示间隙？

1. 移除空格
2. 使用 `margin` 负值
3. 使用 `font-size:0`
4. `letter-spacing`
5. word-spacing

## 17. PNG\GIF\JPG 的区别及如何选

1. `PNG`

   - 有 `PNG8` 和 `truecolor` `PNG`
   - `PNG8` 类似 `GIF` 颜色上限为 `256` ，文件小， 支持 `alpha` 透明度， 无动画
   - 适合图标 、背景 、按钮

2. `GIF`

   - `8` 位像素，`256` 色
   - 无损压缩
   - 支持简单动画
   - 支持 `boolean` 透明
   - 适合简单动画

3. `JPG/JPEG`

   - 颜色限于 256
   - 有损压缩
   - 可控制压缩质量
   - 不支持透明
   - 适合照片

## 18. 行内元素 float:left 后是否变为块级元素？

行内元素设置成浮动之后变得更加像是 `inline-block` (行内块级元素，设置成这个属性的元素会同时拥有行内和块级的特性， 最明显的不同是它的默认宽度不是 `100%` )， 这时候给行内元素设置 `padding-top` 和 `padding-bottom` 或者 `width` 、 `height` 都是有效果的

## 19. 在网页中的应该使用奇数还是偶数的字体？为什么呢？

偶数字号相对更容易和 web 设计的其他部分构成比例关系

## 20. ::before 和 :after 中双冒号和单冒号 有什么区别？解释⼀下这 2 个伪元素的作用

1. 单冒号( `:` )用于 `CSS3` 伪类，双冒号( `::` )用于 CSS3 伪元素
2. 用于区分伪类和伪元素

## 21. 如果需要手动写动画，你认为最小时间间隔是多久， 为什么？

多数显示器默认频率是 `60Hz` ， 即 `1` 秒刷新 `60` 次，所以理论上最小间隔为`1/60*1000ms` `≈` `16.7ms`

## 22. CSS 合并方法

避免使用 `@import` 引⼊多个 `css` 文件， 可以使用 `CSS` 工具将 `CSS` 合并为⼀个 `CSS` 文
件，例如使用 `Sass\Compass` 等

## 23. CSS 不同选择器的权重(CSS 层叠的规则)

1. `!important` 规则最重要，大于其它规则
2. 行内样式规则，加 `1000`
3. 对于选择器中给定的各个 `ID` 属性值，加 `100`
4. 对于选择器中给定的各个类属性 、属性选择器或者伪类选择器，加 `10`
5. 对于选择其中给定的各个元素标签选择器，加 `1`
6. 如果权值⼀样，则按照样式规则的先后顺序来应用，顺序靠后的覆盖靠前的规则

## 24. 列出你所知道可以改变页面布局的属性

`position` 、 `display` 、 `float` 、 `width` 、 `height`、 `top` 、 `left` 、 `right`

## 25. CSS 在性能优化方面的实践

1. `css` 压缩与合并 、 `Gzip` 压缩
2. `css` 文件放在 `head` 里 、不要用 `@import`
3. 尽量用缩写 、避免用滤镜 、合理使用选择器

## 26. CSS3 动画 ( 简单动画的实现， 如旋转等)

1. 依靠 `CSS3` 中提出的三个属性： `transition` 、 `transform` 、 `animation`
2. `transition` ：定义了元素在变化过程中是怎么样的， 包含 `transition-property` 、
   `transition-duration` 、 `transition-timing-function` 、 `transition-delay` 。
3. `transform` ：定义元素的变化结果， 包含 `rotate` 、 `scale` 、 `skew` 、 `translate` 。
4. `animation` ：动画定义了动作的每⼀帧 ( `@keyframes` ) 有什么效果， 包括 `animation-name` ，`animation-duration` 、 `animation-timing-function` 、 `animation-delay` 、 `animation-iteration-count` 、 `animation-direction`

## 27. base64 的原理及优缺点

1. 优点可以加密，减少了 `HTTTP` 请求
2. 缺点是需要消耗 `CPU` 进行编解码

## 28. 几种常见的 CSS 布局

### 流体布局

```css
.left {
  float: left;
  width: 100px;
  height: 200px;
  background: red;
}
.right {
  float: right;
  width: 200px;
  height: 200px;
  background: blue;
}
.main {
  margin-left: 120px;
  margin-right: 220px;
  height: 200px;
  background: green;
}
```

```html
<div class=" container">
  <div class="left"></div>
  <div class="right"></div>
  <div class="main"></div>
</div>
```

### 圣杯布局

```css
. container {
  margin-left: 120px;
  margin-right: 220px;
}
.main {
  float: left;
  width: 100%;
  height: 300px;
  background: green;
}
.left {
  position: relative;
  left: -120px;
  float: left;
  height: 300px;
  width: 100px;
  margin-left: -100%;
  background: red;
}
.right {
  position: relative;
  right: -220px;
  float: right;
  height: 300px;
  width: 200px;
  margin-left: -200px;
  background: blue;
}
```

```html
<div class="container">
  <div class="main"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>
```

### 双飞翼布局

```css
. content {
  float: left;
  width: 100%;
}
.main {
  height: 200px;
  margin-left: 110px;
  margin-right: 220px;
  background: green;
}
.main::after {
  content: "";
  display: block;
  font-size: 0;
  height: 0;
  zoom: 1;
  clear: both;
}
.left {
  float: left;
  height: 200px;
  width: 100px;
  margin-left: -100%;
  background: red;
}
.right {
  float: right;
  height: 200px;
  width: 200px;
  margin-left: -200px;
  background: blue;
}
```

```html
<div class="content">
  <div class="main"></div>
</div>
<div class="left"></div>
<div class="right"></div>
```

## 29. stylus/sass/less 区别

1. 均具有“变量”、“混合”、“嵌套”、“继承”、“颜色混合”五大基本特性
2. `Scss` 和 `LESS` 语法较为严谨， `LESS` 要求⼀定要使用大括号“{}”， `Scss` 和 `Stylus` 可
   以通过缩进表示层次与嵌套关系
3. `Scss` 无全局变量的概念， `LESS` 和 `Stylus` 有类似于其它语⾔的作用域概念
4. `Sass` 是基于 `Ruby` 语⾔的， 而 `LESS` 和 `Stylus` 可以基于 `NodeJS` `NPM` 下载相应库后
   进⾏编译；

## 30. postcss 的作用

1. 可以直观的理解为：它就是⼀个平台 。为什么说它是⼀个平台呢？ 因为我们直接用它， 感
   觉不能⼲什么事情，但是如果让⼀些插件在它上面跑，那么将会很强大
2. `PostCSS` 提供了⼀个解析器， 它能够将 `CSS` 解析成抽象语法树
3. 通过在 `PostCSS` 这个平台上， 我们能够开发⼀些插件，来处理我们的 `CSS` ， 比如热门的： `autoprefixer`
4. `postcss` 可以对 sass 处理过后的 `css` 再处理 最常⻅的就是 `autoprefixer`

## 31. css 样式 ( 选择器) 的优先级

1. 计算权重确定
2. `!important`
3. 内联样式
4. 后写的优先级高

## 32. 自定义字体的使用场景

1. 宣传/品牌/ `banner` 等固定文案
2. 字体图标

## 33. 如何美化 CheckBox

1. `<label>` 属性 `for` 和 `id`
2. 隐藏原生的 `<input>`
3. `:checked + <label>`

## 34. 伪类和伪元素的区别

1. 伪类用于表示元素的某种状态，主要有操作状态，选择器状态以及表单状态几种
2. 伪元素是真的有元素
3. 前者单冒号，后者双冒号

## 35. `base64` 的使用

1. 用于减少 `HTTP` 请求
2. 适用于小图片
3. `base64` 的体积约为原图的 `4/3`

## 36. 自适应布局

### 思路：

1. 左侧浮动或者绝对定位，然后右侧 `margin` 撑开
2. 使用 `<div>` 包含，然后靠负 `margin` 形成 `bfc`
3. 使用 `flex`

## 37. 请用 CSS 写⼀个简单的幻灯片效果页面

```css
.ani {
  width: 480px;
  height: 320px;
  margin: 50px auto;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 1);
  background-size: cover;
  background-position: center;
  -webkit-animation-name: "loops";
  -webkit-animation-duration: 20s;
  -webkit-animation-iteration-count: infinite;
}
@-webkit-keyframes "loops" {
  0% {
    background: url("图片路径1");
  }
  25% {
    background: url("图片路径2");
  }
  50% {
    background: url("图片路径3");
  }
  75% {
    background: url("图片路径4");
  }
  100% {
    background: url("图片路径5");
  }
}
```

## 38. 什么是外边距重叠？重叠的结果是什么？

> 外边距重叠就是 margin-collapse

在 CSS 当中，相邻的两个盒子 ( 可能是兄弟关系也可能是祖先关系) 的外边距可以结合成
⼀个单独的外边距 。这种合并外边距的方式被称为折叠， 并且因而所结合成的外边距称为
折叠外边距。

### 折叠结果遵循下列计算规则：

1. 两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
2. 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
3. 两个外边距⼀正⼀负时，折叠结果是两者的相加的和。

## 39. rgba()和 opacity 的透明效果有什么不同？

1. `rgba()` 和 `opacity` 都能实现透明效果，但最大的不同是 `opacity` 作用于元素， 以及元
   素内的所有内容的透明度
2. 而 `rgba()` 只作用于元素的颜色或其背景色 。 ( 设置 `rgba` 透明的元素的子元素不会继承
   透明效果！)

## 40. css 中可以让文字在垂直和水平方向上重叠的两个属性是什么？

1. 垂直方向： `line-height`
2. 水平方向： `letter-spacing`

## 41. 如何垂直居中⼀个浮动元素？

```css
/**方法⼀： 已知元素的高宽**/
#div1 {
  background-color: #6699ff;
  width: 200px;
  height: 200px;
  position: absolute; //父元素需要相对定位
  top: 50%;
  left: 50%;
  margin-top: -100px; //二分之⼀的height，width
  margin-left: -100px;
}
/**方法二:**/
#div1 {
  width: 200px;
  height: 200px;
  background-color: #6699ff;
  margin: auto;
  position: absolute; //父元素需要相对定位
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
```

如何垂直居中⼀个 <img> ? (用更简便的方法。)

```css
#container /**<img>的容器设置如下**/ {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
```

## 42. px 和 em 的区别

1. `px` 和 `em` 都是长度单位， 区别是， `px` 的值是固定的，指定是多少就是多少，计算比较
   容易 。 `em` 得值不是固定的， 并且 `em` 会继承父级元素的字体大⼩ 。
2. 浏览器的默认字体高都是 `16px` 。所以未经调整的浏览器都符合: `1em=16px` 。那么
   `12px=0.75em` , `10px=0.625em` 。

## 43. Sass 、LESS 是什么？大家为什么要使用他们？

1. 他们是 `CSS` 预处理器 。他是 `CSS` 上的⼀种抽象层 。他们是⼀种特殊的语法/语⾔编译成 `CSS` 。
2. 例如 `Less` 是⼀种动态样式语⾔ . 将 `CSS` 赋予了动态语⾔的特性， 如变量， 继承， 运算， 函
   数. `LESS` 既可以在客户端上运⾏ (支持 `IE 6+` , `Webkit` , `Firefox` )，也可⼀在服务端
   运⾏ (借助 `Node.js` )

### 为什么要使用它们？

1. 结构清晰，便于扩展。
2. 可以方便地屏蔽浏览器私有语法差异 。这个不用多说， 封装对- 浏览器语法差异的重复处理，减少无意义的机械劳动。
3. 可以轻松实现多重继承。
4. 完全兼容 `CSS` 代码， 可以方便地应用到老项目中 `。LESS` 只- 是在 `CSS` 语法上做了扩展，所以老的 `CSS` 代码也可以与 `LESS` 代码⼀同编译

## 44. 知道 css 有个 content 属性吗？有什么作用？有什么应用？

`css` 的 `content` 属性专门应用在 `before/after` 伪元素上， 用于来插⼊生成内容。最常⻅的应用是利用伪类清除浮动。

```css
/**⼀种常⻅利用伪类清除浮动的代码**/
.clearfix:after {
  content: "."; //这里利用到了content属性
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.clearfix {
  *zoom: 1;
}
```

## 45. 水平居中的方法

1. 元素为行内元素，设置父元素 `text-align:center`
2. 如果元素宽度固定， 可以设置左右 `margin` 为 `auto` ;
3. 如果元素为绝对定位，设置父元素 `position` 为 `relative` ，元素设
   `left:0;right:0;margin:auto`;
4. 使用 `flex-box` 布局，指定 `justify-content` 属性为 `center`
5. `display` 设置为 `tabel-ceil`

## 46. 垂直居中的方法

1. 将显示方式设置为表格， `display:table-cell` ,同时设置 `vertial-align：middle`
2. 使用 `flex` 布局，设置为 `align-item`： `center`
3. 绝对定位中设置 `bottom:0,top:0` ,并设置 `margin:auto`
4. 绝对定位中固定高度时设置 `top:50%` ，`margin-top` 值为高度⼀半的负值
5. 文本垂直居中设置 `line-height` 为 `height` 值

## 47. 如何使用 CSS 实现硬件加速？

> 硬件加速是指通过创建独立的复合图层，让 GPU 来渲染这个图层，从而提高性能

⼀般触发硬件加速的 `CSS` 属性有 `transform` 、 `opacity` 、 `filter` ， 为了避免 2D 动画在 开始和结束的时候的 `repaint` 操作，⼀ 般使用 `tranform:translateZ(0)`

## 48. 重绘和回流 ( 重排) 是什么， 如何避免？

1. DOM 的变化影响到了元素的⼏何属性 ( 宽高) ,浏览器重新计算元素的⼏何属性， 其他元素
   的⼏何
2. 属性和位置也会受到影响， 浏览器需要重新构造渲染树， 这个过程称为重排， 浏览器将受
   到影响的部分
3. 重新绘制到屏幕上的过程称为重绘 。引起重排的原因有

   - 添加或者删除可见的 DOM 元素
   - 元素位置 、尺⼨ 、内容改变
   - 浏览器页面初始化
   - 浏览器窗⼝尺⼨改变， 重排⼀定重绘， 重绘不⼀定重排

4. 减少重绘和重排的方法：

   - 不在布局信息改变时做 `DOM` 查询
   - 使用 `cssText` 或者 `className` ⼀次性改变属性
   - 使用 `fragment`
   - 对于多次重排的元素， 如动画，使用绝对定位脱离文档流，让他的改变不影响到其他元素

## 49. 说⼀说 css3 的 animation

1. `css3` 的 `animation` 是 `css3` 新增的动画属性， 这个 `css3` 动画的每⼀帧是通过 `@keyframes`
   来声明的， `keyframes` 声明了动画的名称， 通过 `from` 、 `to` 或者是百分比来定义
2. 每⼀帧动画元素的状态， 通过 `animation-name` 来引用这个动画， 同时 css3 动画也可以定
   义动画运行的时长 、动画开始时间 、动画播放方向 、动画循环次数 、动画播放的方式
3. 这些相关的动画⼦属性有： `animation-name` 定义动画名 、 `animation-duration` 定义动画播放的时长 、 `animation-delay` 定义动画延迟播放的时间 、 `animation-direction` 定义 动画的播放方向 、`animation-iteration-count` 定义播放次数 、 `animation-fill-mode` 定义动画播放之后的状态 、 `animation-play-state` 定义播放状
   态， 如暂停运行等 、 `animation-timing-function`
4. 定义播放的方式， 如恒速播放 、艰涩播放等。

## 50. 左边宽度固定，右边自适应

1. 左侧固定宽度，右侧自适应宽度的两列布局实现
   html 结构:

```html
<div class=" outer">
  <div class="left">固定宽度</div>
  <div class="right">自适应宽度</div>
</div>
```

2. 在外层 `div` ( 类名为 `outer` ) 的 `div` 中，有两个⼦ `div` ， 类名分别为 `left` 和 `right` ， 其中 `left` 为固定宽度， 而 `right` 为自适应宽度

- 方法 1：左侧 div 设置成浮动：float: left，右侧 div 宽度会自拉升适应

```css
.outer {
  width: 100%;
  height: 500px;
  background-color: yellow;
}
.left {
  width: 200px;
  height: 200px;
  background-color: red;
  float: left;
}
.right {
  height: 200px;
  background-color: blue;
}
```

- 方法 2：对右侧:div 进行绝对定位，然后再设置 right=0，即可以实现宽度自适应
  > 绝对定位元素的第⼀个高级特性就是其具有自动伸缩的功能， 当我们将 `width` 设置为 `auto` 的时候 ( 或者不设置， 默认为 `auto` )， 绝对定位元素会根据其 `left` 和 `right` 自动伸缩其大小

```css
.outer {
  width: 100%;
  height: 500px;
  background-color: yellow;
  position: relative;
}
.left {
  width: 200px;
  height: 200px;
  background-color: red;
}
.right {
  height: 200px;
  background-color: blue;
  position: absolute;
  left: 200px;
  top: 0;
  right: 0;
}
```

- 方法 3：将左侧 div 进行绝对定位，然后右侧 div 设置 margin-left: 200px

```css
.outer {
  width: 100%;
  height: 500px;
  background-color: yellow;
  position: relative;
}
.left {
  width: 200px;
  height: 200px;
  background-color: red;
  position: absolute;
}
.right {
  height: 200px;
  background-color: blue;
  margin-left: 200px;
}
```

- 方法 4：使用 flex 布局

```css
.outer {
  width: 100%;
  height: 500px;
  background-color: yellow;
  display: flex;
  flex-direction: row;
}
.left {
  width: 200px;
  height: 200px;
  background-color: red;
}
.right {
  height: 200px;
  background-color: blue;
  flex: 1;
}
```

## 51. 两种以上方式实现已知或者未知宽度的垂直水平居中

```css
/** 1 **/
.wraper {
  position: relative;
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
  }
}
/** 2 **/
.wraper {
  position: relative;
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
/** 3 **/
.wraper {
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
}
/** 4 **/
.wraper {
  display: table;
  .box {
    display: table-cell;
    vertical-align: middle;
  }
}
```

## 52. 如何实现小于 12px 的字体效果

`transform:scale()` 这个属性只可以缩放可以定义宽高的元素， 而⾏内元素是没有宽高的， 我们可以加上⼀个 `display:inline-block` ;

```css
transform: scale(0.7);
```

`css` 的属性， 可以缩放大⼩

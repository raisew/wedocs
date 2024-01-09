# JavaScript

## 1. 闭包

1.  闭包就是能够读取其他函数内部变量的函数
2.  闭包是指有权访问另⼀个函数作用域中变量的函数，创建闭包的最常⻅的方式就是在⼀个
    函数内创建另⼀个函数， 通过另⼀个函数访问这个函数的局部变量,利用闭包可以突破作用
    链域
3.  闭包的特性：

    - 函数内再嵌套函数
    - 内部函数可以引用外层的参数和变量
    - 参数和变量不会被垃圾回收机制回收

4.  说说你对闭包的理解

    - 使用闭包主要是为了设计私有的方法和变量 。闭包的优点是可以避免全局变量的污染， 缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露 。在 `js` 中， 函数即闭包， 只有函数才会产生作用域的概念
    - 闭包 的最大用处有两个，⼀个是可以读取函数内部的变量， 另⼀个就是让这些变量始终保
      持在内存中
    - 闭包的另⼀个用处， 是封装对象的私有属性和私有方法
    - 好处：能够实现封装和缓存等；
    - 坏处：就是消耗内存 、不正当使用会造成内存溢出的问题

5.  使用闭包的注意点

    - 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在 IE 中可能导致内存泄露
    - 解决方法是，在退出函数之前，将不使用的局部变量全部删除

## 2. 说说你对作用域链的理解

1. 作用域链的作用是保证执⾏环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问， 变量访问到 `window` 对象即被终止，作用域链向下访问变量是不被允许的
2. 简单的说，作用域就是变量与函数的可访问范围， 即作用域控制着变量与函数的可⻅性和生命周期

## 3. JavaScript 原型，原型链 ? 有什么特点？

1.  每个对象都会在其内部初始化⼀个属性，就是 `prototype` (原型)， 当我们访问⼀个对象的
    属性时
2.  如果这个对象内部不存在这个属性，那么他就会去 `prototype` 里找这个属性， 这个
    `prototype` ⼜会有自⼰的 `prototype` ， 于是就这样⼀直找下去，也就是我们平时所说的
    原型链的概念
3.  关系： `instance.constructor.prototype = instance.__proto__`
4.  特点：

    - `JavaScript` 对象是通过引用来传递的， 我们创建的每个新对象实体中并没有⼀份属于自⼰的原型副本 。当我们修改原型时，与之相关的对象也会继承这⼀改变
    - 当我们需要⼀个属性的时，`Javascript` 引擎会先看当前对象中是否有这个属性， 如果没有的就会查找他的 `Prototype` 建对象

## 4. 请解释什么是事件代理

1. 事件代理 ( `Event Delegation` )， ⼜称之为事件委托 。是 `JavaScript` 中常用绑定事件的常用技巧 。顾名思义，“事件代理”即是把原本需要绑定的事件委托给父元素，让父元素担当事件监听的职务 。事件代理的原理是 DOM 元素的事件冒泡 。使用事件代理的好处是可以提高性能
2. 可以大量节省内存占用，减少事件注册， 比如在 `table` 上代理所有 `td` 的 `click` 事件就非常棒
3. 可以实现当新增子对象时无需再次对其绑定

## 5. Javascript 如何实现继承？

1. 构造继承
2. 原型继承
3. 实例继承
4. 拷贝继承
5. 原型 `prototype` 机制或 `apply` 和 `call` 方法去实现较简单， 建议使用构造函数与原型混合方式

```js
function Parent() {
  this.name = "wang";
}
function Child() {
  this.age = 28;
}
Child.prototype = new Parent(); //继承了Parent，通过原型
var demo = new Child();
alert(demo.age);
alert(demo.name); //得到被继承的属性
```

## 6. 谈谈 This 对象的理解

1. `this` 总是指向函数的直接调用者 ( 而非间接调用者)
2. 如果有 `new` 关键字， `this` 指向 `new` 出来的那个对象
3. 在事件中， `this` 指向触发这个事件的对象， 特殊的是，`IE` 中的 `attachEvent` 中的 `this` 总是指向全局对象 `Window`

## 7. 事件模型

W3C 中定义事件的发生经历三个阶段：捕获阶段 ( `capturing` ) 、 目标阶段( `targetin` ) 、冒泡阶段 ( `bubbling` )

1. 冒泡型事件： 当你使用事件冒泡时， 子级元素先触发， 父级元素后触发
2. 捕获型事件： 当你使用事件捕获时， 父级元素先触发， 子级元素后触发
3. `DOM` 事件流： 同时支持两种事件模型：捕获型事件和冒泡型事件
4. 阻止冒泡：在 `W3c` 中，使用 `stopPropagation()` 方法；在 IE 下设置 `cancelBubble = true`
5. 阻止捕获：阻止事件的默认行为，例如 `click` - `<a>` 后的跳转 。在 `W3c` 中，使用
   `preventDefault()` 方法，在 IE 下设置 `window.event.returnValue = false`

## 8. new 操作符具体干了什么呢?

1. 创建⼀个空对象， 并且 `this` 变量引用该对象， 同时还继承了该函数的原型
2. 属性和方法被加⼊到 `this` 引用的对象中
3. 新创建的对象由 `this` 所引用， 并且最后隐式的返回 `this`

## 9. Ajax 原理

1. `Ajax` 的原理简单来说是在用户和服务器之间加了—个中间层( `AJAX` 引擎)， 通过 `XmlHttpRequest` 对象来向服务器发异步请求，从服务器获得数据，然后用 `javascript` 来操作 `DOM` 而更新页面 。使用户操作与服务器响应异步化 。这其中最关键的⼀步就是从服务器获得请求数据
2. `Ajax` 的过程只涉及 `JavaScript` 、 `XMLHttpRequest` 和 `DOM` 。 `XMLHttpRequest` 是 `ajax` 的核⼼机制

```js
/** 1. 创建连接 **/
var xhr = null;
xhr = new XMLHttpRequest();
/** 2. 连接服务器 **/
xhr.open("get", url, true);
/** 3. 发送请求 **/
xhr.send(null);
/** 4. 接受请求 **/
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      success(xhr.responseText);
    } else {
      /** false **/
      fail && fail(xhr.status);
    }
  }
};
```

### `ajax` 有那些优缺点?

优点：

- 通过异步模式，提升了用户体验.
- 优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用.
- `Ajax` 在客户端运行，承担了⼀部分本来由服务器承担的⼯作，减少了大用户量下的服务器负载。
- Ajax 可以实现动态不刷新 ( 局部刷新)

缺点：

- 安全问题 `AJAX` 暴露了与服务器交互的细节。
- 对搜索引擎的支持比较弱。
- 不容易调试。

## 10. 如何解决跨域问题?

> 首先了解下浏览器的同源策略 同源策略 `/SOP` ( `Same origin policy` ) 是⼀种约定， 由 Netscape 公司 1995 年引⼊浏览器， 它是浏览器最核⼼也最基本的安全功能， 如果缺少了同源策略， 浏览器很容易受到 `XSS` 、 `CSFR` 等攻击 。所谓同源是指"协议+域名+端口"三者相同， 即便两个不同的域名指向同⼀个 ip 地址，也非同源

那么怎样解决跨域问题的呢？

1. 通过 jsonp 跨域

```js
var script = document.createElement(" script");
script.type = "text/javascript";
// 传参并指定回调执行函数为onBack
script.src = "http://www.....:8080/login?user=admin&callback=onBack";
document.head.appendChild(script);
// 回调执行函数
function onBack(res) {
  alert(JSON.stringify(res));
}
```

2.  document.domain + iframe 跨域

    - 父窗口： (http://www.domain.com/a.html)

      ```html
      <iframe id=" iframe" src=" http: / / child. domain. com/ b. html">
      </iframe>
      <script>
        document.domain = "domain.com";
        var user = "admin";
      </script>
      ```

    - 子窗口： (http://child.domain.com/b.html)

      ```js
      document.domain = "domain.com";
      // 获取父窗口中变量
      alert("get js data from parent ---> " + window.parent.user);
      ```

3.  nginx 代理跨域
4.  nodejs 中间件代理跨域
5.  后端在头部信息里面设置安全域名

## 11. 模块化开发怎么做？

立即执行函数,不暴露私有成员

```js
var module1 = (function () {
  var _count = 0;
  var m1 = function () {
    //...
  };
  var m2 = function () {
    //...
  };
  return {
    m1: m1,
    m2: m2,
  };
})();
```

## 12. 异步加载 JS 的方式有哪些？

1. defer， 只支持 `IE`
2. `async
3. 创建 `script` ， 插⼊到 `DOM` 中，加载完毕后 `callBack``

## 13. 哪些操作会造成内存泄漏？

1. 内存泄漏指任何对象在您不再拥有或需要它之后仍然存在
2. `setTimeout` 的第⼀个参数使用字符串而非函数的话，会引发内存泄漏
3. 闭包使用不当

## 14. XML 和 JSON 的区别？

1. 数据体积方面

   - `JSON` 相对 于 `XML` 来讲，数据的体积⼩ ，传递的速度更快些。

2. 数据交互方面

   - `JSON` 与 `JavaScript` 的交互更加方便，更容易解析处理，更好的数据交互

3. 数据描述方面

   - `JSON` 对数据的描述性比 `XML` 较差

4. 传输速度方面

   - `JSON` 的速度要远远快于 `XML`

## 15. 谈谈你对 webpack 的看法

`WebPack` 是⼀个模块打包⼯具，你可以使用 `WebPack` 管理你的模块依赖， 并编绎输出模块们所需的静态文件 。它能够很好地管理 、打包 Web 开发中所用到的 `HTML` 、 `Javascript` 、 `CSS` 以及各种静态文件 ( 图片 、字体等)， 让开发过程更加高效 。对于不同类型的资源， `webpack` 有对应的模块加载器 。 `webpack` 模块打包器会分析模块间的依赖关系， 最后 生成了优化且合并后的静态资源

## 16. 说说你对 AMD 和 Commonjs 的理解

1. `CommonJS` 是服务器端模块的规范， `Node.js` 采用了这个规范 。 `CommonJS` 规范加载模块是同步的，也就是说， 只有加载完成，才能执⾏后面的操作 。 `AMD` 规范则是非同步加载模块， 允许指定回调函数
2. `AMD` 推荐的⻛格通过返回⼀个对象做为模块对象， `CommonJS` 的⻛格通过对 `module.exports` 或 `exports` 的属性赋值来达到暴露模块对象的目的

## 17. 常见 web 安全及防护原理

1. `sql` 注⼊原理

   - 就是通过把 `SQL` 命令插⼊到 `Web` 表单递交或输⼊域名或⻚⾯请求的查询字符串， 最终达到欺骗服务器执行恶意的 SQL 命令

   - 总的来说有以下⼏点

     - 永远不要信任用户的输⼊ ，要对用户的输⼊进行校验， 可以通过正则表达式， 或限制⻓度，对单引号和双 `"-"` 进行转换等
     - 永远不要使用动态拼装 `SQL` ， 可以使用参数化的 `SQL` 或者直接使用存储过程进行数据查询存取
     - 永远不要使用管理员权限的数据库连接， 为每个应用使用单独的权限有限的数据库连接
     - 不要把机密信息明⽂存放，请加密或者 hash 掉密码和敏感的信息

2. XSS 原理及防范

   - `Xss(cross-site scripting)` 攻击指的是攻击者往 `Web` ⻚⾯里插⼊恶意 `html` 标签或者 `javascript` 代码 。⽐如：攻击者在论坛中放⼀个看似安全的链接，骗取用户点击后，窃取 `cookie` 中的用户私密信息；或者攻击者在论坛中加⼀个恶意表单， 当用户提交表单的时候，却把信息传送到攻击者的服务器中， 而不是用户原本以为的信任站点

3. XSS 防范方法

   - 首先代码里对用户输⼊的地⽅和变量都需要仔细检查⻓度和对 `”<”,”>”,”;”,”’”` 等字符做过滤；其次任何内容写到⻚⾯之前都必须加以 encode， 避免不⼩⼼把 `html` `tag` 弄出来 。这⼀个层⾯做好， 至少可以堵住超过⼀半的 `XSS` 攻击

4. XSS 与 CSRF 有什么区别吗？

   - `XSS` 是获取信息，不需要提前知道其他用户⻚⾯的代码和数据包 。 `CSRF` 是代替用户完成指定的动作， 需要知道其他用户⻚⾯的代码和数据包 。要完成⼀次 `CSRF` 攻击， 受害者必须依次完成两个步骤
   - 登录受信任网站 `A` ， 并在本地生成 `Cookie`
   - 在不登出 `A` 的情况下， 访问危险网站 `B`

5. CSRF 的防御

   - 服务端的 `CSRF` 方式方法很多样，但总的思想都是⼀致的，就是在客户端页面增加伪随机数
   - 通过验证码的方法

## 18. 用过哪些设计模式？

1. ⼯⼚模式：

   - ⼯⼚模式解决了重复实例化的问题，但还有⼀个问题,那就是识别问题， 因为根本无法搞清楚他们到底是哪个对象的实例
   - 主要好处就是可以消除对象间的耦合， 通过使用⼯程方法而不是 `new` 关键字

2. 构造函数模式

   - 使用构造函数的方法， 即解决了重复实例化的问题， ⼜解决了对象识别的问题，该模式与⼯⼚模式的不同之处在于直接将属性和方法赋值给 `this` 对象;

## 19. 为什么要有同源限制？

1. 同源策略指的是：协议， 域名，端⼝相同， 同源策略是⼀种安全协议
2. 举例说明： 比如⼀个黑客程序，他利用 `Iframe` 把真正的银⾏登录页面嵌到他的页面上，
   当你使用真实的用户名，密码登录时，他的页面就可以通过 `Javascript` 读取到你的表单
   中 `input` 中的内容， 这样用户名，密码就轻松到手了。

## 20. offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别

1. `offsetWidth/offsetHeight` 返回值包含 `content` + `padding` + `border` ，效果与 `e.getBoundingClientRect()` 相同
2. `clientWidth/clientHeight` 返回值只包含 `content` + `padding，` 如果有滚动条，也不包
   含滚动条
3. `scrollWidth/scrollHeight` 返回值包含 `content` + `padding` + `溢出内容的尺寸`

## 21. javascript 有哪些方法定义对象

1. 对象字面量： `var obj = {};`
2. 构造函数： `var obj = new Object();`
3. Object.create(): `var obj = Object.create(Object.prototype)`;

## 22. 常见兼容性问题？

1. `png24` 位的图片在 iE6 浏览器上出现背景，解决方案是做成 `PNG8`
2. 浏览器默认的 `margin` 和 `padding` 不同 。解决方案是加⼀个全局的 `* {margin:0;padding:0;}` 来统⼀ ,但是全局效率很低，⼀般是如下这样解决：

```css
body,
ul,
li,
ol,
dl,
dt,
dd,
form,
input,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
```

3. `IE` 下, `event` 对象有 `x` , `y` 属性,但是没有 `pageX` , `pageY` 属性
4. `Firefox` 下, `event` 对象有 `pageX` , `pageY` 属性,但是没有 `x` , `y` 属性

## 23. 说说你对 promise 的了解

1. 依照 `Promise/A+` 的定义， `Promise` 有四种状态：

   - `pending`: 初始状态, 非 `fulfilled` 或 `rejected`.
   - `fulfilled`: 成功的操作.
   - `rejected`: 失败的操作
   - `settled`: `Promise` 已被 `fulfilled` 或 `rejected` ，且不是 `pending`

2. 另外， `fulfilled` 与 `rejected` ⼀起合称 `settled`
3. `Promise` 对象用来进行延迟( `deferred` ) 和异步( `asynchronous` ) 计算

### Promise 的构造函数

1. 构造⼀个 `Promise` ， 最基本的用法如下：

```js
var promise = new Promise(function(resolve, reject) {
    if (...) { // succeed
        resolve(result);
    } else { // fails
        reject(Error(errMessage));
    }
});
```

2. `Promise` 实例拥有 `then` 方法 ( 具有 `then` 方法的对象， 通常被称为 `thenable` ) 。
   它的使用方法如下：

```js
promise.then(onFulfilled, onRejected);
```

3. 接收两个函数作为参数，⼀个在 `fulfilled` 的时候被调用，⼀个在 `rejected` 的时候被调用，接收参数就是 `future` `，onFulfilled` 对应 `resolve` , `onRejected` 对应 `reject`

## 24. 你觉得 jQuery 源码有哪些写的好的地方

1. `jquery` 源码封装在⼀个匿名函数的自执行环境中，有助于防止变量的全局污染，然后通过传⼊ `window` 对象参数， 可以使 `window` 对象作为局部变量使用， 好处是当 `jquery` 中访问 `window` 对象的时候，就不用将作用域链退回到顶层作用域了，从而可以更快的访问 `window` 对象 。同样，传⼊ `undefined` 参数， 可以缩短查找 `undefined` 时的作用域链
2. `jquery` 将⼀些原型属性和方法封装在了 `jquery.prototype` 中， 为了缩短名称， ⼜赋值
   给了 `jquery.fn` ， 这是很形象的写法
3. 有⼀些数组或对象的方法经常能使用到， `jQuery` 将其保存为局部变量以提高访问速度
4. `jquery` 实现的链式调用可以节约代码，所返回的都是同⼀个对象， 可以提高代码效率

## 25. vue 、react 、angular

1. `Vue.js` ⼀个用于创建 web 交互界面的库， 是⼀个精简的 `MVVM` 。它通过双向数据绑定把 `View` 层和 `Model` 层连接了起来 。实际的 `DOM` 封装和输出格式都被抽象为了 `Directives` 和 `Filters`
2. `React` 仅仅是 `VIEW` 层是 `facebook` 公司 。推出的⼀个用于构建 `UI` 的⼀个库， 能够实现服务器端的渲染 。用了 `virtual dom` ，所以性能很好。
3. `AngularJS` 是⼀个比较完善的前端 `MVVM` 框架， 包含模板，数据双向绑定，路由，模块化， 服务，依赖注⼊等所有功能，模板功能强大丰富， 自带了丰富的 `Angular` 指令

## 26. Node 的应用场景

1. 特点：

   - 它是⼀个 `Javascript` 运⾏环境
   - 依赖于 `Chrome V8` 引擎进⾏代码解释
   - 事件驱动
   - 非阻塞 `I/O`
   - 单进程， 单线程

2. 优点：

   - 高并发 ( 最重要的优点)

3. 缺点：

   - 只⽀持单核 `CPU` ，不能充分利用 `CPU`
   - 可靠性低，⼀旦代码某个环节崩溃，整个系统都崩溃

## 27. 谈谈你对 AMD 、CMD 的理解

1. `CommonJS` 是服务器端模块的规范， `Node.js` 采用了这个规范 。 `CommonJS` 规范加载模块是同步的，也就是说， 只有加载完成，才能执⾏后面的操作 。 `AMD` 规范则是非同步加载模块， 允许指定回调函数
2. `AMD` 推荐的风格通过返回⼀个对象做为模块对象， `CommonJS` 的风格通过对 `module.exports` 或 `exports` 的属性赋值来达到暴露模块对象的目的

### es6 模块 CommonJS、AMD、CMD

1. `CommonJS` 的规范中，每个 `JavaScript` ⽂件就是⼀个独立的模块上下⽂ ( `module context` )， 在这个上下⽂中默认创建的属性都是私有的 。也就是说，在⼀个⽂件定义的变量 ( 还包括函数和类)， 都是私有的，对其他⽂件是不可⻅的。
2. `CommonJS` 是同步加载模块,在浏览器中会出现堵塞情况，所以不适用
3. `AMD` 异步， 需要定义回调 `define` ⽅式
4. `es6` ⼀个模块就是⼀个独立的⽂件，该⽂件内部的所有变量，外部⽆法获取 。如果你希望外部能够读取模块内部的某个变量，就必须使用 `export` 关键字输出该变量 `es6` 还可以导出类 、⽅法， 自动适用严格模式

## 28. 那些操作会造成内存泄漏

1. 内存泄漏指任何对象在您不再拥有或需要它之后仍然存在
2. `setTimeout` 的第⼀个参数使用字符串而非函数的话，会引发内存泄漏
3. 闭包 、控制台日志 、循环 (在两个对象彼此引用且彼此保留时，就会产生⼀个循环)

## 29. web 开发中会话跟踪的方法有哪些

1. `cookie`
2. `session`
3. `url` 重写
4. 隐藏 `input`
5. `ip` 地址

## 30. 介绍 js 的基本数据类型

`Undefined` 、 `Null` 、 `Boolean` 、 `Number` 、 `String`

## 31. 介绍 js 有哪些内置对象

1. `Object` 是 `JavaScript` 中所有对象的父对象
2. 数据封装类对象： `Object` 、 `Array` 、 `Boolean` 、 `Number` 和 `String`
3. 其他对象： `Function` 、 `Arguments` 、 `Math` 、 `Date` 、 `RegExp` 、 `Error`

## 32. 说几条写 JavaScript 的基本规范

1. 不要在同⼀行声明多个变量
2. 请使用 `===/!==` 来比较 `true/false` 或者数值
3. 使用对象字面量替代 `new Array` 这种形式
4. 不要使用全局函数
5. `Switch` 语句必须带有 `default` 分支
6. `If` 语句必须使用大括号
7. `for-in` 循环中的变量 应该使用 `var` 关键字明确限定作用域，从而避免作用域污

## 33. JavaScript 有几种类型的值

1. 栈：原始数据类型 ( `Undefined` ， `Null` ， `Boolean` ， `Number` 、 `String` )
2. 堆：引用数据类型 ( 对象 、数组和函数)
3. 两种类型的区别是：存储位置不同；
4. 原始数据类型直接存储在栈( `stack` )中的简单数据段， 占据空间⼩ 、大⼩固定，属于被频繁使用数据，所以放入栈中存储；
5. 引用数据类型存储在堆( `heap` )中的对象, 占据空间大 、大⼩不固定,如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址 。当解释器寻找引用值时，会首先检索其在栈中的地址， 取得地址后从堆中获得实体
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401081350020.png)

## 34. javascript 创建对象的几种方式

`javascript` 创建对象简单的说,无非就是使用内置对象或各种自定义对象，当然还可以用 `JSON` ；但写法有很多种，也能混合使用

1. 对象字面量的方式

```js
person= { firstname: " Mark" , lastname: " Yun" , age: 2 5 , eyecolor: " black" } ;
```

2. 用 `function` 来模拟无参的构造函数

```js
function Person() {}
var person = new Person(); //定义⼀个function，如果使用new"实例化",该function可
person.name = "Mark";
person.age = "25";
person.work = function () {
  alert(person.name + " hello...");
};
person.work();
```

3. 用 `function` 来模拟参构造函数来实现 ( 用 `this` 关键字定义构造的上下文属性)

```js
function Pet(name, age, hobby) {
  this.name = name; //this作用域： 当前对象
  this.age = age;
  this.hobby = hobby;
  this.eat = function () {
    alert("我叫" + this.name + ",我喜欢" + this.hobby + ",是个程序员");
  };
}
var maidou = new Pet("麦兜", 25, "coding"); //实例化 、创建对象
maidou.eat(); //调用eat方法
```

4. 用工厂方式来创建 ( 内置对象)

```js
var wcDog = new Object();
wcDog.name = "旺财";
wcDog.age = 3;
wcDog.work = function () {
  alert("我是" + wcDog.name + ",汪汪汪......");
};
wcDog.work();
```

5. 用原型方式来创建

```js
function Dog() {}
Dog.prototype.name = "旺财";
Dog.prototype.eat = function () {
  alert(this.name + "是个吃货");
};
var wangcai = new Dog();
wangcai.eat();
```

6. 用混合方式来创建

```js
function Car(name, price) {
  this.name = name;
  this.price = price;
}
Car.prototype.sell = function () {
  alert("我是" + this.name + "，我现在卖" + this.price + "万元");
};
var camry = new Car("凯美瑞", 27);
camry.sell();
```

## 35. eval 是做什么的

1. 它的功能是把对应的字符串解析成 `JS` 代码并运⾏
2. 应该避免使用 `eval` ，不安全，非常耗性能 ( `2` 次，⼀次解析成 `js` 语句，⼀次执⾏)
3. 由 `JSON` 字符串转换为 JSON 对象的时候可以用 `eval` ，`var obj =eval('('+ str +')')`

## 36. null， undefined 的区别

1. `undefined` 表示不存在这个值。
2. `undefined` :是⼀个表示"无"的原始值或者说表示"缺少值"，就是此处应该有⼀个值，但是还没有定义 。当尝试读取时会返回 `undefined`
3. 例如变量被声明了，但没有赋值时，就等于 `undefined`
4. `null` 表示⼀个对象被定义了，值为“空值”
5. `null` : 是⼀个对象(空对象, 没有任何属性和方法)
6. 例如作为函数的参数，表示该函数的参数不是对象；
7. 在验证 `null` 时，⼀定要使用 `===` ， 因为 `==` 无法分别 `null` 和 `undefined`

## 37. ["1", "2", "3"].map(parseInt) 答案是多少

1. `[1, NaN, NaN]` 因为 `parseInt` 需要两个参数 (`val`, `radix`) ， 其中 `radix` 表示解
   析时用的基数。
2. `map` 传了 `3` 个 (`element`, `index`, `array`) ，对应的 `radix` 不合法导致解析失败。

## 38. javascript 代码中的"use strict";是什么意思

`use strict` 是⼀种 `ECMAscript 5` 添加的 (严格) 运⾏模式,这种模式使得 `Javascript` 在更严格的条件下运⾏ ,使 `JS` 编码更加规范化的模式,消除 `Javascript` 语法的⼀些不合理 、不严谨之处，减少⼀些怪异⾏为

## 39. JSON 的了解

1. `JSON(JavaScript Object Notation)` 是⼀种轻量级的数据交换格式
2. 它是基于 `JavaScript` 的⼀个⼦集 。数据格式简单, 易于读写, 占用带宽⼩
3. `JSON` 字符串转换为 `JSON` 对象:

```js
var obj = eval("(" + str + ")");
var obj = str.parseJSON();
var obj = JSON.parse(str);
```

4. `JSON` 对象转换为 `JSON` 字符串：

```js
var last = obj.toJSONString();
var last = JSON.stringify(obj);
```

## 40. js 延迟加载的方式有哪些

`defer` 和 `async` 、动态创建 `DOM` 方式 ( 用得最多) 、按需异步载⼊ `js`

## 41. 同步和异步的区别

1. 同步：浏览器访问服务器请求，用户看得到页面刷新， 重新发请求,等请求完， 页面刷新，新内容出现，用户看到新内容,进⾏下⼀步操作
2. 异步：浏览器访问服务器请求，用户正常操作， 浏览器后端进⾏请求 。等请求完， 页面不刷新，新内容也会出现，用户看到新内容

## 42. 渐进增强和优雅降级

1. 渐进增强 ：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果 、交互等改进和追加功能达到更好的用户体验。
2. 优雅降级 ：⼀开始就构建完整的功能，然后再针对低版本浏览器进行兼容

## 43. defer 和 async

1. `defer` 并行加载 `js` 文件，会按照页面上 `script` 标签的顺序执行
2. `async` 并行加载 `js` 文件，下载完成立即执行，不会按照页面上 `script` 标签的顺序执行

## 44. 说说严格模式的限制

1. 变量必须声明后再使用
2. 函数的参数不能有同名属性， 否则报错
3. 不能使用 `with` 语句
4. 禁止 `this` 指向全局对象

## 45. attribute 和 property 的区别是什么

1. `attribute` 是 `dom` 元素在文档中作为 `html` 标签拥有的属性；
2. `property` 就是 `dom` 元素在 `js` 中作为对象拥有的属性。
3. 对于 `html` 的标准属性来说， `attribute` 和 `property` 是同步的， 是会自动更新的
4. 但是对于自定义的属性来说，他们是不同步的

## 46. 谈谈你对 ES6 的理解

1. 新增模板字符串 ( 为 `JavaScript` 提供了简单的字符串插值功能)
2. 箭头函数
3. `for-of` ( 用来遍历数据——例如数组中的值。)
4. `arguments` 对象可被不定参数和默认参数完美代替。
5. `ES6` 将 `promise` 对象纳⼊规范，提供了原生的 `Promise` 对象。
6. 增加了 `let` 和 `const` 命令，用来声明变量。
7. 增加了块级作用域
8. `let` 命令实际上就增加了块级作用域
9. 还有就是引⼊ `module` 模块的概念

## 47. ECMAScript6 怎么写 class 么

1. 这个语法糖可以让有 `OOP` 基础的⼈更快上⼿ `js` ， 至少是⼀个官方的实现了
2. 但对熟悉 `js` 的⼈来说， 这个东⻄没啥大影响；⼀个 `Object.creat()` 搞定继承， 比 `class` 简洁清晰的多

## 48. 什么是面向对象编程及面向过程编程， 它们的异同和优缺点

1. 面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤⼀步⼀步实现，使用的时候⼀个⼀个依次调用就可以了
2. 面向对象是把构成问题事务分解成各个对象， 建立对象的目的不是为了完成⼀个步骤， 而是为了描叙某个事物在整个解决问题的步骤中的⾏为
3. 面向对象是以功能来划分问题， 而不是步骤

## 49. 面向对象编程思想

1. 基本思想是使用对象， 类， 继承， 封装等基本概念来进⾏程序设计
2. 优点：

   - 易维护，采用面向对象思想设计的结构， 可读性高， 由于继承的存在， 即使改变需求，那么维护也只是在局部模块，所以维护起来是非常方便和较低成本的
   - 易扩展
   - 开发⼯作的重用性 、继承性高， 降低重复⼯作量。
   - 缩短了开发周期

## 50. 对 web 标准、可用性、可访问性的理解

1. 可用性 (`Usability`)： 产品是否容易上⼿ ，用户能否完成任务，效率如何， 以及这过程中用户的主观感受可好， 是从用户的⻆度来看产品的质量 。可用性好意味着产品质量高， 是企业的核⼼竞争⼒
2. 可访问性 (`Accessibility`)： Web 内容对于残障用户的可阅读和可理解性
3. 可维护性 (`Maintainability`)：⼀般包含两个层次，⼀ 是当系统出现问题时，快速定位并解决问题的成本，成本低则可维护性好 。⼆是代码是否容易被⼈理解， 是否容易修改和增强功能。

## 51. 如何通过 JS 判断⼀个数组

1.  `instanceof` 方法

    - `instanceof` 运算符是用来测试⼀个对象是否在其原型链原型构造函数的属性

    ```js
    var arr = [];
    arr instanceof Array; // true
    ```

2.  `constructor` 方法

    - `constructor` 属性返回对创建此对象的数组函数的引用，就是返回对象相对应的构造函数

    ```js
    var arr = [];
    arr.constructor == Array; //true
    ```

3.  最简单的方法

    - 这种写法， 是 `jQuery` 正在使用的

    ```js
    Object.prototype.toString.call(value) == "[object Array]";
    // 利用这个方法 ， 可以写⼀个返回数据类型的方法
    var isType = function (obj) {
      return Object.prototype.toString.call(obj).slice(8, -1);
    };
    ```

4.  `ES5` 新增方法 `isArray()`

    ```js
    var a = new Array(123);
    var b = new Date();
    console.log(Array.isArray(a)); //true
    console.log(Array.isArray(b)); //false
    ```

## 52. 谈⼀谈 let 与 var 的区别

1. `let` 命令不存在变量提升， 如果在 `let` 前使用，会导致报错
2. 如果块区中存在 `let` 和 `const` 命令，就会形成封闭作用域
3. 不允许重复声明， 因此，不能在函数内部重新声明参数

## 53. map 与 forEach 的区别

1. `forEach` 方法， 是最基本的方法，就是遍历与循环， 默认有 3 个传参：分别是遍历的数组内容 `item` 、数组索引 `index` 、和当前遍历数组 `Array`
2. `map` 方法， 基本用法与 `forEach` ⼀致，但是不同的， 它会返回⼀个新的数组，所以在 callback 需要有 `return` 值， 如果没有，会返回 `undefined`

## 54. 谈⼀谈你理解的函数式编程

1. 简单说， "函数式编程"是⼀种"编程范式" ( programming paradigm)， 也就是如何编写程序的方法论
2. 它具有以下特性： 闭包和高阶函数 、惰性计算 、递归 、函数是"第⼀等公民"、只用"表达式"

## 55. 谈⼀谈箭头函数与普通函数的区别？

1. 函数体内的 `this` 对象，就是定义时所在的对象， 而不是使用时所在的对象
2. 不可以当作构造函数，也就是说，不可以使用 `new` 命令， 否则会抛出⼀个错误
3. 不可以使用 `arguments` 对象，该对象在函数体内不存在 。如果要用， 可以用 `Rest` 参数代替
4. 不可以使用 `yield` 命令， 因此箭头函数不能用作 `Generator` 函数

## 56. 谈⼀谈函数中 this 的指向

1. `this` 的指向在函数定义的时候是确定不了的， 只有函数执⾏的时候才能确定 `this` 到底指向谁， 实际上 `this` 的最终指向的是那个调用它的对象
2. `《javascript语⾔精髓》` 中大概概括了 4 种调用方式：

   - 方法调用模式
   - 函数调用模式
   - 构造器调用模式
   - apply/call 调用模式

## 57. 异步编程的实现方式

1. 回调函数

   - 优点：简单 、容易理解
   - 缺点：不利于维护，代码耦合高

2. 事件监听(采用时间驱动模式， 取决于某个事件是否发生)：

   - 优点：容易理解， 可以绑定多个事件，每个事件可以指定多个回调函数
   - 缺点：事件驱动型， 流程不够清晰

3. 发布/订阅(观察者模式)

   - 类似于事件监听，但是可以通过‘消息中心 ʼ， 了解现在有多少发布者， 多少订阅者

4. Promise 对象

   - 优点：可以利用 then 方法， 进行链式写法；可以书写错误时的回调函数；
   - 缺点：编写和理解，相对比较难

5. Generator 函数

   - 优点： 函数体内外的数据交换 、错误处理机制
   - 缺点：流程管理不方便

6. async 函数

   - 优点： 内置执行器 、更好的语义 、更广的适用性 、返回的是 Promise、结构清晰。
   - 缺点：错误处理机制

## 58. 对原生 Javascript 了解程度

数据类型 、运算 、对象 、`Function`、继承 、闭包 、作用域 、原型链 、事件 、 `RegExp` 、 `JSON` 、 `Ajax` 、 `DOM` 、 `BOM` 、内存泄漏 、跨域 、异步装载 、模板引擎 、前端 MVC 、路由 、模块化 、 `Canvas` 、 `ECMAScript`

## 59. Js 动画与 CSS 动画区别及相应实现

1. `CSS3` 的动画的优点

   - 在性能上会稍微好⼀些， 浏览器会对 CSS3 的动画做⼀些优化
   - 代码相对简单

2. 缺点

   - 在动画控制上不够灵活
   - 兼容性不好

3. `JavaScript` 的动画正好弥补了这两个缺点，控制能⼒很强， 可以单帧的控制 、变换， 同时写得好完全可以兼容 `IE6` ， 并且功能强大 。对于⼀些复杂控制的动画，使用 `javascript` 会比较靠谱 。而在实现⼀些⼩的交互动效的时候，就多考虑考虑 `CSS` 吧

## 60. JS 数组和对象的遍历方式， 以及几种方式的比较

通常我们会用循环的⽅式来遍历数组 。但是循环是导致 `js` 性能问题的原因之⼀ 。⼀般我们会采用下⼏种⽅式来进行数组的遍历

1. `for in` 循环
2. `for` 循环
3. `forEach`

   - 这里的 `forEach` 回调中两个参数分别为 `value` ， `index`
   - `forEach` ⽆法遍历对象
   - `IE` 不⽀持该⽅法； `Firefox` 和 `chrome` ⽀持
   - `forEach` ⽆法使用 `break` ， `continue` 跳出循环，且使用 `return` 是跳过本次循环

4. 前两种⽅法应该⾮常常见且使用很频繁 。但实际上， 这两种⽅法都存在性能问题

   - 在⽅式 1 中， `for-in` 需要分析出 `array` 的每个属性， 这个操作性能开销很大 。用在 `key` 已知的数组上是⾮常不划算的 。所以尽量不要用 `for-in` ， 除⾮你不清楚要处理哪些属性，例如 `JSON` 对象这样的情况
   - 在⽅式 2 中，循环每进行⼀次，就要检查⼀下数组⻓度 。读取属性 ( 数组⻓度) 要比读局部变量慢， 尤其是当 `array` 里存放的都是 `DOM` 元素， 因为每次读取都会扫描⼀遍⻚⾯上的选择器相关元素， 速度会大大降低

## 61. gulp 是什么

1. `gulp` 是前端开发过程中⼀种基于流的代码构建⼯具， 是自动化项目的构建利器；它不仅能对网站资源进行优化， 而且在开发过程中很多重复的任务能够使用正确的⼯具自动完成
2. `Gulp` 的核⼼概念：流。流， 简单来说就是建立在面向对象基础上的⼀种抽象的处理数据的⼯具 。在流中，定义了⼀些处理数据的基本操作， 如读取数据， 写⼊数据等，程序员是对流进⾏所有操作的， 而不用关⼼流的另⼀头数据的真正流向
3. `gulp` 正是通过流和代码优于配置的策略来尽量简化任务编写的⼯作
4. `Gulp` 的特点：

   - 易于使用：通过代码优于配置的策略，gulp 让简单的任务简单， 复杂的任务可管理
   - 构建快速 利用 `Node.js` 流的威⼒ ，你可以快速构建项目并减少频繁的 `IO` 操作
   - 易于学习 通过最少的 `API` ， 掌握 `gulp` 毫不费⼒ ，构建⼯作尽在掌握：如同⼀系列流管道

## 62. 说⼀下 Vue 的双向绑定数据的原理

`vue.js` 则是采用数据劫持结合发布者-订阅者模式的⽅式， 通过 `Object.defineProperty()` 来劫持各个属性的 `setter` ， `getter` ，在数据变动时发布消息给订阅者，触发相应的监听回调

## 63. 事件的各个阶段

1. `1` ：捕获阶段 ---> `2`： 目标阶段 ---> `3`： 冒泡阶段
2. `document` ---> `target` 目标 ----> `document`
3. 由此， `addEventListener` 的第三个参数设置为 `true` 和 `false` 的区别已经非常清晰了

   - `true` 表示该元素在事件的“捕获阶段” ( 由外往内传递时) 响应事件
   - `false` 表示该元素在事件的“冒泡阶段” ( 由内向外传递时) 响应事件

## 64. let var const

### let

- 允许你声明⼀个作用域被限制在块级中的变量 、语句或者表达式
- `let` 绑定不受变量提升的约束， 这意味着 `let` 声明不会被提升到当前
- 该变量处于从块开始到初始化处理的“暂存死区”

### var

- 声明变量的作用域限制在其声明位置的上下⽂中， 而非声明变量总是全局的
- 由于变量声明 ( 以及其他声明) 总是在任意代码执⾏之前处理的，所以在代码中的任意位置声明变量总是等效于在代码开头声明

### const

- 声明创建⼀个值的只读引用 (即指针)
- 基本数据当值发生改变时，那么其对应的指针也将发生改变， 故造成 `const` 申明基本数据类型时
- 再将其值改变时，将会造成报错， 例如 `const a = 3` ; `a = 5` 时 将会报错
- 但是如果是复合类型时， 如果只改变复合类型的其中某个 `Value` 项时， 将还是正常使用

## 65. 快速的让⼀个数组乱序

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function () {
  return Math.random() - 0.5;
});
console.log(arr);
```

## 66. 如何渲染几万条数据并不卡住界面

这道题考察了如何在不卡住页面的情况下渲染数据，也就是说不能⼀次性将⼏万条都渲染出来， 而应该⼀次渲染部分 `DOM` ，那么就可以通过 `requestAnimationFrame` 来每 `16ms` 刷新⼀次

```html
< ! DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      控件
    </ul>
    <script>
      setTimeout(() => {
        // 插⼊十万条数据
        const total = 100000;
        // ⼀次插⼊ 20 条，如果觉得性能不好就减少
        const once = 20;
        // 渲染数据总共需要⼏次
        const loopCount = total / once;
        let countOfRender = 0;
        let ul = document.querySelector("ul");
        function add() {
          // 优化性能，插入不会造成回流
          const fragment = document.createDocumentFragment();
          for (let i = 0; i < once; i++) {
            const li = document.createElement("li");
            li.innerText = Math.floor(Math.random() * total);
            fragment.appendChild(li);
          }
          ul.appendChild(fragment);
          countOfRender += 1;
          loop();
        }
        function loop() {
          if (countOfRender < loopCount) {
            window.requestAnimationFrame(add);
          }
        }
        loop();
      }, 0);
    </script>
  </body>
</html>
```

## 67. 希望获取到页面中所有的 checkbox 怎么做？

> 不使用第三方框架

```js
var domList = document.getElementsByTagName("input");
var checkBoxList = [];
var len = domList.length; //缓存到局部变量
while (len--) {
  //使用while的效率会比for循环更高
  if (domList[len].type == "checkbox") {
    checkBoxList.push(domList[len]);
  }
}
```

## 68. 怎样添加、移除、移动、复制、创建和查找节点

1. 创建新节点

```js
createDocumentFragment(); //创建⼀个DOM片段
createElement(); //创建⼀个具体的元素
createTextNode(); //创建⼀个文本节点
```

2. 添加、移除、替换、插入

```js
appendChild(); //添加
removeChild(); //移除
replaceChild(); //替换
insertBefore(); //插入
```

3. 查找

```js
getElementsByTagName(); //通过标签名称
getElementsByName(); //通过元素的Name属性的值
getElementById(); //通过元素Id， 唯⼀性
```

## 69. 正则表达式

正则表达式构造函数 `var reg=new RegExp(“xxx”)` 与正则表达字面量 `var reg=//` 有什么不同？ 匹配邮箱的正则表达式？

当使用 `RegExp()` 构造函数的时候，不仅需要转义引号 ( 即 `\` ”表示”)， 并且还需要双反斜杠 ( 即 `\\` 表示⼀个 `\` ) 。使用正则表达字面量的效率更高

## 70. Javascript 中 callee 和 caller 的作用？

1. `caller` 是返回⼀个对函数的引用，该函数调用了当前函数；
2. `callee` 是返回正在被执行的 `function` 函数，也就是所指定的 `function` 对象的正文

> 那么问题来了？如果⼀对兔子每月生⼀对兔子；⼀对新生兔，从第二个月起就开始生兔子；假定每对兔子都是⼀雌⼀雄，试问⼀对兔子， 第 n 个月能繁殖成多少对兔子？(使用 `callee` 完成)

```js
var result = [];
function fn(n) {
  //典型的斐波那契数列
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 1;
  } else {
    if (result[n]) {
      return result[n];
    } else {
      //argument.callee()表示fn()
      result[n] = arguments.callee(n - 1) + arguments.callee(n - 2);
      return result[n];
    }
  }
}
```

## 71. window.onload 和$(document).ready

> 原生 `JS` 的 `window.onload` 与 `Jquery` 的 `$(document).ready(function(){})` 有什么不同？如何用原生 `JS` 实现 `Jq` 的 `ready` 方法？

1. `window.onload()` 方法是必须等到页面内包括图片的所有元素加载完毕后才能执行。
2. `$(document).ready()` 是 DOM 结构绘制完毕后就执行，不必等到加载完毕

```js
function ready(fn) {
  if (document.addEventListener) {
    //标准浏览器
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        //注销时间，避免重复触发
        document.removeEventListener(
          "DOMContentLoaded",
          arguments.callee,
          false
        );
        fn(); //运行函数
      },
      false
    );
  } else if (document.attachEvent) {
    //IE浏览器
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") {
        document.detachEvent("onreadystatechange", arguments.callee);
        fn(); //函数运行
      }
    });
  }
}
```

## 72. addEventListener()和 attachEvent()的区别

1. `addEventListener()` 是符合 W3C 规范的标准方法; `attachEvent()` 是 IE 低版本的非标准方法
2. `addEventListener()` 支持事件冒泡和事件捕获; 而 `attachEvent()` 只支持事件冒泡
3. `addEventListener()` 的第⼀个参数中,事件类型不需要添加 `on` ; `attachEvent()` 需要添加 `'on'`
4. 如果为同⼀个元素绑定多个事件, `addEventListener()` 会按照事件绑定的顺序依次执行, `attachEvent()` 会按照事件绑定的顺序倒序执行

## 73. 获取页面所有的 checkbox

```js
var resultArr = [];
var input = document.querySelectorAll("input");
for (var i = 0; i < input.length; i++) {
  if (input[i].type == "checkbox") {
    resultArr.push(input[i]);
  }
}
//resultArr即中获取到了页面中的所有checkbox
```

## 74. 数组去重方法总结

1. 利用 `ES6` `Set` 去重 ( `ES6` 中最常用)

`Set` 对象是 `ES6` 中新定义的数据结构，类似数组，它允许存储任何类型的唯一值，不管是原始值还是对象引用。

`Array.from()`方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组

```js
function unqiue(arr) {
  return Array.from(new Set(arr));
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unqiue(arr));
//1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}
```

不考虑兼容性，这种去重的方式代码最少。这种方法无法去掉{}空对象，后面的高阶方法会添加去掉重复“{}”的方法。

2. […new Set(arr)]
   `剩余参数语法`允许将一个不定数量的参数表示为一个数组

```js
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
var Arr = [...new Set(arr)];
console.log(Arr);
//1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}
```

3. 利用`for`嵌套 `for` ，然后 `splice` 去重 ( `ES5` 中最常用)

`splice()`方法可删除从第一个参数处开始的零个或多个元素，且用参数列表中声明的一个或多个值来替换那些被删除的元素

```js
function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        //第一个等同于第二个，splice方法删除第二个
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
//[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了
```

- 双层循环，外层循环元素， 内层循环时比较值 。值相同时，则删去这个值。

4. 利用`indexOf`去重

`indexOf()`方法可返回某个指定的字符串值在字符串中首次出现的位置

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  var Arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (Arr.indexOf(arr[i]) === -1) {
      Arr.push(arr[i]);
    }
  }
  return Arr;
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
// [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重
```

5. 利用`sort()`

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  arr = arr.sort();
  var Arr = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      Arr.push(arr[i]);
    }
  }
  return Arr;
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
// [0, 1, 15, "NaN", NaN, NaN, {…}, {…}, "a", false, null, true, "true", undefined]      //NaN、{}没有去重
```

6. 利用对象的属性不能相同的特点去重（这种数组去重的方法有问题，不建议用，有待改进）

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  var Arr = [];
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      Arr.push(arr[i]);
      obj[arr[i]] = 1;
      console.log(obj[arr[i]]);
    } else {
      obj[arr[i]]++;
      console.log(obj[arr[i]]);
    }
  }
  return Arr;
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
//[1, "true", 15, false, undefined, null, NaN, 0, "a", {…}] //两个true直接去掉了，NaN和{}去重
```

7. 利用`includes`

`includes()` 方法用来判断一个数组是否包含一个指定的值，如果是返回 `true` ，否则 `false` 。

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  var Arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!Arr.includes(arr[i])) {
      //includes 检测数组是否有某个值
      Arr.push(arr[i]);
    }
  }
  return Arr;
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}] //{}没有去重
```

8. 利用 `hasOwnProperty` 判断是否存在对象属性

`Object`的`hasOwnProperty()`方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。`filter()`方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素

```js
function unique(arr) {
  var obj = {};
  return arr.filter(function (item, index, arr) {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}] //所有的都去重了
```

9. 利用`filter`

```js
function unique(arr) {
  return arr.filter(function (item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
//[1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {…}, {…}]
```

10. 利用递归去重

```js
function unique(arr) {
  var array = arr;
  var len = array.length;

  array.sort(function (a, b) {
    //排序后更加方便去重
    return a - b;
  });

  function loop(index) {
    if (index >= 1) {
      if (array[index] === array[index - 1]) {
        array.splice(index, 1);
      }
      loop(index - 1); //递归loop，然后数组去重
    }
  }
  loop(len - 1);
  return array;
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaNaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
//[1, "true", false, null, 0, true, 15, NaN, NaN, "NaN", "a", {…}, {…}, undefined]
```

11. 利用`Map`数据结构去重
    `map()`方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

```js
function unique(arr) {
  let map = new Map();
  let array = new Array(); // 数组用于返回结果
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      // 如果有该key值
      map.set(arr[i], true);
    } else {
      map.set(arr[i], false); // 如果没有该key值
      array.push(arr[i]);
    }
  }
  return array;
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaNNaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]
```

创建一个空 `Map` 数据结构，遍历需要去重的数组，把数组的每一个元素作为 `key` 存到 `Map` 中。由于 `Map` 中不会出现相同的 `key` 值，所以最终得到的就是去重后的结果。

12. 利用`reduce` + `includes`

`reduce()`方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。`includes()`方法用来判断一个数组是否包含一个指定的值，如果是返回`true`,否则`false`。

```js
function unique(arr) {
  return arr.reduce(
    (prev, cur) => (prev.includes(cur) ? prev : [...prev, cur]),
    []
  );
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaNNaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]
```

## 75. 想实现⼀个对页面某个节点的拖曳？如何做？ (使用原生 JS)

1. 给需要拖拽的节点绑定 `mousedown` , `mousemove` , `mouseup` 事件
2. `mousedown` 事件触发后， 开始拖拽
3. `mousemove` 时， 需要通过 `event.clientX` 和 `clientY` 获取拖拽位置， 并实时更新位置
4. `mouseup` 时，拖拽结束

需要注意浏览器边界的情况

## 76. Javascript 全局函数和全局变量

### 全局变量

1. `Infinity` 代表正的无穷大的数值。
2. `NaN` 指示某个值是不是数字值。
3. `undefined` 指示未定义的值。

### 全局函数

1. `decodeURI()` 解码某个编码的 `URI` 。
2. `decodeURIComponent()` 解码⼀个编码的 `URI` 组件。
3. `encodeURI()` 把字符串编码为 `URI` 。
4. `encodeURIComponent()` 把字符串编码为 `URI` 组件。
5. `escape()` 对字符串进行编码。
6. `eval()` 计算 `JavaScript` 字符串， 并把它作为脚本代码来执行。
7. `isFinite()` 检查某个值是否为有穷大的数。
8. `isNaN()` 检查某个值是否是数字。
9. `Number()` 把对象的值转换为数字。
10. `parseFloat()` 解析⼀个字符串并返回⼀个浮点数。
11. `parseInt()` 解析⼀个字符串并返回⼀个整数。
12. `String()` 把对象的值转换为字符串。
13. `unescape()` 对由 `escape()` 编码的字符串进行解码

## 77. 使用 js 实现⼀个持续的动画效果

1. 定时器思路

```js
var e = document.getElementById("e");
var flag = true;
var left = 0;
setInterval(() => {
  left == 0 ? (flag = true) : left == 100 ? (flag = false) : "";
  flag ? (e.style.left = ` ${left++}px`) : (e.style.left = ` ${left--}px`);
}, 1000 / 60);
```

2. requestAnimationFrame

```js
//兼容性处理
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
var e = document.getElementById("e");
var flag = true;
var left = 0;
function render() {
  left == 0 ? (flag = true) : left == 100 ? (flag = false) : "";
  flag ? (e.style.left = ` ${left++}px`) : (e.style.left = ` ${left--}px`);
}
(function animloop() {
  render();
  requestAnimFrame(animloop);
})();
```

3. 使用 css 实现⼀个持续的动画效果

```css
animation: mymove 5 s infinite;
@keyframes mymove {
  from {
    top: 0px;
  }
  to {
    top: 200px;
  }
}
```

- `animation-name` 规定需要绑定到选择器的 `keyframe` 名称。
- `animation-duration` 规定完成动画所花费的时间， 以秒或毫秒计。
- `animation-timing-function` 规定动画的速度曲线。
- `animation-delay` 规定在动画开始之前的延迟。
- `animation-iteration-count` 规定动画应该播放的次数。
- `animation-direction` 规定是否应该轮流反向播放动画

## 78. 封装⼀个函数，参数是定时器的时间， .then 执行回调函数

```js
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
```

## 79. 怎么判断两个对象相等？

```js
obj = {
  a: 1,
  b: 2,
};
obj2 = {
  a: 1,
  b: 2,
};
obj3 = {
  a: 1,
  b: "2",
};
```

可以转换为字符串来判断

```js
JSON. stringify( obj) = = JSON. stringify( obj2 ) ; / / true
JSON.stringify(obj)==JSON.stringify(obj3);//false
```

## 80. 项目做过哪些性能优化？

1. 减少 `HTTP` 请求数
2. 减少 `DNS` 查询
3. 使用 `CDN`
4. 避免重定向
5. 图片懒加载
6. 减少 `DOM` 元素数量
7. 减少 `DOM` 操作
8. 使用外部 `JavaScript` 和 `CSS`
9. 压缩 `JavaScript` 、 `CSS` 、字体 、图片等
10. 优化 `CSS Sprite`
11. 使用 `iconfont`
12. 字体裁剪
13. 多域名分发划分内容到不同域名
14. 尽量减少 `iframe` 使用
15. 避免图片 `src` 为空
16. 把样式表放在 `link` 中
17. 把 `JavaScript` 放在页面底部

## 81. 浏览器缓存

浏览器缓存分为强缓存和协商缓存 。当客户端请求某个资源时， 获取缓存的流程如下:

1. 先根据这个资源的⼀些 `http header` 判断它是否命中强缓存， 如果命中，则直接从本地获取缓存资源，不会发请求到服务器；
2. 当强缓存没有命中时，客户端会发送请求到服务器， 服务器通过另⼀些 `request header` 验证这个资源是否命中协商缓存，称为 `http` 再验证， 如果命中， 服务器将请求返回，但不返回资源， 而是告诉客户端直接从缓存中获取，客户端收到返回后就会从缓存中获取资源；
3. 强缓存和协商缓存共同之处在于， 如果命中缓存， 服务器都不会返回资源； 区别是， 强缓存不对发送请求到服务器，但协商缓存会。
4. 当协商缓存也没命中时， 服务器就会将资源发送回客户端。
5. 当 `ctrl+f5` 强制刷新网页时， 直接从服务器加载，跳过强缓存和协商缓存；
6. 当 f5 刷新网页时，跳过强缓存，但是会检查协商缓存；

### 强缓存

- `Expires` ( 该字段是 `http1.0` 时的规范，值为⼀个绝对时间的 `GMT` 格式的时间字符串，代表缓存资源的过期时间)
- `Cache-Control:max-age` ( 该字段是 `http1.1` 的规范， 强缓存利用其 `max-age` 值来判断缓存资源的最大生命周期， 它的值单位为秒)

### 协商缓存

- `Last-Modified` ( 值为资源最后更新时间， 随服务器 `response` 返回)
- `If-Modified-Since` ( 通过比较两个时间来判断资源在两次请求期间是否有过修改， 如果没有修改，则命中协商缓存)
- `ETag` (表示资源内容的唯⼀标识， 随服务器 `response` 返回)
- `If-None-Match` ( 服务器通过比较请求头部的 `If-None-Match` 与当前资源的 `ETag` 是否⼀致来判断资源是否在两次请求之间有过修改， 如果没有修改，则命中协商缓存)

## 82. WebSocket

由于 `http` 存在⼀个明显的弊端 ( 消息只能有客户端推送到服务器端， 而服务器端不能主动推送到客户端)， 导致如果服务器如果有连续的变化， 这时只能使用轮询， 而轮询效率过低， 并不适合 。于是 `WebSocket` 被发明出来

相比与 `http` 具有以下有点:

1. ⽀持双向通信， 实时性更强；
2. 可以发送⽂本，也可以⼆进制⽂件；
3. 协议标识符是 `ws` ，加密后是 `wss` ；
4. 较少的控制开销 。连接创建后， `ws` 客户端 、服务端进行数据交换时，协议控制的数据包头部较⼩ 。在不包含头部的情况下， 服务端到客户端的包头只有 `2~10` 字节 ( 取决于数据包长度)， 客户端到服务端的的话， 需要加上额外的 4 字节的掩码 。而 `HTTP` 协议每次通信都需要携带完整的头部；
5. ⽀持扩展 。 `ws` 协议定义了扩展，用户可以扩展协议， 或者实现自定义的⼦协议 。 ( 比如⽀持自定义压缩算法等)
6. ⽆跨域问题。

实现比较简单， 服务端库如 `socket.io` 、 `ws` ， 可以很好的帮助我们⼊门。而客户端也只需要参照 `api` 实现即可

## 83. 尽可能多的说出你对 Electron 的理解

最最重要的⼀点， `electron` 实际上是⼀个套了 `Chrome` 的 `nodeJS` 程序

所以应该是从两个方面说开来

1. `Chrome` ( ⽆各种兼容性问题)；
2. `NodeJS` ( `NodeJS` 能做的它也能做)

## 84. 深浅拷贝

### 浅拷贝

1. `Object.assign`
2. 或者展开运算符

### 深拷贝

可以通过 `JSON.parse(JSON.stringify(object))` 来解决

```js
let a = {
  age: 1,
  jobs: {
    first: "FE",
  },
};
let b = JSON.parse(JSON.stringify(a));
a.jobs.first = "native";
console.log(b.jobs.first); // FE
```

该方法也是有局限性的

> 会忽略 undefined
>
> 不能序列化函数
>
> 不能解决循环引用的对象

## 85. 防抖/节流

### 防抖

在滚动事件中需要做个复杂计算或者实现⼀个按钮的防⼆次点击操作 。可以通过函数防抖动来实现

1. 整体函数实现

```js
// 使用 underscore 的源码来解释防抖动
/**
* underscore 防抖函数， 返回函数连续调用时， 空闲时间必须大于或等于 wait， func 才会执行
*
* @param {function} func
* @param {number} wait
* @param {boolean} immediate
* @return {function}
回调函数
表示时间窗口的间隔
设置为ture时，是否立即调用函数
返回客户调用函数
*/
_.debounce = function (func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  var later = function () {
    // 现在和上⼀次时间戳比较
    var last = _.now() - timestamp;
    // 如果当前间隔时间少于设定时间且大于0就重新设置定时器
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      // 否则的话就是时间到了执行回调函数
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };
  return function () {
    context = this;
    args = arguments;
    // 获得时间戳
    timestamp = _.now();
    // 如果定时器不存在且立即执行函数
    var callNow = immediate && !timeout;
    // 如果定时器不存在就创建⼀个
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      // 如果需要立即执行函数的话 通过 apply 执行
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
};
```

2. 对于按钮防点击来说的实现

   - 开始⼀个定时器， 只要我定时器还在，不管你怎么点击都不会执行回调函数 。⼀旦定时器结束并设置为 `null`，就可以再次点击了
   - 对于延时执行函数来说的实现：每次调用防抖动函数都会判断本次调用和之前的时间间隔， 如果小于需要的时间间隔，就会重新创建⼀个定时器， 并且定时器的延时为设定时间减去之前的时间间隔 。⼀旦时间到了，就会执行相应的回调函数

### 节流

防抖动和节流本质是不⼀样的 。防抖动是将多次执行变为最后⼀次执行， 节流是将多次执行变成每隔⼀段时间执行

```js
/**
 * underscore 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      回调函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始函数的的调用，传入{leading: false}。
 *                                如果想忽略结尾函数的调用，传入{trailing: false}
 *                                两者不能共存，否则函数不能执行
 * @return {function}             返回客户调用函数
 */
_.throttle = function (func, wait, options) {
  var context, args, result;
  var timeout = null;
  // 之前的时间戳
  var previous = 0;
  // 如果 options 没传则设为空对象
  if (!options) options = {};
  // 定时器回调函数
  var later = function () {
    // 如果设置了 leading，就将 previous 设为 0
    // 用于下面函数的第一个 if 判断
    previous = options.leading === false ? 0 : _.now();
    // 置空一是为了防止内存泄漏，二是为了下面的定时器判断
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function () {
    // 获得当前时间戳
    var now = _.now();
    // 首次进入前者肯定为 true
    // 如果需要第一次不执行函数
    // 就将上次时间戳设为当前的
    // 这样在接下来计算 remaining 的值时会大于0
    if (!previous && options.leading === false) previous = now;
    // 计算剩余时间
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 如果当前调用已经大于上次调用时间 + wait
    // 或者用户手动调了时间
    // 如果设置了 trailing，只会进入这个条件
    // 如果没有设置 leading，那么第一次会进入这个条件
    // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个 if 条件了
    // 其实还是会进入的，因为定时器的延时
    // 并不是准确的时间，很可能你设置了2秒
    // 但是他需要2.2秒才触发，这时候就会进入这个条件
    if (remaining <= 0 || remaining > wait) {
      // 如果存在定时器就清理掉否则会调用二次回调
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      // 判断是否设置了定时器和 trailing
      // 没有的话就开启一个定时器
      // 并且不能不能同时设置 leading 和 trailing
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};
```

## 86. 谈谈变量提升？

当执⾏ `JS` 代码时，会生成执⾏环境， 只要代码不是写在函数中的，就是在全局执⾏环境中， 函数中的代码会产生函数执⾏环境， 只此两种执⾏环境

接下来让我们看⼀个老生常谈的例子， `var`

```js
b(); // call b
console.log(a); // undefined
var a = "Hello world";
function b() {
  console.log("call b");
}
```

想必以上的输出大家肯定都已经明白了，这是因为函数和变量提升的原因。通常提升的解释是说将声明的代码移动到了顶部，这其实没有什么错误，便于大家理解。但是更准确的解释应该是：在生成执行环境时，会有两个阶段。第一个阶段是创建的阶段， `JS` 解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，变量只声明并且赋值为 `undefined` ，所以在第二个阶段，也就是代码执行阶段，我们可以直接提前使用。 在提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升

```js
b(); // call b second
function b() {
  console.log("call b fist");
}
function b() {
  console.log("call b second");
}
var b = "Hello world";
```

`var` 会产生很多错误，所以在 `ES6` 中引入了 `let` 。 `let` 不能在声明前使用，但是这并不是常说的 `let` 不会提升， `let` 提升了，在第一阶段内存也已经为他开辟好了空间，但是因为这个声明的特性导致了并不能在声明前使用。

## 87. 什么是单线程，和异步的关系

1. 单线程 —— 只有⼀个线程， 只能做⼀件事
2. 原因 —— 避免 DOM 渲染的冲突

   - 浏览器需要渲染 `DOM`
   - `JS` 可以修改 `DOM` 结构
   - `JS` 执行的时候， 浏览器 `DOM` 渲染会暂停
   - 两段 `JS` 也不能同时执行 (都修改 `DOM` 就冲突了)
   - `webworker` 支持多线程，但是不能访问 `DOM`

3. 解决方案 —— 异步

## 88. 是否用过 jQuery 的 Deferred

使用 jQuery Deferred

```js
//给出一个非常简单的异步操作代码,使用setTimeout函数
var wait = function () {
  var task = function () {
    console.log("完成");
  };
  setTimeout(task, 1000);
};
wait();

//新增需求:要在执行完成之后进行某些特别复杂的操作,代码可能会很多,而且分好几个步骤
function waitHandle() {
  var dtd = $.Deferred(); //创建一个deferred对象

  var wait = function (dtd) {
    var task = function () {
      console.log("执行完成");
      dtd.resolve(); //表示异步任务已完成,reject()表示异步任务失败或者出错
    };
    setTimeout(task, 1000);
    return dtd; //返回一个deferred对象
  };
  //注意,这里一定要有返回值
  return wait(dtd);
}

var w = waitHandle();
w.then(
  function () {
    console.log("ok 1");
  },
  function () {
    console.log("err ");
  }
).then(
  function () {
    console.log("ok 2");
  },
  function () {
    console.log("err 2");
  }
);
//还有w.done w.fail
```

总结`jQuery Deferred`:dtd 的 API 可分成两类,用意不同

- 第一类:dtd.resolve dtd.reject
- 第二类:dtd.then dtd.done dtd.fail

  > 这两类应该分开,否则后果严重!

使用 dtd.promise()

```js
function waitHandle() {
  var dtd = $.Deferred();

  var wait = function (dtd) {
    var task = function () {
      console.log("执行完成");
      dtd.resolve(); //表示异步任务已完成,reject()表示异步任务失败或者出错
    };
    setTimeout(task, 1000);
    return dtd.promise(); //返回一个promise对象
  };

  return wait(dtd);
}

var w = waitHandle(); //经过上面的改动,w接收的是一个promise对象
$.when(w)
  .then(function () {
    console.log("ok 1");
  })
  .then(function () {
    console.log("ok 2");
  });
//w.reject()    执行这句话直接报错
```

## 89. 前端面试之 hybrid

> hybrid 是什么，为何使用 hybrid
>
> 介绍一下 hybrid 更新和上线的流程
>
> hybrid 和 h5 的区别
>
> 前端 JS 和客户端如何通讯

### 一、hybrid 是什么？为何会用 hybrid?

1. hybrid 文字解释

   - hybrid 即“混合”，即前端和客户端的混合开发
   - 需前端开发人员和客户端开发人员配合完成
   - 某些环节也可能涉及到 server 端

2. hybrid 存在的价值

   - 可以快速迭代更新（无需 app 审核，因为 hybrid 是纯前端代码（html，css，js））
   - 体验流程（和 NA 的体验基本类似）
   - 减少开发和沟通成本，双端公用一套代码

3. webview

   - 是 app 种的一个组件（app 可以有 webview，也可以 没有）
   - 用于加载 h5 页面，即一个小型的浏览器内核

4. file 协议

   - 加载本地的东西，快
   - file 协议的构成是 file://后面加上文件在本地的绝对路径。

5. hybrid 的适用场景

   - 使用 NA：体验要求极致，变化不频繁
   - 使用 hybrid：体验要求高，变化频繁
   - 使用 h5：体验无需要求，不常用

6. hybrid 具体实现

   - 前端做好静态页面（html js css），将文件交给客户端
   - 客户端拿到前端静态页面，以文件形式存储在 app 中
   - 客户端在一个 webview 中
   - 使用 file 协议加载静态页面

### 二、hybrid 更新上线流程

要替换每个客户端的静态文件，只能客户端来做，客户端去 server 下载最新的静态文件，我们维护 server 的静态文件。

1. 具体的流程

   - 分版本，有版本号
   - 将静态文件压缩成 zip 包，上传到服务器
   - 客户端每次启动，都去服务端检查版本号
   - 如果服务端版本号大于客户端版本号，就去下载最新的 aip 包，下载完之后解压包，然后将现有文件覆盖

### 三、hybrid 和 h5 的区别

1. hybrid 相比于 h5 的优点

   - 体验更好，跟 NA 体验基本一致
   - 可快速迭代，无需 APP 审核

2. hybrid 相比于 h5 的缺点

   - 开发成本高。联调、测试、查 bug 都比较麻烦
   - 运维成本高。

3. 适用场景

   - hybrid：产品的稳定功能，体验要求高，迭代频繁
   - h5：单次的运营活动（如 xx 红包）或不常用功能

## 90. 前端面试之组件化

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401081609297.jpg)

### 什么是组件化？

前端组件化开发，就是将页面的某一部分独立出来，将这一部分的数据层（M）、视图层（V）和控制层（C）用黑盒的形式全部封装到一个组件内，暴露出一些开箱即用的函数和属性供外部调用。无论这个组件放到哪里去使用，它都具有一样的功能和样式，从而实现复用（只写一处，处处复用），这种整体化的思想就是组件化。

每个组件都是独立的个体，都只负责一块功能。组件之间互相独立，通过特定的方式进行沟通。外部完全不用考虑组件的内部实现逻辑。一个好的前端组件，必须要把维护性，复用性，扩展性，性能做到极致。

## 91. 前端面试之 MVVM 浅析

`MVVM`由 `Model` 、 `View` 、 `ViewModel` 三部分构成

1. `Model` 代表数据模型，也可以在 `Model` 中定义数据修改和业务逻辑；
2. `View` 代表 `UI` 组件，它负责将数据模型转化成 `UI` 展现出来
3. `ViewModel` 是一个同步 `View` 和 `Model` 的对象
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401081615976.webp)

## 92. 实现效果，点击容器内的图标， 图标边框变成 `border: 1px solid red` ，点击空白处重置

```js
const box = document.getElementById("box");
function isIcon(target) {
  return target.className.includes("icon");
}
box.onClick = function (e) {
  e.stopPropagation();
  const target = e.target;
  if (isIcon(target)) {
    target.style.border = "1px solid red";
  }
};
const doc = document;
doc.onclick = function (e) {
  const children = box.children;
  for (let i; i < children.length; i++) {
    if (isIcon(children[i])) {
      children[i].style.border = "none";
    }
  }
};
```

## 93. 请简单实现双向数据绑定 `MVVM`

```html
<input id=" input"/ >
```

```js
const data = {};
const input = document.getElementById("input");
Object.defineProperty(data, "text", {
  set(value) {
    input.value = value;
    this.value = value;
  },
});
input.onChange = function (e) {
  data.text = e.target.value;
};
```

## 94. 实现 `Storage` ，使得该对象为单例， 并对 `localStorage` 进行封装设置值 `setItem(key,value)` 和 `getItem(key)`

```js
var instance = null;
class Storage {
  static getInstance() {
    if (!instance) {
      instance = new Storage();
    } else {
      return instance;
    }
    (setItem = (key, value) => localStorage.setItem(key, value)),
      (getItem = (key) => localStorage.getItem(key));
  }
}
```

## 95. 说说 `event` `loop`

首先， `js` 是单线程的， 主要的任务是处理用户的交互， 而用户的交互无非就是响应 `DOM` 的增删改，使用事件队列的形式，⼀ 次事件循环只处理⼀个事件响应，使得脚本执行相对连续，所以有了事件队列，用来储存待执行的事件，那么事件队列的事件从哪里被 `push` 进来的呢 。那就是另外⼀个线程叫事件触发线程做的事情了，他的作用主要是在定时触发器线程 、异步 `HTTP` 请求线程满足特定条件下的回调函数 `push` 到事件队列中， 等待 `js` 引擎空闲的时候去执行， 当然 js 引擎执行过程中有优先级之分， 首先 js 引擎在⼀次事件循环中，会先执行 js 线程的主任务，然后会去查找是否有微任务 `microtask` ( `promise` ) ， 如果有那就优先执行微任务， 如果没有，在去查找宏任务 `macrotask` ( `setTimeout、setInterval`) 进行执行

## 96. 说说事件流

事件流分为两种，捕获事件流和冒泡事件流

- 捕获事件流从根节点开始执行，⼀ 直往子节点查找执行， 直到查找执行到目标节点
- 冒泡事件流从目标节点开始执行，⼀ 直往父节点冒泡查找执行， 直到查到到根节点

> 事件流分为三个阶段，⼀个是捕获节点，⼀个是处于目标节点阶段，⼀个是冒泡阶段

## 97. 为什么 `canvas` 的图片为什么过有跨域问题

当使用 `<canvas>` 元素绘制来自不同域的图像时，可能会遇到跨域问题。这通常是因为浏览器出于安全考虑，阻止了对其他域的图像资源的访问。为了解决这个问题，可以采取以下方法：

1. 服务器设置 CORS 头部：

   确保图像资源服务器设置了正确的 CORS 头部。服务器应该在响应中包含允许的域名，例如：

```js
"Access-Control-Allow-Origin": "*"
```

或者，你可以指定允许的具体域名：

```js
"Access-Control-Allow-Origin": "https://yourdomain.com"
```

2. 使用代理服务器：

可以设置一个与你的域名同源的代理服务器，让代理服务器去请求图片资源。浏览器不会对同源的请求进行跨域检查，因此可以避免跨域问题。在你的服务器上设置代理，然后通过代理访问图像资源。

3. 使用图片 `Base64` 编码：

将图像转换为 `Base64` 编码的数据，然后直接将编码后的数据赋值给 `<img>` 的 `src` 属性或者绘制到 `Canvas` 上。这样不会涉及跨域问题，但可能会导致传输数据量增大。

示例代码：

```js
var img = new Image();
img.crossOrigin = "Anonymous"; // 需要设置 crossOrigin 属性
img.onload = function () {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
};
img.src = "https://example.com/image.jpg";
```

在上述代码中，通过设置 `crossOrigin` 属性，你告诉浏览器这是一个允许跨域的请求。同时，确保服务器设置了正确的 `CORS` 头部。如果服务器不支持 `CORS` ，可以考虑使用代理服务器或者将图像转换为 `Base64` 编码。

## 98. 我现在有⼀个 `canvas` ， 上面随机布着⼀些黑块，请实现方法，计算 `canvas` 上有多少个黑块

[前端面试的一道算法题（使用 canvas 解答）](https://www.jianshu.com/p/f54d265f7aa4)

## 99. 请手写实现⼀个 `promise`

在 `Promise` 没有出现之前，异步编程需要通过回调的方式进行完成，当回调函数嵌套过多时，会使代码丑化，也降低了代码的可理解性，后期维护起来会相对困难， `Promise` 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了 `Promise` 对象，本文主要针对`Promise/A+`规范，实现一个小型的`Promise`对象。

### Promise/A+ 规范

`Promise` 规范有很多，如 `Promise/A`，`Promise/B`，`Promise/D` 以及 `Promise/A` 的升级版 `Promise/A+`，因为 `ES6` 主要用的是 `Promise/A+` 规范，该规范内容也比较多，我们挑几个简单的说明下:

1. `Promise`本身是一个状态机，每一个`Promise`实例只能有三个状态，`pending`、`fulfilled`、`reject`，状态之间的转化只能是`pending->fulfilled、pending->reject`，状态变化不可逆。
2. `Promise`有一个`then`方法，该方法可以被调用多次，并且返回一个`Promise`对象（返回新的`Promise`还是老的`Promise`对象，规范没有提）。
3. 支持链式调用。
4. 内部保存有一个 value 值，用来保存上次执行的结果值，如果报错，则保存的是异常信息。

### 实现

由于 Promise 为状态机，我们需先定义状态

```js
var PENDING = 0; // 进行中
var FULFILLED = 1; // 成功
var REJECTED = 2; // 失败
```

#### 基本代码

```js
function Promise(fn) {
  var state = PENDING; // 存储PENDING, FULFILLED或者REJECTED的状态
  var value = null; // 存储成功或失败的结果值
  var handlers = []; // 存储成功或失败的处理程序，通过调用`.then`或者`.done`方法

  // 成功状态变化
  function fulfill(result) {
    state = FULFILLED;
    value = result;
    handlers.forEach(handle); // 处理函数，下文会提到
    handlers = null;
  }

  // 失败状态变化
  function reject(error) {
    state = REJECTED;
    value = error;
    handlers.forEach(handle); // 处理函数，下文会提到
    handlers = null;
  }
}
```

#### 实现 resolve 方法

`resolve` 方法可以接受两种参数，一种为普通的值/对象，另外一种为一个 `Promise` 对象，如果是普通的值/对象，则直接把结果传递到下一个对象；

如果是一个 `Promise` 对象，则必须先等待这个子任务序列完成。

```js
function Promise(fn) {
  ...
  function resolve(result) {
      try {
        var then = getThen(result);
        if (then) {
          doResolve(then.bind(result), resolve, reject)
          return;
        }
        fulfill(result);
      } catch (e) {
        reject(e);
      }
  }
  ...
}
```

`resolve`需要两个辅助方法`getThen`、和`doResolve`。

```js
// getThen 检查如果value是一个Promise对象，则返回then方法等待执行完成。
function getThen(value) {
  var t = typeof value;
  if (value && (t === "object" || t === "function")) {
    var then = value.then;
    if (typeof then === "function") {
      return then;
    }
  }
  return null;
}
// 异常参数检查函数，确保onFulfilled和onRejected两个函数中只执行一个且只执行一次，但是不保证异步。
function doResolve(fn, onFulfilled, onRejected) {
  var done = false;
  try {
    fn(
      function (value) {
        if (done) return;
        done = true;
        onFulfilled(value);
      },
      function (reason) {
        if (done) return;
        done = true;
        onRejected(reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    onRejected(ex);
  }
}
```

上面已经完成了一个完整的内部状态机，但我们并没有暴露一个方法去解析或则观察 `Promise` 。现在让我们开始解析 `Promise` ：

```js
function Promise(fn) {
  ...
  doResolve(fn, resolve, reject);
}
```

如你所见，我们复用了 `doResolve` ，因为对于初始化的 `fn` 也要对其进行控制。`fn` 允许调用 `resolve` 或则 `reject` 多次，甚至抛出异常。这完全取决于我们去保证 `promise` 对象仅被 `resolved` 或则 `rejected` 一次，且状态不能随意改变。

#### then 方法实现

在实现`then`方法之前，我们这里实现了一个执行方法`done`，该方法用来处理执行`then`方法的回调函数，一下为`promise.done(onFullfilled, onRejected)`方法的几个点。

- `onFulfilled` 和 `onRejected` 两者只能有一个被执行，且执行次数为一
- 该方法仅能被调用一次, 一旦调用了该方法，则 `promise` 链式调用结束
- 无论是否 `promise` 已经被解析，都可以调用该方法

```js
function Promise(fn) {
  ...
  // 不同状态，进行不同的处理
  function handle(handler) {
    if (state === PENDING) {
      handlers.push(handler);
    } else {
      if (state === FULFILLED && typeof handler.onFulfilled === 'function') {
        handler.onFulfilled(value);
      }
      if (state === REJECTED && typeof handler.onRejected === 'function') {
        handler.onRejected(value);
      }
    }
  }

  this.done = function (onFulfilled, onRejected) {
    // 保证异步
    setTimeout(function () {
      handle({onFulfilled: onFulfilled, onRejected: onRejected});
    }, 0);
  }
}
```

当 `Promise` 被 `resolved` 或者 `rejected` 时，我们保证 `handlers` 将被通知。

`then` 方法

```js
function Promise(fn) {
  ...
  this.then = function(onFulfilled, onRejected) {
    var self = this;
    return new Promise(function (resolve, reject) {
      self.done(function (result) {
        if (typeof onFulfilled === 'function') {
          try {
            // onFulfilled方法要有返回值！
            return resolve(onFulfilled(result));
          } catch (ex) {
            return reject(ex);
          }
        } else {
          return resolve(result);
        }
      }, function (error) {
        if (typeof onRejected === 'function') {
          try {
            return resolve(onRejected(error));
          } catch (ex) {
            return reject(ex);
          }
        } else {
          return reject(error);
        }
      });
    });
  }
}
```

`catch`方法，我们直接调用`then`处理异常

```js
this.catch = function (errorHandle) {
  return this.then(null, errorHandle);
};
```

## 100. 说说从输入 URL 到看到页面发生的全过程，越详细越好

1. 首先浏览器主进程接管， 开了⼀个下载线程。
2. 然后进⾏ `HTTP` 请求 ( `DNS` 查询 、 `IP` 寻址等等)， 中间会有三次捂手， 等待响应， 开始下载响应报文。
3. 将下载完的内容转交给 `Renderer` 进程管理。
4. `Renderer` 进程开始解析`css rule tree`和`dom tree`， 这两个过程是并⾏的，所以⼀般我会把 `link` 标签放在页面顶部。
5. 解析绘制过程中， 当浏览器遇到 `link` 标签或者 `script` 、 `img` 等标签， 浏览器会去下载这些内容， 遇到时候缓存的使用缓存，不适用缓存的重新下载资源。
6. `css rule tree`和`dom tree`生成完了之后， 开始合成`render tree`， 这个时候浏览器会进⾏`layout`， 开始计算每⼀个节点的位置，然后进⾏绘制。
7. 绘制结束后， 关闭 `TCP` 连接， 过程有四次挥手

## 101. 描述⼀下 `this`

`this` ， 函数执⾏的上下文， 可以通过 `apply` ， `call` ， `bind` 改变 `this` 的指向 。对于匿名函数或者直接调用的函数来说，this 指向全局上下文 ( 浏览器为 `window` ， NodeJS 为 `global` )， 剩下的函数调用，那就是谁调用它， `this` 就指向谁 。当然还有 es6 的箭头函数， 箭头函数的指向取决于该箭头函数声明的位置，在哪里声明， `this` 就指向哪里

## 102. 说⼀下浏览器的缓存机制

浏览器缓存机制有两种，⼀种为`强缓存`，⼀种为`协商缓存`

- 对于强缓存， 浏览器在第⼀次请求的时候，会直接下载资源，然后缓存在本地， 第⼆次请
  求的时候， 直接使用缓存。
- 对于协商缓存， 第⼀次请求缓存且保存缓存标识与时间， 重复请求向服务器发送缓存标识
  和最后缓存时间， 服务端进⾏校验， 如果失效则使用缓存

### 协商缓存相关设置

- `Exprires` ：服务端的响应头， 第⼀次请求的时候， 告诉客户端，该资源什么时候会过期 。 `Exprires` 的缺陷是必须保证服务端时间和客户端时间严格同步。
- `Cache-control`：`max-age` ：表示该资源多少时间后过期，解决了客户端和服务端时间必须同步的问题
- `If-None-Match/ETag` ：缓存标识，对比缓存时使用它来标识⼀个缓存， 第⼀次请求的时候， 服务端会返回该标识给客户端，客户端在第⼆次请求的时候会带上该标识与服务端进⾏对比并返回 `If-None-Match` 标识是否表示匹配。
- `Last-modified/If-Modified-Since` ：第⼀次请求的时候服务端返回 `Last-modified`表明请求的资源上次的修改时间， 第⼆次请求的时候客户端带上请求头 `If-Modified-Since` ，表示资源上次的修改时间， 服务端拿到这两个字段进⾏对比

## 103. 现在要你完成⼀个 Dialog 组件，说说你设计的思路？ 它应该有什么功能？

1. 该组件需要提供 `hook` 指定渲染位置， 默认渲染在 `body` 下⾯ 。
2. 然后改组件可以指定外层样式， 如宽度等
3. 组件外层还需要⼀层 `mask` 来遮住底层内容，点击 `mask` 可以执⾏传进来的 `onCancel` 函数关闭 `Dialog` 。
4. 另外组件是可控的， 需要外层传⼊ `visible` 表示是否可⻅ 。
5. 然后 `Dialog` 可能需要自定义头 `head` 和底部 `footer` ， 默认有头部和底部，底部有⼀个确认按钮和取消按钮，确认按钮会执⾏外部传进来的 `onOk` 事件，然后取消按钮会执⾏外部传进来的 `onCancel` 事件。
6. 当组件的 `visible` 为 `true` 时候，设置 `body` 的 `overflow` 为 `hidden` ， 隐藏 `body` 的
   滚动条， 反之显示滚动条。
7. 组件高度可能大于⻚⾯高度， 组件内部需要滚动条。
8. 只有组件的 `visible` 有变化且为 `ture` 时候，才重渲染组件内的所有内容

## 104. `caller` 和 `callee` 的区别

### `calleer`

`caller` 返回⼀个函数的引用， 这个函数调用了当前的函数。

使用 `caller` 时要注意:

- 这个属性只有当函数在执行时才有用
- 如果在 `javascript` 程序中， 函数是由顶层调用的，则返回 `null`

> `functionName.caller: functionName` 是当前正在执行的函数。

```js
function a() {
  console.log(a.caller);
}
```

### `callee`

`callee` 放回正在执行的函数本身的引用， 它是 `arguments` 的⼀个属性

使用 `callee` 时要注意:

- 这个属性只有在函数执行时才有效
- 它有⼀个 `length` 属性， 可以用来获得形参的个数， 因此可以用来比较形参和实参个数是否⼀致， 即比较 `arguments.length` 是否等于 `arguments.callee.length`
- 它可以用来递归匿名函数

```js
function a() {
  console.log(arguments.callee);
}
```

## 105. ajax 、axios 、fetch 区别

### jQuery ajax

```js
$.ajax({
  type: 'POST',
  url: url,
  data: data,
  dataType: dataType
  success: function
  error: function ()
});
```

优缺点：

- 本身是针对 `MVC` 的编程,不符合现在前端 `MVVM` 的浪潮
- 基于原生的 `XHR` 开发， `XHR` 本身的架构不清晰， 已经有了 `fetch` 的替代方案
- `JQuery` 整个项目太大， 单纯使用 `ajax` 却要引入整个 `JQuery` 非常的不合理 ( 采取个性化打包的方案⼜不能享受 CDN 服务)

### axios

```js
axios({
  method: "post",
  url: "/user/12345",
  data: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

优缺点：

- 从浏览器中创建 `XMLHttpRequest`
- 从 `node.js` 发出 `http` 请求
- 支持 `Promise API`
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换 `JSON` 数据
- 客户端支持防止 `CSRF/XSRF`

### fetch

```js
try {
  let response = await fetch(url);
  let data = response.json();
  console.log(data);
} catch (e) {
  console.log("Oops, error", e);
}
```

优缺点：

- `fetch` 只对⽹络请求报错，对 `400` ， `500` 都当做成功的请求， 需要封装去处理
- `fetch` 默认不会带 `cookie` ， 需要添加配置项
- `fetch` 不支持 `abort` ，不支持超时控制，使用 `setTimeout` 及 `Promise.reject` 的实现的超时控制并不能阻止请求过程继续在后台运行， 造成了量的浪费
- `fetch` 没有办法原生监测请求的进度， 而 `XHR` 可以

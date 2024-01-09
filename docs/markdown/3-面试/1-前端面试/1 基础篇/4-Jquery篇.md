# jQuery

## 1. 你觉得 jQuery 或 zepto 源码有哪些写的好的地方

1. `jquery`源码封装在⼀个匿名函数的自执行环境中，有助于防止变量的全局污染，然后通过传⼊`window`对象参数， 可以使`window`对象作为局部变量使用， 好处是当`jquery`中访问`window`对象的时候，就不用将作用域链退回到顶层作用域了，从而可以更快的访问`window`对象 。同样，传⼊`undefined`参数， 可以缩短查找`undefined`时的作用域链

```js
(function (window, undefined) {
  //用⼀个函数域包起来，就是所谓的沙箱
  //在这里边var定义的变量，属于这个函数域内的局部变量，避免污染全局
  //把当前沙箱需要的外部变量通过函数参数引⼊进来
  //只要保证参数对内提供的接⼝的⼀致性，你还可以随意替换传进来的这个参数
  window.jQuery = window.$ = jQuery;
})(window);
```

2. `jquery`将⼀些原型属性和方法封装在了`jquery.prototype`中， 为了缩短名称， ⼜赋值给了`jquery.fn`， 这是很形象的写法
3. 有⼀些数组或对象的方法经常能使用到，`jQuery`将其保存为局部变量以提高访问速度
4. `jquery` 实现的链式调用可以节约代码，所返回的都是同⼀个对象， 可以提高代码效率

## 2. jQuery 的实现原理

1. `(function(window, undefined) {})(window)`;
2. `jQuery` 利用 `JS` 函数作用域的特性， 采用立即调用表达式包裹了自身，解决命名空间和变量污染问题
3. `window.jQuery = window.$ = jQuery`;
4. 在闭包当中将 `jQuery` 和 `$` 绑定到 `window` 上， 从而将 `jQuery` 和 `$` 暴露为全局变量

## 3. `jQuery.fn` 的 `init` 方法返回的 `this` 指的是什么对象

1. `jQuery.fn` 的 `init` 方法 返回的 `this` 就是 `jQuery` 对象
2. 用户使用 `jQuery()` 或 `$()` 即可初始化 `jQuery` 对象，不需要动态的去调用 `init` 方法

## 4. `jQuery.extend` 与 `jQuery.fn.extend` 的区别

1. `$.fn.extend()` 和 `$.extend()` 是 `jQuery` 为扩展插件提拱了两个方法
2. `$.extend(object)` ; // 为 jQuery 添加“静态方法” ( 工具方法)

```js
$.extend({
  min: function (a, b) {
    return a < b ? a : b;
  },
  max: function (a, b) {
    return a > b ? a : b;
  },
});
$.min(2, 3); // 2
$.max(4, 5); // 5
```

3. `$.extend([true,] targetObject, object1[, object2])`; // 对 targt 对象进行扩展

```js
var settings = { validate: false, limit: 5 };
var options = { validate: true, name: "bar" };
$.extend(settings, options); // 注意：不支持第⼀个参数传 false
// settings == {validate:true, limit:5, name:"bar"}
```

4. `$.fn.extend(json)` ; // 为 jQuery 添加“成员函数” ( 实例方法)

```js
$.fn.extend({
  alertValue: function () {
    $(this).click(function () {
      alert($(this).val());
    });
  },
});
$("#email").alertValue();
```

## 5. jQuery 的属性拷贝(extend)的实现原理是什么， 如何实现深拷贝

1. 浅拷贝 ( 只复制⼀份原始对象的引用) `var newObject = $.extend({}, oldObject)`;
2. 深拷贝 ( 对原始对象属性所引用的对象进行进行递归拷贝) `var newObject = $.extend(true, {}, oldObject)` ;

## 6. jQuery 的队列是如何实现的

1. jQuery 核心中有⼀组队列控制方法， 由 `queue()/dequeue()/clearQueue()` 三个方法组成。
2. 主要应用于 `animate()` ， `ajax` ， 其他要按时间顺序执行的事件中

```js
var func1 = function () {
  alert("事件1");
};
var func2 = function () {
  alert("事件2");
};
var func3 = function () {
  alert("事件3");
};
var func4 = function () {
  alert("事件4");
};
// 入栈队列事件
$("#box").queue("queue1", func1); // push func1 to queue1
$("#box").queue("queue1", func2); // push func2 to queue1
// 替换队列事件
$("#box").queue("queue1", []); // delete queue1 with empty array
$("#box").queue("queue1", [func3, func4]); // replace queue1
// 获取队列事件 ( 返回⼀个函数数组)
$("#box").queue("queue1"); // [func3(), func4()]
// 出栈队列事件并执行
$("#box").dequeue("queue1"); // return func3 and do func3
$("#box").dequeue("queue1"); // return func4 and do func4

// 清空整个队列
$("#box").clearQueue("queue1"); // delete queue1 with clearQueue
```

## 7. jQuery 中的 bind(), live(), delegate(), on()的区别

1. `bind()` 直接绑定在目标元素上
2. `live()` 通过冒泡传播事件， 默认 `document` 上， ⽀持动态数据
3. `delegate()` 更精确的小范围使用事件代理，性能优于 `live`
4. `on()` 是最新的 1.9 版本整合了之前的三种⽅式的新事件绑定机制

## 8. 是否知道自定义事件

1. 事件即“发布/订阅”模式， 自定义事件即“消息发布”，事件的监听即“订阅订阅”
2. JS 原生⽀持自定义事件， 示例：

```js
document.createEvent(type); // 创建事件
event.initEvent(eventType, canBubble, prevent); // 初始化事件
target.addEventListener("dataavailable", handler, false); // 监听事件
target.dispatchEvent(e); // 触发事件
```

3. `jQuery` 里的 `fire` 函数用于调用 `jQuery` 自定义事件列表中的事件

## 9. jQuery 通过哪个方法和 Sizzle 选择器结合的

1. `Sizzle` 选择器采取 `Right To Left` 的匹配模式， 先搜寻所有匹配标签， 再判断它的父节点
2. `jQuery` 通过 `$(selecter).find(selecter)`; 和 `Sizzle` 选择器结合

## 10. jQuery 中如何将数组转化为 JSON 字符串，然后再转化回来

```js
/ / 通过原生 JSON. stringify/ JSON. parse 扩展 jQuery 实现
$.array2json = function(array) {
return JSON.stringify(array);
}
$.json2array = function(array) {
// $.parseJSON(array); // 3.0 开始， 已过时
return JSON.parse(array);
}
// 调用
var json = $.array2json( [ 'a', 'b', 'c']);
var array = $.json2array(json);
```

## 11. jQuery ⼀个对象可以同时绑定多个事件， 这是如何实现的

```js
$("# btn").on(" mouseover mouseout", func);
$("#btn").on({
  mouseover: func1,
  mouseout: func2,
  click: func3,
});
```

## 12. 针对 jQuery 的优化方法

1. 缓存频繁操作 `DOM` 对象
2. 尽量使用 `id` 选择器代替 `class` 选择器
3. 总是从 `#id` 选择器来继承
4. 尽量使用链式操作
5. 使用时间委托 `on` 绑定事件
6. 采用 `jQuery` 的内部函数 `data()` 来存储数据
7. 使用最新版本的 `jQuery`

## 13. jQuery 的 slideUp 动画， 当鼠标快速连续触发, 动画会滞后反复执行，该如何处理呢

1. 在触发元素上的事件设置为延迟处理：使用 `JS` 原生 `setTimeout` 方法
2. 在触发元素的事件时预先停止所有的动画， 再执行相应的动画事件：`$('.tab').stop().slideUp()`;

## 14. jQuery UI 如何自定义组件

1. 通过向 `$.widget()` 传递组件名称和⼀个原型对象来完成
2. `$.widget("ns.widgetName", [baseWidget], widgetPrototype)`;

## 15. jQuery 与 jQuery UI 、jQuery Mobile 区别

1. `jQuery` 是 `JS` 库，兼容各种 `PC` 浏览器， 主要用作更方便地处理 `DOM` 、事件 、动画、 `AJAX`
2. `jQuery UI` 是建立在 `jQuery` 库上的⼀组用户界面交互 、特效 、小部件及主题
3. `jQuery Mobile` 以 `jQuery` 为基础，用于创建“移动 `Web` 应用”的框架

## 16. jQuery 和 Zepto 的区别？ 各自的使用场景

1. `jQuery` 主要目标是 `PC` 的网页中，兼容全部主流浏览器 。在移动设备方面， 单独推出 `jQueryMobile`
2. `Zepto` 从⼀开始就定 位移动设备，相对更轻量级 。它的 API 基本兼容 `jQuery` ，但对 PC 浏览器兼容不理想

## 17. jQuery 对象的特点

1. 只有 `JQuery` 对象才能使用 `JQuery` 方法
2. `JQuery` 对象是⼀个数组对象

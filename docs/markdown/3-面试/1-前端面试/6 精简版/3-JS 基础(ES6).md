# JS 基础 ( ES6)

## 1. let ，const

`let` 产生块级作用域 ( 通常配合 for 循环或者 {} 进行使用产生块级作用域)， `const` 申明的变量是常量 ( 内存地址不变)

## 2. Promise

这里你谈 `promise` 的时候， 除了将他解决的痛点以及常用的 `API` 之外， 最好进行拓展把 eventloop 带进来好好讲⼀下， `microtask` (微任务)、 `macrotask` (任务) 的执行顺序， 如果看过 `promise` 源码， 最好可以谈⼀谈原生 Promise 是如何实现的 。 `Promise` 的关键点在于 `callback` 的两个参数，⼀个是 `resovle` ，⼀个是 `reject` 。还有就是 `Promise` 的链式调用 ( `Promise.then()` ，每⼀个 `then` 都是⼀个责任⼈)

## 3. Generator

遍历器对象生成函数， 最大的特点是可以交出函数的执行权

- `function` 关键字与函数名之间有⼀个星号；
- 函数体内部使用 `yield` 表达式，定义不同的内部状态；
- `next` 指针移向下⼀个状态

这里你可以说说 `Generator` 的异步编程， 以及它的语法糖 `async` 和 `awiat` ，传统的异步编程 。 `ES6` 之前，异步编程大致如下

- 回调函数
- 事件监听
- 发布/订阅

传统异步编程方案之⼀： 协程， 多个线程互相协作， 完成异步任务。

## 4. async 、await

`Generator` 函数的语法糖 。有更好的语义 、更好的适用性 、返回值是 `Promise` 。

- `async => *`
- `await => yield`

```js
// 基本用法
async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function asyncConsole(value, ms) {
  await timeout(ms);
  console.log(value);
}
asyncConsole("hello async and await", 1000);
```

## 5. AMD ， CMD ， CommonJs， ES6 Module：解决原始无模块化的痛点

- `AMD` ： `requirejs` 在推广过程中对模块定义的规范化产出，提前执行，推崇依赖前置
- `CMD` ： `seajs` 在推广过程中对模块定义的规范化产出，延迟执行，推崇依赖就近
- `CommonJs` ：模块输出的是⼀个值的 `copy` ， 运行时加载，加载的是⼀个对象( `module.exports` 属性)， 该对象只有在脚本运行完才会生成
- `ES6 Module` ：模块输出的是⼀个值的引用，编译时输出接口， `ES6` 模块不是对象， 它对外接口只是⼀种静态定义，在代码静态解析阶段就会生成。

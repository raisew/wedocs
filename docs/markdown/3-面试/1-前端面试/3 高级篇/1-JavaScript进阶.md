# JavaScript 进阶

## 1. 内置类型

1. `JS` 中分为七种内置类型，七种内置类型又分为两大类型：基本类型和对象( `Object` ) 。
2. 基本类型有六种： `null` ， `undefined` ， `boolean` ， `number` ， `string` ， `symbol` 。
3. 其中 `JS` 的数字类型是浮点类型的，没有整型 。并且浮点类型基于 `IEEE 754` 标准实现，在使用中会遇到某些 `Bug` 。 `NaN` 也属于 `number` 类型， 并且 `NaN` 不等于自身 。
4. 对于基本类型来说， 如果使用字面量的方式，那么这个变量只是个字面量， 只有在必要的时候才会转换为对应的类型。

```js
let a = 111; // 这只是字面量，不是 number 类型
a.toString(); // 使用时候才会转换为对象类型
```

对象 ( `Object` ) 是引用类型，在使用过程中会遇到浅拷贝和深拷贝的问题。

```js
let a = { name: "FE" };
let b = a;
b.name = "EF";
console.log(a.name); // EF
```

## 2. Typeof

`typeof` 对于基本类型， 除了 `null` 都可以显示正确的类型

```js
typeof 1; // ' number'
typeof "1"; // 'string'
typeof undefined; // 'undefined'
typeof true; // 'boolean'
typeof Symbol(); // 'symbol'
typeof b; // b 没有声明，但是还会显示 undefined
```

`typeof` 对于对象， 除了函数都会显示 `object`

```js
typeof []; // 'object' typeof {} // 'object'
typeof console.log; // 'function'
```

对于 `null` 来说， 虽然它是基本类型，但是会显示 `object` ， 这是⼀个存在很久了的 `Bug`

```js
typeof null; // 'object'
```

> PS：为什么会出现这种情况呢？ 因为在 `JS` 的最初版本中，使用的是 `32` 位系统， 为了性能考虑使用低位存储了变量的类型信息， `000` 开头代表是对象，然而 `null` 表示为全零，所以将它错误的判断为 `object` 。虽然现在的内部类型判断代码已经改变了，但是对于这个 `Bug` 却是⼀直流传下来。

如果我们想获得⼀个变量的正确类型， 可以通过 `Object.prototype.toString.call(xx)` 。这样我们就可以获得类似 `[object Type]` 的字符串

```js
let a;
// 我们也可以这样判断 undefined
a === undefined;
// 但是 undefined 不是保留字，能够在低版本浏览器被赋值
let undefined = 1;
// 这样判断就会出错
// 所以可以用下面的方式来判断，并且代码量更少
// 因为 void 后面随便跟上⼀个组成表达式
// 返回就是 undefined
a === void 0;
```

## 3. 类型转换

1. 转 `Boolean`

在条件判断时， 除了 `undefined` ， `null` ， `false` ， `NaN` ， '' ，`0` ， `-0` ， 其他所有值都转为 `true` ， 包括所有对象

2. 对象转基本类型

对象在转换基本类型时， 首先会调用 `valueOf` 然后调用 `toString` 。并且这两个方法你是可以重写的

```js
let a = {
  valueOf() {
    return 0;
  },
};
```

3. 四则运算符

只有当加法运算时， 其中⼀方是字符串类型，就会把另⼀个也转为字符串类型 。其他运算只要其中⼀方是数字，那么另⼀方就转为数字 。并且加法运算会触发三种类型转换：将值转换为原始值，转换为数字，转换为字符串

```js
1 + "1"; // '11'
2 * "2"; // 4
[1, 2] + [2, 1]; // '1,22,1'
// [1, 2].toString() -> '1,2'
// [2, 1].toString() -> '2,1'
// '1,2' + '2,1' = '1,22,1'
```

对于加号需要注意这个表达式 `'a' + + 'b'`

```js
"a" + +"b"; // -> "aNaN"
// 因为 + 'b' -> NaN
// 你也许在⼀些代码中看到过 + '1' -> 1
```

4. `==` 操作符
   这里来解析⼀道题目 `[] == ![] // -> true` ，下面是这个表达式为何为 `true` 的步骤

```js
// [] 转成 true， 然后取反变成 false
[] == false
// 根据第 8 条得出
[] == ToNumber(false)
[] == 0
// 根据第 10 条得出
ToPrimitive( []) == 0
// [].toString() -> ''
'' == 0
// 根据第 6 条得出
0 == 0 // -> true
```

5. 比较运算符

   - 如果是对象，就通过 `toPrimitive` 转换对象
   - 如果是字符串，就通过 `unicode` 字符索引来比较

## 4. 原型

1. 每个函数都有 `prototype` 属性， 除了 `Function.prototype.bind()` ，该属性指向原型。
2. 每个对象都有 `__proto__` 属性， 指向了创建该对象的构造函数的原型 。其实这个属性指
   向了 `[[prototype]]` ，但是 `[[prototype]]` 是内部属性， 我们并不能访问到，所以使
   用 `_proto_` 来访问。
3. 对象可以通过 `__proto__` 来寻找不属于该对象的属性， `__proto__` 将对象连接起来组成了原型链。

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401091132908.png)

## 5. new

1. 新生成了⼀个对象
2. 链接到原型
3. 绑定 `this`
4. 返回新对象

在调用 `new` 的过程中会发生以上四件事情， 我们也可以试着来自己实现⼀个 `new`

```js
function create() {
  // 创建⼀个空的对象
  let obj = new Object();
  // 获得构造函数
  let Con = [].shift.call(arguments);
  // 链接到原型
  obj.__proto__ = Con.prototype;
  // 绑定 this，执行构造函数
  let result = Con.apply(obj, arguments);
  // 确保 new 出来的是个对象
  return typeof result === "object" ? result : obj;
}
```

## 6. instanceof

`instanceof` 可以正确的判断对象的类型， 因为内部机制是通过判断对象的原型链中是不是能找到类型的 `prototype`，我们也可以试着实现⼀下 `instanceof`

```js
function instanceof(left, right) {
    // 获得类型的原型
    let prototype = right.prototype
    // 获得对象的原型
    left = left.__proto__
    // 判断对象的类型是否等于类型的原型
    while (true) {
    	if (left === null)
    		return false
    	if (prototype === left)
    		return true
    	left = left.__proto__
    }
}
```

## 7. this

```js
function foo() {
  console.log(this.a);
}
var a = 1;
foo();
var obj = {
  a: 2,
  foo: foo,
};
obj.foo();
// 以上两者情况 `this` 只依赖于调用函数前的对象，优先级是第⼆个情况大于第⼀个情况
// 以下情况是优先级最高的， `this` 只会绑定在 `c` 上，不会被任何方式修改 `this` 指向
var c = new foo();
c.a = 3;
console.log(c.a);
// 还有种就是利用 call， apply， bind 改变 this， 这个优先级仅次于 new
```

看看箭头函数中的 `this`

```js
function a() {
  return () => {
    return () => {
      console.log(this);
    };
  };
}
console.log(a()()());
```

箭头函数其实是没有 `this` 的， 这个函数中的 `this` 只取决于他外面的第⼀个不是箭头函数的函数的 `this` 。在这个例子中， 因为调用 `a` 符合前面代码中的第⼀个情况，所以 `this` 是 `window` 。并且 `this` ⼀旦绑定了上下文，就不会被任何代码改变

## 8. 执行上下文

1. 当执行 `JS` 代码时，会产生三种执行上下文

   - 全局执行上下文
   - 函数执行上下文
   - `eval` 执行上下文

2. 每个执行上下文中都有三个重要的属性

   - 变量对象 ( `VO` )， 包含变量 、函数声明和函数的形参，该属性只能在全局上下文中访问
   - 作用域链 ( `JS` 采用词法作用域，也就是说变量的作用域是在定义时就决定了)
   - `this`

   ```js
   var a = 10;
   function foo(i) {
     var b = 20;
   }
   foo();
   ```

3. 对于上述代码，执行栈中有两个上下文：全局上下文和函数 `foo` 上下文。

```js
stack = [globalContext, fooContext];
```

4. 对于全局上下文来说， `VO` 大概是这样的

```js
globalContext. VO === globe
globalContext.VO = {
    a: undefined,
    foo: <Function>,
}
```

5. 对于函数 `foo` 来说， `VO` 不能访问， 只能访问到活动对象 ( `AO` )

```js
fooContext. VO = = = foo. AO
fooContext.AO {
i: undefined,
b: undefined,
arguments: <>
}
// arguments 是函数独有的对象(箭头函数没有)
// 该对象是⼀个伪数组，有 `length` 属性且可以通过下标访问元素
// 该对象中的 `callee` 属性代表函数本身
// `caller` 属性代表函数的调用者
```

6. 对于作用域链， 可以把它理解成包含自身变量对象和上级变量对象的列表， 通过 `[[Scope]]` 属性查找上级变量

```js
fooContext. [[Scope]] = [
    globalContext.VO
]
fooContext.Scope = fooContext. [[Scope]] + fooContext.VO
fooContext.Scope = [
    fooContext.VO,
    globalContext.VO
]
```

7. 接下来让我们看⼀个老生常谈的例子， `var`

```js
b(); // call b
console.log(a); // undefined
var a = "Hello world";
function b() {
  console.log("call b");
}
```

想必以上的输出大家肯定都已经明白了， 这是因为函数和变量提升的原因 。通常提升的解释是说将声明的代码移动到了顶部， 这其实没有什么错误，便于大家理解 。但是更准确的解释应该是：在生成执行上下文时，会有两个阶段 。第⼀个阶段是创建的阶段 ( 具体步骤是创建 `VO` )， `JS` 解释器会找出需要提升的变量和函数， 并且给他们提前在内存中开辟好空间， 函数的话会将整个函数存⼊内存中， 变量只声明并且赋值为 `undefined` ，所以在第⼆个阶段，也就是代码执行阶段， 我们可以直接提前使用。

8. 在提升的过程中，相同的函数会覆盖上⼀个函数， 并且函数优先于变量提升

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

`var` 会产生很多错误，所以在 `ES6` 中引⼊了 `let` 。 `let` 不能在声明前使用，但是这并不是常说的 `let` 不会提升， `let` 提升了声明但没有赋值， 因为临时死区导致了并不能在声明前使用。

9. 对于非匿名的立即执行函数需要注意以下⼀点

```js
var foo = 1(
  (function foo() {
    foo = 10;
    console.log(foo);
  })()
); // -> ƒ foo() { foo = 10 ; console.log(foo) }
```

因为当 `JS` 解释器在遇到非匿名的立即执行函数时，会创建⼀个辅助的特定对象，然后将函数名称作为这个对象的属性， 因此函数内部才可以访问到 `foo` ，但是这个值又是只读的，所以对它的赋值并不生效，所以打印的结果还是这个函数， 并且外部的值也没有发生更改。

```js
specialObject = { } ;
Scope = specialObject + Scope;
foo = new FunctionExpression;
foo. [ [Scope]] = Scope;
specialObject.foo = foo; // {DontDelete}, {ReadOnly}
delete Scope[0]; // remove specialObject from the front of scope chain
```

## 9. 闭包

闭包的定义很简单： 函数 `A` 返回了⼀个函数 `B`， 并且函数 `B` 中使用了函数 `A` 的变量， 函数 `B` 就被称为闭包。

```js
function A() {
  let a = 1;
  function B() {
    console.log(a);
  }
  return B;
}
```

你是否会疑惑， 为什么函数 `A` 已经弹出调用栈了， 为什么函数 `B` 还能引用到函数 `A` 中的变量 。因为函数 `A` 中的变量这时候是存储在堆上的 。现在的 `JS` 引擎可以通过逃逸分析辨别出哪些变量需要存储在堆上， 哪些需要存储在栈上。

经典面试题，循环中使用闭包解决 var 定义函数的问题

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
```

首先因为 `setTimeout` 是个异步函数，所有会先把循环全部执行完毕， 这时候 `i` 就是 `6` 了，所以会输出⼀堆 `6` 。

解决办法两种， 第⼀种使用闭包

```js
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
```

第⼆种就是使用 `setTimeout` 的第三个参数

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(
    function timer(j) {
      console.log(j);
    },
    i * 1000,
    i
  );
}
```

第三种就是使用 `let` 定义 `i` 了

```js
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
```

因为对于 `let` 来说，他会创建⼀个块级作用域，相当于

```js
{ // 形成块级作用域
let i = 0
{
let ii = i
setTimeout(function timer() {
console.log( i );
}, i*1000 );
}
i++
{
let ii = i
}
i++
{
let ii = i
}
...
}
```

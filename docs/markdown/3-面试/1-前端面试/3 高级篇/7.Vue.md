# Vue

## 1. 对于 MVVM 的理解

`MVVM` 是 `Model-View-ViewModel` 的缩写

1. `Model` 代表数据模型，也可以在 `Model` 中定义数据修改和操作的业务逻辑。
2. `View` 代表 `UI` 组件， 它负责将数据模型转化成 `UI` 展现出来。
3. `ViewModel` 监听模型数据的改变和控制视图行为 、处理用户交互， 简单理解就是⼀个同步 `View` 和 `Model` 的对象， 连接 `Model` 和 `View`

   - 在 `MVVM` 架构下， `View` 和 `Model` 之间并没有直接的联系， 而是通过 `ViewModel` 进行交互， `Model` 和 `ViewModel` 之间的交互是双向的， 因此 `View` 数据的变化会同步到 `Model` 中， 而 `Model` 数据的变化也会立即反应到 `View` 上。
   - `ViewModel` 通过双向数据绑定把 `View` 层和 `Model` 层连接了起来， 而 `View` 和 `Model` 之间的同步⼯作完全是自动的， ⽆需⼈为⼲涉， 因此开发者只需关注业务逻辑，不需要手动操作 `DOM` ，不需要关注数据状态的同步问题， 复杂的数据状态维护完全由 `MVVM` 来统⼀管理

## 2. 请详细说下你对 vue 生命周期的理解

总共分为 `8` 个阶段 创建前/后， 载⼊前/后，更新前/后，销毁前/后

1. 创建前/后： 在 `beforeCreate` 阶段， `vue` 实例的挂载元素 `el` 和数据对象 `data` 都为 `undefined` ， 还未初始化 。在 `created` 阶段， `vue` 实例的数据对象 `data` 有了， `el` 还没有
2. 载⼊前/后：在 `beforeMount` 阶段， `vue` 实例的 `$el` 和 `data` 都初始化了，但还是挂载之前为虚拟的 `dom` 节点， `data.message` 还未替换 。在 `mounted` 阶段， `vue` 实例挂载完成， `data.message` 成功渲染
3. 更新前/后： 当 `data` 变化时，会触发 `beforeUpdate` 和 `updated` 方法
4. 销毁前/后：在执行 `destroy` 方法后，对 `data` 的改变不会再触发周期函数，说明此时 `vue` 实例已经解除了事件监听以及和 `dom` 的绑定，但是 `dom` 结构依然存在

### 什么是 vue 生命周期？

Vue 实例从创建到销毁的过程，就是生命周期 。从开始创建 、初始化数据 、编译模板 、挂载 Dom→ 渲染 、更新 → 渲染 、销毁等⼀系列过程，称之为 Vue 的生命周期。

### vue 生命周期的作用是什么？

它的生命周期中有多个事件钩⼦ ，让我们在控制整个 Vue 实例的过程时更容易形成好的逻辑。

### vue 生命周期总共有几个阶段？

它可以总共分为 8 个阶段：创建前/后 、载⼊前/后 、更新前/后 、销毁前/销毁后。

### 第⼀次页面加载会触发哪几个钩子？

会触发下面这⼏个 `beforeCreate` 、 `created` 、 `beforeMount` 、 `mounted` 。

### DOM 渲染在哪个周期中就已经完成？

`DOM` 渲染在 `mounted` 中就已经完成了

## 3. Vue 实现数据双向绑定的原理：Object.defineProperty()

1. `vue` 实现数据双向绑定主要是：采用数据劫持结合发布者-订阅者模式的⽅式， 通过 `Object.defineProperty()` 来劫持各个属性的 `setter` ， `getter` ，在数据变动时发布消息给订阅者，触发相应监听回调 。当把⼀个普通 `Javascript` 对象传给 `Vue` 实例来作为它的 `data` `选项时，Vue` 将遍历它的属性，用 `Object.defineProperty()` 将它们转为 `getter/setter` 。用户看不到 `getter/setter` ，但是在内部它们让 `Vue` 追踪依赖，在属性被访问和修改时通知变化
2. `vue` 的数据双向绑定 将 `MVVM` 作为数据绑定的⼊⼝ ，整合 `Observer` ， `Compile` 和 `Watcher` 三者， 通过 `Observer` 来监听自⼰的 `model` 的数据变化， 通过 `Compile` 来解析编译模板指令 ( `vue` 中是用来解析 `{{}}` )， 最终利用 `watcher` 搭起 `observer` 和 `Compile` 之间的通信桥梁， 达到数据变化 — >视图更新；视图交互变化 ( `input` ) — > 数据 `model` 变更双向绑定效果。

## 4. Vue 组件间的参数传递

1. 父组件与子组件传值

父组件传给⼦组件：⼦组件通过 `props` ⽅法接受数据；

⼦组件传给父组件： `$emit` ⽅法传递参数

2. 非父子组件间的数据传递，兄弟组件传值

`eventBus` ，就是创建⼀个事件中心，相当于中转站， 可以用它来传递事件和接收事件 。项目比较⼩时，用这个比较合适 ( 虽然也有不少⼈推荐直接用 `VUEX` ， 具体来说看需求)

## 5. Vue 的路由实现： hash 模式 和 history 模式

1. `hash` 模式：在浏览器中符号 `“#”` ，#以及#后面的字符称之为 `hash` ，用 `window.location.hash` 读取 。特点： `hash` 虽然在 `URL` 中，但不被包括在 `HTTP` 请求中 ；用来指导浏览器动作，对服务端安全⽆用， `hash` 不会重加载页面 。
2. `history` 模式：`history` 采用 `HTML5` 的新特性；且提供了两个新⽅法：`pushState()` ， `replaceState()` 可以对浏览器历史记录栈进⾏修改， 以及 `popState` 事件的监听到状态变更

## 6. vue 路由的钩子函数

首页可以控制导航跳转， `beforeEach` ， `afterEach` 等，⼀ 般用于页面 `title` 的修改 。⼀些需要登录才能调整页面的重定向功能。

1. `beforeEach` 主要有 3 个参数 `to` ， `from` ， `next` 。
2. `to` ： `route` 即将进⼊的目标路由对象。
3. `from` ： `route` 当前导航正要离开的路由。
4. `next` ： `function` ⼀定要调用该⽅法 `resolve` 这个钩⼦ 。执⾏效果依赖 `next` ⽅法的调用参数 。可以控制网页的跳转

## 7. vuex 是什么？怎么使用？ 哪种功能场景使用它？

1. 只用来读取的状态集中放在 `store` 中； 改变状态的⽅式是提交 `mutations` ， 这是个同步的事物； 异步逻辑应该封装在 `action` 中
2. 在 `main.js` 引⼊ `store` ， 注⼊ 。新建了⼀个目录 `store` ， `… export`
3. 场景有：单页应用中， 组件之间的状态 、音乐播放 、登录状态 、加⼊购物车

### vuex

1. `state` ： `Vuex` 使用单⼀状态树,即每个应用将仅仅包含⼀个 `store` 实例，但单⼀状态树和模块化并不冲突 。存放的数据状态，不可以直接修改里面的数据
2. `mutations` ： `mutations` 定义的⽅法动态修改 `Vuex` 的 `store` 中的状态或数据
3. `getters` ：类似 `vue` 的计算属性， 主要用来过滤⼀些数据。
4. `action` ： `actions` 可以理解为通过将 `mutations` 里面处里数据的⽅法变成可异步的处理数据的⽅法， 简单的说就是异步操作数据 。 `view` 层通过 `store.dispath` 来分发 `action`
5. `modules` ：项目特别复杂的时候， 可以让每⼀个模块拥有自⼰的 `state` 、`mutation` 、 `action` 、 `getters` ，使得结构非常清晰， ⽅便管理

## 8. v-if 和 v-show 区别

`v-if` 按照条件是否渲染， `v-show` 是 `display` 的 `block` 或 `none` ；

## 9. $route 和 $router 的区别

`$route` 是“路由信息对象”， 包括 `path` ， `params` ， `hash` ， `query` ， `fullPath` ， `matched` ， `name` 等路由信息参数。

而 `$router` 是“路由实例”对象包括了路由的跳转方法，钩⼦函数等

## 10. 如何让 CSS 只在当前组件中起作用?

将当前组件的 `<style>` 修改为 `<style scoped>`

## 11. `<keep-alive></keep-alive>` 的作用是什么?

`<keep-alive></keep-alive>` 包裹动态组件时，会缓存不活动的组件实例,主要用于保留组件状态或避免重新渲染

比如有⼀个列表和⼀个详情，那么用户就会经常执⾏打开详情=>返回列表=>打开详情 …这样的话列表和详情都是⼀个频率很高的页面，那么就可以对列表组件使用 `<keep-alive></keep-alive>` 进⾏缓存， 这样用户每次返回列表的时候，都能从缓存中快速渲染， 而不是重新渲染

## 12. 指令 v-el 的作用是什么?

提供⼀个在页面上已存在的 `DOM` 元素作为 `Vue` 实例的挂载目标.可以是 `CSS` 选择器，也可以是⼀个 `HTMLElement` 实例,

## 13. 在 Vue 中使用插件的步骤

1. 采用 `ES6` 的 `import` ... `from` ... 语法或 `CommonJS` 的 `require()` 方法引⼊插件
2. 使用全局方法 `Vue.use( plugin )` 使用插件,可以传⼊⼀个选项对象` Vue.use(MyPlugin, { someOption: true })`

## 14. 请列举出 3 个 Vue 中常用的生命周期钩子函数?

1. `created` : 实例已经创建完成之后调用,在这⼀步,实例已经完成数据观测, 属性和方法的运算, `watch/event` 事件回调. 然而, 挂载阶段还没有开始, `$el` 属性目前还不可⻅
2. `mounted` : `el` 被新创建的 `vm.$el` 替换， 并挂载到实例上去之后调用该钩⼦ 。如果 `root` 实例挂载了⼀个文档内元素， 当 `mounted` 被调用时 `vm.$el` 也在文档内。
3. `activated` : `keep-alive` 组件激活时调用

## 15. vue-cli 工程技术集合介绍

问题⼀： 构建的 `vue-cli` 工程都到了哪些技术，它们的作用分别是什么？

1. `vue.js` ： `vue-cli` 工程的核心， 主要特点是 双向数据绑定和组件系统。
2. `vue-router` ： `vue` 官方推荐使用的路由框架。
3. `vuex` ：专为 `Vue.js` 应用项目开发的状态管理器， 主要用于维护 `vue` 组件间共用的⼀些变量和方法。
4. `axios` ( 或者 `fetch` 、 `ajax` )： 用于发起 `GET` 、或 `POST` 等 `http` 请求， 基于
5. `Promise` 设计。
6. `vuex` 等：⼀个专为 `vue` 设计的移动端 UI 组件库。
7. 创建⼀个 `emit.js` 文件，用于 `vue` 事件机制的管理。
8. `webpack` ：模块加载和 `vue-cli` 工程打包器。

问题二：`vue-cli` 工程常用的 `npm` 命令有哪些？

1. 下载 `node_modules` 资源包的命令：

```shell
npm install
```

2. 启动 `vue-cli` 开发环境的 `npm` 命令：

```shell
npm run dev
```

3. `vue-cli` 生成 生产环境部署资源 的 `npm` 命令：

```shell
npm run build
```

4. 用于查看 `vue-cli` 生产环境部署资源文件大小的 `npm` 命令：

```shell
npm run build --report
```

在浏览器上自动弹出⼀个 展示 `vue-cli` 工程打包后 `app.js` 、`manifest.js` 、 `vendor.js` 文件里面所包含代码的页面 。可以具此优化 `vue-cli` 生产环境部署的静态资源，提升页面的加载速度

## 16. NextTick

`nextTick` 可以让我们在下次 `DOM` 更新循环结束之后执行延迟回调，用于获得更新后的 `DOM`

## 17. vue 的优点是什么？

1. 低耦合 。视图 ( `View` ) 可以独立于 `Model` 变化和修改，⼀个 `ViewModel` 可以绑定到不同的 `"View"` 上， 当 `View` 变化的时候 `Model` 可以不变， 当 `Model` 变化的时候 `View` 也可以不变
2. 可重用性 。你可以把⼀些视图逻辑放在⼀个 `ViewModel` 里面，让很多 `view` 重用这段视图逻辑
3. 可测试 。界面素来是比较难于测试的， 而现在测试可以针对 `ViewModel` 来写

## 18. 路由之间跳转？

声明式 (标签跳转)

```vue
<router-link :to="index" />
```

编程式 ( js 跳转)

```js
router.push("index");
```

## 19. 实现 Vue SSR

其基本实现原理

1. `app.js` 作为客户端与服务端的公用入口， 导出 `Vue` 根实例，供客户端 `entry` 与服务端 `entry` 使用 。客户端 `entry` 主要作用挂载到 `DOM` 上， 服务端 `entry` 除了创建和返回实例， 还进行路由匹配与数据预获取
2. `webpack` 为客服端打包⼀个 `Client Bundle` ， 为服务端打包⼀个 `Server Bundle` 。
3. 服务器接收请求时，会根据 `url` ，加载相应组件， 获取和解析异步数据，创建⼀个读取 `Server Bundle` 的 `BundleRenderer` ，然后生成 `html` 发送给客户端。
4. 客户端混合，客户端收到从服务端传来的 `DOM` 与自⼰的生成的 `DOM` 进行对比， 把不相同的 `DOM` 激活，使其可以能够响应后续变化， 这个过程称为客户端激活 。为确保混合成功，客户端与服务器端需要共享同⼀套数据 。在服务端， 可以在渲染之前获取数据，填充到 `stroe` 里， 这样，在客户端挂载到 `DOM` 之前， 可以直接从 store 里取数据 。首屏的动态数据通过 `window.__INITIAL_STATE__` 发送到客户端

`Vue SSR` 的实现， 主要就是把 `Vue` 的组件输出成⼀个完整 `HTML` , `vue-server-renderer` 就是干这事的

`Vue SSR` 需要做的事多点 ( 输出完整 `HTML` )， 除了 `complier` -> `vnode` ， 还需如数据获取填充至 `HTML` 、客户端混合 ( `hydration` ) 、缓存等等 。 相比于其他模板引擎( `ejs` , `jade` 等)， 最终要实现的目的是⼀样的，性能上可能要差点

## 20. Vue 组件 data 为什么必须是函数

每个组件都是 `Vue` 的实例。

组件共享 `data` 属性， 当 `data` 的值是同⼀个引用类型的值时， 改变其中⼀个会影响其他

## 21. Vue computed 实现

建立与其他属性 ( 如： `data` 、 `Store` ) 的联系；

属性改变后， 通知计算属性重新计算

实现时， 主要如下：

1. 初始化 `data` ， 使用 `Object.defineProperty` 把这些属性全部转为 `getter/setter` 。
2. 初始化 `computed` , 遍历 `computed` 里的每个属性，每个 `computed` 属性都是⼀个 `watch` 实例 。每个属性提供的函数作为属性的 `getter` ，使用` Object.defineProperty` 转化。
3. `Object.defineProperty` `getter` 依赖收集 。用于依赖发生变化时，触发属性重新计算。
4. 若出现当前 `computed` 计算属性嵌套其他 `computed` 计算属性时， 先进行其他的依赖收集

## 22. Vue complier 实现

模板解析这种事，本质是将数据转化为⼀段 `html` ， 最开始出现在后端， 经过各种处理吐给前端 。随着各种 `mv*` 的兴起，模板解析交由前端处理。

总的来说， `Vue complier` 是将 `template` 转化成⼀个 `render` 字符串

可以简单理解成以下步骤：

1. `parse` 过程，将 `template` 利用正则转化成 `AST` 抽象语法树 。
2. `optimize` 过程，标记静态节点，后 `diff` 过程跳过静态节点，提升性能。
3. `generate` 过程，生成 `render` 字符串

## 23. 怎么快速定位哪个组件出现性能问题

用 `timeline` 工具 。 大意是通过 `timeline` 来查看每个函数的调用时常，定位出哪个函数的问题，从而能判断哪个组件出了问题

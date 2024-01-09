# React

## 1. React 中 keys 的作用是什么？

`Keys` 是 `React` 用于追踪哪些列表中元素被修改 、被添加或者被移除的辅助标识

在开发过程中， 我们需要保证某个元素的 `key` 在其同级元素中具有唯⼀性 。在 `React Diff` 算法中 `React` 会借助元素的 `Key` 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染 。此外， `React` 还需要借助 `Key` 值来判断元素与本地状态的关联关系， 因此我们绝不可忽视转换函数中 `Key` 的重要性

## 2. 传入 setState 函数的第二个参数的作用是什么？

该函数会在 `setState` 函数调用完成并且组件开始重渲染的时候被调用， 我们可以用该函数来监听渲染是否完成：

```js
this.setState({ username: "tylermcginnis33" }, () =>
  console.log("setState has finished and the component has re-rendered.")
);
this.setState((prevState, props) => {
  return {
    streak: prevState.streak + props.count,
  };
});
```

## 3. React 中 refs 的作用是什么

`Refs` 是 `React` 提供给我们的安全访问 `DOM` 元素或者某个组件实例的句柄，可以为元素添加 `ref` 属性然后在回调函数中接受该元素在 `DOM` 树中的句柄，该值会作为回调函数的第⼀个参数返回

## 4. 在生命周期中的哪⼀步你应该发起 AJAX 请求

我们应当将 `AJAX` 请求放到 `componentDidMount` 函数中执⾏， 主要原因有下：

1. `React` 下⼀代调和算法 `Fiber` 会通过开始或停止渲染的方式优化应用性能， 其会影响到 `componentWillMount` 的触发次数 。对于 `componentWillMount` 这个生命周期函数的调用次数会变得不确定， React 可能会多次频繁调用 `componentWillMount` 。如果我们将 `AJAX` 请求放到 `componentWillMount` 函数中，那么显而易⻅其会被触发多次， 自然也就不是好的选择
2. 如果我们将 `AJAX` 请求放置在生命周期的其他函数中， 我们并不能保证请求仅在组件挂载完毕后才会要求响应 。如果我们的数据请求在组件挂载之前就完成， 并且调用了 `setState` 函数将数据添加到组件状态中，对于未挂载的组件则会报错 。而在 `componentDidMount` 函数中进⾏ `AJAX` 请求则能有效避免这个问题

## 5. shouldComponentUpdate 的作用

`shouldComponentUpdate` 允许我们手动地判断是否要进⾏组件更新，根据组件的应用场景设置函数的合理返回值能够帮我们避免不必要的更新

## 6. 如何告诉 React 它应该编译生产环境版

通常情况下我们会使用 `Webpack` 的 `DefinePlugin` ⽅法来将 `NODE_ENV` 变量值设置为 `production` 。编译版本中 `React` 会忽略 `propType` 验证以及其他的告警信息， 同时还会降低代码库的大⼩， `React` 使用了 Uglify 插件来移除生产环境下不必要的注释等信息

## 7. 概述下 React 中的事件处理逻辑

为了解决跨浏览器兼容性问题， `React` 会将浏览器原生事件 ( `Browser Native Event` ) 封装为合成事件 ( `SyntheticEvent` ) 传⼊设置的事件处理器中 。这里的合成事件提供了与原生事件相同的接⼝，不过它们屏蔽了底层浏览器的细节差异，保证了⾏为的⼀致性 。另外有意思的是， `React` 并没有直接将事件附着到⼦元素上， 而是以单⼀事件监听器的⽅式将所有的事件发送到顶层进⾏处理 。这样 `React` 在更新 `DOM` 的时候就不需要考虑如何去处理附着在 `DOM` 上的事件监听器， 最终达到优化性能的目的

## 8. createElement 与 cloneElement 的区别是什么

`createElement` 函数是 `JSX` 编译之后使用的创建 `React Element` 的函数， 而 `cloneElement` 则是用于复制某个元素并传⼊新的 `Props`

## 9. redux 中间件

中间件提供第三⽅插件的模式， 自定义拦截 `action` -> `reducer` 的过程。变为 `action` -> `middlewares` -> `reducer` 。这种机制可以让我们改变数据流， 实现如异步 `action` ， `action` 过滤， ⽇志输出，异常报告等功能

- `redux-logger` ：提供⽇志输出
- `redux-thunk` ：处理异步操作
- `redux-promise` ：处理异步操作， `actionCreator` 的返回值是 `promise`

## 10. redux 有什么缺点

1. ⼀个组件所需要的数据，必须由父组件传过来， 而不能像 `flux` 中直接从 `store` 取。
2. 当⼀个组件相关数据更新时， 即使父组件不需要用到这个组件， 父组件还是会重新 `render` ， 可能会有效率影响， 或者需要写复杂的 `shouldComponentUpdate` 进行判断。

## 11. react 组件的划分业务组件技术组件？

1. 根据组件的职责通常把组件分为 `UI` 组件和容器组件。
2. `UI` 组件负责 `UI` 的呈现， 容器组件负责管理数据和逻辑。
3. 两者通过 `React-Redux` 提供 `connect` ⽅法联系起来

## 12. react 生命周期函数

1. 初始化阶段

- `getDefaultProps` : 获取实例的默认属性
- `getInitialState` : 获取每个实例的初始化状态
- `componentWillMount` ：组件即将被装载 、渲染到页面上
- `render` : 组件在这里生成虚拟的 DOM 节点
- `omponentDidMount` : 组件真正在被装载之后

2. 运行中状态

- `componentWillReceiveProps` : 组件将要接收到属性的时候调用
- `shouldComponentUpdate` : 组件接受到新属性或者新状态的时候 ( 可以返回 `false` ，接收数据后不更新， 阻止 `render` 调用，后面的函数不会被继续执行了)
- `componentWillUpdate` : 组件即将更新不能修改属性和状态
- `render` : 组件重新描绘
- `componentDidUpdate` : 组件已经更新

3. 销毁阶段

- `componentWillUnmount` : 组件即将销毁

## 13. react 性能优化是哪个周期函数

`shouldComponentUpdate` 这个⽅法用来判断是否需要调用 `render` ⽅法重新描绘 `dom` 。因为 dom 的描绘非常消耗性能， 如果我们能在 `shouldComponentUpdate` ⽅ 法中能够写出更优化的 `dom diff` 算法， 可以极大的提高性能

## 14. 为什么虚拟 dom 会提高性能

虚拟 `dom` 相当于在 `js` 和真实 `dom` 中间加了⼀个缓存，利用 `dom diff` 算法避免了没有必要的 `dom` 操作，从而提高性能

具体实现步骤如下：

1. 用 `JavaScript` 对象结构表示 `DOM` 树的结构；然后用这个树构建⼀个真正的 `DOM` 树，插到⽂档当中
2. 当状态变更的时候， 重新构造⼀棵新的对象树 。然后用新的树和旧的树进行比较，记录两棵树差异
3. 把 2 所记录的差异应用到步骤 1 所构建的真正的 `DOM` 树上， 视图就更新

## 15. diff 算法?

1. 把树形结构按照层级分解， 只比较同级元素。
2. 给列表结构的每个单元添加唯⼀的 key 属性， ⽅便比较。
3. `React` 只会匹配相同 `class` 的 `component` ( 这里面的 `class` 指的是组件的名字)
4. 合并操作，调用 `component` 的 `setState` ⽅法的时候, `React` 将其标记为 - `dirty` . 到每⼀个事件循环结束, `React` 检查所有标记 `dirty` 的 `component` 重新绘制
5. 选择性⼦树渲染 。开发⼈员可以重写 `shouldComponentUpdate` 提高 `diff` 的性能

## 16. react 性能优化方案

1. 重写 `shouldComponentUpdate` 来避免不必要的 dom 操作
2. 使用 `production` 版本的 `react.js`
3. 使用 `key` 来帮助 `React` 识别列表中所有⼦组件的最⼩变化

## 17. 简述 flux 思想

`Flux` 的最大特点，就是数据的"单向流动"。

1. 用户访问 `View`
2. `View` 发出用户的 `Action`
3. `Dispatcher` 收到 `Action` ，要求 `Store` 进行相应的更新
4. `Store` 更新后，发出⼀个 `"change"` 事件
5. `View` 收到 `"change"` 事件后，更新页面

## 18. 说说你用 react 有什么坑点？

1. JSX 做表达式判断时候，需要强转为 `boolean` 类型

如果不使用 !!b 进行强转数据类型，会在页面里面输出 0 。

```jsx
render() {
    const b = 0;
    return <div>
        {
        !!b && <div>这是⼀段文本</div>
        }
    </div>
}
```

2. 尽量不要在 `componentWillReviceProps` 里使用 `setState` ，如果⼀定要使用，那么需要判断结束条件，不然会出现无限重渲染，导致页面崩溃
3. 给组件添加 `ref` 时候，尽量不要使用匿名函数， 因为当组件更新的时候， 匿名函数会被当做新的 `prop` 处理，让 `ref` 属性接受到新函数的时候， `react` 内部会先清空 `ref` ，也就是会以 null 为回调参数先执行⼀次 `ref` 这个 `props` ，然后在以该组件的实例执行⼀次 `ref` ，所以用匿名函数做 `ref` 的时候，有的时候去 `ref` 赋值后的属性会取到 `null`
4. 遍历子节点的时候，不要用 `index` 作为组件的 `key` 进行传⼊

## 19. 我现在有⼀个 button ，要用 react 在上面绑定点击事件，要怎么做？

```js
class Demo {
  render() {
    return (
      <button
        onClick={(e) => {
          alert("我点击了按钮");
        }}
      >
        按钮
      </button>
    );
  }
}
```

你觉得你这样设置点击事件会有什么问题吗？

由于 `onClick` 使用的是匿名函数，所有每次重渲染的时候，会把该 `onClick` 当做⼀个新的 `prop` 来处理，会将内部缓存的 `onClick` 事件进行重新赋值，所以相对直接使用函数来说， 可能有⼀点的性能下降

修改:

```js
class Demo {
  onClick = (e) => {
    alert("我点击了按钮");
  };
  render() {
    return <button onClick={this.onClick}>按钮</button>;
  }
}
```

## 20. react 的虚拟 dom 是怎么实现的

首先说说为什么要使用 `Virturl DOM` ， 因为操作真实 DOM 的耗费的性能代价太高，所以 `react` 内部使用 js 实现了⼀套 `dom` 结构，在每次操作在和真实 dom 之前，使用实现好的 `diff` 算法，对虚拟 `dom` 进行比较， 递归找出有变化的 dom 节点，然后对其进行更新操作 。为了实现虚拟 `DOM` ， 我们需要把每⼀种节点类型抽象成对象，每⼀种节点类型有自⼰的属性，也就是 `prop` ，每次进行 `diff` 的时候， `react` 会先比较该节点类型，假如节点类型不⼀样，那么 `react` 会直接删除该节点，然后直接创建新的节点插⼊到其中，假如节点类型⼀样，那么会比较 `prop` 是否有更新，假如有 `prop` 不⼀样，那么 `react` 会判定该节点有更新，那么重渲染该节点，然后在对其⼦节点进行比较，⼀层⼀层往下， 直到没有⼦节点

## 21. react 的渲染过程中，兄弟节点之间是怎么处理的？也就是 key 值不⼀样的时候

通常我们输出节点的时候都是 `map` ⼀个数组然后返回⼀个 `ReactNode` ， 为了方便 `react` 内部进⾏优化， 我们必须给每⼀个 `reactNode` 添加 `key` ， 这个 `key prop` 在设计值处不是给开发者用的， 而是给 `react` 用的，大概的作用就是给每⼀个 `reactNode` 添加⼀个身份标识， 方便 `react` 进⾏识别，在重渲染过程中， 如果 `key` ⼀样，若组件属性有所变化，则 `react` 只更新组件对应的属性；没有变化则不更新， 如果 `key` 不⼀样，则 `react` 先销毁该组件，然后重新创建该组件

## 22. 那给我介绍⼀下 react

1. 以前我们没有 `jquery` 的时候， 我们大概的流程是从后端通过 `ajax` 获取到数据然后使用 `jquery`
   生成 `dom` 结果然后更新到⻚⾯当中，但是随着业务发展， 我们的项目可能会越来越复杂，
   我们每次请求到数据， 或则数据有更改的时候， 我们⼜需要重新组装⼀次 `dom` 结构，然后
   更新⻚⾯， 这样我们⼿动同步 `dom` 和数据的成本就越来越高， 而且频繁的操作 `dom` ，也使
   我我们⻚⾯的性能慢慢的降低。
2. 这个时候 `mvvm` 出现了， `mvvm` 的双向数据绑定可以让我们在数据修改的同时同步 `dom` 的更
   新，`dom` 的更新也可以直接同步我们数据的更改， 这个特定可以大大降低我们⼿动去维护
   `dom` 更新的成本， `mvvm` 为 `react` 的特性之⼀， 虽然 `react` 属于单项数据流， 需要我们⼿动实
   现双向数据绑定。
3. 有了 `mvvm` 还不够， 因为如果每次有数据做了更改，然后我们都全量更新 `dom` 结构的话，也
   没办法解决我们频繁操作 `dom` 结构(降低了⻚⾯性能)的问题， 为了解决这个问题， `react` 内
   部实现了⼀套虚拟 `dom` 结构，也就是用 js 实现的⼀套 `dom` 结构，他的作用是讲真实 `dom` 在 `js`
   中做⼀套缓存，每次有数据更改的时候， `react` 内部先使用算法，也就是鼎鼎有名的 `diff` 算
   法对 `dom` 结构进⾏对比，找到那些我们需要新增 、更新 、删除的 `dom` 节点，然后⼀次性对
   真实 `DOM` 进⾏更新， 这样就大大降低了操作 `dom` 的次数 。 那么 `diff` 算法是怎么运作的呢，
   首先，`diff` 针对类型不同的节点，会直接判定原来节点需要卸载并且用新的节点来装载卸载
   的节点的位置；针对于节点类型相同的节点，会对比这个节点的所有属性， 如果节点的所
   有属性相同，那么判定这个节点不需要更新， 如果节点属性不相同，那么会判定这个节点
   需要更新， `react` 会更新并重渲染这个节点。
4. `react` 设计之初是主要负责 `UI` 层的渲染， 虽然每个组件有自⼰的 `state` ， `state` 表示组件的状
   态， 当状态需要变化的时候， 需要使用 `setState` 更新我们的组件，但是， 我们想通过⼀个组
   件重渲染它的兄弟组件， 我们就需要将组件的状态提升到父组件当中，让父组件的状态来
   控制这两个组件的重渲染， 当我们组件的层次越来越深的时候，状态需要⼀直往下传， ⽆
   疑加大了我们代码的复杂度， 我们需要⼀个状态管理中⼼ ，来帮我们管理我们状态 `state` 。
5. 这个时候， `redux` 出现了， 我们可以将所有的 `state` 交给 `redux` 去管理， 当我们的某⼀个 `state`
   有变化的时候，依赖到这个 `state` 的组件就会进行⼀次重渲染， 这样就解决了我们的我们需
   要⼀直把 `state` 往下传的问题 `。redux` 有 `action`、`reducer` 的概念，`action` 为唯⼀修改 `state` 的 来源， `reducer` 为唯⼀确定 `state` 如何变化的⼊⼝ ， 这使得 `redux` 的数据流非常规范， 同时也暴露出了 `redux` 代码的复杂，本来那么简单的功能，却需要完成那么多的代码。
6. 后来，社区就出现了另外⼀套解决⽅案，也就是 `mobx` ， 它推崇代码简约易懂， 只需要定义
   ⼀个可观测的对象，然后哪个组价使用到这个可观测的对象， 并且这个对象的数据有更
   改，那么这个组件就会重渲染， 而且 `mobx` 内部也做好了是否重渲染组件的生命周期
   `shouldUpdateComponent`，不建议开发者进行更改， 这使得我们使用 `mobx` 开发项目的时
   候可以简单快速的完成很多功能， 连 `redux` 的作者也推荐使用 `mobx` 进行项目开发 。但是，
   随着项目的不断变大， `mobx` 也不断暴露出了它的缺点，就是数据流太随意， 出了 `bug` 之后
   不好追溯数据的流向， 这个缺点正好体现出了 `redux` 的优点所在，所以针对于⼩项目来说，
   社区推荐使用 `mobx` ，对大项目推荐使用 `redux`

# Vue

## 1. nextTick

在下次 `dom` 更新循环结束之后执行延迟回调， 可用于获取更新后的 `dom` 状态

1. 新版本中默认是 `mincrotasks` , `v-on` 中会使用 `macrotasks`
2. `macrotasks` 任务的实现:
   - `setImmediate` / `MessageChannel` / `setTimeout`

## 2. 生命周期

### init

1. `initLifecycle/Event` ，往 `vm` 上挂载各种属性
2. `callHook: beforeCreated` : 实例刚创建
3. `initInjection/initState` : 初始化注⼊和 `data` 响应性
4. `created`: 创建完成，属性已经绑定， 但还未生成真实 `dom`
5. 进行元素的挂载： `$el` / `vm.$mount()`
6. 是否有 `template` : 解析成 `render function`
   - `*.vue` 文件: `vue-loader` 会将 `<template>` 编译成 `render function`
7. `beforeMount` : 模板编译/挂载之前
8. 执行 `render function` ，生成真实的 `dom` ， 并替换到 `dom tree` 中
9. `mounted` : 组件已挂载

### update

1. 执行 `diff` 算法， 比对改变是否需要触发 `UI` 更新
2. `flushScheduleQueue`
3. `watcher.before` : 触发 `beforeUpdate` 钩子 - `watcher.run()` : 执行 `watcher` 中的 `notify` ， 通知所有依赖项更新 `UI`
4. 触发 `updated` 钩子: 组件已更新
5. `actived` / `deactivated(keep-alive)` : 不销毁， 缓存， 组件激活与失活
6. `destroy`
   - `beforeDestroy` : 销毁开始
   - 销毁自身且递归销毁子组件以及事件监听
     - `remove()` : 删除节点
     - `watcher.teardown()` : 清空依赖
     - `vm.$off()` : 解绑监听
   - destroyed : 完成后触发钩子

上面是 vue 的声明周期的简单梳理，接下来我们直接以代码的形式来完成 vue 的初始化

```js
new Vue({});
// 初始化Vue实例
function initVue() {
  // 挂载属性
  initLifeCycle(vm);
  // 初始化事件系统，钩子函数等
  initEvent(vm);
  // 编译slot、vnode
  initRender(vm);
  // 触发钩子
  callHook(vm, "beforeCreate");
  // 添加inject功能
  initInjection(vm);
  // 完成数据响应性 props/data/watch/computed/methods
  initState(vm);
  // 添加 provide 功能
  initProvide(vm);
  // 触发钩子
  callHook(vm, "created");
  // 挂载节点
  if (vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
}

// 挂载节点实现
function mountComponent(vm) {
  // 获取 render function
  if (!this.options.render) {
    // template to render
    // Vue.compile = compileToFunctions()
    let { render } = compileToFunctions();
    this.options.render = render;
  }
  // 触发钩子
  callHook("beforeMounte");
  // 初始化观察者
  // render 渲染 vdom，
  vdom = vm.render();
  // update: 根据 diff 出的 patchs 挂载成真实的 dom
  vm._update(vdom);
  // 触发钩子
  callHook(vm, "mounted");
}

// 更新节点实现
function queueWatcher(watcher) {
  nextTick(flushScheduleQueue);
}

// 清空队列
function flushScheduleQueue() {
  // 遍历队列中所有修改
  for (let i = 0; i < watcherQueue.length; i++) {
    // beforeUpdate
    watcher.before();
    // 依赖局部更新节点
    watcher.update();
    callHook("updated");
  }
}

// 销毁实例实现
Vue.prototype.$destory = function () {
  // 触发钩子
  callHook(vm, "beforeDestory");
  // 自身及子节点
  remove();
  // 删除依赖
  watcher.teardown();
  // 删除监听
  vm.$off();
  // 触发钩子
  callHook(vm, "destoryed");
};
```

## 3. Proxy 相比于 defineProperty 的优势

1. 数组变化也能监听到
2. 不需要深度遍历监听

```js
let data = { a: 1 };
let reactiveData = new Proxy(data, {
  get: function (target, name) {
    // ...
  },
  // ...
});
```

## 4. vue-router

### mode

- `hash`
- `history`

### 跳转

- `this.$router.push()`
- `<router-link to=""></router-link>`

### 占位

```vue
<router-view></router-view>
```

## 5. vuex

1. `state` : 状态中心
2. `mutations` : 更改状态
3. `actions` : 异步更改状态
4. `getters` : 获取状态
5. `modules` : 将 `state` 分成多个 `modules` ，便于管理

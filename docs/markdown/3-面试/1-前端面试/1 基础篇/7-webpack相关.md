# webpack 相关

## 1. 打包体积 优化思路

1. 提取第三⽅库或通过引用外部⽂件的⽅式引⼊第三⽅库
2. 代码压缩插件 `UglifyJsPlugin`
3. 服务器启用 gzip 压缩
4. 按需加载资源⽂件 `require.ensure`
5. 优化 `devtool` 中的 `source-map`
6. 剥离 `css` ⽂件， 单独打包
7. 去除不必要插件， 通常就是开发环境与生产环境用同⼀套配置⽂件导致

## 2. 打包效率

1. 开发环境采用增量构建，启用热更新
2. 开发环境不做无意义的工作如提取 `css` 计算文件 hash 等
3. 配置 `devtool`
4. 选择合适的 `loader`
5. 个别 `loader` 开启 `cache` 如 `babel-loader`
6. 第三方库采用引⼊方式
7. 提取公共代码
8. 优化构建时的搜索路径 指明需要构建目录及不需要构建目录
9. 模块化引⼊需要的部分

## 3. Loader

`loader` 就是⼀个 `node` 模块， 它输出了⼀个函数 。当某种资源需要用这个 `loader` 转换时， 这个函数会被调用 。并且， 这个函数可以通过提供给它的 `this` 上下文访问 `Loader API` 。 `reverse-txt-loader`

编写⼀个 loader

```js
// 定义
module.exports = function(src) {
//src是原文件内容 ( abcde)，下面对内容进行处理， 这里是反转
var result = src.split( '').reverse().join( '');
//返回JavaScript源码，必须是String或者Buffer
return `module.exports = '${result} '`;
}
//使用
{
    test: /\.txt$/,
    use: [
        {
        './path/reverse-txt-loader'
        }
    ]
}
```

## 4. 说⼀下 webpack 的⼀些 plugin ， 怎么使用 webpack 对项目进行优化

### 构建优化

1. 减少编译体积 `ContextReplacementPugin` 、 `IgnorePlugin` 、 `babel-plugin-import` 、 `babel-plugin-transform-runtime`
2. 并行编译 `happypack` 、 `thread-loader` 、 `uglifyjsWebpackPlugin` 开启并行
3. 缓存 `cache-loader` 、 `hard-source-webpack-plugin` 、 `uglifyjsWebpackPlugin` 开启缓存 、 `babel-loader` 开启缓存
4. 预编译 `dllWebpackPlugin` && `DllReferencePlugin` 、 `auto-dll-webapck-plugin`

### 性能优化

1. 减少编译体积 `Tree-shaking` 、 `Scope Hositing`
2. `hash` 缓存 `webpack-md5-plugin`
3. 拆包 `splitChunksPlugin` 、 `import()` 、 `require.ensure`

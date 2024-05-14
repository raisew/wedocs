# 因为node版本打包失败

解决方案:

方案1：打开IDEA 终端，直接输入

Linux & Mac OS：

```jsx
export NODE_OPTIONS=--openssl-legacy-provider
```

Windows：

```jsx
set NODE_OPTIONS=--openssl-legacy-provider
```

方案2：打开IDEA 终端，直接输入（问题解决）

```jsx
$env:NODE_OPTIONS="--openssl-legacy-provider"
```

方案3：卸载Node.js17+版本，安装Node.js17-版本（一劳永逸，本人太懒就没尝试）

以上是三种解决方案，两种临时方案各位可以多做一下尝试，如果还实在不行就卸载Node.js重新安装17-的版本
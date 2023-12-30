# Cookie 和 Session

## 区别

1. <font>cookie</font> 数据存放在客户的浏览器上，<font>session</font> 数据放在服务器上
2. <font>cookie</font> 不是很安全，别人可以分析存放在本地的 <font>cookie</font> 并进行 <font>cookie</font> 欺骗
   考虑到安全应当使用 <font>session</font>
3. <font>session</font> 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
   考虑到减轻服务器性能方面，应当使用 <font>cookie</font>
4. <font>cookie</font> 有大小限制

## Cookie 理解

产生原因：<font>HTTP</font> 是无状态协议，但现代有大量需要服务器辨别客户端的场景

运行理解：

1. 服务器在响应报文设置 <font>Set-Cookie</font>，通知客户端保存 <font>Cookie</font>
2. 下次客户端再往该服务器 发送请求时，客户端会自动在请求报文中加入 <font>Cookie</font> 值
3. 服务器可以根据请求报文的 <font>Cookie</font> 中的自定义的唯一表示标识辨别客户端身份

> 列子：
> 没有 <font>Cookie</font> 信息状态下的请求，服务器为它生成一个 <font>sid</font>，并存入 <font>Cookie</font> 中返回
> ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202312301639096.png)
> 请求报文（没有 <font>Cookie</font> 信息的状态）
>
> ```js
> GET / reader / HTTP / 1.1;
> Host: hackr.jp;
> ```
>
> 响应报文（服务器端生成 <font>Cookie</font> 信息）
>
> ```js
> HTTP/1.1 200 OK
> Date: Thu, 12 Jul 2012 07:12:20 GMT
> Server: Apache
> ＜ Set-Cookie: sid=1342077140226724; path=/; expires=Wed,
> 10-Oct-12 07:12:20 GMT ＞
> Content-Type: text/plain; charset=UTF-8
> ```

> 第 2 次以后（存有 Cookie 信息状态）的请求
> ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202312301650752.png)
> 请求报文（自动发送保存着的 Cookie 信息）
>
> ```js
> GET / image / HTTP / 1.1;
> Host: hackr.jp;
> Cookie: sid = 1342077140226724;
> ```

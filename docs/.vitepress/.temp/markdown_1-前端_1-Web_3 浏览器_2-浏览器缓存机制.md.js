import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"浏览器缓存机制","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/1-Web/3 浏览器/2-浏览器缓存机制.md","filePath":"markdown/1-前端/1-Web/3 浏览器/2-浏览器缓存机制.md"}');
const _sfc_main = { name: "markdown/1-前端/1-Web/3 浏览器/2-浏览器缓存机制.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="浏览器缓存机制" tabindex="-1">浏览器缓存机制 <a class="header-anchor" href="#浏览器缓存机制" aria-label="Permalink to &quot;浏览器缓存机制&quot;">​</a></h1><h2 id="强缓存" tabindex="-1">强缓存 <a class="header-anchor" href="#强缓存" aria-label="Permalink to &quot;强缓存&quot;">​</a></h2><ul><li>由两个字段控制： <ol><li><strong>HTTP1.0</strong>提供的 <code>Expires </code>，值为⼀个<code>绝对时间</code>表示缓存新鲜⽇期</li><li><strong>HTTP1.1</strong>提供的 <code>Cache-Control: max-age=</code> ，值为以秒为单位的<code>最大新鲜时间</code></li></ol></li><li>没有过期则使用缓存，已过期则重新请求</li></ul><blockquote><p><code>max-age</code> 是为了弥补 <code>Expires</code> 绝对时间，服务器和客户端所使用可能地区时间可能不一致的问题</p></blockquote><h2 id="协商缓存" tabindex="-1">协商缓存 <a class="header-anchor" href="#协商缓存" aria-label="Permalink to &quot;协商缓存&quot;">​</a></h2><ul><li>有两个字段控制： <ol><li><code>ETag / If-None-Match</code>：文件的 <code>hash </code>值 <ul><li>响应报文会携带 <code>ETag</code>，代表文件当前在服务器的 <code>hash</code> 值</li><li>下次响应报文会携带 <code>If-None-Match</code>，如果此时资源在服务器的 <code>hash</code> 值不等于这个，则返回新的资源</li></ul></li><li><code>Last-Modified / If-Modified-Since</code>：文件的<code>修改时间</code>，精确到秒 <ul><li>响应报文会携带 <code>Last-Modified</code>，代表此资源最后的修改时间</li><li>下次响应报文会携带 <code>If-Modified-Since</code>，如果此时资源在服务器的修改时间大于这个值，则返回新的资源</li></ul></li></ol></li><li>协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存，服务器对比后，若改变则返回新资源，若没改变则返回<code>304</code></li></ul><blockquote><p><code>ETag</code> 是为了弥补 <code>Last-Modified</code> 没有正确感知文件的变化而出现的。不如修复文件速度（100ms）过快，而 <code>Last-Modified</code> 只能以秒为最小计量单位，导致感知不到变动等</p></blockquote><h2 id="no-store-和-no-cache" tabindex="-1">no-store 和 no-cache <a class="header-anchor" href="#no-store-和-no-cache" aria-label="Permalink to &quot;no-store 和 no-cache&quot;">​</a></h2><ul><li>no-cache：设置此属性的资源，每一次发起请求都不会询问强缓存，而是去确认协商缓存的情况</li><li>no-store：设置此属性的资源，无论强缓存还是协商缓存都会绕开，直接向服务端发送请求、并下载完整的响应</li></ul><h2 id="chrome-缓存决策" tabindex="-1">chrome 缓存决策 <a class="header-anchor" href="#chrome-缓存决策" aria-label="Permalink to &quot;chrome 缓存决策&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/202211170023943.png" alt=""></p><h2 id="何时使用" tabindex="-1">何时使用 <a class="header-anchor" href="#何时使用" aria-label="Permalink to &quot;何时使用&quot;">​</a></h2><blockquote><p><strong>如果有新版本出现，但资源还在强缓存时间内，用户不就看不到最新的资源了吗？</strong></p></blockquote><p>所以前端最好的缓存方案是：<code>html</code>文档使用协商缓存，其他静态资源使用强缓存</p><p>当静态文件（如图片等），发生改变时，则会改变<code>hash</code>值，这样html文档请求的静态文件路径就会改变，就可以拿到最新的静态文件了</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/1-Web/3 浏览器/2-浏览器缓存机制.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2________ as default
};

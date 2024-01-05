import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"CSRF攻击","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/1-Web/2 安全/1-CSRF攻击.md","filePath":"markdown/1-前端/1-Web/2 安全/1-CSRF攻击.md"}');
const _sfc_main = { name: "markdown/1-前端/1-Web/2 安全/1-CSRF攻击.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="csrf攻击" tabindex="-1">CSRF攻击 <a class="header-anchor" href="#csrf攻击" aria-label="Permalink to &quot;CSRF攻击&quot;">​</a></h1><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><ol><li>网站使用 cookieId-session 的方式作为辨别用户的手段 <ul><li>即用户登陆后，服务器会生成一个 sessionId，保存在服务器内部，并返回给用户，用户后面的请求都在 cookie 中带上这个 sessionId，让服务器信任这个用户发送的请求</li></ul></li><li>攻击者诱导已登陆的用户，点击攻击者写好的一个网站</li><li>当用户进入这个网站，攻击者就把用户进入时的请求头部中的 cookie 记录下来</li><li>然后请求一个服务器端的某个请求，并在请求的时候带上 cookie，让服务器端信任攻击者</li></ol><h2 id="防范" tabindex="-1">防范 <a class="header-anchor" href="#防范" aria-label="Permalink to &quot;防范&quot;">​</a></h2><ol><li>服务器端验证请求的域是否是可信任的，不可信任的（如攻击者发送的请求）就屏蔽掉</li><li><code>Token</code>：网站使用 <strong>token</strong> 的手段辨别用户，在客户端请求页面的时候，服务器生成一个 <strong>token</strong>，返回给客户端，往后一些重要的请求都要求带上这个 <strong>token</strong>，这样就算用户点击进入攻击网站，由于请求攻击网站不属于重要请求，所以也不会带上 token，攻击者自然不知道 token 是什么，这样攻击者也无法请求重要的请求了</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/1-Web/2 安全/1-CSRF攻击.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1CSRF__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1CSRF__ as default
};

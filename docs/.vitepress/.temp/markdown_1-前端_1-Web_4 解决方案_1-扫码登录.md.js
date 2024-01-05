import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"扫码登录","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/1-Web/4 解决方案/1-扫码登录.md","filePath":"markdown/1-前端/1-Web/4 解决方案/1-扫码登录.md"}');
const _sfc_main = { name: "markdown/1-前端/1-Web/4 解决方案/1-扫码登录.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="扫码登录" tabindex="-1">扫码登录 <a class="header-anchor" href="#扫码登录" aria-label="Permalink to &quot;扫码登录&quot;">​</a></h1><h2 id="app-认证机制" tabindex="-1">APP 认证机制 <a class="header-anchor" href="#app-认证机制" aria-label="Permalink to &quot;APP 认证机制&quot;">​</a></h2><ul><li>初次登录，会向服务端发送账号密码、设备信息（每台设备的信息都是唯一的）</li><li>账号密码校验通过，服务端会把账号与设备进行一个绑定，进行持久化的保存</li><li>APP 后续每次请求除了携带token，还需要携带设备信息</li></ul><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/202205032108174.svg" alt=""></p><h2 id="扫码认证机制" tabindex="-1">扫码认证机制 <a class="header-anchor" href="#扫码认证机制" aria-label="Permalink to &quot;扫码认证机制&quot;">​</a></h2><ul><li>PC 访问登录页面，请求服务端获取<code>二维码ID</code></li><li>服务端生成相应的<code>二维码ID</code>，设置二维码的过期时间，状态等</li><li>PC 获取<code>二维码ID</code>，生成相应的二维码</li><li>手机端扫描二维码，获取<code>二维码ID</code></li><li>手机端将<code>手机端token</code>和<code>二维码ID</code>发送给服务端，确认登录</li><li>服务端校验<code>手机端token</code>，根据<code>手机端token</code>和<code>二维码ID</code>生成<code>PC端token</code></li><li>PC端通过轮询方式请求服务端，通过<code>二维码ID</code>获取二维码状态，如果已成功，返回<code>PC token</code>，登录成功，如果超时，则重新请求二维码 ID</li></ul><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/202205032110666.svg" alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/1-Web/4 解决方案/1-扫码登录.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1_____ as default
};

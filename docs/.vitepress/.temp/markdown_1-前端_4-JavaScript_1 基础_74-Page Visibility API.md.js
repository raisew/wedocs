import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Page Visibility API","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/4-JavaScript/1 基础/74-Page Visibility API.md","filePath":"markdown/1-前端/4-JavaScript/1 基础/74-Page Visibility API.md"}');
const _sfc_main = { name: "markdown/1-前端/4-JavaScript/1 基础/74-Page Visibility API.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="page-visibility-api" tabindex="-1">Page Visibility API <a class="header-anchor" href="#page-visibility-api" aria-label="Permalink to &quot;Page Visibility API&quot;">​</a></h1><h2 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h2><p>获取当前页面对用户是否可见的信息</p><h2 id="document-visibilitystate" tabindex="-1">document.visibilityState <a class="header-anchor" href="#document-visibilitystate" aria-label="Permalink to &quot;document.visibilityState&quot;">​</a></h2><p>只读</p><ul><li><code>&#39;visible&#39;</code> : 此时页面内容至少是部分可见. 即此页面在前景标签页中，并且窗口没有最小化</li><li><code>&#39;hidden</code>&#39; : 此时页面对用户不可见. 即文档处于背景标签页或者窗口处于最小化状态，或者操作系统正处于 &#39;锁屏状态&#39;</li><li><code>&#39;prerender&#39;</code> : 页面此时正在渲染中, 因此是不可见的，文档只能从此状态开始，永远不能从其他值变为此状态</li></ul><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><ul><li><code>visibilitychange</code>：会在文档从隐藏变可见，或可见变隐藏时触发</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/4-JavaScript/1 基础/74-Page Visibility API.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _74Page_Visibility_API = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _74Page_Visibility_API as default
};

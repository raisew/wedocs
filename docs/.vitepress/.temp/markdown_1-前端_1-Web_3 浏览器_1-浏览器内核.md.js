import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"浏览器内核","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/1-Web/3 浏览器/1-浏览器内核.md","filePath":"markdown/1-前端/1-Web/3 浏览器/1-浏览器内核.md"}');
const _sfc_main = { name: "markdown/1-前端/1-Web/3 浏览器/1-浏览器内核.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="浏览器内核" tabindex="-1">浏览器内核 <a class="header-anchor" href="#浏览器内核" aria-label="Permalink to &quot;浏览器内核&quot;">​</a></h1><h2 id="各个浏览器及其内核" tabindex="-1">各个浏览器及其内核 <a class="header-anchor" href="#各个浏览器及其内核" aria-label="Permalink to &quot;各个浏览器及其内核&quot;">​</a></h2><p><code>IE</code>: <code>trident</code> 内核</p><p><code>Firefox</code>： <code>gecko</code> 内核</p><p><code>Safari</code>: <code>webkit</code>内核</p><p><code>Opera</code>: 以前是 <code>presto</code>内核，现改⽤ <code>Blink</code>内核</p><p><code>Chrome</code>:<code>Blink</code>内核（基于 webkit ）</p><h2 id="内核包含的引擎" tabindex="-1">内核包含的引擎 <a class="header-anchor" href="#内核包含的引擎" aria-label="Permalink to &quot;内核包含的引擎&quot;">​</a></h2><ol><li><code>渲染引擎</code>：负责取得⽹⻚的内容（ <strong>HTML</strong>、 <strong>XML</strong>、图像等等）、整理讯息（例如加⼊ <strong>CSS</strong>等），以及计算⽹⻚的显示⽅式，然后会输出⾄显示器或打印机。浏览器的内核的不同，渲染的效果也不相同</li><li><code>JS 引擎</code>：解析和执⾏ <strong>javascript</strong> 来实现⽹⻚的动态效果</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/1-Web/3 浏览器/1-浏览器内核.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1______ as default
};

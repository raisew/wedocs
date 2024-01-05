import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"src 和 href","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/2-HTML/1 基础/2-src和href.md","filePath":"markdown/1-前端/2-HTML/1 基础/2-src和href.md"}');
const _sfc_main = { name: "markdown/1-前端/2-HTML/1 基础/2-src和href.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="src-和-href" tabindex="-1">src 和 href <a class="header-anchor" href="#src-和-href" aria-label="Permalink to &quot;src 和 href&quot;">​</a></h1><h2 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h2><ol><li><code>src </code>⽤于替换当前元素</li><li><code>href </code>⽤于在当前⽂档和引⽤资源之间确⽴联系</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/2-HTML/1 基础/2-src和href.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2Src_href = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2Src_href as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"title 和 alt","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/2-HTML/1 基础/3-title和alt.md","filePath":"markdown/1-前端/2-HTML/1 基础/3-title和alt.md"}');
const _sfc_main = { name: "markdown/1-前端/2-HTML/1 基础/3-title和alt.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="title-和-alt" tabindex="-1">title 和 alt <a class="header-anchor" href="#title-和-alt" aria-label="Permalink to &quot;title 和 alt&quot;">​</a></h1><h2 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h2><ul><li><strong>title</strong>：当⿏标滑动到元素上的时候显示文字</li><li><strong>alt</strong>：是 <code>&lt;img&gt;</code> 的特有属性，是图⽚内容的等价描述，⽤于图⽚⽆法加载时显示、读屏器 阅读图⽚。可提图⽚⾼可访问性，除了纯装饰图⽚外都必须设置有意义的值，搜索引擎会重点分析</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/2-HTML/1 基础/3-title和alt.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _3Title_alt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _3Title_alt as default
};

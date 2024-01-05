import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"消除 inline-block 间隙","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/3-CSS/3 实用/4-消除 inline-block 间隙.md","filePath":"markdown/1-前端/3-CSS/3 实用/4-消除 inline-block 间隙.md"}');
const _sfc_main = { name: "markdown/1-前端/3-CSS/3 实用/4-消除 inline-block 间隙.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="消除-inline-block-间隙" tabindex="-1">消除 inline-block 间隙 <a class="header-anchor" href="#消除-inline-block-间隙" aria-label="Permalink to &quot;消除 inline-block 间隙&quot;">​</a></h1><h2 id="产生原因" tabindex="-1">产生原因 <a class="header-anchor" href="#产生原因" aria-label="Permalink to &quot;产生原因&quot;">​</a></h2><ul><li>代码的空格或换行形成一个空字符 <code>&quot;&quot;</code></li></ul><h2 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-label="Permalink to &quot;解决办法&quot;">​</a></h2><ol><li>移除空格</li><li>使⽤ <code>margin: -4px</code> 负值，消除空格</li><li>在父元素上使⽤ <code>font-size:0</code></li><li>在父元素上使用 <code>letter-spacing : -4px</code> （字体水平间隔）</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/3-CSS/3 实用/4-消除 inline-block 间隙.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _4____inlineBlock___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _4____inlineBlock___ as default
};

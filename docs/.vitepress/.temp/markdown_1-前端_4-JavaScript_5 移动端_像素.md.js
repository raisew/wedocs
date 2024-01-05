import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"像素","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/4-JavaScript/5 移动端/像素.md","filePath":"markdown/1-前端/4-JavaScript/5 移动端/像素.md"}');
const _sfc_main = { name: "markdown/1-前端/4-JavaScript/5 移动端/像素.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="像素" tabindex="-1">像素 <a class="header-anchor" href="#像素" aria-label="Permalink to &quot;像素&quot;">​</a></h1><h2 id="css-像素-px" tabindex="-1">CSS 像素（px） <a class="header-anchor" href="#css-像素-px" aria-label="Permalink to &quot;CSS 像素（px）&quot;">​</a></h2><ul><li>CSS 样式代码中使用的逻辑像素</li></ul><h2 id="物理像素-pt" tabindex="-1">物理像素（pt） <a class="header-anchor" href="#物理像素-pt" aria-label="Permalink to &quot;物理像素（pt）&quot;">​</a></h2><ul><li>显示屏由一个个像素点组成，每个像素点控制此点的颜色</li><li>同样宽高的手机可以有不同的分辨率（宽的像素点 * 高的像素点），分辨率越高，显示越清晰</li></ul><h2 id="css-像素和物理像素" tabindex="-1">CSS 像素和物理像素 <a class="header-anchor" href="#css-像素和物理像素" aria-label="Permalink to &quot;CSS 像素和物理像素&quot;">​</a></h2><ul><li>一般来说，物理像素会大于等于 <strong>CSS</strong> 像素，这样一个 <strong>CSS</strong> 像素会由多个物理像素组成，这样显示更高清</li><li><code>dpr</code>：设备像素比。<code>dpr=物理像素/css像素</code>(一个方向上)</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/4-JavaScript/5 移动端/像素.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  __ as default
};

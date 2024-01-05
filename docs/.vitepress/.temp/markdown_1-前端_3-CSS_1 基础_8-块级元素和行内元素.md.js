import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"块级元素和行内元素","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/3-CSS/1 基础/8-块级元素和行内元素.md","filePath":"markdown/1-前端/3-CSS/1 基础/8-块级元素和行内元素.md"}');
const _sfc_main = { name: "markdown/1-前端/3-CSS/1 基础/8-块级元素和行内元素.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="块级元素和行内元素" tabindex="-1">块级元素和行内元素 <a class="header-anchor" href="#块级元素和行内元素" aria-label="Permalink to &quot;块级元素和行内元素&quot;">​</a></h1><h2 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h2><h4 id="_1、排列" tabindex="-1">1、排列 <a class="header-anchor" href="#_1、排列" aria-label="Permalink to &quot;1、排列&quot;">​</a></h4><ol><li>行内元素会在水平方向上排列</li><li>块级元素占据一行，垂直方向排列</li></ol><h4 id="_2、嵌套" tabindex="-1">2、嵌套 <a class="header-anchor" href="#_2、嵌套" aria-label="Permalink to &quot;2、嵌套&quot;">​</a></h4><ol><li>行内元素只可以嵌套行内元素，不可以嵌套块级元素</li><li>块级元素可以嵌套行内元素和块级元素</li></ol><h4 id="_3、盒模型属性" tabindex="-1">3、盒模型属性 <a class="header-anchor" href="#_3、盒模型属性" aria-label="Permalink to &quot;3、盒模型属性&quot;">​</a></h4><ol><li>行内元素 <strong>width</strong>、<strong>height</strong>，垂直方向的 <strong>margin</strong> ，垂直方向的 <strong>padding</strong> 无效</li><li>块级元素都有效</li></ol><h4 id="_4、形状" tabindex="-1">4、形状 <a class="header-anchor" href="#_4、形状" aria-label="Permalink to &quot;4、形状&quot;">​</a></h4><ol><li>行内元素的形状可以是不规则的</li><li>块级元素的形状必定是一个矩形</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/3-CSS/1 基础/8-块级元素和行内元素.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _8__________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _8__________ as default
};

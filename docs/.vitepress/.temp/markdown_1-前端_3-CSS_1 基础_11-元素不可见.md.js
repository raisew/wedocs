import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"元素不可见","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/3-CSS/1 基础/11-元素不可见.md","filePath":"markdown/1-前端/3-CSS/1 基础/11-元素不可见.md"}');
const _sfc_main = { name: "markdown/1-前端/3-CSS/1 基础/11-元素不可见.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="元素不可见" tabindex="-1">元素不可见 <a class="header-anchor" href="#元素不可见" aria-label="Permalink to &quot;元素不可见&quot;">​</a></h1><blockquote><p><code>display: none</code>、<code>visibility: hidden</code>、<code>opacity: 0</code></p></blockquote><h2 id="结构" tabindex="-1">结构 <a class="header-anchor" href="#结构" aria-label="Permalink to &quot;结构&quot;">​</a></h2><ol><li><code>display: none</code>：会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击</li><li><code>visibility: hidden</code>：不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击</li><li><code>opacity: 0</code> ：不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击</li></ol><h2 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h2><ol><li><code>display: none</code>、<code>opacity: 0</code>：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示</li><li><code>visibility: hidden</code>：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式</li></ol><h2 id="性能" tabindex="-1">性能 <a class="header-anchor" href="#性能" aria-label="Permalink to &quot;性能&quot;">​</a></h2><ol><li><code>display: none</code>：修改元素会造成文档回流</li><li><code>visibility: hidden</code>：修改元素只会造成本元素的重绘,性能消耗较少</li><li><code>opacity: 0</code> ：修改元素会造成重绘，性能消耗较少</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/3-CSS/1 基础/11-元素不可见.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _11______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _11______ as default
};

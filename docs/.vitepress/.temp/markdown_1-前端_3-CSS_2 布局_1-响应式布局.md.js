import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"响应式布局","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/3-CSS/2 布局/1-响应式布局.md","filePath":"markdown/1-前端/3-CSS/2 布局/1-响应式布局.md"}');
const _sfc_main = { name: "markdown/1-前端/3-CSS/2 布局/1-响应式布局.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="响应式布局" tabindex="-1">响应式布局 <a class="header-anchor" href="#响应式布局" aria-label="Permalink to &quot;响应式布局&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><ul><li>传统的开发方式：自适应，即 <strong>PC</strong> 一套 <strong>css</strong> ，移动端一套 <strong>css</strong></li><li>响应式布局：同一页面在不同屏幕尺寸下有不同的布局</li></ul><h2 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询" aria-label="Permalink to &quot;媒体查询&quot;">​</a></h2><h4 id="针对不同的媒体类型定义不同的样式-当重置浏览器窗口大小的过程中-页面也会根据浏览器的宽度和高度重新渲染页面" tabindex="-1">针对不同的媒体类型定义不同的样式，当重置浏览器窗口大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面 <a class="header-anchor" href="#针对不同的媒体类型定义不同的样式-当重置浏览器窗口大小的过程中-页面也会根据浏览器的宽度和高度重新渲染页面" aria-label="Permalink to &quot;针对不同的媒体类型定义不同的样式，当重置浏览器窗口大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面&quot;">​</a></h4><blockquote><p><code>all</code>：适用于所有设备</p><p><code>print</code>：打印模式</p><p><code>screen</code>：屏幕</p><p><code>speech</code>：语音合成器</p></blockquote><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">@media</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> screen</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="实现方案" tabindex="-1">实现方案 <a class="header-anchor" href="#实现方案" aria-label="Permalink to &quot;实现方案&quot;">​</a></h4><ol><li>移动端优先，先写移动端的样式，然后过渡到 PC 端。使用 <strong>min-width</strong> 从小到大适配</li><li>PC 端优先，先写 PC 端的样式，然后过渡到移动端。使用 <strong>max-width</strong> 从大到小适配</li></ol><h4 id="响应阔值设定" tabindex="-1">响应阔值设定 <a class="header-anchor" href="#响应阔值设定" aria-label="Permalink to &quot;响应阔值设定&quot;">​</a></h4><ul><li>Extra small &lt; 576px</li><li>Small &gt;= 576px</li><li>Medium &gt;= 768px</li><li>Large &gt;= 992px</li><li>X-Large &gt;= 1200px</li><li>XX-Large &gt;= 1400px</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/3-CSS/2 布局/1-响应式布局.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1______ as default
};

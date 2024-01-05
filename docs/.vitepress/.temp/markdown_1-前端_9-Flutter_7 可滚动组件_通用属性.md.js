import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"通用属性","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/9-Flutter/7 可滚动组件/通用属性.md","filePath":"markdown/1-前端/9-Flutter/7 可滚动组件/通用属性.md"}');
const _sfc_main = { name: "markdown/1-前端/9-Flutter/7 可滚动组件/通用属性.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="通用属性" tabindex="-1">通用属性 <a class="header-anchor" href="#通用属性" aria-label="Permalink to &quot;通用属性&quot;">​</a></h1><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><ul><li><code>scrollDirection</code>：滑动的主轴方向</li><li><code>reverse</code>：滑动方向是否反向</li><li><code>controller</code>：主要作用是控制滚动位置和监听滚动事件。默认情况下，Widget树中会有一个默认的<code>PrimaryScrollController</code></li><li><code>physics</code>：决定可滚动组件如何响应用户操作 <ul><li><code>ClampingScrollPhysics</code>：列表滑动到边界时将不能继续滑动，通常在Android 中 配合 <code>GlowingOverscrollIndicator</code>（实现微光效果的组件） 使用</li><li><code>BouncingScrollPhysics</code>：iOS 下弹性效果</li></ul></li><li><code>cacheExtent</code>：预渲染区域</li></ul><h2 id="scrollbar" tabindex="-1">Scrollbar <a class="header-anchor" href="#scrollbar" aria-label="Permalink to &quot;Scrollbar&quot;">​</a></h2><p><code>Scrollbar</code>是一个Material风格的滚动指示器（滚动条），如果要给可滚动组件添加滚动条，只需将<code>Scrollbar</code>作为可滚动组件的任意一个父级组件即可</p><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">Scrollbar</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  child</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> SingleChildScrollView</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    ...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  ),</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/9-Flutter/7 可滚动组件/通用属性.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"选择器优先级","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/3-CSS/5 CSS选择器/5-选择器优先级.md","filePath":"markdown/1-前端/3-CSS/5 CSS选择器/5-选择器优先级.md"}');
const _sfc_main = { name: "markdown/1-前端/3-CSS/5 CSS选择器/5-选择器优先级.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="选择器优先级" tabindex="-1">选择器优先级 <a class="header-anchor" href="#选择器优先级" aria-label="Permalink to &quot;选择器优先级&quot;">​</a></h1><h2 id="优先级" tabindex="-1">优先级 <a class="header-anchor" href="#优先级" aria-label="Permalink to &quot;优先级&quot;">​</a></h2><table><thead><tr><th>权重</th><th>选择器</th></tr></thead><tbody><tr><td>0</td><td>通配选择器：<strong>*</strong> <br>选择符：<strong>+</strong>、<strong>&gt;</strong>、<strong>~</strong>、<strong>空格</strong>、<strong>||</strong> <br>逻辑组合伪类：<strong>:not()</strong>、<strong>:is()</strong>、<strong>:where</strong> 等</td></tr><tr><td>1</td><td>标签选择器</td></tr><tr><td>10</td><td>类选择器：<strong>.foo</strong> <br>属性选择器：<strong>[foo]</strong> <br>伪类：<strong>:hover</strong></td></tr><tr><td>100</td><td>ID 选择器</td></tr><tr><td>1000</td><td>样式内联（style）</td></tr><tr><td>10000</td><td><strong>!import</strong></td></tr></tbody></table><blockquote><p>优先层级之间是难以跨越的，之所以有权重计算法，是为了计算方便，而且现实中不可能连写 10 个选择器，也不会出现跨越层级的现象</p></blockquote><h2 id="增加优先级技巧" tabindex="-1">增加优先级技巧 <a class="header-anchor" href="#增加优先级技巧" aria-label="Permalink to &quot;增加优先级技巧&quot;">​</a></h2><p>场景：增加 <strong>.foo</strong> 的权重</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">.foo</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">[</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>下面两个方法都都增加耦合，降低可维护性</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">/* 增加类名 */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">.foo.bar</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">/* 添加标签选择器 */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">.foo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/3-CSS/5 CSS选择器/5-选择器优先级.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _5_______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _5_______ as default
};

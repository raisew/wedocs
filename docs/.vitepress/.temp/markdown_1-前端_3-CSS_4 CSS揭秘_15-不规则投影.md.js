import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"不规则投影","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/3-CSS/4 CSS揭秘/15-不规则投影.md","filePath":"markdown/1-前端/3-CSS/4 CSS揭秘/15-不规则投影.md"}');
const _sfc_main = { name: "markdown/1-前端/3-CSS/4 CSS揭秘/15-不规则投影.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="不规则投影" tabindex="-1">不规则投影 <a class="header-anchor" href="#不规则投影" aria-label="Permalink to &quot;不规则投影&quot;">​</a></h1><h2 id="困难产生原因" tabindex="-1">困难产生原因 <a class="header-anchor" href="#困难产生原因" aria-label="Permalink to &quot;困难产生原因&quot;">​</a></h2><p><strong>box-shadow</strong> 会忽视掉伪元素和透明部分</p><ol><li>半透明图像、背景图像、或者 <strong>border-image</strong></li><li>元素设置了点状、虚线状或者半透明的边框，但没有背景（或者当 <strong>background-clip</strong> 不是 <strong>border-box</strong> 时）</li><li>对话气泡，他的小尾巴通常使用伪元素生成</li><li>切角效果和折角效果的角</li><li>通过 <strong>clip-path</strong> 生成的形状</li></ol><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/20210409200107.png" alt=""></p><h2 id="filter-方案" tabindex="-1"><strong>filter</strong> 方案 <a class="header-anchor" href="#filter-方案" aria-label="Permalink to &quot;**filter** 方案&quot;">​</a></h2><p><em>未完全支持</em></p><p>使用某个 <strong>css</strong> 滤镜：<code>drop-shadow</code></p><ul><li>参数几乎和 <strong>box-shadow</strong> 一样</li><li>但不包括扩展半径、<strong>insert</strong>、也不支持多层投影</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">.box</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">	filter</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">drop-shadow</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">2</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 2</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 4</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> black</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/20210409200408.png" alt=""></p><blockquote><p><strong>注意</strong></p><p>此属性还会应用到透明背景下的文字上，使用 <strong>text-shadow</strong> 不能解决问题，还会出现投影上投影的问题</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/3-CSS/4 CSS揭秘/15-不规则投影.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _15______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _15______ as default
};

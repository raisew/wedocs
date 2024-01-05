import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"连字符断行","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/3-CSS/4 CSS揭秘/19-连字符断行.md","filePath":"markdown/1-前端/3-CSS/4 CSS揭秘/19-连字符断行.md"}');
const _sfc_main = { name: "markdown/1-前端/3-CSS/4 CSS揭秘/19-连字符断行.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="连字符断行" tabindex="-1">连字符断行 <a class="header-anchor" href="#连字符断行" aria-label="Permalink to &quot;连字符断行&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>文本中，如果某些单词<strong>太长</strong>，就会导致观看效果不美观的问题</p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/20210410133540.png" style="${ssrRenderStyle({ "zoom": "67%" })}"><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p><code>连字符断行</code>，使过长的单词自动断行，只需要一行代码即可</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">.box</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">	hyphens</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">auto</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/20210410133704.png" style="${ssrRenderStyle({ "zoom": "67%" })}"><p>这样会<code>美观许多</code>，但算法不是十分智能，可以自行在 <strong>html</strong> 中添加一些<code>软连字符（&amp;shy;）</code>来手动断开连字符</p><p>为了确保奏效，最好在标签上添加 <code>lang</code> 属性指定适合的语言</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/3-CSS/4 CSS揭秘/19-连字符断行.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _19______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _19______ as default
};

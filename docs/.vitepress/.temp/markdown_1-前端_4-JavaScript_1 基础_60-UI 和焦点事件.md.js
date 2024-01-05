import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"UI 和焦点事件","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/4-JavaScript/1 基础/60-UI 和焦点事件.md","filePath":"markdown/1-前端/4-JavaScript/1 基础/60-UI 和焦点事件.md"}');
const _sfc_main = { name: "markdown/1-前端/4-JavaScript/1 基础/60-UI 和焦点事件.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ui-和焦点事件" tabindex="-1">UI 和焦点事件 <a class="header-anchor" href="#ui-和焦点事件" aria-label="Permalink to &quot;UI 和焦点事件&quot;">​</a></h1><h2 id="ui-事件" tabindex="-1">UI 事件 <a class="header-anchor" href="#ui-事件" aria-label="Permalink to &quot;UI 事件&quot;">​</a></h2><table><thead><tr><th>事件</th><th>说明</th></tr></thead><tbody><tr><td><code>load</code></td><td>在 <strong>window</strong> 上当页面加载完成后触发，包括所有外部资源（图片、JavaScript脚本、css脚本）<br>在窗套（<strong>frameset</strong>）上当多有窗格（<strong>frame</strong>）都加载完成后触发 <br>在 <strong>img</strong> 元素上当图片加载完成后触发 <br>在 <strong>object</strong> 元素上当相应对象加载完成后触发</td></tr><tr><td><code>unload</code></td><td>在文档卸载完成后触发 <br>从页面导航到另一个页面时触发</td></tr><tr><td><code>resize</code></td><td>当浏览器窗口被缩放到新高度或宽度时触发 <br>浏览器窗口最大化和最小化时触发</td></tr><tr><td><code>scroll</code></td><td>滚动时触发</td></tr></tbody></table><h5 id="_1-定义方式" tabindex="-1">1. 定义方式 <a class="header-anchor" href="#_1-定义方式" aria-label="Permalink to &quot;1. 定义方式&quot;">​</a></h5><ul><li><p><strong>JavaScript</strong> 方式</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">window.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">addEventListener</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;load&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">event</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>向 <strong>body</strong> 元素添加 <strong>onload</strong> 属性</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">body</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> onload</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">console</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">log</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">(&#39;loaded!&#39;)&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">body</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><h5 id="_2-图片使用" tabindex="-1">2. 图片使用 <a class="header-anchor" href="#_2-图片使用" aria-label="Permalink to &quot;2. 图片使用&quot;">​</a></h5><ul><li><p>图片不一定要把 <strong>img</strong> 元素添加到文档，只要给它设置了 <strong>src</strong> 属性就会立即开始下载</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> image</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> Image</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">image.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">addEventListener</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;load&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">event</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    console.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">log</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;image loaded!&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">})</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">image.src </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;smile.jpg&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><h2 id="焦点事件" tabindex="-1">焦点事件 <a class="header-anchor" href="#焦点事件" aria-label="Permalink to &quot;焦点事件&quot;">​</a></h2><table><thead><tr><th>事件</th><th>说明</th></tr></thead><tbody><tr><td><code>blur</code></td><td>当元素失去焦点时触发。此事件不冒泡</td></tr><tr><td><code>focus</code></td><td>当元素获得焦点时触发。此事件不冒泡</td></tr><tr><td><code>focusin</code></td><td>当元素获得焦点时触发。此事件可冒泡</td></tr><tr><td><code>focusout</code></td><td>当元素失去焦点时触发。此事件可冒泡</td></tr></tbody></table><blockquote><p>当焦点从页面中的一个元素移动到另一个元素上</p><ol><li><strong>focusout</strong> 在失去焦点的元素上触发</li><li><strong>focusin</strong> 在获得焦点的元素上触发</li><li><strong>blur</strong> 在失去焦点的元素上触发</li><li><strong>focus</strong> 在获得焦点的元素上触发</li></ol></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/4-JavaScript/1 基础/60-UI 和焦点事件.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _60UI______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _60UI______ as default
};

import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Null 类型","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/4-JavaScript/1 基础/6-Null 类型.md","filePath":"markdown/1-前端/4-JavaScript/1 基础/6-Null 类型.md"}');
const _sfc_main = { name: "markdown/1-前端/4-JavaScript/1 基础/6-Null 类型.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="null-类型" tabindex="-1">Null 类型 <a class="header-anchor" href="#null-类型" aria-label="Permalink to &quot;Null 类型&quot;">​</a></h1><h2 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h2><p><strong>Null</strong> 类型只有一个值——<strong>null</strong></p><ul><li>逻辑上，<strong>null</strong> 表示一个空对象指针，这也是 <code>typeof null</code> 返回 <strong>object</strong> 的原因</li><li>在定义将来要保存对象值的变量时，建议初始化值为 <strong>null</strong>。这样就可以很好的判断，这个值是不是后来被重新赋予一个引用</li></ul><h2 id="null-与-undefined-区别" tabindex="-1">null 与 undefined 区别 <a class="header-anchor" href="#null-与-undefined-区别" aria-label="Permalink to &quot;null 与 undefined 区别&quot;">​</a></h2><p><strong>undefined</strong> 和 <strong>null</strong> 表面上相等的，但用途其实完全不一样</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">undefined</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> ==</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> null</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> // true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">undefined</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> ===</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> null</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> // false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/4-JavaScript/1 基础/6-Null 类型.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _6Null___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _6Null___ as default
};

import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Teleport","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/6-Vue/3 基础（3.x）/Teleport.md","filePath":"markdown/1-前端/6-Vue/3 基础（3.x）/Teleport.md"}');
const _sfc_main = { name: "markdown/1-前端/6-Vue/3 基础（3.x）/Teleport.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="teleport" tabindex="-1">Teleport <a class="header-anchor" href="#teleport" aria-label="Permalink to &quot;Teleport&quot;">​</a></h1><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>使被 <strong>teleport</strong> 包围的标签逃离某个组件下</p><ul><li><code>to</code> - <code>string</code>。需要 prop，必须是有效的查询选择器或 HTMLElement</li><li><code>isabled</code> - <code>boolean</code>。此可选属性可用于禁用 <code>&lt;teleport&gt;</code> 的功能，禁用时其插槽内容将不会移动到任何位置，切换 <strong>disabled</strong> 只是移动实际的 DOM 节点，而不是被销毁和重新创建，并且它还将保持任何组件实例的活动状态</li></ul><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">teleport</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> to</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;#app&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">teleport</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><ul><li><p>常用于弹出框组件、背景组件等</p></li><li><p>逃到的那个标签可在 <strong>index.html</strong> 中定义，也可以在 <strong>setup</strong> 中创建标签（这样更符合组件，不需要自己在index.html中添加）</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/6-Vue/3 基础（3.x）/Teleport.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Teleport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Teleport as default
};

import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/6-Vue/2 基础（2.x）/生命周期.md","filePath":"markdown/1-前端/6-Vue/2 基础（2.x）/生命周期.md"}');
const _sfc_main = { name: "markdown/1-前端/6-Vue/2 基础（2.x）/生命周期.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h1><h2 id="单组件生命周期" tabindex="-1">单组件生命周期 <a class="header-anchor" href="#单组件生命周期" aria-label="Permalink to &quot;单组件生命周期&quot;">​</a></h2><h4 id="阶段" tabindex="-1">阶段 <a class="header-anchor" href="#阶段" aria-label="Permalink to &quot;阶段&quot;">​</a></h4><ul><li>挂载阶段</li><li>更新阶段</li><li>销毁阶段</li></ul><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/20190107221323124.png" style="${ssrRenderStyle({ "width": "100%", "padding-left": "0" })}"><h2 id="父子组件的生命周期" tabindex="-1">父子组件的生命周期 <a class="header-anchor" href="#父子组件的生命周期" aria-label="Permalink to &quot;父子组件的生命周期&quot;">​</a></h2><ul><li>挂载阶段 <ul><li>父组件的<code>beforeCreate</code>、<code>created</code>、<code>beforeMount </code> --&gt; 所有子组件的<code>beforeCreate</code>、<code>created</code>、<code>beforeMount </code> --&gt; 所有子组件的<code>mounted </code> --&gt; 父组件的<code>mounted</code></li></ul></li><li>更新阶段 <ul><li>父组件更新：父<code>beforeUpdate</code> --&gt;父<code>updated</code></li><li>子组件更新：父<code>beforeUpdate</code> --&gt;子<code>beforeUpdate</code> --&gt;子<code>updated</code> --&gt;父<code>updated</code></li></ul></li><li>销毁阶段 <ul><li>父<code>beforeDestroy</code> --&gt;子<code>beforeDestroy</code> --&gt;子<code>destroyed</code> --&gt;父<code>destroyed</code></li></ul></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/6-Vue/2 基础（2.x）/生命周期.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

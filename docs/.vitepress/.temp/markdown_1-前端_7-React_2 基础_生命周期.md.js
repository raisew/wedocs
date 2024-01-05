import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/7-React/2 基础/生命周期.md","filePath":"markdown/1-前端/7-React/2 基础/生命周期.md"}');
const _sfc_main = { name: "markdown/1-前端/7-React/2 基础/生命周期.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h1><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/202203152339631.png" alt=""></p><h2 id="初始化阶段" tabindex="-1">初始化阶段 <a class="header-anchor" href="#初始化阶段" aria-label="Permalink to &quot;初始化阶段&quot;">​</a></h2><ol><li><code>super(props)</code>，将父组件的props传给给子组件</li><li><code>constructor()</code>，用来做一些组件的初始化工作，如定义this.state的初始内容</li></ol><h2 id="挂载阶段" tabindex="-1">挂载阶段 <a class="header-anchor" href="#挂载阶段" aria-label="Permalink to &quot;挂载阶段&quot;">​</a></h2><ol><li><code>componentWillMount</code> —— 在<code>组件被挂载到页面之前调用</code>，只调用一次</li><li>render</li><li><code>componentDidMount</code> —— 在<code>组件已经被挂载到页面后调用</code>，只调用一次</li></ol><blockquote><p><strong>多组件</strong></p><p><code>Parent constructor</code> =&gt; <code>Parent render</code> =&gt; <code>Child constructor</code> =&gt; <code>Child render</code> =&gt; <code>Child componentDidMount</code> =&gt; <code>Parent componentDidMount</code></p></blockquote><h2 id="更新阶段" tabindex="-1">更新阶段 <a class="header-anchor" href="#更新阶段" aria-label="Permalink to &quot;更新阶段&quot;">​</a></h2><ol><li><code>shouldComponentUpdate</code> —— 在<code>组件被更新之前调用</code><ul><li>需要返回一个<code>布尔值</code></li><li>为<code>true</code>，则<code>继续往下执行</code>更新阶段的生命周期函数</li><li>为<code>false</code>，则<code>不执行</code>更新阶段的生命周期函数</li></ul></li><li><code>componentWillUpdate</code> —— <code>在 shouldComponentUpdate 返回 true 后执行</code></li><li>render</li><li><code>componentDidUpdate</code> —— <code>组件更新完成后执行</code></li></ol><blockquote><p><strong>多组件</strong></p><p><code>Parent shouldComponentUpdate</code> =&gt; <code>Parent render</code> =&gt; <code>Child shouldComponentUpdate</code> =&gt; <code>Child render</code> =&gt; <code>Child componetDidUpdate</code> =&gt; <code>Parent componetDidUpdate</code></p></blockquote><h2 id="挂载阶段-1" tabindex="-1">挂载阶段 <a class="header-anchor" href="#挂载阶段-1" aria-label="Permalink to &quot;挂载阶段&quot;">​</a></h2><ol><li><code>componentWIllUnmount</code> —— 在<code>这个组件被剔除之前调用</code></li></ol><blockquote><p><strong>多组件</strong></p><p><code>Child componentWillUnmount</code> =&gt; <code>Parent componentWillUnmoun</code></p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/7-React/2 基础/生命周期.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

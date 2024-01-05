import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"事件","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/5-Jquery/1 基础/3-事件.md","filePath":"markdown/1-前端/5-Jquery/1 基础/3-事件.md"}');
const _sfc_main = { name: "markdown/1-前端/5-Jquery/1 基础/3-事件.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h1><h2 id="on" tabindex="-1">on <a class="header-anchor" href="#on" aria-label="Permalink to &quot;on&quot;">​</a></h2><p>为 <strong>dom</strong> 添加事件</p><p>参数</p><table><thead><tr><th>值类型</th><th>是否必须</th><th>说明</th></tr></thead><tbody><tr><td>string</td><td>必须</td><td>规定要从被选元素添加的一个或多个事件或命名空间。<br>由空格分隔多个事件值，也可以是数组。必须是有效的事件。</td></tr><tr><td>string</td><td>可选</td><td>规定只能添加到指定的子元素上的事件处理程序。<br> <code>其可以为未来新添加的子元素也加上处理事件</code></td></tr><tr><td>any</td><td>可选</td><td>规定传递到函数的额外数据。<br>可从 <code>event.data</code> 中取出数据</td></tr><tr><td>function</td><td>可选</td><td>规定当事件发生时运行的函数。</td></tr></tbody></table><h2 id="one" tabindex="-1">one <a class="header-anchor" href="#one" aria-label="Permalink to &quot;one&quot;">​</a></h2><ul><li>为 <code>dom</code> 添加一次性的事件</li></ul><h2 id="off" tabindex="-1">off <a class="header-anchor" href="#off" aria-label="Permalink to &quot;off&quot;">​</a></h2><p>解除 <strong>dom</strong> 上的事件</p><p>参数</p><table><thead><tr><th>值类型</th><th>是否必须</th><th>说明</th></tr></thead><tbody><tr><td>string</td><td>必须</td><td>规定要从被选元素添加的一个或多个事件或命名空间。<br>由空格分隔多个事件值，也可以是数组。必须是有效的事件。</td></tr><tr><td>string</td><td>可选</td><td>规定只能添加到指定的子元素上的事件处理程序。<br> <code>其可以为未来新添加的子元素也加上处理事件</code></td></tr><tr><td>function</td><td>可选</td><td>规定当事件发生时运行的函数。</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/5-Jquery/1 基础/3-事件.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _3___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _3___ as default
};

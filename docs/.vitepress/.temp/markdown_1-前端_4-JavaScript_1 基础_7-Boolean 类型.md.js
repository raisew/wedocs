import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Boolean 类型","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/4-JavaScript/1 基础/7-Boolean 类型.md","filePath":"markdown/1-前端/4-JavaScript/1 基础/7-Boolean 类型.md"}');
const _sfc_main = { name: "markdown/1-前端/4-JavaScript/1 基础/7-Boolean 类型.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="boolean-类型" tabindex="-1">Boolean 类型 <a class="header-anchor" href="#boolean-类型" aria-label="Permalink to &quot;Boolean 类型&quot;">​</a></h1><h2 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h2><p><strong>Boolean</strong> 类型有两个字面值：<strong>true</strong> 和 <strong>false</strong></p><h2 id="转换规则" tabindex="-1">转换规则 <a class="header-anchor" href="#转换规则" aria-label="Permalink to &quot;转换规则&quot;">​</a></h2><p>所有类型的值都有布尔值的等价形式</p><table><thead><tr><th>数据类型</th><th>转换为 true</th><th>转换为 false</th></tr></thead><tbody><tr><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>String</td><td>非空字符串</td><td>“”（空字符串）</td></tr><tr><td>Number</td><td>非零数值（包括无穷值）</td><td>0、NAN</td></tr><tr><td>Object</td><td>任意对象</td><td>null</td></tr><tr><td>Undefined</td><td>N/A（不存在）</td><td>undefined</td></tr></tbody></table><h2 id="包装类型方法" tabindex="-1">包装类型方法 <a class="header-anchor" href="#包装类型方法" aria-label="Permalink to &quot;包装类型方法&quot;">​</a></h2><p>请看 <code>5-3 原始值包装类型</code> 的 <code>Boolean 包装类型方法</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/4-JavaScript/1 基础/7-Boolean 类型.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _7Boolean___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _7Boolean___ as default
};

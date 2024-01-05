import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Objetc 类型","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/4-JavaScript/1 基础/11-Object 类型.md","filePath":"markdown/1-前端/4-JavaScript/1 基础/11-Object 类型.md"}');
const _sfc_main = { name: "markdown/1-前端/4-JavaScript/1 基础/11-Object 类型.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="objetc-类型" tabindex="-1">Objetc 类型 <a class="header-anchor" href="#objetc-类型" aria-label="Permalink to &quot;Objetc 类型&quot;">​</a></h1><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><ul><li>对象其实就是一组数据和功能的集合</li><li>通过 <strong>new</strong> 操作符后跟对象类型的名称来创建</li></ul><h2 id="固有属性和方法" tabindex="-1">固有属性和方法 <a class="header-anchor" href="#固有属性和方法" aria-label="Permalink to &quot;固有属性和方法&quot;">​</a></h2><ul><li><p><strong>constructor</strong>：用于创建当前对象的函数。</p></li><li><p><strong>hasOwnProperty(propertyName)</strong>：用于判断当前对象实例（不是原型）上是否存在给定的属性。要检查的属性名必须是字符串或符号。</p></li><li><p><strong>isPrototypeof(object)</strong>：用于判断当前对象是否为另一个对象的原型。</p></li><li><p><strong>propertyIsEnumerable(propertyName)</strong>：用于判断给定的属性是否可以使用 <strong>for-in</strong> 语句枚举。与 <code>hasOwnProperty()</code>一样，属性名必须是字符串。</p></li><li><p><strong>toLocalestring()</strong>：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。</p></li><li><p><strong>tostring()</strong>：返回对象的字符串表示。</p></li><li><p><strong>valueof()</strong>：返回对象对应的字符串、数值或布尔值表示。通常与 <code>tostring()</code> 的返回值相同。</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/4-JavaScript/1 基础/11-Object 类型.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _11Object___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _11Object___ as default
};

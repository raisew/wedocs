import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Doctype","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/2-HTML/1 基础/1-Doctype.md","filePath":"markdown/1-前端/2-HTML/1 基础/1-Doctype.md"}');
const _sfc_main = { name: "markdown/1-前端/2-HTML/1 基础/1-Doctype.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="doctype" tabindex="-1">Doctype <a class="header-anchor" href="#doctype" aria-label="Permalink to &quot;Doctype&quot;">​</a></h1><h2 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h2><ul><li><code>&lt;!DOCTYPE&gt;</code> 声明位于⽂档中的最前⾯，处于 <code>&lt;html&gt;</code> 标签之前。告知浏览器的解析器， ⽤什么⽂档类型 <code>规范</code>来解析这个⽂档</li><li><code>&lt;!DOCTYPE&gt;</code> 不存在或格式不正确会导致⽂档以<code>混杂模式</code>呈现</li></ul><blockquote><ol><li><p><code>严格模式</code>是以该浏览器⽀持的<strong>最⾼标准</strong>运⾏</p></li><li><p><code>混杂模式</code>是⻚⾯以宽松的<strong>向后兼容</strong>的⽅式显示。模拟⽼式浏览器的⾏为以防⽌站点⽆法⼯作</p></li></ol></blockquote><h2 id="html5-为什么只需要写-doctype-html" tabindex="-1">HTML5 为什么只需要写 <code>&lt;!DOCTYPE HTML&gt;</code> <a class="header-anchor" href="#html5-为什么只需要写-doctype-html" aria-label="Permalink to &quot;HTML5 为什么只需要写 \`&lt;!DOCTYPE HTML&gt;\`&quot;">​</a></h2><p>1、<strong>HTML5</strong>不基于 <strong>SGML</strong>，因此不需要对 <strong>DTD</strong>进⾏引⽤，但是需要 <strong>doctype</strong>来规范浏览器 的⾏为</p><p>2、 <strong>HTML4.01</strong> 基于 <strong>SGML</strong>,所以需要对 <strong>DTD</strong>进⾏引⽤，才能告知浏览器⽂档所使⽤的⽂档 类型</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/2-HTML/1 基础/1-Doctype.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1Doctype = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1Doctype as default
};

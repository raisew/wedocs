import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"sql注入","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/1-Web/2 安全/3-sql注入.md","filePath":"markdown/1-前端/1-Web/2 安全/3-sql注入.md"}');
const _sfc_main = { name: "markdown/1-前端/1-Web/2 安全/3-sql注入.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sql注入" tabindex="-1">sql注入 <a class="header-anchor" href="#sql注入" aria-label="Permalink to &quot;sql注入&quot;">​</a></h1><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><ul><li>通过把 <strong>SQL</strong> 命令插⼊到 <strong>Web</strong> 表单递交或输⼊域名或⻚⾯请求的查询字符串，最终达到欺骗服务器执⾏恶意的<strong>SQL</strong>命令</li></ul><h2 id="防范" tabindex="-1">防范 <a class="header-anchor" href="#防范" aria-label="Permalink to &quot;防范&quot;">​</a></h2><ul><li>后端防范：采用sql语句预编译和绑定变量（<strong>preparedStatement</strong>）</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/1-Web/2 安全/3-sql注入.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _3Sql__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _3Sql__ as default
};

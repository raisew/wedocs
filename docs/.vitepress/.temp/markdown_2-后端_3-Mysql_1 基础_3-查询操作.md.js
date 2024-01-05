import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"查询操作","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/2-后端/3-Mysql/1 基础/3-查询操作.md","filePath":"markdown/2-后端/3-Mysql/1 基础/3-查询操作.md"}');
const _sfc_main = { name: "markdown/2-后端/3-Mysql/1 基础/3-查询操作.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="查询操作" tabindex="-1">查询操作 <a class="header-anchor" href="#查询操作" aria-label="Permalink to &quot;查询操作&quot;">​</a></h1><h2 id="基本查询" tabindex="-1">基本查询 <a class="header-anchor" href="#基本查询" aria-label="Permalink to &quot;基本查询&quot;">​</a></h2><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">select</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> [字段名1]，[字段名2] </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> [tableName];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="where-条件" tabindex="-1"><strong>where</strong> 条件 <a class="header-anchor" href="#where-条件" aria-label="Permalink to &quot;**where** 条件&quot;">​</a></h2><table><thead><tr><th>作用</th><th>符号</th></tr></thead><tbody><tr><td>大于</td><td><strong>&gt;</strong></td></tr><tr><td>小与</td><td><code>&lt;</code></td></tr><tr><td>等于</td><td><strong>=</strong></td></tr><tr><td>不等于</td><td><code>&lt;&gt;</code></td></tr><tr><td>并</td><td><strong>and</strong></td></tr><tr><td>或</td><td><strong>or</strong></td></tr><tr><td>在某几个符合值中</td><td><strong>in(值，值，…)</strong></td></tr><tr><td>除某几个值外</td><td><strong>not in(值，值，…)</strong></td></tr><tr><td>在某个区间范围内</td><td><strong>between</strong> <strong>值 and 值</strong></td></tr><tr><td>是否为空</td><td><strong>is null</strong></td></tr><tr><td>是否不为空</td><td><strong>is not null</strong></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/2-后端/3-Mysql/1 基础/3-查询操作.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _3_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _3_____ as default
};

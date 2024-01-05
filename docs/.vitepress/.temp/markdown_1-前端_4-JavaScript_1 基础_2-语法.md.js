import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"语法","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/4-JavaScript/1 基础/2-语法.md","filePath":"markdown/1-前端/4-JavaScript/1 基础/2-语法.md"}');
const _sfc_main = { name: "markdown/1-前端/4-JavaScript/1 基础/2-语法.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h1><h2 id="区分大小写" tabindex="-1">区分大小写 <a class="header-anchor" href="#区分大小写" aria-label="Permalink to &quot;区分大小写&quot;">​</a></h2><p>是区分大小写的，<strong>typeof</strong> 不能作为标识符，但 <strong>Typeof</strong> 可以</p><h2 id="标识符" tabindex="-1">标识符 <a class="header-anchor" href="#标识符" aria-label="Permalink to &quot;标识符&quot;">​</a></h2><p>组成：</p><ul><li>第一个字符必须是字母、下划线（_）或美元符号($)</li><li>剩下字符可以是字母、数字、下划线（_）或美元符号($)</li></ul><p>不能是关键字</p><h2 id="关键字" tabindex="-1">关键字 <a class="header-anchor" href="#关键字" aria-label="Permalink to &quot;关键字&quot;">​</a></h2><p>await</p><p>break</p><p>case catch class const continue</p><p>debugger default delete do</p><p>else export extends enum</p><p>finally for function</p><p>if import in instanceof implements interface</p><p>let</p><p>new</p><p>package protected private public</p><p>return</p><p>super switch static</p><p>this throw try typeof</p><p>var void</p><p>while with</p><p>yield</p><h2 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 单行注释</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">/*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  多行注释</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="严格模式" tabindex="-1">严格模式 <a class="header-anchor" href="#严格模式" aria-label="Permalink to &quot;严格模式&quot;">​</a></h2><p><strong>ECMAscript 5</strong> 添加严格模式</p><p>在脚本开头或函数体开头添加 <code>“use strict&quot;;</code> 开启严格模式</p><ol><li>变量必须声明后再使⽤</li><li>函数的参数不能有同名属性，否则报错</li><li>不能使⽤ <strong>with</strong> 语句</li><li>禁⽌ <strong>this</strong> 指向全局对象</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/4-JavaScript/1 基础/2-语法.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2___ as default
};

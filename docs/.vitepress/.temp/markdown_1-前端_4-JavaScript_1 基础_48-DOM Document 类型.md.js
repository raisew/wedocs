import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"DOM Document 类型","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/4-JavaScript/1 基础/48-DOM Document 类型.md","filePath":"markdown/1-前端/4-JavaScript/1 基础/48-DOM Document 类型.md"}');
const _sfc_main = { name: "markdown/1-前端/4-JavaScript/1 基础/48-DOM Document 类型.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dom-document-类型" tabindex="-1">DOM Document 类型 <a class="header-anchor" href="#dom-document-类型" aria-label="Permalink to &quot;DOM Document 类型&quot;">​</a></h1><blockquote><p>被节混杂了书 14.1.2 和 15 的内容</p></blockquote><h2 id="特征" tabindex="-1">特征 <a class="header-anchor" href="#特征" aria-label="Permalink to &quot;特征&quot;">​</a></h2><ul><li>是 <strong>window</strong> 对象的属性</li><li><strong>nodeType</strong> 等于 9</li><li><strong>nodeName</strong> 值为 <strong>#document</strong></li></ul><h2 id="子节点" tabindex="-1">子节点 <a class="header-anchor" href="#子节点" aria-label="Permalink to &quot;子节点&quot;">​</a></h2><table><thead><tr><th>子节点</th><th>说明</th></tr></thead><tbody><tr><td><code>document.documentElement</code></td><td>指向 <code>&lt;html&gt;</code> 元素</td></tr><tr><td><code>document.body</code></td><td>指向 <code>&lt;body&gt;</code> 元素</td></tr><tr><td><code>document.head</code></td><td>指向 <code>&lt;head&gt;</code> 元素</td></tr><tr><td><code>document.doctype</code></td><td>可能存在，指向 <code>&lt;!doctype&gt;</code></td></tr></tbody></table><blockquote><p>可以通过 <strong>childNodes</strong> 获取，但这样获取更便捷</p></blockquote><h2 id="文档信息" tabindex="-1">文档信息 <a class="header-anchor" href="#文档信息" aria-label="Permalink to &quot;文档信息&quot;">​</a></h2><table><thead><tr><th>文档信息</th><th>说明</th></tr></thead><tbody><tr><td><code>document.title</code></td><td>可以读写 <code>&lt;title&gt;</code> 元素中的文本，通常显示在浏览器窗口的标题栏</td></tr><tr><td><code>document.URL</code></td><td>当前页面的完整 <strong>URL</strong>，可以读写</td></tr><tr><td><code>document.domain</code></td><td>当前页面的域名。处于安全考虑，设置 <strong>domain</strong> 属性的值只能是域名或子域名，即是 <strong>URL</strong> 包含的值</td></tr><tr><td><code>document.referrer</code></td><td>链接到当前页面的那个页面的 <strong>URL</strong></td></tr><tr><td><code>document.characterSet</code></td><td>可以读写文档使用的字符集，即 <code>&lt;meta&gt;</code> 元素中的字符集</td></tr><tr><td><code>document.readyState</code></td><td>只读，用于判断文档是否加载完成<br>- <strong>loading</strong>，表示文档正在加载<br>- <strong>complete</strong>，表示文档加载完成</td></tr><tr><td><code>document.compatMode</code></td><td>只读，用于判断文档的渲染模式<br>- <strong>CSS1Compat</strong>，标准模式<br>- <strong>BackCompat</strong>，混杂模式</td></tr></tbody></table><h2 id="定位元素" tabindex="-1">定位元素 <a class="header-anchor" href="#定位元素" aria-label="Permalink to &quot;定位元素&quot;">​</a></h2><table><thead><tr><th>定位方法</th><th>说明</th></tr></thead><tbody><tr><td><code>document.getElementById()</code></td><td>接受获取元素的 <strong>ID</strong><br>返回获取的元素，如没找到，则返回 <strong>null</strong></td></tr><tr><td><code>document.getElementsByTagName()</code></td><td>接受要获取元素的标签名<br>返回 <strong>HTMLCollection</strong> 对象</td></tr><tr><td><code>document.getElementsByName()</code></td><td>接受要获取元素的 <strong>name</strong> 值<br>返回 <strong>HTMLCollection</strong> 对象</td></tr><tr><td><code>document.querySelector()</code></td><td>接受选择器或选择器组<br>返回匹配的第一个元素</td></tr><tr><td><code>document.querySelectorAll()</code></td><td>接受选择器或选择器组<br>返回匹配的元素列表</td></tr><tr><td><code>getElementByClassName()</code></td><td>接受一个字符串参数，包含一个或多个类名（空格分隔）<br>返回匹配的元素列表<br>在 <strong>document</strong> 上调用，则匹配文档所有元素<br>在特定元素上调用，则匹配该元素后代的元素</td></tr></tbody></table><blockquote><p><strong>HTMLCollection</strong> 对象与 <strong>NodeList</strong> 相似，只是多了一个额外方法 <strong>namedItem()</strong>，其可输入标签的 <strong>name</strong> 属性取得某一项引用</p><p>字符索引会自动调用 <strong>namedItem()</strong> 方法</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> divList</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> document.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">getElementsByTagName</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;div&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">divList.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">namedItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;first&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">divList[</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;first&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></blockquote><h2 id="创建元素" tabindex="-1">创建元素 <a class="header-anchor" href="#创建元素" aria-label="Permalink to &quot;创建元素&quot;">​</a></h2><ul><li><code>document.createElement()</code>：传入要创建元素的标签名，创建一个新元素</li><li><code>document.createTextNode()</code>：传入字符串内容，创建一个新的文本元素</li><li><code>document.createDocumentFragment()</code>：创建一个片段，可以向里面插入节点</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> fragment</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> document.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">createDocumentFragment</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">fragment.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">appendChild</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( document.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">createElement</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;div&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">) )</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="焦点管理" tabindex="-1">焦点管理 <a class="header-anchor" href="#焦点管理" aria-label="Permalink to &quot;焦点管理&quot;">​</a></h2><ul><li><code>document.activeElement</code>：指向当前拥有焦点的 <strong>DOM</strong> 元素</li><li><code>document.hasFocus()</code>：返回布尔值，表示文档是否拥有焦点</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/4-JavaScript/1 基础/48-DOM Document 类型.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _48DOM_Document___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _48DOM_Document___ as default
};

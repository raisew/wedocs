import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"重排重绘","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/1-Web/5 性能优化/4-重排重绘.md","filePath":"markdown/1-前端/1-Web/5 性能优化/4-重排重绘.md"}');
const _sfc_main = { name: "markdown/1-前端/1-Web/5 性能优化/4-重排重绘.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="重排重绘" tabindex="-1">重排重绘 <a class="header-anchor" href="#重排重绘" aria-label="Permalink to &quot;重排重绘&quot;">​</a></h1><h2 id="重排-reflow" tabindex="-1">重排（reflow） <a class="header-anchor" href="#重排-reflow" aria-label="Permalink to &quot;重排（reflow）&quot;">​</a></h2><h4 id="_1、概念" tabindex="-1">1、概念 <a class="header-anchor" href="#_1、概念" aria-label="Permalink to &quot;1、概念&quot;">​</a></h4><p>根据渲染树中每个渲染对象的信息，计算出各自渲染对象的几何信息（DOM对象的位置和尺寸大小），并将其安置在界面中的正确位置。</p><h4 id="_2、会引起重排的操作" tabindex="-1">2、会引起重排的操作 <a class="header-anchor" href="#_2、会引起重排的操作" aria-label="Permalink to &quot;2、会引起重排的操作&quot;">​</a></h4><ol><li>页面首次渲染。</li><li>浏览器窗口大小发生改变。</li><li>元素尺寸或位置发生改变。</li><li>元素内容变化（文字数量或图片大小等等）。</li><li>添加或者删除可见的 <strong>DOM</strong> 元素。</li><li>激活 <strong>CSS</strong> 伪类（例如：<strong>:hover</strong>）</li></ol><h4 id="_3、影响范围" tabindex="-1">3、影响范围 <a class="header-anchor" href="#_3、影响范围" aria-label="Permalink to &quot;3、影响范围&quot;">​</a></h4><ol><li>全局范围：从根节点<code>html</code>开始对整个渲染树进行重新布局</li><li>局部范围：对渲染树的某部分或某一个渲染对象进行重新布局 <ul><li>把一个dom的宽高之类的几何信息定死，然后在dom内部触发重排</li></ul></li></ol><h2 id="重绘-repaint" tabindex="-1">重绘（repaint） <a class="header-anchor" href="#重绘-repaint" aria-label="Permalink to &quot;重绘（repaint）&quot;">​</a></h2><h4 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h4><p>当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程</p><h2 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-label="Permalink to &quot;优化&quot;">​</a></h2><h4 id="_1、读写操作分离" tabindex="-1">1、读写操作分离 <a class="header-anchor" href="#_1、读写操作分离" aria-label="Permalink to &quot;1、读写操作分离&quot;">​</a></h4><ul><li>多次写操作会被放进渲染队列中，一次性渲染</li><li>但读操作会导致写操作提前进行渲染</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 一次重排</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">div.style.left </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;10px&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">div.style.top </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;10px&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 两次重排</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">div.style.left </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;10px&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">console.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">log</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(div.offsetLeft); </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 即便读操作和写操作没有任何关系</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">div.style.top </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;10px&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="_2、样式集中改变" tabindex="-1">2、样式集中改变 <a class="header-anchor" href="#_2、样式集中改变" aria-label="Permalink to &quot;2、样式集中改变&quot;">​</a></h4><ol><li>渲染队列</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">div.style.left </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;10px&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">div.style.top </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;10px&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">div.style.width </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;20px&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">div.style.height </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;20px&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>className</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">div.classList.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">add</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;name&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>cssText</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> left</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 10</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">top</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 10</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">el.style.cssText </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">+=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &quot;; left: &quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> +</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> left </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">+</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &quot;px; top: &quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> +</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> top </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">+</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &quot;px;&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_3、离线改变-dom" tabindex="-1">3、离线改变 DOM <a class="header-anchor" href="#_3、离线改变-dom" aria-label="Permalink to &quot;3、离线改变 DOM&quot;">​</a></h4><ol><li><code>display:none</code><ul><li>在操作 DOM 前，先隐藏，操作完成后，再让它显示出来，这样只会发生一次重排</li></ul></li><li>使用 <code>DocumentFragment</code> 批量生成 DOM 后，再插入文档中</li><li>复制节点，操作完成后，再替换</li></ol><h4 id="_4、绝对定位" tabindex="-1">4、绝对定位 <a class="header-anchor" href="#_4、绝对定位" aria-label="Permalink to &quot;4、绝对定位&quot;">​</a></h4><p>让节点的定位是 <code>fixed</code> 或 <code>absolute</code>，这样操作时，能只进行局部重排，减少开销</p><h4 id="_5、优化动画" tabindex="-1">5、优化动画 <a class="header-anchor" href="#_5、优化动画" aria-label="Permalink to &quot;5、优化动画&quot;">​</a></h4><ol><li>动画使用绝对定位，每一次移动尽可能多的像素距离</li><li>开启 <code>Gpu</code> 加速 <ul><li>transitions、transform 3d</li></ul></li></ol><h2 id="分析重排重绘" tabindex="-1">分析重排重绘 <a class="header-anchor" href="#分析重排重绘" aria-label="Permalink to &quot;分析重排重绘&quot;">​</a></h2><p>使用 <code>chrome devtool</code> 帮助分析</p><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/202204051517468.png" alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/1-Web/5 性能优化/4-重排重绘.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _4_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _4_____ as default
};

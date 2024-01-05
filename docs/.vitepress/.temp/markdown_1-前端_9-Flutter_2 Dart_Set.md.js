import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Set","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/9-Flutter/2 Dart/Set.md","filePath":"markdown/1-前端/9-Flutter/2 Dart/Set.md"}');
const _sfc_main = { name: "markdown/1-前端/9-Flutter/2 Dart/Set.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="set" tabindex="-1">Set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;Set&quot;">​</a></h1><h2 id="sets" tabindex="-1">Sets <a class="header-anchor" href="#sets" aria-label="Permalink to &quot;Sets&quot;">​</a></h2><ul><li><p>一个无序的，元素唯一的集合</p></li><li><p>因为一个 set 是无序的，所以无法通过下标（位置）获取 set 中的元素</p></li></ul><h2 id="基本定义" tabindex="-1">基本定义 <a class="header-anchor" href="#基本定义" aria-label="Permalink to &quot;基本定义&quot;">​</a></h2><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">var</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> set</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">String</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">{};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="构造-api" tabindex="-1">构造 API <a class="header-anchor" href="#构造-api" aria-label="Permalink to &quot;构造 API&quot;">​</a></h2><ul><li><code>Set()</code><ul><li>构造一个空 Set</li></ul></li><li><code>Set.from(Iterable elements)</code><ul><li>创建一个包含所有元素的 Set</li></ul></li><li><code>Set.of(Iterable elements)</code><ul><li>创建一个包含所有元素的 Set</li></ul></li></ul><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><ul><li><code>first</code><ul><li>返回 Set 第一项</li></ul></li><li><code>isEmpty</code><ul><li>返回 Set 是否为空</li></ul></li><li><code>isNotEmpty</code><ul><li>返回 Set 是否不为空</li></ul></li><li><code>last</code><ul><li>返回 Set 最后一项</li></ul></li><li><code>length</code><ul><li>返回 Set 长度</li></ul></li><li><code>reversed</code><ul><li>返回翻转后的 Set</li></ul></li><li><code>single</code><ul><li>返回 Set 是否只有一项</li></ul></li></ul><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><ul><li><p><code>add(E value) → void</code></p><ul><li>将值添加到此 Set 的末尾，将长度延长一</li></ul></li><li><p><code>addAll(Iterable&lt;E&gt; iterable ) → void</code></p><ul><li>将 iterable 的所有对象附加到此Set的末尾</li></ul><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">var</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> arr </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">1</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">2</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">];</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">arr.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">addAll</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">([</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">3</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">4</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">]); </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// [1, 2, 3, 4]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p><code>any(bool test(E element)) → bool</code></p><ul><li>是否所有的元素都满足条件</li></ul></li><li><p><code>clear() → void</code></p><ul><li>将 Set 清空</li></ul></li><li><p><code>contains(Object? element) → bool</code></p><ul><li>Set 是否包含等于 element 的元素</li></ul></li><li><p><code>containsAll((Iterable&lt;E&gt; iterable) → bool</code></p><ul><li>Set 是否包含其他所有元素</li></ul></li><li><p><code>elementAt(int index) → E</code></p><ul><li>返回下标为 index 的元素</li></ul></li><li><p><code>every(bool test(E element)) → bool</code></p><ul><li>检查此迭代的每个元素是否满足测试</li></ul><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">arr.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">every</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">((e) </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> e </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">==</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><code>firstWhere(bool test(E element)) → E</code></p><ul><li>返回满足条件的第一个元素</li></ul></li><li><p><code>forEach(void action(E element)) → void</code></p><ul><li>循环 Set</li></ul></li><li><p><code>join([String separator = &quot;&quot;]) → String</code></p><ul><li>将每个元素转换为字符串并连接字符串</li></ul></li><li><p><code>lastWhere(bool test(E element)) → E</code></p><ul><li>返回满足条件的最后一个元素</li></ul></li><li><p><code>lookup(Object? object) → E</code></p><ul><li>如果 Set 中存在等于 object 的对象，则返回它</li></ul></li><li><p><code>map&lt;T&gt;(T toElement(E e)) → Iterable&lt;T&gt;</code></p><ul><li>根据 Set 返回一个新 Set</li></ul></li><li><p><code>reduce(E combine(E value, E element)) → E</code></p><ul><li>通过使用提供的函数迭代组合集合的元素，将集合减少到单个值</li></ul></li><li><p><code>remove(Object? value) → bool</code></p><ul><li>删除一个元素</li></ul></li><li><p><code>removeAll(Iterable&lt;Object?&gt; elements) → void</code></p><ul><li>从此 Set 中删除元素的每个元素</li></ul></li><li><p><code>retainWhere(bool test(E element)) → void</code></p><ul><li>删除这个 Set 中所有不满足测试的元素</li></ul></li><li><p><code> toList({bool growable = true}) → List&lt;E&gt;</code></p><ul><li>创建一个包含此 Iterable 元素的列表</li></ul></li><li><p><code>toString() → String</code></p><ul><li>返回此元素（部分）的字符串表示形式</li></ul></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/9-Flutter/2 Dart/Set.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Set$1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Set$1 as default
};

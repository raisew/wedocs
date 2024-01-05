import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"渲染过程","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/6-Vue/6 底层/渲染过程.md","filePath":"markdown/1-前端/6-Vue/6 底层/渲染过程.md"}');
const _sfc_main = { name: "markdown/1-前端/6-Vue/6 底层/渲染过程.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="渲染过程" tabindex="-1">渲染过程 <a class="header-anchor" href="#渲染过程" aria-label="Permalink to &quot;渲染过程&quot;">​</a></h1><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/批注%202020-07-23%20132507.png"><h4 id="初次渲染" tabindex="-1">初次渲染 <a class="header-anchor" href="#初次渲染" aria-label="Permalink to &quot;初次渲染&quot;">​</a></h4><ol><li>解析模板为<code>render函数</code>（或在开发坏境完成，<code>vue-loader</code>）</li><li>触发<code>响应式</code>，监听 <strong>data</strong> 属性 <strong>getter setter</strong></li><li>执行 <strong>render</strong> 函数，生成 <code>vnode</code></li><li><code>patch(elem，vnode)</code></li></ol><h4 id="更新过程" tabindex="-1">更新过程 <a class="header-anchor" href="#更新过程" aria-label="Permalink to &quot;更新过程&quot;">​</a></h4><ol><li>修改 <strong>data</strong>，触发 <code>setter </code>（此前在 <strong>getter</strong> 中已被监听）</li><li>重新执行 <strong>render</strong> 函数，生成 <code>newVnode</code></li><li><code>patch(vnode, newVnode)</code></li></ol><blockquote><p>异步渲染</p><ol><li>每次触发某个数据的 setter 方法后，对应的额 Watcher 对象会被 push 进一个队列中</li><li>在一个更新时，会吧队列的 Watcher 拿出，触发上面的 patch 操作</li></ol><p>顺序</p><ol><li>父的 Watcher 相比于子的 Watcher 优先执行</li><li>同一个 Watcher 只应被执行一次，所以会给同一个 Watcher 标上增量的 id，只执行最后相同一个 Watcher</li></ol></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/6-Vue/6 底层/渲染过程.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

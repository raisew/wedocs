import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"离线缓存 manifest","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/2-HTML/2 HTML5/9-离线缓存manifest.md","filePath":"markdown/1-前端/2-HTML/2 HTML5/9-离线缓存manifest.md"}');
const _sfc_main = { name: "markdown/1-前端/2-HTML/2 HTML5/9-离线缓存manifest.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="离线缓存-manifest" tabindex="-1">离线缓存 manifest <a class="header-anchor" href="#离线缓存-manifest" aria-label="Permalink to &quot;离线缓存 manifest&quot;">​</a></h1><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ol><li>在 <code>&lt;html&gt;</code> 上添加属性<code>manifest=&quot;文件名.manifest&quot;</code></li><li>在 <code>文件名.manifest</code> ⽂件的编写离线存储的资源</li><li>在离线状态时，操作 <strong>window.applicationCache</strong> 进⾏需求实现</li></ol><h2 id="工作原理" tabindex="-1">工作原理 <a class="header-anchor" href="#工作原理" aria-label="Permalink to &quot;工作原理&quot;">​</a></h2><ol><li><code>在线</code>的情况下浏览器发现 <strong>html</strong> 头部有 <strong>manifes</strong> 属性，它会请求 <strong>manifest</strong> ⽂件 <ul><li>如果是第⼀次访问 <strong>app</strong>，那么浏览器就会根据<strong>manifest</strong>⽂件的内容<code>下载相应的资源</code>并且进⾏<code>离线存储</code>。</li><li>如果已经访问过 <strong>app</strong> 并且资源已经离线存储了，那么浏览器就会使⽤离线的资源加载⻚⾯，然后浏览器会<code>对⽐</code>新的 <strong>manifest</strong> ⽂件与旧的 <strong>manifest</strong> ⽂件，如果⽂件没有发⽣改变，就不做任何操作，如果⽂件改变了，那么就会重新下载⽂件中的资源并进⾏离线存储</li></ul></li><li><code>离线</code>的情况下，浏览器就直接使⽤离线存储的资源</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/2-HTML/2 HTML5/9-离线缓存manifest.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _9_____manifest = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _9_____manifest as default
};

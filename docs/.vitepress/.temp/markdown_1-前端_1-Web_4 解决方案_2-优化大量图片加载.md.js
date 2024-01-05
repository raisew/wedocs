import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"优化大量图片的加载","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/1-Web/4 解决方案/2-优化大量图片加载.md","filePath":"markdown/1-前端/1-Web/4 解决方案/2-优化大量图片加载.md"}');
const _sfc_main = { name: "markdown/1-前端/1-Web/4 解决方案/2-优化大量图片加载.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="优化大量图片的加载" tabindex="-1">优化大量图片的加载 <a class="header-anchor" href="#优化大量图片的加载" aria-label="Permalink to &quot;优化大量图片的加载&quot;">​</a></h1><ol><li><p>图⽚<code>懒加载</code></p></li><li><p>图⽚<code>预加载</code>：假设为幻灯片或相册，将当前展示图⽚的前⼀张和后⼀张优先下载</p></li><li><p><code>矢量图</code>可用 <strong>CSS</strong>、<strong>SVG</strong>、<strong>Iconfont</strong>、<strong>Base64</strong> 等技术来创建</p></li><li><p>图⽚过⼤，可先<code>加载</code>⼀张压缩的特别厉害的<code>缩略图</code></p></li><li><p>图⽚展示区域<code>⼩</code>于图⽚的真实⼤⼩，可在服务端把图片<code>压缩至展示区域大小</code>，在发给浏览器展示</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/1-Web/4 解决方案/2-优化大量图片加载.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2_________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2_________ as default
};

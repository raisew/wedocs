import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"雪碧图","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/3-CSS/1 基础/9-雪碧图.md","filePath":"markdown/1-前端/3-CSS/1 基础/9-雪碧图.md"}');
const _sfc_main = { name: "markdown/1-前端/3-CSS/1 基础/9-雪碧图.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="雪碧图" tabindex="-1">雪碧图 <a class="header-anchor" href="#雪碧图" aria-label="Permalink to &quot;雪碧图&quot;">​</a></h1><h4 id="概念-将多个小图片拼接到一个图片中。通过-background-position-和元素尺寸调节需要显示的背景图案。" tabindex="-1">概念：将多个⼩图⽚拼接到⼀个图⽚中。通过 <code>background-position</code> 和元素尺⼨调节需要显示的背景图案。 <a class="header-anchor" href="#概念-将多个小图片拼接到一个图片中。通过-background-position-和元素尺寸调节需要显示的背景图案。" aria-label="Permalink to &quot;概念：将多个⼩图⽚拼接到⼀个图⽚中。通过 \`background-position\` 和元素尺⼨调节需要显示的背景图案。&quot;">​</a></h4><h4 id="优点" tabindex="-1">优点： <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点：&quot;">​</a></h4><ol><li>减少 <code>HTTP </code>请求数，极⼤地提⾼⻚⾯加载速度</li><li>增加图⽚信息重复度，提⾼压缩⽐，减少图⽚⼤⼩</li><li>更换⻛格⽅便，只需在⼀张或⼏张图⽚上样式</li></ol><h4 id="缺点" tabindex="-1">缺点： <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点：&quot;">​</a></h4><ol><li>图⽚合并麻烦</li><li>维护麻烦，修改⼀个图⽚可能需要从新布局整个图⽚，样式</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/3-CSS/1 基础/9-雪碧图.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _9____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _9____ as default
};

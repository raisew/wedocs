import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Svg","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/2-HTML/2 HTML5/4-Svg.md","filePath":"markdown/1-前端/2-HTML/2 HTML5/4-Svg.md"}');
const _sfc_main = { name: "markdown/1-前端/2-HTML/2 HTML5/4-Svg.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="svg" tabindex="-1">Svg <a class="header-anchor" href="#svg" aria-label="Permalink to &quot;Svg&quot;">​</a></h1><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>说明</th></tr></thead><tbody><tr><td><strong>fill</strong></td><td>填充颜色</td></tr><tr><td><strong>fill-opacity</strong></td><td>填充透明度</td></tr><tr><td><strong>stroke</strong></td><td>边框颜色</td></tr><tr><td><strong>stroke-width</strong></td><td>边框宽度</td></tr><tr><td><strong>stroke-opacity</strong></td><td>边框透明度</td></tr><tr><td><strong>stroke-dasharray</strong></td><td>创建虚线</td></tr><tr><td><strong>stroke-dashoffset</strong></td><td>相对于起始点的偏</td></tr><tr><td><strong>stroke-linecap</strong></td><td>直线样式</td></tr></tbody></table><h2 id="基本元素举例" tabindex="-1">基本元素举例 <a class="header-anchor" href="#基本元素举例" aria-label="Permalink to &quot;基本元素举例&quot;">​</a></h2><h4 id="矩形" tabindex="-1">矩形 <a class="header-anchor" href="#矩形" aria-label="Permalink to &quot;矩形&quot;">​</a></h4><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/20201214234543.png" alt=""></p><h4 id="圆" tabindex="-1">圆 <a class="header-anchor" href="#圆" aria-label="Permalink to &quot;圆&quot;">​</a></h4><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/20201214234628.png" alt=""></p><h4 id="椭圆" tabindex="-1">椭圆 <a class="header-anchor" href="#椭圆" aria-label="Permalink to &quot;椭圆&quot;">​</a></h4><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/20201214234654.png" alt=""></p><h4 id="直线" tabindex="-1">直线 <a class="header-anchor" href="#直线" aria-label="Permalink to &quot;直线&quot;">​</a></h4><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/20201214234722.png" alt=""></p><h4 id="文本" tabindex="-1">文本 <a class="header-anchor" href="#文本" aria-label="Permalink to &quot;文本&quot;">​</a></h4><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/20201214234831.png" alt=""></p><h2 id="与canvas的区别" tabindex="-1">与Canvas的区别 <a class="header-anchor" href="#与canvas的区别" aria-label="Permalink to &quot;与Canvas的区别&quot;">​</a></h2><ol><li><p><strong>svg</strong> 绘制出来的每⼀个图形的元素都是独⽴的 <strong>DOM</strong> 节点，能够⽅便的绑定事件或⽤来 改。 <strong>canvas</strong>输出的是⼀整幅画布</p></li><li><p><strong>svg</strong> 输出的图形是⽮量图形，后期可以修改参数来⾃由放⼤缩⼩，不会失真和锯⻮。⽽ <strong>canvas</strong> 输出标量画布，就像⼀张图⽚⼀样，放⼤会失真或者锯⻮</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/2-HTML/2 HTML5/4-Svg.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _4Svg = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _4Svg as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"标签","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/2-HTML/2 HTML5/1-标签.md","filePath":"markdown/1-前端/2-HTML/2 HTML5/1-标签.md"}');
const _sfc_main = { name: "markdown/1-前端/2-HTML/2 HTML5/1-标签.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="标签" tabindex="-1">标签 <a class="header-anchor" href="#标签" aria-label="Permalink to &quot;标签&quot;">​</a></h1><h2 id="h5常用的新标签" tabindex="-1">h5常用的新标签 <a class="header-anchor" href="#h5常用的新标签" aria-label="Permalink to &quot;h5常用的新标签&quot;">​</a></h2><table><thead><tr><th>标签名</th><th>作用</th></tr></thead><tbody><tr><td>video</td><td>一段视频并提供播放的用户界面</td></tr><tr><td>audio</td><td>音频</td></tr><tr><td>embed</td><td>嵌入的内容</td></tr><tr><td>canvas</td><td>位图区域</td></tr><tr><td>svg</td><td>矢量图</td></tr><tr><td>figure</td><td>和文档有关的图例</td></tr><tr><td>time</td><td>日期和时间</td></tr><tr><td>mark</td><td>高亮文字</td></tr><tr><td>output</td><td>计算器</td></tr><tr><td>progress</td><td>进度条</td></tr><tr><td>menu</td><td>菜单</td></tr><tr><td>menuitem</td><td>用户可点击的菜单项</td></tr><tr><td>header</td><td>定义了文档的头部区域</td></tr><tr><td>section</td><td>定义文档中的节（section、区段）</td></tr><tr><td>nav</td><td>定义导航链接的部分</td></tr><tr><td>aside</td><td>定义页面独立的内容区域</td></tr><tr><td>article</td><td>定义页面的侧边栏内容</td></tr><tr><td>footer</td><td>定义 section 或 document 的页脚</td></tr></tbody></table><h2 id="h5语义化标签" tabindex="-1">H5语义化标签 <a class="header-anchor" href="#h5语义化标签" aria-label="Permalink to &quot;H5语义化标签&quot;">​</a></h2><p>1、便于搜索引擎解析、利于 <strong>SEO</strong></p><p>2、没有样式 <strong>CSS</strong> 情况下也以⼀种⽂档格式显示，并且是容易阅读的</p><p>3、使阅读源代码的⼈便于阅读维护理解</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/2-HTML/2 HTML5/1-标签.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1___ as default
};

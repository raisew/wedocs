import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"性能分析","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/1-Web/5 性能优化/2-性能分析.md","filePath":"markdown/1-前端/1-Web/5 性能优化/2-性能分析.md"}');
const _sfc_main = { name: "markdown/1-前端/1-Web/5 性能优化/2-性能分析.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="性能分析" tabindex="-1">性能分析 <a class="header-anchor" href="#性能分析" aria-label="Permalink to &quot;性能分析&quot;">​</a></h1><h2 id="network" tabindex="-1">Network <a class="header-anchor" href="#network" aria-label="Permalink to &quot;Network&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/202204052325309.png" alt=""></p><ul><li>知道各种资源的加载时间，分析哪些资源加载慢</li><li>知道 DOMContentLoaded 的时间，即 html 文档解析完成的时间</li><li>知道 Load 的时间，即整个页面及所有依赖资源如样式表和图片都已完成加载</li></ul><h2 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Performance&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/202204052330963.png" alt=""></p><h4 id="第一部分-概览" tabindex="-1">第一部分：概览 <a class="header-anchor" href="#第一部分-概览" aria-label="Permalink to &quot;第一部分：概览&quot;">​</a></h4><p>页面的的整体的加载情况，并给出几个关键的指标</p><ul><li>FPS：页面帧率</li><li>CPU：CPU 资源消耗</li><li>NET：网络请求流量</li></ul><h4 id="第二部分-性能面板" tabindex="-1">第二部分：性能面板 <a class="header-anchor" href="#第二部分-性能面板" aria-label="Permalink to &quot;第二部分：性能面板&quot;">​</a></h4><ol><li>Network ：资源加载的顺序与时长</li><li>Interactions ：记录用户交互操作，比如点击鼠标、输入文字、动画等</li><li>Timings ：用来记录一些关键的时间节点在何时产生的数据信息 <ul><li>FCP（First Contentful Paint）：测量页面开始加载到某一块内容显示在页面上的时间</li><li>LCP（Largest Contentful Paint）：测量页面开始加载到最大文本块内容或图片显示在页面中的时间</li><li>OnLoad Event：页面资源加载完成时间</li></ul></li><li><strong>Main</strong> ：记录了渲染进程中主线程的执行记录，点击main可以看到某个任务执行的具体情况和时长、</li><li>Raster： 光栅化线程池，用来让 GPU 执行光栅化的任务</li><li>GPU ：GPU进程主线程的执行过程记录，如 可以直观看到何时启动GPU加速</li></ol><h4 id="第三部分-性能摘要" tabindex="-1">第三部分：性能摘要 <a class="header-anchor" href="#第三部分-性能摘要" aria-label="Permalink to &quot;第三部分：性能摘要&quot;">​</a></h4><ol><li>Loading ：加载时间</li><li>Scripting ：js 计算时间</li><li>Rendering ：渲染时间</li><li>Painting ：绘制时间</li><li>Other ：其他时间</li><li>Idle ：浏览器闲置时间</li></ol><h2 id="lighthouse" tabindex="-1">lighthouse <a class="header-anchor" href="#lighthouse" aria-label="Permalink to &quot;lighthouse&quot;">​</a></h2><p>根据项目整体打分，并审查出问题。是参考的重要指标</p><h2 id="利用监控预警监控平台" tabindex="-1">利用监控预警监控平台 <a class="header-anchor" href="#利用监控预警监控平台" aria-label="Permalink to &quot;利用监控预警监控平台&quot;">​</a></h2><p>接入TAM等性能监控平台</p><h2 id="性能测试" tabindex="-1">性能测试 <a class="header-anchor" href="#性能测试" aria-label="Permalink to &quot;性能测试&quot;">​</a></h2><ol><li>开发阶段，使用 chrome devtool 发现并解决性能问题</li><li>构建和发布前，集成 lighthouse 发布性能报告</li><li>产品发布后，通过监控平台收集线上数据（或用户反馈）来发现性能问题</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/1-Web/5 性能优化/2-性能分析.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2_____ as default
};

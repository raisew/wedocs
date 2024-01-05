import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"浏览器中的进程和线程","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/1-Web/3 浏览器/3-浏览器的进程和线程.md","filePath":"markdown/1-前端/1-Web/3 浏览器/3-浏览器的进程和线程.md"}');
const _sfc_main = { name: "markdown/1-前端/1-Web/3 浏览器/3-浏览器的进程和线程.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="浏览器中的进程和线程" tabindex="-1">浏览器中的进程和线程 <a class="header-anchor" href="#浏览器中的进程和线程" aria-label="Permalink to &quot;浏览器中的进程和线程&quot;">​</a></h1><h2 id="进程和线程的联系" tabindex="-1">进程和线程的联系 <a class="header-anchor" href="#进程和线程的联系" aria-label="Permalink to &quot;进程和线程的联系&quot;">​</a></h2><h4 id="解释" tabindex="-1">解释 <a class="header-anchor" href="#解释" aria-label="Permalink to &quot;解释&quot;">​</a></h4><p>进程是一片数据集合的运行活动，可以理解成一个程序，是资源分配的最小单位</p><p>线程是进程内独立执行的一个单元，是程序执行的最小单位</p><h4 id="关系特点" tabindex="-1">关系特点 <a class="header-anchor" href="#关系特点" aria-label="Permalink to &quot;关系特点&quot;">​</a></h4><ul><li>进程与进程之间完全隔离，互不干扰，一个进程崩溃不会影响其他进程</li><li>进程与进程之间需要传递某些数据的话，就需要通过<code>进程通信管道IPC</code>来传递</li><li>一个进程中可以并发多个线程，每个线程并行执行不同的任务</li><li>一个线程的执行错误，会导致进程的崩溃</li><li>同一进程下的线程之间可以直接通信和共享数据</li></ul><h2 id="chrome-的进程" tabindex="-1">chrome 的进程 <a class="header-anchor" href="#chrome-的进程" aria-label="Permalink to &quot;chrome 的进程&quot;">​</a></h2><p><code>1个浏览器进程</code>： 负责控制浏览器除标签页外的界面，包括地址栏、书签、前进后退按钮等，以及负责与其他进程的协调工作，同时提供存储功能</p><p><code>1个GPU进程</code>：负责整个浏览器界面的渲染</p><p><code>1个网络进程</code>：负责发起和接受网络请求</p><p><code>多个插件进程</code>：主要是负责插件的运行，因为插件可能崩溃，所以需要通过插件进程来隔离，以保证插件崩溃也不会对浏览器和页面造成影响</p><p><code>多个渲染进程</code>：负责控制显示tab标签页内的所有内容，核心任务是将HTML、CSS、JS转为用户可以与之交互的网页，排版引擎Blink和JS引擎V8都是运行在该进程中，默认情况下Chrome会为每个Tab标签页创建一个渲染进程</p><h2 id="渲染进程中的线程" tabindex="-1">渲染进程中的线程 <a class="header-anchor" href="#渲染进程中的线程" aria-label="Permalink to &quot;渲染进程中的线程&quot;">​</a></h2><p><code>GUI渲染线程</code>：负责渲染页面，解析html和CSS、构建DOM树、CSSOM树、渲染树、和绘制页面，重绘重排也是在该线程执行</p><p><code>JS引擎线程</code>：一个tab页中只有一个JS引擎线程(单线程)，负责解析和执行JS。<strong>它GUI渲染进程不能同时执行，只能一个一个来，如果JS执行过长就会导致阻塞掉帧</strong></p><p><code>计时器线程</code>：指setInterval和setTimeout，因为JS引擎是单线程的，所以如果处于阻塞状态，那么计时器就会不准了，所以需要单独的线程来负责计时器工作</p><p><code>异步http请求线程</code>： XMLHttpRequest连接后浏览器开的一个线程，比如请求有回调函数，异步线程就会将回调函数加入事件队列，等待JS引擎空闲执行</p><p><code>事件触发线程</code>：主要用来控制事件循环，比如JS执行遇到计时器，AJAX异步请求等，就会将对应任务添加到事件触发线程中，在对应事件符合触发条件触发时，就把事件添加到待处理队列的队尾，等JS引擎处理</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/1-Web/3 浏览器/3-浏览器的进程和线程.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _3__________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _3__________ as default
};

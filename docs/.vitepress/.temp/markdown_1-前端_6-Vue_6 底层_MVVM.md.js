import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"MVVM","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/6-Vue/6 底层/MVVM.md","filePath":"markdown/1-前端/6-Vue/6 底层/MVVM.md"}');
const _sfc_main = { name: "markdown/1-前端/6-Vue/6 底层/MVVM.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mvvm" tabindex="-1">MVVM <a class="header-anchor" href="#mvvm" aria-label="Permalink to &quot;MVVM&quot;">​</a></h1><h4 id="传统组件" tabindex="-1">传统组件 <a class="header-anchor" href="#传统组件" aria-label="Permalink to &quot;传统组件&quot;">​</a></h4><ol><li>静态渲染</li><li>更新依赖于操作<strong>DOM</strong></li></ol><h4 id="数据驱动视图" tabindex="-1">数据驱动视图 <a class="header-anchor" href="#数据驱动视图" aria-label="Permalink to &quot;数据驱动视图&quot;">​</a></h4><ol><li>M（Model）</li><li>V（View）</li><li>VM（ViewModel）</li></ol><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/746387-20170223155932085-1172851114.png" alt=""></p><ul><li>数据( <strong>Model</strong> )和视图( <strong>View</strong> )是不能直接通讯的，而是需要通过 <strong>ViewModel</strong> 来实现双方的通讯。</li><li>当数据变化的时候，<strong>viewModel</strong> 能够监听到这种变化，并及时的通知 <strong>view</strong> 做出修改。</li><li>当页面有事件触发时，<strong>viewModel</strong> 也能够监听到事件，并通知 <strong>model</strong> 进行响应。</li><li><strong>Viewmodel</strong> 就相当于一个观察者，监控着双方的动作，并及时通知对方进行相应的操作</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/6-Vue/6 底层/MVVM.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MVVM = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MVVM as default
};

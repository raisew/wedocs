import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"TCP 和 UDP","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/1-Web/1 网络/6-TCP和UDP.md","filePath":"markdown/1-前端/1-Web/1 网络/6-TCP和UDP.md"}');
const _sfc_main = { name: "markdown/1-前端/1-Web/1 网络/6-TCP和UDP.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tcp-和-udp" tabindex="-1">TCP 和 UDP <a class="header-anchor" href="#tcp-和-udp" aria-label="Permalink to &quot;TCP 和 UDP&quot;">​</a></h1><h2 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h2><ol><li><strong>TCP</strong>是面向连接的，<strong>UDP</strong>是无连接的即发送数据前不需要先建立链接。</li><li><strong>TCP</strong>提供可靠的服务。即无差错，不丢失，不重复，且按序到达。<strong>UDP</strong>尽最大努力交付，即不保证可靠交付。</li><li><strong>TCP</strong>是面向字节流，<strong>UDP</strong>面向报文，并且网络出现拥塞不会使得发送速率降低（因此会出现丢包）。</li><li><strong>TCP</strong>只能是1对1的，<strong>UDP</strong>支持1对1、1对多。</li><li><strong>TCP</strong>的首部较大为<strong>20</strong>字节，而<strong>UDP</strong>只有<strong>8</strong>字节。</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/1-Web/1 网络/6-TCP和UDP.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _6TCP_UDP = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _6TCP_UDP as default
};

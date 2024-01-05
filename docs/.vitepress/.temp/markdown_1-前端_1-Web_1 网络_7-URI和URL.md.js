import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"URI 和 URL","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/1-Web/1 网络/7-URI和URL.md","filePath":"markdown/1-前端/1-Web/1 网络/7-URI和URL.md"}');
const _sfc_main = { name: "markdown/1-前端/1-Web/1 网络/7-URI和URL.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="uri-和-url" tabindex="-1">URI 和 URL <a class="header-anchor" href="#uri-和-url" aria-label="Permalink to &quot;URI 和 URL&quot;">​</a></h1><h2 id="名称" tabindex="-1">名称 <a class="header-anchor" href="#名称" aria-label="Permalink to &quot;名称&quot;">​</a></h2><ul><li><strong>URI</strong>：统一资源标识符</li><li><strong>URL</strong>：统一资源定位符</li></ul><h2 id="关系" tabindex="-1">关系 <a class="header-anchor" href="#关系" aria-label="Permalink to &quot;关系&quot;">​</a></h2><p><strong>URI</strong> 用字符串标识某一互联网资源，而 <strong>URL</strong> 表示资源的地点（互联网上所处的位置）</p><p><strong>URL</strong> 是 <strong>URI</strong> 的子集</p><h2 id="uri-格式" tabindex="-1">URI 格式 <a class="header-anchor" href="#uri-格式" aria-label="Permalink to &quot;URI 格式&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/202204111919321.png" alt=""></p><ol><li>协议方案名：协议类型，不区分大小写，最后附加一个冒号</li><li>登录信息（可选）：指定用户名和密码作为从服务器端获取资源时必要的登录信息</li><li>服务器地址：带访问的服务器地址，可以是 <strong>DNS</strong> 可解析的名称、<strong>IPv4</strong>、<strong>IPv6</strong></li><li>服务器端口号（可选）：指定服务器连接的网络端口号，省略则自动 使用默认端口号</li><li>带层次的文件路径：指定服务器上的文件路径来定位特指的资源</li><li>查询字符串（可选）：使用查询字符串传入任意参数</li><li>片段标识符（可选）：可标记出已获取资源中的子资源（文档内的某个位置）</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/1-Web/1 网络/7-URI和URL.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _7URI_URL = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _7URI_URL as default
};

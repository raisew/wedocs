import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"pm2-watch 报错 502","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/2-后端/1-Node/4 错误/pm2-watch报错 502.md","filePath":"markdown/2-后端/1-Node/4 错误/pm2-watch报错 502.md"}');
const _sfc_main = { name: "markdown/2-后端/1-Node/4 错误/pm2-watch报错 502.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pm2-watch-报错-502" tabindex="-1">pm2-watch 报错 502 <a class="header-anchor" href="#pm2-watch-报错-502" aria-label="Permalink to &quot;pm2-watch 报错 502&quot;">​</a></h1><p>使用 pm2 --watch 启动项目时，pm2监听到项目内部文件修改，自动重启项目，如果在期间有新的请求，就会出现 502 错误</p><p>解决:如果项目中有使用文件上传功能，且该功能是上传至项目目录本身的情况下，服务器启动时不能开启 watch 监听，直接启动即可</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pm2</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> start</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> app.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/2-后端/1-Node/4 错误/pm2-watch报错 502.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pm2Watch___502 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pm2Watch___502 as default
};

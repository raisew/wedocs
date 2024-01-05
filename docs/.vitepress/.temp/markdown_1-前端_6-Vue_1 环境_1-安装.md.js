import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/6-Vue/1 环境/1-安装.md","filePath":"markdown/1-前端/6-Vue/1 环境/1-安装.md"}');
const _sfc_main = { name: "markdown/1-前端/6-Vue/1 环境/1-安装.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><h2 id="vue-cli4" tabindex="-1">vue-cli4 <a class="header-anchor" href="#vue-cli4" aria-label="Permalink to &quot;vue-cli4&quot;">​</a></h2><ul><li><p>包装 <strong>vue-cli4</strong></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">npm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> install</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> @vue/cli</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> -g</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>创建项目</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">vue</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> create</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> projectName</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol><li><strong>Please pick a preset</strong><ul><li><strong>Manually select features</strong> 自定义安装</li></ul></li><li><strong>Check the features needed for your project</strong><ul><li>空格选择需要的</li><li>回车确定</li></ul></li><li><strong>Choose a version of Vue.js that you want to start the project with</strong> vue的版本 <ul><li>2</li><li>3</li></ul></li><li><strong>Use history mode for router</strong> 是否选择 history 路由模式 <ul><li>y</li><li>n</li></ul></li><li><strong>Use class-style component syntax</strong> 使用css预处理器吗</li><li><strong>Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpliting JSX)</strong>：<code>N</code></li><li><strong>Pick a linter / formatter config</strong>：<code>Basic</code></li><li><strong>Pick additional lint features</strong>：<code>Lint on save</code></li><li><strong>Where do you prefer placing config for Babel, ESLint, etc. ?</strong> 配置文件放哪？ <ul><li>==In dedicated config files== 单独当一个文件夹里</li><li>In package.json</li></ul></li><li><strong>Save this as a preset for future projects</strong> 此次配置保存给未来使用</li></ol></li><li><p>旧项目升级到新版</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">vue</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> vue-next</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/6-Vue/1 环境/1-安装.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1___ as default
};

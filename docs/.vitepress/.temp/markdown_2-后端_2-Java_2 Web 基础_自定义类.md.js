import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"自定义类","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/2-后端/2-Java/2 Web 基础/自定义类.md","filePath":"markdown/2-后端/2-Java/2 Web 基础/自定义类.md"}');
const _sfc_main = { name: "markdown/2-后端/2-Java/2 Web 基础/自定义类.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="自定义类" tabindex="-1">自定义类 <a class="header-anchor" href="#自定义类" aria-label="Permalink to &quot;自定义类&quot;">​</a></h1><h3 id="_1、首先自定义好变量属性" tabindex="-1">1、首先自定义好变量属性 <a class="header-anchor" href="#_1、首先自定义好变量属性" aria-label="Permalink to &quot;1、首先自定义好变量属性&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> test</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    private</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> String username;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    private</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> String password;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-、使用-generate-构建-set-和-get" tabindex="-1">2 、使用 Generate 构建 set 和 get <a class="header-anchor" href="#_2-、使用-generate-构建-set-和-get" aria-label="Permalink to &quot;2 、使用 Generate 构建 set 和 get&quot;">​</a></h3><ol><li>右键 <img src="https://img-blog.csdnimg.cn/20200511120647209.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg0ODUzMg==,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></li><li>选择 Getter andSetter <img src="https://img-blog.csdnimg.cn/20200511120731176.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg0ODUzMg==,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></li><li>通多shift多选 <img src="https://img-blog.csdnimg.cn/20200511120823342.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg0ODUzMg==,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></li></ol><h3 id="_3、完成" tabindex="-1">3、完成 <a class="header-anchor" href="#_3、完成" aria-label="Permalink to &quot;3、完成&quot;">​</a></h3><p><img src="https://img-blog.csdnimg.cn/20200511120844952.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg0ODUzMg==,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/2-后端/2-Java/2 Web 基础/自定义类.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

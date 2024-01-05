import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"display-float-position","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/3-CSS/1 基础/4-display float position.md","filePath":"markdown/1-前端/3-CSS/1 基础/4-display float position.md"}');
const _sfc_main = { name: "markdown/1-前端/3-CSS/1 基础/4-display float position.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="display-float-position" tabindex="-1">display-float-position <a class="header-anchor" href="#display-float-position" aria-label="Permalink to &quot;display-float-position&quot;">​</a></h1><h2 id="display" tabindex="-1">display <a class="header-anchor" href="#display" aria-label="Permalink to &quot;display&quot;">​</a></h2><ol><li><code>none</code>：设置元素不可⻅</li><li><code>block</code>：转换成块状元素。</li><li><code>inline</code>：转换成⾏内元素。</li><li><code>inline-block</code>：象⾏内元素⼀样显示，但其内容象块类型元素⼀样显示。</li><li><code>table</code>：此元素会作为块级表格来显示</li><li><code>flex</code>：弹性布局</li><li><code>grid</code>：网格布局</li><li><code>inherit</code>：规定应该从⽗元素继承 <strong>display</strong> 属性的值</li></ol><h2 id="position" tabindex="-1">position <a class="header-anchor" href="#position" aria-label="Permalink to &quot;position&quot;">​</a></h2><ol><li><p><code>static</code>：默认值。没有定位，元素出现在正常的流中</p></li><li><p><code>relative</code>：⽣成相对定位的元素，相对于其正常位置进⾏定位</p></li><li><p><code>absolute</code>：⽣成绝对定位的元素，相对于 <strong>static</strong> 定位以外的第⼀个⽗元素进⾏定位</p></li><li><p><code>fixed</code>：⽣成绝对定位的元素，相对于浏览器窗⼝进⾏定位</p></li><li><p><code>sticky</code>：粘性定位，该定位基于用户滚动的位置。</p><ul><li>未超出目标区域，行为像 <strong>position: relative</strong></li><li>超出目标区域，行为像 <strong>position: fixed</strong></li></ul></li><li><p><code>inherit</code>：规定从⽗元素继承 <strong>position</strong> 属性的值</p></li></ol><h2 id="三者关系" tabindex="-1">三者关系 <a class="header-anchor" href="#三者关系" aria-label="Permalink to &quot;三者关系&quot;">​</a></h2><ol><li><p>如果 <strong>display</strong> 取值为 <strong>none</strong>，那么 <strong>position</strong>和 <strong>float</strong>都不起作⽤</p></li><li><p><strong>display</strong> 非 <strong>none</strong>，且如果 <strong>position</strong> 取值为 <strong>absolute</strong> 或者 <strong>fixed</strong>，框就是绝对定位的， <strong>float</strong> 的计算值为 <strong>none</strong>， <strong>display</strong> 根据下⾯的表格进⾏调整。</p></li><li><p><strong>display</strong> 非 <strong>none</strong>， <strong>position</strong> 不是绝对定位，且如果 <strong>float</strong> 不是 <strong>none</strong>，框是浮动的， <strong>display</strong> 根据下表进⾏调整</p></li><li><p>如果元素是根元素， <strong>display</strong> 根据下表进⾏调整</p></li><li><p>其他情况下 <strong>display</strong> 的值为指定值</p></li></ol><table><thead><tr><th>指定值</th><th>计算值</th></tr></thead><tbody><tr><td>inline-table</td><td>table</td></tr><tr><td>inline, table-row-group, table-column, table-column-group, table-header-group, table-footer-group, table-row, table-cell, table-caption, inline-block</td><td>block</td></tr><tr><td>other</td><td>不变</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/3-CSS/1 基础/4-display float position.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _4Display_float_position = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _4Display_float_position as default
};

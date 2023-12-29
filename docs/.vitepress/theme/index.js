import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import DocImagePreview from "../../../components/DocImagePreview.vue";

import "./vars.css";
import "./global.scss";
import "./custom.scss";
import "./user-theme.scss";

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(DocImagePreview),
    });
  },
  enhanceApp({ app }) {
    app.use(ElementPlus);
    // app.component('Demo', Demo);
  },
};

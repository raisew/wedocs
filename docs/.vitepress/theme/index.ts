import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import DocImagePreview from "../../../components/DocImagePreview.vue";
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

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
    app.use(Particles, {
      init: async engine => {
        // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
        await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
      },});
    // app.component('Demo', Demo);
  },
};

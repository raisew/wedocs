import { defineConfig } from "vitepress";

import { docsAuto } from "./utils/autodoc";

let { navBar, sideBar } = docsAuto();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "hongyangwu",
  description: "A VitePress Site",
  lastUpdated: true,
  cleanUrls: false,
  markdown: {
    math: true,
    lineNumbers: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, "[!code");
        },
      },
    ],
  },
  sitemap: {
    hostname: "https://www.hongyangwu.top",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {
        async: "",
        src: "/tsparticles.all.bundle.min.js",
      },
    ],
    ["script", { async: "", src: "/particles.js" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    search: {
      provider: "local",
      options: {
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html;
          return html;
        },
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    nav: navBar,
    sidebar: sideBar,

    socialLinks: [{ icon: "github", link: "https://github.com" }],
    footer: {
      message: "",
      copyright: `Copyright © 2021-${new Date().getFullYear()} hongyangwu`,
    },
  },
});

function nav() {
  return [
    { text: "首页", link: "/" },
    {
      text: "Vue3",
      link: "/frontend/vue3/Composition API.md",
    },
    {
      text: "前端",
      items: [
        {
          text: "Vue3",
          link: "/frontend/vue3/Composition API.md",
        },
      ],
    },
  ];
}

import { defineConfig } from "vitepress";

import { docsAuto } from "./utils/autodoc";

let { navBar, sideBar } = docsAuto();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  locales: {
    root: { label: "简体中文", lang: "zh-CN" },
  },
  title: "hongyangwu",
  description: "hongyangwu",
  lastUpdated: false,
  cleanUrls: true,
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
    search: createSearch(),
    nav: navBar,
    sidebar: sideBar,

    socialLinks: [{ icon: "github", link: "https://github.com" }],
    footer: {
      message: "",
      copyright: `Copyright © 2021-${new Date().getFullYear()} hongyangwu`,
    },
  },
});

function createSearch() {
  return {
    // provider: "local",
    provider: "algolia",
    options: {
      appId: "721DA6B4OG",
      apiKey: "e7ffc1e5747a57ddd9d65a7777b733c2",
      indexName: "wedoc",
      // locales: {
      //   zh: {
      placeholder: "搜索文档",
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          searchBox: {
            resetButtonTitle: "清除查询条件",
            resetButtonAriaLabel: "清除查询条件",
            cancelButtonText: "取消",
            cancelButtonAriaLabel: "取消",
          },
          startScreen: {
            recentSearchesTitle: "搜索历史",
            noRecentSearchesText: "没有搜索历史",
            saveRecentSearchButtonTitle: "保存至搜索历史",
            removeRecentSearchButtonTitle: "从搜索历史中移除",
            favoriteSearchesTitle: "收藏",
            removeFavoriteSearchButtonTitle: "从收藏中移除",
          },
          errorScreen: {
            titleText: "无法获取结果",
            helpText: "你可能需要检查你的网络连接",
          },
          footer: {
            selectText: "选择",
            navigateText: "切换",
            closeText: "关闭",
            searchByText: "搜索提供者",
          },
          noResultsScreen: {
            noResultsText: "无法找到相关结果",
            suggestedQueryText: "你可以尝试查询",
            reportMissingResultsText: "你认为该查询应该有结果？",
            reportMissingResultsLinkText: "点击反馈",
          },
        },
      },
      //   },
      // },
    },
  };
}

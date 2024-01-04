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
    math: false,
    lineNumbers: true,
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, "[!code");
        },
      },
    ],
  },
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: "/favicon.ico" }], 
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    siteTitle: "hongyangwu",
    // algolia: algoliaJSON(),
    search: {
      provider: "local",
      options:{
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html
          return html
        },
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '无法找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            }
          }
        }
      }
      
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

function algoliaJSON() {
  return {
    appId: "RMVAHTZ5LL",
    apiKey: "96dbb8e7c314f86172f3108ef9338d89",
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
  };
}

function createSearch() {
  return {
    provider: "local",
    options:{
      _render(src, env, md) {
        const html = md.render(src, env)
        if (env.frontmatter?.title)
          return md.render(`# ${env.frontmatter.title}`) + html
        return html
      },
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          displayDetails: '显示详细列表',
          resetButtonTitle: '重置搜索',
          backButtonTitle: '关闭搜索',
          noResultsText: '无法找到相关结果',
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
          }
        }
      }
    }
    
  };
}

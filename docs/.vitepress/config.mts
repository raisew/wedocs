import {defineConfig} from "vitepress"

import {localOptions} from "./search"

import {docsAuto} from "./utils/autodoc"
let {navBar, sideBar} = docsAuto()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-Hans",
  locales: {
    root: {label: "简体中文", lang: "zh-Hans"},
  },
  title: "hongyangwu",
  description: "hongyangwu",
  lastUpdated: false,
  cleanUrls: false,
  vite: {
    build: {
      chunkSizeWarningLimit: 5000,
      target: "modules",
      sourcemap: false,
    },
  },
  markdown: {
    math: false,
    lineNumbers: true,
    theme: {light: "catppuccin-latte", dark: "material-theme-darker"},
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, "[!code")
        },
      },
    ],
  },
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", {rel: "icon", href: "/favicon.ico"}],
    ["link", {rel: "shortcut icon", href: "/favicon.ico"}],
    ["meta", {itemprop: "name", content: "hongyangwu前端文档"}],
    ["meta", {itemprop: "image", content: "https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401121430489.png"}],
    ["meta", {property: "og:title", content: "hongyangwu前端文档"}],
    ["meta", {property: "og:image", content: "https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401121430489.png"}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    siteTitle: "hongyangwu",
    search: localOptions,
    nav: navBar,
    sidebar: sideBar,
    // socialLinks: [{ icon: "github", link: "https://github.com" }],
    footer: {
      message: "",
      copyright: `Copyright © 2021-${new Date().getFullYear()} hongyangwu`,
    },
    outline: {
      label: "页面导航",
      level: "deep",
    },
    docFooter: {
      prev: "←",
      next: "→",
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
})

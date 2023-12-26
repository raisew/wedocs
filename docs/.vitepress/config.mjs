import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "hongyangwu",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lang: 'zh-CN',
    search: {
      provider: 'local',
      options: {
          _render(src, env, md) {
              const html = md.render(src, env)
              if (env.frontmatter?.search === false) return ''
              if (env.relativePath.startsWith('some/path')) return ''
              return html
          }
      }
  },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: "",
      copyright: "Copyright © 2023-hongyangwu",
    },
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "hongyangwu",
  description: "A VitePress Site",
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ['link', { rel: 'icon', href: 'logo.png' }],
    [
      'script',
      { async: '', src: 'https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.3/tsparticles.all.bundle.min.js'}
    ],
    [
      'script',
      { async: '', src: 'https://cdn.jsdelivr.net/npm/@tsparticles/configs@3.0.3/tsparticles.configs.min.js'}
    ],
    [
      'script',
      { async: '', src: 'particles.js'}
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'logo.png',
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

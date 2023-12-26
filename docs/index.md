---
layout: home
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
hero:
  name: hongyangwu
  text: 个人文档
  tagline: 一些杂七杂八的整理
  image:
    src: /logo.png
    alt: VitePress
  actions:
    - theme: brand
      text: 开始
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
features:
  - icon: ⚡️
    title: vite 超快冷启动和热加载
    details: Lorem ipsum...
  - icon: 🖖
    title: Vue的力量与Markdown相遇
    details: Lorem ipsum...
  - icon: 🛠️
    title: 始终简单、最少
    details: Lorem ipsum...
  - icon: 🛠️
    title: 始终简单、最少
    details: Lorem ipsum...
  - icon: 🛠️
    title: 始终简单、最少
    details: Lorem ipsum...
  - icon: 🛠️
    title: 始终简单、最少
    details: Lorem ipsum...
---

<script setup>
import { useData } from 'vitepress'
const {page} = useData()
const pageData = {
    num: 100
}
</script>
<div class="container">
  <p>{{pageData.num}}</p>
</div>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
</style>

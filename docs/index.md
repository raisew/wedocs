---
layout: home
head:
  - - meta
    - name: description
      content: 前端，文档，博客
  - - meta
    - name: keywords
      content: 前端，文档，博客
# hero:
#   name: hongyangwu
#   text: 个人文档
#   tagline: 一些零零碎碎的文档
#   image:
#     src: /logo.png
#     alt: VitePress
#   actions:
#     - theme: brand
#       text: 开始
#       link: /guide/what-is-vitepress
#     - theme: alt
#       text: View on GitHub
#       link: https://github.com/vuejs/vitepress
# features:
#   - icon: ⚡️
#     title: vite 超快冷启动和热加载
#     details: Lorem ipsum...
#   - icon: 🖖
#     title: Vue的力量与Markdown相遇
#     details: Lorem ipsum...
#   - icon: 🛠️
#     title: 始终简单、最少
#     details: Lorem ipsum...
#   - icon: 🛠️
#     title: 始终简单、最少
#     details: Lorem ipsum...
#   - icon: 🛠️
#     title: 始终简单、最少
#     details: Lorem ipsum...
#   - icon: 🛠️
#     title: 始终简单、最少
#     details: Lorem ipsum...
---

<script setup>
import { useData } from 'vitepress'
import { ref, onMounted, nextTick} from 'vue'
import Clock from "../components/Clock.vue";
import DateTimeCount from "../components/DateTimeCount.vue";
import Calendar from "../components/Calendar.vue";

</script>

  <div class="container-main">
    <div class="sign">
      <div class="font-bold font-80 line-height-1">HONG YANG WU</div>
      <div class="font-26 mgt-10">代码如诗，世界如画。莫失心所念，万物皆可期。</div>
    </div>
    <el-row :gutter="20" class="mgt-36">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <Clock />
        <DateTimeCount />
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <Calendar />
      </el-col>
    </el-row>
  </div>
  <div id="particles"></div>

<style lang="scss">

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}


.sign {
	text-align: center;
	text-transform: uppercase;
	background: url("/font-bg.jpg");
	-webkit-background-clip: text;
	color: rgba(100,100,100,0.3);
	animation: text-background 20s linear infinite;
  overflow: hidden;
}

@keyframes text-background {

	from { background-position: 0 0 }

	to { background-position: 100% 100% }

} 


</style>

# marquee 文字跑马灯效果

```vue
<template>
  <view class="marquee-container">
    <text class="marquee" ref="marquee">
      {{ msg }}
    </text>
  </view>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

const props = defineProps(['msg'])

const duration = ref(20) // 控制动画的速度，单位为秒
const marquee = ref(null)
const updateMarquee = () => {
  const textWidth = marquee.value.$el.offsetWidth
  const winInfo = uni.getWindowInfo()
  if (winInfo.screenWidth > 768) {
    duration.value = 10
  }
  // 设置动画时长和距离
  const animationDuration = textWidth / duration.value // 控制速度的系数

  const keyframeName = `marquee-${Date.now()}`
  marquee.value.$el.style.animationName = keyframeName
  marquee.value.$el.style.animationDuration = `${animationDuration}s`

  // 动态生成 keyframes
  const styleSheet = document.styleSheets[0]
  const keyframes = `
    @keyframes ${keyframeName} {
      from {
        left: 100%;
      }
      to {
        left: -${textWidth}px;
      }
    }
  `
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
}

onMounted(() => {
  updateMarquee()
  document.addEventListener('resize', updateMarquee)
})
onUnmounted(() => {
  document.removeEventListener('resize', updateMarquee)
})
</script>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.5);
  height: 50px;
  /* 根据需要调整高度 */
  position: relative;
}

.marquee {
  display: inline-block;
  white-space: nowrap;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  font-size: 14px;
}
</style>
```

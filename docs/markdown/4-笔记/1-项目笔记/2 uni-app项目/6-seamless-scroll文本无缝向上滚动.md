# seamless-scroll 文本无缝向上滚动

## 使用 createAnimation

这个方法父级需要在 `onShow` 和 `onHide` 时使用 `v-if` 来触发 `onMounted`

```vue
<template>
  <view class="scroll-container" :style="{height: height + 'px'}">
    <view class="scroll-content" :animation="animationData">
      <slot></slot>
    </view>
  </view>
</template>

<script setup>
import {ref, onMounted, nextTick, watch} from 'vue'

const props = defineProps({
  height: {
    type: Number,
    default: 400,
  },
  speed: {
    type: Number,
    default: 50,
  },
})

const contentHeight = ref(0)
const animationData = ref({})
let animation = null

onMounted(async () => {
  await nextTick()
  // 获取元素的高度在App端需要使用uni.createSelectorQuery
  uni
    .createSelectorQuery()
    .select('.scroll-content')
    .boundingClientRect(data => {
      contentHeight.value = data.height
      if (contentHeight.value > props.height) {
        startScroll()
      }
    })
    .exec()
})

watch(
  () => props.speed,
  newSpeed => {
    if (contentHeight.value > props.height) {
      startScroll(newSpeed)
    }
  }
)

function startScroll(speed = props.speed) {
  if (animation) {
    animation.translateY(0).step({
      duration: 0,
    })
    animationData.value = animation.export()
  }

  const duration = ((contentHeight.value - props.height) / speed) * 1000
  animation = uni.createAnimation({
    duration: duration,
    timingFunction: 'linear',
  })

  animation.translateY(-(contentHeight.value - props.height)).step()
  animationData.value = animation.export()

  setTimeout(resetScroll, duration)
}

function resetScroll() {
  animation.translateY(0).step({
    duration: 0,
  })
  animationData.value = animation.export()
  setTimeout(() => {
    startScroll()
  }, 50)
}
</script>

<style scoped>
.scroll-container {
  overflow: hidden;
  position: relative;
}

.scroll-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
```

## 使用 setTimeout

```vue
<template>
  <view class="scroll-container" :style="{height: height + 'px'}">
    <view class="scroll-content" :style="{willChange: 'transform', transform: 'translateY(-' + translateY + 'px)'}" ref="contentRef">
      <slot></slot>
    </view>
  </view>
</template>

<script setup>
import {ref, onMounted, onUnmounted, nextTick} from 'vue'

const props = defineProps({
  height: {
    type: Number,
    default: 400,
  },
  speed: {
    type: Number,
    default: 50,
  },
})

const translateY = ref(0) // Y轴位移
let contentRef = ref(null)
let contentHeight = 0
let previousTime = Date.now()
let timerId

function startScroll() {
  function animateScroll() {
    const currentTime = Date.now()
    const elapsedTime = currentTime - previousTime
    const distance = (props.speed / 1000) * elapsedTime

    translateY.value += distance

    if (translateY.value >= contentHeight - props.height) {
      translateY.value = 0
    }

    previousTime = currentTime
    timerId = setTimeout(() => {
      requestAnimationFrame(animateScroll)
    }, 16) // 16ms = 大约每秒60帧
  }
  animateScroll()
}

onMounted(async () => {
  await nextTick()
  // 获取元素的高度在App端需要使用uni.createSelectorQuery
  uni
    .createSelectorQuery()
    .select('.scroll-content')
    .boundingClientRect(data => {
      contentHeight = data.height
      startScroll()
    })
    .exec()
})

onUnmounted(() => {
  clearTimeout(timerId)
})
</script>

<style scoped>
.scroll-container {
  overflow: hidden;
}
</style>
```

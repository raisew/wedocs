# vue3.0 setup 默认模板代码

```vue
<template>
  <mypage>
    <mynavbar title=""></mynavbar>
  </mypage>
</template>

<script setup>
import {reactive, ref, getCurrentInstance, watch, computed, nextTick} from "vue"

import {onLoad, onReady, onShow, onHide, onPullDownRefresh, onReachBottom} from "@dcloudio/uni-app"

const {proxy} = getCurrentInstance()

onLoad(() => {})
onShow(() => {})
</script>

<style lang="scss" scoped></style>
```

```vue
<template>
  <mypage>
    <u-navbar :is-back="true" title="" :border-bottom="false" class="bd-base-bottom"></u-navbar>
  </mypage>
</template>

<script setup>
import {reactive, ref, getCurrentInstance, watch, computed, nextTick} from "vue"
import {onLoad, onReady, onShow, onHide, onPullDownRefresh, onReachBottom} from "@dcloudio/uni-app"

const {proxy} = getCurrentInstance()

onLoad(() => {})
onShow(() => {})
</script>

<style lang="scss" scoped></style>
```

# 在线客服 web-view

```vue
<template>
  <web-view :src="urlLink" class="h-100" :update-title="false"></web-view>
</template>

<script setup>
import {reactive, ref, getCurrentInstance} from 'vue'

import {onLoad, onShow} from '@dcloudio/uni-app'

const {proxy} = getCurrentInstance()

const props = defineProps(['url'])

const urlLink = ref(decodeURIComponent(props.url))

onLoad(() => {
  uni.setNavigationBarTitle({
    title: proxy.Pub.t('customer_service'),
  })
})
onShow(() => {})
</script>

<style lang="scss" scoped>
page {
  background-color: #fff;
}
</style>
```

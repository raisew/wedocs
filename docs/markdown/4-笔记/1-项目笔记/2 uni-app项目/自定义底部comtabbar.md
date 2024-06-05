# 自定义底部 comtabbar

```vue
<template>
  <view>
    <view class="position-fixed  bottom-0 w-100" style="max-width: 540px; left: 50%; transform: translateX(-50%);">
      <view class="safe-area-inset-bottom  bgc-footer box-shadow-footer com-border" style="border-radius: 30rpx 30rpx 0 0">
        <view class="w-100 h-140px flex ">
          <view class="flex-1 h-100 flex flex-column flex-align-center flex-justify-center position-relative" v-for="(item, index) in list" :key="`tabbar_${index}`" @click="changePage(item, index)">
            <u-icon
              :name="pageIndex == index ? item.selectedIconPath : item.iconPath"
              size="48"
              class="animate__animated position-relative z-index-3"
              :class="{animate__flipInX: pageIndex == index}"
            ></u-icon>
            <text class="c-footer pdt-6" :class="{'c-primary': pageIndex == index}">{{ item.text }}</text>
            <!-- <view class="position-absolute w-100 z-index-0 top-0 flex flex-column flex-align-center align-center"
							style="left:50%;transform: translateX(-50%);" v-if="pageIndex == index">
							<view class="w-60px h-6px bgc-c-primary" style="border-radius: 0 0 6rpx 6rpx;"></view>
						</view> -->
          </view>
        </view>
      </view>
    </view>
    <view v-show="isPlaceholder">
      <view class="safe-area-inset-bottom">
        <view class="w-100 h-140px"></view>
      </view>
    </view>
  </view>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted, watch} from 'vue'
const {proxy} = getCurrentInstance()
const props = defineProps({
  index: String | Number,
  isPlaceholder: {
    type: Boolean,
    default: true,
  },
})
const pageIndex = ref(props.index || 0)
const list = ref([
  {
    iconPath: '/static/images/tabbar/home.png',
    selectedIconPath: '/static/images/tabbar/home_active.png',
    text: '',
    customIcon: false,
    pagePath: '/pages/index/index',
  },
  {
    iconPath: '/static/images/tabbar/intro.png',
    selectedIconPath: '/static/images/tabbar/intro_active.png',
    text: '',
    customIcon: false,
    pagePath: '/pages/invest/invest',
  },
  {
    iconPath: '/static/images/tabbar/service.png',
    selectedIconPath: '/static/images/tabbar/service_active.png',
    text: '',
    customIcon: false,
    pagePath: '',
  },
  {
    iconPath: '/static/images/tabbar/mine.png',
    selectedIconPath: '/static/images/tabbar/mine_active.png',
    text: '',
    customIcon: false,
    pagePath: '/pages/mine/mine',
  },
])
const changePage = (item, index) => {
  if (props.index == index) return false
  if (index == 2) {
    let serviceLink = proxy.Pub.getStore('configData').im_link
    if (serviceLink) {
      return proxy.Pub.openLink(serviceLink)
    }
    return false
  }
  uni.switchTab({
    url: item.pagePath,
  })
}
watch(
  () => props.index,
  val => {
    pageIndex.value = val
  }
)
onMounted(() => {
  uni.hideTabBar()
})
</script>

<style lang="scss" scoped></style>
```

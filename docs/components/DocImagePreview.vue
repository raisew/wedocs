<script setup>
import { ElImageViewer } from 'element-plus'
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue'

const show = ref(false)

watch(() => show.value, (val) => {
    if (val) {
        window.document.body.style.overflow = 'hidden';
    } else {
        window.document.body.style.overflow = 'visible';
    }
})
const previewImageInfo = reactive(
    {
        url: '',
        list: [],
        idx: 0
    }
)
function previewImage(e) {
    const target = e.target
    const currentTarget = e.currentTarget
    if (target.tagName.toLowerCase() === 'img') {
        const imgs = currentTarget.querySelectorAll(
            '.content-container .main img'
        )
        const idx = Array.from(imgs).findIndex(el => el === target)
        const urls = Array.from(imgs).map(el => el.src)

        const url = target.getAttribute('src')
        previewImageInfo.url = url
        previewImageInfo.list = urls
        previewImageInfo.idx = idx

        // 兼容点击main之外的图片
        if (idx === -1 && url) {
            previewImageInfo.list.push(url)
            previewImageInfo.idx = previewImageInfo.list.length - 1
        }
        show.value = true
    }
}
onMounted(() => {
    const docDomContainer = document.querySelector('#VPContent')
    docDomContainer?.addEventListener('click', previewImage)
})

onUnmounted(() => {
    const docDomContainer = document.querySelector('#VPContent')
    docDomContainer?.removeEventListener('click', previewImage)
})
</script>

<template>
    <ElImageViewer v-if="show" :infinite="true" hide-on-click-modal teleported :url-list="previewImageInfo.list"
        :initial-index="previewImageInfo.idx" @close="show = false" />
    <el-backtop :right="20" :bottom="30" />
</template>
<style lang="scss">
.el-backtop {
    z-index: 999;
}
</style>
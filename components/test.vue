<template>
    <div>
        {{ test }}
        这是测试的vue3
    </div>
</template>
<script setup>
import { ref } from "vue"
const test = ref('这是什么呀？')
</script>
<style lang="scss"></style>
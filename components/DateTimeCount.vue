<template>
    <div class="pdb-10 pdt-10">
        <div class="align-center pdb-12 font-22 font-bold">距离{{ nextYear }}年元旦还有</div>
        <Countdown :deadline="newYear" v-if="newYear"></Countdown>
        <div class="align-center pdb-12 font-22 font-bold mgt-10">距离{{ nextYear }}年春节还有</div>
        <Countdown :deadline="springDay" v-if="springDay"></Countdown>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { Countdown } from 'vue3-flip-countdown'
import { Solar, LunarMonth } from 'lunar-typescript';


const nextYear = ref(new Date().getFullYear() + 1);
const curTime = ref('')
const newYear = ref('')
const springDay = ref('')

function getCurTime() {
    let d = Solar.fromDate(new Date());
    // 格式化日期
    var formattedDate =
        d.getYear() +
        "-" +
        padZero(d.getMonth() + 1) +
        "-" +
        padZero(d.getDay()) +
        " 00:00:00";
    return formattedDate;
}

function getNextYearNewYearDate() {
    // 获取当前年份
    var currentYear = new Date().getFullYear();
    // 创建明年元旦日期对象
    var nextYearNewYearDate = new Date(currentYear + 1, 0, 1);
    // 格式化日期
    var formattedDate =
        nextYearNewYearDate.getFullYear() +
        "-" +
        padZero(nextYearNewYearDate.getMonth() + 1) +
        "-" +
        padZero(nextYearNewYearDate.getDate()) +
        " 00:00:00";
    return formattedDate;
}
function getNextYearSpringFestivalDate() {
    var lunarMonth = LunarMonth.fromYm(nextYear.value, 1);
    var firstJulianDay = lunarMonth.getFirstJulianDay();
    var solar = Solar.fromJulianDay(firstJulianDay);
    return solar.toYmdHms();
}
// 补零函数，确保单个数字前面有零
function padZero(num) {
    return num < 10 ? "0" + num : num;
}



onMounted(() => {
    curTime.value = getCurTime();
    newYear.value = getNextYearNewYearDate();
    springDay.value = getNextYearSpringFestivalDate();
})


</script>

<style lang="scss">
.flip-clock__slot {
    color: var(--vp-c-text-1) !important;
}
</style>
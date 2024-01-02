<template>
    <div class="clock position-relative">
        <div ref="hourDiv" class="hour"></div>
        <div ref="minDiv" class="min"></div>
        <div ref="secDiv" class="sec"></div>
        <div class="position-absolute left-0 bottom-30 font-10 w-100 align-center">
            <p>{{ nowTime }}</p>
            <p>{{ nowWeek }}</p>
        </div>
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref, nextTick } from "vue"
import { Solar } from "lunar-javascript"
const deg = 6;
const hourDiv = ref(null);
const minDiv = ref(null);
const secDiv = ref(null);
const timer = ref(null);

const nowTime = ref('');
const nowWeek = ref('');

const getNowTime = () => {
    let d = Solar.fromDate(new Date());
    nowTime.value = d.toYmdHms();
    nowWeek.value = '星期' + d.getWeekInChinese();
}

const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hourDiv.value.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minDiv.value.style.transform = `rotateZ(${mm}deg)`;
    secDiv.value.style.transform = `rotateZ(${ss}deg)`;
};



onMounted(() => {
    nextTick(() => {
        // first time
        setClock();
        getNowTime();
        // Update every 1000 ms
        timer.value = setInterval(() => {
            setClock();
            getNowTime();
        }, 1000);
    })
})
onUnmounted(() => {
    clearInterval(timer.value)
})
</script>
<style lang="scss" scoped>
.clock {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 11em;
    height: 11em;
    background-image: url("/clock.png");
    background-position: center center;
    background-size: cover;
    border-radius: 50%;
    border: 4px solid var(--main-bg-color);
    box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05), inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.3), inset 0 15px 15px rgba(0, 0, 0, 0.3);
    transition: all ease .2s;
    margin: 0 auto;
}

.clock:before {
    content: "";
    height: .75rem;
    width: .75rem;
    background-color: var(--vp-c-text-1);
    border: 2px solid var(--main-bg-color);
    position: absolute;
    border-radius: 50%;
    z-index: 1000;
    transition: all ease .2s
}

.hour,
.min,
.sec {
    position: absolute;
    display: flex;
    justify-content: center;
    border-radius: 50%
}

.hour {
    height: 7em;
    width: 7em
}

.hour:before {
    content: "";
    position: absolute;
    height: 50%;
    width: 6px;
    background-color: var(--vp-c-text-1);
    border-radius: 6px
}

.min {
    height: 9em;
    width: 9em
}

.min:before {
    content: "";
    height: 50%;
    width: 4px;
    background-color: var(--vp-c-text-1);
    border-radius: 4px
}

.sec {
    height: 10em;
    width: 10em
}

.sec:before {
    content: "";
    height: 60%;
    width: 2px;
    background-color: #f00;
    border-radius: 2px
}

.switch-cont {
    margin: 2em auto;
    bottom: 0
}

.switch-cont .switch-btn {
    font-family: monospace;
    text-transform: uppercase;
    outline: 0;
    padding: .5rem 1rem;
    background-color: var(--main-bg-color);
    color: var(--vp-c-text-1);
    border: 1px solid var(--vp-c-text-1);
    border-radius: .25rem;
    cursor: pointer;
    transition: all ease .3s
}
</style>
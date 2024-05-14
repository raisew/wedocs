# echarts vue3 版本使用

## 安装 echarts

```sh
yarn add echarts

```

## line-chart.vue

```vue
<template>
  <view class="echarts-container" ref="chartContainer"></view>
</template>

<script setup>
// 引入 ECharts
import {onMounted, onUnmounted, ref, nextTick, watch} from "vue"
import * as echarts from "echarts/core"
import {LineChart} from "echarts/charts"
import {TitleComponent, GridComponent, TooltipComponent} from "echarts/components"
import {CanvasRenderer} from "echarts/renderers"

// 使用 ECharts 组件
echarts.use([TitleComponent, GridComponent, TooltipComponent, LineChart, CanvasRenderer])

const props = defineProps({
  labelData: Array,
  chartData: Array,
})

// 使用 ref 创建响应式引用
const chartContainer = ref(null)
const myChart = ref(null)

function initCharts() {
  // 定义图表的配置项
  const option = {
    xAxis: {
      show: false,
      type: "category",
      boundaryGap: false,
      data: props.labelData,
    },
    yAxis: {
      show: false,
      type: "value",
    },
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      containLabel: false, // 设置 grid 区域不包含坐标轴的标签
    },
    series: [
      {
        symbol: "none",
        smooth: true,
        data: props.chartData,
        type: "line",
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#0bcc96", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "transparent", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        lineStyle: {
          color: "#0bcc96", // 设置线条颜色
        },
      },
    ],
  }
  // 使用 setOption 方法设置图表的配置项
  myChart.value.setOption(option)
}

function updateChart() {
  if (myChart.value && myChart.value.setOption) {
    myChart.value.setOption({
      xAxis: {
        type: "category",
        data: props.xAxisData,
      },
      series: [
        {
          data: props.chartData,
          type: "line",
        },
      ],
    })
  }
}

// 处理窗口大小变化事件
function handleResize() {
  // 重新渲染图表
  myChart.value.resize()
}

watch(
  () => props.chartData,
  () => {
    updateChart()
  }
)

watch(
  () => props.xAxisData,
  () => {
    updateChart()
  }
)

// 在组件挂载后初始化 ECharts 实例
onMounted(async () => {
  // 获取 chartContainer 的 DOM 元素
  await nextTick()
  const container = chartContainer.value.$el
  if (container) {
    // 创建 ECharts 实例
    myChart.value = echarts.init(container)
    initCharts()
    // #ifdef H5
    // 监听窗口大小变化事件
    window.addEventListener("resize", e => {
      myChart.value.resize()
    })
    // #endif
  }
})
onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
  // 销毁 ECharts 实例
  myChart.value?.dispose()
})
</script>

<style scoped>
.echarts-container {
  width: 100%;
  height: 100%;
}
</style>
```

数据

```js
const labelData = ref(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"])
const chartData = ref([163, 932, 901, 934, 1290, 1330, 1320])
```

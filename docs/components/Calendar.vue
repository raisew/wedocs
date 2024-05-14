<script setup>
import { reactive, watch, onMounted, nextTick } from 'vue'
import { Solar, SolarMonth, HolidayUtil } from 'lunar-typescript'

const now = Solar.fromDate(new Date())

class Day {
    month = 0
    day = 0
    lunarDay = ''
    lunarMonth = ''
    yearGanZhi = ''
    yearShengXiao = ''
    monthGanZhi = ''
    dayGanZhi = ''
    ymd = ''
    desc = ''
    isToday = false
    isSelected = false
    isRest = false
    isHoliday = false
    festivals = []
    yi = []
    ji = []
}

class Week {
    days = []
}

class Month {
    heads = []
    weeks = []
}

class Holiday {
    name = ''
    month = 0
}

const state = reactive({
    year: now.getYear(),
    month: now.getMonth(),
    weekStart: 1,
    selected: new Day(),
    data: new Month(),
    holidays: new Array(),
    holidayMonth: 0
})

function buildDay(d) {
    const ymd = d.toYmd()
    const lunar = d.getLunar()
    const day = new Day()
    day.month = d.getMonth()
    day.day = d.getDay()
    day.lunarMonth = lunar.getMonthInChinese()
    day.lunarDay = lunar.getDayInChinese()
    day.yearGanZhi = lunar.getYearInGanZhi()
    day.yearShengXiao = lunar.getYearShengXiao()
    day.monthGanZhi = lunar.getMonthInGanZhi()
    day.dayGanZhi = lunar.getDayInGanZhi()
    day.ymd = ymd
    day.isToday = ymd == now.toYmd()
    day.isSelected = ymd == state.selected.ymd
    if (day.isToday && state.selected.day === 0) {
        state.selected = day
    }
    const solarFestivals = d.getFestivals()
    solarFestivals.forEach(f => {
        day.festivals.push(f)
    })
    d.getOtherFestivals().forEach(f => {
        day.festivals.push(f)
    })
    lunar.getFestivals().forEach(f => {
        day.festivals.push(f)
    })
    lunar.getOtherFestivals().forEach(f => {
        day.festivals.push(f)
    })
    let rest = false
    if (d.getWeek() === 6 || d.getWeek() === 0) {
        rest = true
    }
    const holiday = HolidayUtil.getHoliday(ymd)
    if (holiday) {
        rest = !holiday.isWork()
    }
    day.isHoliday = !!holiday
    day.isRest = rest
    day.yi = lunar.getDayYi()
    day.ji = lunar.getDayJi()
    let desc = lunar.getDayInChinese()
    const jq = lunar.getJieQi()
    if (jq) {
        desc = jq
    } else if (lunar.getDay() === 1) {
        desc = lunar.getMonthInChinese() + '月'
    } else if (solarFestivals.length > 0) {
        const f = solarFestivals[0]
        if (f.length < 4) {
            desc = f
        }
    }
    day.desc = desc
    return day
}

function render() {
    const month = new Month()
    const weeks = []
    const solarWeeks = SolarMonth.fromYm(parseInt(state.year + '', 10), parseInt(state.month + '', 10)).getWeeks(state.weekStart)
    solarWeeks.forEach(w => {
        weeks.push(w)
    })
    while (weeks.length < 6) {
        weeks.push(weeks[weeks.length - 1].next(1, false))
    }
    weeks.forEach(w => {
        const week = new Week()
        const heads = []
        w.getDays().forEach(d => {
            heads.push(d.getWeekInChinese())
            week.days.push(buildDay(d))
        })
        month.heads = heads
        month.weeks.push(week)
    })
    state.data = month
    const holidays = []
    HolidayUtil.getHolidays(state.year).forEach(h => {
        const holiday = new Holiday()
        holiday.name = h.getName()
        holiday.month = parseInt(h.getTarget().substring(5, 7), 10)
        const exists = holidays.some(a => {
            return a.name == holiday.name
        })
        if (!exists) {
            holidays.push(holiday)
        }
    })
    state.holidays = holidays
}

function onSelect(day) {
    state.selected = day
}

function onBack() {
    state.holidayMonth = 0
    state.year = now.getYear()
    state.month = now.getMonth()
    state.selected = buildDay(now)
}

onMounted(() => {
    nextTick(() => {
        render()
    })
})


watch(() => state.year, () => {
    render()
})

watch(() => state.month, () => {
    render()
})

watch(() => state.selected, () => {
    render()
})

watch(() => state.holidayMonth, (newVal) => {
    const month = parseInt(newVal + '', 10)
    if (month > 0) {
        state.month = month
        render()
    }
})

</script>

<template>
    <div class="calendar-box">
        <div class="calendar">
            <div class="calendar-container">
                <div class="bar">
                    <div>
                        <input v-model="state.year">年
                    </div>
                    <div>
                        <select v-model="state.month">
                            <option :value="i" v-for="i in 12">{{ i }}月</option>
                        </select>
                    </div>
                    <div>
                        <select v-model="state.holidayMonth">
                            <option value="0">假期安排</option>
                            <option :value="h.month" v-for="h in state.holidays">{{ h.name }}</option>
                        </select>
                    </div>
                    <div>
                        <div class="button" @click="onBack">返回今天</div>
                    </div>
                </div>
                <ul class="head">
                    <li v-for="head in state.data.heads">{{ head }}</li>
                </ul>
                <ul class="body">
                    <li v-for="week in state.data.weeks">
                        <ol>
                            <li @click="onSelect(day)" v-for="day in week.days"
                                :class="{ today: day.isToday, selected: day.isSelected, other: day.month != state.month, rest: day.isRest, holiday: day.isHoliday }">
                                <div class="inner">
                                    <b>{{ day.day }}</b>
                                    <i>{{ day.desc }}</i>
                                    <u v-if="day.isHoliday">{{ day.isRest ? '休' : '班' }}</u>
                                </div>
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
            <div class="side">
                <div class="ymd">{{ state.selected.ymd }}</div>
                <div class="day">{{ state.selected.day }}</div>
                <div class="lunar">
                    <div>{{ state.selected.lunarMonth }}月 {{ state.selected.lunarDay }}</div>
                    <div>{{ state.selected.yearGanZhi }}年 {{ state.selected.yearShengXiao }}</div>
                    <div>{{ state.selected.monthGanZhi }}月 {{ state.selected.dayGanZhi }}日</div>
                </div>
                <div class="festival" v-for="f in state.selected.festivals">
                    {{ f }}
                </div>
                <div class="yiji">
                    <div class="yi">
                        <b>宜</b>
                        <div v-for="f in state.selected.yi">
                            {{ f }}
                        </div>
                    </div>
                    <div class="ji">
                        <b>忌</b>
                        <div v-for="f in state.selected.ji">
                            {{ f }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.calendar-box {
    width: 562px;
    height: 465px;
    margin-left: auto;
    margin-right: auto;
}

@media screen and (max-width: 600px) {
    .calendar-box {
        width: 562*0.66* 1px;
        height: 465*0.66* 1px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-left: 0;
        margin-right: 0;

        .calendar {
            transform: scale(0.66);
            transform-origin: 0 0;

        }
    }
}

.calendar * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
}

.calendar {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    box-sizing: border-box;
    border: 2px solid var(--vp-c-user-1);
    display: flex;
    width: 562px;
    height: 465px;
    overflow: hidden;
    margin: 0 auto;


    .calendar-container {
        padding-top: 14px;
        text-align: center;

        .bar {
            position: relative;
            display: flex;
            height: 30px;
            padding: 0 10px;
            margin-bottom: 24px;

            div {
                position: relative;
                flex: 1;
            }

            div.button {
                position: absolute;
                right: 0;
                width: 68px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background: #F5F5F6;
                border-radius: 6px;
                color: #333;
                cursor: pointer;
                font-size: 13px;
            }

            input,
            select {
                border: 1px solid #D7D9E0;
                box-sizing: border-box;
                padding: 7px;
                border-radius: 6px;
                line-height: 1;
                cursor: pointer;
                position: relative;
                background: #eee;
                width: 80px;
                margin-right: 6px;
                text-align: center;
                color: #333;
            }

            select {
                appearance: none;
            }

        }

        ul,
        ol {
            list-style: none;
            width: 448px;
        }

        ul.head {
            li {
                float: left;
                width: 64px;
                height: 36px;
                font-size: 13px;
            }
        }

        ul.body {
            ol {
                li {
                    float: left;
                    width: 64px;
                    position: relative;
                    height: 60px;
                    padding: 2px;
                    cursor: pointer;

                    div.inner {
                        padding: 4px;
                        border-radius: 6px;
                        border: 2px solid transparent;

                        b {
                            display: block;
                            font-weight: normal;
                            height: 22px;
                            font-size: 18px;
                            color: var(--vp-c-text-1);
                        }

                        i {
                            display: block;
                            font-style: normal;
                            color: var(--vp-c-text-2);
                            font-size: 12px;
                        }

                        u {
                            position: absolute;
                            text-decoration: none;
                            left: 7px;
                            top: 7px;
                            color: var(--vp-c-text-3);
                            font-size: 12px;
                            line-height: 12px;
                        }
                    }

                }

                li.other {
                    filter: alpha(opacity=40);
                    opacity: 0.4;
                }

                li:hover {
                    div.inner {
                        border: 2px solid #BDBFC8;
                    }
                }

                li.selected {
                    div.inner {
                        border: 2px solid #BDBFC8;
                    }
                }

                li.holiday {
                    div.inner {
                        background: rgba(200, 200, 200, 0.5);
                    }
                }

                li.holiday.rest {
                    div.inner {
                        background: #FDE3E4;

                        i {
                            color: rgba(100, 100, 100, .6);
                        }
                    }
                }

                li.rest {
                    div.inner {
                        b {
                            color: #F73131;
                        }

                        u {
                            color: #F73131;
                        }
                    }
                }

                li.today {
                    div.inner {
                        border: 2px solid var(--vp-c-user-1) !important;
                    }
                }
            }
        }
    }

    .side {
        display: flex;
        flex-direction: column;
        background: var(--vp-c-user-1);
        width: 112px;
        color: #fff;

        .ymd {
            line-height: 45px;
            font-size: 13px;
            text-align: center;
        }

        .day {
            position: relative;
            width: 80px;
            height: 80px;
            margin: 0 auto;
            line-height: 80px;
            font-size: 52px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 12px;
            text-align: center;
        }

        .lunar {
            margin-top: 6px;
            text-align: center;

            div {
                font-size: 13px;
                line-height: 21px;
            }
        }

        .festival {
            position: relative;
            margin-top: 13px;
            padding-left: 22px;
            padding-right: 14px;
            text-align: justify;
            color: #FFF;
            font-size: 12px;
            line-height: 16px;
        }

        .festival::before {
            content: '';
            position: absolute;
            top: 6px;
            left: 16px;
            width: 3px;
            height: 3px;
            background: #fff;
            border-radius: 50%;
        }

        .yiji {
            position: relative;
            width: 100%;
            flex: 1;
            margin-top: 12px;
            padding-top: 12px;
            background: rgba(255, 255, 255, 0.15);
            text-align: center;
            overflow-y: auto;
            padding-bottom: 5px;

            .yi {
                float: left;
                width: 50%;

                div {
                    font-size: 12px;
                    line-height: 20px;
                }
            }

            .ji {
                float: right;
                width: 50%;

                div {
                    font-size: 12px;
                    line-height: 20px;
                }
            }

            b {
                display: block;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                margin: 0 auto;
                font-style: normal;
                font-size: 24px;
                color: #fff;
            }
        }

    }
}
</style>

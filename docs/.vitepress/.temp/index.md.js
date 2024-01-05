var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { useSSRContext, ref, onMounted, nextTick, onUnmounted, mergeProps, toRefs, watch, computed, onBeforeMount, reactive, resolveComponent, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass } from "vue/server-renderer";
import { u as useData } from "./Content.0H3rxZWZ.js";
import { Solar, Lunar, LunarMonth, SolarMonth, HolidayUtil } from "lunar-typescript";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import moment from "moment";
import { v4 } from "uuid";
import "@vueuse/core";
const deg = 6;
const _sfc_main$5 = {
  __name: "Clock",
  __ssrInlineRender: true,
  setup(__props) {
    const hourDiv = ref(null);
    const minDiv = ref(null);
    const secDiv = ref(null);
    const timer = ref(null);
    const nowTime = ref("");
    const nowWeek = ref("");
    const getNowTime = () => {
      let d = Solar.fromDate(/* @__PURE__ */ new Date());
      nowTime.value = d.toYmdHms();
      nowWeek.value = "星期" + d.getWeekInChinese();
    };
    const setClock = () => {
      let day = /* @__PURE__ */ new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;
      hourDiv.value.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      minDiv.value.style.transform = `rotateZ(${mm}deg)`;
      secDiv.value.style.transform = `rotateZ(${ss}deg)`;
    };
    onMounted(() => {
      nextTick(() => {
        setClock();
        getNowTime();
        timer.value = setInterval(() => {
          setClock();
          getNowTime();
        }, 1e3);
      });
    });
    onUnmounted(() => {
      clearInterval(timer.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "clock position-relative" }, _attrs))} data-v-9b8862e8><div class="hour" data-v-9b8862e8></div><div class="min" data-v-9b8862e8></div><div class="sec" data-v-9b8862e8></div><div class="position-absolute left-0 bottom-30 font-10 w-100 align-center" data-v-9b8862e8><p data-v-9b8862e8>${ssrInterpolate(nowTime.value)}</p><p data-v-9b8862e8>${ssrInterpolate(nowWeek.value)}</p></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Clock.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Clock = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-9b8862e8"]]);
const fmt = "YYYY-MM-DD HH:mm:ss";
const _sfc_main$4 = {
  name: "Countdown",
  emits: ["timeElapsed"],
  setup(props, {
    emit
  }) {
    const uuid = v4();
    const {
      deadline,
      stop,
      showDays,
      showHours,
      showMinutes,
      showSeconds,
      labels,
      deadlineDate,
      deadlineISO
    } = toRefs(props);
    let now = ref(Math.trunc((/* @__PURE__ */ new Date()).getTime() / 1e3));
    let date = ref(null);
    let interval = ref(null);
    let diff = ref(0);
    let show = ref(false);
    let timeData = ref([
      {
        current: 0,
        previous: 0,
        label: labels.value.days,
        elementId: "flip-card-days-" + uuid,
        show: showDays.value
      },
      {
        current: 0,
        previous: 0,
        label: labels.value.hours,
        elementId: "flip-card-hours-" + uuid,
        show: showHours.value
      },
      {
        current: 0,
        previous: 0,
        label: labels.value.minutes,
        elementId: "flip-card-minutes-" + uuid,
        show: showMinutes.value
      },
      {
        current: 0,
        previous: 0,
        label: labels.value.seconds,
        elementId: "flip-card-seconds-" + uuid,
        show: showSeconds.value
      }
    ]);
    const updateAllCards = () => {
      updateTime(0, days);
      updateTime(1, hours);
      updateTime(2, minutes);
      updateTime(3, seconds);
    };
    const twoDigits = (value) => {
      if (value != void 0) {
        if (value.toString().length <= 1) {
          return "0" + value.toString();
        }
        return value.toString();
      } else {
        return "00";
      }
    };
    const updateTime = (idx, newValue) => {
      if (idx >= timeData.value.length || newValue === void 0) {
        return;
      }
      const d = timeData.value[idx];
      const val = newValue.value < 0 ? 0 : newValue.value;
      const el = document.querySelector(`#${d.elementId}`);
      if (val !== d.current) {
        d.previous = d.current;
        d.current = val;
        if (el) {
          el.classList.remove("flip");
          void el.offsetWidth;
          el.classList.add("flip");
        }
        if (idx === 0) {
          const els = el == null ? void 0 : el.querySelectorAll("span b");
          if (els) {
            for (let e of els) {
              const cls = e.classList[0];
              if (newValue.value / 1e3 >= 1) {
                if (!cls.includes("-4digits")) {
                  const newCls = cls + "-4digits";
                  e.classList.add(newCls);
                  e.classList.remove(cls);
                }
              } else {
                if (cls.includes("-4digits")) {
                  const newCls = cls.replace("-4digits", "");
                  e.classList.add(newCls);
                  e.classList.remove(cls);
                }
              }
            }
          }
        }
      }
    };
    watch(deadline, (newVal) => {
      const endTime = newVal;
      date.value = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1e3);
      if (!date.value) {
        throw new Error("Invalid props value, correct the 'deadline'");
      }
    });
    watch(now, () => {
      diff.value = date.value - now.value;
      if (diff.value <= 0 || stop.value) {
        diff.value = 0;
        updateTime(3, 0);
      } else {
        updateAllCards();
      }
    });
    watch(diff, (newVal) => {
      if (newVal == 0) {
        emit("timeElapsed");
        updateAllCards();
      }
    });
    let seconds = computed(() => {
      return Math.trunc(diff.value) % 60;
    });
    let minutes = computed(() => {
      return Math.trunc(diff.value / 60) % 60;
    });
    let hours = computed(() => {
      return Math.trunc(diff.value / 60 / 60) % 24;
    });
    let days = computed(() => {
      return Math.trunc(diff.value / 60 / 60 / 24);
    });
    onMounted(() => {
      if (diff.value !== 0) {
        show.value = true;
      }
    });
    onBeforeMount(() => {
      if (!deadline.value) {
        throw new Error("Missing props 'deadline'");
      }
      const endTime = deadline.value;
      let epoch = Date.parse(endTime.replace(/-/g, "/"));
      if (deadlineDate.value != null) {
        epoch = Date.parse(deadlineDate.value);
      }
      if (deadlineISO.value) {
        epoch = Date.parse(deadlineISO.value);
      }
      date.value = Math.trunc(epoch / 1e3);
      if (!date.value) {
        throw new Error("Invalid props value, correct the 'deadline'");
      }
      interval.value = setInterval(() => {
        now.value = Math.trunc((/* @__PURE__ */ new Date()).getTime() / 1e3);
      }, 1e3);
    });
    onUnmounted(() => {
      clearInterval(interval.value);
    });
    return {
      now,
      date,
      interval,
      diff,
      show,
      timeData,
      twoDigits,
      emit
    };
  },
  props: {
    deadline: {
      type: String,
      required: false,
      default: moment().add(32, "d").add(10, "s").format(fmt)
    },
    deadlineISO: {
      type: String,
      required: false
    },
    deadlineDate: {
      type: Date,
      required: false
    },
    countdownSize: {
      type: String,
      required: false
      // default:"2.2rem"
    },
    labelSize: {
      type: String,
      required: false
      // default:"2.2rem"
    },
    stop: {
      type: Boolean,
      required: false
    },
    flipAnimation: {
      type: Boolean,
      required: false,
      default: true
    },
    showDays: {
      type: Boolean,
      required: false,
      default: true
    },
    showHours: {
      type: Boolean,
      required: false,
      default: true
    },
    showMinutes: {
      type: Boolean,
      required: false,
      default: true
    },
    showSeconds: {
      type: Boolean,
      required: false,
      default: true
    },
    showLabels: {
      type: Boolean,
      required: false,
      default: true
    },
    labels: {
      type: Object,
      required: false,
      default: function() {
        return {
          days: "Days",
          hours: "Hours",
          minutes: "Minutes",
          seconds: "Seconds"
        };
      }
    },
    mainColor: {
      type: String,
      default: "#EC685C"
    },
    secondFlipColor: {
      type: String,
      default: (props) => props.mainColor
    },
    mainFlipBackgroundColor: {
      type: String,
      default: "#222222"
    },
    secondFlipBackgroundColor: {
      type: String,
      default: "#393939"
    },
    labelColor: {
      type: String,
      default: "#222222"
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _cssVars = { style: {
    "--3805755a": $props.mainColor,
    "--37ad9dc6": $props.labelColor,
    "--03771898": $props.mainFlipBackgroundColor,
    "--ab12136a": $props.secondFlipColor,
    "--4c4a3bbd": $props.secondFlipBackgroundColor
  } };
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flip-clock" }, _attrs, _cssVars))} data-v-745c6172><!--[-->`);
  ssrRenderList($setup.timeData, (data) => {
    _push(`<span class="flip-clock__piece"${ssrRenderAttr("id", data.elementId)} style="${ssrRenderStyle(data.show ? null : { display: "none" })}" data-v-745c6172>`);
    if ($props.flipAnimation) {
      _push(`<div data-v-745c6172><span class="flip-clock__card flip-card" style="${ssrRenderStyle($props.countdownSize ? `font-size:${$props.countdownSize}` : "")}" data-v-745c6172><b class="flip-card__top" data-v-745c6172>${ssrInterpolate($setup.twoDigits(data.current))}</b><b class="flip-card__bottom"${ssrRenderAttr("data-value", $setup.twoDigits(data.current))} data-v-745c6172></b><b class="flip-card__back"${ssrRenderAttr("data-value", $setup.twoDigits(data.previous))} data-v-745c6172></b><b class="flip-card__back-bottom"${ssrRenderAttr("data-value", $setup.twoDigits(data.previous))} data-v-745c6172></b></span></div>`);
    } else {
      _push(`<div data-v-745c6172><span class="no-animation__card" data-v-745c6172>${ssrInterpolate($setup.twoDigits(data.current))}</span></div>`);
    }
    if ($props.showLabels) {
      _push(`<span class="flip-clock__slot" style="${ssrRenderStyle($props.labelSize ? `font-size:${$props.labelSize}` : "")}" data-v-745c6172>${ssrInterpolate(data.label)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</span>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Countdown.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Countdown = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-745c6172"]]);
const _sfc_main$3 = {
  __name: "DateTimeCount",
  __ssrInlineRender: true,
  setup(__props) {
    const nextYear = ref((/* @__PURE__ */ new Date()).getFullYear() + 1);
    const nextYearLunar = ref("");
    const curTime = ref("");
    const newYear = ref(Solar.fromDate(/* @__PURE__ */ new Date()).toYmdHms());
    const springDay = ref(Solar.fromDate(/* @__PURE__ */ new Date()).toYmdHms());
    function getCurTime() {
      let d = Solar.fromDate(/* @__PURE__ */ new Date());
      var formattedDate = d.getYear() + "-" + padZero(d.getMonth() + 1) + "-" + padZero(d.getDay()) + " 00:00:00";
      return formattedDate;
    }
    function getNextYearNewYearDate() {
      var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      var nextYearNewYearDate = new Date(currentYear + 1, 0, 1);
      var formattedDate = nextYearNewYearDate.getFullYear() + "-" + padZero(nextYearNewYearDate.getMonth() + 1) + "-" + padZero(nextYearNewYearDate.getDate()) + " 00:00:00";
      return formattedDate;
    }
    function getNextYearSpringFestivalDate() {
      var d = Lunar.fromDate(/* @__PURE__ */ new Date());
      nextYearLunar.value = d.getYear() + 1;
      var lunarMonth = LunarMonth.fromYm(nextYearLunar.value, 1);
      var firstJulianDay = lunarMonth.getFirstJulianDay();
      var solar = Solar.fromJulianDay(firstJulianDay);
      return solar.toYmd() + " 00:00:00";
    }
    function padZero(num) {
      return num < 10 ? "0" + num : num;
    }
    onMounted(() => {
      curTime.value = getCurTime();
      newYear.value = getNextYearNewYearDate();
      springDay.value = getNextYearSpringFestivalDate();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pdb-10 pdt-10" }, _attrs))}><div class="align-center pdb-12 font-22 font-bold">距离${ssrInterpolate(nextYear.value)}年元旦还有</div>`);
      if (newYear.value) {
        _push(ssrRenderComponent(Countdown, { deadline: newYear.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="align-center pdb-12 font-22 font-bold mgt-10">距离${ssrInterpolate(nextYearLunar.value)}年春节还有</div>`);
      if (springDay.value) {
        _push(ssrRenderComponent(Countdown, { deadline: springDay.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="h-20px"></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DateTimeCount.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Calendar",
  __ssrInlineRender: true,
  setup(__props) {
    const now = Solar.fromDate(/* @__PURE__ */ new Date());
    class Day {
      constructor() {
        __publicField(this, "month", 0);
        __publicField(this, "day", 0);
        __publicField(this, "lunarDay", "");
        __publicField(this, "lunarMonth", "");
        __publicField(this, "yearGanZhi", "");
        __publicField(this, "yearShengXiao", "");
        __publicField(this, "monthGanZhi", "");
        __publicField(this, "dayGanZhi", "");
        __publicField(this, "ymd", "");
        __publicField(this, "desc", "");
        __publicField(this, "isToday", false);
        __publicField(this, "isSelected", false);
        __publicField(this, "isRest", false);
        __publicField(this, "isHoliday", false);
        __publicField(this, "festivals", []);
        __publicField(this, "yi", []);
        __publicField(this, "ji", []);
      }
    }
    class Week {
      constructor() {
        __publicField(this, "days", []);
      }
    }
    class Month {
      constructor() {
        __publicField(this, "heads", []);
        __publicField(this, "weeks", []);
      }
    }
    class Holiday {
      constructor() {
        __publicField(this, "name", "");
        __publicField(this, "month", 0);
      }
    }
    const state = reactive({
      year: now.getYear(),
      month: now.getMonth(),
      weekStart: 1,
      selected: new Day(),
      data: new Month(),
      holidays: new Array(),
      holidayMonth: 0
    });
    function buildDay(d) {
      const ymd = d.toYmd();
      const lunar = d.getLunar();
      const day = new Day();
      day.month = d.getMonth();
      day.day = d.getDay();
      day.lunarMonth = lunar.getMonthInChinese();
      day.lunarDay = lunar.getDayInChinese();
      day.yearGanZhi = lunar.getYearInGanZhi();
      day.yearShengXiao = lunar.getYearShengXiao();
      day.monthGanZhi = lunar.getMonthInGanZhi();
      day.dayGanZhi = lunar.getDayInGanZhi();
      day.ymd = ymd;
      day.isToday = ymd == now.toYmd();
      day.isSelected = ymd == state.selected.ymd;
      if (day.isToday && state.selected.day === 0) {
        state.selected = day;
      }
      const solarFestivals = d.getFestivals();
      solarFestivals.forEach((f) => {
        day.festivals.push(f);
      });
      d.getOtherFestivals().forEach((f) => {
        day.festivals.push(f);
      });
      lunar.getFestivals().forEach((f) => {
        day.festivals.push(f);
      });
      lunar.getOtherFestivals().forEach((f) => {
        day.festivals.push(f);
      });
      let rest = false;
      if (d.getWeek() === 6 || d.getWeek() === 0) {
        rest = true;
      }
      const holiday = HolidayUtil.getHoliday(ymd);
      if (holiday) {
        rest = !holiday.isWork();
      }
      day.isHoliday = !!holiday;
      day.isRest = rest;
      day.yi = lunar.getDayYi();
      day.ji = lunar.getDayJi();
      let desc = lunar.getDayInChinese();
      const jq = lunar.getJieQi();
      if (jq) {
        desc = jq;
      } else if (lunar.getDay() === 1) {
        desc = lunar.getMonthInChinese() + "月";
      } else if (solarFestivals.length > 0) {
        const f = solarFestivals[0];
        if (f.length < 4) {
          desc = f;
        }
      }
      day.desc = desc;
      return day;
    }
    function render() {
      const month = new Month();
      const weeks = [];
      const solarWeeks = SolarMonth.fromYm(parseInt(state.year + "", 10), parseInt(state.month + "", 10)).getWeeks(state.weekStart);
      solarWeeks.forEach((w) => {
        weeks.push(w);
      });
      while (weeks.length < 6) {
        weeks.push(weeks[weeks.length - 1].next(1, false));
      }
      weeks.forEach((w) => {
        const week = new Week();
        const heads = [];
        w.getDays().forEach((d) => {
          heads.push(d.getWeekInChinese());
          week.days.push(buildDay(d));
        });
        month.heads = heads;
        month.weeks.push(week);
      });
      state.data = month;
      const holidays = [];
      HolidayUtil.getHolidays(state.year).forEach((h) => {
        const holiday = new Holiday();
        holiday.name = h.getName();
        holiday.month = parseInt(h.getTarget().substring(5, 7), 10);
        const exists = holidays.some((a) => {
          return a.name == holiday.name;
        });
        if (!exists) {
          holidays.push(holiday);
        }
      });
      state.holidays = holidays;
    }
    onMounted(() => {
      nextTick(() => {
        render();
      });
    });
    watch(() => state.year, () => {
      render();
    });
    watch(() => state.month, () => {
      render();
    });
    watch(() => state.selected, () => {
      render();
    });
    watch(() => state.holidayMonth, (newVal) => {
      const month = parseInt(newVal + "", 10);
      if (month > 0) {
        state.month = month;
        render();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "calendar-box" }, _attrs))} data-v-bc6d1ec7><div class="calendar" data-v-bc6d1ec7><div class="calendar-container" data-v-bc6d1ec7><div class="bar" data-v-bc6d1ec7><div data-v-bc6d1ec7><input${ssrRenderAttr("value", state.year)} data-v-bc6d1ec7>年 </div><div data-v-bc6d1ec7><select data-v-bc6d1ec7><!--[-->`);
      ssrRenderList(12, (i) => {
        _push(`<option${ssrRenderAttr("value", i)} data-v-bc6d1ec7>${ssrInterpolate(i)}月</option>`);
      });
      _push(`<!--]--></select></div><div data-v-bc6d1ec7><select data-v-bc6d1ec7><option value="0" data-v-bc6d1ec7${ssrIncludeBooleanAttr(Array.isArray(state.holidayMonth) ? ssrLooseContain(state.holidayMonth, "0") : ssrLooseEqual(state.holidayMonth, "0")) ? " selected" : ""}>假期安排</option><!--[-->`);
      ssrRenderList(state.holidays, (h) => {
        _push(`<option${ssrRenderAttr("value", h.month)} data-v-bc6d1ec7>${ssrInterpolate(h.name)}</option>`);
      });
      _push(`<!--]--></select></div><div data-v-bc6d1ec7><div class="button" data-v-bc6d1ec7>返回今天</div></div></div><ul class="head" data-v-bc6d1ec7><!--[-->`);
      ssrRenderList(state.data.heads, (head) => {
        _push(`<li data-v-bc6d1ec7>${ssrInterpolate(head)}</li>`);
      });
      _push(`<!--]--></ul><ul class="body" data-v-bc6d1ec7><!--[-->`);
      ssrRenderList(state.data.weeks, (week) => {
        _push(`<li data-v-bc6d1ec7><ol data-v-bc6d1ec7><!--[-->`);
        ssrRenderList(week.days, (day) => {
          _push(`<li class="${ssrRenderClass({ today: day.isToday, selected: day.isSelected, other: day.month != state.month, rest: day.isRest, holiday: day.isHoliday })}" data-v-bc6d1ec7><div class="inner" data-v-bc6d1ec7><b data-v-bc6d1ec7>${ssrInterpolate(day.day)}</b><i data-v-bc6d1ec7>${ssrInterpolate(day.desc)}</i>`);
          if (day.isHoliday) {
            _push(`<u data-v-bc6d1ec7>${ssrInterpolate(day.isRest ? "休" : "班")}</u>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></li>`);
        });
        _push(`<!--]--></ol></li>`);
      });
      _push(`<!--]--></ul></div><div class="side" data-v-bc6d1ec7><div class="ymd" data-v-bc6d1ec7>${ssrInterpolate(state.selected.ymd)}</div><div class="day" data-v-bc6d1ec7>${ssrInterpolate(state.selected.day)}</div><div class="lunar" data-v-bc6d1ec7><div data-v-bc6d1ec7>${ssrInterpolate(state.selected.lunarMonth)}月 ${ssrInterpolate(state.selected.lunarDay)}</div><div data-v-bc6d1ec7>${ssrInterpolate(state.selected.yearGanZhi)}年 ${ssrInterpolate(state.selected.yearShengXiao)}</div><div data-v-bc6d1ec7>${ssrInterpolate(state.selected.monthGanZhi)}月 ${ssrInterpolate(state.selected.dayGanZhi)}日</div></div><!--[-->`);
      ssrRenderList(state.selected.festivals, (f) => {
        _push(`<div class="festival" data-v-bc6d1ec7>${ssrInterpolate(f)}</div>`);
      });
      _push(`<!--]--><div class="yiji" data-v-bc6d1ec7><div class="yi" data-v-bc6d1ec7><b data-v-bc6d1ec7>宜</b><!--[-->`);
      ssrRenderList(state.selected.yi, (f) => {
        _push(`<div data-v-bc6d1ec7>${ssrInterpolate(f)}</div>`);
      });
      _push(`<!--]--></div><div class="ji" data-v-bc6d1ec7><b data-v-bc6d1ec7>忌</b><!--[-->`);
      ssrRenderList(state.selected.ji, (f) => {
        _push(`<div data-v-bc6d1ec7>${ssrInterpolate(f)}</div>`);
      });
      _push(`<!--]--></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Calendar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bc6d1ec7"]]);
const html5 = "/flag/html5.svg";
const css3 = "/flag/css3.svg";
const javascript = "/flag/javascript.svg";
const vue = "/flag/vue.svg";
const react = "/flag/react.svg";
const angular = "/flag/angular.svg";
const es6 = "/flag/es6.svg";
const typescript = "/flag/typescript.svg";
const vite = "/flag/vite.svg";
const sass = "/flag/sass.svg";
const less = "/flag/less.svg";
const webpack = "/flag/webpack.svg";
const jquery = "/flag/jquery.svg";
const dart = "/flag/dart.svg";
const flutter = "/flag/flutter.svg";
const nodejs = "/flag/nodejs.svg";
const _sfc_main$1 = {
  __name: "Particle",
  __ssrInlineRender: true,
  setup(__props) {
    const imgs = [{
      name: "html5",
      src: html5,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "css3",
      src: css3,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "javascript",
      src: javascript,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "vue",
      src: vue,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "react",
      src: react,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "angular",
      src: angular,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "es6",
      src: es6,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "typescript",
      src: typescript,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "vite",
      src: vite,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "sass",
      src: sass,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "less",
      src: less,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "webpack",
      src: webpack,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "jquery",
      src: jquery,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "dart",
      src: dart,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "flutter",
      src: flutter,
      gif: false,
      height: 32,
      width: 32
    }, {
      name: "nodejs",
      src: nodejs,
      gif: false,
      height: 32,
      width: 32
    }];
    const imgNames = imgs.map((item) => {
      let obj = {
        name: item.name
      };
      return obj;
    });
    const options = ref({
      autoPlay: true,
      background: {
        color: {
          value: "rgba(0,0,0,0.1)"
        },
        image: "",
        position: "",
        repeat: "",
        size: "",
        opacity: 1
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          color: {
            value: "rgba(0,0,0,0.1)"
          },
          opacity: 1
        },
        enable: false
      },
      clear: true,
      defaultThemes: {},
      delay: 0,
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push"
          },
          onDiv: {
            selectors: [],
            enable: false,
            mode: [],
            type: "circle"
          },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10
            }
          },
          resize: {
            delay: 0.5,
            enable: true
          }
        },
        modes: {
          trail: {
            delay: 1,
            pauseOnStop: false,
            quantity: 1
          },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1
          },
          bounce: {
            distance: 200
          },
          bubble: {
            distance: 400,
            duration: 2,
            mix: false,
            opacity: 0.8,
            size: 32,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: []
            }
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.5
            },
            radius: 60
          },
          grab: {
            distance: 100,
            links: {
              blink: false,
              consent: false,
              opacity: 1
            }
          },
          push: {
            default: true,
            groups: [],
            quantity: 4
          },
          remove: {
            quantity: 2
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              selectors: []
            }
          },
          slow: {
            factor: 3,
            radius: 200
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: "#ffffff"
                },
                stop: {
                  value: "#000000"
                }
              },
              radius: 1e3
            },
            shadow: {
              color: {
                value: "#000000"
              },
              length: 2e3
            }
          }
        }
      },
      manualParticles: [],
      particles: {
        bounce: {
          horizontal: {
            value: 1
          },
          vertical: {
            value: 1
          }
        },
        collisions: {
          absorb: {
            speed: 2
          },
          bounce: {
            horizontal: {
              value: 1
            },
            vertical: {
              value: 1
            }
          },
          enable: false,
          maxSpeed: 50,
          mode: "bounce",
          overlap: {
            enable: true,
            retries: 0
          }
        },
        color: {
          value: "#ffffff",
          animation: {
            h: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            },
            s: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            },
            l: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            }
          }
        },
        effect: {
          close: true,
          fill: true,
          options: {},
          type: []
        },
        groups: {},
        move: {
          angle: {
            offset: 0,
            value: 90
          },
          attract: {
            distance: 200,
            enable: false,
            rotate: {
              x: 3e3,
              y: 3e3
            }
          },
          center: {
            x: 50,
            y: 50,
            mode: "percent",
            radius: 0
          },
          decay: 0,
          distance: {},
          direction: "none",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50
          },
          path: {
            clamp: true,
            delay: {
              value: 0
            },
            enable: false,
            options: {}
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out"
          },
          random: false,
          size: false,
          speed: 2,
          spin: {
            acceleration: 0,
            enable: false
          },
          straight: false,
          trail: {
            enable: false,
            length: 10,
            fill: {}
          },
          vibrate: false,
          warp: false
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080
          },
          limit: {
            mode: "delete",
            value: 160
          },
          value: 80
        },
        opacity: {
          value: 1,
          animation: {
            count: 0,
            enable: false,
            speed: 2,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none"
          }
        },
        reduceDuplicates: false,
        shadow: {
          blur: 0,
          color: {
            value: "#000"
          },
          enable: false,
          offset: {
            x: 0,
            y: 0
          }
        },
        shape: {
          close: true,
          fill: true,
          options: {
            image: imgNames
          },
          type: "image"
        },
        size: {
          value: 16,
          animation: {
            count: 0,
            enable: false,
            speed: 5,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none"
          }
        },
        stroke: {
          width: 0
        },
        zIndex: {
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1
        },
        destroy: {
          bounds: {},
          mode: "none",
          split: {
            count: 1,
            factor: {
              value: 3
            },
            rate: {
              value: {
                min: 4,
                max: 9
              }
            },
            sizeOffset: true,
            particles: {}
          }
        },
        roll: {
          darken: {
            enable: false,
            value: 0
          },
          enable: false,
          enlighten: {
            enable: false,
            value: 0
          },
          mode: "vertical",
          speed: 25
        },
        tilt: {
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false
          },
          direction: "clockwise",
          enable: false
        },
        twinkle: {
          lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1
          },
          particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1
          }
        },
        wobble: {
          distance: 5,
          enable: false,
          speed: {
            angle: 50,
            move: 10
          }
        },
        life: {
          count: 0,
          delay: {
            value: 0,
            sync: false
          },
          duration: {
            value: 0,
            sync: false
          }
        },
        rotate: {
          value: {
            min: 0,
            max: 360
          },
          animation: {
            enable: true,
            speed: 5,
            decay: 0,
            sync: false
          },
          direction: "random",
          path: false
        },
        orbit: {
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false
          },
          enable: false,
          opacity: 1,
          rotation: {
            value: 45
          },
          width: 1
        },
        links: {
          blink: false,
          color: {
            value: "#fff"
          },
          consent: false,
          distance: 100,
          enable: false,
          frequency: 1,
          opacity: 1,
          shadow: {
            blur: 5,
            color: {
              value: "#000"
            },
            enable: false
          },
          triangles: {
            enable: false,
            frequency: 1
          },
          width: 1,
          warp: false
        },
        repulse: {
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1
        }
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      responsive: [],
      smooth: false,
      style: {},
      themes: [],
      zLayers: 100,
      name: "Images",
      preload: imgs,
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_vue_particles = resolveComponent("vue-particles");
      _push(ssrRenderComponent(_component_vue_particles, mergeProps({
        id: "tsparticles",
        options: options.value
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Particle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"","description":"前端，文档，博客","frontmatter":{"layout":"home","head":[["meta",{"name":"description","content":"前端，文档，博客"}],["meta",{"name":"keywords","content":"前端，文档，博客"}]]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    useData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_row = resolveComponent("el-row");
      const _component_el_col = resolveComponent("el-col");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container-main"><div class="sign"><div class="font-bold font-80 line-height-1">HONG YANG WU</div><div class="font-26 mgt-10">代码如诗，世界如画。莫失心所念，万物皆可期。</div></div>`);
      _push(ssrRenderComponent(_component_el_row, {
        gutter: 20,
        class: "mgt-36"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, {
              xs: 24,
              sm: 24,
              md: 24,
              lg: 12,
              xl: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Clock, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Clock),
                    createVNode(_sfc_main$3)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_col, {
              xs: 24,
              sm: 24,
              md: 24,
              lg: 12,
              xl: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Calendar, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Calendar)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_col, {
                xs: 24,
                sm: 24,
                md: 24,
                lg: 12,
                xl: 12
              }, {
                default: withCtx(() => [
                  createVNode(Clock),
                  createVNode(_sfc_main$3)
                ]),
                _: 1
              }),
              createVNode(_component_el_col, {
                xs: 24,
                sm: 24,
                md: 24,
                lg: 12,
                xl: 12
              }, {
                default: withCtx(() => [
                  createVNode(Calendar)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};

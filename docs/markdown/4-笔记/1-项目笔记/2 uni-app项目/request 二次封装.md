# request 二次封装

http.js

```js
import config from "./config.js"
const http = {
  apiUrl: process.env.NODE_ENV == "production" ? config.apiUrlProd : config.apiUrlDev,
  wsUrl: process.env.NODE_ENV == "production" ? config.wsUrlProd : config.wsUrlDev,
  imgUrl: process.env.NODE_ENV == "production" ? config.imgUrlProd : config.imgUrlDev,
  interceptor: {
    request: config => {
      return config
    },
    response: response => {
      let {statusCode, errMsg, data} = response
      if (statusCode !== 200) {
        console.log(errMsg)
      }
      return data
    },
  },
  request(options) {
    let header = {}
    console.log(process.env)
    if (options.url && options.url.indexOf("http") == -1) {
      options.url = this.apiUrl + options.url
    }
    options.method = options.method || "GET"
    options.data = options.data || {}
    options.header = options.header || header
    options.loading = !options.loading ? false : true
    options.requestTime = options.requestTime || 500
    options.dataType = options.dataType || "json"
    let loadingStatus = true
    if (loadingStatus && options.loading) {
      uni.showLoading({
        // title: "加载中",
        mask: true,
      })
    }
    return new Promise((resolve, reject) => {
      if (!this.interceptor.request(options)) {
        return
      }
      //请求接口日志记录
      _reqlog(options)
      uni.request({
        url: options.url,
        method: options.method,
        data: options.data,
        header: options.header,
        dataType: options.dataType,
        success: response => {
          let statusCode = response.statusCode
          let res = this.interceptor.response(response)
          if (statusCode == 200) {
            //接口响应日志
            _reslog(res)
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail(error) {
          console.log(error)
        },
        complete() {
          if (loadingStatus && options.loading) {
            uni.hideLoading()
          }
          loadingStatus = false
        },
      })
    })
  },
  get(url, data, options) {
    if (!options) options = {}
    options.url = url
    options.data = data
    options.method = "GET"
    return this.request(options)
  },
  post(url, data, options) {
    if (!options) options = {}
    options.url = url
    options.data = data
    options.header = options.header || {
      "content-type": "application/json;charset=UTF-8",
    }
    options.method = "POST"
    return this.request(options)
  },
  postForm(url, data) {
    return this.post(url, data, {
      header: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    })
  },
}

/**
 * 请求接口日志记录
 */
const _reqlog = req => {
  if (process.env.NODE_ENV === "development") {
    console.log("请求地址：" + req.url)
    if (req.data) {
      console.log("请求参数：" + JSON.stringify(req.data))
    }
  }
}
/**
 * 响应接口日志记录
 */
const _reslog = res => {
  let _statusCode = res.code
  if (process.env.NODE_ENV === "development") {
    console.log("响应结果：" + JSON.stringify(res))
  }
}

export default http
```

main.js

```jsx
import App from "./App"

import store from "./store"
import Pub from "./utils/index.js"
import $http from "./utils/http.js"

// #ifndef VUE3
import Vue from "vue"
import "./uni.promisify.adaptor"
Vue.config.productionTip = false
App.mpType = "app"
const app = new Vue({
  ...App,
})
app.$mount()
// #endif

// #ifdef VUE3

import {createSSRApp} from "vue"
import uView from "./uni_modules/vk-uview-ui"
export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.Pub = Pub
  app.config.globalProperties.$http = $http
  app.use(uView)
  app.use(store)
  return {
    app,
  }
}
// #endif
```

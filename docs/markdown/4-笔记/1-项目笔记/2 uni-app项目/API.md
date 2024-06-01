# API

index.js

```jsx
import http from './http.js'
import apis from './apis.js'
const apiFuns = {}
apis.forEach(item => {
  let obj = {}
  switch (item.method) {
    case 'get':
      obj[item.name] = params => {
        return http.get(item.url, params, {
          loading: item.loading || false,
        })
      }
      break
    case 'post':
      obj[item.name] = params => {
        return http.post(item.url, params, {
          loading: item.loading || false,
        })
      }
      break
    case 'postFile':
      obj[item.name] = (file, params) => {
        return http.postFile(file, params, item.url)
      }
      break
    default:
      obj[item.name] = params => {
        return http.get(item.url, params, {
          loading: item.loading || false,
        })
      }
      break
  }
  Object.assign(apiFuns, obj)
})
console.log(apiFuns)

export default apiFuns
```

apis.js

```jsx
const apis = [
  {
    name: 'init',
    url: '/common/init',
    method: 'get',
  },
  {
    name: 'login',
    url: '/user/login',
    method: 'post',
    loading: true,
  },
  {
    name: 'register',
    url: '/user/register',
    method: 'post',
    loading: true,
  },
  {
    name: 'creationOrder',
    url: '/order/creation',
    method: 'post',
    loading: true,
  },
  {
    name: 'orderToday',
    url: '/order/today',
    method: 'get',
  },
  {
    name: 'news',
    url: '/news/index',
    method: 'get',
  },
  {
    name: 'orderStatistics',
    url: '/order/statistics',
    method: 'get',
  },
  {
    name: 'orderList',
    url: '/order/orderList',
    method: 'get',
  },
  {
    name: 'userInfo',
    url: '/user/index',
    method: 'get',
  },
  {
    name: 'userOut',
    url: '/user/logout',
    method: 'get',
  },
  {
    name: 'orderitem',
    url: '/order/item',
    method: 'get',
  },
  {
    name: 'orderpay',
    url: '/order/pay',
    method: 'post',
    loading: true,
  },
  {
    name: 'payInfo',
    url: '/order/payInfo',
    method: 'get',
  },
  {
    name: 'newsList',
    url: '/news/index',
    method: 'get',
  },
  {
    name: 'newsroll',
    url: '/news/roll',
    method: 'get',
  },
  {
    name: 'userindex',
    url: '/user/index',
    method: 'get',
  },
  {
    name: 'dclist',
    url: '/capital/dclist',
    method: 'get',
  },
  {
    name: 'deposit',
    url: '/capital/deposit',
    method: 'post',
    loading: true,
  },
  {
    name: 'paylist',
    url: '/capital/paylist',
    method: 'get',
  },
  {
    name: 'recharge',
    url: '/capital/recharge',
    method: 'post',
    loading: true,
  },
  {
    name: 'depositOrder',
    url: '/capital/depositOrder',
    method: 'get',
  },
  {
    name: 'rechargeOrder',
    url: '/capital/rechargeOrder',
    method: 'get',
  },
  {
    name: 'teamTotal',
    url: '/invite/teamTotal',
    method: 'get',
  },
  {
    name: 'poster',
    url: '/invite/poster',
    method: 'get',
  },
  {
    name: 'capitalrecord',
    url: '/capital/record',
    method: 'get',
  },
  {
    name: 'resetpwd',
    url: '/user/resetpwd',
    method: 'post',
    loading: true,
  },
  {
    name: 'bonusout',
    url: '/user/bonusout',
    method: 'post',
    loading: true,
  },
  {
    name: 'service',
    url: '/service/index',
    method: 'get',
  },
  {
    name: 'pictureCode',
    url: '/common/pictureCode',
    method: 'get',
  },
  {
    name: 'collection',
    url: '/order/collection',
    method: 'get',
  },
  {
    name: 'nft',
    url: '/order/nft',
    method: 'get',
  },
]

console.log('api数量', apis.length)

export default apis
```

http.js

```js
import config from '../config/index.js'
import Pub from '../utils/index.js'
import store from '../store/index.js'
import sign from '../utils/sign.js'

import i18n from '@/locales/i18n.js'
const lang = i18n.global

const http = {
  interceptor: {
    request: config => {
      return config
    },
    response: response => {
      console.log(response)
      let {statusCode, errMsg, data} = response
      if (statusCode !== 200) {
        console.log(errMsg)
        return response
      }
      if (typeof data == 'string') {
        data = JSON.parse(data)
      }
      return data
    },
  },
  request(options) {
    if (options.url && options.url.indexOf('http') == -1) {
      options.url = config.apiUrl + config.apiRoot + options.url
    }
    let header = {
      // "content-type": "application/json",
      'content-type': 'application/x-www-form-urlencoded',
      // "token": store.state.token,
      // "lang": store.state.lang,
    }
    options.method = options.method || 'GET'
    options.data = options.data || {}
    options.data.lastsession = store.state.token
    options.header = {
      ...options.header,
      ...header,
    }
    options.loading = !options.loading ? false : true
    options.requestTime = options.requestTime || 500
    options.dataType = options.dataType || 'json'
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
            if (res.status != 1 && res.status != -1) {
              Pub.msg(res.msg)
            }
            if (res.status == -1) {
              uni.redirectTo({
                url: '/pages/startup/startup',
              })
            }
            //接口响应日志
            _reslog(res)
            resolve(res)
          }
        },
        fail(error) {
          Pub.msg(lang.t('Network_error'))
          console.log(error)
          resolve({})
        },
        complete(cpt) {
          if (loadingStatus && options.loading) {
            uni.hideLoading()
          }
          loadingStatus = false
          if (cpt.statusCode == 401) {
            Pub.setStore('rmStore')
            Pub.msg(cpt.data.msg).then(() => {
              Pub.toLogin()
            })
          } else if (cpt.statusCode == 818) {
            resolve(cpt.data)
          }
        },
      })
    })
  },
  get(url, data, options) {
    if (!options) options = {}
    options.url = url
    options.data = data
    options.method = 'GET'
    return this.request(options)
  },
  delete(url, data, options) {
    if (!options) options = {}
    options.url = url
    options.data = data
    options.method = 'DELETE'
    return this.request(options)
  },
  put(url, data, options) {
    if (!options) options = {}
    options.url = url
    options.data = data
    options.method = 'PUT'
    return this.request(options)
  },
  post(url, data, options) {
    if (!options) options = {}
    options.url = url
    options.data = data
    options.header = options.header || {
      'content-type': 'application/json;charset=UTF-8',
    }
    options.method = 'POST'
    return this.request(options)
  },
  postForm(url, data) {
    return this.post(url, data, {
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    })
  },
  postFile(file, params, url) {
    let _this = this
    uni.showLoading({
      // title: "加载中",
      mask: true,
    })
    let header = {
      // "Content-Type": "multipart/form-data",
      // "Authorization": "bearer " + store.state.token,
    }
    let fileParams = {}
    // #ifdef H5
    fileParams = {
      file: file,
    }
    // #endif
    // #ifndef H5
    fileParams = {
      filePath: file,
    }
    // #endif
    let data = params || {}
    data.lastsession = store.state.token
    return new Promise((resolve, reject) => {
      uni.uploadFile({
        url: `${config.apiUrl}${config.apiRoot}${url}`, //上传 // 后端上传接口地址
        // filePath: res2, // 需要上传的文件本地路径
        name: data.fileName || 'file', // 后端接收的文件字段名
        ...fileParams,
        header: {
          ...header,
        },
        formData: data,
        success: function (response) {
          console.log(response)
          let statusCode = response.statusCode
          let res = _this.interceptor.response(response)
          if (statusCode == 200) {
            if (res.code != 1) {
              Pub.msg(res.msg)
            }
            //接口响应日志
            _reslog(res)
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail: function (err) {
          console.log('upload failed', err)
          Pub.msg('上传失败,请重试')
          // reject(err);
        },
        complete: function (cpt) {
          uni.hideLoading()
          if (cpt.statusCode == 401) {
            Pub.setStore('rmStore')
            Pub.msg(cpt.data?.msg).then(() => {
              Pub.toLogin()
            })
          }
        },
      })
    })
  },
}

/**
 * 请求接口日志记录
 */
const _reqlog = req => {
  if (process.env.NODE_ENV === 'development') {
    console.log('请求地址：' + req.url)
    if (req.data) {
      console.log('请求参数：' + JSON.stringify(req.data))
    }
  }
}
/**
 * 响应接口日志记录
 */
const _reslog = res => {
  let _statusCode = res.code
  if (process.env.NODE_ENV === 'development') {
    console.log('响应结果：' + JSON.stringify(res))
  }
}

export default http
```

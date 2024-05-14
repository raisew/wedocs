# API

index.js

```jsx
import http from "../utils/http.js"
import apis from './apis.js'
const apiFuns = {};
apis.forEach(item => {
	let obj = {}
	switch (item.method) {
		case 'get':
			obj[item.name] = (params) => {
				return http.get(item.url, params, {
					loading: item.loading || false
				});
			}
			break;
		case 'post':
			obj[item.name] = (params) => {
				return http.post(item.url, params, {
					loading: item.loading || false
				});
			}
			break;
		case 'postFile':
			obj[item.name] = (file, params) => {
				return http.postFile(file, params, item.url);
			}
			break;
		default:
			obj[item.name] = (params) => {
				return http.get(item.url, params, {
					loading: item.loading || false
				});
			}
			break;
	}
	Object.assign(apiFuns, obj)
})
console.log(apiFuns)

export default apiFuns;
```

apis.js

```jsx
const apis = [{
	name: 'init',
	url: '/common/init',
	method: 'get',
}, {
	name: 'login',
	url: '/user/login',
	method: 'post',
	loading: true,
}, {
	name: 'register',
	url: '/user/register',
	method: 'post',
	loading: true,
}, {
	name: 'creationOrder',
	url: '/order/creation',
	method: 'post',
	loading: true,
}, {
	name: 'orderToday',
	url: '/order/today',
	method: 'get',
}, {
	name: 'news',
	url: '/news/index',
	method: 'get',
}, {
	name: 'orderStatistics',
	url: '/order/statistics',
	method: 'get',
}, {
	name: 'orderList',
	url: '/order/orderList',
	method: 'get',
}, {
	name: 'userInfo',
	url: '/user/index',
	method: 'get',
}, {
	name: 'userOut',
	url: '/user/logout',
	method: 'get',
}, {
	name: 'orderitem',
	url: '/order/item',
	method: 'get',
}, {
	name: 'orderpay',
	url: '/order/pay',
	method: 'post',
	loading: true,
}, {
	name: 'payInfo',
	url: '/order/payInfo',
	method: 'get',
}, {
	name: 'newsList',
	url: '/news/index',
	method: 'get',
}, {
	name: 'newsroll',
	url: '/news/roll',
	method: 'get',
}, {
	name: 'userindex',
	url: '/user/index',
	method: 'get',
}, {
	name: 'dclist',
	url: '/capital/dclist',
	method: 'get',
}, {
	name: 'deposit',
	url: '/capital/deposit',
	method: 'post',
	loading: true,
}, {
	name: 'paylist',
	url: '/capital/paylist',
	method: 'get',
}, {
	name: 'recharge',
	url: '/capital/recharge',
	method: 'post',
	loading: true,
}, {
	name: 'depositOrder',
	url: '/capital/depositOrder',
	method: 'get',
}, {
	name: 'rechargeOrder',
	url: '/capital/rechargeOrder',
	method: 'get',
}, {
	name: 'teamTotal',
	url: '/invite/teamTotal',
	method: 'get',
}, {
	name: 'poster',
	url: '/invite/poster',
	method: 'get',
}, {
	name: 'capitalrecord',
	url: '/capital/record',
	method: 'get',
}, {
	name: 'resetpwd',
	url: '/user/resetpwd',
	method: 'post',
	loading: true,
}, {
	name: 'bonusout',
	url: '/user/bonusout',
	method: 'post',
	loading: true,
}, {
	name: 'service',
	url: '/service/index',
	method: 'get',
}, {
	name: 'pictureCode',
	url: '/common/pictureCode',
	method: 'get',
}, {
	name: 'collection',
	url: '/order/collection',
	method: 'get',
}, {
	name: 'nft',
	url: '/order/nft',
	method: 'get',
}]

console.log('api数量', apis.length)

export default apis
```
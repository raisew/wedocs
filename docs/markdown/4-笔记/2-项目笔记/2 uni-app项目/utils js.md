# utils

## index.js

```jsx
import store from '../store'
import queryParams from "./modules/queryParams.js"

class methods {
	static msg(title, icon = 'none', duration = 1500) {
		return new Promise((resolve, reject) => {
			uni.showToast({
				title: title,
				icon: icon,
				duration,
				duration,
				complete() {
					setTimeout(() => {
						resolve()
					}, duration);
				}
			})
		})
	}
	static setStore(name, params) {
		console.log(params);
		store.commit(name, params)
	}
	static getThemeImg(img) {
		const themeName = store.state.themeName;
		// return new URL(`/static/images/theme_${themeName}/${img}`, import.meta.url).href
		return `/static/images/theme_${themeName}/${img}`;
	}
	static getUrl(url, params) {
		// 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
		// 如果有url中有get参数，转换后无需带上"?"
		let query = ''
		if (/.*\/.*\?.*=.*/.test(url)) {
			// object对象转为get类型的参数
			query = queryParams(params, false);
			// 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
			return url += "&" + query
		} else {
			// 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
			query = queryParams(params);
			return url += query
		}
	}
	static toPage(url, params) {
		if (!url || url.length == 0) return;
		uni.navigateTo({
			url: this.getUrl(url, params)
		})
	}
	static replacePage(url, params) {
		if (!url || url.length == 0) return;
		return uni.redirectTo({
			url: this.getUrl(url, params)
		})
	}
	static toUserPage(url, params, isRedirect = false) {
		// if (!store.state.token) return this.msg('请先登录').then(() => {
		// 	uni.navigateTo({
		// 		url: '/pages/account/account'
		// 	})
		// });
		if (!url || url.length == 0) return;
		if (isRedirect) {
			return uni.redirectTo({
				url: this.getUrl(url, params)
			})
		}
		uni.navigateTo({
			url: this.getUrl(url, params)
		})
	}
	static toRootPage(url, params) {
		url && uni.switchTab({
			url: url + queryParams(params)
		})
	}
	static copy(text, callback) {
		uni.setClipboardData({
			data: text,
			success: function() {
				if (callback && typeof callback) {
					callback();
				} else {
					uni.showToast({
						icon: 'success',
						title: 'Copy success'
					})
				}

			}
		});
	}
	static formatAddress(address) {
		let str = '';
		if (address) {
			str = address.substring(0, 6) + '****' + address.substring(address.length - 4, address.length)
		}
		return str;
	}

	static exitApp() {
		// #ifdef APP-PLUS
		let main = plus.android.runtimeMainActivity();
		//为了防止快速点按返回键导致程序退出重写quit方法改为隐藏至后台  
		plus.runtime.quit = function() {
			main.moveTaskToBack(false);
		};
		//重写toast方法如果内容为 ‘再按一次退出应用’ 就隐藏应用，其他正常toast  
		plus.nativeUI.toast = (function(str) {
			if (str == 'exit') {
				main.moveTaskToBack(false);
				return false;
			} else {
				uni.showToast({
					title: '再按一次退出应用',
					icon: 'none',
				})
			}
		});
		// #endif
	}

	static stickyTop() {
		// #ifdef APP-PLUS
		let systemInfo = uni.getSystemInfoSync();
		let pxNum = systemInfo.statusBarHeight + 44;
		return pxNum / systemInfo.windowWidth * 750
		// #endif
		// #ifdef H5
		return 0
		// #endif
	}

}

export default methods
```

## queryParams.js

```jsx
/**
 * 对象转url参数
 * @param {*} data,对象
 * @param {*} isPrefix,是否自动加上"?"
 */
function queryParams(data = {}, isPrefix = true, arrayFormat = 'comma') {
	let prefix = isPrefix ? '?' : ''
	let _result = []
	if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'comma';
	for (let key in data) {
		let value = data[key]
		// 去掉为空的参数
		if (['', undefined, null].indexOf(value) >= 0) {
			continue;
		}
		// 如果值为数组，另行处理
		if (value.constructor === Array) {
			// e.g. {ids: [1, 2, 3]}
			switch (arrayFormat) {
				case 'indices':
					// 结果: ids[0]=1&ids[1]=2&ids[2]=3
					for (let i = 0; i < value.length; i++) {
						_result.push(key + '[' + i + ']=' + value[i])
					}
					break;
				case 'brackets':
					// 结果: ids[]=1&ids[]=2&ids[]=3
					value.forEach(_value => {
						_result.push(key + '[]=' + _value)
					})
					break;
				case 'repeat':
					// 结果: ids=1&ids=2&ids=3
					value.forEach(_value => {
						_result.push(key + '=' + _value)
					})
					break;
				case 'comma':
					// 结果: ids=1,2,3
					let commaStr = "";
					value.forEach(_value => {
						commaStr += (commaStr ? "," : "") + _value;
					})
					_result.push(key + '=' + commaStr)
					break;
				default:
					value.forEach(_value => {
						_result.push(key + '[]=' + _value)
					})
			}
		} else {
			_result.push(key + '=' + value)
		}
	}
	return _result.length ? prefix + _result.join('&') : ''
}

export default queryParams;
```
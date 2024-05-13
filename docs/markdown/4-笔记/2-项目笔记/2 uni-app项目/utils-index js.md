# utils-index.js

```jsx
import store from '../store'
import queryParams from "./modules/queryParams.js"
import config from "./config.js"
import numCount from "./modules/numCount.js"
import {
	compressBase64,
	compressImg,
	dataURLtoFile
} from "./modules/imageProcess.js"

import i18n from "@/locales/i18n.js"
const lang = i18n.global;

class methods {
	static t(text) {
		return lang.t(text);
	}
	static msg(title, icon = 'none', duration = 1500) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				uni.showToast({
					title: title,
					icon: icon,
					duration,
					complete: function() {
						setTimeout(() => {
							resolve()
						}, duration);
					}
				})
			}, 0)

		})
	}
	static confirm(content, title = lang.t('hint')) {
		return new Promise((resolve, reject) => {
			uni.showModal({
				title: title,
				content: content,
				cancelText: lang.t('cancel'),
				confirmText: lang.t('confirm'),
				success: function(res) {
					if (res.confirm) {
						resolve()
					} else if (res.cancel) {
						console.log('cancel');
					}
				}
			});
		})
	}
	static alert(content, title = lang.t('hint')) {
		return new Promise((resolve, reject) => {
			uni.showModal({
				title: title,
				content: content,
				showCancel: false,
				confirmText: lang.t('confirm'),
				success: function(res) {
					if (res.confirm) {
						resolve()
					} else if (res.cancel) {
						console.log('cancel');
					}
				}
			});
		})
	}
	static setStore(name, params) {
		console.log(params);
		store.commit(name, params)
	}
	static getStore(name) {
		return store.state[name];
	}
	static getThemeImg(img) {
		const themeName = store.state.themeName;
		return `/static/images/theme_${themeName}/${img}`;
		// return new URL(`@/static/images/theme_${themeName}/${img}`, import.meta.url).href
	}
	static getImgUrl(img) {
		if (img && img.indexOf('http') == -1 && img.indexOf('data:image/') == -1) {
			img = config.imgUrl + img;
		}
		return img;
	}
	static getUrl(url, params) {
		// 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
		// 如果有url中有get参数，转换后无需带上"?"
		let query = ''
		if (!params) {
			return url;
		}
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
	static toBack(num) {
		const pages = getCurrentPages()
		if (pages.length === 1) {
			if (typeof num === 'number') {
				history.go(-num)
			} else {
				history.back()
			}
		} else {
			uni.navigateBack({
				delta: num || 1
			})
		}
	}
	static toPage(url, params) {
		if (!url || url.length == 0) return;
		return uni.navigateTo({
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
		if (!store.state.token) return this.msg('请先登录').then(() => {
			uni.navigateTo({
				url: '/pages/login/login'
			})
		});
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
	static relaunchPage(url, params) {
		url && uni.reLaunch({
			url: url + queryParams(params)
		})
	}
	static toLogin() {
		let pages = getCurrentPages().reverse();
		console.log(pages)
		if (pages.length > 0) {
			let currentPage = pages[pages.length - 1]?.route;
			console.log(currentPage)
			if (currentPage == 'pages/login/login') {
				return;
			}
		}
		uni.reLaunch({
			url: '/pages/login/login',
		})

	}
	static goRealname() {
		this.confirm('您还未完成实名认证，去认证？').then(() => {
			this.toPage('/pages/mine/realname');
		});
	}
	static checkRealname() {
		return new Promise(resolve => {
			if (store.state.userinfo.certification_status != 1) {
				this.goRealname();
			} else {
				resolve();
			}
		})
	}
	static copy(text, callback) {
		if (typeof text == 'number') {
			text = text.toString();
		}
		uni.setClipboardData({
			data: text,
			success: function() {
				if (callback && typeof callback) {
					callback();
				} else {
					uni.showToast({
						icon: 'success',
						title: lang.t('Copied_successfully')
					})
				}

			}
		});
	}
	static formatAddress(address, ellipsis = "......") {
		if (address.length <= 12) {
			return address;
		}
		const prefix = address.slice(0, 6);
		const suffix = address.slice(-6);
		return `${prefix}${ellipsis}${suffix}`;
	}
	static formatIdCard(str) {
		return str?.replace(/^(.{4})(?:\d+)(.{4})$/, "$1 **** **** $2");
	}
	static formatBankCard(str) {
		if (str.length < 6) return str;
		const lastFourDigits = str.slice(-4);
		const mask = '*'.repeat(str.length - 4);
		return mask + lastFourDigits;
	}
	static randomString(length) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
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
					title: lang.t('Press_again_to_exit_the_app'),
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

	static getNodeInfo(node) {
		return new Promise((resolve, reject) => {
			try {
				const query = uni.createSelectorQuery();
				// #ifdef MP
				query.in(this);
				// #endif
				query?.select(node)?.boundingClientRect(data => {
					resolve(data);
				}).exec();
			} catch (err) {
				resolve({})
			}

		})
	}
	static getSystemInfo() {
		return uni.getSystemInfoSync();
	}
	static winInfo() {
		return uni.getWindowInfo();
	}
	static toNumber(str) {
		if (str?.indexOf(',') == -1) return str;
		const numStr = str.replace(/,/g, '');
		const num = parseFloat(numStr);
		return isNaN(num) ? str : num;
	}
	static tofix(value, ex, lt) {
		ex = typeof ex != 'undefined' ? ex : ''
		lt = typeof lt != 'undefined' ? lt : ''
		if (value < 1000) {
			return ex + Number((value / 1).toFixed(2)).toLocaleString() + ' ' + lt;
		} else if (value < 1000000) {
			return ex + Number((value / 1000).toFixed(2)).toLocaleString() + 'K ' + lt;
		} else {
			return ex + Number((value / 1000000).toFixed(2)).toLocaleString() + 'M ' + lt;
		}
	}
	static openLink(url) {
		if (!url) return false;
		// #ifdef APP-PLUS
		plus.runtime.openURL(url)
		// #endif
		// #ifdef H5
		let link = window.open(url, '_blank');
		if (!link) {
			window.location.href = url;
		}
		// #endif
		// #ifdef MP
		this.copy(url);
		// #endif
	}
	static toDate(timestamp) {
		const date = new Date(timestamp * 1000); // 将时间戳转换为毫秒
		const year = date.getFullYear();
		const month = ("0" + (date.getMonth() + 1)).slice(-2); //月份从0开始，所以要加1
		const day = ("0" + date.getDate()).slice(-2);
		return `${year}-${month}-${day}`;
	}
	static toDateTime(timestamp) {
		if (!timestamp) return '';
		const date = new Date(timestamp);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const seconds = String(date.getSeconds()).padStart(2, '0');
		const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
		return formattedTime;
	}
	static getUrlParams(url) {
		const params = {};
		const paramStr = url.split('?')[1];
		if (paramStr) {
			const paramArr = paramStr.split('&');
			paramArr.forEach(param => {
				const [key, value] = param.split('=');
				params[key] = decodeURIComponent(value);
			});
		}
		return params;
	};
	static numCount = numCount;
	static compressBase64 = compressBase64;
	static compressImg = compressImg;
	static dataURLtoFile = dataURLtoFile;

}

export default methods
```
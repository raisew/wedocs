# sign.js

```jsx
import md5Libs from "../uni_modules/vk-uview-ui/libs/function/md5.js"
export default function(res) {
	let lsRes = JSON.parse(JSON.stringify(res))
	let sign = ''
	let secrect = 'edUuCnsNyspRRObmP22TlO0bGY7l4td6i4fQN1GbEb5mCc1pHb'
	let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/;

	lsRes.client_key = 195265694483
	lsRes.time_stamp = parseInt((new Date()).getTime() / 1000)

	Object.keys(lsRes).sort().forEach(key => {
		if (Array.isArray(lsRes[key])) {
			sign += key
			lsRes[key].forEach((item, index) => {
				if (!item) {
					lsRes[key].splice(index, 1)
				} else {
					if (item.constructor === Object) {
						Object.keys(item).sort().forEach(nestedKey => {
							sign += nestedKey + item[nestedKey].toString().trim()
						})
					} else {
						sign += index === 0 ? '' : ','
						sign += typeof item === 'string' ? item.trim() : item.toString()
					}
				}
			})
		} else {
			if (lsRes[key] === "") {
				delete lsRes[key]
			} else {
				sign += key + (typeof lsRes[key] === 'string' ? lsRes[key].toString().trim() : lsRes[key]
					.toString())
			}
		}
	})
	sign = secrect + sign + secrect
	lsRes.sign = md5Libs.md5(sign).toUpperCase()
	return lsRes
}
```

老版本

```jsx
import md5Libs from "../uni_modules/vk-uview-ui/libs/function/md5.js"
export default function(res) {
	let lsRes = JSON.parse(JSON.stringify(res))
	let sign = ''
	let secrect = 'edUuCnsNyspRRObmP22TlO0bGY7l4td6i4fQN1GbEb5mCc1pHb'
	let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/;
	// lsRes.user_source = 'PC'
	lsRes.client_key = 195265694483
	lsRes.time_stamp = parseInt((new Date()).getTime() / 1000)
	// lsRes.site_code = store.state.userInfo.is_default_site ? store.state.userInfo.is_default_site : ''
	// console.log(lsRes)
	Object.keys(lsRes).sort().map(key => { // 循环排序对象
		if (Array.isArray(lsRes[key])) { // 如果等于数组
			sign += key
			for (let i in lsRes[key]) { // 循环数组
				if (!lsRes[key][i]) { // 如果数组等于空，删除
					lsRes[key].splice(i, 1)
				} else {
					// lsRes[key][i] = reg.test(lsRes[key][i]) ? encodeURIComponent(lsRes[key][i]) : lsRes[key][i]
					if (lsRes[key][i].constructor === Object) { // 如果等于对象
						Object.keys(lsRes[key][i]).sort().map(n => { // 循环里面的对象
							// console.log(n)
							// console.log(lsRes[key][i][n])
							sign += n + lsRes[key][i][n].trim()
						})
					} else {
						sign += i == 0 ? '' : ','
						if (typeof(lsRes[key][i]) == 'string') {
							sign += lsRes[key][i].trim()
						} else {
							sign += lsRes[key][i]
						}
					}
				}
			}
		} else {
			// if (!lsRes[key]) {
			if (lsRes[key] === "") {
				// console.log(key +'='+lsRes[key])
				delete lsRes[key]
			} else {
				// lsRes[key] = reg.test(lsRes[key]) ? encodeURIComponent(lsRes[key]) : lsRes[key]
				if (typeof(lsRes[key]) === 'string') {
					sign += key + lsRes[key].trim()
				} else {
					sign += key + lsRes[key]
				}
			}
		}
	})
	// console.log(sign)
	sign = secrect + sign + secrect
	lsRes.sign = md5Libs.md5(sign).toUpperCase()
	// 输入MD5加密签名
	return lsRes
}
```
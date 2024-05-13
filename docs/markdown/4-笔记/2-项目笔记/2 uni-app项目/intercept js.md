# intercept.js

```jsx
import store from "../store/index.js"
const whiteList = ['/pages/login/login', '/pages/login/registry']
const isStringInArray = (str, array) => {
	const isInArray = array.includes(str);
	const isSubstringInArray = array.some(item => str.includes(item));
	return isInArray || isSubstringInArray;
};
const noPermission = (url) => {
	if (!store.state.token && !isStringInArray(url, whiteList)) {
		return true;
	}
	return false;
}
const interceptRoute = () => {
	const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'];
	list.forEach(item => {
		console.log(item)
		uni.addInterceptor(item, {
			invoke(args) {
				console.log(args)
				if (noPermission(args.url)) {
					return uni.reLaunch({
						url: '/pages/login/login'
					})
				}
			},
			success(args) {
				// console.log(args)
			},
			fail(err) {
				// console.log('interceptor-fail', err)
			},
			complete(res) {
				// console.log('interceptor-complete', res)
			}
		})
	})
}
interceptRoute();
```
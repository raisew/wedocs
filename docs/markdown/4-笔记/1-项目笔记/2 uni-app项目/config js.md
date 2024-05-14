# config.js

```jsx
import store from '../store'
const configJson = {
	apiUrlDev: 'https://api.digitai-x.com',
	apiUrlProd: 'https://api.digitai-x.com',
	imgUrlDev: 'https://api.digitai-x.com',
	imgUrlProd: 'https://api.digitai-x.com',
	wsUrlDev: '',
	wsUrlProd: '',
	apiRoot: '',
}
// const config = {
// 	apiUrl: process.env.NODE_ENV == 'production' ? configJson.apiUrlProd : configJson.apiUrlDev,
// 	imgUrl: process.env.NODE_ENV == 'production' ? configJson.imgUrlProd : configJson.imgUrlDev,
// 	wsUrl: process.env.NODE_ENV == 'production' ? configJson.wsUrlProd : configJson.wsUrlDev,
// 	apiRoot: '',
// }
const config = {
	apiUrl: '',
	imgUrl: '',
	apiRoot: '',
}
const syncRequest = (url) => {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send();
	if (xhr.status === 200) {
		const response = JSON.parse(xhr.responseText);
		return response;
	} else {
		throw new Error('请求失败: ' + xhr.status);
	}
}
try {
	var responseData = syncRequest(`../static/config.json?v=${new Date().getTime()}`);
	config.apiUrl = responseData.BASE_PATH;
	config.imgUrl = responseData.IMAGE_PATH;
	if (!store.state.lang) {
		store.commit('setLang', responseData.LOCAL_LANG)
	}
} catch (error) {
	config.apiUrl = process.env.NODE_ENV == 'production' ? configJson.apiUrlProd : configJson.apiUrlDev;
	config.imgUrl = process.env.NODE_ENV == 'production' ? configJson.imgUrlProd : configJson.imgUrlDev;
}
export default config;
```
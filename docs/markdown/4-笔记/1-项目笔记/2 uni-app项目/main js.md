# main.js

```jsx
import App from './App'

import store from './store'
import Pub from "./utils/index.js"
import $http from "./utils/http.js"
import uView from './uni_modules/vk-uview-ui';

import i18n from "./locales/i18n.js"

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3

import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.config.globalProperties.Pub = Pub;
	app.config.globalProperties.$http = $http;
	app.use(uView)
	app.use(store)
	app.use(i18n)
	return {
		app
	}
}
// #endif
```
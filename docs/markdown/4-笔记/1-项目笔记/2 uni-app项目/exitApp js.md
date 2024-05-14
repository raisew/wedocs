# exitApp.js

```jsx
import i18n from "@/locales/i18n.js"

let main = plus.android.runtimeMainActivity();
//为了防止快速点按返回键导致程序退出重写quit方法改为隐藏至后台
plus.runtime.quit = function() {
	main.moveTaskToBack(false);
};
//重写toast方法如果内容为 ‘再按一次退出应用’ 就隐藏应用，其他正常toast
plus.nativeUI.toast = (function(str) {
	if (str == i18n.global.t('Press_again_to_exit_the_app')) {
		main.moveTaskToBack(false);
		return false;
	} else {
		uni.showToast({
			title: i18n.global.t('Press_again_to_exit_the_app'),
			icon: 'none',
		})
	}
});
```
# u-verification-code 验证码倒计时

```jsx
<u-button ripple shape="circle" size="mini" class="btn-primary" :disabled="codeData.isSending"
							:class="{'btn-disabled': codeData.isSending}" @click="getCode">
							<text class="font-24">{{codeData.codeText}}</text>
						</u-button>

<u-verification-code ref="code" :seconds="codeData.seconds" start-text="获取验证码" change-text="X秒重新获取"
			end-text="重新获取" :keep-running="true" unique-key="page-register" @start="codeData.isSending = true"
			@end="codeData.isSending = false" @change="codeChange"> </u-verification-code>

const codeData = reactive({
	codeText: '',
	seconds: 120,
	isSending: false,
})

const codeChange = (text) => {
		console.log(text)
		codeData.codeText = text;
	}
	const code = ref(null);
	const getCode = () => {
		if (code.value.canGetCode) {
			// 模拟向后端请求验证码
			uni.showLoading({
				title: '正在获取验证码'
			})
			setTimeout(() => {
				uni.hideLoading();
				// 这里此提示会被this.start()方法中的提示覆盖
				uni.$u.toast('验证码已发送');
				// 通知验证码组件内部开始倒计时
				code.value.start();
			}, 2000);
		} else {
			uni.$u.toast('倒计时结束后再发送');
		}
	}
```
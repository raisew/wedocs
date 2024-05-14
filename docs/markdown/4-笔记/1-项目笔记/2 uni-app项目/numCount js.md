# numCount.js

```jsx
// 加法函数
const add = (num1, num2) => {
	const precision = Math.max(getPrecision(num1), getPrecision(num2));
	const factor = Math.pow(10, precision);
	return (num1 * factor + num2 * factor) / factor;
};
// 减法函数
const subtract = (num1, num2) => {
	const precision = Math.max(getPrecision(num1), getPrecision(num2));
	const factor = Math.pow(10, precision);
	return (num1 * factor - num2 * factor) / factor;
};
// 乘法函数
const multiply = (num1, num2) => {
	const precision = getPrecision(num1) + getPrecision(num2);
	const factor = Math.pow(10, precision);
	return Math.round(num1 * factor * num2 * factor) / (factor * factor);
};
// 除法函数
const divide = (num1, num2) => {
	const precision = getPrecision(num1) - getPrecision(num2);
	const factor = Math.pow(10, precision);
	return Math.round(num1 * factor / (num2 * factor)) / factor;
};
// 获取数值的精度
const getPrecision = (num) => {
	const str = num.toString();
	const index = str.indexOf('.');
	return index === -1 ? 0 : str.length - index - 1;
};

export default {
	add,
	subtract,
	multiply,
	divide,
}
```
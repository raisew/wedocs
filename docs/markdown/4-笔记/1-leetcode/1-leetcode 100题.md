# leetcode 100 题

## 1. 两数之和

给定一个整数数组 `nums` 和一个整数目标值 `target` ，请你在该数组中找出 和为目标值 `target` 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

> 示例 1：
>
> 输入：`nums = [2,7,11,15]`, `target = 9`
>
> 输出：`[0,1]`
>
> 解释：因为 `nums[0] + nums[1] == 9` ，返回 `[0, 1]` 。

> 示例 2：
>
> 输入：`nums = [3,2,4]`, `target = 6`
>
> 输出：`[1,2]`

> 示例 3：
>
> 输入：`nums = [3,3]`, `target = 6`
>
> 输出：`[0,1]`

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 定义一个函数twoSum，用于寻找数组中两个和为target的元素
const twoSum = (nums, target) => {
  // 定义一个Map，用于存储数组中的元素及其索引
  const map = new Map();
  // 遍历数组，计算每个元素与target的差值，检查Map中是否有这个差值
  for (let i = 0; i < nums.length; i++) {
    // 计算目标值与当前值的差值
    const complement = target - nums[i];
    // 判断map中是否存在该差值
    if (map.has(complement)) {
      // 如果存在，返回该差值和当前值的索引
      return [map.get(complement), i];
    }
    // 将当前值和当前值的索引存入map中
    map.set(nums[i], i);
  }
  // 遍历结束后，如果没有找到两个和为target的元素，则返回null
  return null;
};
```

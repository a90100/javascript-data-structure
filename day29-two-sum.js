function twoSum(arr, target) {
  let result = [];
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let minusNum = target - arr[i]; // 把當前i元素的插值記錄下來
    // 用map記錄值和索引
    map[arr[i]] = i; // arr[i]: 數字值，i: 索引值

    if(map[minusNum] !== undefined) { // 當插值存在的情況下，新增插值的索引和i
      result.push([map[minusNum], i]);
    }
  }
  console.log(map);
  return result;
}

console.log(twoSum([7, 2, 12, 6, 1, 3], 9));
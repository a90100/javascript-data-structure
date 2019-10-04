// 交换
function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function partition(arr, left, right) {
  // 設定基準值在資料列中間
  const pivot = arr[Math.floor((right + left) / 2)];

  // 左邊索引小於等於右邊索引都會持續比較
  while (left <= right) {

    // 從左到右找到不小於基準值的元素為止
    // 注意遇到相等的情况也要停下
    while (arr[left] < pivot) {
      left++;
    }

    // 從右到左找到不大於基準值的元素為止
    // 注意遇到相等的情况也要停下
    while (arr[right] > pivot) {
      right--;
    }

    // 當右邊元素大於等於左邊元素就做交換
    if (left <= right) {
      swap(arr, left, right);
      
      left++;
      right--;
    }
  }
  // 回傳分區的索引
  return left;
}

function quickSort(arr, left, right) {
  // 紀錄分裂的索引
  let index;

  // 確保原本陣列長度大於1
  if (arr.length > 1) {

    // 一開始left和right都是undefined，因此設定typeof判斷是否是數字來給left和right初始值
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? arr.length - 1 : right;
    console.log(left, right);

    // 獲得分裂位置索引
    index = partition(arr, left, right);

    // 從基準值位置判斷，確保左邊陣列還有元素存在
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }

    // 從基準值位置判斷，確保右邊陣列還有元素存在
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

console.log(quickSort([1, 234, -5, 78, -182, 45]));
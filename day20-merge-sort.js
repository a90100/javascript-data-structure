function mergeSort(data) {
  // 假如資料長度小於兩個元素，就可以不用排序了
  if (data.length < 2) {
    return data;
  }

  // 取中間值
  const middle = Math.floor(data.length / 2); // Math.floor() 函式會回傳無條件捨去後的最大整數。

  // 取得分開的左邊資料和右邊資料
  const leftPart = data.slice(0, middle);
  const rightPart = data.slice(middle, data.length);
  console.log('split:', leftPart, rightPart);

  // 透過遞迴不斷將資料做分裂，最後回傳重新合併並排序過的資料列
  return mergeData(mergeSort(leftPart), mergeSort(rightPart));
}

function mergeData(left, right) {
  // 建立一個可儲存排序後資料的空陣列
  let result = [];

  // 比較左右兩邊的資料列的值
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // 有時經過以上的迴圈之後，若某邊資料列的元素先shift完則另一個資料列會有剩下的元素(且是全部資料中的最大值)，將它們推入result陣列
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  console.log('result:', result);
  return result;
}

console.log(mergeSort([1, 234, -5, 78, -182, 45]));
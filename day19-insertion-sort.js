function insertionSort(data) {
  const length = data.length;
  for (let i = 1; i < length; i++) {
    let current = data[i]; // 要加入排序的值
    let j = i - 1; // 為已排序好的資料列中最後一個值的索引值
    while (j >= 0 && current < data[j]) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = current;
    console.log(data);
  }
}

insertionSort([1, 234, -5, 78, -182, 45]);
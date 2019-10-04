function linearSearch(data, key) {
  let index = 0;
  while (index < data.length) {
    if (data[index] == key) { // 某元素值和key查找值相同，回傳目前索引
      return index;
    }
    index++;
  }
  return -1;
}

console.log(linearSearch([1, 234, -5, 78, -182, 45], 45));
console.log(linearSearch([1, 234, -5, 78, -182, 45], 4));
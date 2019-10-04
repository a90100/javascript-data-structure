function binarySearch(data, key) {
  let left = 0;
  let right = data.length -1;
  let middle;
  while(left <= right) {
    middle = Math.floor((left + right) / 2);
    if(data[middle] == key) {
      return middle;
    } else if(key > data[middle]) { // 尋找值比中間值大時，讓中間值後的一個元素位置指定left
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([-182, -5, 1, 45, 78, 234], 45));
console.log(binarySearch([-182, -5, 1, 45, 78, 234], 4));
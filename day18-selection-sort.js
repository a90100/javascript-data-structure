function selectionSort(data) {
  const length = data.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if(data[min] > data[j]) {
        min = j;
      }
    }
    if( i != min) {
      let temp = data[i];
      data[i] = data[min];
      data[min] = temp;
    }
    console.log(data);
  }
}

selectionSort([1, 234, -5, 78, -182, 45]);
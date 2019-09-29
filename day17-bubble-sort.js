function bubbleSort(data) {
  const length = data.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      let temp;
      if (data[j] > data[j + 1]) {
        temp = data[j + 1];
        data[j + 1] = data[j];
        data[j] = temp;
      }
      console.log(data);
    }
  }
}

bubbleSort([1, 234, -5, 78, -182, 45]);
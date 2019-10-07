function armstrongNum(low, high) {
  let nums = [];
  for (let i = low; i <= high; i++) {
    // 計算i幾位數，並將每個位數存起來
    let numLength = 0; // 記錄i是幾位數
    let digits = []; // 記錄i每個位數的數字
    let tempNum = i; // 將i記錄起來，等下要用它不斷除10取出每個位數的數字
    let sum = 0; // 每個位數的 numLength 次方之總和，最後會和i比較是否相同

    while (tempNum > 0) {
      let digit = Math.floor(tempNum % 10);
      digits.push(digit);
      tempNum = Math.floor(tempNum / 10);
      numLength++;
    }

    // 將各個位數取出乘numLength次
    for (let j = 0; j < numLength; j++) {
      let digit = digits[j];
      let tempDigit = digits[j];
      for (let k = 1; k < numLength; k++) { // 這裡k要從1開始
        digit *= tempDigit;
      }
      sum += digit;
    }

    if (sum == i) {
      nums.push(i);
    }
  }
  return nums;
}

console.log(armstrongNum(1, 1000));
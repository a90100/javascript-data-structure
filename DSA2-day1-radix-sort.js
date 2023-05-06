/**
 * 用來取得一個數字 num 的第 i 個位數的值，例如 getDigit(12345, 1) 會取出 4
 * @param {number} num - 被取出位數值的數字
 * @param {number} i - 取出第幾位，從個位數開始算
 */
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * 計算一個數字 num 為幾位數
 * @param {number} num - 被計算幾位數的數字
 */
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * 找出多個數字中的最大位數
 * @param {number} nums - 包含多個數字的陣列
 */
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

/**
 * 執行 radix Sort 的函式
 * @param {number} nums - 包含多個數字的陣列
 */
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);

      // 想像有 10 個籠子，0~9，依據取到的該位數值將當前遍歷的數字放進去籠子裡面
      // 例如當前取個位數，digitBickets[2] 會出現 12
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

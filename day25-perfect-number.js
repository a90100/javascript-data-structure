function perfectNum(num) {
  let sum = 1; // 因為1一定是某個數的因數，因此預設sum先加一
  for(let i = 2; i * i <= num; i++) {
    if (num / i == i & num % i == 0) {
      sum += i;
    } else if(num % i == 0) {
      sum += i;
      sum += (num / i);
    }

    if(sum > num) {
      return false;
    }
  }
  if(sum == num && num != 1) {
    return true;
  } else {
    return false;
  }
}

console.log(perfectNum(28));
console.log(perfectNum(8128));
console.log(perfectNum(34));
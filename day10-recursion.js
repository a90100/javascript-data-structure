const ALPHABET = "ABCDEFGHIJKLMNOPQRSTVWXYZ"

// 設定start索引為0，end索引未知，故為null
function isPalindrome(str, start = 0, end = null) {
  // 先初始化end的值
  if (end === null) end = str.length - 1

  if (str.length < 2) {
    return true
  } else if (end <= start) { // 全部字元都比較完成時
    return true
  } else {
    // 將要比較的字母都轉大寫
    let c1 = str.charAt(start).toUpperCase()
    let c2 = str.charAt(end).toUpperCase()
    // c1,c2 不是字母的話，必須移動到後一個/前一個字母，並再呼叫一次isPalindrome()
    if (!ALPHABET.includes(c1)) {
      return isPalindrome(str, start + 1, end)
    } else if (!ALPHABET.includes(c2)) {
      return isPalindrome(str, start, end - 1)
    } else if (c1 !== c2) { // 兩個比較字母不同，肯定不是回文
      return false
    } else {
      return isPalindrome(str, start + 1, end - 1) // 讓start到後一個字元位置，end到前一個字元位置，重新執行函式
    }
  }
}

console.log(isPalindrome(""), true)
console.log(isPalindrome("a"), true)
console.log(isPalindrome("tt"), true)
console.log(isPalindrome("tot"), true)
console.log(isPalindrome("TAcoCat"), true)
console.log(isPalindrome("boring"), false)
console.log(isPalindrome("abc-xbbby-cba"), false)
console.log(isPalindrome("Eva, Can I Stab Bats In A Cave?"), true)
console.log(isPalindrome("A Man, A Plan, A Canal-Panama!"), true)
console.log(isPalindrome("Doc, Note: I Dissent. A Fast Never Prevents A Fatness. I Diet On Cod."), true)
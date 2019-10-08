function caesarCipher(str, num) {
  let newString = '';
  // num %= 26;

  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);

    // 大寫
    if (c >= 65 && c <= 90) {
      newString += String.fromCharCode((c - 65 + num) % 26 + 65);
    } else if (c >= 97 && c <= 122) { // 小寫
      newString += String.fromCharCode((c - 97 + num) % 26 + 97);
    } else { // 非字母就直接加到輸出的密文
      newString += str.charAt(i);
    }
  }
  return newString;
}

console.log(caesarCipher("Hello World!", 12));
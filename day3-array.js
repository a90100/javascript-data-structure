const minefield = [
  ['', '*', '', '*'],
  ['*', '*', '', '*'],
  ['', '', '*', ''],
  ['', '', '', ''],
];

// the output should print the following
// 3*4*
// **5*
// 23*2
// 0111
function minesweeper(minefield) {
  for (let i = 0; i < minefield.length; i++) {
    let string = '';
    for (let j = 0; j < minefield[i].length; j++) {
      // 假如某點是*，直接印出來
      // 假如不是，去計算九宮格內有幾個*
      if (minefield[i][j] == '*') {
        string += minefield[i][j];
      } else {
        let temp = 0;
        temp += changeField(i - 1, j - 1); // 左上
        temp += changeField(i - 1, j); // 正上
        temp += changeField(i - 1, j + 1); // 右上
        temp += changeField(i, j - 1); // 左中
        temp += changeField(i, j + 1); // 右中
        temp += changeField(i + 1, j - 1); // 左下
        temp += changeField(i + 1, j); // 正下
        temp += changeField(i + 1, j + 1); // 右下
        string += temp;
      }
    }
    console.log(string);
  }
}

// 控制周圍邊界
function changeField(i, j) {
  if (i < 0 || j < 0) {
    return 0;
  } else if (i >= minefield.length) {
    return 0;
  } else if (j >= minefield[i].length) {
    return 0;
  } else if (minefield[i][j] == '*') {
    return 1;
  } else {
    return 0;
  }
}

minesweeper(minefield);
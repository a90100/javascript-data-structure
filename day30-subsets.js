function subsets(arr) {
  let result = [
    []
  ];
  combine([], arr, result);
  return result;
}

function combine(tempArr, arr, result) {
  while (arr.length) {
    let data = arr[0];
    let tempArr_1 = tempArr.slice(0); // 用 slice的目的在於建立一個新陣列
    tempArr_1.push(data);
    result.push(tempArr_1);
    arr.shift();

    console.log('data:',data, 'tempArr_1:',tempArr_1, 'result:',result);
    console.log('-------------------');
    
    combine(tempArr_1, arr.slice(0), result);
  }
}

console.log(subsets([1, 2, 3]));
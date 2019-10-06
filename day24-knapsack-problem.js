function knapSack(weight, value, size) {
  let bagMatrix = [];

  // 外層for迴圈w代表 背包能容納的重量，從0到1, 2,...到背包最大重量
  for (let w = 0; w <= size; w++) {
    bagMatrix[w] = [];
    // 內層for迴圈j代表 紀錄物品的索引值
    for (let j = 0; j < value.length; j++) {
      // 背包重量為0，肯定不能放任何東西進去
      if (w === 0) {
        bagMatrix[w][j] = 0;
        continue;
      }
      // 背包的容量小於物品j的重量
      if (w < weight[j]) {
        bagMatrix[w][j] = bagMatrix[w][j - 1] || 0;
        continue;
      }
      // 這邊紀錄的是取物品和不取物品的情況下，選擇結果較大的值填入陣列內
      bagMatrix[w][j] = Math.max((bagMatrix[w - weight[j]][j - 1] || 0) + value[j], bagMatrix[w][j - 1] || 0);
    }
  }
  return bagMatrix;
}

// 物品1: 重量2，價值3，索引0
// 物品2: 重量3，價值4，索引1
// 物品3: 重量4，價值5，索引2
// 物品4: 重量5，價值8，索引3
// 物品5: 重量9，價值10，索引4
const weight = [2, 3, 4, 5, 9];
const value = [3, 4, 5, 8, 10];
const size = 20; // 背包承受重量

console.log(knapSack(weight, value, size));
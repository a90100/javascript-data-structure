class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31; // 用質數是讓 hash 後的值更平均分布
    // 這樣的計算符合相同輸入相同輸出的原則
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96; // 取得該字元是第幾個英文字母數字，ex: a = 1, b = 2
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key,value){
    let index = this._hash(key); // 產生要儲存資料的 address
    // 如果之前該索引沒有被用過，就幫該索引值加上空陣列，ex: index = 2, keyMap 變成 [ , , [], ....]
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key){ // 這裡使用了 O(n)，但是其實簡化了實際 get 函式在 Hash table 中的實作，實作中可以降到 O(1)
    let index = this._hash(key);
    if(this.keyMap[index]) {
      // 查找二維陣列，例如當前 map 為 [ , , [['Harry', 172], ['Ray', 180]]]
      for(let i = 0; i < this.keyMap[index].length; i++){
        // this.keyMap[index][i][0] 為 Harry or Ray，看 i 多少
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  // 取得所有 keys，這種寫法能避免 hash collision
  keys(){
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }

  // 取得所有 values
  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){ // 過濾重複的值
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")


ht.keys().forEach(function(key){
  console.log(ht.get(key));
})
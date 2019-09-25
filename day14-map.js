let map1 = new Map();

map1.set('harry', 1);
map1.set('tom', 2);
map1.set('jerry', 3);

console.log(map1);

console.log(map1.has('harry'));
console.log(map1.has('kitty'));

console.log(map1.get('tom'));

console.log(map1.delete('tom'));
console.log(map1.delete('john'));
console.log(map1);

console.log(map1.size);

map1.clear();
console.log(map1);

map1.set('alex', 4);
map1.set('jimmy', 5);
map1.set('jason', 6);

for (let key of map1.keys()) {
  console.log(key);
}

for (let value of map1.values()) {
  console.log(value);
}

for (let [key, value] of map1.entries()) {
  console.log(key, value);
}

for (let [key, value] of map1) {
  console.log(key, value);
}

map1.forEach(function (value, key, map) {
  console.log(key, value);
});
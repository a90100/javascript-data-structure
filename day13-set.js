let set1 = new Set([1, 2, 3]);

set1.add(5);
set1.delete(2);
console.log(set1);
console.log(set1.size);
console.log(set1.has(1));
console.log(set1.has(6));
console.log(set1.clear());
set1 = new Set([4, 5, 6]);
console.log(set1);

for (let item of set1.keys()) {
  console.log(item);
}

for (let item of set1.values()) {
  console.log(item);
}

for (let item of set1.entries()) {
  console.log(item);
}

set1.forEach((value, key) => console.log(key + ' , ' + value))
const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3];
let merged = [];

for (let i = 0; i < arr1.length; i++) {
  let elemArr = new Array(arr1[i], arr2[i]);
  merged.push(elemArr);
}

console.log(merged); //['a', 1], ['b', 2], ['c', 3]

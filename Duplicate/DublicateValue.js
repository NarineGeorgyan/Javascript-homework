// one solution//////
function clear_duplicate_value1(arr) {
  return new Set(arr);
}
console.log(clear_duplicate_value1([1, 0, 1, 0]));

////////second solution///////////
function clear_duplicate_value2(arr) {
  const obj = {};
  const new_array = [];
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i;
  }
  for (key in obj) {
    new_array.push(key);
  }
  return new_array;
  // or  use return Object.keys(obj);
}
console.log(clear_duplicate_value2(["John", "Taylor", "John"]));

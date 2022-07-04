function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}
const resultPush = push([5, 6, 9, false], 7);
console.log(`resultPush: ${resultPush}`);

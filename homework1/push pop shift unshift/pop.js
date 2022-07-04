function pop(arr) {
  if (arr.length === 0) {
    return -1;
  }
  let val = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return val;
}
const resultPop = pop([5, 6, false]);
console.log(`resultPop: ${resultPop}`);

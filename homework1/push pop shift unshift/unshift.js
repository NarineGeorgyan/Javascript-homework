function unshift(arr, val) {
  let i = arr.length;
  while (i > 0) {
    arr[i] = arr[i - 1];
    i--;
  }

  arr[0] = val;
  return arr.length;
}
const resultUnshift = unshift([5, 6, 9, false], 8);
console.log(`resultUnshift: ${resultUnshift}`);

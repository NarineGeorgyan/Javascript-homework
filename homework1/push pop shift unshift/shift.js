function shift(arr) {
  if (arr.length === 0) {
    return -1;
  }
  const val = arr[0];
  let i = 0;
  while (i < arr.length) {
    arr[i] = arr[i + 1];
    i++;
  }
  arr.length = arr.length - 1;
  return val;
}
const resultShift = shift([5, 6, 9, false]);
console.log(`resultShift: ${resultShift}`);

function lonely_integer(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(-arr[i])) {
      continue;
    } else {
      return arr[i];
    }
  }
}
const result = lonely_integer([1, -1, 2, -2, 3]);
console.log(result);

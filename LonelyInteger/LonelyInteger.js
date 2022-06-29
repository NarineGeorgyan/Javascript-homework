function lonely_integer(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr.includes(-arr[i])) {
      continue;
    } else {
      return arr[i];
    }

    i++;
  }
}
const result = lonely_integer([-3, 1, 2, 3, -1, -4, -2]);
console.log(result);

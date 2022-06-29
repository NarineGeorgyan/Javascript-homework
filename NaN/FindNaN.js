function get_NaN(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return i;
    }
  }
  return -1;
}
console.log(get_NaN([NaN, 1, 2, 3, 4]));

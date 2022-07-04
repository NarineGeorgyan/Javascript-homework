function second_largest_number(arr) {
  let i = 0;
  let j = 0;

  while (i < arr.length - 1) {
    j = 0;
    while (j < arr.length - i - 1) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }

      j++;
    }
    i++;
  }
  return arr[1];
}
console.log(second_largest_number([4, 6, 50, 8, 1, -90, 100, 15, 60]));

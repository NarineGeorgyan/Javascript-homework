function numberOfTrueValues(arr) {
  let i = 0;
  let counter_Of_True_Value = 0;
  if (arr.length === 0) {
    return 0;
  }
  while (i < arr.length) {
    if (typeof arr[i] === "boolean" && arr[i] === true) {
      counter_Of_True_Value++;
    }
    i++;
  }
  return counter_Of_True_Value;
}
console.log(numberOfTrueValues([]));

function sum_smallest_elements(arr) {
  const arr1 = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || Array.isArray(arr[i])) {
      continue;
    } else {
      arr1.push(arr[i]);
    }
  }
  return arr1[0] + arr1[1];
}
const result = sum_smallest_elements([
  10,
  343445353,
  3453445,
  3453545353453,
  [2, 3, 4],
]);
console.log(result);
////////////////////////////////////////////////////////
function sum_smallest_elements1(arr) {
  const arr1 = arr.sort((a, b) => a - b).filter((val) => val > 0);

  return arr1[0] + arr1[1];
}
const result1 = sum_smallest_elements1([10, 343445353, 3453445, 3453545353453]);
console.log(result1);

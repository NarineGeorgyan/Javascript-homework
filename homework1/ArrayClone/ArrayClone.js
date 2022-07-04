function clone(arr) {
  return [...arr, arr];
}
console.log(clone(["x", "y"]));

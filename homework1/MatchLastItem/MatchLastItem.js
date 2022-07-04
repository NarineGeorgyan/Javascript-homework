function match_last_item(arr) {
  if (arr.length === 0) {
    return -1;
  }
  const last_item = arr.pop();
  return arr.join("") === last_item;
}
console.log(match_last_item([8, "thunder", true, "8thundertrue"]));

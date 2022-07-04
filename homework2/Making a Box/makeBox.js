function makeBox(num) {
  let a = "";
  let b = "#";
  for (let i = 0; i < num; i++) {
    a += "#";
    if (i == 0 || i < num - 2) {
      b += "*";
    }
    if (i == num - 1) {
      b += "#";
    }
  }
  for (let i = 0; i < num; i++) {
    if (i == 0 || i == num - 1) {
      console.log(a);
    } else {
      console.log(b);
    }
  }
}
const result = makeBox(4);
console.log(result);

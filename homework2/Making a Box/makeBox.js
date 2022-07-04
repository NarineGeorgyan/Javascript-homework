function makeBox(num) {
  let a = "";
  let b = " ";
  for (let i = 0; i < num; i++) {
    a += "#";
    if (i == 0 || i < num - 2) {
      b += "*";
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
const result = makeBox(5);
console.log(result);

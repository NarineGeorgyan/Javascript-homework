function replace_string_to_code(word) {
  let str = word.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      str[i] = 4;
    } else if (str[i] === "e") {
      str[i] = 3;
    } else if (str[i] === "i") {
      str[i] = 1;
    } else if (str[i] === "o") {
      str[i] = 0;
    } else if (str[i] === "s") {
      str[i] = 3;
    }
  }

  return str.join("");
}

arr1 = replace_string_to_code("programming is fun");
console.log(arr1);

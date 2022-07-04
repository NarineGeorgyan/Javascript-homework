function getIndex(str) {
  return str.indexOf("*");
}

function uncensor(str, vowel) {
  str = str.split("");
  let str1 = "";
  let i = 0;
  while (i < vowel.length) {
    let index = getIndex(str);
    str[index] = vowel[i];
    str1 = str.join("");
    i++;
  }
  return str1;
}
console.log(uncensor("*PP*RC*S*", "UEAE"));

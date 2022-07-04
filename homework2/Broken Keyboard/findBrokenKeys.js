function findBrokenKeys(str, viollet) {
  console.log(str.length);
  console.log(viollet.length);
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] === viollet[i]) {
      continue;
    } else {
      obj[str[i]] = str[i];
    }
  }

  return Object.keys(obj);
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));

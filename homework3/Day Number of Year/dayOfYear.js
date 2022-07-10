function leepYear(str) {
  const dayArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const date = new Date(str);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let sum = day;
  // if (year % 4 == 0) {
  //   sum += 29;
  // }
  for (let i = 0; i < month - 1; i++) {
    if (year % 4 == 0) {
      dayArr[1] = 29;
    }
    sum += dayArr[i];
  }

  return sum;
}
console.log(leepYear("3/1/2004"));

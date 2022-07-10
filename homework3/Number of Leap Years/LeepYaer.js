function leepYear(str) {
  const dateArray = str.split("-");
  let counter = 0;
  for (let i = dateArray[0]; i <= dateArray[1]; i++) {
    let year = new Date(i, 1, 29);
    if (year.getMonth() !== 2) {
      counter++;
    }
  }
  return counter;
}
console.log(leepYear("1600-2000"));

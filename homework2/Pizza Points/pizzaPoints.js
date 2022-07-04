let customersObj = {
  Batman: [22, 30, 11, 17, 15, 52, 27, 12],
  "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
};
function pizzaPoints(obj, minNumber, minPrice) {
  let arr = [];
  for ([key, value] of Object.entries(obj)) {
    value = value.filter((val) => val > minPrice);
    if (value.length > minNumber) {
      arr.push(key);
    }
  }
  return arr;
}
console.log(pizzaPoints(customersObj, 5, 100));

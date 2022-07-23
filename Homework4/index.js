function sumNumberPow(num) {
  return [...("" + num)]
    .map((val) => +val)
    .reduce((aggr, val) => {
      aggr += Math.pow(val, 2);
      return aggr;
    }, 0);
}
function happyNumber(num) {
  if (num === 1) {
    return "happy num";
  } else if (num > 4) {
    return -1;
  }
  num = sumNumberPow(num);
  return happyNumber(num);
}
console.log(happyNumber(67));

function sumNumberPow(num) {
  return [...("" + num)]
    .map((val) => +val)
    .reduce((aggr, val) => {
      aggr += Math.pow(val, 2);
      return aggr;
    }, 0);
}
function happyNumber(num) {
  sum = sumNumberPow(num);
  if (sum === 1) {
    return "happy num";
  } else if (sum > 1 && sum <= 4) return -1;

  return happyNumber(sum);
}
console.log(happyNumber(12));

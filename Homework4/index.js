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
  console.log(num);
  if (sum === 1) {
    return true;
  } else if (sum > 1 && sum <= 4) return false;

  return happyNumber(sum);
}
console.log(happyNumber(139));

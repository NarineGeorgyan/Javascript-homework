let obj = {
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650,
};

function check_jewelry(price) {
  for ([key, value] of Object.entries(obj)) {
    if (value == price) {
      return `The most expensive one is the ${key}`;
    }
  }
  return false;
}
function mostExpensive(obj) {
  const priceArray = Object.values(obj);
  const price = priceArray.reduce((agg, price) => {
    if (agg > price) {
      return agg;
    }
    return price;
  }, 0);
  return check_jewelry.call(obj, price);
}
function getFirstChartToMakeUppercase(key) {
  key = key.split(" ");
  return key
    .map((val) => {
      return val.charAt(0).toUpperCase() + val.slice(1);
    })
    .join(" ");
}

console.log(mostExpensive(obj));

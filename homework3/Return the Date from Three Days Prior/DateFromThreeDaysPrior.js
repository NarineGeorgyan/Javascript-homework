const DateFromThreeDaysPrior = function (date) {
  let currentTime = date.getTime();
  let oneDay = 1000 * 60 * 60 * 24;
  let threeday = 3 * oneDay;
  let result = currentTime - threeday;
  let a = new Date(result).toLocaleString();

  console.log(a);
};

let date = new Date(2015, 5, 17);
DateFromThreeDaysPrior(date);

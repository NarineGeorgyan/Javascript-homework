function getDays(obj1, obj2) {
  return obj1.getTime() > obj2.getTime()
    ? Math.ceil((obj1.getTime() - obj2.getTime()) / (1000 * 60 * 60 * 24))
    : Math.ceil((obj2.getTime() - obj1.getTime()) / (1000 * 60 * 60 * 24));
}
console.log(
  getDays(new Date("December 29, 2018"), new Date("January 1, 2019"))
);

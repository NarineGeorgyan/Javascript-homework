const arr = [
  { name: "John", notes: [3, 5, 4] },
  { name: "Max", notes: [1, 4, 6] },
  { name: "Zygmund", notes: [1, 2, 3] },
  { name: "Zygmund", notes: [1] },
];
function getStudentsWithNamesAndTopNotes(arr) {
  return arr.map((obj, i) => {
    if (obj.notes.length > 0) {
      obj = {
        name: obj.name,
        topNote: obj.notes[i],
      };
      return { ...obj };
    } else {
      return { name: obj.name, topNote: 0 };
    }
  });
}
console.log(getStudentsWithNamesAndTopNotes(arr));
function getMaxValue(arr) {
  let newArray = [];
  arr.forEach((obj) => {
    let index1 = arr.findIndex((val) => val.name === "Zygmund");
    arr.splice(index1, 1);
    console.log(index1);
    newArray.push({
      name: obj.name,
      maxValue: obj.notes.reduce((acc, val) => (acc > val ? acc : val)),
    });
  });
  return newArray;
}
let result = getMaxValue(arr);
console.log(result);

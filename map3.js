//The following code takes an array of objects and creates a new array containing the newly reformatted objects.

let info = [
  { key: 1, value: "akhil"},
  { key: 2, value: "yochamp" },
  { key: 3, value: "yessss" },
];

let reformattedArray = info.map((obj) => {
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});
console.log(reformattedArray)
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

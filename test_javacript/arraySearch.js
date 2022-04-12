function numberOfItems(arr, item) {
  let count = 0;
  arr.forEach((el) => {
    if (typeof el === "object") {
      count += numberOfItems(el, item);
    } else {
      if (el === item) {
        count++;
      }
    }
  });
  return count;
}

var arr = [
  25,
  "apple",
  ["banana", "strawberry", "apple", 25, [25, "apple", [25]]],
];
console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));

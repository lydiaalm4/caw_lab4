const { first, last, joinStrings, chunk } = require('./exo2');
test("first() returns the first n elements", () => {
  expect(first([1, 2, 3, 4], 2)).toEqual([1, 2]);
});
test("first() returns [] when n <= 0", () => {
  expect(first([1, 2, 3], 0)).toEqual([]);
});
test("first() returns first element when n is null", () => {
  expect(first([10, 20, 30], null)).toBe(10);
});
test("last() returns the last n elements", () => {
  expect(last([1, 2, 3, 4], 2)).toEqual([3, 4]);
});
test("last() returns last element when n is null", () => {
  expect(last([5, 6, 7], null)).toBe(7);
});
test("last() returns [] when array is null", () => {
  expect(last(null, 2)).toEqual([]);
});
test("joinStrings() concatenates all strings", () => {
  expect(joinStrings(["Red", "Green", "White", "Black"]))
    .toBe("RedGreenWhiteBlack");
});
test("joinStrings() works with empty array", () => {
  expect(joinStrings([])).toBe("");
});
test("chunk() splits array into subarrays", () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([
    [1, 2],
    [3, 4],
    [5]
  ]);
});
test("chunk() works with size equal to array length", () => {
  expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
});
test("chunk() works with size larger than array", () => {
  expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
});

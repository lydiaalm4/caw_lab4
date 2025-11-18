const mean = require('./notation');
test("mean() calculates average of numbers", () => {
  expect(mean([100, 170, 7, 2, 47])).toBeCloseTo(65.2);
});
test("mean() works for simple arrays", () => {
  expect(mean([2, 4, 6, 8])).toBe(5);
});
test("mean() works for a single number", () => {
  expect(mean([10])).toBe(10);
});
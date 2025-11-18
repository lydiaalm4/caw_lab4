const exf = require('./echo');
test("exf prints a string n times", () => {
  console.log = jest.fn();     
  exf("hello", 3);
  expect(console.log).toHaveBeenCalledTimes(3);
  expect(console.log).toHaveBeenCalledWith("hello");
});
test("exf prints an empty string correctly", () => {
  console.log = jest.fn();
  exf("", 2);
  expect(console.log).toHaveBeenCalledTimes(2);
  expect(console.log).toHaveBeenCalledWith("");
});

test("exf does nothing when n = 0", () => {
  console.log = jest.fn();
  exf("test", 0);
  expect(console.log).toHaveBeenCalledTimes(0);
});

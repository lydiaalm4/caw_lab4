test("fileImport.js prints correct average", () => {
  console.log = jest.fn();
  require('./fileImport');
  const expected = (100 + 170 + 7 + 2 + 47) / 5;
  expect(console.log).toHaveBeenCalledWith(
    "Average =", expected
  );
});

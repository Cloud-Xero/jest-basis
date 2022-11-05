test("mock", () => {
  const f = jest.fn((v) => v * 2);
  const data = [2, 5];
  data.forEach(f);

  expect(f).toHaveBeenCalled();
  expect(f).toHaveBeenCalledTimes(2);
  expect(f).toHaveBeenCalledWith(5, 1, [2, 5]);
  expect(f).toHaveReturned();
  expect(f).toHaveReturnedTimes(2);
  expect(f).toHaveLastReturnedWith(10);
  expect(f).toHaveNthReturnedWith(1, 4);
  expect(f).toHaveNthReturnedWith(2, 10);
});

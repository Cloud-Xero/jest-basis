const obj = {
  twice: (a) => a * 2,
};

test("spy", () => {
  jest.spyOn(obj, "twice");
  const r = obj.twice(2);
  expect(r).toBe(4);
  expect(obj.twice).toBeCalled();
});

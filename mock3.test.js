test("mock", () => {
  const f = jest.fn();
  const data = [2, 5];
  data.forEach(f);
  console.log(f.mock);
});

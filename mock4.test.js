test("mock", () => {
  const f = jest.fn((v) => v * 2);
  const data = [2, 5];
  data.forEach(f);
  console.log(f.mock);
});

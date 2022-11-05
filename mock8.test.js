test("mock", () => {
  const f = jest.fn();
  f.mockImplementation((v) => v * -1);

  expect(f(1)).toBe(-1);
  expect(f(-5)).toBe(5);
});

test("mock", () => {
  const f = jest.fn();

  f.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

  console.log(f(), f(), f(), f());
});

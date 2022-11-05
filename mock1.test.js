jest.spyOn(console, "log");
test("spy", () => {
  console.log("hello");
  expect(console.log).toBeCalled();
});

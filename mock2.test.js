console.log = jest.fn();
test("mock", () => {
  console.log("hello");
  expect(console.log).toBeCalled();
});

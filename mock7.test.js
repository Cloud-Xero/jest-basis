test("mock", () => {
  const f = jest.fn();
  f.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter((num) => f(num));
  console.log(result); // [11] - resultの値
  console.log(f.mock.calls[0][0]); // 11 - １回目の引数
  console.log(f.mock.calls[1][0]); // 12 - ２回目の引数
});

function mustPositive(v) {
  return new Promise((resolve, reject) => {
    if (v > 0) {
      resolve(v);
    } else {
      reject(v);
    }
  });
}

test("promise pass test", () => {
  return mustPositive(3).then((v) => {
    expect(v).toBe(3);
  });
});

test("promise fail test", () => {
  expect.assertions(1);
  return mustPositive(-3).catch((e) => {
    return expect(e).toBe(-3);
  });
});

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
  return expect(mustPositive(3)).resolves.toBe(3);
});

test("promise fail test", () => {
  return expect(mustPositive(-3)).rejects.toBe(-3);
});

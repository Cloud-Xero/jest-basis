function mustPositive(v) {
  return new Promise((resolve, reject) => {
    if (v > 0) {
      resolve(v);
    } else {
      reject(v);
    }
  });
}

test("promise pass with async", async () => {
  const v = await mustPositive(3);
  expect(v).toBe(3);
});

test("promise fail with async", async () => {
  expect.assertions(1);
  try {
    await mustPositive(-3);
  } catch (error) {
    expect(v).toBe(-3);
  }
});

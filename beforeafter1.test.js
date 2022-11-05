const { Level } = require("level");
let db;

beforeEach(async () => {
  db = new Level("db");
  await db.put("student:1", JSON.stringify({ name: "Taro", age: 15 }));
  await db.put("student:2", JSON.stringify({ name: "Jiro", age: 13 }));
  await db.put("student:3", JSON.stringify({ name: "Hana", age: 11 }));
});

afterEach(async () => {
  await db.clear();
  await db.close();
});

test("get item", async () => {
  const v = await db.get("student:3");
  const d = JSON.parse(v);
  expect(d).toEqual({ name: "Hana", age: 11 });
});

test("del item", async () => {
  db.del("student:2");
  db.get("student:2").catch((v) => {
    expect(v.message).toMatch(/NotFound/);
  });
});

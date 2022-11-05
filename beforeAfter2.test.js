const { Level } = require("level");
let db;

beforeAll(async () => {
  db = new Level("db");
});

afterAll(async () => {
  await db.clear();
  await db.close();
});

beforeEach(async () => {
  await db.put("student:1", JSON.stringify({ name: "Taro", age: 15 }));
  await db.put("student:2", JSON.stringify({ name: "Jiro", age: 13 }));
  await db.put("student:3", JSON.stringify({ name: "Hana", age: 11 }));
});

afterEach(async () => {
  for await (const [key, value] of db.iterator()) {
    await db.del(key);
  }
});

test("get item", async () => {
  db.get("student:3").then((v) => {
    const d = JSON.parse(v);
    expect(d).toEqual({ name: "Hana", age: 11 });
  });
});

test("del item", async () => {
  db.del("student:2");
  db.get("student:2").catch((v) => {
    expect(v.message).toMatch(/NotFound/);
  });
});

const { Level } = require("level");
const db = new Level("db");

(async function () {
  await db.put("student:1", JSON.stringify({ name: "Taro", age: 15 }));
  await db.put("student:2", JSON.stringify({ name: "Jiro", age: 13 }));
  await db.put("student:3", JSON.stringify({ name: "Hana", age: 11 }));

  console.log("db.get:", await db.get("student:1"));

  for await (const [key, value] of db.iterator()) {
    console.log(key, value);
  }
})();

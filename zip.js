const addr = require("./zipmodule").getAddr;

async function test() {
  const r = await addr(2220012);
  console.log(r);
}

test();

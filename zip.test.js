const axios = require("axios");
const addr = require("./zipmodule").getAddr;

jest.mock("axios");

test("module mock", async () => {
  axios.get.mockResolvedValue({
    data: { results: [{ address1: "神奈川県" }] },
  });
  const r = await addr(220012);
  expect(r).toEqual("神奈川県");
});

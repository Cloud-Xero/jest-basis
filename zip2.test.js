const axios = require("axios");
const addr = require("./zipmodule").getAddr;

jest.mock("axios");

test("module mock", async () => {
  axios.get.mockImplementation((code) => {
    const s = code.split("=")[1];
    if (s.startsWith("1")) {
      return { data: { results: [{ address1: "東京都" }] } };
    } else if (s.startsWith("2")) {
      return { data: { results: [{ address1: "神奈川県" }] } };
    }
  });
  let r = await addr(1000001);
  expect(r).toEqual("東京都");

  r = await addr(2220012);
  expect(r).toEqual("神奈川県");
});

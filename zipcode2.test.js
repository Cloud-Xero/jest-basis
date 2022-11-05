const axios = require("axios");
test("zipcloud web-api test", () => {
  return axios
    .get("https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060")
    .then((res) => {
      expect(res.data.result[0].address1).toMatch("高知県");
    });
});

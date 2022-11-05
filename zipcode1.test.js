const https = require("https");

test("zipcloud web-api test", (done) => {
  https.get(
    "https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060",
    (resp) => {
      function callback(data) {
        try {
          expect(data).toMatch("千葉県");
          done();
        } catch (error) {
          done(error);
        }
      }
      let data = "";
      resp.on("data", (chunk) => (data += chunk));
      resp.on("end", () => {
        callback(data);
      });
    }
  );
});

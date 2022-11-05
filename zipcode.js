const https = require("https");

https.get(
  "https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060",
  (resp) => {
    let data = "";
    resp.on("data", (chunk) => (data += chunk));
    resp.on("end", () => console.log(data));
  }
);

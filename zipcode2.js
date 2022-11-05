const axios = require("axios");
axios
  .get("https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060")
  .then((res) => console.log(res.data));

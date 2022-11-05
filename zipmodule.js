const axios = require("axios");

exports.getAddr = async function (code) {
  const r = await axios.get(
    `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${code}`
  );
  return r.data.results[0].address1;
};

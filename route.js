const express = require("express");
const router = express.Router();

const { getdata } = require("./getdata.js");
try {
  router.get("/v1/getData", getdata);
} catch (err) {
  console.log(err);
}
module.exports = router;

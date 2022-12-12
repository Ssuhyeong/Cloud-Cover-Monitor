const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/Data", (req, res) => {
  db.query("select * from aidata", (err, data) => {
    if (err) {
      console.log("err");
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;

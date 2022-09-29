const express = require("express");
const router = express.Router();
const db = require("../config/db");
const util = require("util");

router.post("/onLogin", (req, res) => {
  // console.log(req.query.email);
  const useremail = req.query.email;

  db.query(
    "select email from account where email = ? ",
    [useremail],
    (err, data) => {
      if (err) throw err;
      else {
        if (data.length) {
          res.send("success");
        } else {
          res.send("fail");
        }
      }
    }
  );
});

module.exports = router;

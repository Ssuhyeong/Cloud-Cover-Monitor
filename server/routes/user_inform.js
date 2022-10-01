const express = require("express");
const router = express.Router();
const db = require("../config/db");
const util = require("util");
const jwt = require("jsonwebtoken");

var secretKey = "SeCrEtKeYfOrHaShInG";

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
          const acessToken = jwt.sign(
            {
              useremail,
            },
            secretKey,
            {
              expiresIn: "1h",
            }
          );
          res.send(acessToken);
        } else {
        }
      }
    }
  );
});

module.exports = router;

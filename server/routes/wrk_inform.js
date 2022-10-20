const express = require("express");
const router = express.Router();
const { PythonShell } = require("python-shell");

router.post("/wrkData", (req, res) => {
  let data = {};
  let options = {
    scripPath: "/",
    args: req.query.ip,
  };

  PythonShell.run("main.py", options, (err, data) => {
    if (err) throw err;
    if (data) {
      data = JSON.parse(data[0]);
      console.log(data);
      res.send(data)
    }
  });

});

module.exports = router;

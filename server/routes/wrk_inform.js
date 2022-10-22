const express = require("express");
const router = express.Router();
const { PythonShell } = require("python-shell");
const db = require("../config/db");

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
      // res.send(data);
      // db.getConnection(function (err) {
      //   if (err) throw err;
      //   var sql =
      //     "INSERT INTO wrkdata(lat_avg, lat_stdev, lat_max, req_avg, req_stdev, req_max, tot_requests, tot_duration, data_read) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);";
      //   var values = [
      //     data.lat_avg,
      //     data.lat_stdev,
      //     data.lat_max,
      //     data.req_avg,
      //     data.req_stdev,
      //     data.req_max,
      //     data.tot_requests,
      //     data.tot_duration,
      //     data.read,
      //   ];
      //   db.query(sql, values, function (err, result) {
      //     if (err) throw err;
      //     console.log("insert success");
      //   });
      // });
    }
  });
});

module.exports = router;

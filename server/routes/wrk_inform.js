const express = require("express");
const router = express.Router();
const { PythonShell } = require("python-shell");
const db = require("../config/db");
const schedule = require("node-schedule");

var num = 0;

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
      db.getConnection(function (err) {
        if (err) throw err;
        var sql =
          "INSERT INTO wrkdata(lat_avg, lat_stdev, lat_max, req_avg, req_stdev, req_max, tot_requests, tot_duration, data_read) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);";
        var values = [
          data.lat_avg,
          data.lat_stdev,
          data.lat_max,
          data.req_avg,
          data.req_stdev,
          data.req_max,
          data.tot_requests,
          data.tot_duration,
          data.read,
        ];
        db.query(sql, values, function (err, result) {
          if (err) throw err;
          console.log("insert success");
        });
      });
    }
  });
});

// schedule.scheduleJob({ second: 1 }, function () {
//   console.log("10초에 한번씩 실행됩니다. : " + num);
//   num++;
// });

module.exports = router;
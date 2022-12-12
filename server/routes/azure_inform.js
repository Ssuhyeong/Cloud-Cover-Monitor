const express = require("express");
const router = express.Router();
const { PythonShell } = require("python-shell");
const db = require("../config/db");
const schedule = require("node-schedule");
const rule = new schedule.RecurrenceRule();

// schedule.scheduleJob({hour: [17], minute: [56, 57], dayOfWeek: [0, 1, 2, 3, 4, 5, 6]}, () => {
schedule.scheduleJob("*/3 * * * *", () => {
  var newDate = new Date();

  console.log("azure insert");
  let options = {
    scripPath: "/",
    args: "azure",
  };

  PythonShell.run("main.py", options, (err, data) => {
    if (err) throw err;
    if (data) {
      data = JSON.parse(data[0]);
      // console.log(data);
      db.getConnection(function (err, conn) {
        if (err) throw err;
        var sql =
          "INSERT INTO azuredata(lat_avg, lat_stdev, lat_max, req_avg, req_stdev, req_max, tot_requests, tot_duration, data_read, time) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
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
          newDate,
        ];
        db.query(sql, values, function (err, result) {
          if (err) throw err;
          console.log("insert success");
        });
        conn.release();
      });
    }
  });
});

module.exports = router;

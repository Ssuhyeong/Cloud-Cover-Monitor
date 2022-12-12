const express = require("express");
const router = express.Router();
const { PythonShell } = require("python-shell");
const db = require("../config/db");
const schedule = require("node-schedule");
const rule = new schedule.RecurrenceRule();

schedule.scheduleJob("*/10 * * * *", () => {
  var newDate = new Date();

  console.log("ai insert");
  let options = {
    scripPath: "/",
    args: "ai",
  };

  PythonShell.run("main.py", options, (err, data) => {
    if (err) throw err;
    if (data) {
      data = JSON.parse(data[0]);
      db.getConnection(function (err, conn) {
        if (err) throw err;
        var sql =
          "INSERT INTO aidata(aws_ai_data, azure_ai_data, gcp_ai_data, time) VALUES(?, ?, ?, ?);";
        var values = [
          data.aws_ai_data,
          data.azure_ai_data,
          data.gcp_ai_data,
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

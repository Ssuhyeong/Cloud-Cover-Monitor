const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123123',
  database: 'cloud_monitor'
})

module.exports = db;
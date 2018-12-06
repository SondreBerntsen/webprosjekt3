const express = require('express');
var db = require('./db');
const anniversary = express.Router();

anniversary.get("/", (req, res) => {
  let QUERY = `SELECT * FROM anniversary`;

  db.query(QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
          data: results
      });
    }
  });
});

anniversary.get("/timeline", (req, res) => {
  let QUERY = `SELECT * FROM review`;

  db.query(QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
          data: results
      });
    }
  });
});

module.exports = anniversary
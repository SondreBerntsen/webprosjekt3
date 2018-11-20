const express = require("express");
var db = require("./db");
const programme = express.Router();

programme.post("/", (req, res) => {
  const {year} = req.body

  let PROGRAMME_SQL = `SELECT events.id, events.title, events.time, events.payment_link, events.date, events.price, events.v_id, venues.address FROM events, venues WHERE venues.id=events.v_id AND YEAR(events.date)=${year} ORDER BY events.date`;

  db.query(PROGRAMME_SQL, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
});

module.exports = programme;

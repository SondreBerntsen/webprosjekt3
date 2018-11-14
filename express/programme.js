const express = require('express');
const cors = require("cors");
var db = require('./db');
const programme = express.Router()
programme.use(cors())

programme.get('/', (req, res) => {
  let year = 2018
  let EVENTS_SQL = `SELECT events.id, events.title, events.time, events.date, events.price, events.v_id, venues.address FROM events, venues WHERE venues.id=events.v_id AND YEAR(events.date)=${year} ORDER BY events.date`

  db.query(EVENTS_SQL, (err, results) => {
    if(err) throw err
    return res.json({ data: results })
  })
});

module.exports = programme
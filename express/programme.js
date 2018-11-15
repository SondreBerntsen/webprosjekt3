const express = require('express');
var db = require('./db');
const programme = express.Router()

programme.get('/', (req, res) => {
  let year = 2018
  let PROGRAMME_SQL = `SELECT events.id, events.title, events.time, events.date, events.price, events.v_id, venues.address FROM events, venues WHERE venues.id=events.v_id AND YEAR(events.date)=${year} ORDER BY events.date`

  db.query(PROGRAMME_SQL, (err, results) => {
    if(err) throw err
    return res.json({ data: results })
  })
});

module.exports = programme
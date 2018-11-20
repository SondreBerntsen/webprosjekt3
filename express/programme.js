const express = require("express");
var db = require("./db");
const programme = express.Router();

programme.post("/", (req, res) => {
  const {year} = req.body

  let SELECT = `SELECT events.id, events.title, events.time, events.payment_link, events.date, events.price, events.v_id, venues.address FROM events, venues WHERE venues.id=events.v_id AND YEAR(events.date)=${year} ORDER BY events.date`;

  db.query(SELECT, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
});

programme.post('/update', (req, res) => {
  const {id, title, time, date, price, venue} = req.body

  let UPDATE = `
    UPDATE events
    SET 
      title = '${title}', 
      time =  ${time},
      date= STR_TO_DATE(${date}, %d/%m/%y), 
      price = ${price}, 
      v_id = ${venue}
    WHERE id = ${title}
  `
})

module.exports = programme;

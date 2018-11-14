const express = require('express');
const cors = require("cors");
const db = require('./db');

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send('Not sure what happened here')
});

app.get('/programme', (req, res) => {
  let year = 2018
  let EVENTS_SQL = `SELECT events.id, events.title, events.time, events.date, events.price, events.v_id, venues.address FROM events, venues WHERE venues.id=events.v_id AND YEAR(events.date)=${year}`

  db.query(EVENTS_SQL, (err, results) => {
    if(err) throw err
    return res.json({ data: results })
  })
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
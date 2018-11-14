const express = require('express');
const cors = require("cors");
var db = require('./db');

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("go to /events to se result");
});

//Gets all events in a given year
app.get("/events", (req, res) => {
    const { year } = req.query;
    const SELECT_ALL_EVENTS_QUERY = `SELECT id, title, thumbnail_path FROM events where year(date)='${year}'`;
    db.query(SELECT_ALL_EVENTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: results
            });
        }
    });
});

const port = 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
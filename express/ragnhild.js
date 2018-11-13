const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
var db = require('./db');

const app = express();

const SELECT_ALL_EVENTS_QUERY = 'SELECT * FROM events';
// Create connection


app.use(cors());

app.get("/", (req, res) => {
    res.send("go to /events to se result");
});
app.get("/events", (req, res) => {
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
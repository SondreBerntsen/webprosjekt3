const express = require('express');
const cors = require("cors");
var db = require('./db');
const events = express.Router();
events.use(cors());

//Gets all events in a given year
events.get("/", (req, res) => {
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

module.exports = events
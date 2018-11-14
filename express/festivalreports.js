const express = require('express');
var db = require('./db');
const festivalreports = express.Router();


const SELECT_ALL_FESTIVAL_REPORTS_QUERY = "SELECT * FROM festival_reports";




festivalreports.get("/", (req, res) => {
    db.query(SELECT_ALL_FESTIVAL_REPORTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: results
            });
        }
    });
});

module.exports = festivalreports

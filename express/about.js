const express = require('express');
var db = require('./db');
const about = express.Router();

const SELECT_ALL_GENERAL_QUERY = "SELECT * FROM general";

about.get("/", (req, res) => {
    db.query(SELECT_ALL_GENERAL_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: results
            });
        }
    });
});

module.exports = about

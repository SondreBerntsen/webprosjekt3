const express = require('express');
var db = require('./db');
const venues = express.Router();

venues.get("/", (req, res) => {
    const SELECT_VENUES_QUERY = `SELECT id, address, capacity FROM venues`
    db.query(SELECT_VENUES_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(results);
        }
    });
});

module.exports = venues
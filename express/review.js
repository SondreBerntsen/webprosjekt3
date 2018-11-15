const express = require('express');
var db = require('./db');
const review = express.Router();


review.get("/", (req, res) => {
    const { year } = req.query;
    const SELECT_REVIEW_QUERY = `SELECT id, year, text FROM review where year='${year}'`;
    db.query(SELECT_REVIEW_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(results);
        }
    });
});

module.exports = review
const express = require('express');
var db = require('./db');
const home = express.Router();

//Gets all home in a given year
home.get("/", (req, res) => {
    const { year } = req.query;
    const query = `SELECT `;
    /*
    db.query(query, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: results
            });
        }
    });
    */
});

module.exports = home
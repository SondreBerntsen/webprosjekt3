const express = require('express');
var db = require('./db');
const partners = express.Router();

const SELECT_ALL_PARTNERS_QUERY = "SELECT * FROM partners";



partners.get("/", (req, res) => {
    db.query(SELECT_ALL_PARTNERS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: results
            });
        }
    });
});


module.exports = partners

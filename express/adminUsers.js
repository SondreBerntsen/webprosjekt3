const express = require('express');
var db = require('./db');
const adminUsers = express.Router();

//Gets all events in a given year
adminUsers.get("/", (req, res) => {
    const SELECT_ALL_USERS_QUERY = `SELECT * FROM users`;
    db.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(results);
        }
    });
});

module.exports = adminUsers
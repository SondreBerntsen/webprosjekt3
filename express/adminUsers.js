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
adminUsers.post("/add", (req, res) => {
    const { name, email, password, type } = req.body
    console.log(req.body);
    const INSERT_QUERY = `
      INSERT INTO users (name, email, password, type) 
      VALUES ('${name}', '${email}', '${password}', '${type}')`
    db.query(INSERT_QUERY, (err, results) => {
        if (err) {
            return res.status(400).send("Database not updated");
        } else {
            return res.json(results);
        }
    });
});

adminUsers.post("/delete", (req, res) => {
    const { id } = req.body
    const DELETE_QUERY = `DELETE FROM users WHERE id = ${id}`
    db.query(DELETE_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(results);
        }
    });
});

module.exports = adminUsers
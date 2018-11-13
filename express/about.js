const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
var db = require('./db');

const app = express();

const SELECT_ALL_GENERAL_QUERY = 'SELECT * FROM general';
// Create connection


app.use(cors());

app.get("/", (req, res) => {
    res.send("go to /about to se result");
});
app.get("/about", (req, res) => {
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

const port = 4100;

app.listen(port, () => console.log(`Server about started on port ${port}`));
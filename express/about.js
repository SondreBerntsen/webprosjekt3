const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
var db = require("./db");

const app = express();

const SELECT_ALL_GENERAL_QUERY = "SELECT * FROM general";
const SELECT_ALL_PARTNERS_QUERY = "SELECT * FROM partners";
const SELECT_ALL_FESTIVAL_REPORTS_QUERY = "SELECT * FROM festival_reports";
// Create connection


app.use(cors());

app.get("/", (req, res) => {
    res.send("go to /about to se result");
});
app.get("/generalinfo", (req, res) => {
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

app.get("/partners", (req, res) => {
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

app.get("/festivalreports", (req, res) => {
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

const port = 4100;

app.listen(port, () => console.log(`Server about started on port ${port}`));

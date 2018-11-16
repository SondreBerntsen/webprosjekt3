const express = require('express');
var db = require('./db');
const posts = express.Router();

posts.get("/", (req, res) => {
    const { year } = req.query;
    let SELECT_ALL_POSTS_QUERY;
    if (year) {
        SELECT_ALL_POSTS_QUERY = `SELECT id, title, text, date FROM posts WHERE year(date)='${year}'`;
    } else {
        SELECT_ALL_POSTS_QUERY = `SELECT id, title, text, date FROM posts WHERE year(date)=2018`;
    }

    db.query(SELECT_ALL_POSTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(results);
        }
    });
});

module.exports = posts
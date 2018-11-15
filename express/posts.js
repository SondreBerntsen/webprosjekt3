const express = require('express');
var db = require('./db');
const posts = express.Router();

posts.get("/", (req, res) => {
    const { year } = req.query;
    const SELECT_ALL_POSTS_QUERY = `SELECT id, title, text, img_path, date FROM posts WHERE year(date)='${year}'`;
    db.query(SELECT_ALL_POSTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(results);
        }
    });
});

module.exports = posts
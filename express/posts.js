const express = require('express');
var db = require('./db');
const posts = express.Router();

posts.get("/", (req, res) => {
    const { year } = req.query;
    let SELECT_ALL_POSTS_QUERY;
    //If year is specified, get the posts from that year
    if (year) {
        SELECT_ALL_POSTS_QUERY = `SELECT id, title, text, date FROM posts WHERE year(date)='${year}'`;
    } else {//If year is not specified get the posts from the most recent year
        SELECT_ALL_POSTS_QUERY = `SELECT id, title, text, date FROM posts WHERE year(date)=(SELECT MAX(year(date)) FROM posts)`;
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
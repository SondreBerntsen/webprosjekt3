const express = require("express");
var db = require("./db");
const scheduledLiveStream = express.Router();

scheduledLiveStream.get("/", (req, res) => {
  const { id } = req.query;
  const SELECT_SCHEDULED_LIVE_STREAM_QUERY = `SELECT events.id, events.title, events.text, events.time, events.date FROM events where events.livestream=1`;
  db.query(SELECT_SCHEDULED_LIVE_STREAM_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

module.exports = scheduledLiveStream;

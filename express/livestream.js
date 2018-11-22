const express = require("express");
var db = require("./db");
const livestreamID = express.Router();

//Gets the YouTube API KEY from table General in db
livestreamID.get("/", (req, res) => {
  const SELECT_LIVE_STREAM_ID_QUERY = `SELECT id, livestream_id, YouTube_API_KEY FROM general`;

  db.query(SELECT_LIVE_STREAM_ID_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

module.exports = livestreamID;

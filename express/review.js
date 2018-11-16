const express = require('express')
var db = require('./db')
const review = express.Router()


review.get("/", (req, res) => {
  const { year } = req.query
  var json = {}

  const review_query = _ => {
   let QUERY = `SELECT id, year, text FROM review where year='${year}'`
    db.query(QUERY, (err, results) => {
      if (err) {
        return res.send(err)
      } else {
        json.reviewData = results
        slider_query()
      }
    })
  }
  const slider_query = _ => {
    let QUERY = `SELECT * FROM images WHERE r_id = (SELECT id FROM review WHERE year = '${year}')`
    db.query(QUERY, (err, results2) => {
      if (err) {
        return res.send(err)
      } else {
        json.slides = results2
        recordings_query()
      }
    })
  }
  const recordings_query = _ => {
    let QUERY = `SELECT * FROM video_links WHERE r_id = (SELECT id FROM review WHERE year = '${year}')`
    db.query(QUERY, (err, results3) => {
      if (err) {
        return res.send(err)
      } else {
        json.recordings = results3
        return res.send({data: json})
      }
    })
  }
  review_query()
});

module.exports = review
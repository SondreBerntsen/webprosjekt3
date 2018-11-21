const express = require('express');
var db = require('./db');
const event = express.Router();
const fileUpload = require('express-fileupload');

event.use(fileUpload());

event.get("/", (req, res) => {
    const { id } = req.query;
    const SELECT_EVENTDATA_QUERY = `SELECT events.id, events.title, events.text, events.time, events.price, events.date, venues.address, events.payment_link, events.youtube_link FROM events, venues where venues.id=events.v_id AND events.id='${id}'`;
    db.query(SELECT_EVENTDATA_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(results);
        }
    });
});

event.post("/add", (req, res) => {
    console.log('hallo add event express');
    let imgFile = req.files.img;
    const INSERT_QUERY = `
      INSERT INTO events (title, text, time, date, price, youtube_link, payment_link) 
      VALUES ('${req.body.title}', '${req.body.text}', '${req.body.time}', '${req.body.date}', ${req.body.price}, '${req.body.youtube_link}', '${req.body.payment_link}' )`
    db.query(INSERT_QUERY, (err, results) => {
        if (err) {
            return res.status(400).send("Database not updated");
        } else {
            console.log(results.insertId);
            imgFile.mv(`${__dirname}/../react-app/src/uploadedImg/eventImg/${results.insertId}`, function (err) {
                if (err) {
                    return res.status(500).send(err);
                }
                return res.json(results);
            });
        }
    });
});

module.exports = event
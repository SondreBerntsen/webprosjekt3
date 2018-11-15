const express = require("express");
var db = require("./db");
const contactpersons = express.Router();

const SELECT_ALL_CONTACT_PERSONS_QUERY = "SELECT * FROM contact_persons";

contactpersons.get("/", (req, res) => {
  db.query(SELECT_ALL_CONTACT_PERSONS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

module.exports = contactpersons;

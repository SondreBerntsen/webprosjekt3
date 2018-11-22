const express = require("express");
var db = require("./db");
const about = express.Router();

const SELECT_ALL_GENERAL_QUERY =
  "SELECT id, pitch, dateHeader_txt, address, vision_txt, partner_txt_official, partner_txt_private, organization_txt FROM general";

about.get("/", (req, res) => {
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

module.exports = about;

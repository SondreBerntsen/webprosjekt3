const express = require("express");
var db = require("./db");
const contactAdress = express.Router();

const SELECT_ALL_CONTACT_ADRESS_QUERY =
  "SELECT city, area_code, building_name, adress, organization_type, name FROM general";

contactAdress.get("/", (req, res) => {
  db.query(SELECT_ALL_CONTACT_ADRESS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

module.exports = contactAdress;

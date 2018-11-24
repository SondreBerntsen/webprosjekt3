const express = require("express");
var db = require("./db");
const contactPersons = express.Router();

contactPersons.get("/", (req, res) => {
  const SELECT_QUERY = "SELECT * FROM contact_persons";
  db.query(SELECT_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

contactPersons.post("/update", (req, res) => {
  let { id, name, email, role, phone } = req.body;
  let UPDATE_QUERY = `UPDATE contact_persons 
    SET 
      name = '${name}',
      email='${email}',
      role='${role}',
      phone='${phone}'
    WHERE
      id = '${id}'
  `;
  db.query(UPDATE_QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
});

module.exports = contactPersons;

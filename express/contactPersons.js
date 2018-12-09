const express = require("express");
var db = require("./db");
const contactPersons = express.Router();
const fileUpload = require("express-fileupload");

contactPersons.use(fileUpload());

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

contactPersons.post("/updateWithPicture", (req, res) => {
  let imgFile = req.files.img;
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
    if (err) {
      console.log(err);
      return res.status(400).send("Database not updated");
    } else {
      imgFile.mv(
        `${__dirname}/../react-app/src/uploadedImg/contactPersonImg/${id}`,
        function(err) {
          if (err) {
            return res.status(500).send(err);
          }
          return res.json(results);
        }
      );
    }
  });
});

contactPersons.post("/updateWithoutPicture", (req, res) => {
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
    if (err) {
      console.log(err);
      return res.status(400).send("Database not updated");
    } else {
      return res.json(results);
    }
  });
});

module.exports = contactPersons;

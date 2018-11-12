const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

const app = express();

const SELECT_ALL_EVENTS_QUERY = 'SELECT * FROM events';
// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'drammensacred'
})

// Connect
db.connect((err) => {
    if (err) {
        return err;
    } else {
        console.log('Dette gikk jo');
    }
});


app.use(cors());


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //Whichever port my react app is running on
    res.header('Access-Control-Allow-Methods', 'GET'); //Probably safe to add some more since only react port is allowed access
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.get("/", (req, res) => {
    res.send("go to /events to se result");
});
app.get("/events", (req, res) => {
    db.query(SELECT_ALL_EVENTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: results
            });
        }
    });
});

const port = 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
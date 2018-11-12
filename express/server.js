const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //Whichever port my react app is running on
  res.header('Access-Control-Allow-Methods', 'GET'); //Probably safe to add some more since only react port is allowed access
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const SELECT_ALL_EVENTS_QUERY = 'SELECT * FROM events';

// Create connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'drammensacred'
})

// Connect
db.connect((err) => {
  if(err){
    return err;
  }
});

app.get('/', (req, res) => {
    res.send('Idk what goes here')
});

app.get('/events', (req, res) => {

});
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
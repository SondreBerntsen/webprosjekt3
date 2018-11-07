const express = require('express');
const app = express();
const mysql = require('mysql');

const SELECT_ALL_EVENTS_QUERY = 'SELECT * FROM events';

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'drammensacred'
})

app.get('/', (req, res) => {
    res.send('Idk what goes here')
});

app.get('/events', (req, res) => {

});
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
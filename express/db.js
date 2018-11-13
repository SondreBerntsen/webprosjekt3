const express = require('express');
const mysql = require('mysql');



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'drammensacred'
})

db.connect((err) => {
    if (err) {
        return err;
    } else {
        console.log('Dette gikk jo');
    }
});


module.exports = db;
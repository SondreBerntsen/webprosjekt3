const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
var db = require('./db');

const app = express();
app.use(cors());


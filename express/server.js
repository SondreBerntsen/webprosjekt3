const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

var programme = require('./programme')
var events = require('./events')
var partners = require('./partners')
var festivalreports = require('./festivalreports')
var about = require('./about')
var review = require('./review')

app.get("/", (req, res) => {
  res.send("jille greiå");
});

app.use('/programme', programme)
app.use('/events', events)
app.use('/partners', partners)
app.use('/festivalreports', festivalreports)
app.use('/about', about)
app.use('/review', review)

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
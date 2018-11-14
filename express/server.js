const express = require('express');
const app = express();

var programme = require('./programme')
var events = require('./events')

app.get("/", (req, res) => {
  res.send("jille greiå");
});

app.use('/programme', programme)
app.use('/events', events)

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
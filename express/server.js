const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

var navbar = require("./navbar");
var home = require("./home")
var programme = require("./programme");
var events = require("./events");
var partners = require("./partners");
var festivalreports = require("./festivalreports");
var about = require("./about");
var review = require("./review");
var contactpersons = require("./contactpersons");
var event = require("./event")

app.get("/", (req, res) => {
  res.send("jille greiå");
});

app.use("/navbar", navbar);
app.use("/home", home);
app.use("/programme", programme);
app.use("/events", events);
app.use("/partners", partners);
app.use("/festivalreports", festivalreports);
app.use("/about", about);
app.use("/review", review);
app.use("/contactpersons", contactpersons);
app.use("/event", event);

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

var navbar = require("./navbar");
var home = require("./home");
var programme = require("./programme");
var events = require("./events");
var partners = require("./partners");
var festivalreports = require("./festivalreports");
var about = require("./about");
var review = require("./review");
var contactPersons = require("./contactPersons");
var event = require("./event");
var posts = require("./posts");
var newsArticle = require("./newsArticle");
var newsYearList = require("./newsYearList");
var scheduledLiveStream = require("./scheduledLiveStream");
var contactAdress = require("./contactAdress");
var venues = require("./venues");
var eventList = require("./eventList");
var eventYearList = require("./eventYearList");

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
app.use("/contactPersons", contactPersons);
app.use("/event", event);
app.use("/posts", posts);
app.use("/newsArticle", newsArticle);
app.use("/newsYearList", newsYearList);
app.use("/scheduledLiveStream", scheduledLiveStream);
app.use("/contactAdress", contactAdress);
app.use("/venues", venues);
app.use("/eventList", eventList);
app.use("/eventYearList", eventYearList);

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
const path = require('path');
//var axios = require("axios");


// require models
var db = require("./models");

var PORT = 3000;

// initialize express
var app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// routes

const scrape = require("./routes/scrap.js");
const handlebars = require("./routes/handlebars.js")

app.use("/", scrape);
app.use("/", handlebars);

// express handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "handlebars");

// static directory
app.use(express.static("public"));


// connect to mongo database
mongoose.connect("mongodb://localhost/scraper");

// start server
app.listen(PORT, function () {
	console.log("App running on port " + PORT + "!");
});
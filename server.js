var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
const path = require('path');
var axios = require("axios");



var db = require("./models");

var PORT = 3000;


var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));



var scrape = require("./routes/scrap.js");
var handlebars = require("./routes/handlebars.js")

app.use("/", scrape);
app.use("/", handlebars);


var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "handlebars");


app.use(express.static("public"));



mongoose.connect("mongodb://localhost/scraper");




app.listen(PORT, function () {
	console.log("App running on port " + PORT + "!");
});
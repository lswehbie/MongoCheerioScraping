
//var axios = require("axios");
var express = require("express");
var router = express.Router();
var db = require("../models");


router.get("/scrape", function (req, res) {

  axios.get("http://www.nytimes.com/").then(function (response) {
   
    var $ = cheerio.load(response.data);


    $("h2.story-heading").each(function (i, element) {
      
      var result = {};

      
      result.headline = $(element).find("h2.headline").text();
      result.summary = $(element).find("p.summary").text();
      result.URL = $(element).children("a").attr("href");

      if (!result.summary == "") {
        db.Article.create(result)
          .then(dbArticle => {
            console.log(dbArticle);
          }).catch(err => {
            return res.json(err);
          });
      }
    });

    console.log("success!");
  });
});


router.get("/articles", (req, res) => {
  db.Article.find({})
    .then(dbArticle => {
      res.json(dbArticle);
    }).catch(err => {
      res.json(err);
    });
});

module.exports = router;


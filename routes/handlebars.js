var express = require('express');
var router = express.Router();
var db = require("../models");

// render index.handlebars
router.get("/", (req, res) => {
    db.Article.find().sort({ _id: 1 })
        .exec((err, data) => {
            if (err) {
                console.log(err);
            } else {
                let handlebarsObj = { articles: data };
                res.render("index", handlebarsObj);
            }
        });
});

module.exports = router; 
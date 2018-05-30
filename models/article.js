var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  headline: {
    type: String,
    trim: true
  },

  summary: {
    type: String,
    trim: true
  },

  URL: {
    type: String,
    trim: true
  }

 
});

var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;
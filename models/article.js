var mongoose = require("mongoose");

// save a reference to the Schema constructor
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

// this creates the model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;
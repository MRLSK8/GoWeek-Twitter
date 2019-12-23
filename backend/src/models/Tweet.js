const mogoose = require('mongoose');

// Schema which the data base will use!
const TweetSchema = new mogoose.Schema({
  author: String,
  content: String,
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Schema Model!
module.exports = mogoose.model('Tweet', TweetSchema);

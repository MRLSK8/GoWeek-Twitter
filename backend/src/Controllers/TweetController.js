const Tweet = require('../models/Tweet');

module.exports = {
  async index(req, res) {
    const tweets = await Tweet.find({}).sort('-creteadAt');

    return res.json(tweets);
  },

  async store(req, res) {
    const tweet = await Tweet.create(req.body);
    // This emit a message to every user connected to the app!
    req.io.emit('tweet', tweet);

    return res.json(tweet);
  },

  async delete(req, res) {
    await Tweet.deleteOne({_id: req.params.id});

    return res.json("Tweet deleted!");
  },

  async uptade(req, res) {
    await Tweet.updateOne({_id: req.params.id}, {author: req.body.author, content: req.body.content});

    return res.json('Tweet updated!');
  },
};

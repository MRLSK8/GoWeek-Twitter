const express = require('express');
const routes = express.Router();

// importing the controllers
const TweetController = require('./Controllers/TweetController');
const LikeController = require('./Controllers/LikeController');

// All routes
routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
routes.delete('/tweets/:id', TweetController.delete);
routes.put('/tweets/:id', TweetController.uptade);
routes.post('/likes/:id', LikeController.store);

// Exporting all routes
module.exports = routes;

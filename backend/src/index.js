const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3333;
const server = require('http').Server(app);
const io = require('socket.io')(server);
// This is used to let others application access this database!
const cors = require('cors');

// Connecting to the data base!
mongoose.connect(
  'mongodb+srv://goweek:goweek@cluster0-mge5c.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// This is a middleware!
// This must be used to let all aplication see the variable "io"
app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());
// This is needed to allow us send and get json content!
app.use(express.json());
// Using the routes we created!
app.use(require('./routes'));

server.listen(port, () => {
  console.log('Server runing on port: ', port);
});

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3333;

mongoose.connect(
  'mongodb+srv://goweek:goweek@cluster0-mge5c.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(express.json())
app.use(require('./routes'));

app.listen(port, () => {
  console.log('Server runing on port: ', port);
});

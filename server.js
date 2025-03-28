const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongodb = require('./data/databaseb');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5500;

app.use(bodyParser.json()); // For parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.use('/', routes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server is running on port http://0.0.0.0:${port}`);
    });
  }
});
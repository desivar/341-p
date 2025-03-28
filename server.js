const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello World from root!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
const express = require('express');
const app = express();
const env = require('./config/environment');
const port = env.port;

const db = require('./config/mongoose');

// Use express route
app.use(express.json());
app.use('/', require('./routes'));
// Set up view engine
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server ${err}`);
  }
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');
// set form encoded
app.use(express.urlencoded({ extended: true }));
// Use express route
app.use('/', require('./routes'));
// Set up view engine
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server ${err}`);
  }
  console.log(`Server is running on port ${port}`);
});

const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://mongo:5F6rSINN5FZbkTlTEIdy@containers-us-west-171.railway.app:6916'
);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to mongodb'));

db.once('open', function () {
  console.log('connected to database');
});

module.exports = db;

const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://mongo:a9imEYj1Gd1XGVd9zozv@containers-us-west-178.railway.app:6535'
);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to mongodb'));

db.once('open', function () {
  console.log('connected to database');
});

module.exports = db;

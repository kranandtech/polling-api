const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://polling:polling@cluster0.rv87gwg.mongodb.net/?retryWrites=true&w=majority'
);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to mongodb'));

db.once('open', function () {
  console.log('connected to database');
});

module.exports = db;

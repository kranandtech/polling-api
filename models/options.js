const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    votes: {
      type: String,
    },
    link_to_vote: {
      type: String,
    },
  },
  { timestamps: true }
);

const Option = mongoose.model('Options', optionSchema);

module.exports = Option;

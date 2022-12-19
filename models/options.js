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
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'questions',
    },
  },
  { timestamps: true }
);

const Option = mongoose.model('Options', optionSchema);

module.exports = Option;

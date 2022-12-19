const Question = require('../../../models/questions');
const Option = require('../../../models/options');
const env = require('../../../config/environment');

// Create a question
module.exports.createQuestion = async function (req, res) {
  try {
    const question = await Question.create(req.body);

    if (question) {
      return res.status(201).json('Question created');
    }
  } catch (err) {
    return res.status(404).json({});
  }
};
// Create an Option
module.exports.createOption = async function (req, res) {
  try {
    const question = await Question.findById(req.params.id);

    if (question) {
      const option = await Option.create({
        text: req.body.text,
        question: req.params.id,
        votes: req.body.votes,
      });
      const optionCreated = await Option.findById(option._id);
      link_to_vote = env.server + option._id + '/add_vote';
      optionCreated.link_to_vote = link_to_vote;
      optionCreated.save();
      question.options.push(option._id);
      question.save();
      if (option) {
        return res.status(201).json('Option created');
      }
    } else {
      return res.status(404).json({});
    }
  } catch (err) {
    return res.status(404).json({});
  }
};
// Delete a question
module.exports.deleteQuestion = async function (req, res) {
  try {
    let question = await Question.findById(req.params.id);
    if (question) {
      question.remove();
      await Option.deleteMany({ question: req.params.id });
      return res.status(200).json('Question deleted along with options');
    }
  } catch (err) {
    return res.status(404).json({});
  }
};
// List a question along with options
module.exports.listQuestion = async function (req, res) {
  try {
    const pollingData = await Question.findById(req.params.id).populate({
      path: 'options',
      model: Option,
    });
    return res.status(200).json({ pollingData });
  } catch (err) {
    return res.status(404).json({});
  }
};

const Question = require('../../../models/questions');
const Option = require('../../../models/options');
// Delete an option
module.exports.deleteOption = async function (req, res) {
  try {
    let option = await Option.findById(req.params.id);
    if (option) {
      let question = await Question.findById(option.question);
      question.options.pull(option._id);
      question.save();
      option.remove();

      return res.status(200).json('del');
    }
  } catch (err) {
    return res.status(404).json({});
  }
};
// Add vote to an option
module.exports.addVote = async function (req, res) {
  try {
    let option = await Option.findById(req.params.id);
    if (option) {
      option.votes = parseInt(option.votes) + 1;
      option.save();

      return res.status(200).json('Vote added');
    }
  } catch (err) {
    return res.status(404).json({});
  }
};

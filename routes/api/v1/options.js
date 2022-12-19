const express = require('express');

const router = express.Router();
const optionApi = require('../../../controllers/api/v1/option');
router.delete('/:id/delete', optionApi.deleteOption);
router.patch('/:id/add_vote', optionApi.addVote);

module.exports = router;

const express = require('express');

const router = express.Router();
const optionApi = require('../../../controllers/api/v1/option');
router.delete('/options/:id/delete', optionApi.deleteOption);
router.patch('/options/:id/add_vote   ', optionApi.addVote);

module.exports = router;

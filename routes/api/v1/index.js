const express = require('express');

const router = express.Router();
const questionApi = require('../../../controllers/api/v1/question');
router.get('/', questionApi.listAll);
router.use('/questions', require('./questions'));
router.use('/options', require('./options'));

module.exports = router;

const express = require('express');

const router = express.Router();
const questionApi = require('../../../controllers/api/v1/question');
router.post('/questions/create  ', questionApi.createQuestion);
router.post('/questions/:id/options/create', questionApi.createOption);
router.delete('/questions/:id/delete', questionApi.deleteQuestion);
router.delete('/questions/:id ', questionApi.listQuestion);

module.exports = router;

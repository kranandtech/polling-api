const express = require('express');

const router = express.Router();
const questionApi = require('../../../controllers/api/v1/question');
router.post('/create', questionApi.createQuestion);
router.post('/:id/options/create', questionApi.createOption);
router.delete('/:id/delete', questionApi.deleteQuestion);
router.get('/:id', questionApi.listQuestion);

module.exports = router;

const express = require('express');
const router = express.Router();
const averageController = require('../controllers/averageController');

router.get('/music/:musicId/average', averageController.calculateAverageVote);

module.exports = router;

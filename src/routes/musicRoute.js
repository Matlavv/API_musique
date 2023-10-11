const express = require('express');
const router = express.Router();

const musicController = require('../controllers/musicController');

router
    .route('/')
    .get(musicController.listAllMusic)
     .post(musicController.createAMusic);

// router
//     .route('/music/')
//     .delete(musicController.deleteAMusic)
//     .get(musicController.getAMusic)
//     .put(musicController.updateAMusic);

module.exports = router;
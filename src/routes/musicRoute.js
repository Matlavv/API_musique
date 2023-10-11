const express = require('express');
const router = express.Router();

const musicController = require('../controllers/musicController');

router
    .route('/')
    .get(musicController.listAllMusic)
    .post(musicController.createAMusic)
    .get(musicController.getAMusic)
    .delete(musicController.deleteAMusic)
    .put(musicController.updateAMusic);
    
module.exports = router;
const Music = require('../models/musicModel');
const Votes = require('../models/votesModel');

exports.listAllMusic = async (req, res) => {

    try {
        const music = await Music.find({});
        res.status(200);
        res.json(music);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message : 'Erreur serveur'})
    }
}

exports.createAMusic = async (req, res) => {
    const newMusic = new Music(req.body);

    try {
        const music = await newMusic.save();
        res.status(201);
        res.json(music);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur'})
    }
}

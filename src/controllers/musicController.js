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
        res.json({message : 'Network error'})
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
        res.json({message: 'Network error'})
    }
}

exports.deleteAMusic = async (req, res) => {
    
    try {
        await Music.findByIdAndDelete(req.params.music_id );
        res.status(200);        
        res.json({message: 'Music deleted'});
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Network error'})
    }
}

exports.updateAMusic = async (req, res) => {
    try {
        const music = await Comment.findByIdAndUpdate(req.params.id_music, req.body, {new: true});
        res.status(201);
        res.json(music);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Network error'})
    }
}

exports.getAMusic = async (req, res) => {

    try {
        const music = await Music.findById(req.params.id_music);

        if(!music) {
            res.status(204).json({message: 'Music not found'});
        } else {
            res.status(201).json(music);
        }
        
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Network error'})
    }
}
const Music = require('../models/musicModel');
const Votes = require('../models/votesModel');

exports.listAllVotes = async (req, res) => {

    try {
        const votes = await Votes.find({music_id: req.params.id_music});
        res.status(200);
        res.json(votes);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message : 'Network error'})
    }
}

exports.createAVotes = async (req, res) => {
    try {
        await Music.findById(req.params.id_music);
        const newVotes = new Votes({...req.body, music_id: req.params.id_music});
    
        try {
            const votes = await newVotes.save();
            res.status(201);
            res.json(votes);
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: 'Erreur serveur (db)'})
        }
        }catch(error) {
            console.log(error);
            res.status(500).json({message: "Erreur serveur (post)"})
        }
}

exports.deleteAVotes = async (req, res) => {
    
    try {
        await Votes.findByIdAndDelete(req.params.id_votes );
        res.status(200);        
        res.json({message: 'Votes deleted'});
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Network error'})
    }
}

exports.updateAVotes = async (req, res) => {
    try {
        const votes = await Votes.findByIdAndUpdate(req.params.id_votes, req.body, {new: true});
        res.status(201);
        res.json(votes);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Network error'})
    }
}

exports.getAVotes = async (req, res) => {

    try {
        const votes = await Votes.findById(req.params.votes);

        if(!votes) {
            res.status(204).json({message: 'Votes not found'});
        } else {
            res.status(201).json(votes);
        }
        
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Network error'})
    }
}
const Music = require('../models/musicModel');
const Votes = require('../models/votesModel');

exports.listAllVotes = async (req, res) => {

    try {
        const votes = await Votes.find({});
        res.status(200);
        res.json(votes);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message : 'Network error'})
    }
}

exports.createAVotes = async (req, res) => {
    const newVotes = new Votes(req.body);

    try {
        const votes = await newVotes.save();
        res.status(201);
        res.json(votes);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Network error'})
    }
}

exports.deleteAVotes = async (req, res) => {
    
    try {
        await Votes.findByIdAndDelete(req.params.votesId );
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
        const votes = await Votes.findByIdAndUpdate(req.params.votesId, req.body, {new: true});
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
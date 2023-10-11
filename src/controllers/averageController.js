const Music = require('../models/musicModel');
const Votes = require('../models/votesModel');

exports.calculateAverageVote = async (req, res) => {

    const musicId = req.params.musicId;

    try {
        const votes = await Votes.find({ musicId: musicId });
        if (votes.length === 0) {
            res.status(404).json({ message: 'Aucun vote trouvé pour cette musique' });
            return;
        }
        const totalVotes = votes.length;
        const sum = votes.reduce((acc, vote) => acc + vote.grade, 0);
        const average = sum / totalVotes;
        res.status(200).json({ average: average, totalVotes: totalVotes });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors du calcul de la moyenne des votes' });
    }
};

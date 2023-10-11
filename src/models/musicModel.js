const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let musicSchema = new Schema ({
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    published_at: {
        type: Date,
        default: Date.now
    },
    votes_number: {
        type: Number,
    }
    
})

module.exports = mongoose.model('Music', musicSchema);
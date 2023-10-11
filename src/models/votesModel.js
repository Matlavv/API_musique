const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let votesSchema = new Schema ({
    grade : {
    type: Number,
    validate: {
      validator: function (value) {
        return value <= 5;
      },
      message: 'La valeur doit être inférieure ou égale à 5',
    }
    },
    published_at: {
        type: Date,
        default: Date.now
    },
    result: {
        type: Number
    }
})

module.exports = mongoose.model('Votes', votesSchema);
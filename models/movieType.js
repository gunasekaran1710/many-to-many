const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieTypeSchema = new Schema({
    movieName:[{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    actorName:[{ type: Schema.Types.ObjectId, ref: 'Actor' }],
    directorName:[{ type: Schema.Types.ObjectId, ref: 'Director' }],
    movieType:String

});

const movieType = mongoose.model('movieType', movieTypeSchema);

module.exports = movieType;
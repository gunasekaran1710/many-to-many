const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieTypeSchema = new Schema({
    movieName:[String],
    actorName:[String],
    directorName:[String],
    movieType:String

});

const movieType = mongoose.model('movieType', movieTypeSchema);

module.exports = movieType;
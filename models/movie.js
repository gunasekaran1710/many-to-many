const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    movieName:String,
    actorName:[String],
    directorName:[String],
    movieType:[String]

});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
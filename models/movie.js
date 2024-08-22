const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    movieName:String,
    movieType:{ type: Schema.Types.ObjectId, ref: 'movieType' } ,
    actorName:{ type: Schema.Types.ObjectId, ref: 'Actor' },
    directorName:{ type: Schema.Types.ObjectId, ref: 'Director' } 


});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
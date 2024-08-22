const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const directorSchema = new Schema({
    movieName:[String],
    actorName:[String],
    directorName:String,
    movieType:[String]

});

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;
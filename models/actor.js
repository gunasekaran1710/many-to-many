const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const actorSchema = new Schema({
    movieName:[String],
    actorName:String,
    directorName:[String],
    movieType:[String]

});

const Actor = mongoose.model('Actor', actorSchema);

module.exports = Actor;
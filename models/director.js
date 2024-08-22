const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const directorSchema = new Schema({
    movieName:[{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    actorName:[{ type: Schema.Types.ObjectId, ref: 'Actor' }],
    directorName:String,
    movieType:[{ type: Schema.Types.ObjectId, ref: 'movieType' }]

});

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;
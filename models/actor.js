const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const actorSchema = new Schema({
    movieName:[{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    actorName:String,
    directorName:[{ type: Schema.Types.ObjectId, ref: 'Director' }],
    movieType:[{ type: Schema.Types.ObjectId, ref: 'movieType' }],

});

const Actor = mongoose.model('Actor', actorSchema);

module.exports = Actor;
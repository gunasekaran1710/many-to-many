const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const actorSchema = new Schema({
    actorName:String,
});

const Actor = mongoose.model('Actor', actorSchema);

module.exports = Actor;
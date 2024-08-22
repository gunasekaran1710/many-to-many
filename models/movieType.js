const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieTypeSchema = new Schema({
    movieType:String,   
});

const movieType = mongoose.model('movieType', movieTypeSchema);

module.exports = movieType;
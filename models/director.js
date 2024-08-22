const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const directorSchema = new Schema({
    directorName:String,
});

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;
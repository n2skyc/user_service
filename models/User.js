var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    name : { type: String, unique: true },
    password : String,
    email : String,
    type: String,
    active: Boolean,
    about: String,
    imageUrl: String,
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('User', User);
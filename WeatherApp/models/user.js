//Crear modelo usuario
'use strict'

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: String,
    creationDate: Date,
    username: String,
    password: String,
    email: String,
    roles: String,
    registered_station: {type: mongoose.Schema.Types.ObjectId},
    keep_station: {type: mongoose.Schema.Types.ObjectId},
    rol: String
});


module.exports = mongoose.model('User', userSchema);
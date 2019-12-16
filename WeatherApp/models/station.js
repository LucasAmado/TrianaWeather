'use strict'

const mongoose = require('mongoose');

const stationsSchema = new mongoose.Schema({
    latitud: {type:Number},
    longuitud: {type:Number},
    estaciones: [{type: mongoose.Schema.Types.ObjectId, ref: 'station'}],
    registro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    mantenimiento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'}
});

module.exports = mongoose.model('Station', stationsSchema);
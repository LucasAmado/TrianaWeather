'use strict'

const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    statiom : {
    latitud: {type:Number},
    longuitud: {type:Number},
    nombre : {type:String},
    registro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    mantenimiento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'}},
    lluvia: {type:Number},
    velocidad: {type:Number},
    direccion_viento: {type:Number},
    temp_ambiente: {type:Number},
    temp_suelo: {type:Number},
    calidad_aire: {type:Number},
    presion: {type:Number},
});

module.exports = mongoose.model('Weather', weatherSchema);
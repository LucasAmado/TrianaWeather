'use strict'

const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    lluvia: {type:Number},
    velocidad: {type:Number},
    direccion_viento: {type:Number},
    temp_ambiente: {type:Number},
    temp_suelo: {type:Number},
    calidad_aire: {type:Number},
    presion: {type:Number},
});

module.exports = mongoose.model('Weather', weatherSchema);
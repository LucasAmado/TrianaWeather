const Weather = require('../models/weather');
const _ = require('lodash');
const error_types = require('./error_types');

module.exports = {

    nuevoWeather: (req, res) => {
    
        let weather = new Weather({
            station: req.body.station,
            lluvia: req.body.lluvia,
            velocidad: req.body.velocidad,
            direccion_viento: req.body.direccion_viento,
            temp_ambiente: req.body.temp_ambiente,
            temp_suelo: req.body.temp_suelo,
            calidad_aire: req.body.calidad_aire,
            presion: req.body.presion
        });
        weather.save()
            .then(t => t.populate('station').execPopulate())
            .then(t => res.status(201).json(t))
            .catch(err => res.send(500).json(err.message));
    },

    getUno : (req,res,next) => {

        let weatherId = req.params.id;
        Weather.findById(weatherId).exec((err, weather) => {
            if (err) return next(new error_types.Error404(err.message));
            res.status(200).json(weather);
             
        });
    }
}
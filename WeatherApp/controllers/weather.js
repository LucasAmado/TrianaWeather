const Weather = require('../models/weather');

module.exports = {

    nuevoWeather: (req, res) => {
    
        let weather = new Weather({
            //station: req.station._id,
            lluvia: req.body.lluvia,
            velocidad: req.body.velocidad,
            direccion_viento: req.body.direccion_viento,
            temp_ambiente: req.body.temp_ambiente,
            temp_suelo: req.body.temp_suelo,
            calidad_aire: req.body.calidad_aire,
            presion: req.body.presion,
        });
        weather.save()
            .then(t => t.populate('station').execPopulate())
            .then(t => res.status(201).json(t))
            .catch(err => res.send(500).json(err.message));
    }
}
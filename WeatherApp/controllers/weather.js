const Weather = require('../models/weather');
const _ = require('lodash');

module.exports = {

    nuevoWeather: (req, res) => {
    
        let weather = new Weather({
            station: req.station._id,
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
    },

    getUno : (req,res) => {

        //let weatherId = req.params.id;
        console.log(req.body)
        Weather.findById(req.body.id_).exec((err, weather) => {
            if(err) return res.status(500).send({ message: 'Error en el servidor' });
                          
                if(weather){
                    return res.status(200).send({
                        weather
                    });
                }else{
                    return res.status(404).send({
                        message: 'Weather no existe'
                    });
                }
             
        });
    }
}
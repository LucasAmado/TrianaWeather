//Controladores de station
const Station = require("../models/station");
const Weather = require("../models/weather");
const error_types = require("../controllers/error_types");

let controller = {
  getWeatherByStationId: (req, res, next) => {
    //Método realizado por Esperanza Escacena. He parametrizado la consulta para reutilizar el método para dos rutas
    //que son /stations/id/weather y /stations/id/weather/from/to, ya que necesitaba el mismo código con diferente consulta.
    let busqueda = (req.params.from==undefined && req.params.to==undefined) ? {"station": req.params.id}:{"station": req.params.id ,fecha: { $gte: req.params.from, $lte: req.params.to }};

    Weather.find(busqueda)
      .populate({
        path: "station",
        model: "Station",
        populate: {
          path: "registro mantenimiento",
          model: "User",
          select: "fullname email"
        }
      })
      .exec((err, resp) => {
        if (err) return next(new error_types.Error404(err.message));
        let stationDto = {};
        if (resp.length != 0) {
          stationDto.ubicacion =
            resp[0].station.latitud + " , " + resp[0].station.latitud;
          stationDto.nombre = resp[0].station.nombre;
          stationDto.registro = {
            fullname: resp[0].station.registro.fullname,
            email: resp[0].station.registro.email
          };
          stationDto.mantenimiento = {
            fullname: resp[0].station.mantenimiento.fullname,
            email: resp[0].station.mantenimiento.email
          };
        }
        let weatherList = [];
        resp.forEach(x => {
          weatherList.push({
            lluvia: x.lluvia,
            velocidad: x.velocidad,
            direccion_viento: x.direccion_viento,
            temp_ambiente: x.temp_ambiente,
            temp_suelo: x.temp_suelo,
            calidad_aire: x.calidad_aire,
            presion: x.presion,
            fecha: x.fecha
          });
        });
        res.status(200).json({
          station: stationDto,
          weather: weatherList
        });
      });
  },

  newStation: (req, res) => {
    let station = new Station ({
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        nombre: req.body.nombre,
        registro: req.body.registro,
        mantenimiento: req.body.mantenimiento
    });
    station.save()
    .then(s => res.status(201).json(s))
    .catch(err => res.send(500).json(err.message));
  },

  deleteStation: (req, res, next) =>{
    Station.findOneAndDelete({_id: req.params.id},(err, resp) =>{
      if (resp==null) return next(new error_types.Error404("No se encuentra la estación"));
     return  res.status(204)
    });
  },

  getStations: (req, res, next) =>{
    Station.find().exec((err, station) => {
      if (err) return next(new error_types.Error404(err.message));
      res.status(200).json(station);
    });
  }
};

module.exports = controller;

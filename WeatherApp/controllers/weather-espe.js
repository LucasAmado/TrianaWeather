const Weather = require("../models/weather");
const error_types = require("../controllers/error_types");

let controller = {
  getWeather: (req, res, next) => {
    //Método realizado por Esperanza Escacena. He parametrizado la consulta para reutilizar el método para dos rutas
    let hoy = new Date(Date.now());
    let ayer = new Date(hoy);
    ayer.setUTCHours(0, 0, 0, 0);
    let manana = new Date(hoy);
    manana.setDate(hoy.getDate() + 1);
    manana.setUTCHours(0, 0, 0, 0);
    
    let busqueda = (req.params.from==undefined && req.params.to==undefined) ? { fecha: { $gte: ayer, $lt: manana } } : { fecha: { $gte: req.params.from, $lte: req.params.to }};
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

        res.status(200).json(resp);
      });
  }
 
};

module.exports = controller;

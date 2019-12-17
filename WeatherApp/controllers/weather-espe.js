const Weather = require("../models/weather");
const error_types = require("../controllers/error_types");
const Station = require("../models/station");

let controller = {
  getWeatherToday: async (req, res, next) => {
    let hoy = new Date(Date.now());
    let ayer = new Date(hoy);
    ayer.setDate(hoy.getDate() - 1);
    ayer.setHours(0, 0, 0, 0);
    let manana = new Date(hoy);
    manana.setDate(hoy.getDate() + 1);
    manana.setHours(0, 0, 0, 0);

    Weather.find({ fecha: { $gte: ayer, $lte: manana } })
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
  },

  getByStation: (req, res, next) => {
    Weather.find({ "station.id": req.body.id_station }, (err, resp) => {
      if (err) return next(new error_types.Error404(err.message));
      res.status(200).json(resp);
    });
  }
};

module.exports = controller;

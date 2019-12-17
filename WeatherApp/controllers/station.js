//Controladores de station
const Station = require("../models/station");
//SI AL FINAL NO SE HACE POR INCRUSTACIÓN:
let controller = {
  getById: (req, res, next) => {
    Station.findById(req.body.id, (err, resp) => {
      if (err) return next(new error_types.Error404(err.message));
      res.status(200).json(resp);
    });
  }
};

module.exports = controller;

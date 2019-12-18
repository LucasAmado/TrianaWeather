const Station = require("../models/station");
//SI AL FINAL NO SE HACE POR INCRUSTACIÓN:
let controller = {
  getById: (req, res, next) => {
    Station.findById(req.params.id)
    .populate({ 
      path: "registro mantenimiento", 
      model: "User", 
      select: "fullname email" 
    }).exec((err, resp) => { 
      if (err) return next(new error_types.Error404(err.message));
      res.status(200).json(resp); 
    }); 
  }
};

module.exports = controller;
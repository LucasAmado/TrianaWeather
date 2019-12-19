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
   
    let busqueda;
    if(req.params.from==undefined && req.params.to==undefined){
      busqueda={ fecha: { $gte: ayer, $lt: manana } };

    }else{
      let from= new Date();
      let fecha=req.params.from.split('-');
      from= from.setFullYear(fecha[2],fecha[1]-1,fecha[0]);
      from=new Date(from);
      from.setUTCHours(0, 0, 0, 0);

      let to = new Date();
      fecha=req.params.to.split('-');
      to = to.setFullYear(fecha[2],fecha[1]-1,fecha[0]);
      to= new Date(to);
      to.setDate(to.getDate() + 1);
      to.setUTCHours(0, 0, 0, 0);
     
      busqueda={ fecha: { $gte: from, $lt: to }};
    }
    
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

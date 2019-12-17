'use strict'

const express = require('express')
const router = express.Router()
const middleware = require('../middleware/index');
const WeatherController = require('../controllers/weather')


//router.get('/', middleware.ensureAuthenticated, WeatherController.getTodos);
router.get('/:id', WeatherController.getUno);

//router.post('/', middleware.ensureAuthenticated, WeatherController.nuevaWeather);
router.post('/', WeatherController.nuevoWeather);


module.exports = router
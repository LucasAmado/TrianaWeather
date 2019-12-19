'use strict'

const express = require('express')
const router = express.Router()
const middleware = require('../middleware/index');
const controller = require('../controllers/weather-espe')
const WeatherController = require('../controllers/weather')


//router.get('/', middleware.ensureAuthenticated, WeatherController.getTodos);
router.get('/:id', WeatherController.getUno);

//router.post('/', middleware.ensureAuthenticated, WeatherController.nuevaWeather);
router.post('/', WeatherController.nuevoWeather);

router.get('/today',middleware.ensureAuthenticated,controller.getWeather);
router.get('/from/:from/to/:to',middleware.ensureAuthenticated,controller.getWeather);

module.exports = router
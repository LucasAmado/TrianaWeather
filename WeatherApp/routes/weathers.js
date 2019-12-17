'use strict'

const express = require('express')
const router = express.Router()
const middleware = require('../middleware/index');
const controller = require('../controllers/weather-espe')
//const WeatherController = require('../controllers/station')


//router.get('/', middleware.ensureAuthenticated, WeatherController.getTodos);
//router.get('/', WeatherController.getTodos);

//router.post('/', middleware.ensureAuthenticated, WeatherController.nuevaWeather);
//router.post('/', WeatherController.nuevaWeather);

//router.get('/stations/:id/weather/',middleware.ensureAuthenticatedUser,middleware.ensureAuthenticatedManager,middleware.ensureAuthenticatedAdmin,controller.getByStation);
router.get('/today',middleware.ensureAuthenticated,controller.getWeatherToday);

module.exports = router
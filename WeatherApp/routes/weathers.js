'use strict'

const express = require('express')
const router = express.Router()
const middleware = require('../middleware/index');
const controller = require('../controllers/weather-espe')

router.get('/today',middleware.ensureAuthenticated,controller.getWeather);
router.get('/from/:from/to/:to',middleware.ensureAuthenticated,controller.getWeather);

module.exports = router
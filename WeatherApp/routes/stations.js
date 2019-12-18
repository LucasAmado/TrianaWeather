'use strict'

const express = require('express')
const router = express.Router()
const middleware = require('../middleware/index');
const EstacionController = require('../controllers/station')
const contoller = require('../controllers/station-lucas')

router.get('/:id', middleware.ensureAuthenticatedManager, contoller.getById);
//router.get('/', middleware.ensureAuthenticated, EstacionController.getTodos);
//router.get('/', EstacionController.getTodos);

//router.post('/', middleware.ensureAuthenticated, EstacionController.nuevaEstacion);
//router.post('/', EstacionController.nuevaEstacion);


module.exports = router
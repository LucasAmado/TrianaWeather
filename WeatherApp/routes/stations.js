"use strict";

const express = require("express");
const router = express.Router();
const middleware = require("../middleware/index");
const controller = require("../controllers/station");

router.get(
  "/:id/weather",
  middleware.ensureAuthenticated,
  controller.getWeatherByStationId
);
router.get(
  "/:id/weather/from/:from/to/:to",
  middleware.ensureAuthenticated,
  controller.getWeatherByStationId
);
router.put(
  "/:id",
  middleware.ensureAuthenticatedManager,
  controller.putStation
);

router.get(
  "/:id/summary/today",
  middleware.ensureAuthenticated,
  controller.getSummaryToday
);

module.exports = router;

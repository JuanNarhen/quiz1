const express = require('express');
const series_routes = require('./series_tv.route');

const routerApi = (app) => {
  const dynamic_routes = express.Router();
  app.use('/api/v2', dynamic_routes);
  dynamic_routes.use('/series', series_routes);
};

module.exports = routerApi;
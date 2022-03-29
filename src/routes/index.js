const express = require('express');
const bill_client_router = require('./bill_client.router');

function routerApi(app){
  const dynamic_routes = express.Router();
  app.use('/api/v2', dynamic_routes);
  dynamic_routes.use('/clients', bill_client_router)
}

module.exports = routerApi;
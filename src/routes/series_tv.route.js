const express = require('express');
const boom = require('@hapi/boom');
const series_schema = require('../models/series_tv.model');
const series_service = require('../services/series_tv.service');
const _service = new series_service();
const series_routes = express.Router();

series_routes.post('/serie', async(req, res) => {
  try{
    const serieBody = series_schema(req.body);
    const data = await _service.createSerie(serieBody);
    res.status(201).json(data);
  }
  catch(err){
    res.status(500).json(err);
  }
});

series_routes.get('/', async(req, res) => {
  try{
    const data = await _service.listSeries();
    res.status(200).json(data);
  }
  catch(err){
    res.status(404).json(err);
  }
});

series_routes.get('/:serieId', async(req, res) => {
  try{
    const {serieId} = req.params;
    const data = await _service.showSerie(serieId);
    res.status(200).json(data);
  }
  catch(err){
    next(err);
  }
});

series_routes.put('/:serieId', async(req, res) => {
  try{
    const {serieId} = req.params;
    const {serieBody} = req.body;
    const data = await _service.updateSerie(serieId, );
    res.status(200).json(data);
  }
  catch(err){
    next(err);
  }
});

series_routes.delete('/:serieId', async(req, res) => {
  try{
    const {serieId} = req.params;
    const data = await _service.deleteSerie(serieId);
    res.status(200).json(data);
  }
  catch(err){
    next(err);
  }
});

module.exports = series_routes;
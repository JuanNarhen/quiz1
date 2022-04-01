const express = require('express');
const client_routes = express.Router();
const client_model = require('../models/bill_clientModel');
const ClientService = require('../services/bill_client.service');
const _service = new ClientService();

client_routes.get('/', async(req, res, next) => {
  try{
    const data = await _service.listBills();
    res.status(200).json({message: data});
  } catch (error) {
    next(error);
  }
});

client_routes.get('/:clientId', async(req, res) => {
  try{
    const {clientId} = req.params;
    const data = await _service.showDetailsBill(clientId);
    res.status(200).json({message: data});
  } catch (error) {
    res.status(404).json({ message:error});
  }
});

client_routes.post('/bill', async(req, res) => {
  try{
    const data = await _service.createBill(req.body);
    res.status(201).json({message: data});
  } catch (error) {
    res.status(400).json({message: error});
  }
});

client_routes.put('/:clientId', async(req, res) => {
  try{
    const {clientId} = req.params;
    const data = await _service.updateBill(clientId, req.body);
    res.status(200).json({message: data});
  } catch (error) {
    res.status(400).json({message: error});
  }
});

client_routes.delete('/:clientId', async(req, res) => {
  try{
    const {clientId} = req.params;
    const data = await _service.deleteBill(clientId);
    res.status(201).json({message: data});
  } catch (error) {
    res.status(404).json({ message:error});
  }
});

module.exports = client_routes;
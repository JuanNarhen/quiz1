const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routerApi = require('../routes');

const {errorLog, errorHandler, boomErrorHandler} = require('../middlewares/handlers/error.handler');

const app = express.Router();

app.listen(process.env.PORT, console.log(`Listenning by port ${process.env.PORT}`));

mongoose.connect(process.env.MONGO)
  .then(() => console.log('connected with mongo'))
  .catch((error) => console.error(error));

app.use(errorLog);
app.use(errorHandler);
app.use(boomErrorHandler);
app.use(express.json());

routerApi(app);
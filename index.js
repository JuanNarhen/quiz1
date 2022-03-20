require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;
const routerApi = require('./src/routes');

app.use(express.json());

app.listen(port, () => console.log('Connected by port ', port));

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log('success connection to mongo'))
  .catch((error) => console.error(error));

routerApi(app);
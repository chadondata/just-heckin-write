require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const APP = express();
const PORT = process.env.PORT || 5000;

APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: true }));

const APIS = require('./api');
APP.use("/api", APIS);

APP.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const api = require('express').Router();
const businesses = require('./businesses');

api.use('/businesses', businesses);

module.exports = api;

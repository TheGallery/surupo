const api = require('express').Router();
const location = require('./location');
const attendance = require('./attendance');

api.use('/location', location);
api.use('/attendance', attendance);

module.exports = api;

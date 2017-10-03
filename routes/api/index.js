const api = require('express').Router();
const location = require('./location');
const attendance = require('./attendance');
const users = require('./users');

api.use('/location', location);
api.use('/attendance', attendance);
api.use('/users', users);

module.exports = api;

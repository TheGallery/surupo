const routes = require('express').Router();
const api = require('./api');
const auth = require('./auth');

routes.use('/api', api);
routes.use('/auth', auth);

routes.get('/*', (req, res) => {
  res.send('Hey sup?');
});

module.exports = routes;

const routes = require('express').Router();
const path = require('path');

const api = require('./api');
const auth = require('./auth');

routes.use('/api', api);
routes.use('/auth', auth);

routes.get('/*', (req, res) => {
  if (req.user) {
    res.cookie('uid', req.user.id);
  } else {
    res.clearCookie('uid');
  }

  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

module.exports = routes;

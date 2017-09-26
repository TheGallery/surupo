const users = require('express').Router();

users.get('/', (req, res) => {
  res.send('Hey this is user');
});

module.exports = users;

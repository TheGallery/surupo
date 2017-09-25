const businesses = require('express').Router();

businesses.get('/', (req, res) => {
  res.send('Businesses here');
});

module.exports = businesses;

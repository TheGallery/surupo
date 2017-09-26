const location = require('express').Router();
const yelp = require('../../utils/yelp');

location.get('/', (req, res) => {
  yelp.getBusinesses(req.query.location, req.user, (err, businesses) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(businesses);
  });
});

module.exports = location;

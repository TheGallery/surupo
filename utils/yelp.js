const yelp = require('yelp-fusion');
const users = require('../controllers/users');

exports.getBusinesses = function (location, user, cb) {
  yelp.accessToken(process.env.YELP_CLIENT_ID, process.env.YELP_CLIENT_SECRET)
    .then(res => {
      const token = res.jsonBody.access_token;

      yelp.client(token).search({
        location
      })
      .then(res => {
        // The result of updateLocation is irrelevant so
        // we don't pass any errors to the client.
        if (user) {
          users.updateLocation(user.id, location, err => {
            if (err) console.log(err);
          });
        }

        cb(null, res.jsonBody.businesses);
      })
      .catch(err => {
        console.log(err);
        cb({error: 'Error fetching businesses from Yelp.'});
      });
    })
    .catch(err => {
      console.log(err);
      cb({error: 'Yelp authorization error.'});
    });
};

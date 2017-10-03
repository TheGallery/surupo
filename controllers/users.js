const mongoose = require('mongoose');
const Users = mongoose.model('Users');

exports.login = function (profile, cb) {
  Users.findOneAndUpdate({
    provider: profile.provider,
    providerId: profile.id
  }, {
    $setOnInsert: {
      name: profile.displayName,
      provider: profile.provider,
      providerId: profile.id
    }
  }, {
    new: true,
    upsert: true
  }).exec(cb);
};

exports.getOne = function (id, cb) {
  Users.findById(id).select('attendance location').exec(cb);
};

exports.updateLocation = function (userId, location, cb) {
  Users.updateOne({_id: userId}, {
    location
  }).exec(cb);
};

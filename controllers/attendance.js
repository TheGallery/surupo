const mongoose = require('mongoose');
const Attendance = mongoose.model('Attendance');
const Users = mongoose.model('Users');

exports.add = function (user, businessId, cb) {
  Attendance.findOneAndUpdate({
    businessId
  }, {
    $setOnInsert: {
      businessId
    },
    $inc: {
      attending: 1
    }
  }, {
    upsert: true
  }).exec(err => {
    if (err) return cb(err);

    Users.updateOne({_id: user.id}, {
      $push: {
        attendance: businessId
      }
    }).exec(cb);
  });
};

exports.get = function (businesses, cb) {
  Attendance.find({
    businessId: {
      $in: businesses
    }
  }).exec(cb);
};

exports.remove = function (user, businessId, cb) {
  Attendance.updateOne({
    businessId
  }, {
    $inc: {
      attending: -1
    }
  }).exec(err => {
    if (err) return cb(err);

    Users.updateOne({_id: user.id}, {
      $pull: {
        attendance: businessId
      }
    }).exec(cb);
  });
};

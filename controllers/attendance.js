const mongoose = require('mongoose');
const Attendance = mongoose.model('Attendance');
const Users = mongoose.model('Users');

exports.add = function (user, businessId, cb) {
  Users.updateOne({_id: user.id}, {
    $addToSet: {
      attendance: businessId
    }
  })
  .exec((err, result) => {
    // if nModified is 0, the user is already attending.
    if (err || !result.nModified) return cb(err);

    Attendance.findOneAndUpdate({businessId}, {
      $setOnInsert: {
        businessId
      },
      $inc: {
        attending: 1
      }
    }, {
      upsert: true,
      new: true
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
  Users.updateOne({_id: user.id}, {
    $pull: {
      attendance: businessId
    }
  }, {
    new: true
  })
  .exec((err, result) => {
    if (err || result.nModified !== 1) return cb(err);

    Attendance.findOneAndUpdate({
      businessId
    }, {
      $inc: {
        attending: -1
      }
    }, {
      new: true
    }).exec((err, attendance) => {
      if (err) return cb(err);

      cb(null, attendance);
    });
  });
};

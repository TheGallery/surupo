const attendance = require('express').Router();
const attendanceCtrl = require('../../controllers/attendance');

attendance.get('/', (req, res) => {
  attendanceCtrl.get(['midsummer-house-cambridge'], (err, attendance) => {
    if (err) {
      return res.status(500).json({error: 'Database error.'});
    }

    res.json(attendance);
  });
});

attendance.post('/', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({error: 'User is not authenticated'});
  }

  attendanceCtrl.add(req.user, req.body.businessId, (err) => {
    if (err) {
      return res.status(500).json({error: 'Database error.'});
    }

    res.json('done');
  });
});

attendance.delete('/', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({error: 'User is not authenticated'});
  }

  attendanceCtrl.remove(req.user, req.body.businessId, (err) => {
    if (err) {
      return res.status(500).json({error: 'Database error.'});
    }

    res.json('done');
  });
});

module.exports = attendance;

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

  attendanceCtrl.add({id: '59c9fe43f9302aa52a46e8bc'}, req.body.businessId, (err) => {
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

  attendanceCtrl.remove({id: '59c9fe43f9302aa52a46e8bc'}, req.body.businessId, (err) => {
    if (err) {
      return res.status(500).json({error: 'Database error.'});
    }

    res.json('done');
  });
});

module.exports = attendance;

const attendance = require('express').Router();
const attendanceCtrl = require('../../controllers/attendance');

// Need to take a loot at this.
attendance.post('/getAll', (req, res) => {
  attendanceCtrl.get(req.body.businessIds, (err, attendance) => {
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

  attendanceCtrl.add(req.user, req.body.businessId, (err, attendance) => {
    if (err) {
      return res.status(500).json({error: 'Database error.'});
    }

    res.json(attendance);
  });
});

attendance.delete('/', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({error: 'User is not authenticated'});
  }

  attendanceCtrl.remove(req.user, req.body.businessId, (err, attendance) => {
    if (err) {
      return res.status(500).json({error: 'Database error.'});
    }

    res.json(attendance);
  });
});

module.exports = attendance;

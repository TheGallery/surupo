const attendance = require('express').Router();
const attendanceCtrl = require('../../controllers/attendance');

/**
 * Get the attendance of the curently displayed businesses
 *
 * Note: This should probably be converetd to a GET endpoint
 *
 * We expect to receive a businessIds array in the request body.
 */
attendance.post('/getAll', (req, res) => {
  attendanceCtrl.get(req.body.businessIds, (err, attendance) => {
    if (err) {
      return res.status(500).json({error: 'Database error.'});
    }

    res.json(attendance);
  });
});

// Increment attendance based on businesssId
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

// Decrement attendance based on businessId
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

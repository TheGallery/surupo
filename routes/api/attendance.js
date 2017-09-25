const attendance = require('express').Router();

attendance.get('/', (req, res) => {
  res.send('Attendance');
});

module.exports = attendance;

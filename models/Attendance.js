const mongoose = require('mongoose');

const AttendanceSchema = mongoose.Schema({
  businessId: String,
  attending: Number
});

mongoose.model('Attendance', AttendanceSchema);

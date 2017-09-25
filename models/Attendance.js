const mongoose = require('mongoose');

const AttendanceSchema = mongoose.Schema({
  yId: String,
  name: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  createdAt: { type: Date, default: Date.now }
});

mongoose.model('Attendance', AttendanceSchema);

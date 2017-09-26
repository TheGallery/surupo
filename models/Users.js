const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  provider: String,
  providerId: String,
  location: { type: String, default: '' },
  attendance: []
});

mongoose.model('Users', UserSchema);

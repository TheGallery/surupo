require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);

const app = express();

mongoose.connect(process.env.DB);

require('./models/Users');
require('./models/Attendance');
require('./config/passport');

const sessConfig = {
  name: 'surupo.sid',
  cookie: { maxAge: 2592000000 }, // 30 days
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
};

app.use(session(sessConfig));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running.');
});

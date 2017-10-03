const auth = require('express').Router();
const passport = require('passport');

auth.get('/twitter', passport.authenticate('twitter'));

auth.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/signin'
}));

auth.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = auth;

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

auth.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    return res.json(req.user);
  }

  return res.send('User is not authenticated');
});

module.exports = auth;

const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const users = require('../controllers/users');

passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: `${process.env.CB_HOST}/auth/twitter/callback`
}, function (accessToken, refreshToken, profile, done) {
  users.login(profile, (err, user) => {
    if (err) return done(err);

    return done(null, user);
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  users.getOne(id, (err, user) => {
    if (err) return done(err);

    done(null, user);
  });
});

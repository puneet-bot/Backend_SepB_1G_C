const passport = require("passport");
const GoogleOauth = require("passport-google-oauth").OAuth2Strategy;
const crypto = require("crypto");
const User = require("../models/user");
const secret= require('../config/secrets')

// Tell passport to use a new strategy for Google login
passport.use(
  new GoogleOauth(
    {
      clientID:secret.googleClientID,
      clientSecret: secret.googleClientSecret,
      callbackURL: "http://localhost:8000/signin/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const user = await User.findOne({ email: profile.emails[0].value }).exec();
        console.log(profile);
        if (user) {
          return done(null, user);
        } else {
          const newUser = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: crypto.randomBytes(20).toString("hex"),
          });
          return done(null, newUser);
        }
      } catch (err) {
        console.log("Error in Google authentication", err);
        return done(err);
      }
    }
  )
);

module.exports = passport;

"use strict";
var passport = require("passport");
var LocalStrategy = require('passport-local');
var FacebookStrategy = require('passport-facebook');
var users_1 = require("../models/users");
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (obj, done) {
    users_1.User.findOne({ _id: obj._id }, { passwordHash: 0, salt: 0 }, function (err, user) {
        if (err)
            done(null, {});
        done(null, user);
    });
});
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.ROOT_URL + '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photos']
}, function (accessToken, refreshToken, profile, done) {
    users_1.User.findOne({ facebookId: profile.id }, function (err, user) {
        if (user) {
            return done(err, user);
        }
        else {
            var u_1 = new users_1.User();
            u_1.username = profile.displayName;
            u_1.facebookId = profile.id;
            u_1.facebook.name = profile.displayName;
            u_1.facebook.token = accessToken;
            u_1.save(function (err) {
                if (err)
                    done(err, null);
                return done(null, u_1);
            });
        }
    });
}));
passport.use(new LocalStrategy(function (username, password, done) {
    console.log(username, password);
    users_1.User.findOne({ username: username }).select('+passwordHash +salt')
        .exec(function (err, user) {
        if (err)
            return done(err);
        if (!user)
            return done(null, false, { message: 'Incorrect username' });
        if (!user.validatePassword(password))
            return done(null, false, { message: 'Incorrect passord' });
        console.log('this is the real spot');
        console.log(user);
        return done(null, user);
    });
}));

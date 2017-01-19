"use strict";
var express = require("express");
var passport = require("passport");
var users_1 = require("../models/users");
var router = express.Router();
router.get('users/:id', function (req, res, next) {
    users_1.User.findOne(req.params._id).select('-passwordHash -salt').then(function (user) {
        return res.status(200).json(user);
    });
});
router.get('/currentuser', function (req, res, next) {
    return res.json(req.user);
});
router.post('/Register', function (req, res, next) {
    var user = new users_1.User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save(function (err, user) {
        if (err)
            return next(err);
        res.json({ message: 'registration complete' });
    });
});
router.post('/login/local', function (req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Please Fill Out Every Field' });
    }
    passport.authenticate('local', { session: true }, function (err, user, info) {
        console.log('local auth');
        console.log(err, user);
        if (err)
            return res.status(500);
        if (user) {
            return req.logIn(user, function (err) {
                if (err)
                    return next({ message: 'login failed', error: err });
                return req.session.save(function (err) {
                    if (err)
                        return next({ message: 'session failed', error: err });
                    return res.redirect('/');
                });
            });
        }
    })(req, res, next);
});
router.get('/logout/local', function (req, res, next) {
    req.session.destroy(function (err) {
        if (err)
            return res.status(500).json({ message: 'still authenticated please try again' });
        req.logout();
        req.user = null;
        return res.json({ isAuthenticated: req.isAuthenticated() });
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;

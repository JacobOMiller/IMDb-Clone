"use strict";
var mongoose = require("mongoose");
var crypto = require("crypto");
var jwt = require("jsonwebtoken");
var validator = require("validator");
var UserSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'invalid email']
    },
    passwordHash: { type: String, select: false },
    salt: { type: String, select: false },
    facebookId: String,
    facebook: {
        token: String,
        name: String,
        email: String
    },
    roles: { type: Array, default: ['user'] }
});
UserSchema.method('setPassword', function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
});
UserSchema.method('validatePassword', function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    console.log(hash === this.passwordHash);
    return (hash === this.passwordHash);
});
UserSchema.method('generateJWT', function () {
    return jwt.sign({
        _id: this._id,
        username: this.username,
        email: this.email
    }, process.env.JWT_SECRET, { expiresIn: '2 days' });
});
exports.User = mongoose.model('User', UserSchema);

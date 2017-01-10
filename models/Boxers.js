"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BoxerSchema = new Schema({
    name: String,
    age: Number,
    weight: Number,
    email: String
});
exports.Boxer = mongoose.model('Boxer', BoxerSchema);

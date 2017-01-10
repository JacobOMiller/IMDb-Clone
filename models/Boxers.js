"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BoxerSchema = new Schema({
    name: String,
    age: Number,
    weight: Number
});
exports.Boxer = mongoose.model('Boxer', BoxerSchema);

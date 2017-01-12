"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var MovieSchema = new Schema({
    title: String,
    director: String,
    picture: String,
    rating: { type: Number, require: false, min: 0, max: 10, default: 0 }
});
exports.Movie = mongoose.model('Movie', MovieSchema);

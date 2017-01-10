"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
Export;
var MovieSchema = new Schema({
    title: String,
    director: String,
    picture: String,
    rating: Number
});
exports.Movie = mongoose.model('Movie', MovieSchema);

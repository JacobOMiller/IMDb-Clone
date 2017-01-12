"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var RatingsSchema = new Schema({
    movie: mongoose.Types.ObjectId,
    rating: { type: Number, require: false, min: 0, max: 10, default: 0 }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Rating', RatingsSchema);

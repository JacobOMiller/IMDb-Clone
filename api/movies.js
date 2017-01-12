"use strict";
var express = require("express");
var movies_1 = require("./../models/movies");
var router = express.Router();
router.get('/movies', function (req, res, next) {
    movies_1.Movie.find({}, {}, function (e, data) {
        if (e)
            return next({ message: 'Could not find movies', Error: e });
        res.json(data);
    });
});
router.post('/movies', function (req, res, next) {
    movies_1.Movie.create(req.body, function (e, data) {
        if (e)
            return next({
                message: 'could not create movie',
                Error: e
            });
        res.json(data);
    });
});
router.put('/movies/:id', function (req, res, next) {
    movies_1.Movie.update({ _id: req.params.id }, req.body, {}, function (e, data) {
        if (e)
            return next({
                message: 'could not update movie',
                Error: e
            });
        res.json(data);
    });
});
router.delete('/movies/:id', function (req, res, next) {
    movies_1.Movie.remove({ _id: req.params.id }, function (e) {
        if (e)
            return next({
                message: 'could not delete movie',
                Error: e
            });
        res.json({});
    });
});
router.get('/movies/:id', function (req, res, next) {
    movies_1.Movie.findOne({ _id: req.params.id }, {}, function (e, data) {
        if (e)
            return next({ message: 'Could not find movies', Error: e });
        res.json(data);
    });
});
module.exports = router;

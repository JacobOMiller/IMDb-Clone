"use strict";
var express = require("express");
var Movies_1 = require("./../models/Movies");
var router = express.Router();
router.get('/movies', function (req, res, next) {
    Movies_1.Movie.find({}, {}, function (e, data) {
        if (e)
            return next({ message: 'Could Not Find Movies', Error: e });
        res.json(data);
    });
});
router.post('/movies', function (req, res, next) {
    Movies_1.Movie.create(req.body, function (e, data) {
        if (e)
            return next({ message: 'Could Not Find movies', Error: e });
        res.json(data);
    });
});
router.put('/movies/:id', function (req, res, next) {
    Movies_1.Movie.update({ _id: req.params.id }, req.body, {}, function (e, data) {
        if (e)
            return next({ message: 'Could Not Find Movies', Error: e });
        res.json(data);
    });
});
module.exports = router;

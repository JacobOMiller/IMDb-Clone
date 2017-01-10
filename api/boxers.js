"use strict";
var express = require("express");
var Boxers_1 = require("./../models/Boxers");
var router = express.Router();
router.get('/boxers', function (req, res, next) {
    Boxers_1.Boxer.find({}, {}, function (e, data) {
        if (e)
            return next({ message: 'Could Not Find Boxers', Error: e });
        res.json(data);
    });
});
router.post('/boxers', function (req, res, next) {
    Boxers_1.Boxer.create(req.body, function (e, data) {
        if (e)
            return next({ message: 'Could Not Find Boxers', Error: e });
        res.json(data);
    });
});
router.put('/boxers/:id', function (req, res, next) {
    Boxers_1.Boxer.update({ _id: req.params.id }, req.body, {}, function (e, data) {
        if (e)
            return next({ message: 'Could Not Find Boxers', Error: e });
        res.json(data);
    });
});
module.exports = router;

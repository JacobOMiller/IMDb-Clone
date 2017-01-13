"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
//express routes
var index_1 = require("./routes/index");
//init express and assign it to app var
//INITIATE THE APP
var app = express();
//optional for security
var dev = app.get('env') === 'development' ? true : false;
//optional
if (dev) {
    var dotenv = require('dotenv');
    dotenv.load();
}
//db connections
// mongodb://user:password@sub.mlab.com:39482/myapp
// instead of process if you don't use dotenv package
mongoose.connect(process.env.MONGO_URI);
//optional
mongoose.connection.on('connected', function () {
    console.log('mongoose connected');
    //if dev seed the deb
    if (dev) {
    }
});
//optional
mongoose.connection.on('error', function (e) {
    throw new Error(e);
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//config bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//static routing
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));
//a server route
app.use('/', index_1.default);
//apis
app.use('/api', require('./api/movies'));
// redirect 404 to home for the sake of AngularJS client-side routes
app.get('/*', function (req, res, next) {
    if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
        return next({ status: 404, message: 'Not Found' });
    }
    else {
        return res.render('index');
    }
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
// TODO Error interface
app.use(function (err, req, res, next) {
    res.status(err['status'] || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;

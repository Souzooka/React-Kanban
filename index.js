/*jshint esversion: 6*/
const express = require('express');
const app = require('./expressApp.js');
const redis = require('./redisApp.js')();
const passport = require('./passportApp.js')();
let server;
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//To use bodyParser
app.use(bodyParser.urlencoded({extended: false}));

//To use static files
app.use( express.static('public'));

//To use methodOverride
app.use(methodOverride('_method'));

// Routes
const apiRoutes = require('./api/index');
//const indexRoutes = require('./routes/indexRoutes');
app.use('/api', apiRoutes);
//app.use('/', indexRoutes);

server = require('./server.js');
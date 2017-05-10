/*jshint esversion: 6*/
const { app, express } = require('./expressApp.js');
const redis = require('./redisApp.js')();
const passport = require('./passportApp.js')();
const server = require('./server.js');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//To use bodyParser
app.use(bodyParser.urlencoded({extended: false}));

//To use static files
app.use('/static', express.static('public'));

//To use methodOverride
app.use(methodOverride('_method'));

// Routes
const indexRoutes = require('./routes/indexRoutes');
app.use('/', indexRoutes);
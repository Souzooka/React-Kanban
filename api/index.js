const express = require('express');
const Router = express.Router();

Router.use('/tasks', require('./tasks'));
Router.use('/users', require('./users'));

module.exports = Router;
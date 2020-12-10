const express = require('express');
const classes = require('./controllers/events');

let routes = express.Router();

routes.route('/events')
  .get(classes.root)

routes.route('/events/:event')
  .get(classes.byEvent)

module.exports = routes;

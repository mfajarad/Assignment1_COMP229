var express = require('express');
var router = express.Router();

/* GET HOME page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

/* GET HOME page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

/* GET ABOUTME page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET PROJECTS page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET SERVICES page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET CONTACTME page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});


module.exports = router;

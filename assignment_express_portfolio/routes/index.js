var express = require('express');
var router = express.Router();
const {projects} = require('../models/projects')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { projects:projects });
});

router.get('/building_server', function(req, res, next) {
  res.render('projectView', { project:projects[0]});
});

router.get('/jquery_tagging', function(req, res, next) {
  res.render('projectView', { project:projects[1] });
});

router.get('/music_play', function(req, res, next) {
  res.render('projectView', { project:projects[2] });
});

router.get('/facebook_clone', function(req, res, next) {
  res.render('projectView', { project:projects[3] });
});

module.exports = router;

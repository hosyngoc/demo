var express = require('express');
var router = express.Router();

var profileController = require('../controllers/profile_controller');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Super Folio' });
});

module.exports = router;

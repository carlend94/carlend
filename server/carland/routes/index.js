var express = require('express');
var router = express.Router();
// var Bear = require('../models/bear');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/lala', function(req, res, next) {
    res.send('hello')
});



module.exports = router;

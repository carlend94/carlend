var express = require('express');
var router = express.Router();
var Bear = require('../models/bear');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/lala', function(req, res, next) {
    res.send('hello')
});

router.route('/add/post').post(function (req, res) {
    var machine = new Bear();
    machine.name = req.body.name;

    machine.save()
        .then(item => {
          console.log(item);
        res.redirect('/');
})
.catch(err => {
        res.status(400).send("unable to save to database");
});
});


router.route('/lalala').get(function (req, res) {

    Bear.find(function (err, itms){
        if(err){
            console.log(err);
        }
        else {
            res.send(itms);
        }
    });

});

module.exports = router;

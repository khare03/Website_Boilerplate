var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/register', function(req, res, next) {
    res.send('success');
});

router.post('/login', function (req,res,next) {
  res.send('logged in')  ;
});






module.exports = router;

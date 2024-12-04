var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'malappuram',name:'ansar',para:'nice to meet you' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { home: 'clt',name:'John',para:'nice to meet you' });
});

module.exports = router;

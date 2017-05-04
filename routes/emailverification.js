var express = require('express');
var router = express.Router();
var fs = require('fs');
var ctctconfig = JSON.parse(fs.readFileSync('./ctct-config.json', 'utf8'));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('emailverification', { title: 'Email Verification'});
});



module.exports = router;

var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pirate/:toTranslate', function(req, res, next) {
  console.log('firing')
  console.log(req.body);
  var searchString = req.body.toTranslate;
  console.log(searchString);
  request('http://isithackday.com/arrpi.php?text=' + searchString + '?', function (error, data) {
    if (!error && response.statusCode == 200) {
      var pirate = data;
      console.log(pirate);
      res.render(pirate);

    }
  });
});

module.exports = router;

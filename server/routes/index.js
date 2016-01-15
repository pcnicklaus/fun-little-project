var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/pirate', function(req, res, next) {
  console.log('firing')
  console.log(req.body);
  var searchString = req.body.toTranslate;
  console.log(searchString);
  request('http://isithackday.com/arrpi.php?text=' + searchString + '&format=json', function (error, response, body) {
    if (!error) {
      // var pirate = body;
      console.log(response, '<response>');
      console.log(body, '< body')
      res.json(JSON.parse(body));
    }
  });
});

module.exports = router;

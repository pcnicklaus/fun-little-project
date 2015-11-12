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
  // http://food2fork.com/api/search?key=4ee21f110453547468b252d74f4b92c0&q=beef&sort=r
  request('http://isithackday.com/arrpi.php?text=' + searchString + '?', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var pirate = body;
      res.render(pirate);
      console.log(body);
    }
  });
});

module.exports = router;

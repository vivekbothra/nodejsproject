var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('in index.js');
  res.render('index');
});

router.get('/json', function(req, res) {
  console.log('in json');
  res.json({

    "places":[
    {"id":1,"lat":44.5403,"lon":-79.5463},
    {"id":2,"lat":45.5403,"lon":-78.5463},
    {"id":3,"lat":45.5403,"lon":-76.5463},
    {"id":4,"lat":45.5403,"lon":-77.5463},
      {"id":5,"lat":45.5403,"lon":-80.5463},
      {"id":6,"lat":45.5403,"lon":-75.5463},
      {"id":7,"lat":45.5403,"lon":-74.5463},
      {"id":8,"lat":45.5403,"lon":-73.5463},
      {"id":9,"lat":44.5403,"lon":-74.5463},
      {"id":10,"lat":43.5403,"lon":-74.5463}

  ]




  });
});








module.exports = router;

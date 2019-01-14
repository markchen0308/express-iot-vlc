var express = require('express');
var router = express.Router();
//let socketClient = require('../socketclient');
//let DB = require('../DB');
/* GET home page. */
router.get('/', function (req, res, next) {
 // res.render('index', { title: 'Express' });
  res.send('Welcom, This is hybrid VLC lighting system V1.2 .');
});


module.exports = router;

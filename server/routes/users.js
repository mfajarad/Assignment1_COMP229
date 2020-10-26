/* 
  Assignment 1 & 2
  Author: Michelle Fajardo
  SN: 301097601
  SEC: 05
  DATE: OCT. 26, 2020
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;

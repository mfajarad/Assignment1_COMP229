/* 
  Assignment 1 & 2
  Author: Michelle Fajardo
  SN: 301097601
  SEC: 05
  DATE: OCT. 26, 2020
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');
const { performDeletion } = require('../controllers');

let contactController = require('../controllers/contacts')

//helper function for guard purp
function requireAuthen(req, res, next) {
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

/*Get Route for the contact list page - read operation  */
router.get('/', contactController.displayContactList);


/*Get Route for the ADD page - CREATE operation  */
router.get('/add', requireAuthen, contactController.displayAddList);

/*Post Route for the Processing ADD page - CREATE operation  */
router.post('/add', requireAuthen, contactController.processAddList);

/*Get Route for the EDIT page - EDIT operation  */
router.get('/edit/:id', requireAuthen, contactController.displayEditList);

/*Post Route for the Processing EDIT page - UPDATE operation  */
router.post('/edit/:id', requireAuthen, contactController.processEditList);

/*Get Route for the DELETE page - DELETE operation  */
router.get('/delete/:id', requireAuthen, contactController.performDeletion);

module.exports = router;
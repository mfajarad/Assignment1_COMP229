let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to Contacts model
let Contact = require('../models/contacts');

let contactController = require('../controllers/contacts')

/*Get Route for the contact list page - read operation  */
router.get('/', contactController.displayContactList);


/*Get Route for the ADD page - CREATE operation  */
router.get('/add', contactController.displayAddList);

/*Post Route for the Processing ADD page - CREATE operation  */
router.post('/add', contactController.processAddList);

/*Get Route for the EDIT page - EDIT operation  */
router.get('/edit/:id', contactController.displayEditList);

/*Post Route for the Processing EDIT page - UPDATE operation  */
router.post('/edit/:id', contactController.processEditList);

/*Get Route for the DELETE page - DELETE operation  */
router.get('/delete/:id', );

module.exports = router;
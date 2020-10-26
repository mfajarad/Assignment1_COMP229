let express = require('express');
let router = express.Router();

let index_controller = require('../controllers/index')

/* GET HOME page. */
router.get('/', index_controller.homePage);

/* GET HOME page. */
router.get('/home', index_controller.homePage);

/* GET ABOUTME page. */
router.get('/about', index_controller.homePage);

/* GET PROJECTS page. */
router.get('/projects', index_controller.projectsPage);

/* GET SERVICES page. */
router.get('/services', index_controller.servicesPage);

/* GET CONTACTME page. */
router.get('/contact', index_controller.contactMePage);


module.exports = router;

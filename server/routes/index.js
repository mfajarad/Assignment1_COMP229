/* 
  Assignment 1 & 2
  Author: Michelle Fajardo
  SN: 301097601
  SEC: 05
  DATE: OCT. 26, 2020
*/

let express = require('express');
let router = express.Router();

let index_controller = require('../controllers/index')

/* GET HOME page. */
router.get('/', index_controller.homePage);

/* GET HOME page. */
router.get('/home', index_controller.homePage);

/* GET ABOUTME page. */
router.get('/about', index_controller.aboutPage);

/* GET PROJECTS page. */
router.get('/projects', index_controller.projectsPage);

/* GET SERVICES page. */
router.get('/services', index_controller.servicesPage);

/* GET CONTACTME page. */
router.get('/contact', index_controller.contactMePage);

/*Get Route for LOGIN page */
router.get('/login', index_controller.logInPage);

/*Post Route for Processing LOGIN page */
router.post('/login', index_controller.processLoginPage);

/*Get Route for REGISTER page */
router.get('/register', index_controller.registerPage);

/*Post Route for REGISTER page */
router.post('/register', index_controller.processRegisterPage);

/*LOGOUT */
router.post('/logout', index_controller.performLogout);

module.exports = router;

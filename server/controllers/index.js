let express = require('express');
let router = express.Router();

module.exports.homePage = (req, res, next) => {
    res.render('index', {title: "Home"});
}

module.exports.aboutPage = (req, res, next) => {
    res.render('index', { title: 'About Me' });
}

module.exports.projectsPage = (req, res, next) => {
    res.render('index', { title: 'Projects' });
}

module.exports.servicesPage = (req, res, next) => {
    res.render('index', { title: 'Services' });
}

module.exports.contactMePage = (req, res, next) => {
    res.render('index', { title: 'Contact' });
}
const { urlencoded } = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//creating user model instance
let userModel = require('../models/user');
let User = userModel.User; //alias


module.exports.homePage = (req, res, next) => {
    res.render('index', {
        title: "Home", 
        description: "Software is a great combination between artistry and engineering",
        details:"",
        image:"",
        imageHome: "https://i.ibb.co/YphvTPQ/long.png",
        email:"",
        page:"",
        number:"",
        list: "",
        
    });
}

module.exports.aboutPage = (req, res, next) => {
    res.render('index', { 
        title: 'About Me',
        description: "Get to know more about me!",
        details: "I'm Michelle Fajardo. I live in Toronto and I’m studying Software Engineering Technology, currently in my 2nd year now. I enrolled myself in this program because I find it interesting to work with computers and be able to communicate with it by playing with codes",
        image: "https://64.media.tumblr.com/5e98e9f28fcd8925be8072c0a543936f/4b5ff58cd272eddc-ab/s540x810/7760245bc50dc876d148e79cc4f04e2a1d3a45b4.png",
        imageHome: "",
        email:"",
        page:"",
        number:"",
        list: "",
    });
        
}

module.exports.projectsPage = (req, res, next) => {
    res.render('index', { 
        title: 'Projects',
        description: "Projects",
        details:"Mostly projects that I’ve worked on related to software engineering technology are from school projects and as of now, I’m about to start a new project with my groupmates in my COMP 246 subject and still discussing which topic are we going to work on and I would say that it is a bit challenging and different for us as we have to communicate virtually, but on the other hand, it is also great because we could prepare and practice ourselves on future meetings when we get into software company. It’s interesting to work on a project with a team since you get to expand your knowledge about other things as you have to share your thoughts or ideas with the team.",
        image: "",
        imageHome: "https://i.ibb.co/D8jYKTZ/long.png",
        email:"",
        page:"",
        number:"",
        list: "",
    });
}

module.exports.servicesPage = (req, res, next) => {
    res.render('index', { 
        title: 'Services',
        description: "Here are the list of things I do",
        details: "",
        image:"",
        imageHome: "https://i.ibb.co/nc8Qs3N/Computer-2.jpg",
        email:"",
        page:"",
        number:"",
        list: {
            a1: "♣ Web Development",
            a2: "♣ Digital Painting",
            a3: "♣ Traditional Painting",
            a4: "♣ Logo/Brand Making",
            a5: "♣ Code using Programming Languages such as C#, JavaScript, HTML and CSS, Java, Python"
        }
    });
}

module.exports.contactMePage = (req, res, next) => {
    res.render('index', { 
        title: 'Contact',
        description: "Reach out!",
        details:"",
        image:"",
        imageHome: "",
        email:"♣ mfajarad@my.centennialcollege.ca",
        page:"♣ https://www.behance.net/MichelleFajards",
        number:"♣ (437) 779 - XXXX",
        list: "",
    });
}

module.exports.logInPage = (req, res, next) => {
    //check if user is already logged in
    if(!req.user){
        res.render('autho/login', {
            title: "Log In",
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/');
    }
}
module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', 
    (err, user, info) => {
        if(err){
            return next(err);
        }
        //users active?
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user,(err)=>{
            if(err){
                return next(err);
            }
            return res.redirect('/contact-list');
        });
    })(req, res, next);
}

module.exports.registerPage = (req, res, next) => {
    if(!req.user){
        res.render('autho/register', {
            title: "Register",
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        //password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });

    userModel.User.register(newUser, req.body.password, (err) => {
        if(err){
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError"){
                req.flash(
                    'registerMessage', 'Registration Invalid : User already EXISTING'
                );
                console.log('Error: Username exists.')
            }
            return res.render('autho/register', {
                title: "Register",
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else{
            //Success

            //autheticate them

            return passport.authenticate('local')(req, res, () => {
                res.redirect('/contact-list')
            });
        }
    });
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}

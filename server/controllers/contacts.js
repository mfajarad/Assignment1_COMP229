let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Create reference to the model
let Contact = require('../models/contacts');
let contactController = require('../controllers/contacts')

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err){
            return console.error(err);
        } else {
            //console.log(ContactList);
            res.render('contacts/list', {title: 'Contact List', ContactList: contactList})
        }
    });
}

module.exports.displayAddList = (req, res, next) => {
    res.render('contacts/add', {title: 'Add List'})
}

module.exports.processAddList = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "location": req.body.location,
        "gender": req.body.gender
    });

    Contact.create(newContact, (err, Contacts) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //Refresh list
            res.redirect('/contact-list');
        }
    });
}

module.exports.displayEditList = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, editContact) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
           //edit
           res.render('contacts/edit', {title: 'Edit Contact', contact: editContact})  
        }
    });
}

module.exports.processEditList = (req, res, next) => {
    let id = req.params.id;

    let updatedList = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "location": req.body.location,
        "gender": req.body.gender
    });

    Contact.updateOne({_id: id}, updatedList, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh list
            res.redirect('/contact-list');
        }
    });
}

module.exports.displayDeleteList = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id:id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh list
            res.redirect('/contact-list');
        }
    });
}



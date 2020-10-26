/* 
  Assignment 1 & 2
  Author: Michelle Fajardo
  SN: 301097601
  SEC: 05
  DATE: OCT. 26, 2020
*/

let mongoose = require('mongoose');

//create model class
let contacts = mongoose.Schema({
    name: String,
    number: String,
    location: String,
    gender: String,
},
{
    collections: "contacts"
});

module.exports = mongoose.model('Contacts', contacts);
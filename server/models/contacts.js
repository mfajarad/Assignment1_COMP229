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
/* 
  Assignment 1 & 2
  Author: Michelle Fajardo
  SN: 301097601
  SEC: 05
  DATE: OCT. 26, 2020
*/

//require modules for the user model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema(
    {
        username: {
            type: String,
            default: "",
            trim: true,
            required: "Input username"
        },/*
        password: {
            type: String,
            default: "",
            trim: true,
            required: "Input password"
        },*/
        email: {
            type: String,
            default: "",
            trim: true,
            required: "Input e-mail"
        },
        displayName: {
            type: String,
            default: "",
            trim: true,
            required: "Input display name"
        },
        updated: {
            type: String,
            default: Date.now
        }
    },
    {
        collection: "users"
    }
);

//cnfigure options

let options = ({ missingPasswordError: "Re-enter Password"});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    NameSV:  String,
    DateOfBirth: Date,
    Address:String,
    PhoneNumber: String,
    Email: String,
    Class: String,
    Specialized: String,
    Avatar: String,
    Password: String,
    Active: Boolean,
});

module.exports = mongoose.model("User", UserSchema);
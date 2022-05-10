const mongoose = require("mongoose");
var messageScheme = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    message: String
});

var message = mongoose.model("message", messageScheme)

module.exports = message;

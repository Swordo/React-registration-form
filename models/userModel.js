const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }

})

module.exports = mongoose.model('userModel', userSchema, 'react');
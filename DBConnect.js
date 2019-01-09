const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/node', {
    useNewUrlParser: true
}, function (err) {
    if (err) {
        console.log("db has problem check ")
    } else {
        console.log("Database is connected to locally");
    }
});
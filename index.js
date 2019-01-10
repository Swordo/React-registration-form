const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const userModel = require('./models/userModel')
const DB = require('./DBConnect')

const app = express();
const port = 1234;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/info', (req, res) => {
    const customers = [
        { id: 1, name: 'abu' },
        { id: 2, name: 'john' },
        { id: 3, name: 'ali' },
    ]
    res.json(customers)

})
app.post('/', (req, res) => {
    var data = new userModel()
    data.name = req.body.name;
    data.username = req.body.username;
    data.email = req.body.email;
    data.password = req.body.password;
    data.save((err) => {
        if (err) {
            throw err;
        }
        else {
            res.send('Data sent to data base')
        }
    })

})



app.listen(port, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`Server is running... port number is ${port}`)
    }
})
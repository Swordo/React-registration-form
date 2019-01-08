const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 1234;


app.get('/', (req, res) => {
    res.send('workin')
})
app.listen(port, (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Server is running...')
    }
})
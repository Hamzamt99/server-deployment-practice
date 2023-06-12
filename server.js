'use strict'

const express = require('express')
const app = express()

require('dotenv').config();

const cors = require('cors')
app.use(cors())


const PORT = process.env.PORT || 3008

const time = require('./middleware/date')
const notFound = require('./middleware/pageNotFound')
const serverError = require('./middleware/serverError')



app.get('/', time, handleHome)

app.use('*', notFound);

app.use(serverError)

function handleHome(req, res) {
    res.status(200).json({
        code: 200,
        message: 'Welcome to Home page',
        time: req.time
    })
    console.log(req)
}
function test(){
    console.log('test me')
}
function run() {
    app.listen(PORT, () => {
        console.log('ruining on ', PORT)
    })
}

module.exports = {
    app,
    run
}





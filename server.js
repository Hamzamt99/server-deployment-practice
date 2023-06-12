'use strict'

const express = require('express')
const app = express()


const cors = require('cors')
app.use(cors())




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

function run(PORT) {
    app.listen(PORT, () => {
        console.log('ruining on ', PORT)
    })
}

module.exports = {
    app,
    run
}





require('dotenv').config();

const PORT = process.env.PORT || 3008

const {run} = require('./server')
run(PORT);
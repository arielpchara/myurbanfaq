'use static';


// env variaviables
require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', require('./api'));

module.exports = function(port) {
    app.listen(
        port,
        response => {
            console.log(`start in port ${port}`);
        });
}
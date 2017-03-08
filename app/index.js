'use static';

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.ENVIRONMENT !== 'TEST')
    app.use(morgan('dev'));


app.use('/api', require('./api'));

const staticDir = path.join(__dirname, '/web/dist/');
const indexFile = path.join(staticDir, 'index.html');
app.use('/', express.static(__dirname + '/web/dist/'));
app.use((req, res, next) => {
    fs.readFile(
        path.join(staticDir, 'index.html'), 'utf8',
        (err, response) => {
            if (err) {
                console.error(err);
                return next();
            }
            return res.send(response);
        })
})

module.exports = function(port) {
    app.listen(
        port,
        response => {
            console.log(`start in port ${port}`);
        });
    return app;
}
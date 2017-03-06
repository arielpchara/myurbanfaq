'use static';

// env variaviables
require('dotenv').config();
const path = require('path');

const app = require('./app');

app(process.env.PORT);
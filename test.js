require('dotenv').config({ path: './.env-test' });
const path = require('path'),
    globby = require('globby');

const app = require('./index');

const paths = globby.sync(['**/user.test.js', '**/*.test.js'], {
    cwd: path.join(__dirname, 'app/api')
});

paths.map(file => {
    let filepath = path.resolve(__dirname, 'app/api', file);
    require(filepath);
});
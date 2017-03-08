require('dotenv').config({ path: './.env-test' });
const app = require('./index');

require('./app/api/user/user.test');
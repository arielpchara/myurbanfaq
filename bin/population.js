const User = require('../app/api/user/user.model');
const Faq = require('../app/api/faq/faq.model');


// env variaviables
require('dotenv').config();

require('../app/api/conn.db');

Promise.all([
    User.create(require('../test/users.mock')),
    Faq.create(require('../test/faqs.mock'))
]).then(promises => {
    process.exit();
});
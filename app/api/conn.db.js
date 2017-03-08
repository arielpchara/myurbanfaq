var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI).then(
    () => console.log(`Mongoose connected in ${process.env.MONGODB_URI}`)
).catch(err => console.error(err));
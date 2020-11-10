const mongoose = require('mongoose');
const URI = 'mongodb://localhost/jotaspet';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(db=>console.log('DB is connected'))
        .catch(err => console.log(err));

module.exports = mongoose;
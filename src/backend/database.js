const mongoose = require('mongoose');
const URI = 'mongodb+srv://jotaspet:2uVeufqw96TLqh5M@cluster0.dhern.mongodb.net/jotaspet?retryWrites=true&w=majority';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(db=>console.log('DB is connected'))
        .catch(err => console.log(err));

module.exports = mongoose;
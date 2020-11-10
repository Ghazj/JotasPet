const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;
 
const TurnoModel = new Schema({
    author: ObjectId,
    month: {type: Number, required: true},
    day: {type: Number, required: true},
    time: {type: Number, required: true},
    work: {type: String, required: true},
    petName: {type: String, required: true},
    customerName: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    customerAdress: {type: String, required: true},
    customerEmail: {type: String, required: true}
});

module.exports = mongoose.model('turnos', TurnoModel);
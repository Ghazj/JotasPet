const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;
 
const cliente = new Schema({
    author: ObjectId,
    petName: {type: String, required: true},
    customerName: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    customerAdress: {type: String, required: true},
    customerEmail: {type: String, required: true}
});

module.exports = mongoose.model('clientes', cliente);
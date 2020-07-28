const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone_number: { type: Number, required: true, minlength: 10,maxlength: 10 },
    identity: { type: Number, required: true, unique: true },
    reason: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);



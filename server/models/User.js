const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps: true});
// console.log('user',UserSchema);

module.exports = mongoose.model('user', UserSchema);
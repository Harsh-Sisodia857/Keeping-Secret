const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    noOfSecretLeft: {
        type: Number,
        default: 1,
        max: 1,
        min : 0
    }
}, {
    timestamps : true
})

const User = mongoose.model('User',UserSchema)
module.exports = User;
const mongoose = require('mongoose');

// Create a schema for Users
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

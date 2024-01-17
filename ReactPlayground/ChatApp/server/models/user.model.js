const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [3, "Username must be at least 3 characters long"],
        maxlength: [20, "Username must be less than 20 characters long"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minlength: [3, "Email must be at least 3 characters long"],
        maxlength: [50, "Email must be less than 50 characters long"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
        // * Removed maxlength because bcrypt hashes the password and makes it longer than 20 characters
        // maxlength: [20, "Password must be less than 20 characters long"]
    },
    profilePictrure: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
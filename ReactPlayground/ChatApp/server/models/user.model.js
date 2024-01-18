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
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character"]
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
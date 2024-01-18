// Controller for user authentication

// Import the user model and bcrypt
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

// Import router
const router = require('express').Router();

// Register a new user
module.exports.register = (req, res) => {
    // Destructure the request body
    const { username, email, password } = req.body;
    // Create a new user instance using the request body
    const user = new User({ username, email, password });

    // Hash the password
    bcrypt.hash(password, 10)
        .then(hashedPassword => {
            // Set the hashed password to the user object
            user.password = hashedPassword;

            // Save the user to the database
            user.save()
                .then(() => {
                    // If successful, send a json response
                    res.json({ message: "Successfully registered", user: user });
                })
                .catch(err => {
                    // If there are any validation errors, respond with the errors
                    res.status(400).json(err.errors);
                });
        })
        .catch(err => {
            // Handle any error that occurred during password hashing
            console.error(err);
            res.status(500).json({ message: "Internal server error" });
        });
};

// Login a user
module.exports.login = async (req, res) => {
    try {
        // Check if user exists
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Check password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            res.status(400).json({ message: "Invalid password" });
            return;
        }

        // If everything is ok, send a response
        res.status(200).json({ message: "Logged in successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};
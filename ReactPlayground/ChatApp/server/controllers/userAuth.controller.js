// Controller for user authentication

const User = require('../models/user.model');
const bcrypt = require('bcrypt');

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
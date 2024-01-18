// Controller for user actions
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

// Update a user
module.exports.updateUser = async (req, res) => {
    // Check if the user is updating their own profile or if the user is an admin
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        // Check if the password is being updated
        if (req.body.password) {
            // Hash the password
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            // Update the user
            req.body.password = hashedPassword;
        }
        // Update the user
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json({ message: "User updated successfully", user: updatedUser });
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json({ message: "You can only update your own profile" });
    }
};
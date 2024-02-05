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

// Delete a user
module.exports.deleteUser = async (req, res) => {
    // Check if the user is deleting their own profile or if the user is an admin
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        // Delete the user
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "User deleted successfully" });
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json({ message: "You can only delete your own profile" });
    }
};

// Get a user
module.exports.getUser = async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId
            ? await User.findById(userId)
            : await User.findOne({ username: username }); 
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Follow a user
module.exports.followUser = async (req, res) => {
    // Check if the user is following their own profile
    if (req.body.userId !== req.params.id) {
        // Check if the user is already following the user they are trying to follow
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            // Check if the user is already following the user they are trying to follow
            if (!user.followers.includes(req.body.userId)) {
                // Update the user being followed
                await user.updateOne({ $push: { followers: req.body.userId } });
                // Update the user following
                await currentUser.updateOne({ $push: { following: req.params.id } });
                res.status(200).json({ message: "User followed successfully" });
            } else {
                res.status(403).json({ message: "You are already following this user" });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ message: "You cannot follow yourself" });
    }
};

// Unfollow a user
module.exports.unfollowUser = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { following: req.params.id } });
                res.status(200).json({ message: "User unfollowed successfully" });
            } else {
                res.status(403).json({ message: "You are not following this user" });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ message: "You cannot unfollow yourself" });
    }
};
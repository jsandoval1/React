// Controller for posts

const Post = require('../models/post.model');
const User = require('../models/user.model');

// Create a post
module.exports.createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json({ message: "Post created successfully", post: savedPost });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Update a post
module.exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json({ message: "Post updated successfully" });
        } else {
            res.status(403).json({ message: "You can update only your post" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get a post
module.exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({ message: "Post retrieved successfully", post: post });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get timeline posts
module.exports.getTimelinePosts = async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.status(200).json({ message: "Posts retrieved successfully", posts: userPosts.concat(...friendPosts) });
    } catch (err) {
        res.status(500).json(err);
    }
}

// Get all posts of a user
module.exports.getUserPosts = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const posts = await Post.find({ userId: user._id });
        res.status(200).json({ message: "Posts retrieved successfully", posts: posts });
    } catch (err) {
        res.status(500).json(err);
    }
}

// Delete a post
module.exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json({ message: "Post deleted successfully" });
        } else {
            res.status(403).json({ message: "You can delete only your post" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

// Like/Dislike a post
module.exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json({ message: "Post liked successfully" });
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json({ message: "Post disliked successfully" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

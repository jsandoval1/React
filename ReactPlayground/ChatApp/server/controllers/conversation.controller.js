// Controller for conversations
const Conversation = require('../models/conversation.model');

// Create a conversation
module.exports.createConversation = async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    });
    try {
        const savedConversation = await newConversation.save();
        res.status(200).json({ message: "Conversation created successfully", conversation: savedConversation });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get conversations of a user
module.exports.getConversations = async (req, res) => {
    try {
        const conversations = await Conversation.find({
            members: { $in: [req.params.userId] }
        });
        res.status(200).json(conversations);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get conversation including two userId's
module.exports.getConversation = async (req, res) => {
    try {
        const conversation = await Conversation.findOne({
            members: { $all: [req.params.firstUserId, req.params.secondUserId] }
        });
        res.status(200).json(conversation);
    } catch (err) {
        res.status(500).json(err);
    }
};
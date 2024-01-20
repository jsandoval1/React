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

// Get a conversation
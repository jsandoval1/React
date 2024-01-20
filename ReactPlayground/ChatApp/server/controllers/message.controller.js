// Controller for messages
const Message = require('../models/message.model');

// Create a message
module.exports.createMessage = async (req, res) => {
    // Pull conversationId, sender, and text from req.body (According to Message model)
    const newMessage = new Message(req.body);
    try {
        const savedMessage = await newMessage.save();
        res.status(200).json({ message: "Message created successfully", message: savedMessage });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get messages by conversationId
module.exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.conversationId });
        res.status(200).json({ message: "Messages retrieved successfully", messages: messages });
    } catch (err) {
        res.status(500).json(err);
    }
};
// Controller for message related operations

// Importing the Message model
const Message = require('../models/message.model');

// Create a new message
module.exports.createMessage = (request, response) => {
    Message.create(request.body)
        .then(message => {
            console.log("\n Message created: ", message);
            response.json(message);
        })
        .catch(err => {
            console.log("\n Error creating message");
            response.status(400).json(err);
        });
}

// Get all messages
module.exports.getMessages = (request, response) => {
    Message.find({})
        .then(messages => response.json(messages))
        .catch(err => response.json(err))
}

// Get a single message
module.exports.getSingleMessage = (request, response) => {
    Message.findOne({ _id: request.params.id })
        .then(message => {
            console.log("\n Single message: ", message);
            response.json(message);
        })
        .catch(err => response.json(err))
}

// Update a single message
module.exports.updateMessage = (request, response) => {
    Message.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updatedMessage => {
            console.log('Updated message:', updatedMessage);
            response.json(updatedMessage);
        })
        .catch(err => {
            console.error('Error updating message:', err);
            response.status(400).json(err);
        });
}

// Delete a single message
module.exports.deleteMessage = (request, response) => {
    Message.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => {
            console.log("\n Message deleted: ", deleteConfirmation);
            response.json(deleteConfirmation);
        })
        .catch(err => response.json(err))
}
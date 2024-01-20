// Routes for messages

const Message = require('../controllers/message.controller');

module.exports = function(app) {
    app.post("/api/messages", Message.createMessage);
    app.get("/api/messages/:conversationId", Message.getMessages);
}
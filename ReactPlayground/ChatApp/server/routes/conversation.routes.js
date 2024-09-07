// Routes for conversations

const Conversation = require('../controllers/conversation.controller');

module.exports = function(app) {
    app.post("/api/conversations", Conversation.createConversation);
    app.get("/api/conversations/:userId", Conversation.getConversations);
    app.get("/api/conversations/find/:firstUserId/:secondUserId", Conversation.getConversation);
}
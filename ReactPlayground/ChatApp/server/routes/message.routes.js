const messageController = require('../controllers/message.controller');
module.exports = function(app) {
    app.get('/api/messages', messageController.getMessages);
    app.post('/api/messages', messageController.createMessage);
}
const userActions = require("../controllers/userActions.controller");

module.exports = function(app) {
    app.put("/api/users/:id", userActions.updateUser);
}
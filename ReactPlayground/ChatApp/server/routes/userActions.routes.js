const userActions = require("../controllers/userActions.controller");

// DEMO id: 65a9bd025bd40c6152e2115f

module.exports = function(app) {
    app.put("/api/users/:id", userActions.updateUser);
    app.delete("/api/users/:id", userActions.deleteUser);
    // ! Not work because using query string
    // app.get("/api/users/:id", userActions.getUser); 
    // app.get("/api/:id", userActions.getUser);
    app.get("/api/users", userActions.getUser);
    app.put("/api/users/:id/follow", userActions.followUser);
    app.put("/api/users/:id/unfollow", userActions.unfollowUser);
}
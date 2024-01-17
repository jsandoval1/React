const userAuth = require("../controllers/userAuth.controller");

module.exports = function(app) {
    app.post("/register", userAuth.register);
    // app.post("/api/login", userAuth.login);
}
const userAuth = require("../controllers/userAuth.controller");

module.exports = function(app) {
    app.post("/api/register", userAuth.register);
    app.post("/api/login", userAuth.login);
}
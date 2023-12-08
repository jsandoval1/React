// Need to require the controller to be able to use the controller functions in the routes below
const UserController = require('../controllers/user.controller'); 

// The routes below are the endpoints that the front end will be making requests to...
// ... in order to read (GET), create (POST), update (PATCH), and delete (DELETE) users from the database.
module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneSingleUser);
    app.patch('/api/users/:id', UserController.updateExistingUser); // PATCH is used for updating a single field
    app.post('/api/users', UserController.createNewUser);
    app.delete('/api/users/:id', UserController.deleteAnExistingUser);
}

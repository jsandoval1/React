// Create a model using Mongoose that will be used in our Node application sent to React front-end via Express routes and controllers.
// This model will be used to create a collection in our MongoDB database.

// This is experimental, I just want to say Hello world to MongoDB with time stamp
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Message = new Schema({
    message: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', Message);
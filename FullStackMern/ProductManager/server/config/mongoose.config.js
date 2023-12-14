const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

// Replace the uri string with your MongoDB deployment's connection string. So it goes from:
// const uri = `mongodb+srv://${username}:${pw}@YOUR_CONNECTION_STRING_HERE/${dbName}?retryWrites=true&w=majority`;
// to:
const uri = `mongodb+srv://${username}:${pw}@cluster0.wc7844q.mongodb.net/${dbName}?retryWrites=true&w=majority`;
// the username and password are stored in environment variables on the server, so they are not hard-coded in the file.

mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database 🚀"))
    .catch(err => console.log("Something went wrong when connecting to the database ❌", err));
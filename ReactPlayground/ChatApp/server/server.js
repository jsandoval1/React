// Importing the express library, cors, and .env file variables.
// We also invoke express and store the result in a variable called app.
// We can now use app to run methods. As well as use .env variables by invoking process.env.VARIABLE_NAME
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Setting up the port from the .env file
const port = process.env.PORT;

// This will fire our mongoose.connect statement to initialize our database connection
require('./config/mongoose.config');

// Allowing our app to use cors and json and x-www-form-urlencoded
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// This is where we import the product routes function from our product.routes.js file
const AllMyMessageRoutes = require('./routes/message.routes');
AllMyMessageRoutes(app);

// This is running our server on port 8000
app.listen(port, () => console.log(`Listening on port: ${port}👂`));

// Run with "nodemon server.js" and test with Thunder Client in VSCode or Postman.
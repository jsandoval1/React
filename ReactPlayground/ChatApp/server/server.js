// Declare our dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// This is creating our express app by running the express function
const app = express();

// Connect to our database with mongoose
require('./config/mongoose.config');

// This is where we use our middleware, in the order that we want them to run
app.use(helmet()); // Security middleware should come first
app.use(cors()); // Then CORS
app.use(express.json()); // Built-in middleware for parsing JSON
app.use(express.urlencoded({ extended: true })); // Built-in middleware for parsing URL-encoded bodies
app.use(morgan('common')); // Logger should come after the body parsing middleware

// This is where we use our routes
const AllMyUserAuthRoutes = require('./routes/userAuth.routes');
const AllMyUserActionRoutes = require('./routes/userActions.routes');
const AllMyConversationRoutes = require('./routes/conversation.routes');
AllMyUserAuthRoutes(app);
AllMyUserActionRoutes(app);
AllMyConversationRoutes(app);

// This is running our server on port 8000, being accessed from .env file
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port: ${port}👂`));
// Declare our dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
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
app.use(morgan('dev')); // Logger should come after the body parsing middleware

// * Eventually move this to a separate file
const path = require("path");
app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});


const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
});
// *******

// This is where we use our routes
const AllMyUserAuthRoutes = require('./routes/userAuth.routes');
const AllMyUserActionRoutes = require('./routes/userActions.routes');
const AllMyPostRoutes = require('./routes/post.routes');
const AllMyConversationRoutes = require('./routes/conversation.routes');
const AllMyMessageRoutes = require('./routes/message.routes');
AllMyUserAuthRoutes(app);
AllMyUserActionRoutes(app);
AllMyPostRoutes(app);
AllMyConversationRoutes(app);
AllMyMessageRoutes(app);

// This is running our server on port 8000, being accessed from .env file
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port: ${port}👂`));
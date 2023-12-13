const express = require('express');
const cors = require('cors') // This is new
const app = express();
require('dotenv').config();
const port = process.env.PORT;
    
app.use(cors()) // This is new
require('./routes/person.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );

// We just added CORS to our server. For now, we'll allow all requests from all origins.
// For more instructions on the install process and what is CORS, check out notes left on FullStackPractice/client/src/App.jsx


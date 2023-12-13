const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require('./routes/person.routes')(app); // This is new
app.listen(port, () => console.log(`Listening on port: ${port}`));


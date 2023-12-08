const express = require('express');
const app = express();
require ('dotenv').config();
const PORT = process.env.PORT || 5000;

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));

const AllMyRoutes = require('./routes/user.routes');
AllMyRoutes(app);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
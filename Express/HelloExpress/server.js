const express = require("express");
const app = express();

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("You found the API!");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

// To run this server, type 'nodemon server.js' in your terminal
// And visit http://localhost:8000/api to see the data from the route being displayed in the browser
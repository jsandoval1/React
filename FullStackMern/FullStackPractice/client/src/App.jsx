import React from 'react';
import Main from './components/main';
import './App.css';

// In order for our frontend to access our backend and make requests, we need to use CORS.
// CORS stands for Cross-Origin Resource Sharing.
// By default, browsers block requests from different origins.
// An origin is the combination of protocol (http or https), domain (example.com), and port (8000, 3000, etc).

// In the terminal, run the following command: (This is done in the backend/ server folder)
// npm install cors
// Then, in server.js, add the following code:
// const cors = require("cors");
// app.use(cors());
// Now, our frontend will be able to access our backend.

// * When thats done, check (FullStackPractice/server/server.js) to validate that it is using CORS. 
// Run both servers (backend and frontend) and check the browser console to see if the request is successful.

function App() {
  return (
    <div className="App">
      <h1> FullStack Xtra Practice </h1>
      <Main />
    </div>
  );
}
export default App;


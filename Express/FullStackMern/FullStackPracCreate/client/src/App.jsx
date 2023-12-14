import React from 'react';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import MainView from './views/MainView';

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
      <h6>
        Here we are working with rendering components inside views and using axios to make requests to the backend. "Main.jsx" is the view , 
        it contains a brief check to see if the request is successful. "PersonForm.jsx" is the component that is being used in the view.
      </h6>
        <Routes>
          {/* This is the default route and it will render the MainView view, which contains the PersonForm component. */}
          <Route path="/" element={<MainView />} /> 
          {/* This is the route for anu other path. It will render a 404 Not Found page. */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </div>
  );
}
export default App;


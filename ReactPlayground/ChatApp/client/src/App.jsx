import React, { useState, useEffect } from 'react';
import './App.css';

import HomePage from './views/Home/HomePage';
import Profile from './views/Profile/Profile';
import Login from './views/Login/Login';
import Register from './views/Register/Register';

function App() {

  // style function for the headers
  const getHeaderStyle = () => {
    return { 
      backgroundColor: 'lightgray', 
      padding: '10px', 
      fontSize: '2em', 
      color: 'darkblue', 
      border: '2px solid darkblue' 
    };
  };

  return (
    <div>
      <h1 style={getHeaderStyle()}>This should be the homepage</h1>
      <HomePage />
      <h1 style={getHeaderStyle()}>This should be the profile page</h1>
      <Profile />
      <h1 style={getHeaderStyle()}>This should be the login page</h1>
      <Login />
      <h1 style={getHeaderStyle()}>This should be the register page</h1>
      <Register />
    </div>
  );
}

export default App;
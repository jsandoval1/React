import React, { useState, useEffect, useContext } from 'react';
import './App.css';

import HomePage from './views/Home/HomePage';
import Profile from './views/Profile/Profile';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Messenger from './views/Messenger/messenger';

import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

// * Fake login credentials:
// username: "johndoe1"
// email: "johndoe1@example.com"
// password: "password"

// username: "janedoe2"
// email: "janedoe2@example.com"
// password: "password"

// uswername: "johndoe3"
// email: "johndoe3@example.com"
// password: "password"

function App() {
  const {user} = useContext(AuthContext);

  return (
    <div>
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <Login />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/login" element={ user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={ user ? <Navigate to="/" /> : <Register />} />
          <Route path="/messenger" element={ user ? <Messenger /> : <Navigate to="/" />} />
        </Routes>
    </div>
  );
}

export default App;
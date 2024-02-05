import React, { useState, useEffect } from 'react';
import './App.css';

import HomePage from './views/Home/HomePage';
import Profile from './views/Profile/Profile';
import Login from './views/Login/Login';
import Register from './views/Register/Register';

import { Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  );
}

export default App;
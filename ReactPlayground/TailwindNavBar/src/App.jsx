import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="w-full h-screen bg-gray-800 App">
      <Navbar />
      <div className="md:mx-auto md:w-3/4 lg:w-2/3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
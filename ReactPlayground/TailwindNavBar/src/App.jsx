import React from 'react';
import { FaReact } from 'react-icons/fa';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';


// Notes:
// Installed react-icons, Tailwind CSS, and react-router-dom

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        <FaReact />
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App;
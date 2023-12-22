import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Router>
  );
}

export default App;

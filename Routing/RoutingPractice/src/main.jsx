import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// * This is new:
import { BrowserRouter } from 'react-router-dom'
// BrowserRouter is a component that wraps around the entire app and provides routing functionality.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* This is new */}
    <App />
    </BrowserRouter> 
  </React.StrictMode>,
)

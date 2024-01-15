import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/messages')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <p>{message.message}</p> {/* Access the message property of each message object */}
          <p>{message.date}</p> {/* Access the date property of each message object */}
        </div>
      ))}
    </div>
  );
}

export default App;

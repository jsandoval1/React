import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';


function App() {
  // This is the state variable that will be passed down to the MessageDisplay component
  // It is initialized as a string, but will be updated with the new message
  // It is then returned to the App.jsx component
  // setCurrentMsg is updated with the new message from the MessageForm component
  // The MessageDisplay component will then display the currentMsg state variable
  const [currentMsg, setCurrentMsg] = useState("There are no messages");

  //  This is the function that will be passed to the MessageForm component
  //  It takes in a parameter, which is the new message from the MessageForm component
  const youveGotMail = (newMessage) => {
    // It then sets the currentMsg state variable to the new message
    // currentMsg is then passed down to the MessageDisplay component as a prop
    setCurrentMsg(newMessage);
  }

  return (
    <>
      <h3>Message Form and Display</h3>

      {/* onNewMessage is the prop name that will be used in the
     MessageForm component, via props.onNewMessage */}

      {/* youveGotMail is the function that will be passed to the MessageForm component
      via props.onNewMessage */}

      {/* component prop.key ={value of prop} */}
      <MessageForm onNewMessage={youveGotMail} />

      {/* currentMsg is the prop name that will be used in the MessageDisplay component,
      via props.message */}
      <MessageDisplay message={currentMsg} />
    </>
  );
}

export default App;


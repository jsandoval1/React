import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

// Using useParams() to access the city variable from the URL that was passed in from the Link component
// * <Location />
const Location = (props) => { 
  const { city } = useParams(); // <-- use the useParams() hook
    
  return (
    <h1>Welcome to { city }!</h1>
  );
}

function App() {
  return (
    <div className="App">
      <p>
        <Link to="/location/seattle"> Seattle </Link>
        |
        <Link to="/location/chicago"> Chicago </Link>
        |
        <Link to="/location/burbank"> Burbank </Link>
      </p>
      <Routes>
        {/* the ":city" is a variable that can be accessed in the component */}
        <Route path="/location/:city" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react"; // importing State hook

const PersonCard = (props) => {
    // destructuring props:
    // const ({keyvalue names} = props;) to access the values of the props object
    const { firstName, lastName, age, hairColor } = props;
    console.log(props);

    // Setting up state for birthday button
    const [currentAge, setCurrentAge] = useState(age)

    // creating the function that will be passed to the button, which will update the state
    // this function will be passed to the button
    // ? no parameters needed as we are not passing any data to the function
    const handleButtonClick = () => {
        setCurrentAge(currentAge + 1);
        console.log("button clicked");
    }


    return (
        <>
            <h3>{firstName} {lastName} </h3>
            {/* Change this from to currentAge as it is going to be affected by State */}
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            {/* Create button that uses the handleButtonClick function */}
            <button onClick={handleButtonClick} > Increment {firstName}'s age </button>
        </>
    );
}

export default PersonCard;
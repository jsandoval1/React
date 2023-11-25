import React from "react";

const PersonCard = (props) => {
    // destructuring props:
    // const ({keyvalue names} = props;) to access the values of the props object
    const {firstName, lastName, age, hairColor} = props;
    console.log(props);

    return (
        <>
            <h3>{firstName} {lastName} </h3>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </>
    );
}

export default PersonCard;
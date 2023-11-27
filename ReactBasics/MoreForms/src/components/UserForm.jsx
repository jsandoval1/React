import React, { useState } from "react";

const UserForm = (props) => {
    //  create a state variable to hold the form inputs
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //  create a state variable to hold the error messages
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    //  create a state variable to show that a user has been created
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        //* (e) => {} is an anonymous function that takes in an event object
        //  must prevent browser from refreshing or it will reset our state
        e.preventDefault();

        // create a javascript object to hold all the values
        const newUser = { username, email, password };
        console.log("Welcome", newUser); // print the object to the console, just to see if it's working.

        // reset the state values to clear the inputs
        setUserName("");
        setEmail("");
        setPassword("");

        //  update state to show that a user has been created
        setHasBeenSubmitted(true);
    };

    // * create a function to handle the username input, and set the username state.
    // * also, check if the username is valid, and if not, set an error message.
    const handleUserName = (e) => {
        // (e) => {} is an anonymous function that takes in an event object in this case, the onChange event.
        setUserName(e.target.value);
        if (e.target.value.length < 1) {
            setUsernameError("Username is required!");
        } else if (e.target.value.length < 2) {
            setUsernameError("Username must be 2 characters or longer!");
        } else {
            setUsernameError("");
        }
    }

    // repeat for email 
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    // repeat for password
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }

    return (
        <form onSubmit={createUser}>
            {/* Conditional rendering */}
            {/* if hasBeenSubmitted is true, show this message */}
            {hasBeenSubmitted ? (
                <h3>Thank you for submitting the form!</h3>
            ) : (
                <h3>Welcome, please submit the form.</h3>
            )}
            <div>
                <label> Username: </label>
                <input
                    type="text" value={username}
                    onChange={handleUserName}
                    placeholder="Enter Username here">
                </input>
                {/* Error message if any for username */}
                {usernameError ? (
                    <p>{usernameError}</p>
                ) : (
                    ""
                )}
            </div>
            <div>
                <label> Email: </label>
                <input
                    type="text" value={email}
                    onChange={handleEmail}
                    placeholder="Enter Email here">
                </input>
                {/* Error message if any for email */}
                {emailError ? (
                    <p>{emailError}</p>
                ) : (
                    ""
                )}
            </div>
            <div>
                <label> Password: </label>
                <input
                    type="text" value={password}
                    onChange={handlePassword}
                    placeholder="Enter Password here">
                </input>
                {/* Error message if any for password */}
                {passwordError ? (
                    <p>{passwordError}</p>
                ) : (
                    ""
                )}
            </div>
            <div>
                {
                    usernameError || emailError || passwordError ?
                        <input type="submit" value="Create User" disabled></input> :
                        <input type="submit" value="Create User"></input>
                }
            </div>

            {/* JSON to display the state */}
            <p style={{ textDecoration: 'underline', fontStyle: 'italic' }}>Displaying the state:</p>
            <p>{JSON.stringify(username)}</p>
            <p>{JSON.stringify(email)}</p>
            <p>{JSON.stringify(password)}</p>
            <p> Submitted: {JSON.stringify(hasBeenSubmitted)}</p>

        </form>
    );
};

export default UserForm;

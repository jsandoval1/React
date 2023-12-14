import React, { useState } from "react";

const UserForm = (props) => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        // * must prevent browser from refreshing or it will reset our state
        e.preventDefault();

        // create a javascript object to hold all the values
        const newUser = { username, email, password };
        console.log("Welcome", newUser); // print the object to the console, just to see if it's working.

        // reset the state
        setUserName("");
        setEmail("");
        setPassword("");
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label> Username: </label>
                {/* Input involves value, onChange, and placeholder */}
                {/* value is the state variable that holds the value of the input field */}
                {/* onChange is a listener that will fire off every time the user types something into the input field */}
                {/* e.target.value is the value of what the user types in, and we use that to setUserName */}
                <input
                    type="text" value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter Username here">
                </input>
            </div>
            <div>
                <label> Email: </label>
                <input
                    type="text" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email here">
                </input>
            </div>
            <div>
                <label> Password: </label>
                <input
                    type="text" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password here">
                </input>
            </div>
            <input type="submit" value="Create User"></input>

            {/* JSON to display the state */}
            <p>{JSON.stringify(username)}</p>
            <p>{JSON.stringify(email)}</p>
            <p>{JSON.stringify(password)}</p>

        </form>
    );
};

export default UserForm;

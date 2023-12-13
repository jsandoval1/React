import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default () => {
    const [message, setMessage] = useState("Loading...") // Set default message to "Loading..." until the request is made and the response is received

    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);

    return (
        <div>
            <fieldset>
                <legend>Main.jsx component</legend>
                <h2>Message from the backend: {message}</h2>
                <h6>
                    Initially, the message will be "Loading..." because the request is made in the useEffect hook.
                    This wont work with the backend because server is running on port 8000 and the frontend is running on port 3000. 
                    We need to use CORS to allow the frontend to access the backend.
                </h6>
            </fieldset>
        </div>
    )
}


import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default () => {
    const [message, setMessage] = useState("Loading...") // Set default message to "Loading..." until the request is made and the response is received

    useEffect(() => {
        axios.get("http://localhost:8000/api") // * This is the request to the backend using axios and CORS
            .then(res => setMessage(res.data.message))
    }, []);

    return (
        <div>
            <fieldset>
                <legend>Main.jsx component</legend>
                <h2>Message from the backend: {message}</h2>

                {/* Explaining Error */}
                <hr />
                <h6>
                    Without CORS enabled, the request will fail and the message will be "Loading..." forever.
                </h6>

                {/* Explaining CORS */}
                <h6>
                    Initially, the message will be "Loading..." because the request is made in the useEffect hook.
                    This wont work with the backend because server is running on port 8000 and the frontend is running on port 3000.
                    We need to use CORS to allow the frontend to access the backend.
                </h6>

                {/* Explaining Solution */}
                <hr />
                <h6 style={{ color: "green" }}>
                    Once CORS is enabled, the request will be successful and the message will be displayed.
                    You can view 
                    <a href="http://localhost:8000/api"> http://localhost:8000/api </a>
                    in the browser to see the message in JSON format.
                </h6>
                
            </fieldset>
        </div>
    )
}


import react, { useState } from 'react';


const MessageDisplay = (props) => {
    return (
        <>
            <fieldset>
                <legend>MessageDisplay.jsx Component</legend>
                <h5>Current Message</h5>
                <pre>{props.message}</pre>
            </fieldset>
        </>
    );
};

export default MessageDisplay;


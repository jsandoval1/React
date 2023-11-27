import react, { useState } from 'react';


const MessageForm = (props) => {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //  This is the function that was passed down from App.jsx
        //  It takes in a parameter, which is the new message from this component's state
        props.onNewMessage( msg );
    };

    return (
        <fieldset>
            <legend>MessageForm.jsx Component</legend>
            <form onSubmit={handleSubmit}>
                <h5>Set Message</h5>
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="Enter your message here"
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                ></textarea>
                <input type="submit" value="Send Message" />
            </form>
        </fieldset>
    );
};

export default MessageForm;

import React from 'react';

const Contact = () => {
    return (
        <div>
            <fieldset>
                <legend>Contact View, Contact.jsx</legend>
                <h1>Contact Us</h1>
                <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" style={{ marginBottom: '10px' }} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" style={{ marginBottom: '10px' }} />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" style={{ marginBottom: '10px' }} />

                    <button type="submit">Submit</button>
                </form>
            </fieldset>
        </div>
    );
};

export default Contact;

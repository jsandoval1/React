import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">Feel free to reach out to us with any questions or inquiries.</p>
            <form className="max-w-md">
                <label htmlFor="name" className="block mb-2">Name:</label>
                <input type="text" id="name" name="name" className="w-full mb-4 p-2 border border-gray-300 rounded" />

                <label htmlFor="email" className="block mb-2">Email:</label>
                <input type="email" id="email" name="email" className="w-full mb-4 p-2 border border-gray-300 rounded" />

                <label htmlFor="message" className="block mb-2">Message:</label>
                <textarea id="message" name="message" rows="4" className="w-full mb-4 p-2 border border-gray-300 rounded" />

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
        </div>
    );
};

export default Contact;

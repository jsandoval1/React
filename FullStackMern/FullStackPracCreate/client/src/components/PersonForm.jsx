import React, { useState } from 'react'
import axios from 'axios';

// person.model.js is the model for the person object:
// const PersonSchema = new mongoose.Schema({
//     firstName: { type: String },
//     lastName: { type: String }},
//     { timestamps: true }); //? timestamps: true will auto create the fields createdAt and updatedAt


const PersonForm = (props) => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); // matches the model fields
    const [lastName, setLastName] = useState("");

    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', { // * make a post request to backend to create a new person
            firstName,
            lastName
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        // reset the form after submitting
        setFirstName("");
        setLastName("");
    }

    //onChange to update firstName and lastName
    return (
        <fieldset>
            <legend>PersonForm.jsx component( components )</legend>
            <h6>
                on Submit, the form will make a post request to backend to create a new person
                using the firstName and lastName fields from the model via axios. it is making a post request to
                http://localhost:8000/api/people
            </h6>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name</label><br />
                    <input
                        type="text" onChange={(e) => setFirstName(e.target.value)}
                        value={firstName} // Matches the model fields
                    />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input
                        type="text" onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </p>
                <input type="submit" />
            </form>
            <hr />
            <h6>
                If successful, the new person will be added to the database and the form will be reset. Check console for response.
                Or check this link to see the new person in JSON format: <a href="http://localhost:8000/api/people"> http://localhost:8000/api/people </a>
            </h6>
        </fieldset>
    )
}

export default PersonForm;


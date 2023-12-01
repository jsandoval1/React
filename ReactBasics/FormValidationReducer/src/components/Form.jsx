import React from 'react'
import { useReducer } from 'react'

// Set up initial state
const initialState = {
    firstName: {
        value: '', // set value to empty string
        error: null // set error to null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    },
}

// Set up reducer function, which takes in current state and action as arguments
function reducer(state, action) {
    return {
        ...state, // create copy of current state
        [action.type]: action.payload 
        // set action to target the type associated with input, set to payload value
    }
}

// * Main component that renders the form
// Using the reducer function, to be passed into the handleSubmit function
export default function Form() {
    // Pass in reducer and initial state to the useReducer hook.
    // Returns current state and dispatch function
    const [state, dispatch] = useReducer(reducer, initialState);

    // Creating an object containing validation functions for each input field
    const validators = {
        firstName: (value) => {
            if (!value) { // 
                return 'First name is required';
            }
            else if (value.length < 2) {
                return 'First name must be at least 2 characters';
            }
            return null;
        },
        lastName: (value) => {
            if (!value) {
                return 'Last name is required';
            } else if (value.length < 2) {
                return 'Last name must be at least 2 characters';
            }
            return null;
        },
        email: (value) => {
            if (!value) {
                return 'Email is required';
            }
            if (!/\S+@\S+\.\S+/.test(value)) {
                return 'Invalid email format';
            }
            return null;
        }
    };

    // Function to handle onChange event for input fields validation
    function handleChange(e, validator) {
        const { name, value } = e.target;
        const error = validator(value); // set error to value of validator function
        dispatch({
            type: name,
            payload: {
                value,
                error
            }
        });
    }

    // Function to handle onSubmit event for form
    function handleSubmit(e) {
        e.preventDefault();
        const { firstName, lastName, email } = state; // destructure state

        // Set error variables to the value of the validator functions
        const firstNameError = validators.firstName(firstName.value);
        const lastNameError = validators.lastName(lastName.value);
        const emailError = validators.email(email.value); 
        if (firstNameError || lastNameError || emailError) { // if any errors exist
            dispatch({
                type: 'firstName',
                payload: {
                    value: firstName.value,
                    error: firstNameError
                }
            });
            dispatch({
                type: 'lastName',
                payload: {
                    value: lastName.value,
                    error: lastNameError
                }
            });
            dispatch({
                type: 'email',
                payload: {
                    value: email.value,
                    error: emailError
                }
            });
            alert('Please fix errors before submitting'); // alert error message
            return; // exit function
        }
        console.log(state); // log state to console, moved console log before alert to show state
        alert(`Success! ${firstName.value} ${lastName.value}'s email is ${email.value}`); // alert success message
    }


    return (
        <fieldset>
            <legend>Form.jsx Component</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <span>First Name: </span>
                        <input 
                            name="firstName"
                            value={state.firstName.value}
                            onChange={(e) => handleChange(e, validators.firstName)}
                        />
                    </label>
                    <p style={{color: 'red'}}>{state.firstName.error}</p>
                </div>
                <div>
                    <label>
                        <span>Last Name: </span>
                        <input 
                            name="lastName"
                            value={state.lastName.value}
                            onChange={(e) => handleChange(e, validators.lastName)}
                        />
                    </label>
                    <p style={{color: 'red'}}>{state.lastName.error}</p>
                </div>
                <div>
                    <label>
                        <span>Email: </span>
                        <input 
                            name="email"
                            value={state.email.value}
                            onChange={(e) => handleChange(e, validators.email)}
                        />
                    </label>
                    <p style={{color: 'red'}}>{state.email.error}</p>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </fieldset>
        
    )
}

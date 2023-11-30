import React from 'react'
import { useReducer } from 'react'

// Setting up the initial state
const initialState = {
    name: '',
    email: ''
};

// Creating the reducer function
function reducer(state, action) {
    return { // Returning a new state object
        ...state, // Copying the existing state
        [action.type]: action.payload // Updating the value of the key, action.type (name or email), to the value of action.payload (the value of the input)
    };
}

export default function FormWithReducer() {
    const [state, dispatch] = useReducer(reducer, initialState); // Using the reducer hook, passing in the reducer function and the initial state

    // Creating the handleChange function
    function handleChange(e) {
        const { name, value } = e.target; // Destructuring the name and value from the event target
        dispatch({ // Dispatching an action
            type: name, // The action type is the name of the input
            payload: value  // The action payload is the value of the input
        });
    }

    return (
        <div>
            <fieldset>
                <legend>Form With Reducer</legend>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>Name:</span>{' '}
                    <input
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
            </fieldset>
        </div>
    );
}

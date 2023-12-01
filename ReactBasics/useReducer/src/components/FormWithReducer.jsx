import React from 'react'
import { useReducer } from 'react'

// Setting up the initial state
const initialState = {
    name: '',
    email: ''
};

// Reducer takes in the current state and an action as arguments
function reducer(state, action) {
    return {
        // We spread the current state (so we don't throw away any existing state)
        ...state,
        // updates the value of the input that matches the name of the input that was changed to the value of the input
        [action.type]: action.payload
    };
}

// Main component that renders the form
export default function FormWithReducer() {
    // We pass in our reducer and initialState to useReducer hook and it returns the current state and a dispatch function
    const [state, dispatch] = useReducer(reducer, initialState);

    // This function handles the onChange event for the inputs
    function handleChange(e) {
        // We destructure the name and value properties from the event target
        const { name, value } = e.target;
        // We call dispatch
        // We pass in an object with a type property that matches the name of the input that was changed
        // We also pass in a payload property that matches the value of the input that was changed
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            <p>Name (State): {JSON.stringify(state.name)} </p>
            <p>Email (State): {JSON.stringify(state.email)} </p>
            <div>
                <label>
                    <span>Name: </span>
                    <input
                        name="name"
                        value={state.name} // We set the value of the input to the value of the name property on state
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email: </span>
                    <input
                        name="email"
                        value={state.email} // We set the value of the input to the value of the email property on state
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
}

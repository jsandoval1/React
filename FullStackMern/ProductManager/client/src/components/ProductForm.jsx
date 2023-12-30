import React, { useState } from 'react'

// * Notes:
// This is a reusable component that is used in the Main.jsx and EditProduct.jsx views
// It receives the initial values, the onSubmitProp function, and the errors state as props from the corresponding view

const ProductForm = (props) => {
    // State for the form inputs start with the initial values passed in as props from any different view
    const { initialName, initialPrice, initialDescription, onSubmitProp, errors } = props;

    // The initial values are passed in as props from the corresponding view, which is either the Main.jsx (create) or EditProduct.jsx (update) view
    const [name, setName] = useState(initialName);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    // When the form is submitted, prevent the default behavior and invoke the callback function passed in as a prop from the corresponding view
    // Dont need to reset the state because we are redirecting to a different view
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, price, description });
    }

    return (
        <fieldset>
            <legend> ProductForm.jsx Component </legend>
            <h6> ProductForm.jsx is a reusable component that is used in the Main.jsx and EditProduct.jsx views. </h6>
            <form onSubmit={onSubmitHandler}>
                {/* Mapping over the errors state which is passed in as a prop from the corresponding view */}
                {errors.map((err, index) => (
                    <p key={index} style={{ color: 'red' }}>
                        {err}
                    </p>
                ))}
                <p>
                    <label>Name</label><br />
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </p>
                <p>
                    <label>Price</label><br
                    />
                    <input
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </p>
                <p>
                    <label>Description</label><br />
                    <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </p>
                <input type="submit" />
            </form>
        </fieldset>
    )
}

export default ProductForm
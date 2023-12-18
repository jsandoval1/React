import React, { useState } from 'react'


const ProductForm = (props) => {
    // State for the form inputs start with the initial values passed in as props
    const { initialName, initialPrice, initialDescription, onSubmitProp } = props;

    // State for the form inputs, using the initial values passed in as props
    const [name, setName] = useState(initialName);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    // onSubmitHandler to pass the form inputs to the onSubmitProp function passed in as props
    // and reset the form inputs to their initial values
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, price, description });
        setName("");
        setPrice("");
        setDescription("");
    }

    return (
        <form onSubmit={onSubmitHandler}>
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
    )
}

export default ProductForm
import React, { useState } from 'react'
import axios from 'axios'


const ProductForm = (props) => {
    // Destructure props to get addProduct function
    const { addProduct } = props

    // Set up state for form inputs
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    // Create a new product object from state
    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', {
            name,
            price,
            description
        })
            .then(res => {
                console.log(res)
                addProduct(res.data) // Passing response data to addProduct function to update state in Main.jsx
                setName("")
                setPrice("")
                setDescription("")
            })
            .catch(err => console.log(err))
    }


    return (
        <fieldset>
            <legend> ProductForm.jsx(Component) </legend>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label> Name </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    <label> Price </label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    <label> Description </label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <input type="submit" />
            </form>
        </fieldset>
    )
}

export default ProductForm
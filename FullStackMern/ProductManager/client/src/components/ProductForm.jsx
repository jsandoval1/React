import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', {
            name,
            price,
            description
        })
            .then(res => {
                console.log(res)
                // reset the fields after successful post request to the server
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
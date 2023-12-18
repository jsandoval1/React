import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function EditProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/products/${id}`, product)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend> EditProduct.jsx View </legend>
            <h1> Edit Product </h1>
            {loaded &&
                <form onSubmit={updateProduct}>
                    <p>
                        <label>Title</label><br />
                        <input type="text" name="title" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                    </p>
                    <p>
                        <label>Price</label><br />
                        <input type="number" name="price" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
                    </p>
                    <p>
                        <label>Description</label><br />
                        <input type="text" name="description" value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />
                    </p>
                    <input type="submit" value="Update" />
                </form>
            }
        </fieldset>
    )
}

export default EditProduct
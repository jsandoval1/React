import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

// * Note: 
// We are not passing in any props to this component. We are using the id from the url to make a call to the server to get the product to display.
// We are not using any components in this view. We are using the useState and useEffect hooks to make a call to the server to get the product to display.
// Everything is done in this view and we are not passing any props to any components.

const EditProduct = () => {
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
            <h6>
                The id from the url is: {id}. This was obtained using useParams() from react-router-dom. We first used a "get" request to get the product from the server,
                then we set the product state to the response data. We then used the product state to populate the form. And finally, we used a "patch" request to update
                the product in the database.
            </h6>
            {loaded ? (
                <div>
                    <form onSubmit={updateProduct}>
                        <p>
                            <label>Name</label><br />
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
                    <Link to="/"> Home </Link> || <Link to={`/products/${product._id}`}> Product Detail </Link>
                </div>
            ) : (
                <p> Making Axios call to get the product... </p>
            )}
        </fieldset>
    )
}

export default EditProduct
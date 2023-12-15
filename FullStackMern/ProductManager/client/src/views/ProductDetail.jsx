import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


function ProductDetail() {
    // Setting up a single product to display using the id from the url, via useParams()
    const { id } = useParams()

    // Setting State for a single product
    const [product, setProduct] = useState({}) // Server returns an object
    const [loaded, setLoaded] = useState(false)

    // Using useEffect to make a call to the server to get the product to display
    console.log("ProductDetail.jsx")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div className="productDetail">
            <fieldset>
                <legend> ProductDetail.jsx View </legend>
                <p> ProductDetail.jsx to display a single product. </p>
                {
                    loaded ?
                        <div>
                            <p> Name: {product.name} </p>
                            <p> Price: ${product.price} </p>
                            <p> Description: {product.description} </p>
                        </div> :
                        <p> Loading... </p>
                }
            </fieldset>
        </div>
    )
}

export default ProductDetail
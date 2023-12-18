import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Helmet} from 'react-helmet'


function ProductDetail() {
    // Setting up a single product to display using the id from the url, via useParams()
    const { id } = useParams()

    // Setting State for a single product
    const [product, setProduct] = useState({}) // Server returns an object
    const [loaded, setLoaded] = useState(false)

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
            <Helmet>
                <title>
                    {product.name ? 'Product Details: ' + product.name : 'Loading Product...'}
                </title>
            </Helmet>
            <fieldset>
                <legend> ProductDetail.jsx View </legend>
                <h5 style={{ textDecoration: 'underline' }}> ProductDetail.jsx displays a single product passed in from the url. </h5>
                {
                    loaded ?
                        <div>
                            <fieldset>
                                <legend> Product Id from the URL: {product._id} </legend>
                                <p> Name: {product.name} </p>
                                <p> Price: ${product.price} </p>
                                <p> Description: {product.description} </p>
                                <Link to={`/products/${product._id}/edit`}> Edit </Link>
                            </fieldset>
                        </div> :
                        <p> Loading... </p>
                }
                <br /><Link to="/"> Go back to the main page</Link>
            </fieldset>
        </div>
    )
}

export default ProductDetail
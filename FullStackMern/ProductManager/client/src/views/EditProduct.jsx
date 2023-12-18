import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import ProductForm from '../components/ProductForm'

// * Notes:
// We are reusing the ProductForm component => DRY
// This is done by passing in the onSubmitProp function and the initial values as props
// where we are using the ProductForm component in the return statement

const EditProduct = (props) => {
    // Params and navigate
    const { id } = useParams();
    const navigate = useNavigate();

    // State
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    // useEffect to get the product information
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    // Update the product passed in as an argument
    const updateProduct = product => {
        axios.patch(`http://localhost:8000/api/products/${id}`, product)
            .then(res => {
                console.log(res);
                navigate(`/products/${id}`); // Navigate to the details page
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="editProduct">
            {/* Helmet to set the title of the page */}
            < Helmet >
                <title> {product.name ? 'Edit ' + product.name : 'Loading...'} </title>
            </Helmet >

            {/* Conditional rendering to display the product information or a loading message */}
            <fieldset>
                <legend> EditProduct.jsx View </legend>
                {loaded ? (
                    <ProductForm
                    //* Pass in the onSubmitProp function and the initial values as props
                        onSubmitProp={updateProduct} // onSubmitProp is the updateProduct function
                        initialName={product.name} // initialName, initialPrice, and initialDescription are the product information
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                ) : (
                    <p> Retrieving product information.. </p>
                )}
            </fieldset>

        </div>
    )
}

export default EditProduct
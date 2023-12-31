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

// TODO:
// I would like come back to this and use localStorage 
// to pass a success message to the details page upon successful update

const EditProduct = (props) => {
    // Params and navigate
    const { id } = useParams();
    const navigate = useNavigate();

    // State to manage the:
    // - product information
    // - whether the product information has been retrieved
    // - errors (passing in the errors state to the ProductForm component)
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    // GET request to retrieve the product information
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const updateProduct = product => {
        axios.patch(`http://localhost:8000/api/products/${id}`, product)
            .then(res => {
                navigate(`/products/${id}`);
            })
            .catch(err => {
                // Store the err response in a variable, then loop through the object to push the error messages to an array, and finally set the errors state
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
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
                        // onSubmitProp is the updateProduct function
                        onSubmitProp={updateProduct}
                        // initialName, initialPrice, and initialDescription are the product information
                        initialName={product.name}
                        initialPrice={product.price}
                        initialDescription={product.description}
                        // Pass in the errors state
                        errors={errors}
                    />
                ) : (
                    <p> Retrieving product information.. </p>
                )}
            </fieldset>

        </div>
    )
}

export default EditProduct
import React from 'react'
import { useState, useEffect } from 'react'
import ProductForm from '../components/ProductForm'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

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
            <fieldset>
                <legend> EditProduct.jsx View </legend>
                {loaded ? (
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialName={product.name}
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